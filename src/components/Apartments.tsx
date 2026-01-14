import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 2 bedroom apartment images
import apt2bed1 from "@/assets/2bed-interior-1.jpg";
import apt2bed2 from "@/assets/2bed-interior-2.jpg";
import apt2bed3 from "@/assets/2bed-interior-3.jpg";
import apt2bed4 from "@/assets/2bed-interior-4.jpg";
import apt2bed5 from "@/assets/2bed-interior-5.jpg";

// 1 bedroom apartment images - set 1
import apt1bed1 from "@/assets/1bed-interior-1.jpg";
import apt1bed2 from "@/assets/1bed-interior-2.jpg";
import apt1bed3 from "@/assets/1bed-interior-3.jpg";
import apt1bed4 from "@/assets/1bed-interior-4.jpg";
import apt1bed5 from "@/assets/1bed-interior-5.jpg";

// Floor plans
import floorPlan2bed from "@/assets/floor-plan-2bed.png";
import floorPlan1bedPlus from "@/assets/floor-plan-1bed-plus.png";
import floorPlan1bed from "@/assets/floor-plan-1bed.png";

interface Apartment {
  id: number;
  title: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  floor: number;
  building: string;
  price: number;
  features: string[];
  images: string[];
  floorPlan: string;
  available: number;
}

const apartments: Apartment[] = [
  {
    id: 1,
    title: "apartments.type1",
    area: 68,
    bedrooms: 2,
    bathrooms: 2,
    floor: 6,
    building: "G",
    price: 10800000,
    features: ["apartments.feature.balcony", "apartments.feature.panoramic", "apartments.feature.spacious"],
    images: [apt2bed1, apt2bed2, apt2bed3, apt2bed4, apt2bed5],
    floorPlan: floorPlan2bed,
    available: 1,
  },
  {
    id: 2,
    title: "apartments.type2",
    area: 64,
    bedrooms: 2,
    bathrooms: 1,
    floor: 1,
    building: "E",
    price: 10400000,
    features: ["apartments.feature.poolAccess", "apartments.feature.firstFloor", "apartments.feature.terrace"],
    images: [apt1bed1, apt1bed2, apt1bed3, apt1bed4, apt1bed5],
    floorPlan: floorPlan1bedPlus,
    available: 2,
  },
  {
    id: 3,
    title: "apartments.type3",
    area: 49,
    bedrooms: 1,
    bathrooms: 1,
    floor: 4,
    building: "F",
    price: 6900000,
    features: ["apartments.feature.lagoonView", "apartments.feature.balcony", "apartments.feature.compact"],
    images: [apt1bed1, apt1bed2, apt1bed3, apt1bed4, apt1bed5],
    floorPlan: floorPlan1bed,
    available: 2,
  },
];

const formatPrice = (price: number, lang: string) => {
  return `${(price / 1000000).toFixed(2)} ${lang === "en" ? "million" : "млн"} ฿`;
};

export const Apartments = () => {
  const { t, language } = useLanguage();
  const handleInquiry = (apartmentTitle: string) => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="apartments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t("apartments.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("apartments.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <Card key={apt.id} className="overflow-hidden hover:shadow-premium transition-smooth group">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {apt.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${t(apt.title)} - ${idx + 1}`}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                {apt.available > 1 && (
                  <Badge className="absolute top-4 right-12 bg-secondary text-primary font-semibold z-10">
                    {apt.available} {t("apartments.available")}
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-smooth">
                  {t(apt.title)}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{t("apartments.building")} {apt.building}, {apt.floor} {t("apartments.floor")}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-sm font-semibold">{apt.area} м²</div>
                      <div className="text-xs text-muted-foreground">{t("apartments.area")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-sm font-semibold">{apt.bedrooms}</div>
                      <div className="text-xs text-muted-foreground">{t("apartments.bedrooms")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-sm font-semibold">{apt.bathrooms}</div>
                      <div className="text-xs text-muted-foreground">{t("apartments.bathrooms")}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {apt.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {t(feature)}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Floor Plan */}
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">{t("apartments.floorPlan")}</p>
                  <img 
                    src={apt.floorPlan} 
                    alt={`${t(apt.title)} - ${t("apartments.floorPlan")}`}
                    className="w-full rounded-md"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-secondary">
                      {apt.price.toLocaleString()} ฿
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 transition-smooth"
                  onClick={() => handleInquiry(t(apt.title))}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {t("apartments.learnMore")}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
