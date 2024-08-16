const HeroSection = () => {
  return (
    <section
      className="p-[80px_0_0px_20px] text-center relative z-[1]"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      <h1
        id="hero-heading"
        className="text-[3rem] mb-[20px] font-bold leading-[1.2]"
      >
        Explore the Possibilities of{" "}
        <span className="text-purple-500">AI Book Writing </span>
        with BookAI
      </h1>
      <p
        id="hero-description"
        className="text-[1.125rem] max-w-[37.5rem] m-[0_auto_40px] text-[#b3b3b3]"
      >
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <a
        href="https://trybookai.com/playground"
        className="inline-block bg-bg-gradient hover:translate-y-[-10px] hover:transition-all hover:duration-500 hover:ease-in-out transition-all duration-500 ease-in-out p-[12px_30px] mx-[2px] rounded-[30px] font-[600]"
        aria-label="Get Started with AI Book Writing"
      >
        Get Started
      </a>
      <a
        href="https://trybookai.com/api"
        className="inline-block bg-bg-gradient max-md:my-[10px] p-[12px_30px] mx-[2px] rounded-[30px] font-[600] hover:translate-y-[-10px] hover:transition-all hover:duration-500 hover:ease-in-out transition-all duration-500 ease-in-out"
        aria-label="Get API Access"
      >
        Get API Access
      </a>
      <p className="mt-[50px] text-yellow-400 font-semibold">
        Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will
        be used for text and image generation.
      </p>
    </section>
  );
};

export default HeroSection;
