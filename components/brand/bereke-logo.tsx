import { cn } from "@/lib/utils"

export function BerekeMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo-compact.svg"
      alt=""
      className={cn("h-8 w-auto", className)}
      aria-hidden="true"
    />
  )
}

export function BerekeLogo({ className }: { className?: string }) {
  return (
    <img
      src="/logo-bereke.svg"
      alt="Bereke Bank"
      className={cn("h-6 w-auto", className)}
    />
  )
}
