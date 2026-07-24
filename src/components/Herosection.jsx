import { useEffect, useRef, useState } from "react"
import pc from "../assets/computador.png"

const LINES = [
  { prompt: "$", text: "whoami " },
  { prompt: ">", text: "Vinicius Souza dos Santos " },
  { prompt: "$", text: "stack --list " },
  { prompt: ">", text: "MySQL · JAVA · C# · PHP · JavaScript · Python " },
]

function useTypedLines(lines) {
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
  const [output, setOutput] = useState(
    prefersReducedMotion.current ? lines : []
  )
  const [done, setDone] = useState(prefersReducedMotion.current)

  useEffect(() => {
    if (prefersReducedMotion.current) return

    let lineIndex = 0
    let charIndex = 0
    let cancelled = false

    const typeNext = () => {
      if (cancelled) return
      if (lineIndex >= lines.length) {
        setDone(true)
        return
      }

      const current = lines[lineIndex]
      charIndex += 1

      setOutput((prev) => {
        const next = [...prev]
        next[lineIndex] = { ...current, text: current.text.slice(0, charIndex) }
        return next
      })

      if (charIndex >= current.text.length) {
        lineIndex += 1
        charIndex = 0
        setTimeout(typeNext, 320)
      } else {
        setTimeout(typeNext, 24)
      }
    }

    typeNext()
    return () => {
      cancelled = true
    }
  }, [lines])

  return { output, done }
}

function Herosection() {
  const { output, done } = useTypedLines(LINES)

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-void pb-20 pt-8 sm:pb-28 sm:pt-10"
    >
      <div className="grid-bg ambient-glow absolute inset-0" />

      <div className="container relative mx-auto grid gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center">
        <div className="animate-fadeUp">
          <p className="jsx-tag mb-4 text-sm text-cyan">
            <span className="bracket">&lt;</span>Hero<span className="bracket">/&gt;</span>
          </p>

          <div className="w-full max-w-lg rounded-lg border border-line bg-panel/80 shadow-glow">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-danger/70" />
              <span className="h-3 w-3 rounded-full bg-cyan/60" />
              <span className="h-3 w-3 rounded-full bg-violet/60" />
              <span className="jsx-tag ml-3 text-xs text-muted">terminal</span>
            </div>

            <div className="min-h-[168px] px-5 py-6 font-mono text-sm sm:text-base">
              {output.map((line, i) => (
                <p key={i} className="mb-2">
                  <span className="mr-2 text-violet">{line.prompt}</span>
                  <span className="text-ink">{line.text}</span>
                </p>
              ))}
              {done && <span className="blink-cursor animate-blink h-4" />}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#sobre"
              className="rounded border border-cyan bg-cyan/10 px-5 py-2.5 font-display text-sm font-medium text-cyan transition-colors hover:bg-cyan/20"
            >
              Mais sobre mim
            </a>
            <a
              href="#projetos"
              className="rounded border border-line px-5 py-2.5 font-display text-sm font-medium text-ink transition-colors hover:border-violet hover:text-violet-soft"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="animate-float w-full max-w-2xl rounded-xl border border-line bg-panel p-3 shadow-glowViolet">
            <div className="flex items-center gap-1.5 pb-2 pl-1">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
            </div>
            <img
              src={pc}
              alt="Ilustração de um computador representando o ambiente de desenvolvimento"
              width="1100"
              height="750"
              className="w-full rounded-md border border-line"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection