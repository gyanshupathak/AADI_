const PlayGames = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1  items-start flex flex-col sm:max-w-[250px] min-w-[210px] m-2">
    <div
      className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-n-8`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2  object-contain" />
    </div>
    <div className="mt-[26px] items-start font-bold text-[26px] leading-[30.24px] text-white">
       {title}
    </div>
    <div className="flex-1 text-white opacity-80 text-left mt-[16px] font-normal text-[16px]  ">
      {subtitle}
    </div>
  </div>
);

export default PlayGames;