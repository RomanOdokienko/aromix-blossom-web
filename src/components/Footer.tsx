import { MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 px-4 sm:px-8 lg:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                Наш адрес
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              г. Ташкент, ул. Ислама Каримова, 17Б<br />
              Ориентир ЦУМ<br />
              +998 90 989 02 10<br />
              <a 
                href="https://yandex.ru/maps/-/CHwhUMy8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors underline"
              >
                мы на карте
              </a>
            </p>
          </div>

          {/* Working Hours */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Clock className="w-5 h-5 text-primary mr-2" />
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                Режим работы
              </h3>
            </div>
            <div className="text-muted-foreground space-y-1">
              <p>Пн-Вс: 10:00 - 20:00</p>
              <p className="text-sm text-primary mt-2">Без выходных</p>
            </div>
          </div>

          {/* Brand */}
          <div className="text-center lg:text-right">
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-foreground">Aromix</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-1">
                Parfume
              </span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ваш мир ароматов<br />
              и красоты
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-muted-foreground text-sm">
              Сделано с
            </span>
            <Heart className="w-4 h-4 text-primary mx-1 fill-current" />
            <span className="text-muted-foreground text-sm">
              для ценителей прекрасного
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 Aromix Parfume. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;