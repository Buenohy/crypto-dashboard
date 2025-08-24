'use client';

import { FaBtc, FaEthereum } from 'react-icons/fa6';
import { SiLitecoin, SiSolana } from 'react-icons/si';
import { RiArrowUpSFill } from 'react-icons/ri';
import ChartLineLinear from '../CardChartShadcnUi/CardChartShadcnUi';

interface CardProps {
  title: string;
  subtitle: string;
  value: string;
  percentage: number;
  image: string;
}

const getCryptoIcon = (subtitle: string) => {
  switch (subtitle.toUpperCase()) {
    case 'BTC':
      return (
        <FaBtc className="text-yellow-300 p-2 bg-text-gray dark:bg-bg-gray w-11 h-11 2xl:w-16 2xl:h-16 rounded-lg shadow-lg" />
      );
    case 'ETH':
      return (
        <FaEthereum className="text-blue-400 p-2 bg-text-gray dark:bg-bg-gray w-11 h-11 2xl:w-16 2xl:h-16 rounded-lg shadow-lg" />
      );
    case 'LTC':
      return (
        <SiLitecoin className="text-gray-400 p-2 bg-text-gray dark:bg-bg-gray w-11 h-11 2xl:w-16 2xl:h-16 rounded-lg shadow-lg" />
      );
    case 'SOL':
      return (
        <SiSolana className="text-purple-400 p-2 bg-text-gray dark:bg-bg-gray w-11 h-11 2xl:w-16 2xl:h-16 rounded-lg shadow-lg" />
      );
    default:
      return (
        <FaBtc className="text-yellow-300 p-2 bg-text-gray dark:bg-bg-gray w-11 h-11 2xl:w-16 2xl:h-16 rounded-lg shadow-lg" />
      );
  }
};

export default function Card({
  title,
  subtitle,
  value,
  percentage,
  image: _image,
}: CardProps) {
  return (
    <div className="bg-white dark:bg-bg-blue rounded-xl shadow-xl px-4 py-6 w-full h-[178px] 2xl:h-[278px] ">
      <div className="flex gap-4 items-center justify-between mb-5 2xl:mb-10">
        <div className="flex gap-5">
          {getCryptoIcon(subtitle)}
          <div className="flex flex-col">
            <span className="text-black dark:text-white text-base 2xl:text-3xl font-semibold">
              {title}
            </span>
            <span className="text-gray-700 dark:text-text-gray font-normal text-xs 2xl:text-xl">
              {subtitle}
            </span>
          </div>
        </div>
        <div>
          <RiArrowUpSFill className="text-green-500 2xl:w-9 2xl:h-9" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-black dark:text-white font-semibold text-xl lg:text-sm xl:text-xl 2xl:text-4xl mb-3">
            ${value}
          </span>
          <span className="text-green-500 font-semibold text-xs 2xl:text-xl">
            +{percentage}%
          </span>
        </div>
        <div className="w-[108px] h-[44px] 2xl:w-[138px] 2xl:h-[84px]">
          <ChartLineLinear />
        </div>
      </div>
    </div>
  );
}
