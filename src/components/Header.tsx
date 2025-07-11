import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-primary opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6 text-accent opacity-20" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-10 h-10 text-primary-glow opacity-25" />
      </div>
      
      <div className="text-center px-4 sm:px-8 animate-fade-in">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
          Aromix
          <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">
            Parfume
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Эксклюзивные ароматы, доступная косметика и изысканные подарки
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;