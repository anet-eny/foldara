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

        <div className="relative mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 right-[calc(16.66%+1rem)] left-[calc(16.66%+1rem)] hidden h-px bg-[linear-gradient(90deg,var(--color-gold),var(--color-orange),var(--color-gold))] opacity-30 md:block"
          />
          {steps.map((step) => (
            <div
              key={step.num}
              className="reveal relative flex flex-col items-center text-center px-4 md:px-6 lg:px-8"
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
              <p className="text-sm text-brand-text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-brand-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const isLastOdd =
              stats.length % 2 === 1 && index === stats.length - 1;
            return (
              <div
                key={stat.label}
                className={`bg-brand-surface-2 px-6 py-8 text-center sm:px-8 sm:py-10 lg:px-12 lg:py-14 ${isLastOdd ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="stat-value">{stat.value}</div>
                <p className="w-full max-w-none text-sm leading-relaxed text-brand-text-muted sm:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
