import type { ReactNode } from "react"
import {
  LayoutDashboard,
  MessagesSquare,
  Bot,
  BarChart3,
  PieChart,
  Settings,
  Search,
  Bell,
} from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
  { id: "dashboard", label: "Главная", icon: LayoutDashboard },
  { id: "search", label: "Поиск диалогов", icon: MessagesSquare },
  { id: "ai", label: "AI Chat", icon: Bot },
  { id: "analytics", label: "Аналитика", icon: BarChart3 },
  { id: "stats", label: "Статистика", icon: PieChart },
] as const

export type ScreenId = (typeof NAV)[number]["id"]

/** Browser-like frame that keeps the product mock readable on presentation slides. */
export function BrowserFrame({
  children,
  url = "insight.bereke.kz",
  className,
  showChrome = true,
}: {
  children: ReactNode
  url?: string
  className?: string
  showChrome?: boolean
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_24px_0_rgba(0,0,0,0.12)]",
        className,
      )}
    >
      {showChrome ? (
        <div className="flex shrink-0 items-center gap-3 border-b border-border bg-secondary px-3 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--bereke-yellow-500)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
          <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-md bg-card px-2.5 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {url}
          </div>
        </div>
      ) : null}
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  )
}

/** Inner application shell: sidebar + topbar + content slot */
export function AppShell({
  active,
  title,
  children,
}: {
  active: ScreenId
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex h-full w-full bg-background">
      {/* Sidebar */}
      <aside className="hidden w-52 shrink-0 flex-col border-r border-border bg-sidebar p-2.5 md:flex">
        <div className="flex items-center px-2 py-2.5">
          <span className="font-heading text-sm font-semibold tracking-normal">
            Insight <span className="text-primary">Service</span>
          </span>
        </div>
        <nav className="mt-1 flex flex-col gap-1">
          {NAV.map((item) => {
            const Icon = item.icon
            const isActive = item.id === active
            return (
              <div
                key={item.id}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] font-medium",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </div>
            )
          })}
        </nav>
        <div className="mt-auto flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-muted-foreground">
          <Settings className="h-4 w-4" />
          Настройки
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold text-foreground">{title}</h2>
          <div className="ml-auto flex items-center gap-2.5">
            <div className="hidden items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground sm:flex">
              <Search className="h-3.5 w-3.5" />
              Поиск по обращениям…
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card">
              <Bell className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
              ИС
            </div>
          </div>
        </header>
        <div className="min-h-0 flex-1 overflow-hidden p-4">{children}</div>
      </div>
    </div>
  )
}

export function StatCard({
  label,
  value,
  delta,
  positive = true,
}: {
  label: string
  value: string
  delta: string
  positive?: boolean
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-3.5">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1.5 font-heading text-2xl font-semibold tracking-normal text-foreground">
        {value}
      </p>
      <span
        className={cn(
          "mt-1 inline-block text-xs font-medium",
          positive ? "text-accent" : "text-destructive",
        )}
      >
        {delta}
      </span>
    </div>
  )
}
