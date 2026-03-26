import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-brand-border bg-brand-bg/70 backdrop-blur-lg">
      <div className="mx-auto flex w-full items-center justify-between px-2 py-2 sm:px-6 lg:px-8">
        {/* Logo + brand */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Foldara logo"
            height={80}
            width={80}
            priority
          />
          <span
            className="text-2xl font-semibold tracking-tight text-brand-text"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fold<span className="text-gold">ara</span>
          </span>
        </a>

        {/* Nav links + CTA (desktop only) */}
        <div className="flex items-center gap-10">
          <ul className="hidden items-center gap-10 text-sm md:flex">
            <li>
              <a
                href="#platform"
                className="text-brand-text-secondary transition-colors duration-200 hover:text-brand-text"
              >
                Platform
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-brand-text-secondary transition-colors duration-200 hover:text-brand-text"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#research"
                className="text-brand-text-secondary transition-colors duration-200 hover:text-brand-text"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-brand-text-secondary transition-colors duration-200 hover:text-brand-text"
              >
                About
              </a>
            </li>
          </ul>

          <div className="hidden md:block">
            <Button href="/request-access">Request Access</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
