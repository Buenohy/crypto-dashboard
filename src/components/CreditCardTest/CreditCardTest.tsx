import { FcSimCardChip } from 'react-icons/fc';
import { LuNfc } from 'react-icons/lu';

interface CreditCardProps {
  title: string;
  numberCard: string;
  nameCard: string;
  numberCVV: string;
  dateExpiration: string;
  companyCard: string;
}

export default function CreditCardTest({
  title,
  numberCard,
  nameCard,
  numberCVV,
  dateExpiration,
  companyCard,
}: CreditCardProps) {
  return (
    <div className="bg-bg-credit-card rounded-xl shadow-xl p-4 w-full h-[180px] 2xl:h-[305px] flex flex-col 2xl:gap-3">
      <span className="text-white font-medium text-base 2xl:text-4xl">
        {title}
      </span>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <FcSimCardChip className="w-8 h-8 2xl:w-12 2xl:h-12" />
          <LuNfc className="w-8 h-8 text-white 2xl:w-12 2xl:h-12" />
        </div>
        <span className="text-white font-semibold text-lg 2xl:text-4xl">
          {numberCard}
        </span>
      </div>
      <span className="text-white font-light text-[10px] 2xl:text-sm">
        {numberCVV}
      </span>
      <div className="flex items-center gap-1 ml-15 mb-1">
        <div className="flex flex-col">
          <span className="text-white font-light text-[6px] 2xl:text-xs">
            VALID
          </span>
          <span className="text-white font-light text-[6px] 2xl:text-xs">
            THRU
          </span>
        </div>
        <span className="text-white font-light text-sm 2xl:text-xl">
          {dateExpiration}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white font-medium text-xs 2xl:text-2xl uppercase">
          {nameCard}
        </span>
        <span className="text-white font-bold italic text-xl 2xl:text-4xl">
          {companyCard}
        </span>
      </div>
    </div>
  );
}
