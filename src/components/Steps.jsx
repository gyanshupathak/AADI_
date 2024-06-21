export const StartSteps = ({ number, text }) => (
  <div className={`flex  justify-start items-center flex-row`}>
    <div className={`flex font-bold justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-n-8`}>
      {number}
    </div>
    <div className="flex-1 text-left ml-6  font-normal text-[18px] text-[#ffffff] leading-[32.4px]">
      {text}
    </div>
  </div>
);

  export  const ProfileSteps = ({ number, text }) => (
    <div className={`flex  justify-start items-center flex-row`}>
    <div className={`flex font-bold text-n-1 justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-n-8`}>
      {number}
    </div>
    <div className="flex-1 text-left ml-6  font-normal text-[18px] text-[#ffffff] leading-[32.4px]">
      {text}
    </div>
  </div>
  );
  
  

