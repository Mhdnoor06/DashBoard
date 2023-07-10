import { useEffect, useState } from 'react';
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from '../../lib/constants/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiMenuAlt3 } from 'react-icons/hi';
import { HiOutlineLogout } from 'react-icons/hi';
import { signOut } from 'firebase/auth';
import { auth } from '../../fire';

const linkClass =
  'flex items-center gap-4 font-light ml-2  hover:no-underline rounded-sm text-base';
const SideBar = ({ isMobile, user, setAuthState, setUser }) => {
  const [open, setOpen] = useState(false);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState('login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`flex ${isMobile ? 'fixed z-10' : ''}`}>
      <HiMenuAlt3
        style={{ fontSize: '25px' }}
        className={`${!isMobile ? 'hidden' : ''}`}
        onClick={() => setOpen(!open)}
      />
      <div
        className={` ${
          isMobile && !open ? 'translate-x-[-17rem]' : 'w-72'
        } bg-black  p-5  pt-8 relative rounded-3xl duration-300 z-10`}
      >
        <div className="flex  flex-col" style={{ height: '88vh' }}>
          <div className="flex flex-none gap-x-4 items-center">
            <h1 className={`text-white  text-4xl font-bold duration-200 ml-2`}>
              Board.
            </h1>
          </div>

          <div className={`flex-1 basis-3 py-5 flex flex-col gap-0.5 `}>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SideBarLink key={item.key} item={item} open={open} />
            ))}
          </div>
          <div className="flex flex-col gap-0.5 pb-10 duration-200 ">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
              <SideBarLink key={item.key} item={item} open={open} />
            ))}
            <div
              className={classNames(
                linkClass,
                'cursor-pointer text-red-500 mt-5',
              )}
              onClick={signOutHandler}
            >
              <span className="text-xl ">
                <HiOutlineLogout />
              </span>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function SideBarLink({ item, open }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? ' font-semibold  text-white'
          : 'text-neutral-300 ',
        linkClass,
      )}
    >
      <ul className="pt-6">
        <li
          className={`flex  rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
               `}
        >
          <img src={item.icon} alt="" className="w-6" />
          <span className={` origin-left duration-200 text-lg`}>
            {item.label}
          </span>
        </li>
      </ul>
    </Link>
  );
}
export default SideBar;
