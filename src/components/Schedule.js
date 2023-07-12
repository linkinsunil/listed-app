import React from 'react';

const colors = ['#9BDD7C', '#6972C3'];

const Schedule = ({ todo, time, venue, index }) => {
  console.log('Schedule: ', colors[index]);
  return (
    <div className={`border-l-4 border-[${colors[index]}] pl-3 mb-3`}>
      <p className='font-montserrat text-sm font-bold text-gray-500'>{todo}</p>
      <p className='font-lato text-xs font-normal text-gray-400'>{time}</p>
      <p className='font-lato text-xs font-normal text-gray-400 leading-5'>
        at {venue}
      </p>
    </div>
  );
};

export default Schedule;
