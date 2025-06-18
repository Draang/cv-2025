import {
  AtSymbolIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { calculateAge } from "../helpers";
import ExperienciaLaboral from "./ExperienciaLaboral";
import ExperienciaAcademica from "./ExperienciaAcademica";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const age = calculateAge();
  const { t } = useTranslation("", { keyPrefix: "about-me" });

  return (
    <section
      className="scroll-mt-20 content-center mx-auto my-10 space-y-3 "
      id="about"
    >
      <div className=" space-x-2 py-5 grid grid-cols-1 md:grid-cols-2 content-center">
        <div className="content-center align-middle items-center mx-auto">
          <img src="/DSC04266.png" alt="" className="w-[200px] lg:w-[400px]" />
        </div>
        <div className="content-center align-middle items-center mx-auto">
          <h2 className="font-bold text-white md:text-5xl text-2xl">
            {t("hello")}{" "}
            <span className="md:text-6xl text-4xl inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent uppercase">
              Angel Contreras
            </span>
          </h2>{" "}
          <p className="text-white text-xl font-extralight"> {t("title")}</p>
        </div>
      </div>
      <div className="py-5 mx-auto">
        <h2 className="font-bold text-2xl text-[#c7d2fe] py-3">{t("sub-title")}</h2>
        <p className="text-white text-lg">{t("description", { age: age })}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="flex items-start md:items-center justify-end md:justify-start gap-4 md:flex-row flex-col ">
          <a href="mailto:angel.code2300@gmail.com" target="_blank">
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300 hover:bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe]  text-white hover:text-slate-900 text-lg">
              <div className="flex justify-between gap-1 content-center items-center ">
                <EnvelopeIcon className=" size-5" />
                <span>E-Mail</span>
              </div>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/angel-contreras2308/"
            target="_blank"
          >
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300 hover:bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe]  text-white hover:text-slate-900 text-lg">
              <div className="flex justify-between gap-1 content-center items-center ">
                <AtSymbolIcon className=" size-5" />
                <span>Linkedin</span>
              </div>
            </button>
          </a>
          <a href="https://github.com/Draang" target="_blank">
            <button className="cursor-pointer bg-black/50 p-1 rounded-lg border-2 border-black/60 transition-colors duration-300 hover:bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe]  text-white hover:text-slate-900 text-lg">
              <div className="flex justify-between gap-1 content-center items-center ">
                <CodeBracketIcon className=" size-5" />
                <span>Github</span>
              </div>
            </button>
          </a>
        </div>

        <div className="flex items-start md:items-center justify-start md:justify-start gap-4 md:flex-row flex-col ">
          <a href="#projects">
            <button
              role="link"
              className="relative index cursor-pointer bg-[linear-gradient(#fff,#fff),linear-gradient(#b2a8fd,#c7d2fe)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#8678f9] text-xl font-semibold"
            >
              {t("btn-projects")}
            </button>
          </a>
        </div>
      </div>
      <ExperienciaLaboral />
      <ExperienciaAcademica />
    </section>
  );
}
