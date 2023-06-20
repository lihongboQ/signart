"use client";
import styled from "styled-components";
import slogan_bg from "@/assets/image/svg/slogan-bg.svg";
import slogan_movebox_bg from "@/assets/image/svg/slogan-movebox-bg.svg";
import Image from "next/image";

import icon_right_arrow from "@/assets/image/svg/icon-right-black-arrow.svg";

const Box = styled.div`
  width: 100%;
  height: 866px;
  background: linear-gradient(
      180deg,
      #1a1a1a 0%,
      rgba(26, 26, 26, 0.464341) 48.22%,
      #1a1a1a 100%
    ),
    url(${slogan_bg.src}), url(${slogan_bg.src});
  background-blend-mode: normal, soft-light, color-dodge;
  background-size: 100%;
`;

const MoveBox = styled.div`
  width: 592px;
  height: 128px;
  margin: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 0 38px;
  justify-content: center;
  transition: all 300ms;
  position: relative;
  cursor: pointer;
  .export-text {
    font-weight: 250;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ff4b00;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 300ms;
    p:first-child {
      font-size: 24px;
      font-weight: 400;
    }
  }
  .go-button {
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1a1a1a;
    z-index: 2;
    position: absolute;
    right: 50%;
    transform: translate(50%, 0);
    transition: all 300ms;
    opacity: 0;
    display: flex;
    gap: 8px;
  }
  :hover {
    transition: all 300ms;
    background-blend-mode: soft-light, normal;
    background: #ff4b00;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    .export-text {
      color: #1a1a1a;
      left: 48px;
      transform: translate(0, -50%);
      transition: all 300ms;
      p:last-child {
        opacity: 0.6;
      }
    }
    .go-button {
      transition: all 300ms;
      right: 48px;
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

export default function slogan() {
  return (
    <Box>
      <div className="h-[866px] flex items-center flex-col text-center ">
        <div className="text-[24px] text-[#FFFFFF] leading-[180%] font-[250]  mt-[235px] mb-[40px] ">
          因形创声 随时造曲 应物无穷
        </div>
        <div
          className="text-[16px] font-[200] font-[Lexend]] leading-[180%] tracking-[0.2em] mb-[81px] "
          style={{
            color: "rgba(255, 255, 255, .5)",
            fontFeatureSettings: "'liga' off",
          }}
        >
          Shaping Sound Crafting Melodies Infinite Adaptations
        </div>

        <div
          style={{ background: "rgb(255,255,255,.02", borderRadius: "24px" }}
        >
          <MoveBox>
            <div className="export-text ">
              <p className="mb-[8px]">探索更多声音服务</p>
              <p>其实，你可以听见更多</p>
            </div>
            <div className="go-button ">
              前往万像循声
              <Image src={icon_right_arrow} alt="" className="w-[24px]"></Image>
            </div>
          </MoveBox>
        </div>
      </div>
    </Box>
  );
}
