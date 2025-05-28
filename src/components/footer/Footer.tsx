import { handleScrollToElement } from "../util/util";

const Footer = () => {
  return (
    <footer className="bg-[#3B3130]  px-10 py-10 lg:px-20">
      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-4 mb-5">
        {/* Logo y descripción */}
        <div className="col-span-1">
          <img
            src="/img/shr_logo.png"
            alt="Logo"
            className="w-40 mx-auto saturate-50"
          />
          {/* <p className="text-center">
            Explora y construye soluciones digitales a medida con calidad y soporte continuo.
          </p> */}
        </div>

        {/* Columna 1 */}

        <div>
          <p className="font-extrabold mb-2">Información</p>
          <ul className="space-y-1">
            <li>
              <p className="text-white">Ruc: 20613505823</p>
            </li>
            <li>
              <p className="text-white">Razón social SHR Inmobiliaria EIRL</p>
            </li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div>
          <p className="font-extrabold  mb-2">Enlaces</p>
          <ul className="space-y-1">
            <li>
              <button onClick={()=>handleScrollToElement("nosotros")} className="hover:underline hover:cursor-pointer text-white">
                Nosotros
              </button>
            </li>
            <li>
              <button onClick={()=>handleScrollToElement("proyecto")} className="hover:underline hover:cursor-pointer text-white">
                Proyectos
              </button>
            </li>
            <li>
              <button onClick={()=>handleScrollToElement("contacto")} className="hover:underline hover:cursor-pointer text-white">
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <p className="font-extrabold  mb-2">Contáctanos</p>
          <ul className="space-y-1">
            <li>
              <p className="text-white">
                Libertad 639 , Piura
              </p>
            </li>
            <li>
              <p className="text-white">
                shrinmobiliariaeirl@gmail.com
              </p>
            </li>
            <li>
              <p className="text-white">
                +51 953 854 254
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea */}
      <hr className="border-gray-400 mb-4" />

      {/* Footer inferior */}
      <div className="flex flex-col md:flex-row justify-center text-xs  gap-3">
        <p>Copyright © 2025 SHR INMOBILIARIA EIRL - Diseñado por Kremin</p>
        {/* <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Términos</a>
          <a href="#" className="hover:underline">Política de privacidad</a>
          <a href="#" className="hover:underline">Licencias</a>
          <a href="#" className="hover:underline">Contacto</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
