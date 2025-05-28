import ButtonBanner from "../util/ButtonBanner"

const UsSection = () => {
    return (
        <div id="nosotros" className="bg-[#3B3130]  flex flex-col gap-5 lg:flex-row items-center px-5 py-[60px] lg:px-20">
            <div className='lg:w-1/2'>
                <h1 className="text-4xl text-center lg:text-left font-bold ">Conoce nuestra historia</h1>
                <br />
                <p className="text-lg font-semibold text-left">Empresa líder del sector inmobiliario en el norte del país, tiene más de catorce años aportando al desarrollo urbanístico ordenado en la ciudad de Piura. Ofrecemos un concepto diferente en el cual valoramos la arborización y cuidamos que nuestros proyectos cuenten con grandes parques, espacios amplios y zonas de esparcimiento, contribuyendo a mejorar la calidad de vida de miles de familias.</p>
                <br />
                <p className="text-lg font-semibold text-left">A la fecha se han desarrollado seis importantes proyectos contando ya con más de 6500 clientes que han cumplido el anhelado sueño de la casa propia en nuestras urbanizaciones..</p>
                <br />
                <div className='flex justify-center lg:justify-start'>
                    <ButtonBanner texto="Conoce más" />
                </div>
            </div>
            <div className='lg:w-1/2'>
                <div className='flex flex-col  gap-5'>
                    <div className='flex justify-end'>
                        <img className=" w-[480px] saturate-150" src="/img/valledoradonosotros.webp" alt="GoldenEvent" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UsSection