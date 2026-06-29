import { cn } from "@/lib/utils"

export function InsightMark({ className }: { className?: string }) {
  return <span className={cn("hidden", className)} aria-hidden="true" />
}

export function InsightLogo({
  className,
  size = "md",
}: {
  className?: string
  size?: "md" | "lg" | "xl" | "hero"
}) {
  const text = {
    md: "text-xl",
    lg: "text-3xl",
    xl: "text-5xl",
    hero: "text-7xl sm:text-8xl",
  }[size]
  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn("font-heading font-semibold tracking-normal text-foreground", text)}>
        Insight <span className="text-primary">Service</span>
      </span>
    </div>
  )
}
