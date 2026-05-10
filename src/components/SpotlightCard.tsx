import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  as?: "div" | "a" | "button";
  href?: string;
  onClick?: () => void;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "oklch(0.85 0.16 200 / 25%)",
  as = "div",
  href,
  onClick,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Tag: any = as;
  const extra = as === "a" ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Tag
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-3xl edge-border grain",
        "bg-card backdrop-blur-xl",
        "shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)]",
        "transition-transform duration-500 will-change-transform",
        "hover:-translate-y-1",
        className,
      )}
      {...extra}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 55%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  );
}
