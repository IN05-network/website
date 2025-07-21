import { LinkWithIcon } from '@/components/_shared/Link';
import RootLayout from '@/components/layouts/RootLayout';
import { useI18n } from '@/hooks/useI18n';
const RootPage = () => {
  const { t } = useI18n();

  return (
    <RootLayout>
      <div
        id="section"
        className="mx-auto laptop:w-4/5 w-full p-4 laptop:text-left"
      >
        <h1 className="text-center">{t('new-recruitment.title')}</h1>
        <br />
        <div id="content">
          <p>{t('new-recruitment.description')}</p>

          <br />
          <h2>{t('new-recruitment.why')}</h2>
          <p>{t('new-recruitment.why-description')}</p>
          <h2>{t('new-recruitment.ideal-candidates')}</h2>
          <p>{t('new-recruitment.ideal-candidates-description')}</p>
          <ul>
            {(
              t(
                'new-recruitment.ideal-candidates-list',
                {},
                { returnObjects: true },
              ) as string[]
            ).map((item, _) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <br />
          <p>{t('new-recruitment.core-values')}</p>
          <ul>
            {(
              t(
                'new-recruitment.core-values-list',
                {},
                { returnObjects: true },
              ) as string[]
            ).map((item, _) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <br />
          <p>{t('new-recruitment.final-remarks')}</p>
        </div>
        <div id="bottom" className="py-8">
          <LinkWithIcon url="mailto:contact@in05.org" text="contact us" />
        </div>
      </div>
    </RootLayout>
  );
};

export default RootPage;
