import type { ReactNode } from "react"
import { Intro } from "../intro/Intro"
import { SiteFooter } from "./SiteFooter"
import { SiteHeader } from "./SiteHeader"

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-dvh bg-ink text-paper">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-30 focus:rounded-full focus:bg-lime focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <Intro />
      <main id="contenido">{children}</main>
      <SiteFooter />
      <a
        href="#local"
        className="pressable fixed right-4 bottom-4 z-30 inline-flex min-h-11 items-center rounded-full bg-lime px-4 text-sm font-semibold text-ink"
      >
        WhatsApp
      </a>
    </div>
  )
}
