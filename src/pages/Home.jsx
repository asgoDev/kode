import { CirclePlus, NotebookText, Users } from "lucide-react";
export default function Home() {
  return (
    <div className="text-white-md grid grid-rows-[auto_1fr_auto]">
      <p className="text-muted translate-x-0 translate-y-0">Bienvenido, rey.</p>
      <section className="grid place-items-center ">
        <div className="text-center animate-[float_3s_ease-in-out_infinite]">
          <span className="text-[10px] text-muted font-bold uppercase tracking-widest translate-y-[10px]">
            Ingresos del día
          </span>
          <p className="text-7xl font-bold after:content-['$'] after:text-4xl after:align-middle after:font-light">
            500
          </p>
          <span></span>
        </div>
      </section>
      <section className="grid grid-rows-[100px_130px] grid-cols-[1fr_1fr] gap-2 content-end">
        <button className=" py-4 px-6 bg-gray-button border border-muted rounded-lg col-span-2 flex justify-between items-center">
          <div className="text-left">
            <p className="font-bold text-lg">Registrar corte</p>
            <span className="text-sm text-muted">
              Jay papito, salió cortecito
            </span>
          </div>
          <CirclePlus className="text-white-md" size={30} />
        </button>
        <button className=" p-4 bg-gray-button border border-muted rounded-lg">
          <div className="text-left">
            <NotebookText className="text-white-md mb-2" size={30} />
            <p className="font-bold text-lg">Historial</p>
            <span className="text-sm text-muted">25 cortes</span>
          </div>
        </button>
        <button className=" p-4 bg-gray-button border border-muted rounded-lg">
          <div className="text-left">
            <Users className="text-white-md mb-2" size={30} />
            <p className="font-bold text-lg">Clientes</p>
            <span className="text-sm text-muted">45 registrados</span>
          </div>
        </button>
      </section>
    </div>
  );
}
