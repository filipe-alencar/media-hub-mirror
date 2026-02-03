import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-20 w-20 items-center justify-center rounded-full bg-icon-button transition-all duration-300 hover:bg-icon-button-hover hover:scale-105"
    >
      <span className="text-foreground">{icon}</span>
    </a>
  );
};
