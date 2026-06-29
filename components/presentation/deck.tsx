"use client"

import { useCallback, useEffect, useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type Slide = {
  id: string
  label: string
  render: () => ReactNode
}

export function Deck({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback(
    (next: number) => {
      setIndex((cur) => {
        const clamped = Math.max(0, Math.min(slides.length - 1, next))
        setDirection(clamped >= cur ? 1 : -1)
        return clamped
      })
    },
    [slides.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault()
        go(index + 1)
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault()
        go(index - 1)
      } else if (e.key === "Home") {
        go(0)
      } else if (e.key === "End") {
        go(slides.length - 1)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go, index, slides.length])

  const current = slides[index]

  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background">
      {/* Slide stage */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -48 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {current.render()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <div className="pointer-events-auto flex items-center gap-2.5">
          <span className="rounded-full bg-card/80 px-2.5 py-1 text-xs font-medium tabular-nums text-muted-foreground shadow-sm backdrop-blur">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <span className="hidden text-xs font-medium text-muted-foreground sm:block">
            {current.label}
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-label={`Слайд ${i + 1}: ${s.label}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === index
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>

        <div className="pointer-events-auto flex items-center gap-1.5">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Предыдущий слайд"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-card/80 text-foreground shadow-sm backdrop-blur transition hover:bg-card disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(index + 1)}
            disabled={index === slides.length - 1}
            aria-label="Следующий слайд"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition hover:opacity-90 disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Top progress line */}
      <div className="absolute inset-x-0 top-0 z-30 h-1 bg-transparent">
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
