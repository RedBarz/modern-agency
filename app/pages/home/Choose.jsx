import ChooseCard from "@/app/components/tools/ChooseCard";

const Choose = () => {
  return (
    <section className="w-screen h-auto mt-[250px]">
      <div className="mx-[10px]">
        <div>
          <h2 className="text-white text-[28px] text-center">
            Reasons to Choose DigitX for
          </h2>
          <h2 className="text-[#666666] text-[28px] text-center">
            Your Digital Journey
          </h2>
          <p className="text-[#666666] text-[14px] text-center">
            Partnering with DigitX offers a multitude of advantages. Experience
            increased brand visibility, improved customer engagement, and higher
            ROI. Our tailored solutions are designed to meet your unique
            business needs, ensuring lasting success.
          </p>
        </div>
      </div>
      <div>
        <ChooseCard
          image="/assets/star.svg"
          title="Expertise That Drives Results"
          text="Our team of seasoned professionals brings years of experience and expertise to the table."
        />
        <ChooseCard
          image="/assets/light.svg"
          title="Tailored Business Solutions "
          text="We understand that every business is unique. That's why our solutions are customized."
        />
        <ChooseCard
          image="/assets/cursor.svg"
          title="Cutting-Edge Web Design"
          text="Leave a lasting impression on your audience with our top-notch web design services."
        />
      </div>
    </section>
  );
};

export default Choose;
