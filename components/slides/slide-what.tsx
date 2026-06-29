"use client"

import { motion } from "motion/react"
import { SlideLayout, Eyebrow } from "@/components/slides/slide-layout"
import { BrowserFrame } from "@/components/product/chrome"
import { REAL_SCREENS, RealProductScreen } from "@/components/product/screens"

export function SlideWhat() {
  return (
    <SlideLayout contentClassName="justify-center">
      <div className="grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-[0.56fr_1.44fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <Eyebrow>Что такое Insight Service</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl">
            Единая платформа для работы с клиентскими коммуникациями
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            Insight Service объединяет инструменты поиска, аналитики и
            визуализации, позволяя быстро находить нужную информацию и
            анализировать обращения клиентов.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] w-full"
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="h-full w-full">
              <BrowserFrame url={REAL_SCREENS[0].url} showChrome={false}>
                <RealProductScreen screen={REAL_SCREENS[0]} dense />
              </BrowserFrame>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
