import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type ScrambledTextProps = {
  word: string;
  totalDurationMs?: number;
  intervalMs?: number;
};

const SCRAMBLE_SET = "!@#$%^&*()_+-=[]{};:,.<>/?0123456789€$£";
const DEFAULT_INTERVAL_MS = 50;
const DEFAULT_DURATION_MS = 1000;
const SCRAMBLE_BLOCK_SIZE = 4;
const TRAIL_LENGTH = SCRAMBLE_BLOCK_SIZE - 1;
const SCRAMBLE_CHARACTER_INTERVAL_MS = 200;
const REVEAL_TRANSITION = {
  duration: 0.14,
  ease: [0.22, 1, 0.36, 1],
} as const;

export default function ScrambledText({
  word,
  totalDurationMs = DEFAULT_DURATION_MS,
  intervalMs = DEFAULT_INTERVAL_MS,
}: ScrambledTextProps) {
  const targetText = useMemo(() => `${word.toUpperCase()}...`, [word]);
  const finalCharacters = useMemo(() => Array.from(targetText), [targetText]);
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    setElapsedMs(0);

    let animationFrameId = 0;
    const start = performance.now();

    const animate = (now: number) => {
      const nextElapsedMs = Math.min(now - start, totalDurationMs);

      setElapsedMs(nextElapsedMs);

      if (nextElapsedMs < totalDurationMs) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [finalCharacters, totalDurationMs]);

  const progress = Math.min(elapsedMs / totalDurationMs, 1);
  const scrambleStep = Math.floor(elapsedMs / SCRAMBLE_CHARACTER_INTERVAL_MS);
  const totalScanSteps = finalCharacters.length + TRAIL_LENGTH;
  const scannerStep = Math.min(
    Math.floor(progress * totalScanSteps),
    totalScanSteps,
  );
  const settledThreshold = scannerStep - TRAIL_LENGTH;
  const headIndex = scannerStep < finalCharacters.length ? scannerStep : -1;

  return (
    <div
      aria-hidden="true"
      className="scrambled-text"
      style={{ width: `${finalCharacters.length}ch` }}
    >
      {finalCharacters.map((finalChar, index) => {
        const isSettled = progress >= 1 || index < settledThreshold;
        const isActive = index === headIndex;
        const isTrailing =
          !isSettled &&
          !isActive &&
          index >= Math.max(settledThreshold, 0) &&
          index < scannerStep;
        const shouldShowScramble = isActive || isTrailing;
        const scrambleCharacter = shouldShowScramble
          ? getScrambleCharacter(index, scrambleStep, scannerStep)
          : "\u00A0";

        return (
          <span
            key={`${index}-${finalChar}`}
            className={`scrambled-text__char-slot${
              shouldShowScramble ? " scrambled-text__char-slot--scrambling" : ""
            }${
              isActive ? " scrambled-text__char-slot--active" : ""
            }${isSettled ? " scrambled-text__char-slot--settled" : ""}`}
          >
            <span className="scrambled-text__char-clip">
              <AnimatePresence initial={false} mode="popLayout">
                {shouldShowScramble ? (
                  <motion.span
                    key={`${index}-${scrambleCharacter}-${scrambleStep}`}
                    animate={{ opacity: isActive ? 1 : 0.78 }}
                    className="scrambled-text__char"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0.42 }}
                    transition={{ duration: 0.12, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {scrambleCharacter}
                  </motion.span>
                ) : null}
              </AnimatePresence>

              <motion.span
                animate={{
                  opacity: isSettled ? 1 : 0,
                }}
                className="scrambled-text__final-char"
                initial={false}
                transition={REVEAL_TRANSITION}
              >
                {finalChar}
              </motion.span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

function getScrambleCharacter(
  index: number,
  scrambleStep: number,
  scannerStep: number,
) {
  const seed =
    (index + 1) * 37 +
    scrambleStep * 17 +
    scannerStep * 29 +
    (index + scannerStep) * 11;

  return SCRAMBLE_SET[seed % SCRAMBLE_SET.length];
}
