export const StartSteps = ({ number, text }) => (
  <div className={`flex  justify-start items-center flex-row`}>
    <div className={`flex font-bold justify-center text-n-8 items-center w-[60px] h-[60px] rounded-[12px] bg-n-1`}>
      {number}
    </div>
    <div className="flex-1 text-left ml-6  font-normal text-[18px] text-[#ffffff] leading-[32.4px]">
      {text}
    </div>
  </div>
);

  export  const ProfileSteps = ({ number, text }) => (
    <div className={`flex  justify-start items-center flex-row`}>
    <div className={`flex font-bold text-n-8 justify-center items-center w-[60px] h-[60px] rounded-[12px] bg-n-1`}>
      {number}
    </div>
    <div className="flex-1 text-left ml-6  font-normal text-[18px] text-[#ffffff] leading-[32.4px]">
      {text}
    </div>
  </div>
  );
  
  

