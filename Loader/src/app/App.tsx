import { useEffect, useState, useRef, useCallback } from "react";
import imgLogo from "figma:asset/bf1d602331298fa70e56da6d7bd2fe71a3de2b7a.png";

type Phase =
  | "loading"
  | "loader-out"
  | "logo-in"
  | "logo-visible"
  | "logo-out"
  | "done";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const schedulePhase = useCallback((next: Phase, delay: number) => {
    timeoutRef.current = setTimeout(() => setPhase(next), delay);
  }, []);

  // Loader fill animation
  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    function animate(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = cubicBezierEase(t);
      setProgress(eased * 100);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setPhase("loader-out"), 50);
      }
    }

    requestAnimationFrame(animate);
  }, []);

  // Phase sequencer
  useEffect(() => {
    switch (phase) {
      case "loader-out":
        schedulePhase("logo-in", 500);
        break;
      case "logo-in":
        schedulePhase("logo-visible", 20);
        break;
      case "logo-visible":
        schedulePhase("logo-out", 1600);
        break;
      case "logo-out":
        schedulePhase("done", 1000);
        break;
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, schedulePhase]);

  // --- Computed styles ---

  // Loader
  const loaderActive = ["loading", "loader-out"].includes(phase);
  const loaderShow = phase === "loading";

  // Logo
  const logoPhases = ["logo-in", "logo-visible", "logo-out", "done"];
  const logoActive = logoPhases.includes(phase);
  const logoShow = phase === "logo-visible";
  const logoFadingIn = phase === "logo-in";

  // Apple-like soft easing for blur transitions
  const softEasing = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div className="relative size-full flex items-center justify-center overflow-hidden">
      {/* Dark background — constant */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#080808] inset-0" />
      </div>

      {/* === Loader === */}
      {loaderActive && (
        <div
          className="relative w-[260px] h-[4px]"
          style={{
            opacity: loaderShow ? 1 : 0,
            filter: loaderShow ? "blur(0px)" : "blur(12px)",
            transition: "opacity 0.5s ease-in-out, filter 0.5s ease-in-out",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-[#2a2a2a]" />
          <div
            className="absolute top-0 left-0 h-full bg-[#d1d1d1] rounded-full"
            style={{
              width: `${progress}%`,
              minWidth: progress > 0 ? "4px" : "0px",
            }}
          />
        </div>
      )}

      {/* === Logo === */}
      {logoActive && (
        <div
          className="absolute flex items-center justify-center"
          style={{
            opacity: logoShow ? 1 : logoFadingIn ? 0 : 0,
            filter: logoShow
              ? "blur(0px)"
              : logoFadingIn
                ? "blur(16px)"
                : "blur(16px)",
            transition:
              logoShow
                ? `opacity 1.2s ${softEasing}, filter 1.2s ${softEasing}`
                : phase === "logo-out" || phase === "done"
                  ? `opacity 1.0s ${softEasing}, filter 1.0s ${softEasing}`
                  : "none",
          }}
        >
          <div className="w-[75px] h-[48px] overflow-hidden relative">
            <img
              alt="Logo"
              className="absolute max-w-none"
              style={{
                width: "114.53%",
                height: "138.86%",
                left: "-6.67%",
                top: "-17.73%",
              }}
              src={imgLogo}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Apple-like cubic-bezier(0.25, 0.1, 0.25, 1.0) easing
function cubicBezierEase(t: number): number {
  const x1 = 0.25, y1 = 0.1, x2 = 0.25, y2 = 1.0;

  let u = t;
  for (let i = 0; i < 8; i++) {
    const bx = bezier(u, x1, x2) - t;
    const dbx = bezierDeriv(u, x1, x2);
    if (Math.abs(bx) < 1e-6) break;
    if (Math.abs(dbx) < 1e-6) break;
    u -= bx / dbx;
  }

  if (u < 0 || u > 1) {
    let lo = 0, hi = 1;
    u = t;
    for (let i = 0; i < 20; i++) {
      const bx = bezier(u, x1, x2);
      if (Math.abs(bx - t) < 1e-6) break;
      if (t > bx) lo = u; else hi = u;
      u = (lo + hi) / 2;
    }
  }

  return bezier(u, y1, y2);
}

function bezier(t: number, p1: number, p2: number): number {
  return 3 * p1 * t * (1 - t) * (1 - t) + 3 * p2 * t * t * (1 - t) + t * t * t;
}

function bezierDeriv(t: number, p1: number, p2: number): number {
  return 3 * p1 * (1 - t) * (1 - 3 * t) + 6 * p2 * t * (1 - t) + 3 * t * t;
}