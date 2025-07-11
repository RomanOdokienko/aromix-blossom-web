import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ProductGallery from '@/components/ProductGallery';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <ProductGallery />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
