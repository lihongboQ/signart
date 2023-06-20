"use client"
import serviceSystem_bg from '@/assets/image/svg/serviceSystem-bg.svg'
import planning_bg from '@/assets/image/svg/planning-bg.svg'
import teaching_bg from '@/assets/image/svg/teaching-bg.svg'
import service_bg from '@/assets/image/svg/service-bg.svg'
import styled from "styled-components"

const ServiceSystemBox = styled.div`
    width: 1200px;
    padding-top: 120px;
    height: 1050px;
    background: url(${serviceSystem_bg.src});
`
const PlanningBox = styled.div`
    width: 540px;
    display: flex;
    padding:  53px 64px 38px 73px;
    margin: 0 auto;
    background: url(${planning_bg.src});
    mix-blend-mode: difference;
`
const TeachingBox = styled.div`
    width: 300px;
    height: 330px;
    display: flex;
    padding:  60px 28px 61px 20px;
    background: url(${teaching_bg.src});
    mix-blend-mode: difference;
`
const EducationalBox = styled.div`
    width: 300px;
    height: 330px;
    display: flex;
    padding:  40px 28px 36px 12px;
    background: url(${teaching_bg.src});
    mix-blend-mode: difference;
    position: relative;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`
const ServiceBox = styled.div`
    width: 300px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${service_bg.src});
    mix-blend-mode: difference;
`
export default function ServiceSystem() {
    return (
        <div className=" flex mt-[30px] items-center justify-center px-[120px]">
            <ServiceSystemBox>
                <PlanningBox>
                    <p className="text-[32px] mr-[45px] mt-[3px] font-extrabold leading-[100%] text-[#0000ff]">规划端</p>
                    <div className="flex gap-[28px]">
                        <div>
                            <p className="text-[18px] leading-[160%] font-normal text-[#1a1a1a]">入学基础评估</p>
                            <p className="text-[18px] leading-[160%] my-4 font-normal text-[#1a1a1a]">留学时间规划</p>
                            <p className="text-[18px] leading-[160%] font-normal text-[#1a1a1a]">作品集课程规划</p>
                        </div>
                        <div>
                            <p className="text-[18px] leading-[160%] font-normal text-[#1a1a1a]">背景提升规划</p>
                            <p className="text-[18px] leading-[160%] my-4 font-normal text-[#1a1a1a]">未来就业指导</p>
                        </div>
                    </div>
                </PlanningBox>
                <div className="flex mt-[90px] justify-between">
                    <TeachingBox>
                        <div className="flex">
                            <div>
                                <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">主项目导师</p>
                                <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">辅修课程导师</p>
                                <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">音乐启蒙导师</p>
                                <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">跨界艺术导师</p>
                                <p className="text-[18px] leading-[160%] font-normal text-[#1a1a1a]">综合审核导师</p>
                            </div>
                            <p className="text-[32px] ml-[48px] mt-[14px] font-extrabold leading-[100%] text-[#0000ff]">教学端</p>
                        </div>
                    </TeachingBox>
                    <ServiceBox>
                        <div>
                            <p className="text-[54px] font-normal leading-[120%] font-['FusionPixel']">服务体系</p>
                            <p className="text-[24px] font-normal leading-[160%] mt-[18px] uppercase tracking-[0.17em] font-['GuanZhi']">Service system</p>
                        </div>
                    </ServiceBox>
                    <EducationalBox>
                        <div className="w-[30px] h-[30px] absolute top-0 left-[50%] bg-[#FF4B00]"></div>
                        <div style={{ transform: " matrix(-1, 0, 0, 1, 0, 0)" }} className="flex">
                            <p className="text-[32px] mr-[38px] mt-[34px] font-extrabold leading-[100%] text-[#0000ff]">规划端</p>
                            <div className="flex gap-[28px]">
                                <div>
                                    <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">合理安排课程</p>
                                    <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">学习进度反馈</p>
                                    <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">学习课时记录</p>
                                    <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">季度一对一约谈</p>
                                    <p className="text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]">选校指导</p>
                                    <p className="text-[18px] leading-[160%] font-normal text-[#1a1a1a]">心理辅导</p>
                                </div>
                            </div>
                        </div>
                    </EducationalBox>
                </div>
            </ServiceSystemBox>
        </div>
    )
}