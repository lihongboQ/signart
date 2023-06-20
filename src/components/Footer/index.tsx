import Image from "next/image";
import logo from "@/assets/image/svg/logo.svg";
import wechat_QRcode from "../../assets/image/svg/wechat-QRcode.svg";
import red_book_QRcode from "../../assets/image/svg/red-book-QRcode.svg";
import bilibili_QRcode from "../../assets/image/svg/bilibili-QRcode.svg";
import net_ease_cloud_QRcode from "../../assets/image/svg/net-ease-cloud-QRcode.svg";
import Tip from "../../components/Tips/tip";

export default function Footer() {
  return (
    <div className="pb-[80px] px-6">
      <div
        className="flex items-center justify-between px-6 w-full relative z-[10] pb-8 "
        style={{ borderBottom: "1px solid rgba(255, 255, 255, .5)" }}
      >
        <div className="w-[114px] ">
          <Image src={logo} alt=""></Image>
        </div>
        <div className="flex items-center ">
          <div className="flex item-cneter gap-8">
            <Tip
              imgSrc={1}
              qrCodeSrc={bilibili_QRcode}
              id="my-anchor-element-id-bilibili_img"
            ></Tip>
            <Tip
              imgSrc={2}
              qrCodeSrc={wechat_QRcode}
              id="my-anchor-element-id-wechat_img"
            ></Tip>
            <Tip
              imgSrc={3}
              qrCodeSrc={red_book_QRcode}
              id="my-anchor-element-id-red_book_img"
            ></Tip>
            <Tip
              imgSrc={4}
              qrCodeSrc={net_ease_cloud_QRcode}
              id="my-anchor-element-id-net_ease_cloud_img"
            ></Tip>
          </div>
        </div>
      </div>

      <div className="mt-[68px] ml-[71px] mb-[24px]  text-white leading-[200%] text-[14px] font-[250]">
        <div className="flex items-center gap-[40px]">
          <div>联系我们</div>
          <div className="flex items-center gap-[8px]">
            <span>马老师</span>
            +8619273829182
          </div>
          <div className="flex items-center gap-[8px]">
            <span>邮箱</span>
            Mrxia@signart.com
          </div>
        </div>

        <div className="flex items-center gap-[40px] mt-[16px]">
          <div>联系我们</div>
          浙江省杭州市滨江区西兴街道江淑路260号11603室
        </div>

        <div
          className="mt-[24px] text-[12px]"
          style={{ color: "rgba(255, 255, 255, .5)" }}
        >
          © 2023 SIGNART. All Right Reserved.
        </div>
      </div>
    </div>
  );
}
