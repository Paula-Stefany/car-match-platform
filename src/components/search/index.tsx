
export function Search(){
    return(
        <section className="flex w-full max-w-5xl gap-2 text-lg py-6 mx-auto">
            <input type="text" placeholder="Qual carro procura?" className="h-14
            bg-violet-50 items center px-2 w-full  text-gray-600 border-none outline-none rounded shadow placeholder:text-gray-600"/>
            <button className="w-fit px-3 bg-violet-950 text-amber-50 rounded shadow font-medium cursor-pointer md:hover:bg-violet-200 md:hover:text-violet-700 md:hover:transition md:duration-300 ease-in-out">
                Buscar
            </button>
        </section>
    )
}
