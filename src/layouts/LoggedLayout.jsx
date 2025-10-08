import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import NavBar from "../components/NavBar";

const LoggedLayout = () => {
  return (
    <div className="flex-1 grid grid-rows-[auto_1fr_auto] h-dvh">
      <AppHeader />
      <main className="p-6 grid grid-cols-1 grid-rows-1 overflow-y-auto">
        <Outlet />
      </main>
      <footer className="text-white border-t">
        <NavBar />
      </footer>
    </div>
  );
};

export default LoggedLayout;
