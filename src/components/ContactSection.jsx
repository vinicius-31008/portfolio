import ContactForm from "./ContactForm"

function ContactSection() {
  return (
    <section id="contato" className="bg-panel py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="jsx-tag mb-3 text-sm text-cyan">
            <span className="bracket">&lt;</span>Contato<span className="bracket">/&gt;</span>
          </p>
          <h2 className="mb-10 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Entre em <span className="text-cyan">contato</span> comigo
          </h2>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
