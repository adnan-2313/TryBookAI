const Newsletter = ({ theme }) => {
  return (
    <section
      className={`mt-[80px] text-center ${
        theme === "dark"
          ? "bg-[rgba(255,255,255,0.05)]"
          : "bg-[rgba(94,90,155,0.5)]"
      } rounded-[10px] p-[40px]`}
      aria-labelledby="newsletter-heading"
      aria-describedby="newsletter-description"
    >
      <h2
        id="newsletter-heading"
        className="mb-[20px] text-[1.5rem] text-center font-[600]"
      >
        Stay Updated
      </h2>
      <p id="newsletter-description">
        Subscribe to our newsletter for the latest AI writing tips and BookAI
        updates.
      </p>
      <form
        className="flex flex-col gap-[15px] justify-center mt-[20px]"
        aria-label="Newsletter subscription form"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="p-[10px] rounded-[4px] text-[1rem] w-[60%] max-w-[18.75rem] border-none outline-none"
          aria-label="Email address input"
        />
        <button
          type="submit"
          className="bg-bg-gradient border-none p-[10px_20px] rounded-[5px] cursor-pointer hover:translate-y-[-10px] hover:transition-all hover:duration-500 hover:ease-in-out transition-all duration-500 ease-in-out"
          aria-label="Subscribe button"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
