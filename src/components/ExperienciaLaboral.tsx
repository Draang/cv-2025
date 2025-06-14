import Card from "./Card";

export default function ExperienciaLaboral() {
  return (
    <div className="space-y-1">
      <h2 className="font-bold text-2xl text-[#c7d2fe] py-3">
        Experiencia Laboral
      </h2>

      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <>
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Desarrollador Frontend Jr
              </h2>
              <p className="font-light text-slate-200 text-sm">
                Ganevales <span className="italic">03/2024 - 03/2025</span>
              </p>
            </div>
            <p className="text-white">
              Desarrollador de Frontend en{" "}
              <span className="font-bold">React Native</span> para una
              aplicación para digitalizar el proceso de negocio de la empresa en
              todos sus puntos y departamentos
            </p>
          </>
        </Card>

        <Card>
          <>
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Desarrollador de software Jr
              </h2>
              <p className="font-light text-slate-200 text-sm">
                TOM <span className="italic">1/ 2023 - 12/2023</span>
              </p>
            </div>
            <p className="text-white">
              Desarrollador en proyectos de software enfocados a los
              departamentos de Ingenieria y Calidad para la digitalización de
              procesos en el <span className="font-bold">SCADA Ignition</span> y
              analisis de datos con <span className="font-bold">SQL</span>
            </p>
          </>
        </Card>
        <Card>
          <>
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Desarrollador
              </h2>
              <p className="font-light text-slate-200 text-sm">
                Hckr Labs <span className="italic">12/2021 - 10/2022</span>
              </p>
            </div>
            <p className="text-white">
              Participé en el desarrollo aplicaciones y componentes frontend y
              backend, contribuyendo en varios proyectos con la tecnologia de{" "}
              <span className="font-bold">NextJs (react) y React native</span>.
            </p>
          </>
        </Card>
        <Card>
          <>
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Desarrollador en estadias
              </h2>
              <p className="font-light text-slate-200 text-sm">
                Inria (Grenoble Francia){" "}
                <span className="italic">2/2021 - 6/2021</span>
              </p>
            </div>
            <p className="text-white">
              Creación de interfaz web en <span className="bold">React</span> y
              desarrollo de la integración del backend desarrollado en{" "}
              <span className="font-bold">Python</span> para la interfaz web
            </p>
          </>
        </Card>
      </div>
    </div>
  );
}
