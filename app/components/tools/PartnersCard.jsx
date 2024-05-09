import { FaPlus } from "react-icons/fa";

const PartnersCard = ({shape, alt, title, text}) => {
  return (
      <div className="bg-[url('/assets/partners-card.svg')] mx-[10px] border-t border-l border-r border-white/10 rounded-[20px]">
        <div className="flex justify-around items-center pt-[50px] px-3">
          <img src="/assets/dx-icon.svg" alt="dx" />
          <div className="text-white">
            <FaPlus size={18} />
          </div>
          <img src={shape} alt={alt} />
        </div>
        <div className="flex flex-col items-center mt-6 pb-5 px-6">
          <h3 className="text-white text-[18px] mb-[10px]">
            {title}
          </h3>
          <p className="text-[#8c8c8c] text-center text-[14px]">
            {text}
          </p>
        </div>
      </div>
  );
};

export default PartnersCard;
