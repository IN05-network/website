import Image from 'next/image';
import TopImage from '/public/images/top.jpg';

const RootPage = () => {
  const LinkWithIcon = (props: { url: string; text: string }) => {
    let bgUrl = '';
    if (props.url.startsWith('mailto')) {
      bgUrl = 'bg-[url("/email.svg")]';
    } else if (props.url.startsWith('http')) {
      bgUrl = `bg-[url("https://www.google.com/s2/favicons?domain=${
        new URL(props.url).hostname
      }")]`;
    }

    console.log(bgUrl);

    return (
      <>
        <a
          href={props.url}
          className={`${bgUrl} bg-favicon bg-left bg-no-repeat pl-[19px]`}
        >
          {props.text}
        </a>
      </>
    );
  };

  return (
    <div className="text-center">
      <h1 id="name" className="text-6xl">
        IN05
      </h1>

      <div id="section" className="flex flex-col laptop:flex-row">
        <div className="flex w-full justify-center p-4">
          <Image src={TopImage} alt="IN05" height={960} />
        </div>

        <div className="w-full p-4 text-center laptop:text-left">
          <ul>
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
