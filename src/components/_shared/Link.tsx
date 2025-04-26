import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  skipLocaleHandling?: boolean;
  locale?: string;
  href: string;
  target?: string;
}

export const Link = ({
  children,
  skipLocaleHandling,
  target,
  ...rest
}: LinkProps) => {
  const router = useRouter();
  const locale = rest.locale || (router.query.locale as string) || '';

  let href = rest.href || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale);
  }

  return (
    <NextLink href={href} target={target}>
      {children}
    </NextLink>
  );
};

export const LinkWithIcon = (props: { url: string; text: string }) => {
  const style = 'bg-[image:var(--favicon-url)] bg-left bg-no-repeat pl-[20px]';
  let fetchedUrl = '';
  if (props.url.startsWith('/')) {
    fetchedUrl = 'https://www.in05.org/favicon.ico';
  } else if (props.url.startsWith('mailto:')) {
    fetchedUrl =
      'https://www.google.com/s2/favicons?domain=https://erine.email';
  } else if (props.url.startsWith('http')) {
    fetchedUrl = `https://www.google.com/s2/favicons?domain=https://${
      new URL(props.url).hostname
    }`;
  }
  return (
    <NextLink
      href={props.url}
      className={style}
      style={
        {
          '--favicon-url': `url(${fetchedUrl})`,
        } as React.CSSProperties
      }
    >
      {props.text}
    </NextLink>
  );
};
