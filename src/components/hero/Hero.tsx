import fondoHero from "../../../docs/referencias/fondo-hero.png"
import tarrosHero from "../../../docs/referencias/tarros-hero.png"
import { logoMarkup } from "../../assets/logoMarkup"

const trust = [
  { label: "Marcas confiables", icon: "shield" },
  { label: "Asesoramiento personalizado", icon: "truck" },
  { label: "Local en Mendoza", icon: "store" },
] as const

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={fondoHero}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"
      />
      <div className="relative z-20 mx-auto grid min-h-[100svh] w-full max-w-6xl items-start gap-6 px-5 pt-20 pb-8 md:px-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:gap-8 lg:pt-24 lg:pb-10">
        <div className="hero-card order-2 max-w-xl rounded-[1.75rem] bg-ink/80 p-5 shadow-[var(--shadow-soft)] ring-1 ring-white/10 md:p-6 lg:order-1 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] text-paper/80 uppercase">
            Suplementos · Mendoza
          </p>
          <h1
            id="hero-title"
            className="mt-3 font-display text-[clamp(3rem,6vw,4.75rem)] leading-[0.86] font-bold tracking-[-0.035em] text-paper uppercase"
          >
            <span className="block" data-motion="title">
              Entrena
            </span>
            <span className="block text-lime" data-motion="title">
              sin excusa
            </span>
          </h1>
          <span className="mt-4 block h-0.5 w-14 bg-lime" aria-hidden="true" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper md:text-base">
            Proteína, creatina y pre-entreno elegidos para el entrenamiento. Sin promesas de más. Con el producto en la mano y el local abierto.
          </p>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {trust.map((item) => (
              <li key={item.label} className="hero-trust flex items-center gap-2">
                <TrustIcon name={item.icon} />
                <span className="max-w-[9.5rem] text-[0.68rem] leading-tight font-semibold tracking-[0.06em] text-paper uppercase">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tienda"
              className="hero-action pressable inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-lime px-5 text-sm font-semibold text-ink shadow-[var(--shadow-soft)]"
            >
              Ver tienda
              <ArrowIcon />
            </a>
            <a
              href="#guia"
              className="hero-action pressable inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border border-line bg-ink-raised/80 px-5 text-sm font-semibold text-paper"
            >
              Guías
            </a>
          </div>
        </div>

        <div className="contents lg:order-2 lg:flex lg:h-full lg:w-full lg:flex-col lg:items-end lg:justify-end lg:self-stretch">
          <div className="hero-lockup order-1 mx-auto flex w-full max-w-[19rem] flex-col items-center lg:order-none lg:mx-0 lg:w-full lg:max-w-[30rem] lg:-translate-y-16">
          <div
            role="img"
            aria-label="Samurai"
            className="hero-logo w-full translate-x-[6.4%] drop-shadow-[0_18px_30px_rgb(0_0_0/0.28)] lg:translate-x-0 [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
            dangerouslySetInnerHTML={{ __html: logoMarkup }}
          />
          <p className="hero-tagline">
            <span className="hero-tagline-text">
              <span className="hero-tagline-reveal" aria-hidden="true">
                <span className="hero-tagline-mark" />
              </span>
              Suplementos para entrenar de verdad
            </span>
          </p>
          <svg className="pointer-events-none absolute size-0" aria-hidden="true">
            <filter id="marker-edge" x="-12%" y="-40%" width="124%" height="180%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.75 0.35" numOctaves="2" seed="4" result="edge" />
              <feDisplacementMap in="SourceGraphic" in2="edge" scale="1.6" xChannelSelector="R" yChannelSelector="G" result="torn" />
              <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="9" result="grain" />
              <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0.75  0 0 0 0 1  0 0 0 0 0  0 0 0 0.28 0" result="speck" />
              <feBlend in="torn" in2="speck" mode="overlay" />
            </filter>
          </svg>
          </div>
          <img
            src={tarrosHero}
            alt="Tarros de suplementos apoyados en el piso"
            className="hero-jars order-3 mx-auto h-auto w-auto min-w-0 max-h-[min(30vh,16rem)] max-w-full justify-self-center object-contain drop-shadow-[0_18px_16px_rgb(0_0_0/0.4)] lg:order-none lg:mx-0 lg:mt-4 lg:max-h-[min(40vh,27rem)] lg:max-w-[min(100%,34rem)] lg:self-end"
          />
        </div>
      </div>
    </section>
  )
}

function TrustIcon({ name }: { name: "shield" | "truck" | "store" }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-lime" aria-hidden="true">
      {name === "shield" && (
        <path
          d="M12 3.5 5 6.2v5.3c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5V6.2L12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      )}
      {name === "truck" && (
        <path
          d="M3.5 7.5h10v8h-10v-8Zm10 2.5h3.2L20.5 13v2.5h-7V10ZM7 18.2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm9.2 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      )}
      {name === "store" && (
        <path
          d="M4 10.5 5.2 6.5h13.6L20 10.5M5 10.5v8h14v-8M4 10.5h16M9 18.5v-4h6v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
