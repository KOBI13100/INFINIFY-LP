import { useEffect, useRef, useState } from 'react';

interface BlurRevealProps {
  lines: string[];
  className?: string;
  staggerDelay?: number;   // ms between each word
  duration?: number;       // ms per word transition
  initialBlur?: number;    // px of initial blur
}

export function BlurReveal({
  lines,
  className = '',
  staggerDelay = 70,
  duration = 800,
  initialBlur = 12,
}: BlurRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Flatten words with their global index for stagger timing
  let wordIndex = 0;
  const easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

  return (
    <div ref={ref} className={className}>
      {lines.map((line, li) => {
        const words = line.split(' ');
        return (
          <span key={li} style={{ display: 'block' }}>
            {words.map((word, wi) => {
              const idx = wordIndex++;
              const delay = idx * staggerDelay;
              return (
                <span
                  key={wi}
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'pre',
                    opacity: revealed ? 1 : 0,
                    filter: revealed ? 'blur(0px)' : `blur(${initialBlur}px)`,
                    transition: `opacity ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms`,
                  }}
                >
                  {word}{wi < words.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
