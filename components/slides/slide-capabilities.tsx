"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { SlideLayout, Eyebrow } from "@/components/slides/slide-layout"
import { BrowserFrame } from "@/components/product/chrome"
import {
  REAL_SCREENS,
  RealProductScreen,
} from "@/components/product/screens"

export function SlideCapabilities() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setActive((current) => (current + 1) % REAL_SCREENS.length),
      4600,
    )
    return () => clearInterval(t)
  }, [])

  const current = REAL_SCREENS[active]

  return (
    <SlideLayout contentClassName="justify-center">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>Реальные экраны продукта</Eyebrow>
            <AnimatePresence mode="wait">
              <motion.h2
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-3 font-heading text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
              >
                {current.label}
              </motion.h2>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-2">
            {REAL_SCREENS.map((screen, index) => {
              const Icon = screen.icon
              return (
                <button
                  key={screen.id}
                  onClick={() => setActive(index)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition",
                    index === active
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {screen.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative mt-5 aspect-[16/9] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 36, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -36, scale: 0.985 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <BrowserFrame url={current.url} showChrome={false}>
                <RealProductScreen screen={current} />
              </BrowserFrame>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SlideLayout>
  )
}
