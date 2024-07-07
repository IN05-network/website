import Image from 'next/image';
import Link from 'next/link';
import LogoMark from '/public/images/logomark.svg';
import LogoType_White from '/public/images/logotype_white.png';

const RootPage = () => {
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
    <div className="text-center">
      <Link href="/">
        <Image src={LogoType_White} alt="Logo" width={100} height={100} />
      </Link>

      <div id="section" className="flex flex-col laptop:flex-row">
        <div className="flex w-full px-4">
          <Image src={LogoMark} alt="IN05" height={960} />
        </div>

        <div className="w-full p-4 text-center laptop:text-left">
          <ul>
            {/* add more socials  */}
            <li>
              <LinkWithIcon
                url="https://soundcloud.com/in05-network"
                text="soundcloud"
              />
            </li>
            <li>
              <LinkWithIcon url="https://x.com/in05x" text="twitter" />
            </li>
            <li>
              <LinkWithIcon url="mailto:contact@in05.org" text="contact" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
