import homePage from '@/assets/screenshots/dfm_home_page.webp';

export function PhoneMockup() {
  return (
    <div className="relative w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]">
      <img
        src={homePage}
        alt="DFM home page showing saved links"
        className="w-full h-auto block rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/50"
      />
      {/* Ambient glow behind */}
      <div className="absolute -inset-8 sm:-inset-12 -z-10 bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
}
