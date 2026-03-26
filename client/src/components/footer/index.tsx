
const Footer = () => {
  return (
    <footer className="border-t bg-background/70">
        <div className="mx-auto flex h-16 w-full max-w-[var(--max-width)] items-center justify-between px-4 text-sm text-muted-foreground lg:px-14">
          <p>Spendly helps you track spending with more clarity.</p>
          <p>&copy; {new Date().getFullYear()} Spendly</p>
        </div>
    </footer>
  )
}

export default Footer
