"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  className?: string;
}

export function QuantityStepper({ value, onChange, min = 1, className }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-luxury-black/10 bg-white",
        className
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex h-9 w-9 items-center justify-center rounded-full text-luxury-black/60 hover:text-luxury-black transition"
        aria-label="Diminuer"
      >
        <Minus size={14} />
      </button>
      <span className="w-9 text-center text-sm font-semibold tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-luxury-black/60 hover:text-luxury-black transition"
        aria-label="Augmenter"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}