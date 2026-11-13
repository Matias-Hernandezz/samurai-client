import mark from "../../assets/logo-samurai-solo.svg"
import wordmark from "../../assets/samurai-letras.svg"

const nav = [
  { href: "#tienda", label: "Productos" },
  { href: "#guia", label: "Guía" },
  { href: "#combos", label: "Combos" },
  { href: "#local", label: "Contacto" },
] as const

const categorias = ["Proteínas", "Creatina", "Pre-entreno", "Salud y Bienestar", "Accesorios"] as const

export function SiteFooter() {
  return (
    <footer className="splash text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr]">
        <div>
          <span className="flex items-center gap-3">
            <img src={mark} alt="" className="h-10 w-auto brightness-0 invert" />
            <img src={wordmark} alt="Samurai" className="h-5 w-auto brightness-0 invert" />
          </span>
          <p className="mt-4 max-w-xs text-xs font-semibold tracking-[0.16em] text-paper/80 uppercase">
            Suplementos para entrenar de verdad
          </p>
        </div>
        <nav aria-label="Pie">
          <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Navegación</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-paper/85">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Categorías</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-paper/85">
            {categorias.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">Seguinos</p>
          <div className="mt-4 flex gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-paper/20 text-xs font-bold">IG</span>
            <span className="grid size-10 place-items-center rounded-full border border-paper/20 text-xs font-bold">TT</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pb-8 text-xs text-paper/55 md:flex-row md:justify-between md:px-8">
        <p>© 2026 Samurai. Todos los derechos reservados.</p>
        <p>Mendoza, Argentina</p>
      </div>
    </footer>
  )
}
