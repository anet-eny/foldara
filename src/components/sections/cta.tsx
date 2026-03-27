"use client";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

export function CTA() {
  useReveal();

  return (
    <section className="section-padding">
      <div className="container-narrow text-center flex flex-col items-center gap-4">
        <p className="label reveal">Get started</p>
        <h2 className="reveal font-heading">
          Ready to accelerate
          <br />
          your protein research?
        </h2>
        <p className="reveal text-brand-text-muted">
          Join leading research institutions and biotech companies already using
          Foldara to push the boundaries of protein engineering.
        </p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#">Request early access</Button>
          <Button href="#" variant="outline">
            Read the docs
          </Button>
        </div>
      </div>
    </section>
  );
}
