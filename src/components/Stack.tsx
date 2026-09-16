type StackGroup = {
  label: string;
  items: string[];
};

const CORE: StackGroup[] = [
  { label: "lenguajes", items: ["TypeScript", "Python", "Java", "C++", "Dart"] },
  { label: "frontend", items: ["React", "Next.js", "Flutter"] },
  { label: "backend", items: ["Node.js", "NestJS", "FastAPI"] },
  { label: "datos", items: ["PostgreSQL", "Oracle", "Firebase/Firestore"] },
  { label: "infra", items: ["GCP", "Linux", "Docker"] },
  { label: "otros", items: ["ISO 8583", "JWT", "REST APIs", "Git"] },
];

const EXPOSURE = [
  "Kafka",
  "NATS",
  "Kubernetes",
  "GitLab CI",
  "Spring Boot",
  "Vue",
];

export default function Stack() {
  return (
    <section id="stack" className="max-w-content mx-auto px-6 py-16">
      <p className="font-mono text-sm text-text-dim mb-8">
        cristian@dev:~$ cat stack.md
      </p>

      <div className="flex flex-col gap-6 mb-10">
        {CORE.map((group) => (
          <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <span className="font-mono text-sm text-text-dim w-24 shrink-0">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {group.items.map((item) => (
                <span key={item} className="text-text text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <p className="font-mono text-sm text-text-dim mb-3">
          # exposición en proyectos de equipo, no como autor principal
        </p>
        <div className="flex flex-wrap gap-2">
          {EXPOSURE.map((item) => (
            <span
              key={item}
              className="font-mono text-xs text-text-dim border border-border px-2 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}