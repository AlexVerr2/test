import { Building2, MapPin, Calendar, Waves, Car, TrendingUp, Dumbbell, Film, Baby, Flame, Droplet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import poolSunset from "@/assets/pool-sunset.jpeg";

export const AboutComplex = () => {
  const { t } = useLanguage();
  
  const features = [
    { icon: Building2, titleKey: "about.feature1.title", descKey: "about.feature1.desc" },
    { icon: MapPin, titleKey: "about.feature2.title", descKey: "about.feature2.desc" },
    { icon: Calendar, titleKey: "about.feature3.title", descKey: "about.feature3.desc" },
    { icon: Waves, titleKey: "about.feature4.title", descKey: "about.feature4.desc" },
    { icon: Car, titleKey: "about.feature5.title", descKey: "about.feature5.desc" },
    { icon: TrendingUp, titleKey: "about.feature6.title", descKey: "about.feature6.desc" },
  ];

  const amenities = [
    { icon: Dumbbell, key: "about.amenities.gym" },
    { icon: Film, key: "about.amenities.cinema" },
    { icon: Baby, key: "about.amenities.kids" },
    { icon: Flame, key: "about.amenities.yoga" },
    { icon: Droplet, key: "about.amenities.pool" },
  ];
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={poolSunset} 
              alt="The Title Heritage Pool" 
              className="rounded-2xl shadow-premium w-full h-[400px] object-cover"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="700"
              height="400"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">
              {t("about.architectureTitle")}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description2")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-premium transition-smooth border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{t(feature.titleKey)}</h4>
                  <p className="text-muted-foreground">{t(feature.descKey)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-primary">
            {t("about.amenities.title")}
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="p-6 hover:shadow-premium transition-smooth border-border/50 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <amenity.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-medium text-sm">{t(amenity.key)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
