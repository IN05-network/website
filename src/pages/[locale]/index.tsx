import { LinkWithIcon } from '@/components/_shared/Link';
import RootLayout from '@/components/layouts/RootLayout';
import { useI18n } from '@/hooks/useI18n';
// import Image from 'next/image';
// import Link from 'next/link';
// import LogoMark from '/public/images/logomark.svg';
// import LogoType_Blue from '/public/images/logotype_blue.png';
// import LogoType_White from '/public/images/logotype_white.png';

const RootPage = () => {
  const { t } = useI18n();

  return (
    <RootLayout>
      <div
        id="section"
        className="mx-auto laptop:w-4/5 w-full p-4 laptop:text-left"
      >
        <div id="section" className="">
          <div className="w-full px-8 py-4">
            <p>{t('landing.intro')}</p>
            <br />
            {/* <p>
              <Link href="/house">JOIN US</Link>
            </p> */}
            <br />
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
              <div>
                <h3>Current Members</h3>
                <ul>
                  {/* add more socials  */}
                  <li>
                    <LinkWithIcon url="https://neila.in05.org/" text="Neila" />
                  </li>
                  <li>
                    <LinkWithIcon url="https://silmin.net/" text="Silmin" />
                  </li>
                  <li>
                    <LinkWithIcon url="https://taishi.ro/" text="Tai" />
                  </li>
                  <li>
                    <LinkWithIcon
                      url="https://x.com/TRNT_MST"
                      text="Torrent Shinoda"
                    />
                  </li>
                </ul>

                <h3>We're on</h3>
                <ul>
                  {/* add more socials  */}
                  <li>
                    <LinkWithIcon
                      url="https://soundcloud.com/in05-network"
                      text="Soundcloud"
                    />
                  </li>
                  <li>
                    <LinkWithIcon
                      url="https://github.com/in05-network"
                      text="Github"
                    />
                  </li>
                  <li>
                    <LinkWithIcon url="https://x.com/in05x" text="Twitter" />
                  </li>
                </ul>
                <h3>Contact</h3>
                <ul>
                  <li>
                    <LinkWithIcon url="mailto:contact@in05.org" text="Email" />
                  </li>
                  <li>
                    <LinkWithIcon
                      url="https://matrix.to/#/#in05:tchncs.de"
                      text="Matrix"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <iframe
                  title="SoundCloud"
                  height="420"
                  width=""
                  src="https://w.soundcloud.com/player/?url=https://soundcloud.com/in05-network/&visual=true&sharing=false&hide_related=true"
                  data-reactid=".0.0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default RootPage;
