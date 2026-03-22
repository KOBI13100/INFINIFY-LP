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
