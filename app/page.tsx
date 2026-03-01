import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  const PAGE_MARGIN = "72";
  const NAVBAR_HEIGHT = "16";
  return (
    <div className="flex flex-col items-center justify-center gap-section" id="home">
      <Navbar />
      <div></div>
      <AboutMe />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}
