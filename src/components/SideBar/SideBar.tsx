'use Client';

import Image from 'next/image';
import { IconType } from 'react-icons';

import Logo from '../../../public/images/logo.svg';
import { MdWindow } from 'react-icons/md';
import { TfiPieChart } from 'react-icons/tfi';
import { HiOutlineWallet } from 'react-icons/hi2';
import { IoWalletOutline } from 'react-icons/io5';
import { BiNews } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';

import { IoSettingsOutline } from 'react-icons/io5';
import { TbLogout2 } from 'react-icons/tb';

interface NavMenuItem {
  id: number;
  iconComponent: IconType;
  title: string;
  alt: string;
}

const navMenuItems: NavMenuItem[] = [
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
];

const navMenuSetting: NavMenuItem[] = [
  {
    id: 1,
    iconComponent: IoSettingsOutline,
    title: 'Setting',
    alt: 'Icon Setting',
  },
  { id: 2, iconComponent: TbLogout2, title: 'Logout', alt: 'Icon Logout' },
];

export default function SideBar() {
  return (
    <div className="hidden lg:flex flex-col bg-white dark:bg-bg-blue lg:px-2 lg:py-7 xl:px-8 xl:py-7 rounded-r-xl shadow-xl lg:w-[200px] xl:w-[256px] 2xl:w-[356px]">
      <div className="flex gap-2 mb-12 2xl:mb-24 justify-center items-center">
        <Image
          src={Logo}
          width={34}
          height={20}
          alt="Logo Crypto"
          className="2xl:w-[44px] 2xl:h-[40px]"
        />
        <h2 className="text-black dark:text-white font-bold text-xl 2xl:text-4xl">
          Logo
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <nav>
          <ul className="flex flex-col gap-2 2xl:gap-8">
            {navMenuItems.map((item) => {
              const IconComponent = item.iconComponent;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 px-8 py-3 text-black hover:text-white focus:text-white dark:text-gray-300 dark:hover:text-white hover:bg-primary hover:rounded-xl hover:shadow-xl focus:bg-primary focus:rounded-xl focus:shadow-xl cursor-pointer transition-colors duration-150"
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
        <nav>
          <ul className="flex flex-col gap-2 2xl:gap-8">
            {navMenuSetting.map((item) => {
              const IconComponent = item.iconComponent;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 px-8 py-3 text-black hover:text-white focus:text-white dark:text-gray-300 dark:hover:text-white hover:bg-primary hover:rounded-xl hover:shadow-xl focus:bg-primary focus:rounded-xl focus:shadow-xl cursor-pointer transition-colors duration-150"
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
      </div>
    </div>
  );
}
