import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { ProductExperience } from './components/ProductExperience';
import { Sources } from './components/Sources';
import { Philosophy } from './components/Philosophy';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <ProductExperience />
      <Sources />
      <Philosophy />
      <FinalCta />
      <Footer />
    </div>
  );
}
