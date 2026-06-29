"use client"

import { motion } from "motion/react"
import {
  Bot,
  ChartNoAxesCombined,
  DatabaseZap,
  MessageSquareText,
  Network,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SlideLayout } from "@/components/slides/slide-layout"

const ITEMS = [
  {
    id: "bento1",
    title: "AI для клиентских коммуникаций",
    text: "Ищем сигналы, темы и причины обращений в больших массивах диалогов.",
    icon: Bot,
    accent: "primary",
  },
  {
    id: "bento2",
    title: "Интеграции данных",
    text: "Соединяем источники, потоки и витрины для быстрых исследований.",
    icon: DatabaseZap,
    accent: "accent",
  },
  {
    id: "bento3",
    title: "Сервис инсайтов",
    text: "Главный фокус команды: единая платформа, где поиск, аналитика и визуализация складываются в продукт. Поэтому дальше — Insight Service.",
    icon: MessageSquareText,
    accent: "hero",
  },
  {
    id: "bento4",
    title: "Аналитика качества",
    text: "Сводим метрики, динамику и проблемные зоны в понятные продуктовые выводы.",
    icon: ChartNoAxesCombined,
    accent: "accent",
  },
  {
    id: "bento5",
    title: "Поиск инсайтов",
    text: "Помогаем командам быстро переходить от вопроса к проверяемому ответу.",
    icon: Network,
    accent: "accent",
  },
  {
    id: "bento6",
    title: "MLOps и надежность",
    text: "Делаем сценарии воспроизводимыми, наблюдаемыми и готовыми к эксплуатации.",
    icon: Network,
    accent: "primary",
  },
  {
    id: "bento7",
    title: "Безопасный контур",
    text: "Работаем внутри банковских ограничений и аккуратно обращаемся с данными.",
    icon: ShieldCheck,
    accent: "accent",
  },
] as const

export function SlideFocus() {
  return (
    <SlideLayout contentClassName="justify-center">
      <div className="relative flex w-full flex-col gap-6">
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

        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[440px] lg:grid-cols-[repeat(9,minmax(0,1fr))] lg:grid-rows-[repeat(7,minmax(0,1fr))] lg:gap-0"
          style={{
            gridTemplateAreas:
              '"bento1 bento1 bento4 bento4 bento4 bento4 bento4 bento6 bento6" "bento1 bento1 bento4 bento4 bento4 bento4 bento4 bento6 bento6" "bento1 bento1 bento3 bento3 bento3 bento3 bento3 bento6 bento6" "bento2 bento2 bento3 bento3 bento3 bento3 bento3 bento6 bento6" "bento2 bento2 bento3 bento3 bento3 bento3 bento3 bento7 bento7" "bento2 bento2 bento5 bento5 bento5 bento5 bento5 bento7 bento7" "bento2 bento2 bento5 bento5 bento5 bento5 bento5 bento7 bento7"',
          }}
        >
          {ITEMS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, delay: 0.12 + index * 0.06 }}
                className={cn(
                  "group relative m-1 overflow-hidden rounded-xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]",
                  item.accent === "hero"
                    ? "border-primary bg-primary text-primary-foreground"
                    : item.accent === "accent"
                      ? "border-accent/45 bg-accent/12"
                      : "border-primary/45 bg-primary/10",
                )}
                style={{ gridArea: item.id }}
              >
                <div
                  className={cn(
                    "absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full",
                    item.accent === "hero"
                      ? "bg-white/18"
                      : item.accent === "accent"
                        ? "bg-accent/16"
                        : "bg-primary/16",
                  )}
                />
                <div
                  className={cn(
                    "float-left mr-3 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                    item.accent === "hero"
                      ? "bg-white/18 text-primary-foreground"
                      : item.accent === "accent"
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground",
                  )}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3
                  className={cn(
                    "text-base font-semibold leading-tight",
                    item.accent === "hero" ? "text-primary-foreground" : "text-foreground",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-[13px] leading-relaxed",
                    item.accent === "hero"
                      ? "text-primary-foreground/86"
                      : "text-muted-foreground",
                  )}
                >
                  {item.text}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </SlideLayout>
  )
}
