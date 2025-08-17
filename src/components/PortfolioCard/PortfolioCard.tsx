import ItemsPortfolio from '../ItemsPortfolio/ItemsPortfolio';

export default function PortfolioCard() {
  return (
    <div className="flex flex-col gap-6 p-7 bg-white dark:bg-bg-blue w-full h-[434px] rounded-xl shadow-xl 2xl:h-[559px]">
      <h2 className="container text-black dark:text-white font-semibold text-xl 2xl:text-4xl">
        My Portfolio
      </h2>
      <ItemsPortfolio
        cryptoName="Bitcoin"
        cryptoCurrentPrice="3,245.03"
        cryptoPriceChange="6.00"
        cryptoBalance="0.12543"
        cryptoAbbreviation="BTC"
      />
      <ItemsPortfolio
        cryptoName="Bitcoin"
        cryptoCurrentPrice="3,245.03"
        cryptoPriceChange="6.00"
        cryptoBalance="0.12543"
        cryptoAbbreviation="BTC"
      />
      <ItemsPortfolio
        cryptoName="Bitcoin"
        cryptoCurrentPrice="3,245.03"
        cryptoPriceChange="6.00"
        cryptoBalance="0.12543"
        cryptoAbbreviation="BTC"
      />
      <ItemsPortfolio
        cryptoName="Bitcoin"
        cryptoCurrentPrice="3,245.03"
        cryptoPriceChange="6.00"
        cryptoBalance="0.12543"
        cryptoAbbreviation="BTC"
      />
      <ItemsPortfolio
        cryptoName="Bitcoin"
        cryptoCurrentPrice="3,245.03"
        cryptoPriceChange="6.00"
        cryptoBalance="0.12543"
        cryptoAbbreviation="BTC"
      />
    </div>
  );
}
