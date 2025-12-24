import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Code2, Folder, Moon, Sun, Mail, ExternalLink, Github, Linkedin } from "lucide-react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };
  const projects = [
    {
      title: "FiveM Server Website",
      description: "A custom website for a FiveM roleplay server, featuring user registration, server status, and community forums.",
      tags: ["PHP", "MySQL", "JavaScript", "Lua"],
      link: "https://auralandrp.tailaa03c3.ts.net",
      github: "https://github.com/iM5LB" // Placeholder as specific repo wasn't found
    },
    {
      title: "Healthcare Dashboard",
      description: "A web-based system for managing healthcare staff assignments, room and ward allocations, and shift scheduling.",
      tags: ["PHP", "MySQL", "JavaScript"],
      link: "https://github.com/iM5LB/Healthcare_Dashboard",
      github: "https://github.com/iM5LB/Healthcare_Dashboard"
    },
    {
      title: "Hospital Appointment System",
      description: "A simple web-based system to manage hospital appointments with an easy-to-use interface.",
      tags: ["PHP", "MySQL"],
      link: "https://github.com/iM5LB/Simple-General-Appointments",
      github: "https://github.com/iM5LB/Simple-General-Appointments"
    },
    {
      title: "Full Custom Discord Rich Presence",
      description: "A powerful Discord plugin that gives you complete control over your Rich Presence status with advanced customization options and multiple profile support.",
      tags: ["JavaScript"],
      link: "https://github.com/iM5LB/FullCustomDiscordRichPresence",
      github: "https://github.com/iM5LB/FullCustomDiscordRichPresence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 selection:bg-primary/20">
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md animate-in slide-in-from-top-full duration-500">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2 font-serif text-xl font-semibold">
            <Code2 className="h-6 w-6 text-primary" />
            <span>Portfolio</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-all" />
              ) : (
                <Moon className="h-5 w-5 transition-all" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <section className="mb-24 text-center animate-in fade-in zoom-in-95 duration-700 slide-in-from-bottom-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <Folder className="h-4 w-4" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Hi, I'm Abdullah
            </span>
            <br />
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            A passionate developer creating innovative solutions and building amazing projects.
            I love turning ideas into reality through clean code and thoughtful design.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects">
              <Button size="lg" className="group shadow-lg shadow-primary/20 hover:shadow-primary/30">
                <span>View Projects</span>
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                <span>Get in Touch</span>
              </Button>
            </a>
          </div>
        </section>

        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground md:text-lg">
              A collection of my recent work and contributions
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="text-center scroll-mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-backwards">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-muted/20 p-8 md:p-12 shadow-sm">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mb-8 text-muted-foreground md:text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:14554378@uofn.edu.om">
                <Button size="lg" variant="default" className="shadow-md">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Button>
              </a>
              <a href="https://github.com/iM5LB" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/abdullah-sulaiman-hamood-alghawi-a99966365/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-muted/20 py-8">
        <div className="container mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abdullah Suleiman Al-Ghawi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
