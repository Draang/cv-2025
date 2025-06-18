import { useTranslation } from "react-i18next";
import Card from "./Card";

export default function ExperienciaAcademica() {
  const { t } = useTranslation("", { keyPrefix: "about-me.academic-exp" });

  return (
    <div className="space-y-1">
      <h2 className="font-bold text-2xl text-[#c7d2fe] py-3 lowercase first-letter:uppercase">
        {t("title")}
      </h2>

      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <div>
            <h2 className="text-2xl text-white font-semibold">
              {t("one.title")}
            </h2>
            <p className="font-light text-slate-200 text-sm">
              {t("one.school")},<span className="italic">2021 -2023</span>
            </p>
          </div>
        </Card>

        <Card>
          <div>
            <h2 className="text-2xl text-white font-semibold">
              {t("two.title")}
            </h2>
            <p className="font-light text-slate-200 text-sm">
              {t("two.school")}, <span className="italic">2020-2021</span>
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <h2 className="text-2xl text-white font-semibold">
              {t("three.title")}
            </h2>
            <p className="font-light text-slate-200 text-sm">
              {t("three.school")} <span className="italic">2018-2020</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
