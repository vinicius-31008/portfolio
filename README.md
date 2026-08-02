# Portfólio — Vinicius Souza dos Santos

Portfólio pessoal desenvolvido em React, com visual inspirado em terminal/código (tags JSX, prompt de comando animado, paleta dark com tons de ciano e violeta). Apresenta uma seção "Sobre", stack de tecnologias, projetos em destaque e rodapé com redes sociais.

🔗 **Acesse online:** [viniciussouzadossantos-portfolio.vercel.app](https://viniciussouzadossantos-portfolio.vercel.app/)

## Funcionalidades

- **Hero animado**: terminal com efeito de digitação (`whoami`, `stack --list`) e respeito à preferência `prefers-reduced-motion`.
- **Seção Sobre**: apresentação pessoal e grid com ícones das tecnologias dominadas (via [Devicon](https://devicon.dev/)).
- **Seção Projetos**: cards com nome, descrição e link para os repositórios.
- **Header responsivo**: navegação fixa com menu mobile (hambúrguer).
- **Footer**: links para GitHub, LinkedIn e WhatsApp.
- **Formulário de contato** (`ContactForm.jsx`, atualmente não renderizado): inclui busca automática de endereço por CEP via [BrasilAPI](https://brasilapi.com.br/).

## Tecnologias

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) (tema customizado com cores, fontes e animações próprias)
- [Axios](https://axios-http.com/) (consumo da API de CEP)
- [Devicon](https://devicon.dev/) (ícones das tecnologias)
- [ESLint](https://eslint.org/)

## Estrutura do projeto

```
portfolio/
├── index.html
├── src/
│   ├── main.jsx              # ponto de entrada, monta as seções da página
│   ├── index.css              # estilos globais e diretivas do Tailwind
│   ├── assets/                 # imagens e logos
│   └── components/
│       ├── Header.jsx          # navegação
│       ├── Herosection.jsx     # seção inicial com terminal animado
│       ├── Section2.jsx        # seção "Sobre" + tecnologias
│       ├── Tecnologias.jsx     # card individual de tecnologia
│       ├── Portfolio.jsx       # lista de projetos
│       ├── Projetos.jsx        # card individual de projeto
│       ├── ContactSection.jsx  # seção de contato (não usada em main.jsx)
│       ├── ContactForm.jsx     # formulário com busca de CEP
│       └── Footer.jsx          # rodapé com redes sociais
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) (recomendado 18+) e npm.

```bash
# instalar dependências
npm install

# rodar em modo desenvolvimento (http://localhost:5173)
npm run dev

# gerar build de produção
npm run build

# pré-visualizar o build de produção
npm run preview

# checar o código com o ESLint
npm run lint
```

## Personalização

- **Projetos**: edite o array `PROJETOS` em `src/components/Portfolio.jsx` com nome, descrição e link de cada repositório.
- **Redes sociais**: edite o array `SOCIALS` em `src/components/Footer.jsx`.
- **Stack exibida em "Sobre"**: edite o array `STACK` em `src/components/Section2.jsx` (usa classes do Devicon, ex. `devicon-react-original`).
- **Seção de contato**: o componente `ContactSection` já está pronto mas comentado em `src/main.jsx`; basta descomentar o import e a tag `<ContactSection />` para exibi-lo. O envio do formulário atualmente é apenas simulado — para funcionar de verdade, integre com um serviço como [EmailJS](https://www.emailjs.com/) ou [Formspree](https://formspree.io/).

## Licença

Este projeto é de uso pessoal. Sinta-se à vontade para usá-lo como referência, mas lembre-se de trocar as informações, projetos e links pelos seus próprios dados antes de publicar.

## Autor

**Vinicius Souza dos Santos**
- GitHub: [@vinicius-31008](https://github.com/vinicius-31008)
- LinkedIn: [Vinicius Souza dos Santos](https://www.linkedin.com/in/vinícius-souza-dos-santos-789aa8377)