const COMPANIES = [
  "BioNTech",
  "Novartis",
  "Broad Institute",
  "Genentech",
  "EMBL",
] as const;

export function Trusted() {
  return (
    <section className="section-padding">
      <div className="container-wide flex flex-col items-center text-center">
        <p className="label mb-8" style={{ color: "var(--color-brand-text-muted)" }}>Trusted by researchers at</p>
        <div className="flex flex-row flex-wrap justify-center gap-12">
          {COMPANIES.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold tracking-tight opacity-60 transition-opacity duration-200 hover:opacity-100 font-heading text-brand-text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
