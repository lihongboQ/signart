"use client";
import Image from "next/image";
import businesspartner_bg from "@/assets/image/svg/businesspartner-bg.svg";
import styled from "styled-components";

import partner from "@/utils/partner";

const ScrollBox = styled.div`
  /* transform: translateX(-126px); */
  animation: bg 25s linear infinite;
  @keyframes bg {
    from {
    }
    to {
      transform: translateX(-2432px);
    }
  }
`;
const MoveLeftBgBox = styled.div`
  background: url(${businesspartner_bg.src});
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  animation: bgMove 5s linear infinite alternate;
  mix-blend-mode: lighten;
  @keyframes bgMove {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-184px);
    }
  }
  /* translate-x-[184px] */
`;
const MoveRightBgBox = styled.div`
  background: url(${businesspartner_bg.src});
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  mix-blend-mode: lighten;
  animation: bgMove2 5s linear infinite alternate;
  @keyframes bgMove2 {
    from {
      transform: scale(-1) translateX(0);
    }
    to {
      transform: scale(-1) translateX(-184px);
    }
  }

  /* translate-x-[184px] */
`;

const ScrollCenterBox = styled.div`
  /* transform: translateX(-126px); */
  animation: partnerRoll 25s linear -1.59s infinite;
  @keyframes partnerRoll {
    from {
    }
    to {
      transform: translateX(-2432px);
    }
  }
`;
const Partner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 288px;
  height: 136px;
  background: rgba(255, 255, 255, 0.2);
  background-blend-mode: overlay;
  border-radius: 24px;
`;
export default function BusinessPartner() {
  return (
    <div className="w-screen h-[1187px]  flex flex-col items-center pt-[220px] relative overflow-hidden ">
      <MoveLeftBgBox className="w-[720px] h-[1187px] absolute left-0"></MoveLeftBgBox>
      <MoveRightBgBox className="w-[720px] h-[1187px]  absolute  right-0   "></MoveRightBgBox>
      <p className="text-[56px] font-[300] leading-[120%] uppercase">
        合作伙伴
      </p>
      <p className="text-[22px] font-[200] leading-[160%] uppercase tracking-[0.69em] mt-4 opacity-60">
        our partners
      </p>
      <p className="text-[14px] font-[400] leading-[180%] uppercase  mt-4 mb-[64px] opacity-50">
        这里写一些补充说明文字，主要表达服务于多家企业，商业资源丰富等话语
      </p>
      <div className="overflow-hidden">
        <ScrollBox className="flex items-center justify-center cursor-pointer overflow-hidden gap-[16px] ">
          {[...partner.first, ...partner.first, ...partner.first].map(
            (item: any, index: number) => (
              <Partner key={index}>
                <Image className="w-[200px]" src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollBox>
        <ScrollCenterBox className="flex items-center cursor-pointer overflow-hidden gap-[16px] my-[16px]">
          {[...partner.second, ...partner.second, ...partner.second].map(
            (item: any, index: number) => (
              <Partner key={index}>
                <Image className="w-[200px]" src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollCenterBox>

        <ScrollBox className="flex items-center justify-center cursor-pointer overflow-hidden gap-[16px] ">
          {[...partner.third, ...partner.third, ...partner.third].map(
            (item: any, index: number) => (
              <Partner key={index}>
                <Image className="w-[200px]" src={item} alt="" key={index} />
              </Partner>
            )
          )}
        </ScrollBox>
      </div>
    </div>
  );
}
