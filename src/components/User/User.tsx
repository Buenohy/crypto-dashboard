import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function User() {
  return (
    <div className="group hidden lg:flex justify-center items-center ">
      <button className="p-2.5 bg-white dark:bg-bg-blue flex justify-center items-center rounded-xl shadow-xl mr-8 cursor-pointer hover:bg-primary focus:bg-primary">
        <IoIosNotificationsOutline className="text-black dark:text-text-gray group-hover:text-white group-focus:text-white w-6 h-6 2xl:w-11 2xl:h-11" />
      </button>
      <div className="flex justify-center items-center gap-4">
        <div className="bg-text-gray rounded-xl shadow-xl w-11 h-11 2xl:w-16 2xl:h-16"></div>
        <span className="text-black dark:text-white text-sm font-medium whitespace-nowrap 2xl:text-2xl">
          Gabriel Bueno
        </span>
        <MdKeyboardArrowDown className="w-4 h-4 text-text-gray 2xl:w-7 2xl:h-7" />
      </div>
    </div>
  );
}
