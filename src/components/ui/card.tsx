import type { LucideIcon } from "lucide-react";

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="card card-hover flex flex-col gap-4">
      <div className="icon-wrapper">
        <Icon aria-hidden color="white" size={22} />
      </div>
      <h3 className="font-heading font-semibold text-brand-text">{title}</h3>
      <p className="text-sm text-brand-text-muted">{description}</p>
    </div>
  );
}
