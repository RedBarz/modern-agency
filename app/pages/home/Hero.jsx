const Hero = () => {
  return (
    <section className="w-screen h-[539px]">
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="flex justify-center mt-10">
            <img src="/assets/dx2.svg" alt="" />
          </div>
          <div className="w-full h-[100px] relative bottom-[120px] border-t border-white/10">
            <div className="bg-black/50 backdrop-blur-lg w-full h-full" />
          </div>
        </div>
        <div className="relative bottom-[120px] bg-[url('/assets/abstract-design.svg')] px-4 pb-10 border-b border-white/10">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-[30px]">Digital Solutions</h1>
            <h2 className="text-[#666666] text-[30px]">That Drive Success</h2>
            <p className="text-[#666666] text-[14px] text-center mt-3">
              At DigitX, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape. From
              captivating web design to data-driven marketing strategies, we are
              committed to delivering results that exceed expectations.
            </p>
          </div>
          <div className="mt-[50px]">
            <p className="text-white text-[14px] text-center">
              Unlock Your Digital Potential Today
            </p>
            <div className="flex flex-row justify-between mt-3">
              <button className="w-[124px] h-[49px] rounded-[56px] bg-[#1a1a1a] border border-white/10 text-[11px] text-white hover:bg-[#2c76ffd7] hover:duration-300  hover:shadow-md hover:shadow-[#2c75ff]">
                Get started
              </button>
              <button className="w-[147px] h-[49px] rounded-[56px] bg-[#1a1a1a] border border-white/10 text-[11px] text-white hover:bg-[#2c76ffd7] hover:duration-300  hover:shadow-md hover:shadow-[#2c75ff]">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
