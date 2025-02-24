import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LogoMark from '/public/images/logomark.svg';
import LogoType_Blue from '/public/images/logotype_blue.png';
import LogoType_White from '/public/images/logotype_white.png';

const RootPage = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="text-left font-mono">
      {/* <div className="inline-block p-6">
        <Link
          className="no-underline hover:text-neutral-100"
          href="/"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Image
            src={isHover ? LogoType_Blue : LogoType_White}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div> */}

      <div id="section" className="">
        <div className="fixed inset-0 z-[-1] h-full w-full opacity-50">
          <Image
            src="https://www.in05.org/images/logomark.svg"
            alt="IN05"
            layout="fill"
          />
        </div>

        <div className="w-full px-8 py-4 text-center">
          <h2>売品</h2>
          <br />
          <div className="grid grid-cols-2 gap-32">
            <div>
              <ul className="text-right">
                <li>（読んで面白かった,自慢の）古本</li>
                <li>(PJが既に消えた/ピボった, OGを名乗れる)Tシャツ</li>
                <li>（ケイスケホンダにもらった,謎の）香水</li>
                {/* <li>オリジナルステッカー</li> */}
              </ul>
            </div>
            <div>
              <ul className="text-left">
                <li>$2</li>
                <li>$1</li>
                <li>$10</li>
                {/* <li>$2 / 3 for $5</li> */}
              </ul>
            </div>
          </div>
          <br />
          <p>支払いは irohas.eth 迄</p>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
