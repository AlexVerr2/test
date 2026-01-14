import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">{t("footer.title")}</h3>
            <p className="opacity-90">
              {t("footer.subtitle")}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.location")}</h4>
            <p className="opacity-90">
              Bang Tao, Phuket 83110<br />
              Thailand
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center opacity-75">
          <p>{t("footer.copyright")}</p>
          <p className="text-sm mt-2">{t("footer.developer")}</p>
        </div>
      </div>
    </footer>
  );
};
