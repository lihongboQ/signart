"use client"
import styled from 'styled-components'
import Image from 'next/image'
import specialize_bg from '@/assets/image/svg/specialize-bg.svg'
import specialize_Star from '@/assets/image/svg/specialize-Star.svg'
import courseArrow from '@/assets/image/svg/icon-courseArrow.svg'
import course_bg from '@/assets/image/svg/course-bg.svg'
import { modernMusicHotMajor, classicalMusicHotMajor, musicalTheoryHotMajor, musicalTheorySchool, classicalMusicSchool, modernMusicSchool } from '@/utils/specializeText'
import { useState } from 'react'

const SpecializeBox = styled.div`
    background: linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.464341) 48.22%, #1A1A1A 100%),url(${specialize_bg.src}), url(${specialize_bg.src});
    width: 100vw;
    padding-top: 270px;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: normal, soft-light, color-dodge;
`
const CourseBox = styled.div`
    width: 541px;
    height: 600px;
    padding: 40px;
    background:  linear-gradient(241.27deg, rgba(208, 208, 208, 0.9) 4.73%, rgba(249, 249, 249, 0.9) 47.73%, rgba(211, 211, 211, 0.9) 84.56%);
    /* background: url(${course_bg.src}), linear-gradient(241.27deg, rgba(208, 208, 208, 0.9) 4.73%, rgba(249, 249, 249, 0.9) 47.73%, rgba(211, 211, 211, 0.9) 84.56%); */
    background-blend-mode: soft-light, normal;
    backdrop-filter: blur(50px);
    box-shadow: inset -1px 1px 15px rgba(255, 255, 255, 0.6);
    border-radius: 48px;
`
export default function Specialize() {
    const [musicGenre, setMusicGenre] = useState<number>(1)
    return (
        <SpecializeBox className='flex justify-center w-screen overflow-hidden flex-col items-center'>
            <div>
                <div className='px-[160px] flex justify-between'>
                    <div>
                        <p className='text-[56px] leading-[120%] font-light'>专攻方向</p>
                        <p className='text-[22px] mt-4 text-[Lexend] tracking-[.4em] leading-[120%] text-sp opacity-60 uppercase font-extralight'>MUSIC MAJOR</p>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <div className='flex gap-4 items-end'>
                            <div className={`w-[200px] ${musicGenre === 1 ? 'mb-2' : ''} transition-all duration-300 cursor-pointer text-center`} onClick={() => setMusicGenre(1)}>
                                <p className='text-[24px] font-[300] leading-[160%]'>现代音乐类</p>
                            </div>
                            <div className={`w-[200px] ${musicGenre === 2 ? 'mb-2' : ''} transition-all duration-300 cursor-pointer text-center`} onClick={() => setMusicGenre(2)}>
                                <p className='text-[24px] font-[250] leading-[160%]'>古典音乐类</p>
                            </div>
                            <div className={`w-[200px] ${musicGenre === 3 ? 'mb-2' : ''} transition-all duration-300 cursor-pointer text-center`} onClick={() => setMusicGenre(3)}>
                                <p className='text-[24px] font-[250] leading-[160%]'>音乐理论及应用类</p>
                            </div>
                        </div>
                        <div className={`w-[86px] transition-all duration-300 ${musicGenre === 1 ? 'translate-x-[-488.5px]' : musicGenre === 2 ? 'translate-x-[-272.5px]' : 'translate-x-[-56.5px]'} `} style={{ border: "1px solid #FFFFFF" }}></div>
                    </div>

                </div>
                <div className='relative pb-[168px] w-[1440px]'>
                    <Image className={`absolute bottom-[0px] transition-all duration-500 ${musicGenre === 1 ? 'rotate-0' : musicGenre === 2 ? 'rotate-[90deg]' : 'rotate-[180deg]'} right-[-50px]`} src={specialize_Star} alt='' />
                    <div className='flex mt-12 w-[1440px] px-[120px] overflow-hidden justify-between'>
                        <div className={`flex gap-[120px] transition-all duration-300 ${musicGenre === 1 ? 'translate-x-[0px]' : musicGenre === 2 ? 'translate-x-[-1320px]' : 'translate-x-[-2640px]'} w-[3880px]`}>
                            <div className='flex w-[1200px] justify-between'>
                                <CourseBox>
                                    <div className="flex items-center">
                                        <p className='text-[32px] mr-3 leading-[160%] text-[#0000FF] font-black'>
                                            热门专业
                                        </p>
                                        <Image src={courseArrow} alt='' />
                                    </div>
                                    <div className="flex mt-4 items-center h-[469px] justify-between">
                                        <div className='flex flex-col h-[469px] flex-wrap pl-2 gap-3'>
                                            {modernMusicHotMajor.map((el: any, index: number) => (
                                                <div key={`${index}-${el.englishTitle}-modernMusicHotMajor`}>
                                                    <p className='text-[16px] font-normal text-[#1A1A1A] leading-[160%]'>{el.title}</p>
                                                    <p className='text-[12px] font-lighttext-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]'>{el.englishTitle}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CourseBox>
                                <CourseBox className='!w-[643px]'>
                                    <div className="flex mb-4 items-center">
                                        <p className='text-[32px] mr-3 leading-[160%] text-[#0000FF] font-black'>
                                            热门院校
                                        </p>
                                        <Image src={courseArrow} alt='' />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='flex items-center'>
                                            <p className='text-[18px] font-medium leading-[160%] text-[#1A1A1A]'>英美</p>
                                            <div style={{ border: '1px solid #000000' }} className='ml-[25px] w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex mt-[24px] justify-between'>
                                            <div className='flex h-[138px] flex-wrap flex-col gap-x-12 gap-y-[11.75px]'>
                                                {modernMusicSchool[0].map((el: any, index: number) => (
                                                    <p key={`${index}-modernMusicSchool`} className='text-[13px] leading-[140%] text-[#3E3E3E] font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pl-2'>
                                        <div className='flex mt-11 items-center'>
                                            <p className='text-[18px] font-medium leading-[160%] text-[#1A1A1A]'>日韩</p>
                                            <div style={{ border: '1px solid #000000' }} className='ml-[25px] w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex mt-[24px]'>
                                            <div className='flex flex-col h-[138px] gap-x-[137px] flex-wrap gap-y-[11.75px]'>
                                                {modernMusicSchool[1].map((el: any, index: number) => (
                                                    <p key={`${index}-modernMusicSchool-Japan and South Korea`} className='text-[13px] leading-[140%] text-[#3E3E3E] font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CourseBox>
                            </div>
                            <div className='flex w-[1200px] justify-between'>
                                <CourseBox>
                                    <div className="flex items-center">
                                        <p className='text-[32px] mr-3 leading-[160%] text-[#0000FF] font-black'>
                                            热门专业
                                        </p>
                                        <Image src={courseArrow} alt='' />
                                    </div>
                                    <div className="flex mt-4 items-center h-[469px] justify-between">
                                        <div className='flex flex-col h-[264px] flex-wrap pl-2 gap-x-[56px] gap-y-[28px]'>
                                            {classicalMusicHotMajor.map((el: any, index: number) => (
                                                <div key={`${index}-${el.englishTitle}-classicalMusicHotMajor`}>
                                                    <p className='text-[16px] font-normal text-[#1A1A1A] leading-[160%]'>{el.title}</p>
                                                    <p className='text-[12px] font-lighttext-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]'>{el.englishTitle}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </CourseBox>
                                <CourseBox className='!w-[643px]'>
                                    <div className="flex mb-4 items-center">
                                        <p className='text-[32px] mr-3 leading-[160%] text-[#0000FF] font-black'>
                                            热门院校
                                        </p>
                                        <Image src={courseArrow} alt='' />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='flex items-center'>
                                            <p className='text-[18px] font-medium leading-[160%] text-[#1A1A1A]'>英美</p>
                                            <div style={{ border: '1px solid #000000' }} className='ml-[25px] w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex mt-[24px] justify-between'>
                                            <div className='flex h-[138px] flex-wrap flex-col gap-x-[86px] gap-y-[11.75px]'>
                                                {classicalMusicSchool[0].map((el: any, index: number) => (
                                                    <p key={`${index}-classicalMusicSchool`} className='text-[13px] leading-[140%] text-[#3E3E3E] font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pl-2'>
                                        <div className='flex mt-11 items-center'>
                                            <p className='text-[18px] font-medium leading-[160%] text-[#1A1A1A]'>欧洲</p>
                                            <div style={{ border: '1px solid #000000' }} className='ml-[25px] w-[483px] opacity-10'></div>
                                        </div>
                                        <div className='flex mt-[24px]'>
                                            <div className='flex flex-col h-[138px] gap-x-[47.5px] flex-wrap gap-y-[11.75px]'>
                                                {classicalMusicSchool[1].map((el: any, index: number) => (
                                                    <p key={`${index}-classicalMusicSchool-Japan and South Korea`} className='text-[13px] leading-[140%] text-[#3E3E3E] font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CourseBox>
                            </div>
                            <div className='flex w-[1200px] justify-between'>
                                <CourseBox>
                                    <div className="flex items-center">
                                        <p className='text-[32px] mr-3 leading-[160%] text-[#0000FF] font-black'>
                                            热门专业
                                        </p>
                                        <Image src={courseArrow} alt='' />
                                    </div>
                                    <div className="flex mt-4 items-center h-[469px] justify-between">
                                        <div className='flex flex-col h-[264px] flex-wrap pl-2 gap-y-[28px] gap-x-[128px]'>
                                            {musicalTheoryHotMajor.map((el: any, index: number) => (
                                                <div key={`${index}-${el.englishTitle}-musicalTheoryHotMajor`}>
                                                    <p className='text-[16px] font-normal text-[#1A1A1A] leading-[160%]'>{el.title}</p>
                                                    <p className='text-[12px] font-lighttext-[Lexend] text-[#1A1A1A] opacity-40 leading-[160%]'>{el.englishTitle}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </CourseBox>
                                <CourseBox className='!w-[643px]'>
                                    <div className="flex mb-[102px] items-center">
                                        <p className='text-[32px] mr-3 leading-[160%] text-[#0000FF] font-black'>
                                            热门院校
                                        </p>
                                        <Image src={courseArrow} alt='' />
                                    </div>
                                    <div className='pl-2'>
                                        <div className='flex mt-[24px] justify-between'>
                                            <div className='flex h-[254px] flex-wrap flex-col gap-x-[102px] gap-y-[18px]'>
                                                {musicalTheorySchool.map((el: any, index: number) => (
                                                    <p key={`${index}-musicalTheorySchool`} className='text-[13px] leading-[140%] text-[#3E3E3E] font-normal '>
                                                        {el}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CourseBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SpecializeBox>
    )
}