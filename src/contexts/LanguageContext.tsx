import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Hero
    "hero.title": "Премиальные апартаменты в The Title Heritage",
    "hero.subtitle": "Эксклюзивная продажа 5 апартаментов в элитном комплексе Банг Тао, Пхукет",
    "hero.viewApartments": "Смотреть апартаменты",
    "hero.contact": "Связаться",
    "hero.scroll": "Прокрутите вниз",
    
    // About
    "about.title": "О комплексе",
    "about.subtitle": "The Title Heritage — стратегическое решение для проживания и инвестиций в престижном районе Бангтао",
    "about.architectureTitle": "Архитектурное совершенство",
    "about.description1": "The Title Heritage предлагает современные апартаменты в семи семиэтажных зданиях с продуманной инфраструктурой. Комплекс расположен рядом с торговыми центрами Porto de Phuket и Boat Avenue, обеспечивая доступ к ресторанам, магазинам и зонам отдыха.",
    "about.description2": "Парковочные места для 80% квартир — редкость для Пхукета, что делает проект особенно привлекательным для покупателей и инвесторов.",
    "about.feature1.title": "7 зданий",
    "about.feature1.desc": "Семиэтажные современные корпуса",
    "about.feature2.title": "2,5 км до пляжа",
    "about.feature2.desc": "Банг Тао, престижный район",
    "about.feature3.title": "Сентябрь 2026",
    "about.feature3.desc": "Окончание строительства",
    "about.feature4.title": "Лагуны и бассейны",
    "about.feature4.desc": "Тропический рай у дома",
    "about.feature5.title": "80% парковка",
    "about.feature5.desc": "Удобная парковка для резидентов",
    "about.feature6.title": "Rhom Bho Property",
    "about.feature6.desc": "Надежный застройщик",
    "about.amenities.title": "Удобства комплекса",
    "about.amenities.gym": "Современный фитнес-центр",
    "about.amenities.cinema": "Кинотеатр",
    "about.amenities.kids": "Детские игровые зоны",
    "about.amenities.yoga": "Зона для йоги и медитации",
    "about.amenities.pool": "Детский бассейн",
    
    // Apartments
    "apartments.title": "Доступные апартаменты",
    "apartments.subtitle": "5 эксклюзивных апартаментов для продажи",
    "apartments.available": "доступно",
    "apartments.building": "Корпус",
    "apartments.floor": "этаж",
    "apartments.area": "Площадь",
    "apartments.bedrooms": "Спален",
    "apartments.bathrooms": "Санузлов",
    "apartments.learnMore": "Узнать подробнее",
    "apartments.type1": "Премиум апартаменты с панорамным видом",
    "apartments.type2": "Апартаменты с выходом к бассейну",
    "apartments.type3": "Апартаменты с видом на лагуну",
    "apartments.feature.balcony": "Балкон",
    "apartments.feature.panoramic": "Панорамный вид",
    "apartments.feature.spacious": "Большая планировка",
    "apartments.feature.poolAccess": "Прямой выход к бассейну",
    "apartments.feature.firstFloor": "Первый этаж",
    "apartments.feature.terrace": "Терраса",
    "apartments.feature.lagoonView": "Вид на лагуну",
    "apartments.feature.compact": "Компактная планировка",
    "apartments.floorPlan": "Планировка",
    // Investment
    "investment.title": "Идеален для инвестиций",
    "investment.subtitle": "Высокий спрос на аренду благодаря локации, качеству строительства и надежности застройщика",
    "investment.benefit1.title": "Топовая локация",
    "investment.benefit1.desc": "Рядом с Porto de Phuket и Boat Avenue — главными торговыми и развлекательными центрами Бангтао",
    "investment.benefit2.title": "Высокий спрос на аренду",
    "investment.benefit2.desc": "Проект востребован круглый год благодаря репутации застройщика Rhom Bho Property",
    "investment.benefit3.title": "Качество строительства",
    "investment.benefit3.desc": "Завершенные проекты Rhom Bho Property неизменно востребованы в высокий и низкий сезон",
    "investment.benefit4.title": "Готовность в 2026",
    "investment.benefit4.desc": "Инвестируйте сейчас и получайте доход с сентября 2026 года",
    "investment.masterPlan": "Генеральный план",
    "investment.locationMap": "Расположение",
    "investment.location1": "Porto de Phuket — 5 минут",
    "investment.location2": "Boat Avenue — 5 минут",
    "investment.location3": "Пляж Банг Тао — 2,5 км",
    
    // Contact
    "contact.title": "Свяжитесь со мной",
    "contact.subtitle": "Получите подробную информацию об апартаментах",
    "contact.form.title": "Напишите мне",
    "contact.form.name": "Имя",
    "contact.form.email": "Email",
    "contact.form.phone": "Телефон",
    "contact.form.message": "Сообщение",
    "contact.form.submit": "Отправить запрос",
    "contact.form.required": "Пожалуйста, заполните все обязательные поля",
    "contact.form.success": "Спасибо за обращение! Я свяжусь с вами в ближайшее время.",
    "contact.info.title": "Контактная информация",
    "contact.info.email": "Email",
    "contact.info.phone": "Телефон",
    "contact.info.whatsapp": "WhatsApp",
    
    // Footer
    "footer.title": "The Title Heritage",
    "footer.subtitle": "Премиальные апартаменты в Банг Тао, Пхукет",
    "footer.contacts": "Контакты",
    "footer.location": "Адрес",
    "footer.copyright": "© 2024 The Title Heritage. Все права защищены.",
    "footer.developer": "Застройщик: Rhom Bho Property",
  },
  en: {
    // Hero
    "hero.title": "Premium Apartments at The Title Heritage",
    "hero.subtitle": "Exclusive sale of 5 apartments in an elite Bang Tao complex, Phuket",
    "hero.viewApartments": "View Apartments",
    "hero.contact": "Contact",
    "hero.scroll": "Scroll down",
    
    // About
    "about.title": "About the Complex",
    "about.subtitle": "The Title Heritage — strategic solution for living and investment in prestigious Bang Tao area",
    "about.architectureTitle": "Architectural Excellence",
    "about.description1": "The Title Heritage offers modern apartments in seven seven-story buildings with thoughtful infrastructure. The complex is located near Porto de Phuket and Boat Avenue shopping centers, providing access to restaurants, shops and recreation areas.",
    "about.description2": "Parking spaces for 80% of apartments — a rarity for Phuket, making the project especially attractive for buyers and investors.",
    "about.feature1.title": "7 Buildings",
    "about.feature1.desc": "Modern seven-story buildings",
    "about.feature2.title": "2.5 km to beach",
    "about.feature2.desc": "Bang Tao, prestigious area",
    "about.feature3.title": "September 2026",
    "about.feature3.desc": "Construction completion",
    "about.feature4.title": "Lagoons & Pools",
    "about.feature4.desc": "Tropical paradise at home",
    "about.feature5.title": "80% Parking",
    "about.feature5.desc": "Convenient parking for residents",
    "about.feature6.title": "Rhom Bho Property",
    "about.feature6.desc": "Reliable developer",
    "about.amenities.title": "Complex Amenities",
    "about.amenities.gym": "Modern fitness center",
    "about.amenities.cinema": "Cinema",
    "about.amenities.kids": "Children's play areas",
    "about.amenities.yoga": "Yoga and meditation zone",
    "about.amenities.pool": "Children's pool",
    
    // Apartments
    "apartments.title": "Available Apartments",
    "apartments.subtitle": "5 exclusive apartments for sale",
    "apartments.available": "available",
    "apartments.building": "Building",
    "apartments.floor": "floor",
    "apartments.area": "Area",
    "apartments.bedrooms": "Bedrooms",
    "apartments.bathrooms": "Bathrooms",
    "apartments.learnMore": "Learn More",
    "apartments.type1": "Premium Apartment with Panoramic View",
    "apartments.type2": "Pool Access Apartment",
    "apartments.type3": "Lagoon View Apartment",
    "apartments.feature.balcony": "Balcony",
    "apartments.feature.panoramic": "Panoramic view",
    "apartments.feature.spacious": "Spacious layout",
    "apartments.feature.poolAccess": "Direct pool access",
    "apartments.feature.firstFloor": "First floor",
    "apartments.feature.terrace": "Terrace",
    "apartments.feature.lagoonView": "Lagoon view",
    "apartments.feature.compact": "Compact layout",
    "apartments.floorPlan": "Floor Plan",
    // Investment
    "investment.title": "Ideal for Investment",
    "investment.subtitle": "High rental demand thanks to location, construction quality and developer reliability",
    "investment.benefit1.title": "Prime Location",
    "investment.benefit1.desc": "Near Porto de Phuket and Boat Avenue — main shopping and entertainment centers of Bang Tao",
    "investment.benefit2.title": "High Rental Demand",
    "investment.benefit2.desc": "Project in demand year-round thanks to developer Rhom Bho Property's reputation",
    "investment.benefit3.title": "Construction Quality",
    "investment.benefit3.desc": "Rhom Bho Property's completed projects are consistently in demand in high and low season",
    "investment.benefit4.title": "Ready in 2026",
    "investment.benefit4.desc": "Invest now and receive income from September 2026",
    "investment.masterPlan": "Master Plan",
    "investment.locationMap": "Location",
    "investment.location1": "Porto de Phuket — 5 minutes",
    "investment.location2": "Boat Avenue — 5 minutes",
    "investment.location3": "Bang Tao Beach — 2.5 km",
    
    // Contact
    "contact.title": "Contact Me",
    "contact.subtitle": "Get detailed information about the apartments",
    "contact.form.title": "Write to Me",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Request",
    "contact.form.required": "Please fill in all required fields",
    "contact.form.success": "Thank you for reaching out! I'll contact you shortly.",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.whatsapp": "WhatsApp",
    
    // Footer
    "footer.title": "The Title Heritage",
    "footer.subtitle": "Premium apartments in Bang Tao, Phuket",
    "footer.contacts": "Contacts",
    "footer.location": "Address",
    "footer.copyright": "© 2024 The Title Heritage. All rights reserved.",
    "footer.developer": "Developer: Rhom Bho Property",
  },
  zh: {
    // Hero
    "hero.title": "The Title Heritage 高端公寓",
    "hero.subtitle": "普吉岛邦涛高端住宅区5套公寓独家销售",
    "hero.viewApartments": "查看公寓",
    "hero.contact": "联系我们",
    "hero.scroll": "向下滚动",
    
    // About
    "about.title": "项目介绍",
    "about.subtitle": "The Title Heritage — 邦涛高端区域居住与投资的战略选择",
    "about.architectureTitle": "卓越建筑",
    "about.description1": "The Title Heritage 提供七栋七层现代化公寓，基础设施完善。项目毗邻 Porto de Phuket 和 Boat Avenue 购物中心，餐厅、商店和休闲区触手可及。",
    "about.description2": "80%的公寓配备停车位——这在普吉岛非常罕见，使该项目对购房者和投资者极具吸引力。",
    "about.feature1.title": "7栋建筑",
    "about.feature1.desc": "现代化七层建筑",
    "about.feature2.title": "距海滩2.5公里",
    "about.feature2.desc": "邦涛高端区域",
    "about.feature3.title": "2026年9月",
    "about.feature3.desc": "竣工日期",
    "about.feature4.title": "泻湖与泳池",
    "about.feature4.desc": "家门口的热带天堂",
    "about.feature5.title": "80%停车位",
    "about.feature5.desc": "住户专属便捷停车",
    "about.feature6.title": "Rhom Bho Property",
    "about.feature6.desc": "可靠开发商",
    "about.amenities.title": "项目设施",
    "about.amenities.gym": "现代健身中心",
    "about.amenities.cinema": "电影院",
    "about.amenities.kids": "儿童游乐区",
    "about.amenities.yoga": "瑜伽冥想区",
    "about.amenities.pool": "儿童泳池",
    
    // Apartments
    "apartments.title": "在售公寓",
    "apartments.subtitle": "5套独家公寓在售",
    "apartments.available": "可售",
    "apartments.building": "楼栋",
    "apartments.floor": "楼层",
    "apartments.area": "面积",
    "apartments.bedrooms": "卧室",
    "apartments.bathrooms": "卫生间",
    "apartments.learnMore": "了解更多",
    "apartments.type1": "全景高端公寓",
    "apartments.type2": "泳池通道公寓",
    "apartments.type3": "泻湖景观公寓",
    "apartments.feature.balcony": "阳台",
    "apartments.feature.panoramic": "全景视野",
    "apartments.feature.spacious": "宽敞户型",
    "apartments.feature.poolAccess": "直通泳池",
    "apartments.feature.firstFloor": "一层",
    "apartments.feature.terrace": "露台",
    "apartments.feature.lagoonView": "泻湖景观",
    "apartments.feature.compact": "紧凑户型",
    "apartments.floorPlan": "户型图",
    // Investment
    "investment.title": "理想投资之选",
    "investment.subtitle": "凭借优越地段、建筑品质和开发商信誉，租赁需求旺盛",
    "investment.benefit1.title": "黄金地段",
    "investment.benefit1.desc": "毗邻 Porto de Phuket 和 Boat Avenue — 邦涛主要购物娱乐中心",
    "investment.benefit2.title": "租赁需求旺盛",
    "investment.benefit2.desc": "凭借开发商 Rhom Bho Property 的良好声誉，项目全年需求稳定",
    "investment.benefit3.title": "建筑品质",
    "investment.benefit3.desc": "Rhom Bho Property 已完工项目在淡旺季均持续热销",
    "investment.benefit4.title": "2026年交付",
    "investment.benefit4.desc": "立即投资，2026年9月起获得收益",
    "investment.masterPlan": "总体规划",
    "investment.locationMap": "位置",
    "investment.location1": "Porto de Phuket — 5分钟",
    "investment.location2": "Boat Avenue — 5分钟",
    "investment.location3": "邦涛海滩 — 2.5公里",
    
    // Contact
    "contact.title": "联系我",
    "contact.subtitle": "获取公寓详细信息",
    "contact.form.title": "给我留言",
    "contact.form.name": "姓名",
    "contact.form.email": "邮箱",
    "contact.form.phone": "电话",
    "contact.form.message": "留言",
    "contact.form.submit": "发送请求",
    "contact.form.required": "请填写所有必填项",
    "contact.form.success": "感谢您的咨询！我会尽快与您联系。",
    "contact.info.title": "联系方式",
    "contact.info.email": "邮箱",
    "contact.info.phone": "电话",
    "contact.info.whatsapp": "WhatsApp",
    
    // Footer
    "footer.title": "The Title Heritage",
    "footer.subtitle": "普吉岛邦涛高端公寓",
    "footer.contacts": "联系方式",
    "footer.location": "地址",
    "footer.copyright": "© 2024 The Title Heritage. 版权所有。",
    "footer.developer": "开发商：Rhom Bho Property",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
