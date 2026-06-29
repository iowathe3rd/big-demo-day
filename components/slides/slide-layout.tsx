import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { BerekeLogo } from "@/components/brand/bereke-logo"

export function SlideLayout({
  children,
  className,
  showLogo = true,
  contentClassName,
}: {
  children: ReactNode
  className?: string
  showLogo?: boolean
  contentClassName?: string
}) {
  return (
    <section
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(2,61,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(2,61,255,0.045)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.72),transparent_44%)]" />
      {showLogo && (
        <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-6">
          <BerekeLogo className="h-5 sm:h-6" />
        </div>
      )}
      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-16 pt-16 sm:px-8 sm:pt-22 md:px-12",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  )
}
