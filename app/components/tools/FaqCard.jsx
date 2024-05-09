import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqCard = ({ title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-[14px] w-[70%]">{title}</h2>
          <div
            className={`text-white bg-[#1a1a1a] p-[10px] rounded-full active:bg-[#2c76ffd7] hover:shadow-sm active:shadow-[#2c76ff] cursor-pointer transition duration-300 ${
              isExpanded && "bg-[#2c76ffd7]"
            }`}
            onClick={toggleExpand}
          >
            {isExpanded ? <FaMinus size={24} /> : <FaPlus size={24} />}
          </div>
        </div>
        {isExpanded && (
          <div>
            <p className="text-[#8c8c8c] text-[13px] mt-[14px]">{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqCard;
