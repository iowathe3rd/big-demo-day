"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { SlideLayout } from "@/components/slides/slide-layout"

const TEAM = [
  {
    name: "Анель Абдыкалыкова",
    role: "System Analyst",
    img: "/avatar-anel.jpg",
    tone: "border-primary",
    imageClass: "",
    imageFit: "cover",
  },
  {
    name: "Беглеров Бауржан",
    role: "Middle ML & AI Engineer",
    img: "/avatar-baurzhan.jpg",
    tone: "border-accent",
    imageClass: "object-[50%_44%]",
    imageFit: "contain",
  },
  {
    name: "Умбет Санжар",
    role: "Senior ML & AI Engineer",
    img: "/avatar-sanzhar.jpg",
    tone: "border-primary",
    imageClass: "scale-[1.42] object-[50%_76%]",
    imageFit: "cover",
  },
  {
    name: "Зулуфов Руслан",
    role: "Middle ML & AI Engineer",
    img: "/avatar-ruslan.jpg",
    tone: "border-accent",
    imageClass: "",
    imageFit: "cover",
  },
  {
    name: "Тыныбекова Каныкей",
    role: "Product Owner",
    img: "/avatar-kanykei.jpg",
    tone: "border-primary",
    imageClass: "",
    imageFit: "cover",
  },
] as const

export function SlideTeam() {
  return (
    <SlideLayout contentClassName="justify-center">
      <div className="relative flex w-full flex-col">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid items-end gap-4 lg:grid-cols-[1fr_0.68fr]"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Insight Service Team
            </span>
            <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold leading-none tracking-normal text-foreground sm:text-5xl">
              Люди, которые делают <span className="text-primary">продукт</span>{" "}
              <span className="text-accent">умнее</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground lg:justify-self-end lg:text-right">
            <span className="font-semibold text-primary">Аналитика</span>,{" "}
            <span className="font-semibold text-accent">ML/AI</span> и продуктовая
            экспертиза в одной команде: от требований до интеллектуальных сценариев
            в Insight Service.
          </p>
        </motion.div>

        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TEAM.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.12 + index * 0.09 }}
              className="group min-w-0"
            >
              <div className={cn(
                "relative aspect-[4/5] overflow-hidden rounded-xl border-2 bg-card shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.10)]",
                member.tone,
              )}>
                {member.imageFit === "contain" ? (
                  <>
                    <Image
                      src={member.img}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
                      className="scale-110 object-cover blur-xl saturate-110"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-white/18" />
                    <Image
                      src={member.img}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
                      className={cn("object-contain transition-transform duration-300", member.imageClass)}
                      priority={index === 0}
                    />
                  </>
                ) : (
                  <Image
                    src={member.img}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
                    className={cn("object-cover transition-transform duration-300", member.imageClass)}
                    priority={index === 0}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/18 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/70 bg-white/88 px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md">
                  <div className="flex items-start gap-2">
                    <span className={cn(
                      "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                      member.tone === "border-accent" ? "bg-accent" : "bg-primary",
                    )} />
                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold leading-tight text-foreground lg:text-[15px]">
                        {member.name}
                      </p>
                      <p className="mt-1 truncate text-sm leading-snug text-muted-foreground lg:text-[13px]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
