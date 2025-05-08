import ButtonBanner from "../util/ButtonBanner"

const InfoProyecto = () => {
    return (
        <div id="proyecto" className=" bg-white text-[#3B3130] flex flex-col md:flex-row items-center px-5 py-[60px] md:px-20">
            <div className='md:w-1/2'>
                <div className='flex flex-col  gap-5'>
                    <div className='flex justify-center'>
                        <img className="w-[500px]" src="/img/logo_valledorado.webp" alt="GoldenEvent" />
                    </div>
                </div>
            </div>
            <div className='md:w-1/2'>
                <h1 className="text-4xl hidden md:block font-bold text-[#226752]">Residencial campestre Valle Dorado</h1>
                <br />
                <p className="text-lg font-semibold text-center md:text-left">Proyecto con títulos de propiedad a tan solo 5 minutos de la ciudad, disfruta del campo y la tranquilidad que tu familia se merece.</p>
                <br />
                <p className="text-lg font-semibold text-center md:text-left">Contará con Pórtico de Ingreso, Parques y áreas verdes, zona de parrillas, agua potable, cancha de futbol y mucho mas...</p>
                <br />
                <div className='flex justify-center md:justify-start'>
                <ButtonBanner texto="Consultar por proyecto" textColor="#f3bd58" buttonColor="#226752" iconColor="#f3bd58" />
                </div>
            </div>
            
        </div>
    )
}
export default InfoProyecto