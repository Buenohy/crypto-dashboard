import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import LiveMarket from '@/components/LiveMarket/LiveMarket';
import PortfolioCard from '@/components/PortfolioCard/PortfolioCard';
import SideBar from '@/components/SideBar/SideBar';
import CreditCardTest from '@/components/CreditCardTest/CreditCardTest';
import { CryptoChartShadCnUi } from '@/components/CryptoChartShadcnUi/CryptoChartShadcnUi';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-bg-light-mode dark:bg-bg-gray">
      <SideBar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7">
          <div className="mx-auto w-full">
            <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:mb-8 md:gap-8 lg:gap-8">
              <Card
                title="Bitcoin"
                subtitle="BTC"
                value="52,291"
                percentage={0.25}
              />
              <Card
                title="Litecoin"
                subtitle="LTC"
                value="8,291"
                percentage={0.25}
              />
              <Card
                title="Ethereum"
                subtitle="ETH"
                value="28,291"
                percentage={0.25}
              />
              <Card
                title="Solana"
                subtitle="SOL"
                value="14,291"
                percentage={0.25}
              />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row md:gap-8">
              <div className="flex w-full flex-col gap-6 lg:w-5/12 xl:w-4/12 md:gap-8">
                <CreditCardTest
                  title="Credit Card"
                  numberCard="3475 7381 3759 4512"
                  numberCVV="123"
                  dateExpiration="12/25"
                  nameCard="Gabriel Bueno"
                  companyCard="VISA"
                />
                <PortfolioCard />
              </div>
              <div className="flex w-full flex-col gap-6 lg:w-7/12 xl:w-8/12 md:gap-8">
                <CryptoChartShadCnUi />
                <LiveMarket
                  cryptoName="Bitcoin"
                  cryptoChange="12.00"
                  cryptoMarketCap="3.560"
                  cryptoVolume="65.20"
                  cryptoPrice="48.032,22"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
