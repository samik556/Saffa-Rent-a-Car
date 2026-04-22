import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Fleet from "./components/Fleet/Fleet";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import FAQ from "./components/FAQ/FAQ";
import CTA from "./components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}
