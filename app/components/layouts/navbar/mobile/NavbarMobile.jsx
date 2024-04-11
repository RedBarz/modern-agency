import { HiMenuAlt3 } from "react-icons/hi";

const NavbarMobile = () => {
  return (
    <nav className="w-screen h-[106px] bg-[#0F0F0F] border-b border-[#666666]">
      <div className="pt-10 px-4">
        <div className=" flex flex-row justify-between items-center">
          <div>
            <img src="/assets/dx.svg" alt="" />
          </div>
          <div className="text-white bg-[#1a1a1a] border border-white/10 rounded-full p-3 hover:bg-[#666666]">
            <HiMenuAlt3 size={28} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
