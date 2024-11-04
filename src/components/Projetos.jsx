function Projeto({nome, descricao, link}){
    return(
        <div className="flex flex-col items-center w-1/3 p-4 text-white">

            <div className="w-full flex flex-col items-center border-2 border-sky-600 rounded p-4 font-sans">
            <h2>{nome}</h2>
            <br />
            <p>{descricao}</p>
            <br />
            <button link={link} className="bg-secondary-900 font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600 border-2">Projeto</button>
            </div> 

        </div>
    )
}

export default Projeto