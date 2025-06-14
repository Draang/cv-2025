import Card from "./Card";

export default function ExperienciaAcademica() {
  return (
    <div className="space-y-1">
      <h2 className="font-bold text-2xl text-[#c7d2fe] py-3 lowercase first-letter:uppercase">
        FORMACIÓN PROFESIONAL
      </h2>

      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <div>
            <h2 className="text-2xl text-white font-semibold">
              Ingenieria en desarrollo y gestion de software
            </h2>
            <p className="font-light text-slate-200 text-sm">
              Universidad Tecnologica de chihuahua,
              <span className="italic">2021 -2023</span>
            </p>
          </div>
        </Card>

        <Card>
          <div>
            <h2 className="text-2xl text-white font-semibold">
              Licencia Profesional en Servicios móviles e interfaces nómada
            </h2>
            <p className="font-light text-slate-200 text-sm">
              IUT 1 Grenoble Francia ,<span className="italic">2020-2021</span>
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <h2 className="text-2xl text-white font-semibold">
              TSU Desarrollo de software multiplataforma
            </h2>
            <p className="font-light text-slate-200 text-sm">
              Universidad Tecnologica de chihuahua{" "}
              <span className="italic">2018-2020</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
