import { Outlet } from "react-router-dom";
import Logo from "../assets/only-kode.jpg";

const LoggedLayout = () => {
  return (
    <div className="flex-1 grid grid-rows-[auto_1fr_auto]">
      <header className="text-white flex justify-between items-center py-8 px-6">
        <img src={Logo} alt="Kode" className="w-22" />{" "}
        <div className="mix-blend-screen bg-muted rounded-full p-1 w-8 h-8"></div>
      </header>
      <main className="p-6 grid grid-cols-1 grid-rows-1">
        <Outlet />
      </main>
      <footer className="text-white border-t px-6 py-2">
        <nav className="p-1">
          <ul className="flex justify-between">
            <li className="p-4 hover:bg-gray-button">1</li>
            <li className="p-4 hover:bg-gray-button">2</li>
            <li className="p-4 hover:bg-gray-button">3</li>
            <li className="p-4 hover:bg-gray-button">4</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default LoggedLayout;
