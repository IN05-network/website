import Image from 'next/image';
import Logo from '/public/images/logo.png';
import TopImage from '/public/images/top.svg';

const RootPage = () => {
  const LinkWithIcon = (props: { url: string; text: string }) => {
    const icon = '';
    const style = '';

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
      <Image src={Logo} alt="Logo" width={100} height={100} />

      <div id="section" className="flex flex-col laptop:flex-row">
        <div className="flex w-full px-4">
          <Image src={TopImage} alt="IN05" height={960} />
        </div>

        <div className="w-full p-4 text-center laptop:text-left">
          <ul>
            {/* needfix: add more socials  */}
            <li>
              <LinkWithIcon
                url="https://soundcloud.com/in05-network"
                text="sounds"
              />
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
