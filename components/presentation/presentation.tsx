"use client"

import { Deck, type Slide } from "@/components/presentation/deck"
import { SlideTitle } from "@/components/slides/slide-title"
import { SlideTeam } from "@/components/slides/slide-team"
import { SlideFocus } from "@/components/slides/slide-focus"
import { SlideWhat } from "@/components/slides/slide-what"
import { SlideClosing } from "@/components/slides/slide-closing"

const slides: Slide[] = [
  { id: "title", label: "Insight Service", render: () => <SlideTitle /> },
  { id: "team", label: "Команда", render: () => <SlideTeam /> },
  { id: "focus", label: "Фокус команды", render: () => <SlideFocus /> },
  { id: "what", label: "Что такое Insight Service", render: () => <SlideWhat /> },
  { id: "closing", label: "Заключение", render: () => <SlideClosing /> },
]

export function Presentation() {
  return <Deck slides={slides} />
}
