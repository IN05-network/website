import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LogoMark from '/public/images/logomark.svg';
import LogoType_Blue from '/public/images/logotype_blue.png';
import LogoType_White from '/public/images/logotype_white.png';

const RootPage = () => {
  const [isHover, setIsHover] = useState(false);
  const LinkWithIcon = (props: { url: string; text: string }) => {
    const style =
      'bg-[image:var(--favicon-url)] bg-left bg-no-repeat pl-[20px] inline-block bg-contain';
    let fetchedUrl = '';
    if (props.url.startsWith('/')) {
      fetchedUrl = '/favicon.ico';
    } else if (props.url.startsWith('mailto:')) {
      fetchedUrl =
        'https://www.google.com/s2/favicons?domain=https://webmail.disroot.org';
    } else if (props.url.startsWith('http')) {
      fetchedUrl = `https://www.google.com/s2/favicons?domain=https://${
        new URL(props.url).hostname
      }`;
    }
    return (
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className={style}
        style={
          {
            '--favicon-url': `url(${fetchedUrl})`,
          } as React.CSSProperties
        }
      >
        {props.text}
      </a>
    );
  };

  return (
    <div className="text-left font-mono">
      <div className="inline-block p-6">
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
      </div>

      <div id="section" className="">
        <div className="fixed inset-0 z-[-1] h-full w-full opacity-50">
          <Image
            src="https://www.in05.org/images/logomark.svg"
            alt="IN05"
            layout="fill"
          />
        </div>

        <div className="w-full px-8 py-4">
          <p>
            IN05 is a collaborative propnect by an emergent network of hackers,
            designers, artists, and punks in Tokyo.
          </p>
          <br />
          <p>
            <Link href="https://house.in05.org">
              [NEWS] New members wanted!
            </Link>
          </p>
          <br />
          <div className="space-y-8">
            <div>
              <h3>Current Members</h3>
              <ul>
                {/* add more socials  */}
                <li>
                  <LinkWithIcon url="https://sho.hihara.cc/" text="Neila" />
                </li>
                <li>
                  <LinkWithIcon url="https://silmin.net/" text="Silmin" />
                </li>
                <li>
                  <LinkWithIcon
                    url="https://www.instagram.com/taiishiro/"
                    text="Tai"
                  />
                </li>
                <li>
                  <LinkWithIcon
                    url="https://x.com/TRNT_MST"
                    text="Torrent Shinoda"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3>Socials / Contacts</h3>
              <ul>
                {/* add more socials  */}
                <li>
                  <LinkWithIcon url="mailto:contact@in05.org" text="Email" />
                </li>
                <li>
                  <LinkWithIcon
                    url="https://github.com/in05-network"
                    text="Github"
                  />
                </li>
                <li>
                  <LinkWithIcon
                    url="https://soundcloud.com/in05-network"
                    text="Soundcloud"
                  />
                </li>
                <li>
                  <LinkWithIcon url="https://x.com/in05x" text="Twitter" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
