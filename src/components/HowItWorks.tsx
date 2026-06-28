import { FadeIn, PopIn } from './FadeIn';
import shareSheet2 from '@/assets/screenshots/dfm_share_sheet_2.webp';
import homePage from '@/assets/screenshots/dfm_home_page.webp';
import reminderPopover from '@/assets/screenshots/dfm_setting_page_set_reminder_frequency_popover.webp';

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
          <PopIn delay={0.1} className="sm:col-span-2 md:col-span-1">
            <Step
              number="1"
              title="Save"
              description="Share anything to DFM from any app on your phone."
              image={shareSheet2}
              imageAlt="iOS share sheet with DFM option"
            />
          </PopIn>
          <PopIn delay={0.2}>
            <Step
              number="2"
              title="Organize"
              description="DFM understands what you saved and sorts it for you."
              image={homePage}
              imageAlt="DFM home page with organized saves"
            />
          </PopIn>
          <PopIn delay={0.3}>
            <Step
              number="3"
              title="Remember"
              description="Come back when it matters. Never lose track again."
              image={reminderPopover}
              imageAlt="DFM reminder frequency settings"
            />
          </PopIn>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
  image,
  imageAlt,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full aspect-[9/16] max-h-[420px] rounded-xl sm:rounded-2xl bg-surface border border-border/50 flex items-center justify-center mb-5 sm:mb-6 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <span className="text-xs text-accent font-medium tracking-wide">{number}</span>
      <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-medium text-text-primary">{title}</h3>
      <p className="mt-1.5 sm:mt-2 text-sm text-text-secondary leading-relaxed max-w-[30ch]">
        {description}
      </p>
    </div>
  );
}
