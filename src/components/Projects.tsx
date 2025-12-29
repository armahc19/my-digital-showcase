import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration. Built with React and Node.js.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "bg-gradient-to-br from-primary/30 to-accent/30",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task manager with real-time updates, drag-and-drop, and team features.",
      tags: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
      image: "bg-gradient-to-br from-accent/30 to-primary/30",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered tool that generates marketing copy, blog posts, and social media content.",
      tags: ["React", "OpenAI", "Python", "FastAPI"],
      image: "bg-gradient-to-br from-primary/40 to-secondary",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first fitness app with workout tracking, progress charts, and goal setting.",
      tags: ["React Native", "Firebase", "Charts.js"],
      image: "bg-gradient-to-br from-secondary to-accent/30",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description: "A property listing platform with advanced search, maps integration, and virtual tours.",
      tags: ["Vue.js", "Laravel", "MapBox", "PostgreSQL"],
      image: "bg-gradient-to-br from-accent/20 to-primary/20",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Analytics Dashboard",
      description: "A comprehensive analytics dashboard for tracking social media performance across platforms.",
      tags: ["React", "D3.js", "Node.js", "Redis"],
      image: "bg-gradient-to-br from-primary/20 to-accent/40",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group rounded-xl bg-gradient-card border border-border overflow-hidden shadow-card card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className={`aspect-video ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] group-hover:animate-[shimmer_1.5s_ease-in-out]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                    <div className="flex gap-3">
                      <Button variant="glow" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="#" className="gap-2">
                <Github size={20} />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
