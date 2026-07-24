import { useState } from "react"
import logo from "../assets/vinicius.png"

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  // { label: "Contato", href: "#contato" },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">

        <a href="#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="jsx-tag text-lg font-medium text-ink">
            <span className="bracket">&lt;</span>Vinicius<span className="bracket">/&gt;</span>
          </span>
        </a>

        {/* navegação desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="jsx-tag text-sm text-muted transition-colors hover:text-cyan"
            >
              <span className="bracket">&lt;</span>
              {item.label}
              <span className="bracket">/&gt;</span>
            </a>
          ))}
        </nav>

        {/* botão do menu mobile */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded border border-line text-ink md:hidden"
        >
          <span className="jsx-tag text-cyan">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {/* navegação mobile */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-panel px-4 py-3 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="jsx-tag rounded px-2 py-2 text-sm text-muted hover:bg-panelAlt hover:text-cyan"
            >
              <span className="bracket">&lt;</span>
              {item.label}
              <span className="bracket">/&gt;</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
