import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ContactBand } from "@/components/portfolio-layout";
import { ContactDetails } from "@/components/portfolio-layout";
import { pageHead } from "@/data/portfolio";
export const Route = createFileRoute("/contact")({ head: () => pageHead("Contact", "Connect with Abdul Sami Sheraz on LinkedIn and GitHub about engineering projects, internships and learning opportunities."), component: ContactPage });
function ContactPage() { return <><PageIntro label="Get in touch" title="Let\u2019s connect." description="For engineering conversations, project collaborations, and internship opportunities." /><section className="section"><div className="page-container"><ContactDetails /></div></section></>; }
