import AboutUs_bg from '@/assets/image/svg/aboutUs-bg.png'
import signCharacteristic_bg from '@/assets/image/svg/signCharacteristic-bg.svg'
import styled from 'styled-components'

const AboutUsBox = styled.div`
    width: 100%;
    height: 1050px;
    padding-left: 212px;
    padding-right: 120px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    background: url(${AboutUs_bg.src});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    /* mix-blend-mode: color-dodge; */
`
const ButtonBox = styled.div`
  cursor: pointer;
  border: 1px solid #ffffff;
  .hover {
    border: 1px solid #ffffff;
  }
  &:hover {
    color: #ffffff;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    mix-blend-mode: difference;
    .hover {
      border: 1px solid #1a1a1a;
      background: #cccccc;
    }
    path {
      stroke: #1a1a1a;
    }
  }
`;
const SignCharacteristicBox = styled.div`
    width: 310px;
    height: 385px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${signCharacteristic_bg.src});
`
export default function AboutUs() {
    return (
        <div>
            <AboutUsBox>
                <div className=' flex justify-between pt-[312px] w-full'>
                    <div className=''>
                        <div className=''>
                            <div className='w-[599px] mt-12'>
                                <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                    SIGNART 十万象限音乐留学作品集由世界名校海归艺术导师与顶尖音乐传媒公司联合创立，杭州首家拥有十年音乐传媒行业经验的创始人团队，专攻于音乐艺术作品集教育，留学申请规划以及跨界艺术联动，致力打造音乐教育与声音全流程制作的产学联动生态。同时作为浙江传媒学院等艺术高校的实训基地，每年为传媒行业输送大量人才。
                                </p>
                                <p className='text-[14px] my-[31px] font-light leading-[220%] opacity-70'>
                                    我们为您提供各类细分音乐专业的完整海归教师团队，他们或为交响乐团的演奏家，知名录音室乐手，或为一线音乐制作人，声音设计师，或为国内外顶尖名校的在职教师。
                                </p>
                                <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                    我们为您提供十年一线行业经验的老牌声音全流程制作团队，多次出色完成奥运会/冬奥会/亚运会等国家级项目的声音设计，管弦乐编写与录制，环绕声制作。大量院线电影/知名广告/游戏的声音全流程制作，袁娅维韩磊等知名艺人的歌曲制作。同时我们专精于AI声音合成处理，AMBISONIC全景声制作，交互类音效定制等声音科技产品服务。为您提供ITU标准声学制作环境，完整的声学硬件及经验丰富的声音技术团队。
                                </p>
                            </div>
                        </div>
                    </div>
                    <SignCharacteristicBox>
                        <div>
                            <p className=' font-light text-[56px] leading-[120%]'>关于我们</p>
                            <p className=' font-extralight font-[Lexend] text-[22px] tracking-[0.53em] mt-4 opacity-60 uppercase leading-[160%]'>ABOUT US</p>
                        </div>
                    </SignCharacteristicBox>
                </div>
                <div className=' flex justify-start mt-[60px] w-full'>
                    <ButtonBox className="p-4 text-[16px] leading-[120%] font-normal pl-[30px] pr-[15px] flex items-center rounded-[64px]">
                        了解校区环境
                        <div className="w-[36px] hover ml-[14px] items-center justify-center flex rounded-full h-[36px]">
                            <svg
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 15C9 15 11.9412 8 19 8C11.9412 8 9 1 9 1"
                                    stroke="white"
                                    strokeWidth="1.6"
                                />
                                <path d="M18 8L0 8" stroke="white" strokeWidth="1.6" />
                            </svg>
                        </div>
                    </ButtonBox>
                </div>
            </AboutUsBox>
            <AboutUsBox>
                <div className=' flex justify-between pt-[312px] w-full'>
                    <div className=''>
                        <div className=''>
                            <div className='w-[599px] mt-12'>
                                <p className='text-[14px] font-light leading-[320%] opacity-70'>
                                2012年 初始音乐团队创办SOUNDPIC工作室<br/>
                                2016年 万像循声文化传媒有限公司正式成立 ｜总部位于杭州滨江，并在南京、重庆设立分棚<br/>
                                2016年 开启音乐留学作品集培训服务 初步组建音乐教学团队<br/>
                                2020年 完善音乐留学作品集规划团队建设<br/>
                                2021年 十万象限教育咨询有限公司正式成立<br/>
                                2022年 UDC音乐艺术中心校区正式启用<br/>
                                2023年 西兴校区教学场地全新升级 扩建至1500平<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <SignCharacteristicBox>
                        <div>
                            <p className=' font-light text-[56px] leading-[120%]'>发展历程</p>
                            <p className=' font-extralight font-[Lexend] text-[22px] tracking-[0.1em] mt-4 opacity-60 uppercase leading-[160%]'>Development Path</p>
                        </div>
                    </SignCharacteristicBox>
                </div>
                <div className=' flex justify-start mt-[60px] w-full'>
                    <ButtonBox className="p-4 text-[16px] leading-[120%] font-normal pl-[30px] pr-[15px] flex items-center rounded-[64px]">
                        了解校区环境
                        <div className="w-[36px] hover ml-[14px] items-center justify-center flex rounded-full h-[36px]">
                            <svg
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 15C9 15 11.9412 8 19 8C11.9412 8 9 1 9 1"
                                    stroke="white"
                                    strokeWidth="1.6"
                                />
                                <path d="M18 8L0 8" stroke="white" strokeWidth="1.6" />
                            </svg>
                        </div>
                    </ButtonBox>
                </div>
            </AboutUsBox>
        </div>
    )
}