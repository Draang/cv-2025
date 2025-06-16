// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";


import "../styles/styles.css";

const PROJECTS = [
  {
    url: "https://genuine-faun-5bb93b.netlify.app/",
    title: "Buscador de recetas para cocteles",
    img: "/projects/00.png",
    descripcion:
      "Aplicación desarrollada en React que permite al usuario buscar recetas de cócteles a partir del nombre del trago o sus ingredientes. Utiliza una API externa para mostrar detalles como los ingredientes, instrucciones de preparación y una imagen del cóctel.",
  },
  {
    url: "https://voluble-bombolone-130fa5.netlify.app/",
    title: "Buscador de temperaturas",
    img: "/projects/01.png",
    descripcion:
      "Proyecto en React que muestra la temperatura actual y el clima de una ciudad ingresada por el usuario. Consume una API de clima (como OpenWeatherMap) y presenta datos como la temperatura, la humedad y el estado del cielo en tiempo real.",
  },
  {
    url: "https://cheery-sprinkles-5b7d16.netlify.app/",
    title: "Contador de calorias",
    img: "/projects/02.png",
    descripcion:
      "Aplicación interactiva construida con React para calcular las calorías consumidas en el día. El usuario puede agregar alimentos, asignarles valores calóricos y llevar un control del total diario. Ideal para quienes siguen una dieta o quieren monitorear su nutrición.",
  },
  {
    url: "https://effervescent-truffle-d79f0a.netlify.app/",
    title: "Control de gastos",
    img: "/projects/03.png",
    descripcion:
      "Herramienta desarrollada con React para gestionar los gastos personales o familiares. Permite establecer un presupuesto, registrar egresos y visualizar un resumen gráfico del estado financiero. Útil para mejorar la administración del dinero.",
  },
];
export default function Projects() {
  return (
    <div
      className="scroll-mt-20 content-center mx-auto my-10 space-y-3 "
      id="projects"
    >
      <h2 className="font-bold text-5xl text-[#d3dbfc] py-3">Proyectos</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {PROJECTS.map((project) => (
          <SwiperSlide key={project.url}>
            <div
              className={`w-full h-full mx-20 my-40 items-start justify-start overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black/15 to-gray-950/10 px-4 py-8 shadow-2xl space-y-2 `}
            >
              <div className="grid md:grid-cols-2 grid-cols-1  h-full justify-center items-center">
                <div className="text-left space-y-4">
                  <h1 className="text-white font-bold text-2xl md:text-3xl">
                    {project.title}
                  </h1>
                  <p className="text-white md:not-sr-only sr-only">
                    {project.descripcion}
                  </p>
                  <a
                    role="link"
                    className="relative index cursor-pointer bg-[linear-gradient(#fff,#fff),linear-gradient(#b2a8fd,#c7d2fe)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#8678f9] text-xl font-semibold"
                    href={project.url}
                    target="_blank"
                  >
                    Ir a pagina
                  </a>
                </div>
                <img
                  src={project.img}
                  alt={`${project.title} imagen`}
                  className="rounded shadow"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
