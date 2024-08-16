import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import MainContent from "./Components/MainContent";
import Features from "./Components/Features";
import CommonSection from "./Components/CommonSection";
import SampleBook from "./Components/SampleBook";
import { functions } from "./Utils/Constant";
import { Roadmap } from "./Utils/Constant";
import SectionTestimonials from "./Components/TestimonialsSection";
import Newsletter from "./Components/NewsletterSection";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div
        className="dark:bg-custom-gradient bg-custom-light-gradient text-black dark:text-white relative w-full h-full top-0 left-0 z-10 dark:transition-all dark:duration-1000 dark:ease-in-out transition-all duration-1000 ease-in-out"
        role="main"
        aria-label="Main content"
      >
        <div className="w-[90%] max-w-[75rem] m-auto p-[20px] font-inter">
          <Header theme={theme} setTheme={setTheme} />
          <HeroSection theme={theme} />
          <MainContent theme={theme} />
          <Features theme={theme} />
          <CommonSection
            DataObject={functions}
            theme={theme}
            title="How It Works"
            sectionName="How It Works"
          />
          <SampleBook theme={theme} />
          <CommonSection
            theme={theme}
            DataObject={Roadmap}
            title="Roadmap"
            sectionName="Roadmap"
          />
          <SectionTestimonials theme={theme} />
          <Newsletter theme={theme} />
          <Footer theme={theme} />
        </div>
      </div>
    </>
  );
};

export default App;
