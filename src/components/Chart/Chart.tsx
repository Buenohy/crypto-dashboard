'use client';

import { AiFillDollarCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { CryptoChartShadCnUi } from '../CryptoChartShadcnUi/CryptoChartShadcnUi';

export default function Chart() {
  return (
    <div className="w-full h-[441px] 2xl:h-[566px] bg-white dark:bg-bg-blue rounded-xl shadow-xl p-7 flex flex-col">
      <div className="flex justify-between mb-6">
        <span className="text-black dark:text-white font-semibold text-xl 2xl:text-4xl">
          Chart
        </span>
        <div className="flex justify-center items-center gap-2 p-1 border rounded-lg border-text-gray">
          <AiFillDollarCircle className="text-yellow-400 w-4 h-6 2xl:w-10 2xl:h-12" />
          <span className="text-black dark:text-white font-semibold text-xs 2xl:text-3xl">
            USD
          </span>
          <MdKeyboardArrowDown className="w-4 h-4 text-text-gray 2xl:w-8 2xl:h-8" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <span className="text-gray-700 dark:text-text-gray font-normal text-base 2xl:text-3xl">
            Bitcoin/BTC
          </span>
          <MdKeyboardArrowDown className="w-4 h-4 text-text-gray 2xl:w-8 2xl:h-8" />
        </div>
        <span className="text-black dark:text-white font-semibold text-lg 2xl:text-4xl">
          $35,352.02
        </span>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full 2xl:flex-grow">
          <CryptoChartShadCnUi />
        </div>
      </div>
    </div>
  );
}
