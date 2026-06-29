"use client"

import { motion } from "motion/react"
import { SlideLayout } from "@/components/slides/slide-layout"

export function SlideFocus() {
  return (
    <SlideLayout contentClassName="justify-center">
      <div className="relative flex w-full flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.58 }}
          className="grid items-end gap-5 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Чем мы занимаемся
            </span>
            <h2 className="mt-3 max-w-3xl font-heading text-4xl font-semibold leading-none tracking-normal text-foreground sm:text-5xl">
              Наш главный фокус — сервис инсайтов
            </h2>
          </div>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:justify-self-end lg:text-right">
            Мы строим продукты на пересечении данных, аналитики и AI, чтобы
            превращать клиентские коммуникации в понятные решения для бизнеса.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.62, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex aspect-[3/2] h-[55vh] max-h-[560px] min-h-[360px] max-w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/18 bg-card shadow-[0_18px_42px_rgba(0,0,0,0.10)]"
        >
          <img
            src="/focus-puzzle.png"
            alt="Фокус команды: сервис инсайтов, AI, аналитика качества, поиск инсайтов и интеграции данных"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </SlideLayout>
  )
}
