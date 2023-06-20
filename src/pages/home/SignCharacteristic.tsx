"use client"
import Image from 'next/image'
import _ from 'lodash'
import products_right from '@/assets/image/svg/icon-products-right.svg'
import signCharacteristic_bg from '@/assets/image/svg/signCharacteristic-bg.svg'
import characteristic_bg from '@/assets/image/svg/characteristic-bg.svg'
// import seniorMentor_bg from '@/assets/image/svg/seniorMentor-bg.svg'
import styled from 'styled-components'

const SignCharacteristicBox = styled.div`
    width: 310px;
    height: 385px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${signCharacteristic_bg.src});
`
interface SignCharacteristicProps {
    characteristicType: number
    setCharacteristicType: Function
}
export default function SignCharacteristic({ characteristicType, setCharacteristicType }: SignCharacteristicProps) {
    console.log("🚀 ~ file: SignCharacteristic.tsx:23 ~ SignCharacteristic ~ characteristicType:", characteristicType)
    return (
        <div style={{ background: `url(${characteristic_bg.src}), linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1A1A1A 17.84%)` }} className='flex h-[1278px] items-center px-[120px] justify-between'
            onWheelCapture={
                _.debounce((e: any) => {
                    if (characteristicType === 0) {
                        if (e.deltaY > 0) {
                            setCharacteristicType(1)
                        }
                    } else if (characteristicType === 3) {
                        if (e.deltaY < 0) {
                            setCharacteristicType(2)
                        }
                    } else {
                        if (e.deltaY < 0) {
                            setCharacteristicType(characteristicType - 1)
                        } else {
                            setCharacteristicType(characteristicType + 1)
                        }
                    }
                }, 300)
            }>
            <SignCharacteristicBox>
                <div>
                    <p className=' font-light text-[56px] leading-[120%]'>公司特色</p>
                    <p className=' font-extralight font-[Lexend] text-[22px] tracking-[0.53em] mt-4 opacity-60 uppercase leading-[160%]'>Why SIGN?</p>
                </div>
            </SignCharacteristicBox>
            <div className='flex'>
                <div className='mr-[193px] h-[488px] overflow-hidden'>
                    <div
                        className={` transition-all duration-300 ${characteristicType === 1 ? 'translate-y-[-488px]' : characteristicType === 2 ? 'translate-y-[-976px]' : characteristicType === 3 ? 'translate-y-[-1464px]' : ''} `}
                    >
                        <div className=' h-[488px]'>
                            <div className='flex'>
                                <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>资深导师团队</p>
                                {/* <Image src={seniorMentor_bg} alt='' /> */}
                            </div>
                            <div className='w-[488px] mt-12'>
                                <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                    高标准高要求的一线资深海归音乐导师团队，拥有五年以上的一线行业经验及教学经验，独树一帜的从业思维教学结合往年丰富的海外院校申请经验，让学生接受最新的音乐专业讯息，带来的音乐艺术理念、音乐创作思维和声音设计紧跟时代潮流，富有指导性和前瞻性。
                                </p>
                                <p className='text-[14px] my-[31px] font-light leading-[220%] opacity-70'>
                                    已配备全职音乐导师6人，兼职音乐导师150+，音乐产业规划师1人，专业录音师2人，资深留学规划师2人，专业师资团队由海外各个院校的海归音乐导师、一线声音从业者及交响乐团演奏家组成。
                                </p>
                                <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                    由SIGNART名校录取导师团队全程跟踪，各领域专业导师多对一服务，实现名校战略录取。
                                </p>
                            </div>
                        </div>
                        <div className=' h-[488px]'>
                            <div className='flex'>
                                <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>独家顶级设备配置</p>
                                {/* <Image src={seniorMentor_bg} alt='' /> */}
                            </div>
                            <div className='w-[488px] mt-12'>
                                <p className='text-[14px] font-light leading-[320%] opacity-70'>
                                    浙江省内最大的国际音乐教育空间<br />
                                    西兴+UDC双校区配置，教学实践总面积达1500m2+<br />
                                    独家7.1.4 Dolby Atmos电影混录棚<br />
                                    独家5.1.4 Dolby Atmos音乐混录棚<br />
                                    独家现代电声乐队排练录音棚<br />
                                    独家自然混响古典演奏录音棚<br />
                                    Foley拟音棚，声音设计实验室，音频编辑室，独立编曲间，表演教室等<br />
                                    ITU标准声学环境垂直于作品全方向全流程的学习与实践<br />
                                </p>
                            </div>
                        </div>
                        <div className='h-[488px]'>
                            <div className='flex'>
                                <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>高质量高效率精致教学</p>
                                {/* <Image src={seniorMentor_bg} alt='' /> */}
                            </div>
                            <div className='w-[488px] mt-12'>
                                <p className='text-[14px] font-light leading-[320%] opacity-70'>
                                    免费专业入学评估<br />
                                    一对一课程定制+未来职业规划<br />
                                    高效干货教学，拒绝照本宣科，拒绝纯应试培训<br />
                                    各专业导师多对一服务，实现名校战略录取<br />
                                    独家审核团队多轮严格作品审核，保证最高录取率<br />
                                    公开透明的艺术文书创作及升学行前指导<br />
                                    提供名校保录取<br />
                                </p>
                            </div>
                        </div>
                        <div className=' h-[488px]'>
                            <div className='flex'>
                                <p className='text-[40px] mr-[26px] font-normal leading-[120%] text-[#FF4B00]'>产学结合&背景提升</p>
                                {/* <Image src={seniorMentor_bg} alt='' /> */}
                            </div>
                            <div className='w-[510px] mt-12'>
                                <p className='text-[14px] font-light leading-[220%] opacity-70'>
                                    产学研一体，团队十余年一线音乐行业经验。各类音乐作品千余，如央视《2008我们的奥林匹克》 《中国冰雪记忆》《家园》《2022北京冬奥会遗产纪录片》《张艺谋的2022》，芒果TV《这十年》《党的女儿》以及浙江卫视《西泠印社》等，团队独立厂牌发行创作人计划系列专辑二十余张，将创作，录制，发行全流程结为一体，让学生在学习中有机会参与各类重大音乐项目的录制与制作，为其音乐生涯提供丰富的背景提升和行业经验。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={products_right} alt='' />
            </div>
        </div>
    )
}