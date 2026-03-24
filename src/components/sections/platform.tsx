"use client";

import {
  Dna,
  FlaskConical,
  FileText,
  Microscope,
  Database,
  Handshake,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    icon: Dna,
    title: "AI Structure Prediction",
    description:
      "High-accuracy protein folding powered by transformer-based models. Predict tertiary and quaternary structures in minutes, not months.",
  },
  {
    icon: FlaskConical,
    title: "Sequence Engineering",
    description:
      "Design optimized amino acid sequences for desired binding affinities, thermostability, and functional properties using generative AI.",
  },
  {
    icon: FileText,
    title: "Bioinformatics Pipelines",
    description:
      "Automated MSA generation, homology modeling, and variant effect prediction — all orchestrated in reproducible cloud pipelines.",
  },
  {
    icon: Microscope,
    title: "Molecular Dynamics",
    description:
      "Simulate protein-ligand interactions and conformational changes at physiological conditions with GPU-accelerated MD simulations.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description:
      "Seamlessly connect to UniProt, PDB, and proprietary databases. Aggregate and annotate experimental data alongside computational predictions.",
  },
  {
    icon: Handshake,
    title: "Collaborative Workspace",
    description:
      "Real-time collaboration tools designed for interdisciplinary teams — wet lab scientists and computational biologists working in sync.",
  },
] as const;

export function Platform() {
  useReveal();

  return (
    <section id="platform" className="section-padding">
      <div className="container-wide space-y-6">
        <p className="label">Platform</p>
        <h2 className="reveal font-heading">
          Built for the complexity
          <br />
          of modern proteomics
        </h2>
        <p className="reveal mb-16 text-brand-text-muted">
          From raw sequence to actionable structural insight — Foldara handles
          the computational heavy lifting.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="reveal">
              <Card
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

