import { FadeIn } from './FadeIn';

export function Problem() {
  return (
    <section className="py-20 sm:py-28 md:py-40 lg:py-48 px-5 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] text-text-primary">
            We save hundreds of things.
            <br />
            <span className="text-text-secondary">We finish almost none.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <ProblemCard label="Saved Reels" detail="147 unwatched" />
            <ProblemCard label="Bookmarks" detail="300+ articles" />
            <ProblemCard label="Watch Later" detail="Hundreds of videos" />
            <ProblemCard label="Screenshots" detail="Lost in camera roll" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-10 sm:mt-14 md:mt-16 text-base sm:text-lg md:text-xl text-text-secondary font-light max-w-[45ch] mx-auto leading-relaxed">
            The internet remembers everything.
            <br />
            But you don't.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function ProblemCard({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface border border-border/50 text-left">
      <p className="text-xs sm:text-sm text-text-primary font-medium">{label}</p>
      <p className="mt-1 text-[10px] sm:text-xs text-text-muted">{detail}</p>
    </div>
  );
}
