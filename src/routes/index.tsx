import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Cpu, Bot, CarFront, CircuitBoard, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand } from "@/components/portfolio-layout";
import { AboutContent, SkillsContent, ExperienceContent } from "@/components/portfolio-sections";
import { ProjectGrid } from "@/components/project-grid";
import { pageHead, profile } from "@/data/portfolio";
import heroImage from "@/assets/engineering-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => pageHead("Mechatronics Engineering Portfolio", "Abdul Sami Sheraz, a Mechatronics Engineering student at UET Taxila, exploring embedded systems, robotics, automotive electronics and PCB design."),
  component: Index,
});

function Index() {
  return <>
    <section className="hero">
      <img src={heroImage} alt="Illustrative blue microcontroller development board on an engineering work surface" className="hero-image" width={1920} height={1024} fetchPriority="high" />
      <div className="page-container hero-content"><div className="hero-text"><p className="eyebrow">Engineering with curiosity. Building with purpose.</p><h1>Abdul Sami<span>Sheraz.</span></h1><p className="hero-role">Mechatronics Engineering Student</p><p className="hero-disciplines">Embedded Systems | Robotics | Automotive Electronics | PCB Designing</p><p className="hero-description">Turning ideas into practical engineering projects. Exploring the intersection of embedded systems, robotics, automation, and automotive technology.</p><div className="hero-actions"><Button asChild size="lg"><a href="#featured-projects">View My Projects <ArrowRight /></a></Button><Button asChild variant="outline" size="lg"><Link to="/contact">Contact Me <ArrowUpRight /></Link></Button></div><div className="hero-socials"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a><span className="flex items-center gap-1"><MapPin size={13} /> Pakistan</span></div></div></div>
      <span className="hero-caption">Illustrative engineering image · not a project photograph</span>
    </section>
    <div className="interest-band"><div className="page-container interest-inner"><div className="interest-item"><Cpu /> Embedded Systems</div><div className="interest-item"><Bot /> Robotics & Automation</div><div className="interest-item"><CarFront /> Automotive Electronics</div><div className="interest-item"><CircuitBoard /> PCB Design</div></div></div>
    <section className="section"><div className="page-container"><AboutContent /></div></section>
    <section className="section section-tinted" id="featured-projects"><div className="page-container"><div className="section-heading"><div><p className="eyebrow">02 / Selected work</p><h2 className="section-title">Ideas, brought to the workbench.</h2><p className="section-subtitle">A selection of hands-on projects and engineering explorations.</p></div><Button asChild variant="link" className="px-0"><Link to="/projects">View all projects <ArrowUpRight /></Link></Button></div><ProjectGrid limit={3} /></div></section>
    <section className="section"><div className="page-container"><div className="section-heading"><div><p className="eyebrow">03 / Technical skills</p><h2 className="section-title">My engineering toolkit.</h2><p className="section-subtitle">Skills I’m developing through learning and practical project work.</p></div><Button asChild variant="link" className="px-0"><Link to="/skills">Explore skills <ArrowUpRight /></Link></Button></div><SkillsContent /></div></section>
    <section className="section section-tinted"><div className="page-container"><div className="section-heading"><div><p className="eyebrow">04 / Experience</p><h2 className="section-title">Learning beyond the classroom.</h2></div><Button asChild variant="link" className="px-0"><Link to="/experience">View experience <ArrowUpRight /></Link></Button></div><ExperienceContent /></div></section>
    <ContactBand />
  </>;
}
