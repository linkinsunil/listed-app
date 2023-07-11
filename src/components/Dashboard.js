import DashboardIcon from '../assets/DashboardIcon';
import TransactionsIcon from '../assets/TransactionsIcon';
import SchedulesIcon from '../assets/SchedulesIcon';
import UsersIcon from '../assets/UsersIcon';
import SettingsIcon from '../assets/SettingsIcon';
import SearchIcon from '../assets/SearchIcon';
import NotificationsIcon from '../assets/NotificationsIcon';
import Avatar from '../assets/Avatar.png';
import InfoTile from './InfoTile';
import { tileData } from '../assets/tileData';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import { pieChartData } from '../assets/pieChartData';
import CaretIcon from '../assets/CaretIcon';
import Schedule from './Schedule';
import { scheduleData } from '../assets/scheduleData';

const colors = ['#98D89E', '#F6DC7D', '#EE8484'];

const Dashboard = () => {
  return (
    <div className='bg-[#f5f5f5] p-10 w-screen h-full flex App'>
      <div className='bg-black h-screen w-[17.5rem] px-[3.13rem] py-[3.75rem] text-white rounded-[1.875rem] flex flex-col font-montserrat'>
        <p className='mb-[3.75rem] font-bold text-4xl'>Board.</p>
        <div className='flex-1'>
          <div className='text-lg font-bold flex items-center gap-5 mb-10'>
            <DashboardIcon />
            Dashboard
          </div>
          <div className='text-lg font-bold flex items-center gap-5 mb-10'>
            <TransactionsIcon />
            Transactions
          </div>
          <div className='text-lg font-bold flex items-center gap-5 mb-10'>
            <SchedulesIcon />
            Schedules
          </div>
          <div className='text-lg font-bold flex items-center gap-5 mb-10'>
            <UsersIcon />
            Users
          </div>
          <div className='text-lg font-bold flex items-center gap-5 mb-10'>
            <SettingsIcon />
            Settings
          </div>
        </div>
        <div>
          <p className='mb-5'>Help</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className='pt-5 pb-10 px-[3.75rem] box-border max-w-[62.5rem]'>
        <div className='flex justify-between items-center w-full mb-10'>
          <p className='font-montserrat text-2xl font-bold'>Dashboard</p>
          <div className='flex items-center gap-[1.88rem]'>
            <div className='flex items-center bg-white py-[0.37rem] px-4 w-44 rounded-xl'>
              <input
                type='search'
                placeholder='Search...'
                className='w-full outline-none'
              />
              <SearchIcon />
            </div>
            <NotificationsIcon />
            <img src={Avatar} alt='User Avatar' className='rounded-full' />
          </div>
        </div>
        <div className='flex gap-[2.3rem] mb-10'>
          {tileData.map((tile, index) => (
            <InfoTile
              tileColor={tile.tileColor}
              tileIcon={tile.tileIcon}
              tileName={tile.tileName}
              value={tile.value}
              key={index}
            />
          ))}
        </div>
        <div className='bg-white py-[1.88rem] px-5 mb-10 rounded-xl'>
          <LineChartComponent />
        </div>
        <div className='flex gap-10'>
          <div className='py-[1.88rem] px-10 bg-white rounded-xl flex flex-col gap-5'>
            <div className='flex justify-between'>
              <p className='font-montserrat text-lg font-bold p-0'>
                Top products
              </p>
              <select className='self-end flex mb-6 font-montserrat font-normal text-xs text-gray-400'>
                <option value='may'>May - June 2021</option>

                <option value='june'>June - July 2021</option>

                <option value='july'>July - August 2021</option>
              </select>
            </div>
            <div>
              <PieChartComponent data={pieChartData} />
            </div>
          </div>

          <div className='py-[1.88rem] px-10 bg-white rounded-xl w-[30rem]'>
            <div className='flex justify-between mb-6'>
              <div className='font-montserrat text-lg font-bold'>
                Top products
              </div>
              <div className='flex items-center gap-4 font-montserrat font-normal text-xs text-gray-400'>
                See all <CaretIcon />
              </div>
            </div>

            {scheduleData.map((schedule, index) => (
              <Schedule
                todo={schedule.todo}
                time={schedule.time}
                venue={schedule.venue}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
