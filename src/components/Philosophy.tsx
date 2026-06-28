import { FadeIn } from './FadeIn';

export function Philosophy() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <blockquote className="text-2xl md:text-4xl font-light tracking-tight leading-[1.3] text-text-primary">
            Your saved content is a collection of things you care about.
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-8 text-text-secondary text-sm">
            DFM helps you reconnect with those moments.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
