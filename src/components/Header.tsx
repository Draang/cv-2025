export default function Header() {
  return (
    <header className="py-2 shadow-sm bg-black/10 sticky top-0">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
        <a href="#">
          <h1 className="text-4xl text-white font-light cursor-pointer">
            Angel Contreras
          </h1>
        </a>

        <nav
          className={`  md:min-h-fit  left-0   md:w-auto  w-full flex items-center p-5 transition`}
        >
          <ul className="flex items-center gap-2 ">
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
    </header>
  );
}
