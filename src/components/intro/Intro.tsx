import { useLayoutEffect, useRef, useState } from "react"
import { introLogoMarkup } from "../../assets/logoMarkup"

const EASE = "cubic-bezier(0.19, 1, 0.22, 1)"
const EYE = "#6ae120"
const SHADOW = "drop-shadow(0px 18px 30px rgb(0 0 0 / 0.28))"

const easeOut = (x: number) => {
  const x1 = 0.19
  const y1 = 1
  const x2 = 0.22
  const y2 = 1
  const cx = 3 * x1
  const bx = 3 * (x2 - x1) - cx
  const ax = 1 - cx - bx
  const cy = 3 * y1
  const by = 3 * (y2 - y1) - cy
  const ay = 1 - cy - by
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t
  const sampleDX = (t: number) => (3 * ax * t + 2 * bx) * t + cx
  let t = x
  for (let i = 0; i < 8; i++) {
    const delta = sampleX(t) - x
    const slope = sampleDX(t)
    if (Math.abs(delta) < 1e-6 || Math.abs(slope) < 1e-6) break
    t -= delta / slope
  }
  return sampleY(Math.min(1, Math.max(0, t)))
}

export function Intro() {
  const flyerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(
    () => document.documentElement.dataset.intro !== "done",
  )

  useLayoutEffect(() => {
    const root = document.documentElement
    if (root.dataset.intro === "done") return

    const flyer = flyerRef.current
    const svg = flyer?.querySelector("svg")
    const eyes = flyer?.querySelector("#logo-eyes")
    const target = document.querySelector(".hero-logo")
    if (
      !flyer ||
      !(svg instanceof SVGSVGElement) ||
      !(eyes instanceof SVGPathElement) ||
      !(target instanceof HTMLElement)
    ) {
      root.dataset.intro = "done"
      return
    }

    const blockScroll = (event: Event) => event.preventDefault()
    window.addEventListener("wheel", blockScroll, { passive: false })
    window.addEventListener("touchmove", blockScroll, { passive: false })
    let alive = true
    let settled = false
    let flyTimer = 0
    let flightFrame = 0
    const running: Animation[] = []
    const started = performance.now()

    const place = (box: { left: number; top: number; width: number; height: number }) => {
      flyer.style.left = `${box.left}px`
      flyer.style.top = `${box.top}px`
      flyer.style.width = `${box.width}px`
      flyer.style.height = `${box.height}px`
    }

    const finish = () => {
      if (!alive || settled) return
      settled = true
      window.cancelAnimationFrame(flightFrame)
      running.forEach((animation) => animation.cancel())
      flyer.style.transform = "none"
      flyer.style.opacity = "1"
      flyer.style.filter = SHADOW
      svg.style.width = "100%"
      svg.style.height = "100%"
      place(target.getBoundingClientRect())
      eyes.style.fill = EYE
      root.dataset.intro = "done"
      window.removeEventListener("wheel", blockScroll)
      window.removeEventListener("touchmove", blockScroll)
      const hide = () => {
        if (alive) setVisible(false)
      }
      requestAnimationFrame(() => requestAnimationFrame(hide))
      window.setTimeout(hide, 80)
    }

    const width = Math.min(window.innerWidth * 0.72, 640)
    flyer.style.width = `${width}px`
    flyer.style.left = `${(window.innerWidth - width) / 2}px`
    flyer.style.top = `${Math.max(72, window.innerHeight * 0.34 - flyer.offsetHeight / 2)}px`
    flyer.style.filter = SHADOW

    const appear = flyer.animate(
      [
        { opacity: 0, transform: "scale(0.94)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      { duration: 700, easing: EASE, fill: "forwards" },
    )
    running.push(appear)
    running.push(
      eyes.animate([{ fill: "#020202" }, { fill: EYE }], {
        duration: 560,
        delay: 820,
        easing: EASE,
        fill: "forwards",
      }),
    )

    const beginFlight = () => {
      if (!alive || settled) return
      appear.cancel()
      flyer.style.opacity = "1"
      flyer.style.transform = "none"
      flyer.style.transformOrigin = "top left"
      const from = flyer.getBoundingClientRect()
      const to = target.getBoundingClientRect()
      if (from.width < 1 || to.width < 1) {
        finish()
        return
      }
      svg.style.width = "100%"
      svg.style.height = "100%"
      place(from)
      const origin = { left: from.left, top: from.top, width: from.width, height: from.height }
      const flightStart = performance.now()
      const step = (now: number) => {
        if (!alive || settled) return
        const progress = Math.min(1, (now - flightStart) / 1000)
        const eased = progress === 1 ? 1 : easeOut(progress)
        const next = target.getBoundingClientRect()
        place({
          left: origin.left + (next.left - origin.left) * eased,
          top: origin.top + (next.top - origin.top) * eased,
          width: origin.width + (next.width - origin.width) * eased,
          height: origin.height + (next.height - origin.height) * eased,
        })
        if (progress < 1) flightFrame = requestAnimationFrame(step)
        else finish()
      }
      flightFrame = requestAnimationFrame(step)
    }

    void document.fonts.ready.then(() => {
      if (!alive || settled) return
      flyTimer = window.setTimeout(beginFlight, Math.max(0, 1550 - (performance.now() - started)))
    })

    const backup = window.setTimeout(finish, 6000)

    return () => {
      alive = false
      window.clearTimeout(flyTimer)
      window.clearTimeout(backup)
      window.cancelAnimationFrame(flightFrame)
      running.forEach((animation) => animation.cancel())
      window.removeEventListener("wheel", blockScroll)
      window.removeEventListener("touchmove", blockScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="intro-layer" aria-hidden="true">
      <div ref={flyerRef} className="intro-flyer" dangerouslySetInnerHTML={{ __html: introLogoMarkup }} />
    </div>
  )
}
