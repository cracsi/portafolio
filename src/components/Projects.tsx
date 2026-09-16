type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  note?: string;
};

const PROJECTS: Project[] = [
  {
    name: "UniMarket",
    slug: "unimarket",
    description:
      "Marketplace universitario para que estudiantes compren y vendan entre sí. App móvil con autenticación, publicación de productos y almacenamiento de imágenes.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore"],
    github: "https://github.com/cracsi/FlutterApp",
    note: "Demo en video próximamente",
  },
  {
    name: "Crawler PG-ISIS",
    slug: "crawler",
    description:
      "Set de scripts que rastrean dominios institucionales (DANE, Uniandes, ICBF) y detectan cuáles no están indexados por Google, clasificándolos como deep web.",
    stack: ["Python", "Web Scraping"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="max-w-content mx-auto px-6 py-16">
      <p className="font-mono text-sm text-text-dim mb-8">
        cristian@dev:~$ ls proyectos/
      </p>

      <div className="flex flex-col gap-10">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="border border-border rounded-none p-6"
          >
            <h3 className="font-mono text-lg text-text mb-2">
              {project.name}
            </h3>

            <p className="text-text-dim leading-relaxed mb-4 max-w-[60ch]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-text-dim border border-border px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 font-mono text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                repo
              </a>
              {project.demo && (
                <>
                  <span className="text-border">·</span>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    demo
                  </a>
                </>
              )}
              {project.note && (
                <span className="text-text-dim text-xs">
                  {project.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}