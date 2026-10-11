import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Menu, X, Mail } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { navigation, profile } from "@/data/portfolio";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("home");
  useEffect(() => {
    const updateActiveAnchor = () => {
      const { hash, pathname } = window.location;
      setActiveAnchor(pathname === "/" ? hash.slice(1) || "home" : "");
    };
    updateActiveAnchor();
    window.addEventListener("hashchange", updateActiveAnchor);
    return () => window.removeEventListener("hashchange", updateActiveAnchor);
  }, []);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-background p-3 text-primary"
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="page-container site-header-inner">
          <Link
            to="/"
            aria-label="Abdul Sami Sheraz home"
            className="brand-mark"
            onClick={() => setMenuOpen(false)}
          >
            Abdul Sami Sheraz
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav flex items-center gap-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activeAnchor === item.id ? "location" : undefined}
                className={`nav-link ${activeAnchor === item.id ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="h-9 px-4">
              <a href="/#contact" onClick={() => setMenuOpen(false)}>
                Let’s connect <ArrowUpRight />
              </a>
            </Button>
            <div className="mobile-menu">
              <Button
                variant="ghost"
                size="icon"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="border-b border-border bg-background p-5 shadow-sm flex flex-col gap-3"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activeAnchor === item.id ? "location" : undefined}
                className={`nav-link ${activeAnchor === item.id ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="page-container footer-inner">
          <div className="footer-identity">
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">Mechatronics Engineering Student · UET Taxila</p>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <nav aria-label="Social profiles" className="footer-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <div className="page-container">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="section-subtitle">{description}</p>
      </div>
    </div>
  );
}

export function ContactBand() {
  return (
    <section id="contact" className="contact-band">
      <div className="page-container contact-inner">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Let’s connect.</h2>
          <p className="section-subtitle">
            Recruiters, engineers, and collaborators are welcome to reach out about engineering
            projects and opportunities.
          </p>
        </div>
        <div className="contact-actions">
          <Button asChild size="lg">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin /> Connect on LinkedIn <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github /> View GitHub <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ContactDetails() {
  return (
    <div className="max-w-3xl">
      <h2 className="section-title">A conversation starts here.</h2>
      <p className="about-copy">
        I’d welcome the opportunity to connect with engineers, recruiters, and fellow students about
        practical projects, learning opportunities, and internships.
      </p>
      <div className="contact-actions mt-7">
        <Button asChild size="lg">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin /> Connect on LinkedIn <ArrowUpRight />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github /> Visit GitHub <ArrowUpRight />
          </a>
        </Button>
      </div>
      <div className="mt-10 border-t border-border pt-7 flex items-start gap-4">
        <Mail className="text-primary mt-1" size={22} />
        <div>
          <h3 className="font-semibold">Email</h3>
          {profile.email ? (
            <a className="text-primary text-sm mt-2 inline-block" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          ) : (
            <p className="text-sm text-muted-foreground mt-2">
              Email address to be added. Please connect via LinkedIn in the meantime.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
