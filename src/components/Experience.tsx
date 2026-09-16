type Role = {
  title: string;
  period: string;
  description: string;
};

const ROLES: Role[] = [
  {
    title: "Service Operation Analyst",
    period: "jun. 2026 — actualidad",
    description:
      "Turnos rotativos de monitoreo sobre sistemas de mensajería financiera. Continuidad del trabajo técnico anterior, ahora con foco en operación y estabilidad de servicio.",
  },
  {
    title: "Business Service Developer",
    period: "~2025 — jun. 2026",
    description:
      "Desarrollo sobre ACI UPF (routing y mensajería financiera vía ISO 8583), autenticación con JWT, infraestructura en GCP y Linux, bases de datos PostgreSQL y Oracle. Comunicación técnica en inglés con proveedor (ACI Worldwide) y stakeholders angloparlantes.",
  },
];

const EDUCATION = [
  {
    degree: "Ingeniería de Sistemas y Computación",
    date: "oct. 2024",
  },
  {
    degree: "Ingeniería Industrial",
    date: "abr. 2023",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="max-w-content mx-auto px-6 py-16">
      <p className="font-mono text-sm text-text-dim mb-8">
        cristian@dev:~$ cat experiencia.log
      </p>

      <div className="flex flex-col gap-8 mb-12">
        {ROLES.map((role) => (
          <div key={role.title} className="border-l-2 border-border pl-4">
            <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
              <h3 className="font-mono text-text">{role.title}</h3>
              <span className="font-mono text-xs text-text-dim">
                {role.period}
              </span>
            </div>
            <p className="text-text-dim leading-relaxed max-w-[60ch] text-sm">
              {role.description}
            </p>
          </div>
        ))}
        <p className="font-mono text-xs text-text-dim pl-4">
          Kuvasz — ~1.5 años
        </p>
      </div>

      <div className="border-t border-border pt-6">
        <p className="font-mono text-sm text-text-dim mb-4">
          # educación — doble titulación
        </p>
        <div className="flex flex-col gap-2">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-wrap items-baseline gap-x-3"
            >
              <span className="text-text text-sm">{edu.degree}</span>
              <span className="font-mono text-xs text-text-dim">
                {edu.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}