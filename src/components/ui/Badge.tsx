import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "success" | "neutral" | "dark";
}

const styles = {
  gold: "bg-gold/15 text-gold-soft border-gold/30",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  neutral: "bg-gray-soft/40 text-gray-muted border-gray-soft",
  dark: "bg-luxury-black text-white border-luxury-black",
};

export function Badge({
  className,
  variant = "neutral",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}