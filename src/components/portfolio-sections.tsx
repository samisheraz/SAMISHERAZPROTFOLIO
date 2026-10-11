import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  MapPin,
  Cpu,
  CircuitBoard,
  CarFront,
  Bot,
  BriefcaseBusiness,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { skills } from "@/data/portfolio";

export function AboutContent({ full = false }: { full?: boolean }) {
  return (
    <div className="about-grid">
      <div>
        <p className="eyebrow">01 / About me</p>
        <h2 className="section-title">Curiosity meets engineering.</h2>
        <p className="about-copy">
          I’m Abdul Sami Sheraz, a Mechatronics Engineering student at UET Taxila with an interest
          in embedded systems, robotics, automotive electronics, and PCB design.
        </p>
        <p className="about-copy">
          I enjoy practical engineering projects that bring electronics, software, and mechanical
          design together.
        </p>
        {!full && (
          <Button asChild variant="link" className="px-0 mt-4">
            <Link to="/about">
              More about me <ArrowRight />
            </Link>
          </Button>
        )}
      </div>
      <EducationSummary />
    </div>
  );
}

export function EducationSummary() {
  return (
    <div className="education-summary">
      <GraduationCap className="school-icon" />
      <h3>BS Mechatronics Engineering</h3>
      <p>
        University of Engineering and Technology,
        <br />
        Taxila, Pakistan
      </p>
      <span className="status">
        <span className="status-dot" /> Currently pursuing
      </span>
      <p className="flex items-center gap-2 mt-5">
        <MapPin size={14} /> Taxila, Pakistan
      </p>
    </div>
  );
}

const skillIcons = { chip: Cpu, circuit: CircuitBoard, car: CarFront, robot: Bot };
export function SkillsContent() {
  return (
    <div className="skills-grid">
      {skills.map((skill) => {
        const Icon = skillIcons[skill.icon as keyof typeof skillIcons];
        return (
          <div className="skill-group" key={skill.title}>
            <h3>
              <Icon />
              {skill.title}
            </h3>
            <div className="tag-list">
              {skill.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ExperienceContent() {
  return (
    <div className="timeline">
      <div>
        <p className="timeline-label flex items-center gap-2">
          <BriefcaseBusiness className="text-primary" size={18} /> Internship
        </p>
        <p className="text-sm text-muted-foreground mt-3">Kamra, Pakistan</p>
      </div>
      <div>
        <h3>Pakistan Aeronautical Complex (PAC)</h3>
        <span className="status">Engineering internship</span>
        <p className="timeline-copy">
          An internship involving guided exposure to an aerospace engineering environment at
          Pakistan Aeronautical Complex, Kamra.
        </p>
        <p className="timeline-copy">
          This experience forms part of my learning journey as a mechatronics student, connecting my
          academic interests with a professional engineering setting.
        </p>
      </div>
    </div>
  );
}
