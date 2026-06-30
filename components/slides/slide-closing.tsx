"use client"

import { motion } from "motion/react"
import { InsightLogo } from "@/components/brand/insight-logo"
import { SlideLayout } from "@/components/slides/slide-layout"

export function SlideClosing() {
  return (
    <SlideLayout contentClassName="items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <InsightLogo size="xl" className="flex-col gap-5 sm:flex-row sm:gap-4" />
        <p className="mt-8 text-2xl font-medium text-muted-foreground sm:text-3xl">
          <span className="text-primary">Спасибо</span> за{" "}
          <span className="text-accent">внимание</span>
        </p>
      </motion.div>
    </SlideLayout>
  )
}
