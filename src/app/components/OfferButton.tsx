import { motion, useReducedMotion } from "motion/react";
import { useState, type FocusEventHandler, type MouseEventHandler } from "react";

export interface OfferButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  labelClassName?: string;
  overlayClassName?: string;
  theme?: "dark" | "light";
}

type HoverState = "rest" | "hover";

const ROLLING_TEXT_EASE = [0.6, 0.01, -0.05, 0.95] as const;
const ROLLING_TEXT_DURATION = 0.4;
const TEXT_LINE_HEIGHT_EM = 1.2;
const ICON_SIZE = 20.035;
const CLIP_MASK_STYLE = {
  WebkitMaskImage: "linear-gradient(black, black)",
  maskImage: "linear-gradient(black, black)",
} as const;

export default function OfferButton({
  label,
  onClick,
  className,
  labelClassName,
  overlayClassName,
  theme = "dark",
}: OfferButtonProps) {
  const reduced = useReducedMotion();
  const [hoverState, setHoverState] = useState<HoverState>("rest");
  const isLight = theme === "light";

  const buttonClassName = cx(
    "relative inline-flex cursor-pointer items-center justify-center gap-[8.014px] overflow-hidden rounded-[10016.271px] border-0 px-[30px] py-[15px]",
    isLight
      ? "bg-white text-black shadow-[0px_4.007px_3.005px_-4.007px_rgba(0,0,0,0.5)]"
      : "bg-black text-white shadow-[0px_12px_24px_-18px_rgba(0,0,0,0.6)]",
    className,
  );
  const copyClassName = cx(
    "relative flex flex-col justify-center leading-[0] not-italic text-[16.028px] text-center tracking-[-0.3206px] whitespace-nowrap",
    isLight
      ? "font-['Neue_Montreal:Bold',sans-serif] font-[600] text-black"
      : "font-['Neue_Montreal:Bold',sans-serif] font-[500] text-white",
    labelClassName,
  );
  const innerOverlayClassName = cx(
    "absolute inset-0 pointer-events-none rounded-[inherit]",
    isLight
      ? "shadow-[inset_0px_0px_3.005px_2.003px_rgba(255,255,255,0.2),inset_0px_0px_12.021px_4.007px_rgba(255,255,255,0.13)]"
      : "shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.12),inset_0px_0px_18px_2px_rgba(255,255,255,0.06)]",
    overlayClassName,
  );

  const resetHover: FocusEventHandler<HTMLButtonElement> = () => setHoverState("rest");

  return (
    <motion.button
      className={buttonClassName}
      onBlur={resetHover}
      onClick={onClick}
      onFocus={() => setHoverState("hover")}
      onHoverEnd={reduced ? undefined : () => setHoverState("rest")}
      onHoverStart={reduced ? undefined : () => setHoverState("hover")}
      type="button"
    >
      <div className={copyClassName}>
        {reduced ? (
          <p className="leading-[1.2]">{label}</p>
        ) : (
          <RollingTextLabel state={hoverState} text={label} />
        )}
      </div>
      <div className="relative shrink-0">
        {reduced ? <ArrowIcon /> : <SlidingArrow state={hoverState} />}
      </div>
      <div className={innerOverlayClassName} />
    </motion.button>
  );
}

function RollingTextLabel({ text, state }: { text: string; state: HoverState }) {
  const letterLineStyle = { lineHeight: `${TEXT_LINE_HEIGHT_EM}em` } as const;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className="relative inline-block overflow-hidden align-top"
        style={{ ...CLIP_MASK_STYLE, height: `${TEXT_LINE_HEIGHT_EM}em` }}
      >
        <span className="block select-none opacity-0" style={letterLineStyle}>
          {text}
        </span>
        <motion.span
          animate={state}
          className="absolute inset-0 block whitespace-pre"
          initial={false}
          style={letterLineStyle}
          variants={textPrimaryVariants}
        >
          {text}
        </motion.span>
        <motion.span
          animate={state}
          className="absolute inset-0 block whitespace-pre"
          initial={false}
          style={letterLineStyle}
          variants={textSecondaryVariants}
        >
          {text}
        </motion.span>
      </span>
    </>
  );
}

function SlidingArrow({ state }: { state: HoverState }) {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block overflow-hidden align-middle"
      style={{ ...CLIP_MASK_STYLE, width: ICON_SIZE, height: ICON_SIZE }}
    >
      <span className="block select-none opacity-0">
        <ArrowIcon />
      </span>
      <span className="absolute inset-0 overflow-hidden" style={CLIP_MASK_STYLE}>
        <motion.span
          animate={state}
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          variants={arrowPrimaryVariants}
        >
          <ArrowIcon />
        </motion.span>
        <motion.span
          animate={state}
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          variants={arrowSecondaryVariants}
        >
          <ArrowIcon />
        </motion.span>
      </span>
    </span>
  );
}

function ArrowIcon() {
  return (
    <span className="relative block size-[20.035px] shrink-0">
      <svg
        className="absolute inset-0 block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20.0345 20.0345"
      >
        <path
          d="M4.17403 10.0167H15.8609"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66955"
        />
        <path
          d="M10.0173 4.17367L15.8607 10.0171L10.0173 15.8605"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66955"
        />
      </svg>
    </span>
  );
}

const textTransition = {
  duration: ROLLING_TEXT_DURATION,
  ease: ROLLING_TEXT_EASE,
} as const;

const arrowTransition = {
  duration: ROLLING_TEXT_DURATION,
  ease: ROLLING_TEXT_EASE,
} as const;

const textPrimaryVariants = {
  rest: {
    opacity: 1,
    y: "0%",
    transition: textTransition,
  },
  hover: {
    opacity: 0,
    y: "-145%",
    transition: textTransition,
  },
} as const;

const textSecondaryVariants = {
  rest: {
    opacity: 0,
    y: "145%",
    transition: textTransition,
  },
  hover: {
    opacity: 1,
    y: "0%",
    transition: textTransition,
  },
} as const;

const arrowPrimaryVariants = {
  rest: {
    opacity: 1,
    x: 0,
    y: "0%",
    transition: arrowTransition,
  },
  hover: {
    opacity: 0,
    x: "24%",
    y: "-118%",
    transition: arrowTransition,
  },
} as const;

const arrowSecondaryVariants = {
  rest: {
    opacity: 0,
    x: "-24%",
    y: "118%",
    transition: arrowTransition,
  },
  hover: {
    opacity: 1,
    x: 0,
    y: "0%",
    transition: arrowTransition,
  },
} as const;

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}
