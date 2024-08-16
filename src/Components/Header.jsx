import { navItems } from "../Utils/Constant";
import { MdDarkMode } from "react-icons/md";

const Header = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="flex justify-between items-center p-[20px_0] flex-wrap"
      aria-label="Main header"
    >
      <div
        className="text-[1.5rem] font-[700] flex items-center"
        aria-label="Logo and site title"
      >
        <div
          className="w-[1.878rem] h-[1.878rem] bg-bg-gradient mr-[10px] rounded-[50%]"
          aria-hidden="true"
        ></div>
        <img
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
          width="50px"
          alt="Book AI Logo"
        />
        <span>BookAI</span>
      </div>
      <nav
        className="flex flex-wrap max-md:mt-[20px] max-md:gap-[10px] items-center"
        aria-label="Primary navigation"
      >
        {navItems.map((items) => {
          return (
            <a
              href={items.link}
              key={items.id}
              className="font-[300] ml-[20px] cursor-pointer hover:text-purple-500"
              aria-label={`Navigate to ${items.title}`}
            >
              {items.title}
            </a>
          );
        })}
        <button
          className="font-[300] ml-[20px] text-[1.5rem] hover:text-purple-500"
          onClick={handleThemeSwitch}
          aria-label="Switch theme"
        >
          <MdDarkMode />
        </button>
        <button
          className="inline-block font-[300] ml-[20px] p-[10px_20px] rounded-[4px] bg-bg-gradient"
          aria-label="Login or Sign Up"
        >
          Login/Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Header;
