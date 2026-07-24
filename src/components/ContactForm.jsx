import { useState } from "react"
import axios from "axios"

const initialForm = {
  name: "",
  email: "",
  phone: "",
  cep: "",
  cidade: "",
  rua: "",
  message: "",
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [cepErro, setCepErro] = useState(false)
  const [cepCarregando, setCepCarregando] = useState(false)
  const [status, setStatus] = useState("idle") // idle | enviando | enviado

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const verificarCEP = (e) => {
    const cep = e.target.value
    setForm((prev) => ({ ...prev, cep }))

    // bug original: comparava um elemento JSX inválido em vez do tamanho da string
    if (cep.length === 8) {
      setCepErro(false)
      setCepCarregando(true)
      axios
        .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then((response) => {
          setForm((prev) => ({
            ...prev,
            cidade: response.data.city,
            rua: response.data.street,
          }))
        })
        .catch(() => {
          setCepErro(true)
        })
        .finally(() => setCepCarregando(false))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode integrar com um serviço de e-mail (ex: EmailJS, Formspree)
    // ou uma API própria. Por enquanto, apenas simula o envio.
    setStatus("enviando")
    setTimeout(() => {
      setStatus("enviado")
      setForm(initialForm)
    }, 800)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg rounded-lg border border-line bg-panelAlt p-6 shadow-glow sm:p-8"
    >
      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block text-sm text-muted">
          Nome completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-line bg-void p-2.5 text-ink placeholder:text-muted/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="mb-1 block text-sm text-muted">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-line bg-void p-2.5 text-ink placeholder:text-muted/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="mb-1 block text-sm text-muted">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-line bg-void p-2.5 text-ink placeholder:text-muted/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep" className="mb-1 block text-sm text-muted">
          CEP
        </label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={form.cep}
          onChange={verificarCEP}
          maxLength={8}
          required
          className="w-full rounded-md border border-line bg-void p-2.5 text-ink placeholder:text-muted/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        />
        {cepCarregando && <p className="mt-1 text-xs text-muted">Buscando endereço...</p>}
        {cepErro && <p className="mt-1 text-xs text-danger">CEP inválido</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="cidade" className="mb-1 block text-sm text-muted">
          Cidade
        </label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={form.cidade}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-line bg-void p-2.5 text-ink placeholder:text-muted/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rua" className="mb-1 block text-sm text-muted">
          Rua
        </label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={form.rua}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-line bg-void p-2.5 text-ink placeholder:text-muted/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="mb-1 block text-sm text-muted">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full rounded-md border border-line bg-void p-2.5 text-ink placeholder:text-muted/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
        />
      </div>

      <button
        type="submit"
        disabled={status === "enviando"}
        className="w-full rounded-md bg-cyan py-2.5 font-display font-semibold text-void transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "enviando" ? "Enviando..." : status === "enviado" ? "Mensagem enviada ✓" : "Enviar"}
      </button>
    </form>
  )
}

export default ContactForm
