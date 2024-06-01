import Image from 'next/image';
import Logo from '/public/images/logo.png';
import TopImage from '/public/images/top.jpg';

const RootPage = () => {
  const LinkWithIcon = (props: { url: string; text: string }) => {
    let icon = '';
    let style = '';
    if (props.url.startsWith('mailto')) {
      icon = 'mail';
      style =
        "bg-[url('/images/email.svg')] bg-favicon bg-left bg-no-repeat pl-[21px]";
    } else if (props.url.startsWith('http')) {
      icon = 'url';
      if (new URL(props.url).hostname === 'soundcloud.com') {
        style = `bg-[url('https://www.google.com/s2/favicons?domain=soundcloud.com')] bg-favicon bg-left bg-no-repeat pl-[21px]`;
      }
    }

    return (
      <>
        <a href={props.url} className={style}>
          {props.text}
        </a>
      </>
    );
  };

  return (
    <div className="text-center">
      <h1>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </h1>

      <div id="section" className="flex flex-col laptop:flex-row">
        <div className="flex w-full justify-center p-4">
          <Image src={TopImage} alt="IN05" height={960} />
        </div>

        <div className="w-full p-4 text-center laptop:text-left">
          <ul>
            {/* needfix: add more socials  */}
            <li>
              <LinkWithIcon
                url="https://soundcloud.com/in05-network"
                text="Soundcloud"
              />
            </li>
            <li>
              <LinkWithIcon url="mailto:contact@in05.org" text="Contact us" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
