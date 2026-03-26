import type { LucideIcon } from "lucide-react";

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border border-brand-border bg-brand-surface p-8 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-t-gold">
      <div className="inline-flex size-12 items-center justify-center rounded-md bg-(image:--gradient-brand)">
        <Icon aria-hidden color="white" size={22} />
      </div>
      <h3 className="font-heading font-semibold text-brand-text">{title}</h3>
      <p className="text-sm text-brand-text-muted">{description}</p>
    </div>
  );
}
