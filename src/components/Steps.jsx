export const StartSteps = ({ number, text }) => (
  <div className={`flex ml-[6rem] lg:ml-[-0.1rem] lg:justify-start lg:items-center flex-row`}>
    <div className={`flex font-bold justify-center text-n-8 items-center w-[30px] h-[30px]  rounded-[8px] lg:w-[60px] lg:h-[60px] lg:rounded-[12px] bg-n-1`}>
      {number}
    </div>
    <div className="flex-1 text-left ml-6  font-normal text-[18px] text-[#ffffff] leading-[32.4px]">
      {text}
    </div>
  </div>
);

  export  const ProfileSteps = ({ number, text }) => (
    <div className={`flex ml-[4rem] lg:ml-[2rem] justify-start items-center flex-row `}>
    <div className={`flex font-bold text-n-8 justify-center items-center w-[30px] h-[30px]  rounded-[8px] lg:w-[60px] lg:h-[60px] lg:rounded-[12px] bg-n-1`}>
      {number}
    </div>
    <div className="flex-1 text-left ml-6  font-normal text-[18px] text-[#ffffff] lg:leading-[32.4px]">
      {text}
    </div>
  </div>
  );
  
  

