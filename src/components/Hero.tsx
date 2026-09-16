"use client";

import { useEffect, useState } from "react";

const COMMAND = "whoami";
const OUTPUT = "Software Engineer, full-stack.";

export default function Hero() {
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < COMMAND.length) {
        setTypedCommand(COMMAND.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => setShowOutput(true), 300);
      }
    }, 90);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="max-w-content mx-auto px-6 pt-24 pb-16">
      <p className="font-mono text-sm text-text-dim mb-2">
        cristian@dev:~$ {typedCommand}
        <span
          className="inline-block w-2 ml-0.5"
          style={{ opacity: showCursor ? 1 : 0 }}
        >
          _
        </span>
      </p>

      {showOutput && (
        <div className="animate-[fadeIn_0.4s_ease-out]">
          <p className="font-mono text-accent text-sm mb-4">&gt; {OUTPUT}</p>

          <h1 className="font-mono text-2xl md:text-3xl font-medium mb-6 leading-snug">
            Cristian Acuña Silva
          </h1>

          <p className="text-text-dim leading-relaxed mb-8 max-w-[60ch]">
            Ingeniero de Sistemas y Computación e Ingeniero Industrial.
            Construyo software full-stack con una mirada de procesos y
            optimización que viene de mi otra carrera. Actualmente en
            búsqueda de nuevas oportunidades como desarrollador.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
            <a
              href="mailto:criacusil@gmail.com"
              className="text-accent hover:underline"
            >
              contactar
            </a>
            <span className="text-border">·</span>
            <a
              href="#"
              className="text-text-dim hover:text-text transition-colors"
            >
              github
            </a>
            <span className="text-border">·</span>
            <a
              href="#"
              className="text-text-dim hover:text-text transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      )}
    </section>
  );
}