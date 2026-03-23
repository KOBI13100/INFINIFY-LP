import type { HTMLAttributes } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  once?: boolean;
  y?: number;
  blur?: number;
  duration?: number;
  delay?: number;
  triggerOffset?: number;
};

type RevealGroupProps = HTMLAttributes<HTMLDivElement> & {
  once?: boolean;
  staggerChildren?: number;
  delayChildren?: number;
  triggerOffset?: number;
};

type RevealSequenceProps = HTMLAttributes<HTMLDivElement> & {
  staggerChildren?: number;
  delayChildren?: number;
};

type RevealItemProps = HTMLAttributes<HTMLDivElement> & {
  y?: number;
  blur?: number;
  duration?: number;
  delay?: number;
};

export function Reveal({
  once: _once,
  y: _y,
  blur: _blur,
  duration: _duration,
  delay: _delay,
  triggerOffset: _triggerOffset,
  ...props
}: RevealProps) {
  return <div {...props} />;
}

export function RevealGroup({
  once: _once,
  staggerChildren: _staggerChildren,
  delayChildren: _delayChildren,
  triggerOffset: _triggerOffset,
  ...props
}: RevealGroupProps) {
  return <div {...props} />;
}

export function RevealSequence({
  staggerChildren: _staggerChildren,
  delayChildren: _delayChildren,
  ...props
}: RevealSequenceProps) {
  return <div {...props} />;
}

export function RevealItem({
  y: _y,
  blur: _blur,
  duration: _duration,
  delay: _delay,
  ...props
}: RevealItemProps) {
  return <div {...props} />;
}
