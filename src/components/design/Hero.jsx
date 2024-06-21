import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import token1 from "../../assets/svg/token1.svg"
import token2 from "../../assets/svg/token2.svg"
import token3 from "../../assets/svg/token3.svg"
import token4 from "../../assets/svg/token4.svg"
import token5 from "../../assets/svg/token5.svg"
import token6 from "../../assets/svg/token6.svg"
import PlusSvg from "../../assets/svg/PlusSvg";

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute mt-32 top-[12.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings  />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.4} parallaxContainerRef={parallaxRef}>
      <div className="absolute bottom-[18rem] left-[1rem] origin-bottom rotate-[46deg]">
        <img
          src={token1}
          alt="token1"
          className={`w-32 h-32  -ml-1 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute bottom-[20rem] left-[48rem] origin-bottom rotate-[46deg]">
        <img
          src={token2}
          alt="token1"
          className={`w-32 h-32  -ml-1 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute bottom-[42rem] left-[54rem] origin-bottom rotate-[46deg]">
        <img
          src={token3}
          alt="token1"
          className={`w-32 h-32  -ml-1 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute bottom-[60rem] left-[60rem] origin-bottom rotate-[46deg]">
        <img
          src={token4}
          alt="token1"
          className={`w-32 h-32  -ml-1 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute bottom-[58rem] left-[1rem] origin-bottom rotate-[46deg]">
        <img
          src={token5}
          alt="token1"
          className={`w-32 h-32  -ml-1 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute bottom-1/2 left-1/6 origin-bottom rotate-[46deg]">
        <img
          src={token6}
          alt="token1"
          className={`w-32 h-32  -ml-1 -mt-36 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>
        

        
      </MouseParallax>
    </div>
  );
};
