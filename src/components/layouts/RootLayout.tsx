import { useRouteRedirect } from '@/hooks/useRouteRedirect';
// import { Inter as FontSans } from 'next/font/google';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';

// const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

const RootLayout = (props: { children: ReactNode }) => {
  const [isHover, setIsHover] = useState(false);
  const { redirect } = useRouteRedirect();

  return (
    <body className="min-h-screen text-left font-mono antialiased">
      <div className="fixed inset-0 h-full w-full opacity-50">
        <Image src="/images/logomark.svg" alt="IN05" layout="fill" />
      </div>

      {/* Header */}
      <div className="relative flex justify-between p-6">
        {/* Home logo */}
        <div
          className="inline-block"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <button type="button" onClick={() => redirect('/')}>
            <div className="flex cursor-pointer items-baseline">
              <Image src="/images/logo.svg" alt="Logo" width={72} height={72} />
            </div>
          </button>
        </div>
        {/* Language */}
        <div className="flex items-center space-x-2">
          <LanguageSwitcher locale="en" />
          <span>/</span>
          <LanguageSwitcher locale="ja" />
        </div>
      </div>
      <div className="relative">{props.children}</div>
    </body>
  );
};

export default RootLayout;
