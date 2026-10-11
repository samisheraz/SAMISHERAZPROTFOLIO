import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ContactBand } from "@/components/portfolio-layout";
import { AboutContent } from "@/components/portfolio-sections";
import { pageHead } from "@/data/portfolio";
export const Route = createFileRoute("/about")({ head: () => pageHead("About Me", "Meet Abdul Sami Sheraz, a UET Taxila mechatronics student interested in electronics, microcontrollers, robotics and automotive technology."), component: AboutPage });
function AboutPage() { return <><PageIntro label="The person behind the projects" title="About me." description="A student, a curious builder, and an engineer in the making." /><section className="section"><div className="page-container"><AboutContent full /></div></section><ContactBand /></>; }
