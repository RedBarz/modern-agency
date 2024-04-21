import ServicesCard from "@/app/components/tools/ServicesCard";

const Services = () => {
  return (
    <section className="mt-[80px] px-[10px]">
      <div className="flex flex-col items-center ">
        <h2 className="text-[#666666] text-[28px] mb-[10px]">
          Our
          <span className="text-white text-[28px]"> Services</span>
        </h2>
        <p className="text-[#666666] text-[14px] text-center">
          Our comprehensive range of services includes web design, mobile app
          development, SEO, social media marketing, and more. Whether you're a
          startup or an established enterprise, our experts will craft solutions
          that drive results.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-[50px]">
          <ServicesCard
            icon="/assets/terminal.svg"
            alt="Web Development"
            title="Web Development"
            text="Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. "
          />
        </div>
        <div className="mt-5">
          <ServicesCard
            icon="/assets/tel.svg"
            alt="Mobile App Development"
            title="Mobile App Development"
            text="Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. "
          />
        </div>
        <div className="mt-5">
          <ServicesCard
            icon="/assets/click.svg"
            alt="Web Design"
            title="Web Design"
            text="Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. "
          />
        </div>
        <div className="mt-5">
          <ServicesCard
            icon="/assets/eclair.svg"
            alt="Digital Marketing"
            title="Digital Marketing"
            text="Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. "
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
