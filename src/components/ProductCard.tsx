interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-card rounded-3xl p-6 shadow-card transition-all duration-300 ease-smooth hover:shadow-glow hover:-translate-y-2 hover:scale-105">
        <div className="aspect-square overflow-hidden rounded-2xl mb-6 bg-gradient-card">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;