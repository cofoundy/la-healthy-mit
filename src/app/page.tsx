import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Products from "@/components/Products";
import Promise from "@/components/Promise";
import Process from "@/components/Process";
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
        <Philosophy />
        <Products />
        <Promise />
        <Process />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
