'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { PiSunFill, PiMoonFill } from 'react-icons/pi';
import { FaDesktop } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface MenuDarkModeIcons {
  id: number;
  iconComponent: IconType;
  title: string;
  alt: string;
  theme: string;
}

const MenuDarkModeItems: MenuDarkModeIcons[] = [
  {
    id: 1,
    iconComponent: PiSunFill,
    title: 'Light',
    alt: 'Icon Light',
    theme: 'light',
  },
  {
    id: 2,
    iconComponent: PiMoonFill,
    title: 'Dark',
    alt: 'Icon Dark',
    theme: 'dark',
  },
  {
    id: 3,
    iconComponent: FaDesktop,
    title: 'Desktop',
    alt: 'Icon Desktop',
    theme: 'system',
  },
];

export default function DarkMode() {
  const { theme, setTheme, systemTheme } = useTheme(); // Access Next Themes
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Determine the active mode based on the current theme
  const activeMode =
    MenuDarkModeItems.find((item) => {
      if (theme === 'system') {
        return item.theme === systemTheme; // Match system theme
      }
      return item.theme === theme;
    }) || MenuDarkModeItems[0]; // Default to Light mode if no match

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

  const handleModeChange = (
    mode: MenuDarkModeIcons,
    event?: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (event && 'key' in event && event.key !== 'Enter') {
      return;
    }
    setTheme(mode.theme);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="group p-2.5 bg-white dark:bg-bg-blue flex justify-center items-center rounded-xl shadow-xl cursor-pointer hover:bg-primary active:text-white transition-colors focus:bg-primary "
        onClick={toggleMenu}
      >
        <activeMode.iconComponent className="text-black dark:text-text-gray group-hover:text-white group-active:text-white group-focus:text-white w-6 h-6" />
      </button>
      {isMenuOpen && (
        <nav className="absolute top-full right-0 bg-white dark:bg-bg-blue rounded-xl shadow-xl mt-4 z-50">
          <ul className="flex flex-col gap-2 p-2">
            {MenuDarkModeItems.map((item) => {
              const IconComponent = item.iconComponent;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 px-2 py-3 text-black hover:text-white focus:text-white dark:text-gray-300 dark:hover:text-white hover:bg-primary hover:rounded-xl focus:bg-primary active:bg-primary active:text-white active:rounded-xl focus:rounded-xl cursor-pointer transition-colors duration-150"
                  onClick={(event) => handleModeChange(item, event)}
                  onKeyDown={(event) => handleModeChange(item, event)}
                  tabIndex={0}
                >
                  <IconComponent
                    size={22}
                    className="flex-shrink-0 2xl:w-[40px] 2xl:h-[40px]"
                  />
                  <span className="font-normal text-base">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
