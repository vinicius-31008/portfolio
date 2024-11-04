function Tecnologias({img, nome}){
    return(
        <div className="w-1/4 p-4">

            <div className="algin items-center rounded hover:bg-gray-500  border-2 border-sky-600 w-full p-10">
            <i className={img + " text-9xl"} ></i>
            <h2 className="pt-12 pl-6 font-bold text-2xl">{nome}</h2>
            </div>
            
        </div>
    )

}

export default Tecnologias