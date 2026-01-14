import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-card">
      <Globe className="w-5 h-5 text-accent" />
      <Button
        variant={language === "ru" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("ru")}
        className="h-8 px-3"
      >
        RU
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 px-3"
      >
        EN
      </Button>
      <Button
        variant={language === "zh" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("zh")}
        className="h-8 px-3"
      >
        中文
      </Button>
    </div>
  );
};
