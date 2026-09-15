'use client';

import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import { trackEvent } from '@/shared/utils/gtm';

interface TrackedLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: ReactNode;
  gtmEvent: { event: string } & Record<string, unknown>;
}

export default function TrackedLink({
  children,
  gtmEvent,
  onClick,
  ...linkProps
}: TrackedLinkProps) {
  return (
    <Link
      {...linkProps}
      onClick={(event) => {
        trackEvent(gtmEvent);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
