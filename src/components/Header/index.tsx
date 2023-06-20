import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import Consult from "../Modal/Consult";
import { useState } from "react";
import CampusEnvironment from "../Modal/CampusEnvironment";

export default function Header() {
  const [isOpen, setIsOpen] = useState<number>(0)
  const [isOpenCampus, setIsOpenCampus] = useState<number>(0)
  return (
    <div className="fixed z-[10000] w-screen pl-[48px] pr-6 py-4 left-0 flex items-center justify-between top-0">
      <div>
        <Image src={logo} alt="" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          音乐留学
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          师资团队
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          公司特色
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          关于我们
        </div>
        <div className="py-4 cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          原创音乐计划
        </div>
        <div style={{ border: '1px solid rgba(204, 204, 204, 0.3)' }} onClick={() => setIsOpenCampus(1)} className="py-4 rounded-2xl cursor-pointer text-[14px] leading-[100%] opacity-80 px-6 font-light">
          校区环境
        </div>
        <div
          style={{ border: "1px solid rgba(255, 75, 0, 0.5)" }}
          onClick={() => setIsOpen(1)}
          className="py-[15px] cursor-pointer text-[16px] rounded-2xl leading-[100%] opacity-80 px-8 font-bold text-[#FF4B00]"
        >
          我要咨询
        </div>
      </div>
      <Consult setIsOpen={setIsOpen} isOpen={isOpen} />
      <CampusEnvironment setIsOpen={setIsOpenCampus} isOpen={isOpenCampus} />
    </div>
  );
}
