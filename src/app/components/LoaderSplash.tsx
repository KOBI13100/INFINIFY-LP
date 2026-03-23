import { useEffect, useRef, useState, type CSSProperties } from "react";
import imgLogoInfinify from "../../assets/logoinfinifywhite.svg";
import ScrambledText from "./ScrambledText";

type SplashPhase =
  | "loading"
  | "loader-exit"
  | "logo-enter"
  | "logo-visible"
  | "logo-exit"
  | "screen-exit";

type LoaderSplashProps = {
  onScreenExitStart?: () => void;
  onComplete: () => void;
};

const LOADER_DURATION_MS = 2400;
const LOADER_EXIT_DELAY_MS = 0;
const LOADER_TO_LOGO_DELAY_MS = 140;
const LOGO_SETTLE_DELAY_MS = 0;
const LOGO_VISIBLE_DURATION_MS = 760;
const SCREEN_EXIT_DURATION_MS = 600;
const LOGO_SCREEN_EXIT_DURATION_MS = 600;
const LOADER_EASE = [0.22, 0.61, 0.36, 1] as const;
const MIN_VISIBLE_PROGRESS = 4 / 260;

export default function LoaderSplash({
  onScreenExitStart,
  onComplete,
}: LoaderSplashProps) {
  const [phase, setPhase] = useState<SplashPhase>("loading");
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const hasStartedScreenExitRef = useRef(false);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    // Remove the static HTML splash screen now that React has mounted
    const staticSplash = document.getElementById("static-splash");
    if (staticSplash) {
      staticSplash.remove();
    }
  }, []);

  useEffect(() => {
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progressValue = Math.min(elapsed / LOADER_DURATION_MS, 1);

      setProgress(cubicBezierEase(progressValue, LOADER_EASE));

      if (progressValue < 1) {
        animationFrameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      setProgress(1);
      timeoutRef.current = window.setTimeout(
        () => setPhase("loader-exit"),
        LOADER_EXIT_DELAY_MS,
      );
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (phase === "loader-exit") {
      timeoutRef.current = window.setTimeout(
        () => setPhase("logo-enter"),
        LOADER_TO_LOGO_DELAY_MS,
      );
    } else if (phase === "logo-enter") {
      timeoutRef.current = window.setTimeout(
        () => setPhase("logo-visible"),
        LOGO_SETTLE_DELAY_MS,
      );
    } else if (phase === "logo-visible") {
      timeoutRef.current = window.setTimeout(
        () => {
          setPhase("screen-exit");

          if (!hasStartedScreenExitRef.current) {
            hasStartedScreenExitRef.current = true;
            onScreenExitStart?.();
          }
        },
        LOGO_VISIBLE_DURATION_MS,
      );
    }

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [onComplete, onScreenExitStart, phase]);

  const loaderScale = progress === 0 ? 0 : Math.max(progress, MIN_VISIBLE_PROGRESS);
  const splashStyle = {
    "--splash-screen-exit-duration": `${SCREEN_EXIT_DURATION_MS}ms`,
    "--splash-logo-exit-duration": `${LOGO_SCREEN_EXIT_DURATION_MS}ms`,
  } as CSSProperties;

  return (
    <div
      className="splash-screen"
      data-phase={phase}
      style={splashStyle}
      onTransitionEnd={(event) => {
        if (
          phase === "screen-exit" &&
          event.target === event.currentTarget &&
          event.propertyName === "opacity" &&
          !hasCompletedRef.current
        ) {
          hasCompletedRef.current = true;
          onComplete();
        }
      }}
    >
      <span className="sr-only" aria-live="polite" role="status">
        Chargement du site Infinify
      </span>

      <div aria-hidden="true" className="splash-screen__loading-group">
        <ScrambledText word="CHARGEMENT" />

        <div className="splash-screen__loader">
          <div className="splash-screen__loader-track" />
          <div
            className="splash-screen__loader-fill"
            style={{ transform: `scaleX(${loaderScale})` }}
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="splash-screen__logo"
      >
        <div className="splash-screen__logo-frame">
          <img
            alt=""
            className="splash-screen__logo-image"
            src={imgLogoInfinify}
          />
        </div>
      </div>
    </div>
  );
}

function cubicBezierEase(
  t: number,
  [x1, y1, x2, y2]: readonly [number, number, number, number],
): number {

  let curvePosition = t;

  for (let iteration = 0; iteration < 8; iteration += 1) {
    const x = bezier(curvePosition, x1, x2) - t;
    const derivative = bezierDerivative(curvePosition, x1, x2);

    if (Math.abs(x) < 1e-6 || Math.abs(derivative) < 1e-6) {
      break;
    }

    curvePosition -= x / derivative;
  }

  if (curvePosition < 0 || curvePosition > 1) {
    let low = 0;
    let high = 1;
    curvePosition = t;

    for (let iteration = 0; iteration < 20; iteration += 1) {
      const x = bezier(curvePosition, x1, x2);

      if (Math.abs(x - t) < 1e-6) {
        break;
      }

      if (t > x) {
        low = curvePosition;
      } else {
        high = curvePosition;
      }

      curvePosition = (low + high) / 2;
    }
  }

  return bezier(curvePosition, y1, y2);
}

function bezier(t: number, p1: number, p2: number): number {
  return (
    3 * p1 * t * (1 - t) * (1 - t) +
    3 * p2 * t * t * (1 - t) +
    t * t * t
  );
}

function bezierDerivative(t: number, p1: number, p2: number): number {
  return (
    3 * p1 * (1 - t) * (1 - 3 * t) +
    6 * p2 * t * (1 - t) +
    3 * t * t
  );
}
