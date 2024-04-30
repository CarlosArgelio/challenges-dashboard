export const Header = () => {
  return (
    <>
      <header className="bg-very-pale-blue h-[235px] rounded-b-[20px] pt-8 px-6">
        <h1 className="text-very-dark-blue text-2xl font-bold mb-1">
          Social Media Dashboard
        </h1>
        <p className="text-dark-grayish-blue font-semibold mb-6">
          Total Followers: 23,004
        </p>
        <hr className="bg-black mb-5" />
        <div className="flex justify-between">
          <p className="text-dark-grayish-blue font-semibold">Dark Mode</p>
          <input type="checkbox" name="darkmode" id="darkmode" />
        </div>
      </header>
    </>
  );
};
