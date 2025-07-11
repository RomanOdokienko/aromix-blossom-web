import ProductCard from './ProductCard';
import perfume1 from '@/assets/perfume-1.jpg';
import giftSet from '@/assets/gift-set.jpg';
import cream from '@/assets/cream.jpg';
import perfumeCollection from '@/assets/perfume-collection.jpg';

const ProductGallery = () => {
  const products = [
    {
      image: perfume1,
      title: "Эксклюзивные ароматы",
      description: "Уникальные парфюмерные композиции от лучших мировых брендов"
    },
    {
      image: giftSet,
      title: "Подарочные наборы",
      description: "Элегантные подарочные комплекты для особенных моментов"
    },
    {
      image: cream,
      title: "Доступная косметика",
      description: "Качественные средства по уходу за кожей и декоративная косметика"
    },
    {
      image: perfumeCollection,
      title: "Коллекция ароматов",
      description: "Широкий ассортимент парфюмерии на любой вкус и случай"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center mb-16">
          Наша продукция
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;