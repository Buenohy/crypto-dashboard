import SideBar from '@/components/SideBar/SideBar';
import Header from '@/components/Header/Header';
import PortfolioCard from '@/components/PortfolioCard/PortfolioCard';
import Card from '@/components/Card/Card';

export default function WalletPage() {
  return (
    <main className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="flex flex-col flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 gap-8">
          <PortfolioCard />
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
              percentage={-0.25}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
