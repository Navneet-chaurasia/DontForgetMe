import { FadeIn } from './FadeIn';

export function FinalCta() {
  return (
    <section id="download" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] text-text-primary">
            Your next favorite thing shouldn't stay forgotten.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-bg text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-200 active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.182 0c.15 1.083-.315 2.15-1.017 2.917-.717.767-1.833 1.35-2.95 1.267-.167-1.05.35-2.15 1.017-2.833C8.948.583 10.132.033 11.182 0zm2.95 5.517c-.167.1-1.95 1.133-1.933 3.383.017 2.683 2.35 3.567 2.383 3.583-.017.067-.367 1.283-1.233 2.517-.75 1.083-1.533 2.15-2.767 2.167-1.2.017-1.6-.717-2.983-.717-1.383 0-1.817.7-2.967.733-1.183.033-2.083-1.167-2.85-2.25C.217 12.767-.85 9.35.817 7.017c.817-1.15 2.283-1.883 3.867-1.9 1.167-.017 2.25.783 2.967.783.7 0 2.033-.967 3.417-.833.583.033 2.2.233 3.233 1.783-.083.05-.017-.033-.15.067z" />
              </svg>
              Download DFM
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-6 text-xs text-text-muted">
            Available on iOS. Android coming soon.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
