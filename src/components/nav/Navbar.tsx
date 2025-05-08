import { useNearSection } from "../../customHooks/useNearSection";
import Socials from "../util/Socials"
import "./Navbar.css"
import NavbarMobile from "./NavbarMobile"
const Navbar = () => {

    let isNear = useNearSection("proyecto", -300);
    isNear = useNearSection("galeria", 0);
    return (
        <nav className={`flex w-full justify-between items-center px-5 md:px-20 fixed z-20 transition-colors duration-800 ${!isNear ? "bg-[#3B3130]" : "bg-[#174537]"}`}>
            {/* <div className="logo">GoldenEvent</div> */}
            <img className="logo saturate-50 w-24" src="/img/shr_logo.png" alt="GoldenEvent" />
            <div className="gap-10 md:flex hidden">
                <button className="btnNav">INICIO</button>
                <button className="btnNav">SERVICIOS</button>
                <button className="btnNav">CONTACTO</button>
            </div>
            <Socials />
            <label className="block md:hidden">
                <div
                    className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                >
                    <input className="hidden peer" type="checkbox" />
                    <div className="navbarMobileContainer md:hidden ">
                        <NavbarMobile />
                    </div>
                    <div
                        className="w-[50%] h-[2px] bg-[#FFF0D1] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                    ></div>
                    <div
                        className="w-[50%] h-[2px] bg-[#FFF0D1] rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                    ></div>
                    <div
                        className="w-[50%] h-[2px] bg-[#FFF0D1] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                    ></div>
                </div>
            </label>
        </nav>

    )
}
export default Navbar