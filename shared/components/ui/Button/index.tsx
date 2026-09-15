'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type GTMEvent = {
  event: string;
  [key: string]: unknown;
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';

  /**
   * Evento enviado para o Google Tag Manager
   */
  gtmEvent?: GTMEvent;
};

export default function Button({
  children,
  className = '',
  gtmEvent,
  href,
  leftIcon,
  onClick,
  rightIcon,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const baseStyles =
    'cursor-pointer inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1';

  const variants = {
    primary: 'bg-black text-white hover:bg-black/90',
    secondary: 'border border-black/15 text-black hover:border-black/40',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = () => {
    if (gtmEvent && typeof window !== 'undefined') {
      const windowWithDataLayer = window as Window & {
        dataLayer?: GTMEvent[];
      };

      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];

      windowWithDataLayer.dataLayer.push(gtmEvent);
    }

    onClick?.();
  };

  const content = (
    <>
      {leftIcon && (
        <span className="flex shrink-0 items-center">{leftIcon}</span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex shrink-0 items-center">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={styles}>
      {content}
    </button>
  );
}
