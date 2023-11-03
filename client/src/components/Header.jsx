import Logo from "../assets/logo.svg"
import Logo2 from "../assets/logo2.svg"


export default function Header() {
    return (
        <div className="relative w-full h-20 mx-2  flex flex-row items-center justify-start gap-[0.5rem]">
            <img src={Logo} alt="Logo" className="relative w-[3.38rem] h-[3.63rem] object-cover" />
            <img src={Logo2} alt="Logo2" className="relative w-[5.38rem] h-[1.81rem] object-cover" />
            
        </div>
    )
}