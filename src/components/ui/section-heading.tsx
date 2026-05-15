type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <div className={["grid justify-items-center gap-10", className].join(" ")}>
      <span
        aria-hidden="true"
        className="block h-[38px] w-[100px] rounded-[999px_0_999px_0] bg-wagou-primary"
      />
      <h2 className="wagou-serif text-center text-[26px] leading-[1] text-wagou-contrast">
        {title}
      </h2>
    </div>
  );
}
