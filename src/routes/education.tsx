import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ContactBand } from "@/components/portfolio-layout";
import { EducationSummary } from "@/components/portfolio-sections";
import { pageHead } from "@/data/portfolio";
export const Route = createFileRoute("/education")({ head: () => pageHead("Education", "Abdul Sami Sheraz is currently pursuing BS Mechatronics Engineering at the University of Engineering and Technology, Taxila, Pakistan."), component: EducationPage });
function EducationPage() { return <><PageIntro label="Academic journey" title="A foundation in mechatronics." description="Currently pursuing a BS in Mechatronics Engineering at UET Taxila, Pakistan." /><section className="section"><div className="page-container"><div className="about-grid"><EducationSummary /><div><h2 className="section-title">Connecting engineering disciplines.</h2><p className="about-copy">My interests span electronics, programming, and mechanical design. I’m developing my understanding of how these disciplines work together through practical projects and continued learning.</p></div></div></div></section><ContactBand /></>; }
