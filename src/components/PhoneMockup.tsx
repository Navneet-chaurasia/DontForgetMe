export function PhoneMockup() {
  return (
    <div className="relative w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] border border-border bg-surface p-2.5 sm:p-3 shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 sm:h-7 bg-bg rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden bg-bg">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 sm:px-8 pt-3 sm:pt-4 pb-2 text-[9px] sm:text-[10px] text-text-secondary">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2 border border-text-secondary rounded-sm">
                <div className="w-3/4 h-full bg-text-secondary rounded-sm" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="px-4 sm:px-5 pb-5 sm:pb-6 pt-1 sm:pt-2 space-y-2.5 sm:space-y-3">
            <h3 className="text-xs sm:text-sm font-medium text-text-primary">Your Saves</h3>

            <SavedItem
              type="video"
              title="How to Build Better Habits"
              source="YouTube"
              time="Saved 14 days ago"
              badge="Still want to watch?"
            />
            <SavedItem
              type="reel"
              title="Travel Reel - Tokyo Street Food"
              source="Instagram"
              time="Saved 7 days ago"
              badge={undefined}
            />
            <SavedItem
              type="article"
              title="Why We Procrastinate on Things We Care About"
              source="Medium"
              time="Saved 21 days ago"
              badge="Hey, you saved this for a reason."
            />
            <SavedItem
              type="product"
              title="Sony WH-1000XM5 Headphones"
              source="Amazon"
              time="Saved 3 days ago"
              badge={undefined}
            />
          </div>
        </div>
      </div>

      {/* Ambient glow behind phone */}
      <div className="absolute -inset-8 sm:-inset-12 -z-10 bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
}

function SavedItem({
  title,
  source,
  time,
  badge,
}: {
  type: string;
  title: string;
  source: string;
  time: string;
  badge: string | undefined;
}) {
  return (
    <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-surface-elevated border border-border/50 space-y-1 sm:space-y-1.5">
      <div className="flex justify-between items-start gap-2">
        <p className="text-[10px] sm:text-xs font-medium text-text-primary leading-tight line-clamp-2">{title}</p>
        <span className="text-[8px] sm:text-[9px] text-text-muted whitespace-nowrap shrink-0">{source}</span>
      </div>
      <p className="text-[9px] sm:text-[10px] text-text-muted">{time}</p>
      {badge && (
        <p className="text-[9px] sm:text-[10px] text-accent font-medium">{badge}</p>
      )}
    </div>
  );
}
