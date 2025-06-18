// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "../styles/styles.css";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    url: "https://genuine-faun-5bb93b.netlify.app/",
    key: "project1",
    img: "/projects/00.png",
  },
  {
    url: "https://voluble-bombolone-130fa5.netlify.app/",
    key: "project2",
    img: "/projects/01.png",
  },
  {
    url: "https://cheery-sprinkles-5b7d16.netlify.app/",
    key: "project3",
    img: "/projects/02.png",
  },
  {
    url: "https://effervescent-truffle-d79f0a.netlify.app/",
    key: "project4",
    img: "/projects/03.png",
  },
];
export default function Projects() {
  const { t } = useTranslation("", { keyPrefix: "projects" });

  return (
    <div
      className="scroll-mt-20 content-center mx-auto my-10 space-y-3 "
      id="projects"
    >
      <h2 className="font-bold text-5xl text-[#d3dbfc] py-3">{t("title")}</h2>

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
                    {t(`${project.key}.title`)}
                  </h1>
                  <p className="text-white md:not-sr-only sr-only">
                    {t(`${project.key}.description`)}
                  </p>
                  <a
                    role="link"
                    className="relative index cursor-pointer bg-[linear-gradient(#fff,#fff),linear-gradient(#b2a8fd,#c7d2fe)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#8678f9] text-xl font-semibold"
                    href={project.url}
                    target="_blank"
                  >
                    {t("btn")}
                  </a>
                </div>
                <img
                  src={project.img}
                  alt={`imagen`}
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
