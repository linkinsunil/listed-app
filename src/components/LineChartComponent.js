import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { lineChartData } from '../assets/lineChartData';

const LineChartComponent = () => {
  return (
    <LineChart
      width={800}
      height={250}
      data={lineChartData}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    >
      <CartesianGrid vertical={false} strokeDasharray={'4 0'} />
      <XAxis dataKey={'name'} />
      <YAxis />
      <Tooltip />
      <Legend layout='horizontal' verticalAlign='top' align='right' />
      <Line
        type='monotone'
        dataKey='guest'
        stroke='#E9A0A0'
        strokeWidth={2}
        legendType='circle'
      />
      <Line
        type='monotone'
        dataKey='user'
        stroke='#9BDD7C'
        strokeWidth={2}
        legendType='circle'
      />
    </LineChart>
  );
};

export default LineChartComponent;
