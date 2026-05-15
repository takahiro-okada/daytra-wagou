import Link from "next/link";
import { wagouColors } from "@/lib/design-tokens";

const navigationItems = [
  { href: "#about", label: "和合について" },
  { href: "#menu", label: "おしながき" },
  { href: "#meditation", label: "茶・メディテーション" },
  { href: "#blog", label: "日々のこと" },
  { href: "#media", label: "メディア情報" },
  { href: "#access", label: "アクセス" },
] as const;

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "grid place-items-center rounded-full border-2 border-dashed border-wagou-contrast wagou-serif text-wagou-contrast",
        compact ? "size-16 text-[28px]" : "size-[90px] text-[38px]",
      ].join(" ")}
    >
      茶
    </span>
  );
}

function HamburgerIcon() {
  const lineStyle = { backgroundColor: wagouColors.contrast };

  return (
    <span aria-hidden="true" className="grid w-[30px] gap-[6px]">
      <span className="h-[2px] w-full" style={lineStyle} />
      <span className="h-[2px] w-full" style={lineStyle} />
      <span className="h-[2px] w-full" style={lineStyle} />
    </span>
  );
}

export function SiteChrome() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-wagou-white focus:px-4 focus:py-2 focus:text-wagou-contrast"
        href="#main-content"
      >
        Skip to content
      </a>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1440px] items-start justify-between px-4 py-4 sm:px-8 lg:px-16 lg:py-20">
          <Link
            aria-label="Wagou home"
            className="pointer-events-auto hidden lg:block"
            href="/"
          >
            <LogoMark />
          </Link>

          <Link
            aria-label="Wagou home"
            className="pointer-events-auto lg:hidden"
            href="/"
          >
            <LogoMark compact />
          </Link>

          <a
            aria-controls="site-menu"
            aria-label="Open navigation menu"
            className="pointer-events-auto grid size-11 place-items-center rounded-full border border-wagou-contrast bg-wagou-base-body/80 backdrop-blur-sm transition hover:bg-wagou-white focus:outline-none focus:ring-2 focus:ring-wagou-primary"
            href="#site-menu"
          >
            <HamburgerIcon />
          </a>
        </div>
      </header>

      <nav
        aria-label="Primary navigation"
        className="fixed left-16 top-[260px] z-30 hidden lg:block"
      >
        <ul className="wagou-serif grid gap-5 text-[15px] leading-10 text-wagou-contrast">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-wagou-primary" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="invisible pointer-events-none fixed inset-0 z-50 bg-wagou-base-body/95 px-8 py-8 opacity-0 backdrop-blur-md transition duration-200 target:visible target:pointer-events-auto target:opacity-100 lg:px-16"
        id="site-menu"
      >
        <div className="flex items-start justify-between">
          <Link aria-label="Wagou home" href="/">
            <LogoMark compact />
          </Link>
          <a
            aria-label="Close navigation menu"
            className="grid size-11 place-items-center rounded-full bg-wagou-white text-wagou-contrast shadow-wagou-soft focus:outline-none focus:ring-2 focus:ring-wagou-primary"
            href="#main-content"
          >
            <span className="text-2xl leading-none">x</span>
          </a>
        </div>

        <nav aria-label="Expanded navigation" className="mt-16">
          <ul className="wagou-serif grid gap-7 text-[24px] leading-10 text-wagou-contrast sm:text-[32px]">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <a
        className="fixed bottom-4 right-3 z-40 grid size-[112px] place-items-center rounded-[999px_999px_999px_8px] bg-wagou-primary text-center text-wagou-white shadow-wagou-card transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-wagou-primary focus:ring-offset-2 sm:bottom-8 sm:right-8 sm:size-[132px]"
        href="#reservation"
      >
        <span className="grid gap-1">
          <span className="wagou-serif text-[17px] leading-none sm:text-[20px]">
            予約する
          </span>
          <span className="font-serif text-xs leading-none sm:text-sm">Reserve</span>
        </span>
      </a>
    </>
  );
}
