import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";

export function Hero() {
  return (
    <section id="home" className="glow-gold hero-section-padding bg-brand-bg">
      <div className="container-wide relative z-1 flex flex-col justify-center items-center text-center gap-12">
        <div className="space-y-6">
          <SectionLabel>Next-gen protein engineering</SectionLabel>
          <h1>
            Where <span className="text-gradient">biology</span> meets
            <br />
            computational precision
          </h1>

          <p className="mx-auto">
            Foldara combines AI-driven protein structure prediction with advanced
            bioinformatics pipelines - accelerating discovery from sequence to
            function.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="#platform">Explore the platform</Button>
            <Button href="#process" variant="outline">
              See how it works
            </Button>
          </div>
        </div>

        <svg
          className="floating mx-auto h-auto w-full max-w-[900px] block"
          viewBox="0 0 700 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse cx="350" cy="160" rx="300" ry="120" fill="url(#heroGlow)" opacity="0.3" />

            <path
              d="M80 80 C120 60 160 140 200 120 C240 100 280 60 320 80 C360 100 380 140 350 160"
              stroke="url(#helixGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M80 140 C120 120 160 60 200 80 C240 100 280 140 320 120 C360 100 380 60 350 160"
              stroke="url(#helixGrad2)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />

            <line x1="100" y1="90" x2="100" y2="130" stroke="#f5a623" strokeWidth="1.5" opacity="0.6" />
            <line x1="140" y1="98" x2="140" y2="108" stroke="#f5a623" strokeWidth="1.5" opacity="0.6" />
            <line x1="180" y1="122" x2="180" y2="88" stroke="#f5a623" strokeWidth="1.5" opacity="0.6" />
            <line x1="220" y1="100" x2="220" y2="100" stroke="#f5a623" strokeWidth="1.5" opacity="0.6" />
            <line x1="260" y1="88" x2="260" y2="118" stroke="#f5a623" strokeWidth="1.5" opacity="0.6" />
            <line x1="300" y1="96" x2="300" y2="112" stroke="#f5a623" strokeWidth="1.5" opacity="0.6" />

            <path
              d="M320 100 C380 80 440 90 470 130 C500 170 490 220 450 240 C410 260 360 250 330 220 C300 190 280 160 290 130 C300 110 320 100 320 100Z"
              fill="url(#proteinFill)"
              opacity="0.15"
              stroke="url(#proteinStroke)"
              strokeWidth="1.5"
            />

            <path
              d="M350 120 L400 140 L420 190 L380 220 L340 200 L320 160 Z"
              stroke="url(#innerStroke)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M360 130 L395 155 L410 195 L375 215"
              stroke="#f5a623"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />

            <circle cx="100" cy="90" r="5" fill="#f5a623" opacity="0.9" />
            <circle cx="100" cy="130" r="5" fill="#e8742a" opacity="0.9" />
            <circle cx="180" cy="122" r="5" fill="#f5a623" opacity="0.9" />
            <circle cx="180" cy="88" r="5" fill="#e8742a" opacity="0.9" />
            <circle cx="260" cy="88" r="4" fill="#f5a623" opacity="0.9" />
            <circle cx="260" cy="118" r="4" fill="#e8742a" opacity="0.9" />
            <circle cx="140" cy="98" r="4" fill="#ffbe4f" opacity="0.7" />
            <circle cx="140" cy="108" r="4" fill="#ffbe4f" opacity="0.7" />
            <circle cx="300" cy="96" r="4" fill="#ffbe4f" opacity="0.7" />
            <circle cx="300" cy="112" r="4" fill="#ffbe4f" opacity="0.7" />

            <circle cx="340" cy="110" r="7" fill="#f5a623" opacity="0.7" />
            <circle cx="420" cy="105" r="6" fill="#e8742a" opacity="0.7" />
            <circle cx="470" cy="155" r="8" fill="#f5a623" opacity="0.6" />
            <circle cx="450" cy="230" r="6" fill="#e8742a" opacity="0.7" />
            <circle cx="370" cy="248" r="5" fill="#f5a623" opacity="0.6" />
            <circle cx="305" cy="210" r="7" fill="#ffbe4f" opacity="0.5" />

            <path d="M520 60 L560 60 L600 80 L640 60" stroke="#3a5278" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M520 100 L560 90 L600 110 L640 100" stroke="#3a5278" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M520 140 L560 130 L600 150 L640 140" stroke="#3a5278" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M520 180 L560 190 L600 170 L640 180" stroke="#3a5278" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M520 220 L560 210 L600 230 L640 220" stroke="#3a5278" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

            <circle cx="600" cy="110" r="5" fill="#f5a623" opacity="0.8" />
            <circle cx="560" cy="130" r="4" fill="#e8742a" opacity="0.7" />

            <rect x="530" y="48" width="90" height="20" rx="4" fill="#0f1f38" stroke="#f5a623" strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="575" y="62" textAnchor="middle" fill="#8fa8cc" fontSize="9" fontFamily="DM Sans, sans-serif">
              MSA alignment
            </text>

            <rect x="530" y="248" width="90" height="20" rx="4" fill="#0f1f38" stroke="#e8742a" strokeWidth="0.8" strokeOpacity="0.4" />
            <text x="575" y="262" textAnchor="middle" fill="#8fa8cc" fontSize="9" fontFamily="DM Sans, sans-serif">
              Structure output
            </text>

            <circle cx="640" cy="60" r="3" fill="#f5a623" opacity="0.6" />
            <circle cx="640" cy="100" r="3" fill="#e8742a" opacity="0.6" />
            <circle cx="640" cy="140" r="3" fill="#f5a623" opacity="0.6" />
            <circle cx="640" cy="180" r="3" fill="#e8742a" opacity="0.5" />

            <defs>
              <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5a623" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <linearGradient id="helixGrad" x1="80" y1="80" x2="350" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f5a623" />
                <stop offset="100%" stopColor="#e8742a" />
              </linearGradient>
              <linearGradient id="helixGrad2" x1="80" y1="140" x2="350" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#e8742a" />
                <stop offset="100%" stopColor="#f5a623" />
              </linearGradient>
              <linearGradient id="proteinFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5a623" />
                <stop offset="100%" stopColor="#e8742a" />
              </linearGradient>
              <linearGradient id="proteinStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffbe4f" />
                <stop offset="100%" stopColor="#e8742a" />
              </linearGradient>
              <linearGradient id="innerStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5a623" />
                <stop offset="100%" stopColor="#8fa8cc" />
              </linearGradient>
            </defs>
        </svg>
      </div>
    </section>
  );
}

