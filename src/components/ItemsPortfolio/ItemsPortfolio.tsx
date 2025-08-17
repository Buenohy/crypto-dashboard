import { FaBtc } from 'react-icons/fa6';

interface ItemsPortfolioProps {
  cryptoName: string;
  cryptoCurrentPrice: string;
  cryptoPriceChange: string;
  cryptoBalance: string;
  cryptoAbbreviation: string;
}

export default function ItemsPortfolio({
  cryptoName,
  cryptoCurrentPrice,
  cryptoPriceChange,
  cryptoBalance,
  cryptoAbbreviation,
}: ItemsPortfolioProps) {
  return (
    <div className="h-[44px] 2xl:h-full">
      <ul className="flex flex-col gap-6">
        <li>
          <div className="flex items-center justify-between">
            <div className="flex gap-1 justify-center items-center">
              <FaBtc className="text-yellow-300 p-2 bg-bg-light-mode dark:bg-bg-gray w-11 h-11 rounded-lg shadow-lg mr-4 2xl:w-16 2xl:h-16" />
              <div className="flex flex-col justify-center gap-1">
                <span className="text-black dark:text-white font-medium text-base 2xl:text-2xl text-left">
                  {cryptoName}
                </span>
                <span className="text-gray-700 dark:text-text-gray font-normal text-base text-left 2xl:text-2xl ">
                  ${cryptoCurrentPrice}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-orange-500 font-medium text-xs 2xl:text-lg text-right">
                -{cryptoPriceChange}%
              </span>
              <span className="text-black dark:text-white font-semibold text-base 2xl:text-2xl lg:text-sm text-right">
                {cryptoBalance}
                {cryptoAbbreviation}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
