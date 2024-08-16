const CommonSection = ({ DataObject, title, sectionName, theme }) => {
  return (
    <section
      id={sectionName}
      aria-labelledby={`${sectionName}-title`}
      className={`mt-[80px] ${
        theme === "dark"
          ? "bg-[rgba(255,255,255,0.05)]"
          : "bg-[rgba(94,90,155,0.5)]"
      } rounded-[10px] p-[40px]`}
    >
      <h2
        id={`${sectionName}-title`}
        className="mb-[20px] text-[1.5rem] font-[600] text-center"
      >
        {title}
      </h2>
      <div className="flex justify-between flex-wrap max-md:flex-col">
        {DataObject.map((items) => (
          <div
            key={items.id}
            className="basis-[calc(50%_-20px)] mb-[40px] flex items-start"
          >
            <div className="w-[3.8rem] h-[3.8rem] bg-bg-gradient rounded-[50%] mr-[20px] flex-shrink-0 flex justify-center items-center text-[24px]"></div>
            <div className="flex-grow">
              <h3 className="mt-0 font-[600] text-[1.15rem]">{items.title}</h3>
              <p>{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonSection;
