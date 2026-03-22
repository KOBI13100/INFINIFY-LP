# Scroll Reveal Animation Refactor

**Date:** 2026-03-22
**Status:** Approved

## Problem

The site's scroll-based animations are broken. They use `useLatchedInView` (wrapping motion/react's `useInView`) with `once: true` and high visibility thresholds (0.35-0.5). This causes:

1. **Navigation bug**: Clicking "Voir nos offres" scrolls to `#offres`, but the section stays hidden (opacity: 0, y: 60px) because the IntersectionObserver doesn't reliably detect programmatic scroll
2. **Inconsistent thresholds**: Each section uses different `amount` and `margin` values, making animations unpredictable
3. **Unreliable triggers**: High thresholds (50%) mean sections often don't animate on fast scrolls or small viewports

## Solution

Replace the fragmented `useLatchedInView` system with a centralized `useScrollReveal` hook using native IntersectionObserver, plus a `RevealRegistry` context that allows navigation buttons to force-reveal target sections.

## Architecture

### 1. Hook: `useScrollReveal`

**File:** `src/hooks/useScrollReveal.ts`

```typescript
interface UseScrollRevealOptions {
  threshold?: number;      // default 0.15
  rootMargin?: string;     // default '0px 0px 12% 0px'
  staggerIndex?: number;   // 0, 1, 2... for delay between cards
  staggerDelay?: number;   // default 0.18s between elements
}

interface UseScrollRevealReturn {
  ref: React.RefCallback<Element>;
  isRevealed: boolean;
  forceReveal: () => void;
}
```

**Behavior:**
- Creates a native `IntersectionObserver` per element
- When threshold is reached: `isRevealed = true` (latched, never reverts to false)
- `forceReveal()`: sets `isRevealed = true` without waiting for observer
- Disconnects observer once revealed (performance)
- Respects `prefers-reduced-motion` via `useReducedMotion()` from motion/react

**RefCallback lifecycle:**
- Observer is created when the ref receives a non-null element (mount)
- Observer is disconnected when either: (a) element is revealed, or (b) ref receives null (unmount)
- If the ref target changes (re-render), the old observer is disconnected and a new one is created for the new element

**Usage example after migration:**
```tsx
const { ref, isRevealed } = useScrollReveal({ staggerIndex: 0 });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: REVEAL_Y, filter: `blur(${REVEAL_BLUR}px)` }}
  animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
  transition={{ duration: REVEAL_DURATION, ease: REVEAL_EASE, delay: 0 }}
>
  {content}
</motion.div>
```

### 2. Registry: `RevealRegistryProvider`

**File:** `src/hooks/useRevealRegistry.tsx`

```
RevealRegistryProvider (React Context)
  register(sectionId, forceRevealFn)   — each section registers on mount
  unregister(sectionId)                — cleanup on unmount
  forceRevealSection(sectionId)        — forces reveal on the target section only
```

**Flow on "Voir nos offres" click:**
1. Call `forceRevealSection('offres')`
2. Registry calls `forceReveal()` on the offres section
3. Smooth scroll starts toward `#offres`
4. Section is already `isRevealed = true` — motion/react animation plays on arrival

Only the target section is force-revealed. Intermediate sections animate naturally when scrolled back to (user chose this behavior).

Same logic applies to "Voir nos realisations" button.

### 3. Uniform Animation Parameters

All scroll-reveal animations use these centralized constants:

```
REVEAL_THRESHOLD = 0.15
REVEAL_MARGIN = '0px 0px 12% 0px'
REVEAL_Y = 60          // px
REVEAL_BLUR = 6        // px
REVEAL_DURATION = 0.9  // s
REVEAL_EASE = [0.16, 1, 0.3, 1]
REVEAL_STAGGER = 0.18  // s between staggered elements
```

Animation properties (applied via motion/react):
- `opacity: 0 → 1`
- `y: 60px → 0`
- `filter: blur(6px) → blur(0px)`
- `duration: 0.9s`
- `ease: [0.16, 1, 0.3, 1]`
- Stagger: `delay = staggerIndex * 0.18s`

### 4. Section Mapping

| Section | Elements | staggerIndex | sectionId |
|---------|----------|-------------|-----------|
| **TeamMask** | Texte "Team" | 0 | `'team'` |
| **Team** | Carte Oscar | 0 | `'team'` |
| **Team** | Carte Benjamin | 1 | `'team'` |
| **Realisations** | Titre + carousel | 0 | `'realisations'` |
| **MaskGroup** | Texte "Offres" | 0 | `'offres'` |
| **Offres** | Carte Offres | 0 | `'offres'` |
| **Cta** | Carte CTA (planete) | 0 | `'cta'` |
| **InfinifyMask** | Texte "Infinify" | 0 | `'infinify'` |
| **Footer** | Background | 0 | `'footer'` |
| **Footer** | Content | 1 | `'footer'` |

**Note on Realisations:** This section currently has NO scroll-reveal animation — it is always visible. This spec **adds** a new scroll-reveal to it for consistency. The reveal wraps the entire section container (title + carousel as one block). Internal carousel animations (auto-rotate, frame switching) are unaffected.

### 5. Reduced Motion

- `useScrollReveal` detects `prefers-reduced-motion` via `useReducedMotion()`
- If enabled: `duration: 0`, `y: 0`, `blur: 0` — content appears instantly
- `forceReveal` works identically (content becomes visible, just without animation)

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/hooks/useScrollReveal.ts` | **Create** | Centralized scroll-reveal hook with native IntersectionObserver |
| `src/hooks/useRevealRegistry.tsx` | **Create** | React Context for section registration + forceReveal |
| `src/imports/Desktop144.tsx` | **Modify** | Remove `useLatchedInView`, replace all usages with `useScrollReveal`, register sections, update scroll button handlers |
| `src/app/App.tsx` | **Modify** | Wrap app with `RevealRegistryProvider` |

## What Does NOT Change

- Hero animations (controlled by `introActive` from splash screen)
- Splash screen / LoaderSplash
- OfferButton hover animations
- Marquee logos animation
- Offer tab switch transitions (AnimatePresence)
- Carousel auto-rotate in Realisations
- ScrambledText animation

## Removed Code

- `useLatchedInView` hook (~15 lines in Desktop144.tsx)
- `getScrollRevealTransition` helper function (replaced by uniform constants + staggerIndex-based delay)
- Disparate reveal constants: `REVEAL_MARGIN`, `OFFERS_REVEAL_MARGIN`, and per-section `amount` values
- All `useInView` imports from motion/react used for scroll-reveal (not for other purposes)

## Button Handler Wiring

The scroll buttons (`Cta2` "Voir nos offres" and `CtaRealisations` "Voir nos realisations") are defined as standalone functions inside Desktop144.tsx. They will:

1. Use `useRevealRegistry()` context hook directly (they are rendered inside the provider tree since `RevealRegistryProvider` wraps `App.tsx`)
2. Call `forceRevealSection(sectionId)` before initiating the scroll
3. Both buttons will use `window.scrollTo` with calculated offset for consistency (replacing the `scrollIntoView` used by `CtaRealisations` to unify scroll behavior)

## Assumptions

- **SPA only**: This is a client-side React app with no SSR. No `typeof window` guards needed.
- **Resize**: Since the observer disconnects once revealed and the latch is permanent, window resize does not affect already-revealed sections. Unrevealed sections will re-evaluate naturally via their active observer.
- **Fast repeated clicks**: `forceReveal` is idempotent (sets boolean to true). Smooth scroll behavior on rapid clicks is browser-managed and acceptable.
