import Image from 'next/image'
import MentorInformation_bg from '@/assets/image/svg/MentorInformation-bg.svg'
import HUANG from '@/assets/image/teachers-icon/HUANG.svg'
import { teachers } from "@/utils/ourTeam";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import styled from 'styled-components'


const Panel = styled(Dialog.Panel)`
    background: url(${MentorInformation_bg.src}),linear-gradient(241.27deg, rgba(204, 204, 204, 0.8) 4.73%, rgba(255, 255, 255, 0.8) 47.73%, rgba(204, 204, 204, 0.8) 84.56%), #FFFFFF;
    background-blend-mode: soft-light, normal, normal;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 48px 48px 0px 0px;
`
const NameOur = styled.p`
    font-family: "General Sans";
    font-style: italic;
    font-weight: 700;
    font-size: 64px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #0000ff;
    text-shadow: 4px 0px 0px #0000ff;
`;
interface MentorInformationProps {
    isOpen: number
    textValue: number
    setIsOpen: Function
}
export default function MentorInformation({ isOpen, setIsOpen, textValue }: MentorInformationProps) {
    function closeModal() {
        setIsOpen(0)
    }
    return (
        <Transition appear show={isOpen === 1 ? true : false} as={Fragment}>
            <Dialog as="div" className="relative z-[1000000]" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-screen items-end pt-10 justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-1000"
                            enterFrom="translate-y-[1000px]"
                            enterTo="translate-y-[0px]"
                            leave="ease-in duration-1000"
                            leaveFrom="translate-y-[0px]"
                            leaveTo="translate-y-[1000px]"
                        >
                            <Panel className="w-full  max-h-[951px] transform overflow-auto p-12 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg flex justify-end font-medium leading-6 text-gray-900"
                                >
                                    <svg onClick={closeModal} className=' cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 24L24.0012 7.99879" stroke="#1A1A1A" />
                                        <path d="M8 8L24.0012 24.0012" stroke="#1A1A1A" />
                                    </svg>
                                </Dialog.Title>
                                <div className=" flex mt-10 mx-[123px] justify-between">
                                    <div className=''>
                                        <Image className='w-[389px] mb-6 h-[519px]' src={teachers[textValue].image} alt='' />
                                        <NameOur>{teachers[textValue].name}</NameOur>
                                        <p className=' font-normal mt-6 mb-4 text-[24px] leading-[120%] text-[#1A1A1A]'>{teachers[textValue].position}</p>
                                        <p className=' font-normal text-[14px] w-[235px] leading-[180%] text-[#1A1A1A]'>{teachers[textValue].works}</p>
                                    </div>
                                    <div className='max-h-[700px] overflow-auto'>
                                        <div className='text-[#1A1A1A] w-[642px] text-[14px] leading-[180%] font-light text-justify'>
                                            作曲研究生毕业于中国传媒大学，曾参与大量国家级、省级影视项目的音频创作和制作工作，有丰富的一线影视从业经验。
                                        </div>
                                        <div className='text-[#1A1A1A] my-6 w-[642px] text-[14px] leading-[180%] font-light text-justify'>
                                            参与创作的纪录片《我们的奥林匹克》、《中国冰雪记忆》曾获得 26、28 届米兰国际体育电影电视周，奥林匹克精神价值单元的最高奖。此外，其参与制作的《世界遗产在中国》、《红帆船》、《穿越生死的约定》、《亚运在中国》、《生死兄弟》、《冰雪绽放》等作品也获得过众多奖项。
                                        </div>
                                        <div className='text-[#1A1A1A] w-[642px] text-[14px] leading-[180%] font-light text-justify'>
                                            参与作品曾获奖项：<br /><br />
                                            第 26 届米兰国际体育电影电视节最高奖——荣誉花环奖<br /><br />
                                            第 15 届上海电视节“白玉兰”奖历史文献类纪录片银奖<br /><br />
                                            中国广播影视大奖--广播电视节目奖(第 21 届“星光奖”)特别奖<br /><br />
                                            第五届中国纪录片国际选片会“十大纪录片”<br /><br />
                                            “纪录中国”2009 年度优秀节目一等奖<br /><br />
                                            第 28 届米兰国际体育电影电视节最高奖——荣誉花环奖<br /><br />
                                            2010 年度广播电视协会优秀体育节目一等奖<br /><br />
                                            第十一届四川电视节“金熊猫”奖国际纪录片评选评委特别奖<br /><br />
                                            第29届米兰国际体育电影电视节提名奖<br /><br />
                                            个人部分作品列表：<br /><br />
                                            广州亚运会官方opening film配乐。<br /><br />
                                            中国教育电视台《成长不烦恼》后期音频负责。<br /><br />
                                            浙江卫视纪录片《五湖四海看浙江》后期音频负责。<br /><br />
                                            CCTV建党90 周年献礼纪录片《永远的英雄》主题歌、配乐音乐策划、作曲及制作。<br /><br />
                                            国家体育总局“全民健身”系列宣传片配乐负责。<br /><br />
                                            国家教育部“留动中国——在华留学生阳光运动文化之旅”活动主 题歌《九州英雄》作曲，兼制作人。<br /><br />
                                            纪念抗美援朝战争 60 周年大型纪录片《老兵！老兵！》配乐及主题歌作曲。<br /><br />
                                            杭州城建规划局形象片配乐。<br /><br />
                                            北京大兴政府 3D 全息喷泉项目音乐总监。<br /><br />
                                            CCTV 关爱母亲公益广告配乐。<br /><br />
                                            杭州电视台少儿频道春晚部分音乐设计和制作。 <br /><br />
                                            CCTV 大型纪录片《体育的力量》音乐制作人，<br /><br />
                                            本片获得中国广播影视大奖·广播电视节目奖（第 23 届“星光奖”）电视纪录片大奖。<br /><br />
                                            CCTV5俄罗斯索契冬奥会纪录片《冰雪绽放》音乐制作人。<br /><br />
                                            横店影视城官方院线系列宣传片音乐制作 CCTV《东方之子》栏目片头音乐设计和制作。<br /><br />
                                            网易云音乐宣传logo原创配乐 浙江经视风云浙商晚会，音乐编辑配乐 <br /><br />
                                            杭州市余杭区青少年宫微电影《我们在这里》原创配乐，本片获得浙江省青少年宫首届文化创意传播大赛一等奖。 <br /><br />
                                            浙江音乐调频FM968频道包装logo。 <br /><br />
                                            央视公益广告藏族白马原创配乐 <br /><br />
                                            浙江旅游局澳门推介会晚会音乐总监 <br /><br />
                                            浙江省第三届世界浙商大会音乐制作 <br /><br />
                                            风云浙商颁奖大会短片音频制作 <br /><br />
                                            尚妆APP院线广告韩庚版原创配乐 <br /><br />
                                            CCTV&韩国TBS尊孝联合公益广告原创配乐<br /><br />
                                            中国共产党中央组织部党章系列视频教材音频后期负责人<br /><br />
                                        </div>
                                    </div>
                                </div>

                            </Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
