import SideBar from '@/components/SideBar/SideBar';
import Chart from '@/components/Chart/Chart';
import Header from '@/components/Header/Header';
import LiveMarket from '@/components/LiveMarket/LiveMarket';

export default function ChartPage() {
  return (
    <main className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="flex flex-col flex-1 gap-8 overflow-y-auto p-4 sm:p-6 lg:p-7">
          <Chart />
          <LiveMarket
            cryptoName="Bitcoin"
            cryptoChange="12.00"
            cryptoMarketCap="3.560"
            cryptoVolume="65.20"
            cryptoPrice="48.032,22"
          />
        </div>
      </div>
    </main>
  );
}
