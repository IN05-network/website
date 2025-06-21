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

          <div className="w-full px-8 pb-8 text-center">
            <h2>{t('flea-market.menu')}</h2>
            <br />
            <div className="w-full">
              {Object.entries(
                (
                  t(
                    'flea-market.items.250621',
                    {},
                    { returnObjects: true },
                  ) as {
                    name: string;
                    price: string;
                    category: string;
                    sold_out?: boolean;
                  }[]
                ).reduce(
                  (acc, item) => {
                    if (!acc[item.category]) {
                      acc[item.category] = [];
                    }
                    acc[item.category].push(item);
                    return acc;
                  },
                  {} as Record<
                    string,
                    {
                      name: string;
                      price: string;
                      category: string;
                      sold_out?: boolean;
                    }[]
                  >,
                ),
              ).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h3 className="mb-2">{category}</h3>
                  <ul className="text-center">
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className="mb-2 laptop:space-x-0 space-x-4 laptop:text-lg text-base"
                      >
                        <span className="laptop:inline-block laptop:w-1/2 laptop:pr-4 laptop:text-right">
                          {item.sold_out ? (
                            <s>(SOLD OUT) {item.name}</s>
                          ) : (
                            item.name
                          )}
                        </span>
                        <span className="laptop:inline-block laptop:w-1/2 laptop:pl-4 laptop:text-left">
                          {item.sold_out ? (
                            <s>(SOLD OUT) {item.price}</s>
                          ) : (
                            `$${item.price}`
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p>{t('flea-market.price_note')}</p>

            <br />
            <Image
              src="/images/in05_safe.png"
              alt="Payment address"
              className="mx-auto p-4"
              width={200}
              height={200}
            />
            <p>
              {t('flea-market.payment_to')}{' '}
              <code className="laptop:text-lg tablet:text-base text-xs">
                0x7019fb4070Ad73ceC2069151Aa4B82b8d578d0E8
              </code>
              <br />
              <span className="laptop:text-base tablet:text-sm text-xs">
                (DAI/USDC/T on ETH/Base/Arbitrum)
              </span>
            </p>
            <br />
            <p>{t('flea-market.sticker_memo')}</p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default FleaMarketPage;
