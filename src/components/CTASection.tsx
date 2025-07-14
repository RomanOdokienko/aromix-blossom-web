import { Send, Sparkles } from "lucide-react";
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
        
        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Отвечаем быстро и с удовольствием</span>
          </div>
          <div className="text-center">
            Или приходите к нам в{' '}
            <a 
              href="https://yandex.ru/maps/-/CHwhUMy8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors underline"
            >
              гости
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;