'use client';

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // Legend, - Removido pois não está sendo usado
  // ReferenceLine, - Removido pois não está sendo usado
} from 'recharts';

interface CryptoData {
  time: string; // Ou um objeto Date/timestamp
  price: number;
  volume: number;
}

const data: CryptoData[] = [
  // Seus dados aqui, ex:
  { time: '19:00', price: 45000, volume: 100 },
  { time: '19:10', price: 43500, volume: 150 },
  { time: '19:20', price: 44000, volume: 120 },
  // ... mais dados
];

// Removido CustomFontSize pois não estava sendo usado
// Se precisar dele mais tarde, descomente e use no componente

const CryptoChart = () => {
  return (
    // O div pai DEVE ter altura definida para ResponsiveContainer funcionar
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0, // Ajuste conforme necessário
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />{' '}
          {/* Cor escura para tema escuro */}
          <XAxis
            dataKey="time"
            stroke="#9CA3AF" // Cor do texto do eixo
            tick={{ fontSize: 12 }}
            // Você pode precisar de um tickFormatter para o tempo se não for string
          />
          <YAxis
            yAxisId="left" // Para o preço
            orientation="left"
            stroke="#9CA3AF"
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            domain={['dataMin - 5000', 'dataMax + 1000']} // Ajuste para dar espaço
            tick={{ fontSize: 12 }}
          />
          <YAxis
            yAxisId="right" // Para o volume (opcional, pode estar na mesma escala ou oculto)
            orientation="right"
            stroke="#9CA3AF"
            tick={{ fontSize: 10 }}
            // domain={[0, 'dataMax + 100']} // Ajuste para o volume
            // tickFormatter={(value) => `${value / 1000}k`} // Exemplo de formatação
            hide // Se não quiser mostrar o eixo de volume explicitamente
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.8)', // bg-gray-800 com opacidade
              borderColor: '#4B5563', // border-gray-600
              color: '#F3F4F6', // text-gray-100
            }}
            cursor={{
              stroke: '#6B7280',
              strokeWidth: 1,
              strokeDasharray: '3 3',
            }} // Cor do cursor
            // formatter={(value, name, props) => {
            //   if (name === 'price') return [`$${(value as number).toLocaleString()}`, 'Preço'];
            //   if (name === 'volume') return [(value as number).toLocaleString(), 'Volume'];
            //   return [value, name];
            // }}
          />
          {/* <Legend />  // A imagem não parece ter legenda visível */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="price"
            stroke="#3B82F6" // Azul (ex: text-blue-500)
            strokeWidth={2}
            dot={false} // Sem pontos nos dados, exceto o activeDot
            activeDot={{ r: 6, strokeWidth: 0, fill: '#3B82F6' }}
          />
          <Bar
            yAxisId="right" // Ou "left" se quiser na mesma escala e ajustar os valores de volume
            dataKey="volume"
            barSize={20} // Ajuste o tamanho da barra
            fill="rgba(59, 130, 246, 0.3)" // Azul com opacidade (ex: fill-blue-500/30)
            // fill="#4A5568" // Cinza para as barras de volume
            // Para ter as barras abaixo do eixo X como na imagem, você precisaria de uma
            // abordagem mais complexa, talvez com dados negativos ou um chart separado.
            // A imagem parece ter barras de volume mais discretas, talvez com eixo Y próprio ou normalizadas.
            // Se as barras são para indicar volume abaixo da linha zero do preço, é mais complexo.
            // Mas se são apenas barras de volume normal, o acima funciona.
          />
          {/* Exemplo de ReferenceLine para linhas pontilhadas como na imagem original (timeline) */}
          {/* Se precisar usar ReferenceLine, descomente e importe-o novamente */}
          {/* <ReferenceLine x="19:30" stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;
