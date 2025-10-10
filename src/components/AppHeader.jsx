import { useState } from "react";
import Logo from "../assets/only-kode.jpg";
import { User, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthProvider";

const AppHeader = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    //seria bueno que header py-8 se aplique cuando el telefono es mas alto
    <header className="text-white flex justify-between items-center py-6 px-6">
      <img src={Logo} alt="Kode" className="w-22 mix-blend-screen" />
      <div className="relative w-[44px] h-[44px] ">
        <div
          className={`absolute top-0 left-0 border border-white-md text-white-md rounded-full overflow-hidden transition-all
          duration-300
          ease-in-out h-[44px]  ${isOpen && "h-[88px]"}`}
        >
          <button className="p-2" onClick={toggleMenu}>
            <User size={26} />
          </button>
          <button className="p-2" onClick={logout}>
            <LogOut className="p-1" size={26} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
