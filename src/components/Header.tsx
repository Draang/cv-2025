import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="z-5 shadow-xl ring-1 ring-gray-900/5 sticky top-0 bg-gradient-to-r from-slate-800/20 to-slate-700/20 backdrop-blur-md">
      <nav className="px-4 py-4 sm:flex sm:items-center sm:justify-between lg:mx-20">
        <section className="flex justify-between">
          <a href="#">
            <h1 className="text-4xl text-[#F0F6D4] font-bold cursor-pointer">
              Angel Contreras
            </h1>
          </a>
          <button
            className="text-gray-700 sm:hidden transition delay-50 duration-300  hover:bg-slate-900 rounded px-1 "
            onClick={() => {
              setShow(!show);
            }}
          >
            <Bars3Icon className="size-8 text-white transition delay-100 duration-300 hover:rotate-180" />
          </button>
        </section>
        <div
          className={`flex flex-col transition delay-150 duration-300 items-start mt-3 gap-5 sm:flex-row sm:m-0 sm:visible ${
            show ? "" : "hidden sm:flex"
          }`}
        >
          <a
            href="#about"
            className={`relative after:absolute after:bottom-0 after:left-0 after:right-0
               after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-white
                text-white md:text-lg after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                hover:after:origin-bottom hover:after:scale-x-100`}
          >
            Sobre mi
          </a>

          <a
            href="#projects"
            className={`relative after:absolute after:bottom-0 after:left-0 after:right-0
               after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-white
                text-white md:text-lg after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                hover:after:origin-bottom hover:after:scale-x-100`}
          >
            Proyectos
          </a>
          <a
            href="#skills"
            className={`relative after:absolute after:bottom-0 after:left-0 after:right-0
               after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-white
                text-white md:text-lg after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                hover:after:origin-bottom hover:after:scale-x-100`}
          >
            Habilidades
          </a>
          <a
            href="#contact"
            className={`relative after:absolute after:bottom-0 after:left-0 after:right-0
               after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-white
                text-white md:text-lg after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                hover:after:origin-bottom hover:after:scale-x-100`}
          >
            Contacto
          </a>
        </div>
      </nav>
    </div>
  );
}
