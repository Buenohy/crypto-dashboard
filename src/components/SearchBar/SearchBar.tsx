import { CiSearch } from 'react-icons/ci';

export default function SearchBar() {
  return (
    <div className="hidden lg:flex items-center relative lg:justify-between p-2.5 lg:w-full lg:max-w-[250px] xl:max-w-[450px] 2xl:min-w-[1150px] h-[44px] 2xl:h-[64px] bg-white dark:bg-bg-blue rounded-lg shadow-lg">
      <div className="hidden lg:block lg:w-full 2xl:max-w-full ">
        <input
          type="text"
          placeholder="Search..."
          className="cursor-text w-full text-black dark:text-text-gray focus:outline-none focus:ring-1 focus:ring-primary focus:rounded-lg focus:border-primary pl-10 2xl:pl-14 hidden lg:block text-3xl"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-text-gray w-6 h-6 2xl:w-10 2xl:h-10" />
      </div>
      <CiSearch className="text-black dark:text-text-gray w-6 h-6 lg:hidden" />
    </div>
  );
}
