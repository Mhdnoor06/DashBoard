import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';

function Layout() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  return (
    <div className="flex flex-row bg-neutral-100 p-6 w-screen h-screen overflow-hidden ">
      <SideBar isMobile={isMobile} />
      <div
        className={`flex-1 overflow-auto 2xl:px-20 lg:px-10 md:px-5 sm:px-2 `}
      >
        <Header
          isMobile={isMobile}
          setIsMobile={setIsMobile}
          isTablet={isTablet}
          setIsTablet={setIsTablet}
        />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Layout;
