import { FadeIn } from './FadeIn';

export function Problem() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] text-text-primary">
            We save hundreds of things.
            <br />
            <span className="text-text-secondary">We finish almost none.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <ProblemCard label="Saved Reels" detail="147 unwatched" />
            <ProblemCard label="Bookmarks" detail="300+ articles" />
            <ProblemCard label="Watch Later" detail="Hundreds of videos" />
            <ProblemCard label="Screenshots" detail="Lost in camera roll" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-16 text-lg md:text-xl text-text-secondary font-light max-w-[45ch] mx-auto">
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
    <div className="p-5 rounded-2xl bg-surface border border-border/50 text-left">
      <p className="text-sm text-text-primary font-medium">{label}</p>
      <p className="mt-1 text-xs text-text-muted">{detail}</p>
    </div>
  );
}
