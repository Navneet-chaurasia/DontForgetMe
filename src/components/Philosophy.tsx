import { FadeIn } from './FadeIn';

export function Philosophy() {
  return (
    <section className="py-20 sm:py-28 md:py-40 lg:py-48 px-5 sm:px-8 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-[1.3] text-text-primary">
            Your saved content is a collection of things you care about.
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 sm:mt-8 text-text-secondary text-xs sm:text-sm">
            DFM helps you reconnect with those moments.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
