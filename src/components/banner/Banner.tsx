import ButtonBanner from "../util/ButtonBanner"

const Banner = () => {
    return (
        <div id="inicio" className="relative h-screen flex justify-center items-center">
            <div className="w-full h-full absolute top-0 left-0 bg-gray-900 opacity-40">
            </div>
            <img className="h-full w-full object-cover" src="/img/ban.webp" alt="GoldenEvent" />
            <div className="w-full xl:w-1/2 h-full absolute top-10 left-0 flex flex-col justify-center items-center xl:items-start xl:justify-center gap-4 px-5 md:px-20 lg:mx-0">
                <h1 className="text-5xl  lg:text-7xl font-extrabold text-center xl:text-left leading-tight">
                    ¡Lotes para casas de campo en venta!
                </h1>
                <p className="text-lg lg:text-3xl font-bold mt-2 text-center xl:text-left">
                    Vive rodeado de naturaleza, tranquilidad y aire puro, en un entorno diseñado para tu bienestar y el de tu familia.
                </p>
                <p className="text-md lg:text-2xl font-bold text-center xl:text-left">
                    Accede a precios exclusivos, con lotes habilitados, avenidas amplias, áreas verdes y mas...
                </p>
                <ButtonBanner texto="Contactar" />
            </div>

        </div>
    )
}
export default Banner