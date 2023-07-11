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

const Dashboard = () => {
  return (
    <div className='bg-[#f5f5f5] p-10 w-screen h-screen flex App'>
      <div className='bg-black h-full w-[17.5rem] px-[3.13rem] py-[3.75rem] text-white rounded-[1.875rem] flex flex-col font-montserrat'>
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

      <div className='pt-5 pb-10 px-[3.75rem] box-border w-full'>
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
        <div className='flex gap-[2.3rem]'>
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
      </div>
    </div>
  );
};

export default Dashboard;
