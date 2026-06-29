"use client"

import Image from "next/image"
import { Bot, MessagesSquare, type LucideIcon } from "lucide-react"

export type RealScreen = {
  id: "main" | "chat"
  label: string
  url: string
  src: string
  alt: string
  icon: LucideIcon
  caption: string
}

export const REAL_SCREENS: RealScreen[] = [
  {
    id: "main",
    label: "Диалоги",
    url: "insight.bereke.kz/home",
    src: "/main-page.JPG",
    alt: "Реальный экран Insight Service со списком клиентских диалогов",
    icon: MessagesSquare,
    caption: "Список обращений, фильтры и карточка выбранного диалога в одном рабочем экране.",
  },
  {
    id: "chat",
    label: "AI Chat",
    url: "insight.bereke.kz/chat",
    src: "/chat-ai.JPG",
    alt: "Реальный экран AI Chat в Insight Service",
    icon: Bot,
    caption: "AI Chat отвечает по данным обращений и сохраняет контекст аналитического запроса.",
  },
]

export function RealProductScreen({
  screen,
  dense = false,
}: {
  screen: RealScreen
  active?: boolean
  dense?: boolean
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f5f7fa]">
      <div className="absolute inset-0">
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes="(min-width: 1024px) 960px, 94vw"
          className="object-contain"
          priority={screen.id === "main"}
        />
      </div>

      {!dense ? (
        <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/50 bg-white/88 px-3 py-2 shadow-sm backdrop-blur-md">
          <p className="min-w-0 text-xs font-medium leading-snug text-[#273740]">
            {screen.caption}
          </p>
        </div>
      ) : null}
    </div>
  )
}

export function MainProductScreen({ active }: { active?: boolean }) {
  return <RealProductScreen screen={REAL_SCREENS[0]} active={active} />
}

export function ChatProductScreen({ active }: { active?: boolean }) {
  return <RealProductScreen screen={REAL_SCREENS[1]} active={active} />
}
