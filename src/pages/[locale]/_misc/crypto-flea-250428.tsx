import RootLayout from '@/components/layouts/RootLayout';
import { useI18n } from '@/hooks/useI18n';
import Image from 'next/image';

const FleaMarketPage = () => {
  const { t } = useI18n();

  return (
    <RootLayout>
      <div className="text-left font-mono">
        <div id="section" className="">
          <div className="fixed inset-0 z-[-1] h-full w-full opacity-50">
            <Image
              src="https://www.in05.org/images/logomark.svg"
              alt="IN05"
              layout="fill"
            />
          </div>

          <div className="w-full px-8 py-4 text-center">
            <h2>{t('flea-market.menu')}</h2>
            <br />
            <div className="grid grid-cols-2 gap-32">
              <div>
                <ul className="text-right">
                  {(
                    t(
                      'flea-market.items.250428',
                      {},
                      { returnObjects: true },
                    ) as { name: string; price: string }[]
                  ).map((i, _) => (
                    <li key={i.name}>{i.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="text-left">
                  {(
                    t(
                      'flea-market.items.250428',
                      {},
                      { returnObjects: true },
                    ) as { name: string; price: string }[]
                  ).map((i, _) => (
                    <li key={i.name}>{i.price}</li>
                  ))}
                </ul>
              </div>
            </div>
            <br />
            <p>
              {t('flea-market.payment_to')}{' '}
              <code>0x7019fb4070Ad73ceC2069151Aa4B82b8d578d0E8</code>
            </p>
            <p>USDC or ETH on base</p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default FleaMarketPage;
