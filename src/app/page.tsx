import Intro from "@/components/Intro";
import SectionDivider from "@/components/Section-divider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
    return <div className={"flex flex-col items-center px-4"}>
        <Intro/>
        <SectionDivider/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
    </div>
}
