import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "filled" | "outline";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type WagouButtonProps = ButtonAsButton | ButtonAsAnchor;

export function WagouButton({
  children,
  className = "",
  variant = "filled",
  ...props
}: WagouButtonProps) {
  const classes = [
    "wagou-button",
    variant === "outline" ? "wagou-button-outline" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const anchorProps = props;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonProps}
      className={classes}
      type={buttonProps.type ?? "button"}
    >
      {children}
    </button>
  );
}
