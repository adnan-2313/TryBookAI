const MainContent = ({ theme }) => {
  return (
    <section
      className="mt-[80px] relative"
      aria-labelledby="main-content-heading"
      aria-describedby="main-content-description"
    >
      <div
        className={`${
          theme === "dark"
            ? "bg-[rgba(255,255,255,0.05)]"
            : "bg-[rgba(94,90,155,0.5)]"
        } rounded-[10px] p-[40px] text-center relative overflow-hidden`}
      >
        <img
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png"
          alt="AI Book Generator"
          className="max-w-[100%] rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:transition-all hover:duration-500 hover:ease-in-out transition-all duration-500 ease-in-out hover:scale-[1.05]"
          aria-describedby="ai-book-generator-description"
        />
        <div
          className="top-[20px] left-[20px] absolute bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] rounded-[10px] p-[10px] flex items-center transition-[opacity_0.3_ease]"
          aria-label="Paradox logo and decorative background"
        >
          <div
            className="w-[1.5rem] h-[1.5rem] bg-bg-gradient mr-[10px] rounded-[50%]"
            aria-hidden="true"
          ></div>
          <img
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png"
            alt="Paradox Logo"
            width="90px"
            height="130px"
            className="max-w-full rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div
          className="bottom-[20px] right-[20px] absolute bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] rounded-[10px] p-[10px] flex items-center transition-[opacity_0.3_ease]"
          aria-label="Chapter complete status"
        >
          <div
            className="w-[1.5rem] h-[1.5rem] bg-bg-gradient mr-[10px] rounded-[50%]"
            aria-hidden="true"
          ></div>
          <span>Chapter complete</span>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
