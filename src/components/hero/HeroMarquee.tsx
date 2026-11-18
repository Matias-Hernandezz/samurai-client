const phrases = [
  "Entrena sin excusa",
  "Fuerza Samurai",
  "Proteína de verdad",
  "Creatina",
  "Pre-entreno",
  "Local en Mendoza",
  "Sin promesas de más",
  "Más energía",
  "Recuperación muscular",
  "Suplementos para entrenar",
] as const

function PhraseTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="hero-marquee-track flex shrink-0 items-center gap-x-8 whitespace-nowrap px-4 md:gap-x-12 md:px-6"
      aria-hidden={ariaHidden || undefined}
    >
      {phrases.map((phrase) => (
        <li key={phrase} className="flex items-center gap-x-8 md:gap-x-12">
          <span className="font-display text-sm font-bold tracking-[0.12em] text-ink uppercase md:text-base">
            {phrase}
          </span>
          <span className="text-ink/70" aria-hidden="true">
            ·
          </span>
        </li>
      ))}
    </ul>
  )
}

export function HeroMarquee() {
  return (
    <div
      className="hero-marquee overflow-hidden bg-lime py-3 text-ink"
      role="region"
      aria-label="Frases destacadas"
    >
      <div className="hero-marquee-viewport flex w-max">
        <PhraseTrack />
        <PhraseTrack ariaHidden />
      </div>
    </div>
  )
}
