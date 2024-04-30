import { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="bg-very-pale-blue dark:bg-very-dark-blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[900px]">
        <h1 className="text-very-dark-blue dark:text-very-pale-blue text-2xl font-bold mb-1">
          Social Media Dashboard
        </h1>
        <p className="text-dark-grayish-blue font-semibold mb-6 dark:text-desaturated-blue">
          Total Followers: 23,004
        </p>
        <hr className="bg-black mb-5" />
        <div className="flex justify-between">
          <p className="text-dark-grayish-blue font-semibold dark:text-desaturated-blue">
            Dark Mode
          </p>
          <label
            htmlFor="darkmode"
            className="border border-toggle dark:border-bg-toggle-gradient relative bg-toggle w-12 h-6 rounded-full cursor-pointer p-[2px]"
          >
            <input
              onClick={handleDarkMode}
              type="checkbox"
              name="darkmode"
              id="darkmode"
              className="peer sr-only" //sr-only
            />
            <div className="w-full h-full rounded-full overflow-hidden peer-checked:bg-toggle-gradient absolute top-0 left-0"></div>
            <div className="bg-light-grayish-blue w-[18px] h-[18px] rounded-full peer-checked:translate-x-6 transition-all"></div>
          </label>
        </div>
      </header>
    </>
  );
};
