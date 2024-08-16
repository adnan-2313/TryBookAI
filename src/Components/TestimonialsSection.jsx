import { testimonials } from "../Utils/Constant";

const SectionTestimonials = ({ theme }) => {
  return (
    <section
      className="mt-[80px] text-center"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="mb-[20px] font-[600] text-[24px] text-center"
      >
        What Our Users Say
      </h2>
      <div className="flex justify-between flex-wrap mt-[40px] max-md:flex-col">
        {testimonials.map((items, index) => (
          <div
            key={index}
            className={`${
              theme === "dark"
                ? "bg-[rgba(255,255,255,0.05)]"
                : "bg-[rgba(94,90,155,0.5)]"
            } rounded-[10px] p-[20px] mt-[20px] basis-[calc(50%_-20px)] hover:translate-y-[-10px]  hover:transition-all hover:duration-500 hover:ease-in-out  transition-all  duration-500 ease-in-out`}
            aria-labelledby={`testimonial-author-${index}`}
            aria-describedby={`testimonial-desc-${index}`}
          >
            <p id={`testimonial-desc-${index}`} className="mb-[10px]">
              {items.desc}
            </p>
            <p id={`testimonial-author-${index}`} className="font-bold">
              {items.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTestimonials;
