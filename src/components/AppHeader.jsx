import Logo from "../assets/only-kode.jpg";
import { User } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="text-white flex justify-between items-center py-8 px-6">
      <img src={Logo} alt="Kode" className="w-22" />{" "}
      <div className="mix-blend-screen border border-white-md text-white-md rounded-full p-2 ">
        <User size={26} />
      </div>
    </header>
  );
};

export default AppHeader;
