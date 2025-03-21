import TitleAll from "@/components/TitleAll";
import ServicesSection from "./components/ServicesSection";
import HomeBanner from "@/components/HomeBanner";
import HomeAbout from "@/components/HomeAbout";

export default function Home() {
  return (
    <>
      <section>
        <HomeBanner />
      </section>
      <section>
        <HomeAbout />
      </section>
      <section className="my-10 space-y-6">
        <TitleAll />
        <ServicesSection />
      </section>
    </>
  );
}
