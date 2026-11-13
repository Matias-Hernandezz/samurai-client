import entrena from "../../../docs/referencias/01-entrena-sin-excusas.png"
import fuerza from "../../../docs/referencias/02-fuerza-samurai.png"
import mural from "../../../docs/referencias/24-mural-casco-osb.jpg"
import tarros from "../../../docs/referencias/tarros-hero.png"

const combos = [
  {
    name: "Combo ganancia",
    badge: "Más vendido",
    items: ["Whey Protein 2kg", "Creatina 300g", "Shaker Samurai"],
    price: "$ 69.990",
    focus: "left",
  },
  {
    name: "Combo definición",
    items: ["Whey Isolate 2kg", "BCAA 300g", "L-Carnitina 1000mg"],
    price: "$ 79.990",
    focus: "center",
  },
  {
    name: "Combo pre-entreno",
    items: ["Pre Workout", "Creatina 300g", "Omega 3"],
    price: "$ 69.990",
    focus: "right",
  },
] as const

const beneficios = [
  { label: "Más energía", icon: "bolt" },
  { label: "Mayor rendimiento", icon: "chart" },
  { label: "Recuperación muscular", icon: "arm" },
  { label: "Apoyo en tus objetivos", icon: "shield" },
] as const

const categorias = [
  { name: "Proteínas", slug: "proteinas", focus: "left" },
  { name: "Creatina", slug: "creatina", focus: "center" },
  { name: "Pre-entreno", slug: "pre-entreno", focus: "30% center" },
  { name: "Salud y bienestar", slug: "salud-vitaminas", focus: "70% center" },
  { name: "Accesorios", slug: "ropa-accesorios", focus: "right" },
] as const

const destacados = [
  { name: "Whey Protein 2kg", price: "$ 49.990", focus: "left" },
  { name: "Creatina 500g", price: "$ 32.990", focus: "center" },
  { name: "Pre Workout V8", price: "$ 45.990", focus: "65% center" },
  { name: "Omega 3 Fish Oil", price: "$ 27.990", focus: "right" },
] as const

const guias = [
  {
    step: "1",
    title: "Cuándo",
    copy: "Descubrí el mejor momento para tomar cada suplemento.",
    icon: "clock",
  },
  {
    step: "2",
    title: "Cómo",
    copy: "Dosis y formas de consumo recomendadas.",
    icon: "cup",
  },
  {
    step: "3",
    title: "Resultados",
    copy: "Consejos para potenciar tus resultados.",
    icon: "chart",
  },
] as const

const clientes = [
  {
    name: "Lucas M.",
    quote: "Excelente calidad y atención. Se nota la diferencia en los entrenamientos. 100% recomendado.",
  },
  {
    name: "Carla P.",
    quote: "Los mejores suplementos. Buena atención, siempre buena onda y asesoramiento real.",
  },
  {
    name: "Matías G.",
    quote: "Como entrenador, confío en Samurai para mis atletas. Productos originales y resultados comprobados.",
  },
] as const

const focusClass = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
  "30% center": "object-[30%_center]",
  "65% center": "object-[65%_center]",
  "70% center": "object-[70%_center]",
} as const

export function HomeSections() {
  return (
    <>
      <section id="combos" aria-labelledby="combos-title" className="splash scroll-mt-24 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-lime uppercase">Ahorra más · Mejores resultados</p>
            <h2 id="combos-title" className="mt-3 font-display text-5xl leading-[0.9] font-bold tracking-[-0.03em] uppercase md:text-6xl">
              Combos
              <span className="block">Samurai</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/80">
              Todo lo que necesitás en un solo pack, al mejor precio. Rendimiento real.
            </p>
            <a href="#combos" className="pressable mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lime">
              Ver todos los combos
              <ArrowIcon />
            </a>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {combos.map((combo) => (
              <li key={combo.name} className="relative flex flex-col rounded-3xl bg-white p-3 text-ink shadow-[0_18px_40px_rgb(0_0_0/0.28)]">
                {"badge" in combo ? (
                  <span className="absolute top-5 right-5 z-10 rounded-full bg-ink px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.08em] text-lime uppercase">
                    {combo.badge}
                  </span>
                ) : null}
                <img src={tarros} alt="" className={`h-36 w-full rounded-2xl bg-[#f3f4f1] object-cover ${focusClass[combo.focus]}`} />
                <h3 className="mt-3 px-1 font-display text-xl tracking-[-0.02em] uppercase">{combo.name}</h3>
                <ul className="mt-2 flex flex-1 flex-col gap-1 px-1 text-xs text-ink/70">
                  {combo.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between gap-2 px-1 pb-1">
                  <p className="text-lg font-bold">{combo.price}</p>
                  <a href="#local" className="pressable inline-flex min-h-10 items-center gap-1 rounded-full bg-ink px-3 text-xs font-semibold text-white">
                    Agregar
                    <ArrowIcon />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="beneficios" aria-labelledby="beneficios-title" className="splash scroll-mt-24 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 id="beneficios-title" className="font-display text-5xl leading-[0.9] font-bold tracking-[-0.03em] uppercase md:text-6xl">
              Beneficios
              <span className="block text-lime">reales</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/80">
              Más energía, mayor rendimiento y mejores resultados.
            </p>
            <img
              src={fuerza}
              alt="Atleta levantando una barra"
              className="mt-8 h-64 w-full rounded-3xl object-cover object-[center_20%] md:h-80"
            />
          </div>
          <ul className="grid grid-cols-2 gap-8">
            {beneficios.map((item) => (
              <li key={item.label} className="flex flex-col items-start gap-3">
                <BenefitIcon name={item.icon} />
                <p className="max-w-[9rem] font-display text-2xl leading-none tracking-[-0.03em] uppercase">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="tienda" aria-labelledby="categorias-title" className="splash scroll-mt-24 text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-lime uppercase">Nuestras categorías</p>
              <h2 id="categorias-title" className="mt-2 font-display text-5xl leading-[0.9] font-bold tracking-[-0.03em] uppercase md:text-6xl">
                Suplementos
                <span className="block">sin excusas</span>
              </h2>
            </div>
            <a href="#tienda" className="pressable hidden min-h-11 items-center gap-2 text-sm font-semibold text-lime sm:inline-flex">
              Ver todas las categorías
              <ArrowIcon />
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categorias.map((item) => (
              <li key={item.slug}>
                <a href={`/catalogo?categoria=${item.slug}`} className="pressable block">
                  <img src={tarros} alt="" className={`h-36 w-full rounded-2xl bg-white object-cover md:h-44 ${focusClass[item.focus]}`} />
                  <span className="mt-3 block text-center font-display text-lg tracking-[-0.02em] uppercase">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="destacados" aria-labelledby="destacados-title" className="scroll-mt-24 bg-[#f4f4f2] px-5 py-16 text-ink md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-ink/50 uppercase">Productos destacados</p>
            <h2 id="destacados-title" className="mt-2 font-display text-5xl leading-[0.9] font-bold tracking-[-0.03em] uppercase md:text-6xl">
              Equipá
              <span className="block">tu disciplina</span>
            </h2>
            <a href="#tienda" className="pressable mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">
              Ver todos los productos
              <ArrowIcon />
            </a>
          </div>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {destacados.map((item) => (
              <li key={item.name} className="rounded-3xl bg-white p-3 shadow-[0_16px_32px_rgb(0_0_0/0.06)]">
                <img src={tarros} alt="" className={`h-32 w-full rounded-2xl bg-[#f6f6f4] object-cover ${focusClass[item.focus]}`} />
                <h3 className="mt-3 text-sm font-semibold">{item.name}</h3>
                <p className="mt-1 text-base font-bold">{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Entrena sin excusas" className="relative">
        <img src={entrena} alt="Entrena sin excusas" className="h-72 w-full object-cover md:h-[28rem]" />
        <ul className="absolute inset-y-0 right-0 flex w-full flex-col justify-center gap-3 bg-gradient-to-l from-ink via-ink/80 to-transparent px-6 text-right md:w-1/2 md:px-12">
          {["Más disciplina", "Más resultados", "Una mejor versión de vos"].map((line) => (
            <li key={line} className="font-display text-2xl leading-none font-bold tracking-[-0.03em] text-paper uppercase md:text-4xl">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section id="guia" aria-labelledby="guia-title" className="scroll-mt-24 bg-white px-5 py-16 text-ink md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">Cómo tomarlo?</p>
            <h2 id="guia-title" className="mt-2 font-display text-5xl leading-[0.9] font-bold tracking-[-0.03em] uppercase md:text-6xl">
              Tu guía
              <span className="block">paso a paso</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">Sacá el máximo provecho de tus suplementos.</p>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {guias.map((item) => (
              <li key={item.step} className="rounded-3xl border border-ink/10 bg-white p-5 shadow-[0_16px_32px_rgb(0_0_0/0.04)]">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-full bg-lime font-display text-lg font-bold">{item.step}</span>
                  <GuideIcon name={item.icon} />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-[-0.03em] uppercase">
                  {item.step}. {item.title}
                </h3>
                <p className="mt-2 min-h-16 text-sm leading-relaxed text-ink/70">{item.copy}</p>
                <a href="/guias" className="pressable mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">
                  Ver guía
                  <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="clientes" aria-labelledby="clientes-title" className="splash scroll-mt-24 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-lime uppercase">Nuestros clientes</p>
            <h2 id="clientes-title" className="mt-2 font-display text-5xl leading-[0.9] font-bold tracking-[-0.03em] uppercase md:text-6xl">
              Resultados
              <span className="block">que hablan</span>
            </h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {clientes.map((item) => (
              <li key={item.name} className="rounded-3xl bg-white p-5 text-ink">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-ink font-display text-lg text-lime" aria-hidden="true">
                    {item.name.slice(0, 1)}
                  </span>
                  <Stars />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">“{item.quote}”</p>
                <p className="mt-4 text-sm font-bold">{item.name}</p>
                <p className="text-xs text-ink/50">Mendoza</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="local" aria-labelledby="local-title" className="scroll-mt-24 bg-[#f4f4f2] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[0.9fr_1fr_1.1fr]">
          <img src={mural} alt="Mural del local Samurai" className="h-64 w-full rounded-3xl object-cover lg:h-full" />
          <div className="flex flex-col justify-between rounded-3xl bg-lime p-6 text-ink md:p-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase">Visitanos</p>
              <h2 id="local-title" className="mt-2 font-display text-4xl leading-[0.9] font-bold tracking-[-0.03em] uppercase md:text-5xl">
                Dónde
                <span className="block">encontrarnos</span>
              </h2>
            </div>
            <div className="mt-8 flex flex-col gap-4 text-sm font-semibold">
              <p className="flex items-start gap-2">
                <PinIcon />
                <span>
                  Local en Mendoza
                  <span className="mt-1 block font-medium">Lunes a viernes, 9:00 a 13:00 y 17:00 a 21:00</span>
                </span>
              </p>
            </div>
            <a href="#local" className="pressable mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper">
              Cómo llegar
            </a>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-3xl bg-[#121410]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(198 255 0 / 0.35) 1px, transparent 1px), linear-gradient(90deg, rgb(198 255 0 / 0.35) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
            <p className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold text-paper">
              <PinIcon />
              Mendoza
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 size-3.5 shrink-0 text-lime" aria-hidden="true">
      <path d="M5 12.5 9.2 17 19 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Stars() {
  return (
    <span className="text-sm tracking-[0.12em] text-lime" aria-label="5 estrellas">
      ★★★★★
    </span>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  )
}

function BenefitIcon({ name }: { name: "bolt" | "chart" | "arm" | "shield" }) {
  return (
    <svg viewBox="0 0 48 48" className="size-12 text-lime" aria-hidden="true">
      {name === "bolt" && <path d="M26 6 12 28h10l-2 14 16-24H26l2-12Z" fill="currentColor" />}
      {name === "chart" && (
        <path d="M8 38h32M12 32V22M22 32V14M32 32V18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      )}
      {name === "arm" && (
        <path d="M14 30c2-8 8-12 14-12 4 0 8 2 10 6M18 34c6 2 14 0 18-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      )}
      {name === "shield" && <path d="M24 6 10 12v12c0 9 6 14 14 16 8-2 14-7 14-16V12L24 6Z" fill="none" stroke="currentColor" strokeWidth="3" />}
    </svg>
  )
}

function GuideIcon({ name }: { name: "clock" | "cup" | "chart" }) {
  return (
    <svg viewBox="0 0 32 32" className="size-7 text-ink" aria-hidden="true">
      {name === "clock" && (
        <path d="M16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
      {name === "cup" && <path d="M8 10h12v8a6 6 0 0 1-12 0V10Zm12 2h3a3 3 0 0 1 0 6h-3" fill="none" stroke="currentColor" strokeWidth="1.8" />}
      {name === "chart" && <path d="M6 26h20M9 22V16M16 22V10M23 22V14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
    </svg>
  )
}
