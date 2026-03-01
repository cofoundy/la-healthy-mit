import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Benefits />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
