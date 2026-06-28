export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-text-muted">
          DFM - Don't Forget Me
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
            Privacy
          </a>
          <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
            Terms
          </a>
          <a href="mailto:hello@dfm.app" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
