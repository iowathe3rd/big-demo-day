"use client"

import { motion } from "motion/react"
import { InsightLogo } from "@/components/brand/insight-logo"
import { SlideLayout } from "@/components/slides/slide-layout"

/** Slowly drifting UI fragments far in the background */
function FloatingBackground() {
  const shards = [
    {
      label: "обращений",
      value: "13 428",
      delta: "+12%",
      w: 188,
      h: 118,
      x: "8%",
      y: "18%",
      d: 0,
      dur: 26,
      tone: "primary",
    },
    {
      label: "доля негатива",
      value: "8.4%",
      delta: "-2.1%",
      w: 168,
      h: 104,
      x: "72%",
      y: "12%",
      d: 3,
      dur: 30,
      tone: "accent",
    },
    {
      label: "активных тем",
      value: "47",
      delta: "+6",
      w: 198,
      h: 126,
      x: "78%",
      y: "58%",
      d: 1.5,
      dur: 34,
      tone: "primary",
    },
    {
      label: "точность тегов",
      value: "94%",
      delta: "+4%",
      w: 160,
      h: 124,
      x: "12%",
      y: "55%",
      d: 4,
      dur: 28,
      tone: "accent",
    },
    {
      label: "поиск ответа",
      value: "1.8 мин",
      delta: "быстрее",
      w: 156,
      h: 96,
      x: "46%",
      y: "74%",
      d: 2,
      dur: 32,
      tone: "primary",
    },
  ]
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shards.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute overflow-hidden rounded-xl border bg-card/90 shadow-[0_8px_18px_rgba(0,0,0,0.08)] backdrop-blur-sm ${
            s.tone === "accent"
              ? "border-accent/55"
              : "border-primary/55"
          }`}
          style={{
            width: s.w,
            height: s.h,
            left: s.x,
            top: s.y,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.82,
            y: [0, -18, 0],
            x: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 1.4, delay: s.d * 0.2 },
            y: { duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.d },
            x: {
              duration: s.dur * 1.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.d,
            },
          }}
        >
          <div className="flex h-full flex-col p-3 text-left">
            <div className="flex items-center justify-between gap-2">
              <span
                className={`truncate text-[9px] font-semibold uppercase tracking-normal ${
                  s.tone === "accent" ? "text-accent" : "text-primary"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`h-2 w-2 shrink-0 rounded-full shadow-sm ${s.tone === "accent" ? "bg-accent" : "bg-primary"}`}
              />
            </div>
            <div className="mt-2 truncate font-heading text-xl font-semibold leading-none tracking-normal text-foreground">
              {s.value}
            </div>
            <div
              className={`mt-1 truncate text-[10px] font-semibold ${s.tone === "accent" ? "text-accent" : "text-primary"}`}
            >
              {s.delta}
            </div>
            <div className="mt-auto flex h-6 items-end gap-1">
              {[0.46, 0.68, 0.54, 0.82, 0.72].map((height, barIndex) => (
                <span
                  key={barIndex}
                  className={`flex-1 rounded-t-sm ${s.tone === "accent" ? "bg-accent/58" : "bg-primary/54"}`}
                  style={{ height: `${height * 22}px` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function SlideTitle() {
  return (
    <SlideLayout contentClassName="items-center justify-center text-center">
      <FloatingBackground />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <InsightLogo size="xl" className="flex-col gap-5 sm:flex-row sm:gap-4" />
        <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          Платформа агрегации, анализа и исследования клиентской обратной связи
        </p>
      </motion.div>
    </SlideLayout>
  )
}
