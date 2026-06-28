import { FadeIn } from './FadeIn';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 md:py-40 lg:py-48 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-text-primary text-center">
            Three steps. Nothing more.
          </h2>
        </FadeIn>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
          <FadeIn delay={0.1} className="sm:col-span-2 md:col-span-1">
            <Step
              number="1"
              title="Save"
              description="Share anything to DFM from any app on your phone."
              visual={<ShareSheetVisual />}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <Step
              number="2"
              title="Organize"
              description="DFM understands what you saved and sorts it for you."
              visual={<CategoriesVisual />}
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Step
              number="3"
              title="Remember"
              description="Come back when it matters. Never lose track again."
              visual={<ReminderVisual />}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
  visual,
}: {
  number: string;
  title: string;
  description: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl bg-surface border border-border/50 flex items-center justify-center mb-5 sm:mb-6 overflow-hidden">
        {visual}
      </div>
      <span className="text-xs text-accent font-medium tracking-wide">{number}</span>
      <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-medium text-text-primary">{title}</h3>
      <p className="mt-1.5 sm:mt-2 text-sm text-text-secondary leading-relaxed max-w-[30ch]">
        {description}
      </p>
    </div>
  );
}

function ShareSheetVisual() {
  return (
    <div className="p-4 sm:p-6 w-full">
      <div className="rounded-lg sm:rounded-xl bg-surface-elevated border border-border/50 p-3 sm:p-4 space-y-2.5 sm:space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="text-accent text-[10px] sm:text-xs font-medium">D</span>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-text-primary font-medium">Share to DFM</p>
            <p className="text-[9px] sm:text-[10px] text-text-muted">Save for later</p>
          </div>
        </div>
        <div className="h-px bg-border/50" />
        <div className="flex gap-1.5 sm:gap-2">
          {['Messages', 'Notes', 'DFM'].map((app) => (
            <div
              key={app}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[9px] sm:text-[10px] ${
                app === 'DFM'
                  ? 'bg-accent/20 text-accent font-medium'
                  : 'bg-surface text-text-muted'
              }`}
            >
              {app}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoriesVisual() {
  const categories = ['Videos', 'Articles', 'Products', 'Places', 'Ideas'];
  return (
    <div className="p-4 sm:p-6 w-full">
      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] bg-surface-elevated border border-border/50 text-text-secondary"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}

function ReminderVisual() {
  return (
    <div className="p-4 sm:p-6 w-full">
      <div className="rounded-lg sm:rounded-xl bg-surface-elevated border border-border/50 p-3 sm:p-4">
        <div className="flex items-start gap-2.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-text-primary font-medium">DFM Reminder</p>
            <p className="text-[9px] sm:text-[10px] text-text-secondary mt-0.5 leading-relaxed">
              You saved "How to Build Better Habits" 14 days ago. Still interested?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
