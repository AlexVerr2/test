import { Card } from "@/components/ui/card";
import { TrendingUp, MapPin, Building, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import masterPlan from "@/assets/master-plan-3d.jpeg";
import locationMap from "@/assets/location-map.jpg";

export const Investment = () => {
  const { t } = useLanguage();
  
  const benefits = [
    { icon: MapPin, titleKey: "investment.benefit1.title", descKey: "investment.benefit1.desc" },
    { icon: TrendingUp, titleKey: "investment.benefit2.title", descKey: "investment.benefit2.desc" },
    { icon: Building, titleKey: "investment.benefit3.title", descKey: "investment.benefit3.desc" },
    { icon: Calendar, titleKey: "investment.benefit4.title", descKey: "investment.benefit4.desc" },
  ];
  
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("investment.title")}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t("investment.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t(benefit.titleKey)}</h3>
                  <p className="opacity-90">{t(benefit.descKey)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("investment.masterPlan")}</h3>
            <img 
              src={masterPlan} 
              alt="Master Plan" 
              className="rounded-xl shadow-premium w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("investment.locationMap")}</h3>
            <img 
              src={locationMap} 
              alt="Location Map" 
              className="rounded-xl shadow-premium w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>{t("investment.location1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>{t("investment.location2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>{t("investment.location3")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
