import { useState } from "react";
import axios from "axios";

function ContactForm() {

  const [cidade, setCidade] = useState();

  const [rua, setRua] = useState();

  const [cepErro, setCepErro] = useState(false);

  const verificarCEP = (e) => {
    if(<e className="target value length"></e> == 8){
      axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)
      .then(function (response){
        setCidade(response.data.city)
        setRua(response.data.street)
        setCepErro(true)
        
    })
      .catch(function (response){
        setCepErro(true)
      })
    }
  }


  return (
    <form className="p-6 bg-gray-600 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name">Nome Completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full border border-gray-400 rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-400 rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 w-full border border-gray-400 rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          required
          onChange={verificarCEP}
          className="mt-1 w-full border border-gray-400 rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
        />
        {cepErro &&
        <p className="text-red-600">cep invalido</p>
        }
      </div>

      <div className="mb-4">
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
          className="mt-1 w-full border border-gray-400 rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          id="rua"
          name="rua"
          required
          onChange={(e) => setRua(e.target.value)}
          className="mt-1 w-full border border-gray-400 rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 w-full border border-gray-400 rounded-md p-2 focus:ring focus:ring-blue-200 text-black"
        />
      </div>

      <button type="submit" className="w-full bg-secondary-500 text-white font-semibold rounded-md p-2 hover:bg-secondary-700 hover:transition-transform bg-gray-500">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;