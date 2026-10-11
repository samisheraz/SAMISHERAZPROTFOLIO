import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ContactBand } from "@/components/portfolio-layout";
import { ProjectGrid } from "@/components/project-grid";
import { pageHead } from "@/data/portfolio";
export const Route = createFileRoute("/projects")({ head: () => pageHead("Engineering Projects", "Explore six engineering projects by Abdul Sami Sheraz, from an ESP32 AI assistant and automotive PCBs to a SolidWorks pipe-climbing robot design."), component: ProjectsPage });
function ProjectsPage() { return <><PageIntro label="Selected engineering work" title="From ideas to practical projects." description="Explorations in embedded systems, automotive electronics, PCB design, and robotics. Real project photographs and further documentation will be added as available." /><section className="section"><div className="page-container"><ProjectGrid /></div></section><ContactBand /></>; }
