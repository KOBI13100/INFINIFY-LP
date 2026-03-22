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
