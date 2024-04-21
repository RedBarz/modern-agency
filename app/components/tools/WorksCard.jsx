import { FaArrowRight } from "react-icons/fa6";

const WorksCard = ({ icon, alt, link, title, category, date, text }) => {
  return (
    <div className="border-t border-l border-r border-white/10 bg-gradient-to-b from-[#1a1a1ae5] via-[#1a1a1a17] to-transparent w-[300px] h-[505px] rounded-[20px] flex flex-col items-center px-6">
      <div className="bg-[url('/assets/works-container.svg')] w-[260px] h-[200px] rounded-[20px] mt-6 border border-white/10 shadow-lg shadow-slate-200/10 flex flex-col justify-center items-center">
        <img className="relative z-10 top-5 w-[100px] h-[100px]" src={icon} alt={alt} />
        <div className="relative -bottom-[50px]">
          <a
            href={link}
            className="w-[218px] h-[52px] bg-[#1a1a1a14] backdrop-blur-md border-2 border-white/10 rounded-full text-white text-[14px] flex flex-row justify-around items-center hover:bg-white hover:text-black hover:duration-300 hover:shadow-md hover:shadow-white/50 px-4 "
          >
            View Projects Details <FaArrowRight size={16} />
          </a>
        </div>
      </div>
      <div className="relative top-[50px] flex flex-col items-start w-full">
        <h2 className="text-white text-[14px] mb-4">{title}</h2>
        <p className="text-white text-[13px] mb-[10px]">{category}</p>
        <p className="text-white text-[13px] mb-4">{date}</p>
        <p className="text-[#8c8c8c] text-[12px]">{text}</p>
      </div>
    </div>
  );
};

export default WorksCard;
