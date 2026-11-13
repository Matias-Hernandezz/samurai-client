import { useEffect, useId, useRef, useState } from "react"
import mark from "../../assets/logo-samurai-solo.svg"
import wordmark from "../../assets/samurai-letras.svg"

const links = [
  { href: "#tienda", label: "Tienda" },
  { href: "#guia", label: "Guía" },
  { href: "#local", label: "Local" },
] as const

const DIRECTION_THRESHOLD = 12

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const openRef = useRef(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    openRef.current = open
  }, [open])

  useEffect(() => {
    let lastY = window.scrollY
    let accum = 0
    let frame = 0
    let isHidden = false

    const apply = () => {
      frame = 0
      const y = window.scrollY
      const delta = y - lastY
      if ((accum > 0 && delta < 0) || (accum < 0 && delta > 0)) accum = 0
      accum += delta
      lastY = y

      let nextHidden = isHidden
      if (openRef.current || y <= 8) {
        nextHidden = false
        accum = 0
      } else if (accum > DIRECTION_THRESHOLD) {
        nextHidden = true
        accum = 0
      } else if (accum < -DIRECTION_THRESHOLD) {
        nextHidden = false
        accum = 0
      }

      if (nextHidden !== isHidden) {
        isHidden = nextHidden
        setHidden(nextHidden)
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const wasOpen = useRef(false)
  useEffect(() => {
    if (open) closeButtonRef.current?.focus()
    else if (wasOpen.current) menuButtonRef.current?.focus()
    wasOpen.current = open
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
    <button
      type="button"
      className={[
        "fixed inset-0 z-20 bg-ink/50 transition-opacity duration-200",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-label="Cerrar menú"
      aria-hidden={!open}
      tabIndex={open ? 0 : -1}
      onClick={closeMenu}
    />
    <header
      data-hidden={hidden ? "true" : "false"}
      className={[
        "nav-chrome pointer-events-none fixed inset-x-0 top-0 z-30 px-3 pt-[max(0.75rem,env(safe-area-inset-top))]",
        hidden ? "-translate-y-[120%]" : "translate-y-0",
      ].join(" ")}
    >
      <div className="pointer-events-auto relative mx-auto w-full max-w-6xl">
        <div
          className={[
            "nav-pill flex items-center gap-2 rounded-full border border-lime/40 bg-lime/65 px-3 py-2 shadow-[inset_0_1px_0_rgb(198_255_0/0.55),0_12px_32px_rgb(0_0_0/0.12)] backdrop-blur-[6px] sm:px-4",
            open ? "max-md:pointer-events-none max-md:opacity-0" : "opacity-100",
          ].join(" ")}
          inert={open}
        >
          <a href="#contenido" className="flex min-h-11 items-center gap-2 focus-visible:outline-ink">
            <img src={mark} alt="" className="h-8 w-auto" />
            <img src={wordmark} alt="Samurai" className="h-4 w-auto sm:h-5" />
          </a>

          <nav aria-label="Principal" className="ml-auto hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="pressable inline-flex min-h-11 cursor-pointer items-center rounded-full px-3 text-sm font-semibold tracking-[0.04em] text-ink focus-visible:outline-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="pressable ml-auto inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink focus-visible:outline-ink md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            ref={menuButtonRef}
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <MenuIcon />
          </button>
        </div>

        <div
          id={menuId}
          data-open={open ? "true" : "false"}
          className={[
            "nav-menu absolute inset-x-0 top-0 rounded-[1.75rem] border border-white/10 bg-ink/92 p-3 text-paper shadow-[var(--shadow-soft)] backdrop-blur-xl md:hidden",
            open ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="flex items-center justify-between px-2 py-1">
            <span className="flex items-center gap-2">
              <img
                src={mark}
                alt=""
                className="h-8 w-auto [filter:invert(1)_hue-rotate(180deg)]"
              />
              <img src={wordmark} alt="" className="h-4 w-auto brightness-0 invert" />
            </span>
            <button
              type="button"
              className="pressable inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-paper"
              ref={closeButtonRef}
              onClick={closeMenu}
            >
              <span className="sr-only">Cerrar</span>
              <CloseIcon />
            </button>
          </div>
          <ul className="mt-1">
            {links.map((link) => (
              <li key={link.href} className="border-t border-white/10">
                <a
                  href={link.href}
                  className="flex min-h-12 items-center justify-between px-2 text-base font-medium"
                  onClick={closeMenu}
                >
                  {link.label}
                  <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#tienda"
            className="pressable mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime text-base font-semibold text-ink"
            onClick={closeMenu}
          >
            Ver catálogo
            <ArrowIcon />
          </a>
        </div>
      </div>

    </header>
    </>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        d="M7 17L17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
