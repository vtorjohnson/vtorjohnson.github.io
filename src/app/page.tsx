import { Hero } from "@/components/Hero";
import { ContactUs } from "@/components/ContactUs";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col h-[850px] gap-20 z-20">
        <Hero />
        <Projects />
        <ContactUs />
      </div>
    </main>
  );
}
