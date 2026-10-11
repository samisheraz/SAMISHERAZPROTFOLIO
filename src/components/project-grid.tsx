import { useState } from "react";
import {
  Cpu,
  CircuitBoard,
  House,
  Gauge,
  CarFront,
  Bot,
  Image,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/portfolio";

const projectIcons = [Cpu, CircuitBoard, House, Gauge, CarFront, Bot];
export function ProjectGrid({ limit }: { limit?: number }) {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <div className="project-grid">
        {projects.slice(0, limit).map((project, index) => {
          const Icon = projectIcons[index] ?? CircuitBoard;
          return (
            <article className="project-card" key={project.id}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-photo"
                  loading="lazy"
                  width={600}
                  height={360}
                />
              ) : (
                <div className="project-placeholder">
                  <Icon aria-hidden="true" />
                  <span className="project-number">PROJECT / 0{index + 1}</span>
                  <span className="project-placeholder-label">
                    <Image size={11} /> PROJECT PHOTO TO BE ADDED
                  </span>
                </div>
              )}
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-xs flex-1 justify-between"
                    onClick={() => setSelected(project)}
                    aria-label={`View ${project.title} project details`}
                  >
                    Project details <ArrowUpRight />
                  </Button>
                  {project.repository && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.repository} target="_blank" rel="noopener noreferrer">
                        <Github /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.linkedinPost && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.linkedinPost} target="_blank" rel="noopener noreferrer">
                        <Linkedin /> LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-w-xl max-h-[85dvh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <p className="project-category mb-2">{selected.category}</p>
                <DialogTitle className="text-2xl leading-snug">{selected.title}</DialogTitle>
                <DialogDescription className="pt-3 leading-relaxed">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="tag-list mt-1">
                {selected.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              {selected.note && (
                <p className="text-sm text-muted-foreground border-l-2 border-primary pl-4 leading-relaxed">
                  {selected.note}
                </p>
              )}
              <p className="border-t border-border pt-5 text-sm text-muted-foreground leading-relaxed">
                Project notes and original project photos can be added here as they become
                available.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
