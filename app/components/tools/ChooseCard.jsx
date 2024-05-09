import { FaArrowRight } from "react-icons/fa6";

const ChooseCard = ({ image, title, text }) => {
  return (
    <div className=" mt-[50px] px-[15px]">
      <div className="flex justify-center ">
        <img src={image} alt="" />
      </div>
      <div className="my-[30px]">
        <h2 className="text-white text-[18px] text-center">{title}</h2>
        <p className="text-[#666666] text-center text-[13px] mt-[10px]">
          {text}
        </p>
      </div>
      <div className="flex justify-center border-b border-white/10 pb-10">
        <button className="flex flex-row items-center justify-between w-[181px] h-[56px] border rounded-[100px] border-white/10 text-white py-[10px] pr-[10px] pl-5 ">
          Learn More
          <span className="bg-[#1a1a1a] w-[52px] h-[36px] flex justify-center items-center rounded-[135px] hover:bg-[#2c76ff] shadow-md hover:shadow-[#2c76ffa4] hover:text-white hover:duration-300 cursor-pointer">
            <FaArrowRight size={24} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChooseCard;
