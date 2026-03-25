export function Footer() {
  return (
    <footer className="container-wide flex flex-wrap items-center justify-between gap-6 py-12">
      <span className="text-sm text-brand-text-muted">
        © 2026 Foldara Inc. — Fictional company for portfolio purposes.
      </span>

      <ul className="flex list-none gap-8">
        <li>
          <a
            href="#"
            className="text-sm text-brand-text-muted transition-colors duration-200 hover:text-gold"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm text-brand-text-muted transition-colors duration-200 hover:text-gold"
          >
            Terms
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm text-brand-text-muted transition-colors duration-200 hover:text-gold"
          >
            Research
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm text-brand-text-muted transition-colors duration-200 hover:text-gold"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
