import { FadeIn } from './FadeIn';

export function ProductExperience() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-text-primary text-center">
            Finally, control over what you save.
          </h2>
          <p className="mt-4 text-text-secondary text-center max-w-[45ch] mx-auto">
            A calm space to revisit, complete, and rediscover.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <ScreenCard
              title="Home Feed"
              items={[
                { label: 'Videos', count: 12 },
                { label: 'Articles', count: 8 },
                { label: 'Products', count: 5 },
                { label: 'Places', count: 3 },
              ]}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <DetailCard />
          </FadeIn>
          <FadeIn delay={0.3}>
            <CompletedCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ScreenCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; count: number }[];
}) {
  return (
    <div className="rounded-2xl bg-surface border border-border/50 p-6 h-full">
      <p className="text-xs text-text-muted mb-4">{title}</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <span className="text-sm text-text-primary">{item.label}</span>
            <span className="text-xs text-text-muted tabular-nums">{item.count}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 h-1 rounded-full bg-border overflow-hidden">
        <div className="h-full w-2/3 rounded-full bg-accent/60" />
      </div>
      <p className="mt-2 text-[10px] text-text-muted">67% explored</p>
    </div>
  );
}

function DetailCard() {
  return (
    <div className="rounded-2xl bg-surface border border-border/50 p-6 h-full">
      <p className="text-xs text-text-muted mb-4">Item Details</p>
      <div className="rounded-xl bg-surface-elevated border border-border/50 p-4 space-y-3">
        <div className="w-full h-20 rounded-lg bg-bg flex items-center justify-center">
          <span className="text-[10px] text-text-muted">Preview</span>
        </div>
        <p className="text-sm text-text-primary font-medium">
          How to Build Better Habits
        </p>
        <p className="text-[10px] text-text-muted">YouTube - 14 min</p>
        <div className="flex gap-2 pt-1">
          <span className="px-2 py-1 rounded-md text-[9px] bg-accent/10 text-accent">
            Remind me
          </span>
          <span className="px-2 py-1 rounded-md text-[9px] bg-surface text-text-muted border border-border/50">
            Archive
          </span>
        </div>
      </div>
    </div>
  );
}

function CompletedCard() {
  return (
    <div className="rounded-2xl bg-surface border border-border/50 p-6 h-full">
      <p className="text-xs text-text-muted mb-4">Completed</p>
      <div className="space-y-3">
        {[
          'Tokyo Street Food Reel',
          'Atomic Habits Summary',
          'Noise-Cancelling Headphones',
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 p-3 rounded-xl bg-surface-elevated border border-border/50"
          >
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5.5L4 7.5L8 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                />
              </svg>
            </div>
            <span className="text-xs text-text-secondary line-through">{item}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-accent">Things you finally finished.</p>
    </div>
  );
}
