import Form from "../util/Form"

const ContactUs = () => {
  return (
    <div id="contacto" className="bg-white text-[#3B3130]  flex flex-col gap-5 lg:flex-row items-center px-5 py-[60px] lg:px-20">
            <div className='lg:w-1/2'>
            <div className="flex gap-5 items-center">
                <h1 className="text-4xl text-center lg:text-left font-bold ">Solicita mas información</h1>
                <svg className="hidden lg:block" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" stroke="#3B3130" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>    
            <br />
                <p className="text-lg font-semibold text-left">Estás a un click de conseguir tu casa de campo en la ciudad de Piura.</p>
                <br />
            </div>
            <div className='lg:w-1/2'>
                <div className='flex flex-col justify-center  gap-5'>
                    <Form />
                </div>
            </div>
        </div>
  )
}
export default ContactUs