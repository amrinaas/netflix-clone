import NavLink from './nav-link';
import LogoNav from './logo-nav';

import {
  IoIosSearch,
  IoMdNotificationsOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from 'react-icons/io';
import { MdFace3 } from 'react-icons/md';

export default function MainHeader() {
  return (
    <header className="py-5 lg:px-12 md:px-8 px-4 fixed bg-black top-0 z-50 w-full transition-transform">
      <div className="flex">
        <LogoNav />
        <nav className="flex md:justify-between justify-end md:w-11/12 w-3/4">
          <ul className="hidden md:flex items-center">
            <NavLink href="/browse">
              <li>Home</li>
            </NavLink>
            <NavLink href="/tv-shows">
              <li>TV Shows</li>
            </NavLink>
            <NavLink href="/movies">
              <li>Movies</li>
            </NavLink>
            <NavLink href="/new-popular">
              <li>New & Popular</li>
            </NavLink>
            <NavLink href="/my-list">
              <li>My List</li>
            </NavLink>
            <NavLink href="/ny-languages">
              <li>Browse by Languages</li>
            </NavLink>
          </ul>

          <ul className="hidden md:flex items-center justify-between">
            <li>
              <IoIosSearch />
            </li>
            <NavLink href="/kids">
              <li>Kids</li>
            </NavLink>
            <li>
              <IoMdNotificationsOutline />
            </li>
            <li className="flex items-center ml-3">
              <div className="border-2 border-white p-2 rounded mr-1">
                <MdFace3 />
              </div>
              <div className="">
                <IoMdArrowDropdown />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
