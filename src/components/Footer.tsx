export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-5 sm:px-8 md:px-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p className="text-[10px] sm:text-xs text-text-muted">
          DFM - Don't Forget Me
        </p>
        <div className="flex gap-5 sm:gap-6">
          <a href="#" className="text-[10px] sm:text-xs text-text-muted hover:text-text-secondary transition-colors">
            Privacy
          </a>
          <a href="#" className="text-[10px] sm:text-xs text-text-muted hover:text-text-secondary transition-colors">
            Terms
          </a>
          <a href="mailto:hello@dfm.app" className="text-[10px] sm:text-xs text-text-muted hover:text-text-secondary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
