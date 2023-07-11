import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

const PieChartComponent = ({ data }) => {
  const productLegends = (name, value) => {
    return (
      <div className='mb-2'>
        <div className='font-montserrat font-bold text-sm text-black ml-3'>
          {name}
        </div>
        <div className='text-gray-400 font-normal text-xs ml-3'>{value}%</div>
      </div>
    );
  };
  return (
    <PieChart width={400} height={170}>
      <Legend
        layout='vertical'
        verticalAlign='middle'
        align='right'
        formatter={(value, entry, index) => (
          <span className='text-black font-montserrat font-bold text-sm flex'>
            {value}
          </span>
        )}
        payload={data.map((item, index) => ({
          id: item.name,
          type: 'round',
          value: productLegends(item.name, item.value),
          color: COLORS[index % COLORS.length],
        }))}
      />

      <Pie
        data={data}
        cx={80}
        cy={80}
        labelLine={false}
        outerRadius={80}
        fill='#8884d8'
        dataKey='value'
        legendType='vertical'
      >
        {data?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
