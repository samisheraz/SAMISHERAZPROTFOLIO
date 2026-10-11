import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ContactBand } from "@/components/portfolio-layout";
import { ExperienceContent } from "@/components/portfolio-sections";
import { pageHead } from "@/data/portfolio";
export const Route = createFileRoute("/experience")({ head: () => pageHead("Internship Experience", "Abdul Sami Sheraz\u2019s internship at Pakistan Aeronautical Complex, Kamra, involving guided exposure to an aerospace engineering environment."), component: ExperiencePage });
function ExperiencePage() { return <><PageIntro label="Professional exposure" title="Learning beyond the classroom." description="A step into a professional engineering environment." /><section className="section"><div className="page-container"><ExperienceContent /></div></section><ContactBand /></>; }
