import { Code, Palette, Rocket, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, title: "Development", description: "React, TypeScript, Node.js, and modern web technologies" },
    { icon: Palette, title: "Design", description: "UI/UX design with Figma, creating intuitive experiences" },
    { icon: Rocket, title: "Performance", description: "Optimized, fast-loading applications that scale" },
    { icon: Zap, title: "Innovation", description: "Always exploring new technologies and best practices" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A passionate developer dedicated to creating impactful digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image/Avatar Area */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-card border border-border overflow-hidden shadow-card">
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-4xl">
                    AJ
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-2xl text-foreground">
                Turning Ideas Into Reality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in web development, I specialize in building
                modern, responsive applications that not only look great but perform exceptionally.
                My journey began with a curiosity for how things work, which evolved into a passion
                for creating seamless digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the
                latest industry trends. When I'm not coding, you'll find me exploring new
                technologies, contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "Tailwind", "Figma", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 rounded-xl bg-gradient-card border border-border shadow-card card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {skill.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
