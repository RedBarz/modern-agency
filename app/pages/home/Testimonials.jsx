import { BsTwitterX } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className="mt-[50px] flex flex-col items-center">
      <div className="flex flex-col items-center mx-[10px]">
        <h2 className="text-[#666666] text-[28px] mb-[10px]">
          Our
          <span className="text-white text-[28px]"> Works</span>
        </h2>
        <p className="text-[#666666] text-[14px] text-center">
          Witness the brilliance of our previous projects. Our portfolio
          showcases the successful collaborations we've had with diverse clients
          across various industries. Let our work speak for itself.
        </p>
      </div>
      <div className="mt-[50px] bg-gradient-to-b from-[#1a1a1a5c] via-[#1a1a1a17] to-transparent w-[280px] h-[254px] rounded-[14px] border border-white/5 flex flex-col items-center p-6">
        <div className="text-white h-[44px] w-[44px] border border-white/10 rounded-[6px] flex justify-center items-center bg-[#1a1a1a] ">
          <BsTwitterX size={20} />
        </div>
        <p className="text-white text-[13px] mt-6 text-center">
          Working with DigitX was a pleasure. Their web design team created a
          stunning website that perfectly captured our brand's essence. The
          feedback from our customers has been overwhelmingly positive.
        </p>
      </div>
      <div className="flex flex-col items-center mt-8">
        <img src="/assets/mark.svg" alt="" />
        <div className="flex flex-col items-center mt-[10px]">
          <p className="text-white">Mark Roberts</p>
          <p className="text-[#808080]">Founder of GreenEarth Eco Store</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
