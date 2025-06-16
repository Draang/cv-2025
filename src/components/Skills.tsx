import { CircleStackIcon } from "@heroicons/react/24/outline";
export default function Skills() {
  return (
    <div
      className="scroll-mt-20 content-center mx-auto my-10 space-y-3 "
      id="skills"
    >
      <h2 className="font-bold text-5xl text-[#d3dbfc] py-3">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="font-bold text-3xl text-[#f5f7ff] py-3">Tecnicas</h2>
          <div className="flex flex-row flex-wrap gap-2 px-2">
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <CircleStackIcon className="size-7" />
                <span>SQL</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img
                  src="/react.svg"
                  alt="icono react"
                  width={30}
                  height={30}
                />
                <span>React</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img src="/git.svg" alt="icono react" width={30} height={30} />
                <span>Git</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img
                  src="/react.svg"
                  alt="icono react"
                  width={30}
                  height={30}
                />
                <span>React Native</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img
                  src="/python.svg"
                  alt="icono react"
                  width={30}
                  height={30}
                />
                <span>Python</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img
                  src="/photoshop.svg"
                  alt="icono react"
                  width={30}
                  height={30}
                />
                <span>Photoshop</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img
                  src="/office.svg"
                  alt="icono react"
                  width={30}
                  height={30}
                />
                <span>Office</span>
              </div>
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl text-[#f5f7ff] py-3">Idiomas</h2>
          <div className="flex flex-row flex-wrap gap-2 px-2">
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img
                  src="/mexico.svg"
                  alt="icono react"
                  width={30}
                  height={30}
                />
                <span>Español</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img
                  src="/france.svg"
                  alt="icono react"
                  width={30}
                  height={30}
                />
                <span>Frances</span>
              </div>
            </button>
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300  text-white text-xl px-2 py-1">
              <div className="flex justify-between gap-1 content-center items-center ">
                <img src="/usa.svg" alt="icono react" width={30} height={30} />
                <span>Ingles</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
