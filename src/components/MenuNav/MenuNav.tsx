'use client';

import { useState, useRef, useEffect } from 'react';
import { IconType } from 'react-icons';

import { IoMdMenu } from 'react-icons/io';
import { MdWindow } from 'react-icons/md';
import { TfiPieChart } from 'react-icons/tfi';
import { HiOutlineWallet } from 'react-icons/hi2';
import { IoWalletOutline } from 'react-icons/io5';
import { BiNews } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbLogout2 } from 'react-icons/tb';

interface MenuNavIcons {
  id: number;
  iconComponent: IconType;
  title: string;
  alt: string;
}

const MenuNavItems: MenuNavIcons[] = [
  { id: 1, iconComponent: MdWindow, title: 'Overview', alt: 'Icon Overview' },
  { id: 2, iconComponent: TfiPieChart, title: 'Chart', alt: 'Icon Chart' },
  {
    id: 3,
    iconComponent: HiOutlineWallet,
    title: 'Transactions',
    alt: 'Icon Transactions',
  },
  {
    id: 4,
    iconComponent: IoWalletOutline,
    title: 'Wallet',
    alt: 'Icon Wallet',
  },
  { id: 5, iconComponent: BiNews, title: 'News', alt: 'Icon News' },
  { id: 6, iconComponent: MdOutlineEmail, title: 'Mail Box', alt: 'Mail Box' },
  {
    id: 7,
    iconComponent: IoSettingsOutline,
    title: 'Setting',
    alt: 'Icon Setting',
  },
  { id: 8, iconComponent: TbLogout2, title: 'Logout', alt: 'Icon Logout' },
];

export default function MenuNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="group p-2.5 lg:hidden bg-white dark:bg-bg-blue hover:bg-primary focus:bg-primary focus:text-white active:text-white flex justify-center items-center rounded-xl shadow-xl cursor-pointer transition-colors"
        onClick={toggleMenu}
      >
        <IoMdMenu className="text-black dark:text-text-gray group-hover:text-white group-focus:text-white group-active:text-white w-6 h-6" />
      </button>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 bg-white dark:bg-bg-blue rounded-xl shadow-xl mt-4 z-50">
          <ul className="flex flex-col gap-2 p-2">
            {MenuNavItems.map((item) => {
              const IconComponent = item.iconComponent;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 px-2 py-3 text-black hover:text-white focus:text-white dark:text-gray-300 dark:hover:text-white hover:bg-primary hover:rounded-xl hover:shadow-xl focus:bg-primary focus:rounded-xl focus:shadow-xl cursor-pointer transition-colors duration-150"
                  tabIndex={0}
                >
                  <IconComponent
                    size={22}
                    className="flex-shrink-0 2xl:w-[40px] 2xl:h-[40px]"
                  />
                  <span className="font-normal text-base 2xl:text-3xl">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
