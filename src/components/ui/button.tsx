type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "outline"
    href?: string
    onClick?: () => void
  }
  
  export function Button({ children, variant = "primary", href, onClick }: ButtonProps) {
    const cls = variant === "outline" ? "btn-outline" : "btn-primary"
  
    if (href) {
      return <a href={href} className={cls}>{children}</a>
    }
  
    return <button onClick={onClick} className={cls}>{children}</button>
  }