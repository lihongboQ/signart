// import studentWorks_bg from '@/assets/image/svg/studentWorks-bg.svg'
// import Image from 'next/image'
// import studentWorks_title_bg from '@/assets/image/svg/studentWorks-title-bg.svg'
// import studentWorks_Ellipse from '@/assets/image/svg/studentWorks-Ellipse.svg'
// import dune from '@/assets/image/studentWorks-icon/icon-dune.png'
// import dune2 from '@/assets/image/studentWorks-icon/icon-dune2.png'
// import minions from '@/assets/image/studentWorks-icon/icon-minions.png'
// import spaceOdyssey from '@/assets/image/studentWorks-icon/icon-spaceOdyssey.png'
// import play_button from '@/assets/image/svg/play-button.svg'
// import styled from 'styled-components'


// const StudentWorksBox = styled.div`
//     width: 100%;
//     height: 2132px;
//     position: relative;
//     z-index: 1;
//     margin-top: -913px;
//     padding-top: 1003px;
//     background: url(${studentWorks_bg.src}), linear-gradient(241.27deg, #CCCCCC 4.73%, #F3F3F3 47.73%, #CCCCCC 84.56%);
//     background-blend-mode: soft-light, normal;
//     border-radius: 48px;
// `
// const StudentWorksTitle = styled.div`
//     width: 886px;
//     height: 327px;
//     background:url(${studentWorks_title_bg.src});
// `
// const Img = styled(Image)`
//     height: 504px;
//     width: 504px;
//     border-radius: 40px;
// `
// const CardBox = styled.div`
//     position: relative;
//     cursor: pointer;
//     .play{
//         display: none;
//     }
//     .hover{
//         border-radius: 40px;
//         border: 1px solid #1A1A1A;
//         width: 224px;
//         overflow: hidden;
//         transition: all 200ms;
//         div{
//                 transform: translateX(-140px);
//         }
//     }
//     :hover{
//         .hover{
//             width: 506px;
//             div{
//                 transform: translateX(0px);
//             }
//         }
//         .play{
//             display: flex;
//         }
//         .vague{
//             display: none;
//         }
//     }
// `
// export default function StudentWorks() {
//     return (
//         <StudentWorksBox>
//             <StudentWorksTitle className='mx-auto flex flex-col items-center justify-center relative text-center'>
//                 <Image className=' absolute' src={studentWorks_Ellipse} alt='' />
//                 <p className=' font-normal text-[72px] text-[#1a1a1a] leading-[160%] font-[Misto]'>OUR Student Works</p>
//                 <p className=' font-light text-[30px] text-[#1a1a1a] tracking-[1em] leading-[120%]'>优秀学生作品</p>
//             </StudentWorksTitle>
//             <div className='flex justify-center mt-[-20px] gap-2'>
//                 <CardBox>
//                     <div className='hover'>
//                         <div className='w-[504px] transition-all duration-200 h-[504px]'>
//                             <Img src={dune} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute pb-12 flex w-full play items-center justify-between px-8 bottom-0 left-0'>
//                         <div>
//                             <p className=' font-light text-[32px] leading-[120%]'>沙丘</p>
//                             <p className=' font-light text-[16px] mt-3 mb-4 leading-[120%]'>预告片重配</p>
//                             <p className=' font-light text-[12px] opacity-50 leading-[120%]'>学生李永明作品&nbsp;&nbsp;4‘33’‘</p>
//                         </div>
//                         <div>
//                             <Image src={play_button} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute vague top-0 h-full rounded-[40px] w-full bg-[#CCCCCC] opacity-70 left-0'></div>
//                 </CardBox>
//                 <CardBox>
//                     <div className='hover'>
//                         <div className='w-[504px] transition-all duration-200 h-[504px]'>
//                             <Img className='' src={minions} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute pb-12 flex w-full play items-center justify-between px-8 bottom-0 left-0'>
//                         <div>
//                             <p className=' font-light text-[32px] leading-[120%]'>小黄人</p>
//                             <p className=' font-light text-[16px] mt-3 mb-4 leading-[120%]'>预告片重配</p>
//                             <p className=' font-light text-[12px] opacity-50 leading-[120%]'>学生李永明作品&nbsp;&nbsp;4‘33’‘</p>
//                         </div>
//                         <div>
//                             <Image src={play_button} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute vague top-0 h-full rounded-[40px] w-full bg-[#CCCCCC] opacity-70 left-0'></div>
//                 </CardBox>
//                 <CardBox>
//                     <div className='hover'>
//                         <div className='w-[504px] transition-all duration-200 h-[504px]'>
//                             <Img className='' src={dune2} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute pb-12 flex w-full play items-center justify-between px-8 bottom-0 left-0'>
//                         <div>
//                             <p className=' font-light text-[32px] leading-[120%]'>沙丘2</p>
//                             <p className=' font-light text-[16px] mt-3 mb-4 leading-[120%]'>预告片重配</p>
//                             <p className=' font-light text-[12px] opacity-50 leading-[120%]'>学生李永明作品&nbsp;&nbsp;4‘33’‘</p>
//                         </div>
//                         <div>
//                             <Image src={play_button} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute vague top-0 h-full rounded-[40px] w-full bg-[#CCCCCC] opacity-70 left-0'></div>
//                 </CardBox>
//                 <CardBox>
//                     <div className='hover'>
//                         <div className='w-[504px] transition-all duration-200 h-[504px]'>
//                             <Img className='' src={spaceOdyssey} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute pb-12 flex w-full play items-center justify-between px-8 bottom-0 left-0'>
//                         <div>
//                             <p className=' font-light text-[32px] leading-[120%]'>2001太空漫游</p>
//                             <p className=' font-light text-[16px] mt-3 mb-4 leading-[120%]'>预告片重配</p>
//                             <p className=' font-light text-[12px] opacity-50 leading-[120%]'>学生李永明作品&nbsp;&nbsp;4‘33’‘</p>
//                         </div>
//                         <div>
//                             <Image src={play_button} alt='' />
//                         </div>
//                     </div>
//                     <div className='absolute vague top-0 h-full rounded-[40px] w-full bg-[#CCCCCC] opacity-70 left-0'></div>
//                 </CardBox>
//             </div>
//         </StudentWorksBox>
//     )
// }