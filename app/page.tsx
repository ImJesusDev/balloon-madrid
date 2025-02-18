import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <ContactForm />
    </main>
  );
}
