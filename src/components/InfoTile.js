const InfoTile = ({ tileColor, tileIcon, tileName, value }) => {
  console.table(`${tileColor}, ${tileIcon}, ${tileName}, ${value}`);
  return (
    <div className={`w-56 bg-[#DDEFE0] rounded-3xl py-5 px-6 flex flex-col`}>
      <div className='flex self-end'>{tileIcon}</div>
      <p className='font-lato text-sm font-normal'>{tileName}</p>
      <p className='text-2xl font-bold font-montserrat'>{value}</p>
    </div>
  );
};

export default InfoTile;
