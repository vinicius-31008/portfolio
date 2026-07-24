// Troque os links abaixo pelos seus links reais.
const SOCIALS = [
  {
    nome: "GitHub",
    href: "https://github.com/vinicius-31008",
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
  },
  {
    nome: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
  },
  {
    nome: "WhatsApp",
    href: "https://wa.me/55",
    path: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.4 5.13L2 22l5.13-1.5a9.86 9.86 0 0 0 4.9 1.3h.01c5.46 0 9.9-4.45 9.9-9.91C21.94 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.39 1.3-1.92 1.36-.5.06-1.02.09-3.28-.7-2.77-1-4.55-3.83-4.69-4.01-.14-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.02.96-2.29.24-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.57.8 1.98.87 2.13.07.14.12.31.02.5-.1.18-.15.29-.29.45-.15.16-.3.35-.44.47-.14.13-.29.27-.13.53.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.2 1.37.26.14.42.12.57-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.8.85.26.13.43.2.5.31.06.11.06.65-.18 1.33Z",
  },
]

function Footer() {
  return (
    <footer className="border-t border-line bg-void py-10">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="jsx-tag text-sm text-muted">
          <span className="bracket">&lt;/</span>Vinicius<span className="bracket">&gt;</span>
        </span>

        <div className="flex gap-5">
          {SOCIALS.map((social) => (
            <a
              key={social.nome}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.nome}
              className="text-muted transition-colors hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Vinicius Souza dos Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
