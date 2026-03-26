type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "outline"
    href?: string
    onClick?: () => void
  }
  
  export function Button({ children, variant = "primary", href, onClick }: ButtonProps) {
    const baseCls =
      "inline-flex cursor-pointer items-center gap-2 rounded-md px-7 py-3 text-[0.95rem] transition-[background-color,border-color,color,transform] duration-200"
    const primaryCls =
      "border-none bg-(image:--gradient-brand) font-semibold text-brand-bg hover:-translate-y-px hover:opacity-80"
    const outlineCls =
      "border border-brand-border bg-transparent font-medium text-brand-text hover:-translate-y-px hover:border-gold hover:text-gold"
    const cls = `${baseCls} ${variant === "outline" ? outlineCls : primaryCls}`
  
    if (href) {
      return <a href={href} className={cls}>{children}</a>
    }
  
    return <button onClick={onClick} className={cls}>{children}</button>
  }