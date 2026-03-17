import { useEffect, useRef, useState } from "react";
import imgLogoInfinify from "../../assets/bf1d602331298fa70e56da6d7bd2fe71a3de2b7a.png";
import imgNoiseTexture from "../../assets/050199014e18c0cb60e9c252c2ef39002648cc6a.png";

type SplashPhase =
  | "loading"
  | "loader-exit"
  | "logo-enter"
  | "logo-visible"
  | "logo-exit"
  | "screen-exit";

type LoaderSplashProps = {
  onComplete: () => void;
};

const LOADER_DURATION_MS = 1800;
const LOADER_EXIT_DELAY_MS = 60;
const LOADER_TO_LOGO_DELAY_MS = 320;
const LOGO_SETTLE_DELAY_MS = 20;
const LOGO_VISIBLE_DURATION_MS = 1180;
const MIN_VISIBLE_PROGRESS = 4 / 260;

export default function LoaderSplash({ onComplete }: LoaderSplashProps) {
  const [phase, setPhase] = useState<SplashPhase>("loading");
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyOverscroll = body.style.overscrollBehaviorY;
    const previousHtmlOverscroll = documentElement.style.overscrollBehaviorY;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.style.overscrollBehaviorY = "none";
    documentElement.style.overscrollBehaviorY = "none";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.overscrollBehaviorY = previousBodyOverscroll;
      documentElement.style.overscrollBehaviorY = previousHtmlOverscroll;
    };
  }, []);

  useEffect(() => {
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progressValue = Math.min(elapsed / LOADER_DURATION_MS, 1);

      setProgress(cubicBezierEase(progressValue));

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
        () => setPhase("logo-exit"),
        LOGO_VISIBLE_DURATION_MS,
      );
    }

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [onComplete, phase]);

  const loaderScale = progress === 0 ? 0 : Math.max(progress, MIN_VISIBLE_PROGRESS);

  return (
    <div
      className="splash-screen"
      data-phase={phase}
      onTransitionEnd={(event) => {
        if (
          phase === "screen-exit" &&
          event.target === event.currentTarget &&
          event.propertyName === "transform" &&
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

      <div
        aria-hidden="true"
        className="splash-screen__texture"
        style={{ backgroundImage: `url("${imgNoiseTexture}")` }}
      />

      <div aria-hidden="true" className="splash-screen__loader">
        <div className="splash-screen__loader-track" />
        <div
          className="splash-screen__loader-fill"
          style={{ transform: `scaleX(${loaderScale})` }}
        />
      </div>

      <div
        aria-hidden="true"
        className="splash-screen__logo"
        onTransitionEnd={(event) => {
          if (
            phase === "logo-exit" &&
            event.target === event.currentTarget &&
            event.propertyName === "opacity"
          ) {
            setPhase("screen-exit");
          }
        }}
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

function cubicBezierEase(t: number): number {
  const x1 = 0.25;
  const y1 = 0.1;
  const x2 = 0.25;
  const y2 = 1;

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
