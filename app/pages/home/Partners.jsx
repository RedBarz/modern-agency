import PartnersCard from "@/app/components/tools/PartnersCard";

const Partners = () => {
  return (
    <section className="mt-[60px]">
      <div className="flex flex-col items-center mx-[10px] mb-[60px]">
        <h2 className="text-[#666666] text-[24px]">
          Our<span className="text-white"> Partners and Clients</span>
        </h2>
        <p className="text-[#8c8c8c] text-[14px] text-center mx-4">
          We are grateful for the opportunity to work with esteemed partners and
          clients. Our strong relationships are a testament to our dedication
          and expertise in the digital realm.
        </p>
      </div>
      <div className="mb-5">
        <PartnersCard
          shape="/assets/shape-1.svg"
          alt="ABC Tech Solutions"
          title="ABC Tech Solutions"
          text="A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services."
        />
      </div>
      <div className="mb-5">
        <PartnersCard
          shape="/assets/shape-1.svg"
          alt="ABC Tech Solutions"
          title="ABC Tech Solutions"
          text="A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services."
        />
      </div>
      <div className="mb-5">
        <PartnersCard
          shape="/assets/shape-1.svg"
          alt="ABC Tech Solutions"
          title="ABC Tech Solutions"
          text="A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services."
        />
      </div>
      <div className="mb-5">
        <PartnersCard
          shape="/assets/shape-1.svg"
          alt="ABC Tech Solutions"
          title="ABC Tech Solutions"
          text="A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services."
        />
      </div>
    </section>
  );
};

export default Partners;
