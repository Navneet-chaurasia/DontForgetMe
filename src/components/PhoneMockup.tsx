import shareSheet from '@/assets/screenshots/dfm_share_sheet.webp';

export function PhoneMockup() {
  return (
    <div className="relative w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] border border-border bg-surface p-2 sm:p-2.5 shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 sm:h-7 bg-bg rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden bg-bg">
          <img
            src={shareSheet}
            alt="DFM share sheet showing how to save links"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Ambient glow behind phone */}
      <div className="absolute -inset-8 sm:-inset-12 -z-10 bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
}
