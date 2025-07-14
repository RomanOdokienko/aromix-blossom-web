const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-8">
          О нас
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Aromix Parfume — это мир изысканных ароматов и доступной косметики. 
          Мы тщательно отбираем лучшие бренды и создаем уникальные композиции, 
          чтобы каждый наш клиент нашел свой идеальный аромат. От нежных цветочных 
          до глубоких восточных нот — у нас есть всё для создания вашего неповторимого образа.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;