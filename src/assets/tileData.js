import TotalRevenuesIcon from './TotalRevenuesIcon';
import TotalTransactionsIcon from './TotalTransactionsIcon';
import TotalLikesIcon from './TotalLikesIcon';
import TotalUsersIcon from './TotalUsersIcon';

export const tileData = [
  {
    tileColor: '#ddefe0',
    tileIcon: <TotalRevenuesIcon />,
    tileName: 'Total Revenues',
    value: '$2,129,430',
  },
  {
    tileColor: '#f4ecdd',
    tileIcon: <TotalTransactionsIcon />,
    tileName: 'Total Transactions',
    value: '1,520',
  },
  {
    tileColor: '#efdada',
    tileIcon: <TotalLikesIcon />,
    tileName: 'Total Likes',
    value: '9,721',
  },
  {
    tileColor: '#dee0ef',
    tileIcon: <TotalUsersIcon />,
    tileName: 'Total Users',
    value: '892',
  },
];
