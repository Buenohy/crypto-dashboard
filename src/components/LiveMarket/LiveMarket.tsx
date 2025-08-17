import { FaBtc } from 'react-icons/fa6';

interface LiveMarketProps {
  cryptoName: string;
  cryptoChange: string;
  cryptoMarketCap: string;
  cryptoVolume: string;
  cryptoPrice: string;
}

interface LiveMarketTest {
  id: number;
  title: string;
  alt: string;
}

const LiveMarketHeader: LiveMarketTest[] = [
  { id: 1, title: 'Coin', alt: 'Coin Title' },
  { id: 2, title: 'Change', alt: 'Change Title' },
  { id: 3, title: 'Market Cap', alt: 'Market Cap Title' },
  { id: 4, title: '24h Volume', alt: '24h Volume Title' },
  { id: 5, title: 'Price', alt: 'Price Title' },
];

export default function LiveMarket({
  cryptoName,
  cryptoChange,
  cryptoMarketCap,
  cryptoVolume,
  cryptoPrice,
}: LiveMarketProps) {
  return (
    <div className="bg-white dark:bg-bg-blue p-5 md:p-6 rounded-xl shadow-xl w-full 2xl:h-[287px]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-black dark:text-white text-xl md:text-2xl 2xl:text-4xl font-semibold">
          Live Market
        </h2>
        <button className="text-sm 2xl:text-3xl text-black dark:text-text-gray px-3 py-1.5 rounded-xl shadow-xl border border-text-gray cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition-colors active:bg-primary active:border-primary active:text-white focus:bg-primary focus:border-primary focus:text-white">
          View More
        </button>
      </div>
      <div className="grid grid-cols-[minmax(0,2fr)_repeat(4,minmax(0,1fr))_minmax(0,auto)] gap-x-4 gap-y-4 2xl:gap-x-8 2xl:gap-y-8 justify-center">
        {LiveMarketHeader.map((item) => {
          return (
            <span
              key={item.id}
              className="text-xs text-gray-700 dark:text-slate-400 font-medium 2xl:text-3xl"
              aria-label={item.alt}
            >
              {item.title}
            </span>
          );
        })}
        <div></div>

        <div className="flex items-center gap-2">
          <FaBtc className="w-7 h-7 2xl:w-10 2xl:h-10 text-yellow-300" />
          <span className="text-black dark:text-white font-medium text-xs sm:text-sm 2xl:text-4xl">
            {cryptoName}
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-green-500 font-medium text-xs lg:text-[10px] xl:text-sm sm:text-sm 2xl:text-4xl">
            +{cryptoChange}%
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-black dark:text-white text-xs lg:text-[10px] xl:text-sm sm:text-sm 2xl:text-4xl">
            ${cryptoMarketCap}M
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-black dark:text-white text-xs lg:text-[10px] xl:text-sm sm:text-sm 2xl:text-4xl">
            ${cryptoVolume}M
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-black dark:text-white text-xs lg:text-[10px] xl:text-sm sm:text-sm 2xl:text-4xl">
            ${cryptoPrice}
          </span>
        </div>
        <button className="hidden sm:block text-gray-700 dark:text-slate-400 hover:text-slate-200 p-1 rounded-full hover:bg-slate-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 2xl:w-10 2xl:h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
