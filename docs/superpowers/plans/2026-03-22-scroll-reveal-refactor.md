# Scroll Reveal Animation Refactor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the broken `useLatchedInView` animation system with a centralized `useScrollReveal` hook using native IntersectionObserver, plus a `RevealRegistry` context for force-revealing sections on button click navigation.

**Architecture:** A new `useScrollReveal` hook wraps native IntersectionObserver with latching behavior and exposes `forceReveal()`. A `RevealRegistryProvider` context allows multiple elements to register under a shared `sectionId`, and navigation buttons call `forceRevealSection(id)` before scrolling. motion/react is kept for the animation layer (opacity, y, blur transitions).

**Tech Stack:** React 18, motion/react (Framer Motion), TypeScript, native IntersectionObserver API.

**Spec:** `docs/superpowers/specs/2026-03-22-scroll-reveal-refactor-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `src/hooks/useRevealRegistry.tsx` | **Create** | React Context + Provider for section registration and forceReveal dispatch |
| `src/hooks/useScrollReveal.ts` | **Create** | Hook wrapping native IntersectionObserver with latching + stagger delay + registry integration |
| `src/app/App.tsx` | **Modify** | Wrap app content with `RevealRegistryProvider` |
| `src/imports/Desktop144.tsx` | **Modify** | Replace all `useLatchedInView` usages, update scroll button handlers, remove old code |

---

**Note:** Line numbers refer to the file's initial state. After each task modifies `Desktop144.tsx`, line numbers shift. Always locate functions by name, not line number.

---

## Task 1: Create `useRevealRegistry.tsx`

**Files:**
- Create: `src/hooks/useRevealRegistry.tsx`

- [ ] **Step 1: Create the RevealRegistry context and provider**

```tsx
// src/hooks/useRevealRegistry.tsx
import { createContext, useCallback, useContext, useRef, type ReactNode } from 'react';

interface RevealRegistry {
  register: (sectionId: string, forceRevealFn: () => void) => void;
  unregister: (sectionId: string, forceRevealFn: () => void) => void;
  forceRevealSection: (sectionId: string) => void;
}

const RevealRegistryContext = createContext<RevealRegistry | null>(null);

export function RevealRegistryProvider({ children }: { children: ReactNode }) {
  const registryRef = useRef<Map<string, Set<() => void>>>(new Map());

  const register = useCallback((sectionId: string, forceRevealFn: () => void) => {
    const registry = registryRef.current;
    if (!registry.has(sectionId)) {
      registry.set(sectionId, new Set());
    }
    registry.get(sectionId)!.add(forceRevealFn);
  }, []);

  const unregister = useCallback((sectionId: string, forceRevealFn: () => void) => {
    const registry = registryRef.current;
    const fns = registry.get(sectionId);
    if (fns) {
      fns.delete(forceRevealFn);
      if (fns.size === 0) {
        registry.delete(sectionId);
      }
    }
  }, []);

  const forceRevealSection = useCallback((sectionId: string) => {
    const fns = registryRef.current.get(sectionId);
    if (fns) {
      fns.forEach((fn) => fn());
    }
  }, []);

  return (
    <RevealRegistryContext.Provider value={{ register, unregister, forceRevealSection }}>
      {children}
    </RevealRegistryContext.Provider>
  );
}

export function useRevealRegistry() {
  const ctx = useContext(RevealRegistryContext);
  if (!ctx) {
    throw new Error('useRevealRegistry must be used within RevealRegistryProvider');
  }
  return ctx;
}
```

- [ ] **Step 2: Verify file compiles**

Run: `npx tsc --noEmit src/hooks/useRevealRegistry.tsx` or just check for IDE errors.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useRevealRegistry.tsx
git commit -m "feat: add RevealRegistryProvider for section force-reveal"
```

---

## Task 2: Create `useScrollReveal.ts`

**Files:**
- Create: `src/hooks/useScrollReveal.ts`

- [ ] **Step 1: Create the useScrollReveal hook**

```ts
// src/hooks/useScrollReveal.ts
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRevealRegistry } from './useRevealRegistry';

// Uniform reveal constants
export const REVEAL_THRESHOLD = 0.15;
export const REVEAL_MARGIN = '0px 0px 12% 0px';
export const REVEAL_Y = 60;
export const REVEAL_BLUR = 6;
export const REVEAL_DURATION = 0.9;
export const REVEAL_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
export const REVEAL_STAGGER = 0.18;

interface UseScrollRevealOptions {
  sectionId?: string;
  threshold?: number;
  rootMargin?: string;
  staggerIndex?: number;
  staggerDelay?: number;
}

export function useScrollReveal({
  sectionId,
  threshold = REVEAL_THRESHOLD,
  rootMargin = REVEAL_MARGIN,
  staggerIndex = 0,
  staggerDelay = REVEAL_STAGGER,
}: UseScrollRevealOptions = {}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<Element | null>(null);
  const isRevealedRef = useRef(false);

  const registry = useRevealRegistry();

  const forceReveal = useCallback(() => {
    if (!isRevealedRef.current) {
      isRevealedRef.current = true;
      setIsRevealed(true);
      // Disconnect observer since we're revealed
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    }
  }, []);

  // Register with the reveal registry (only if sectionId is provided)
  useEffect(() => {
    if (sectionId) {
      registry.register(sectionId, forceReveal);
      return () => {
        registry.unregister(sectionId, forceReveal);
      };
    }
  }, [sectionId, registry, forceReveal]);

  // Ref callback for the target element
  const ref = useCallback(
    (node: Element | null) => {
      // Cleanup previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      elementRef.current = node;

      // Don't observe if already revealed or no node
      if (isRevealedRef.current || !node) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !isRevealedRef.current) {
              isRevealedRef.current = true;
              setIsRevealed(true);
              observer.unobserve(entry.target);
              observer.disconnect();
              observerRef.current = null;
            }
          }
        },
        { threshold, rootMargin },
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [threshold, rootMargin],
  );

  const delay = staggerIndex * staggerDelay;

  return { ref, isRevealed, forceReveal, delay };
}
```

- [ ] **Step 2: Verify file compiles**

Check for IDE/TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useScrollReveal.ts
git commit -m "feat: add useScrollReveal hook with native IntersectionObserver"
```

---

## Task 3: Wrap App with `RevealRegistryProvider`

**Files:**
- Modify: `src/app/App.tsx`

- [ ] **Step 1: Add the provider import and wrap the app**

In `src/app/App.tsx`, add the import at line 1-4 area:
```tsx
import { RevealRegistryProvider } from "../hooks/useRevealRegistry";
```

Wrap the outer `<div>` content with the provider. The return becomes:
```tsx
return (
  <RevealRegistryProvider>
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <div className="w-full h-[4521px] relative overflow-y-hidden">
        <Desktop introActive={isHeroIntroActive} />
      </div>

      {isSplashVisible ? (
        <LoaderSplash
          onScreenExitStart={handleSplashExitStart}
          onComplete={() => {
            flushSync(() => {
              setIsSplashVisible(false);
            });
          }}
        />
      ) : null}
    </div>
  </RevealRegistryProvider>
);
```

- [ ] **Step 2: Verify the app still loads in browser**

Run: `npm run dev` — check that the site loads without errors in the console.

- [ ] **Step 3: Commit**

```bash
git add src/app/App.tsx
git commit -m "feat: wrap App with RevealRegistryProvider"
```

---

## Task 4: Migrate TeamMask to `useScrollReveal`

**Files:**
- Modify: `src/imports/Desktop144.tsx:2213-2246` (TeamMask component)

- [ ] **Step 1: Add imports at the top of Desktop144.tsx**

Add this import (line 2, alongside existing imports):
```tsx
import { useScrollReveal, REVEAL_Y, REVEAL_BLUR, REVEAL_DURATION, REVEAL_EASE } from '../hooks/useScrollReveal';
```

- [ ] **Step 2: Rewrite TeamMask**

Replace the entire `TeamMask` function (lines 2213-2246) with:

```tsx
function TeamMask() {
  const reduced = useReducedMotion();
  const { ref, isRevealed } = useScrollReveal({ sectionId: 'team' });

  return (
    <div
      ref={ref}
      className="absolute h-[353px] left-[335.5px] top-[827.37px] w-[769px]"
      data-name="Team Mask"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
        animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: 0 }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[384.77px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.273px_0.484px] mask-size-[768.66px_353.049px] text-[300px] text-center top-[194.52px] whitespace-nowrap"
          style={{
            maskImage: `url('${imgTeam}')`,
            color: 'transparent',
            background: 'linear-gradient(180deg, rgba(216,216,216,0.78) 0%, rgba(216,216,216,0.18) 72%, rgba(216,216,216,0) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}>
          <p className="leading-[normal]">Team</p>
        </div>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Scroll to the Team section — the "Team" text should animate in with blur + slide up when 15% visible.

- [ ] **Step 4: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "refactor: migrate TeamMask to useScrollReveal"
```

---

## Task 5: Migrate Team (Oscar + Benjamin cards)

**Files:**
- Modify: `src/imports/Desktop144.tsx:2460-2490` (Team component)

- [ ] **Step 1: Rewrite Team component**

Replace the entire `Team` function (lines 2460-2490) with:

```tsx
function Team() {
  const reduced = useReducedMotion();
  const oscar = useScrollReveal({ sectionId: 'team', staggerIndex: 0 });
  const benjamin = useScrollReveal({ sectionId: 'team', staggerIndex: 1 });

  return (
    <div className="-translate-x-1/2 absolute h-[240.496px] left-1/2 top-[1117.87px] w-[783.209px]" data-name="Team">
      {/* Card 1 — Oscar VORTICE */}
      <motion.div
        ref={oscar.ref}
        className="absolute left-0 top-0 w-[783.209px] h-full"
        initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
        animate={oscar.isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: oscar.delay }}
      >
        <TestimonialColumn />
      </motion.div>
      {/* Card 2 — Benjamin BOTELLA */}
      <motion.div
        ref={benjamin.ref}
        className="absolute left-0 top-0 w-[783.209px] h-full"
        initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
        animate={benjamin.isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: benjamin.delay }}
      >
        <TestimonialColumn1 />
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Scroll to Team section — Oscar card should animate first, then Benjamin 0.18s later.

- [ ] **Step 3: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "refactor: migrate Team cards to useScrollReveal with stagger"
```

---

## Task 6: Migrate OffresGroupe (MaskGroup + Offres)

**Files:**
- Modify: `src/imports/Desktop144.tsx:1724-1750` (MaskGroup)
- Modify: `src/imports/Desktop144.tsx:2134-2176` (Offres, OffresGroupe)

- [ ] **Step 1: Rewrite MaskGroup to accept `isRevealed` prop instead of `animateIn`**

Replace `MaskGroup` function (lines 1724-1750):

```tsx
function MaskGroup({
  isRevealed,
}: {
  isRevealed: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="-translate-x-1/2 absolute h-[353px] left-1/2 top-[2117.32px] w-[897px]"
      data-name="Mask Group"
      initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
      animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: 0 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[448.61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.111px_0px] mask-size-[896.66px_353.049px] text-[300px] text-center top-[195px] whitespace-nowrap"
        style={{
          maskImage: `url('${imgOffres}')`,
          color: 'transparent',
          background: 'linear-gradient(180deg, rgba(216,216,216,0.78) 0%, rgba(216,216,216,0.18) 72%, rgba(216,216,216,0) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}>
        <p className="leading-[normal]">Offres</p>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Rewrite OfferCard to use REVEAL constants instead of old CARD constants**

In the `OfferCard` function (lines 1957-1992), replace the `animateIn` prop with `isRevealed`, remove `cardTriggerRef`, and update the animation:

Change the function signature and the `motion.div` wrapper:

```tsx
function OfferCard({
  isRevealed,
}: {
  isRevealed: boolean;
}) {
```

Replace the `motion.div` at the top of the return (line 1987-1992):

```tsx
    <motion.div
      className="absolute left-0 top-0 w-full"
      initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
      animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: 0 }}
    >
```

Also remove the `ref={cardTriggerRef}` from the inner div (line 1996) — it was the old observer trigger:

```tsx
      {/* Before: <div ref={cardTriggerRef} className="..."> */}
      <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[2406.12px]">
```

- [ ] **Step 3: Rewrite Offres to pass `isRevealed` instead of `animateIn`**

Replace `Offres` function (lines 2134-2149):

```tsx
function Offres({
  isRevealed,
}: {
  isRevealed: boolean;
}) {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[2406.12px]" data-name="Offres">
      <OfferCard isRevealed={isRevealed} />
    </div>
  );
}
```

- [ ] **Step 4: Rewrite OffresGroupe to use useScrollReveal**

**IMPORTANT:** The wrapper div has `display: contents` (via Tailwind's `contents` class), which removes it from the layout. IntersectionObserver cannot observe an element with no layout box. The `ref` must go on the `#offres` anchor div instead, which has actual dimensions.

Replace `OffresGroupe` function (lines 2151-2176):

```tsx
function OffresGroupe() {
  const { ref, isRevealed } = useScrollReveal({ sectionId: 'offres' });

  return (
    <>
      <div
        ref={ref}
        id="offres"
        aria-hidden="true"
        className="-translate-x-1/2 absolute left-1/2 pointer-events-none"
        style={{ top: 2117.32, width: 897, height: 700 }}
      />
      <div className="-translate-x-1/2 absolute contents left-1/2 top-[2117.32px]" data-name="Offres Groupe">
        <MaskGroup isRevealed={isRevealed} />
        <Offres isRevealed={isRevealed} />
      </div>
    </>
  );
}
```

Note: The observer ref is placed on the anchor div with real dimensions (width: 897, height: 700 covering the offres area). The `id="offres"` is kept on this div so scroll-to-anchor still works. Its `top` is moved to 2117.32 (start of the visual section) so the observer triggers at the right scroll position.

- [ ] **Step 4: Verify in browser**

Scroll to Offres section — both "Offres" text and the offer card should animate in together.

- [ ] **Step 5: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "refactor: migrate OffresGroupe to useScrollReveal"
```

---

## Task 7: Migrate Cta (planet card)

**Files:**
- Modify: `src/imports/Desktop144.tsx:881-911` (Cta component)

- [ ] **Step 1: Rewrite Cta component**

Replace the `Cta` function (lines 881-911):

```tsx
function Cta() {
  const reduced = useReducedMotion();
  const { ref, isRevealed } = useScrollReveal({ sectionId: 'cta' });

  return (
    <div
      ref={ref}
      className="absolute overflow-hidden rounded-[25px] -translate-x-1/2 left-1/2"
      data-name="CTA"
      style={{ top: 3405.7, width: 889, height: 439 }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[25px]"
        initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
        animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: 0 }}
      >
        <UpMe />
        <EarthBackground />
        <CtaBottomGradient />
        <CallToActionContainer />
        <TestimonialInfo />
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Scroll to the CTA planet card area — should animate in smoothly.

- [ ] **Step 3: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "refactor: migrate Cta to useScrollReveal"
```

---

## Task 8: Migrate InfinifyMask

**Files:**
- Modify: `src/imports/Desktop144.tsx:2178-2211` (InfinifyMask component)

- [ ] **Step 1: Rewrite InfinifyMask**

Replace the `InfinifyMask` function (lines 2178-2211):

```tsx
function InfinifyMask() {
  const reduced = useReducedMotion();
  const { ref, isRevealed } = useScrollReveal({ sectionId: 'infinify' });

  return (
    <div
      ref={ref}
      className="-translate-x-1/2 absolute h-[353px] left-[calc(50%-3.55px)] top-[3934.38px] w-[1057px]"
      data-name="Infinify Mask"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
        animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: 0 }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[528.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-19.5px_0px] mask-size-[1056.66px_353.049px] text-[300px] text-center top-[195px] whitespace-nowrap"
          style={{
            maskImage: `url('${imgInfinify}')`,
            color: 'transparent',
            background: 'linear-gradient(180deg, rgba(216,216,216,0.78) 0%, rgba(216,216,216,0.18) 72%, rgba(216,216,216,0) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}>
          <p className="leading-[normal]">Infinify</p>
        </div>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Scroll to the Infinify text near the footer — should animate with blur + slide up.

- [ ] **Step 3: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "refactor: migrate InfinifyMask to useScrollReveal"
```

---

## Task 9: Migrate Footer (BackgroundContainer + ContentGroup)

**Files:**
- Modify: `src/imports/Desktop144.tsx:191-214` (BackgroundContainer)
- Modify: `src/imports/Desktop144.tsx:363-389` (ContentGroup)

- [ ] **Step 1: Rewrite BackgroundContainer**

Replace the `BackgroundContainer` function (lines 191-214):

```tsx
function BackgroundContainer() {
  const reduced = useReducedMotion();
  const { ref, isRevealed, delay } = useScrollReveal({ sectionId: 'footer', staggerIndex: 0 });

  return (
    <div
      ref={ref}
      className="absolute -translate-x-1/2 h-[269.561px] left-1/2 top-[4251.44px] w-[100dvw]"
      data-name="Background Shape"
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
        animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay }}
      />
    </div>
  );
}
```

- [ ] **Step 2: Rewrite ContentGroup**

Replace the `ContentGroup` function (lines 363-389):

```tsx
function ContentGroup() {
  const reduced = useReducedMotion();
  const { ref, isRevealed, delay } = useScrollReveal({ sectionId: 'footer', staggerIndex: 1 });

  return (
    <div
      ref={ref}
      className="-translate-x-1/2 absolute content-stretch flex gap-[620px] items-start leading-[0] left-1/2 top-[4298.87px] w-[1211px]"
      data-name="Content Group"
    >
      <motion.div
        className="content-stretch flex gap-[620px] items-start leading-[0] w-full"
        initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
        animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay }}
      >
        <ContentColumn />
        <LegalLinks />
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Scroll to the footer — background should animate first, then content 0.18s later.

- [ ] **Step 4: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "refactor: migrate Footer to useScrollReveal with stagger"
```

---

## Task 10: Add scroll-reveal to Realisations

**Files:**
- Modify: `src/imports/Desktop144.tsx:1252-1319` (Realisations component)

This section currently has NO scroll-reveal — we are adding one. The reveal wraps the outermost container div; internal carousel logic is untouched.

- [ ] **Step 1: Add useScrollReveal to Realisations**

At the top of the `Realisations` function (after the existing state declarations around line 1258), add:

```tsx
const reduced = useReducedMotion();
const { ref: revealRef, isRevealed } = useScrollReveal({ sectionId: 'realisations' });
```

Then wrap the return's outermost `<div>` (at line 1319) with a ref and motion wrapper. Change:

```tsx
return (
  <div className="absolute" style={{ left: 166.28, top: 1472.03, width: 957, height: 606 }} data-name="Réalisations">
```

To:

```tsx
return (
  <motion.div
    ref={revealRef}
    className="absolute"
    style={{ left: 166.28, top: 1472.03, width: 957, height: 606 }}
    data-name="Réalisations"
    initial={{ opacity: 0, y: reduced ? 0 : REVEAL_Y, filter: reduced ? 'blur(0px)' : `blur(${REVEAL_BLUR}px)` }}
    animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
    transition={{ duration: reduced ? 0 : REVEAL_DURATION, ease: REVEAL_EASE, delay: 0 }}
  >
```

Also change the corresponding closing `</div>` to `</motion.div>`.

- [ ] **Step 2: Verify in browser**

Scroll to the Realisations carousel — it should now fade/slide in. Internal carousel navigation should still work.

- [ ] **Step 3: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "feat: add scroll-reveal animation to Realisations section"
```

---

## Task 11: Update scroll button handlers

**Files:**
- Modify: `src/imports/Desktop144.tsx:2646-2655` (Cta2 / scrollToOffres)
- Modify: `src/imports/Desktop144.tsx:2678-2681` (CtaRealisations / scrollToRealisations)

- [ ] **Step 1: Add useRevealRegistry import**

At the top of the file, add to the existing imports:

```tsx
import { useRevealRegistry } from '../hooks/useRevealRegistry';
```

- [ ] **Step 2: Update Cta2 component's scrollToOffres**

Inside the `Cta2` component (find where `scrollToOffres` is defined, around line 2646), add the registry hook and update the handler.

Add at the top of the component function:
```tsx
const { forceRevealSection } = useRevealRegistry();
```

Replace the `scrollToOffres` function:
```tsx
const scrollToOffres = (e: React.MouseEvent) => {
  e.preventDefault();
  forceRevealSection('offres');
  const target = document.getElementById('offres');
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.15;
  window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
};
```

- [ ] **Step 3: Update CtaRealisations component's scrollToRealisations**

Inside the `CtaRealisations` component (find where `scrollToRealisations` is defined, around line 2678), add the registry hook and update the handler.

Add at the top of the component function:
```tsx
const { forceRevealSection } = useRevealRegistry();
```

Replace the `scrollToRealisations` function to use `window.scrollTo` for consistency:
```tsx
const scrollToRealisations = (e: React.MouseEvent) => {
  e.preventDefault();
  forceRevealSection('realisations');
  const target = document.querySelector('[data-name="Réalisations"]');
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.15;
  window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
};
```

Note: `CtaRealisations` needs access to `reduced` — check if `useReducedMotion()` is already called in that component. If not, add `const reduced = useReducedMotion();` at the top.

- [ ] **Step 4: Verify in browser**

Click "Voir nos offres" — should smooth scroll to offers section with the animation playing on arrival. Click "Voir nos realisations" — should scroll to carousel with animation playing.

- [ ] **Step 5: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "feat: integrate forceRevealSection in scroll button handlers"
```

---

## Task 12: Remove old code

**Files:**
- Modify: `src/imports/Desktop144.tsx`

- [ ] **Step 1: Remove `useLatchedInView` hook**

Delete the entire function at lines 174-189:
```tsx
function useLatchedInView<T extends Element>(
  ...
}
```

- [ ] **Step 2: Remove `getScrollRevealTransition` function**

Delete the entire function at lines 156-172:
```tsx
function getScrollRevealTransition({
  ...
}
```

- [ ] **Step 3: Remove old constants that are no longer used**

Remove these constants (around lines 56-63):
- `SECTION_VIEWPORT` (was `{ once: true, amount: 0.35 }`)
- `TEAM_VIEWPORT` (was `{ once: true, amount: 0.5 }`)
- `REVEAL_MARGIN` (replaced by import from useScrollReveal)
- `OFFERS_REVEAL_MARGIN` (no longer needed)
- `OFFERS_SCROLL_OFFSET_RATIO` (inlined as `0.15` in button handlers)
- `SECTION_Y` (only used by TeamMask, now migrated)
- `SECTION_DURATION` (only used by MaskGroup and TeamMask, both migrated)
- `CARD_EASE`, `CARD_DURATION`, `CARD_Y` (were used by OfferCard + sections, all now use REVEAL constants)
- `FOOTER_EASE`, `FOOTER_DURATION`, `FOOTER_Y` (replaced by REVEAL constants)

**Keep** `SECTION_EASE` — still used by hero intro animations (Cta2, CtaRealisations, Frame12 transitions)

- [ ] **Step 4: Remove unused `useInView` import**

In the import line (line 2):
```tsx
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
```

Check if `useInView` is still used anywhere else in the file. If not, remove it:
```tsx
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
```

- [ ] **Step 5: Verify the app compiles and runs**

Run: `npm run dev` — verify no errors in console, all animations still work.

- [ ] **Step 6: Commit**

```bash
git add src/imports/Desktop144.tsx
git commit -m "chore: remove useLatchedInView, getScrollRevealTransition, and old reveal constants"
```

---

## Task 13: Full integration verification

- [ ] **Step 1: Test all scroll-reveal animations**

Open the site in browser and manually verify each section:

1. **Team section**: Scroll down — "Team" text fades in, then Oscar card, then Benjamin card with stagger
2. **Realisations**: Scroll down — carousel fades in, internal navigation still works
3. **Offres**: Scroll down — "Offres" text and offer card animate in together
4. **CTA planet card**: Scroll down — card animates in
5. **Infinify text**: Scroll down — text animates in near footer
6. **Footer**: Scroll down — background animates first, content 0.18s later

- [ ] **Step 2: Test button navigation**

1. Click "Voir nos offres" — scrolls to offers, section is visible and animates on arrival
2. Scroll back up — intermediate sections that weren't visited animate when reached
3. Reload page, click "Voir nos realisations" — scrolls to carousel, animates on arrival

- [ ] **Step 3: Test edge cases**

1. Rapid scroll through all sections — all animations trigger correctly
2. Click "Voir nos offres" multiple times rapidly — no errors, section stays visible
3. Resize window — unrevealed sections still trigger correctly when scrolled to

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "refactor: complete scroll-reveal animation system migration"
```
