import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCollapsed(true); // Resetear estado al entrar a 'md'
      }
    };
    // Llamar inmediatamente al montar (por si ya está en md)
    handleResize();

    // Escuchar el resize del navegador
    window.addEventListener("resize", handleResize);

    // Limpiar al desmontar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="py-2 shadow-sm bg-black/10">
      <div>
        <div className="max-w-screen-2xl mx-auto flex flex-row justify-between items-center px-5">
          <a href="#">
            <h1 className="text-4xl text-white font-light cursor-pointer">
              Angel Contreras
            </h1>
          </a>

          <button
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="md:hidden transition-transform duration-300"
          >
            <Bars3Icon
              className={`size-10 transform transition-transform duration-300 text-white ${
                collapsed ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
          <nav
            className={`absolute md:static md:min-h-fit  left-0  ${
              collapsed ? "top-[-100%]" : "top-10"
            }  md:w-auto  w-full flex items-center p-5 transition`}
          >
            <ul className="flex md:flex-row flex-col items-center gap-2 ">
              <li className="hover:bg-slate-800 hover:shadow-lg transition-colors p-2 rounded-xl ">
                <a href="#about" className="text-white">
                  Sobre mi
                </a>
              </li>
              <li className="hover:bg-slate-900 hover:shadow-lg transition-colors p-2 rounded-xl ">
                <a href="#skills" className="text-white">
                  Habilidades
                </a>
              </li>
              <li className="hover:bg-slate-900 hover:shadow-lg transition-colors p-2 rounded-xl ">
                <a href="#projects" className="text-white">
                  Proyectos
                </a>
              </li>
              <li className="hover:bg-slate-900 hover:shadow-lg transition-colors p-2 rounded-xl ">
                <a href="#contact" className="text-white font-bold">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
