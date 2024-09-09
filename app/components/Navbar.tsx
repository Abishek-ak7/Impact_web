import Image from "next/image";
import logo from "../components/images/logo.png";
import menu from "../components/images/menu.png";
import line from "../components/images/line.png"

export default function Navbar() {
  return (
    <>
      <div className="relative flex items-center justify-between p-1.5 bg-black h-20">
        {/* Left Side (Menu and Line) */}
        <div className="flex items-center space-x-5 " >
          <Image className="w-9 mx-3" src={menu} alt="MenuBar" />
          <Image className="w-0.5" src={line} alt="Line" />
        </div>

        {/* Center (Logo) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image className="w-52" src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
}
