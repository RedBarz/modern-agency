import { FaArrowRight } from "react-icons/fa6";

const ServicesCard = ({ icon, title, text, alt }) => {
  return (
    <div className="border-t border-r border-l border-b-0 border-white/10 rounded-[20px] bg-[url('/assets/card-design.svg')] w-[300px] h-[393px]">
      <div className="w-[302px] relative right-[1px] top-[1px] h-full bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0fd5] to-transparent rounded-b-[20px]">
        <div className=" flex flex-col items-center px-[10px]">
          <div className="bg-[url('/assets/icon-logo.svg')] w-[114px] h-[114px] text-white flex justify-center items-center mt-[50px] mx-5">
            <img src={icon} alt={alt} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-[20px]">{title}</h2>
            <p className="text-[#666666] text-[14px] text-center mt-3">
              {text}
              <span className="text-white/60 hover:text-[#2c76ff] hover:duration-300 cursor-pointer">
                Read More...
              </span>
            </p>
          </div>
          <button className="text-white flex flex-row justify-around items-center w-[149px] h-[52px] rounded-full bg-[#1a1a1a] border border-white/10 text-[14px] hover:bg-[#2c76ff] hover:text-white hover:duration-300 mt-6 hover:shadow-md hover:shadow-[#2c76ff92]">
            Learn More
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
