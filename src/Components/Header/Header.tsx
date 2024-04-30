export const Header = () => {
  return (
    <>
      <header>
        <h1>Social Media</h1>
        <p>Total Followers: 23,004</p>
        <hr />

        <div className="flex justify-between">
          <p>Dark Mode</p>
          <input type="checkbox" name="darkmode" id="darkmode" />
        </div>
      </header>
    </>
  );
};
