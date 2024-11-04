import ContactForm from "./ContactForm";

function ContactSection () {
    return (
        <section id="contato" className="flex flex-col items-center bg-gray-700 text-white">
            <div className="container py-8">
                <h1 className="text-2xl text-center font-sans">Entre em <span className="text-sky-400">Contato</span> comigo</h1>
                <h1 className="text-2xl pb-4 pl-4 text-center text-sky-400 font-sans">_______</h1>
                <br/>
                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
export default ContactSection;