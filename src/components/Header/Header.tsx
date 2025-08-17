import DarkMode from '../DarkMode/DarkMode';
import MenuNav from '../MenuNav/MenuNav';
import SearchBar from '../SearchBar/SearchBar';
import User from '../User/User';

export default function Header() {
  return (
    <div className="p-4 sm:p-6 lg:p-7 flex items-center justify-between h-25">
      <MenuNav />
      <h2 className="text-white dark:text-white text-3xl font-semibold  2xl:text-5xl">
        Dashboard
      </h2>
      <SearchBar />
      <DarkMode />
      <User />
    </div>
  );
}
