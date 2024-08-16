import { features } from "../Utils/Constant";
const Features = () => {
  return (
    <section id="features" className="flex justify-around mt-[80px] flex-wrap max-md:flex-col">
      {features.map((items) => {
        return (
          <div
            key={items.id}
            className="text-center basis-[calc(25%_-20px)] hover:translate-y-[-10px]  hover:transition-all hover:duration-500 hover:ease-in-out  transition-all  duration-500 ease-in-out"
          >
          <div className="w-[3.8rem] h-[3.8rem] bg-bg-gradient2 rounded-[50%] m-[0_auto_20px] flex justify-center items-center text-[24px] "></div>
            <h3 className="text-[1.17em] font-bold">{items.heading}</h3>
            <p className="">{items.desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
