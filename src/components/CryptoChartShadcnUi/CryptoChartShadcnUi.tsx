'use client';

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { time: '19:00', price: 42000, volume: 15000 },
  { time: '19:10', price: 45000, volume: 18000 },
  { time: '19:20', price: 41000, volume: 10000 },
  { time: '19:30', price: 57000, volume: 9000 },
  { time: '19:40', price: 20000, volume: 19000 },
  { time: '19:50', price: 33000, volume: 20000 },
];

const chartConfig = {
  price: {
    label: 'Preço',
    color: 'var(--primary)',
  },
  volume: {
    label: 'Volume',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

export function CryptoChartShadCnUi() {
  return (
    <Card className="w-full h-[441px] 2xl:h-[566px] bg-white dark:bg-bg-blue rounded-xl shadow-xl p-7 flex flex-col border-0">
      <CardHeader className="px-0">
        <CardTitle className="text-black dark:text-white font-semibold text-xl 2xl:text-4xl mb-6">
          Chart
        </CardTitle>
        <CardTitle className="text-gray-700 dark:text-text-gray font-normal text-base 2xl:text-3xl">
          Bitcoin/BTC
        </CardTitle>
        <CardDescription className="text-black dark:text-white font-semibold text-lg 2xl:text-4xl">
          $35,352.02
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full max-h-[250px] px-0">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="var(--muted-foreground)" />

            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />

            <YAxis
              dataKey="price"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Intl.NumberFormat('pt-BR').format(value)
              }
            />

            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Line
              dataKey="price"
              type="linear"
              stroke="var(--color-price)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
