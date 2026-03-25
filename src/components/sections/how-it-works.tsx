"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    title: "Input & Preparation",
    description:
      "Upload sequences or fetch directly from public databases. Define your target properties — binding specificity, thermostability, solubility.",
  },
  {
    num: "02",
    title: "Compute & Predict",
    description:
      "Foldara's AI engine generates structure predictions, runs variant sweeps, and scores candidate designs against your objectives.",
  },
  {
    num: "03",
    title: "Validate & Iterate",
    description:
      "Visualize results in 3D, export to standard formats (PDB, CIF), and refine designs based on wet lab feedback — closing the loop.",
  },
] as const;

const stats = [
  {
    value: "94%",
    label: "Structure prediction accuracy (TM-score > 0.9)",
  },
  {
    value: "12×",
    label: "Faster than traditional experimental approaches",
  },
  {
    value: "50k+",
    label: "Proteins analyzed across research pipelines",
  },
] as const;

export function HowItWorks() {
  useReveal();

  return (
    <section id="how-it-works" className="section-padding bg-brand-surface">
      <div className="container-wide space-y-6">
        <p className="reveal label">How it works</p>
        <h2 className="reveal font-heading">
          From sequence to insight
          <br />
          in three steps
        </h2>
        <p className="reveal text-brand-text-muted mb-16">
          A streamlined workflow that takes you from raw biological data to
          validated protein designs.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div
              key={step.num}
              className="reveal flex flex-col items-center text-center px-8"
            >
              <div
                className="relative z-1 inline-flex h-12 w-12 items-center justify-center rounded-full font-heading text-sm font-bold text-brand-bg"
                style={{ background: "var(--gradient-brand)" }}
              >
                {step.num}
              </div>
              <h3 className="mt-6 mb-2 font-heading font-semibold">
                {step.title}
              </h3>
              <p className="text-sm text-brand-text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-grid reveal">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <div className="stat-value">{stat.value}</div>
              <p className="mt-2 text-sm text-brand-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
