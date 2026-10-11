import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ContactBand } from "@/components/portfolio-layout";
import { SkillsContent } from "@/components/portfolio-sections";
import { pageHead } from "@/data/portfolio";
export const Route = createFileRoute("/skills")({ head: () => pageHead("Technical Skills", "Abdul Sami Sheraz\u2019s learning and practical project skills in ESP32, PIC, C/C++, PCB design, KiCad, SolidWorks and robotics."), component: SkillsPage });
function SkillsPage() { return <><PageIntro label="Learning by building" title="My engineering toolkit." description="Skills I\u2019m developing through coursework, exploration, and practical engineering projects." /><section className="section"><div className="page-container"><SkillsContent /></div></section><ContactBand /></>; }
