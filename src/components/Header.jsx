import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import  logo  from "../assets/svg/logo.svg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {   
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={logo} width={120} height={40} alt="logo" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex  lg:bg-transparent lg:ml-auto`}
        >
          <div className="relative font-sans  z-2 flex flex-col  justify-center  lg:flex-row ">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-sans font-bold text-3xl  text-n-1 sm:text-black transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-12 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
            <Button className="hidden font-sans text-sm lg:flex ml-12" href="#login">
              Download
            </Button>
          </div>
          

          <HamburgerMenu />
        </nav>

        
        

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
