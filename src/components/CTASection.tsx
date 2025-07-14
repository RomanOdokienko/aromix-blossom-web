import { Send, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleTelegramClick = () => {
    // Замените на реальную ссылку на ваш Telegram
    window.open('https://t.me/aromix_parfum', '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft opacity-50"></div>
      <div className="absolute top-10 right-10 animate-pulse-glow">
        <Sparkles className="w-12 h-12 text-primary opacity-20" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
          Готовы найти свой 
          <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
            идеальный аромат?
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Свяжитесь с нами в Telegram для персональной консультации и подбора ароматов
        </p>
        
        <Button 
          size="lg"
          onClick={handleTelegramClick}
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300 ease-bounce text-lg px-8 py-6 rounded-2xl font-semibold group animate-pulse-glow"
        >
          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
          Написать в Telegram
        </Button>
        
        <div className="mt-8 flex flex-col items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Отвечаем быстро и с удовольствием</span>
          </div>
          
          {/* Стильный CTA блок для визита */}
          <div className="bg-gradient-soft border-2 border-primary/30 rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group max-w-md animate-pulse-glow">
            <div className="flex items-center justify-center gap-3 text-foreground mb-3">
              <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-semibold">Или приходите к нам в{' '}</span>
              <a 
                href="https://yandex.ru/maps/-/CHwhUMy8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold text-primary hover:text-primary-glow transition-colors underline decoration-2 underline-offset-4 hover:underline-offset-2 hover:scale-105 transform duration-200"
              >
                гости
              </a>
            </div>
            <p className="text-sm text-muted-foreground text-center opacity-80 leading-relaxed">
              Посмотрите и почувствуйте ароматы вживую
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;