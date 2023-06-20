"use client"
import Image from 'next/image'
import _ from 'lodash'
import products_bg from '@/assets/image/svg/products-bg.svg'
import products_right from '@/assets/image/svg/icon-products-right.svg'
import products_right_bg from '@/assets/image/svg/products-right-bg.svg'
import styled from 'styled-components'

const ProductsBox = styled.div`
    width: 440px;
    height: 530px;
    padding: 92px 40px;
    background: url(${products_bg.src});
    background-blend-mode: soft-light, overlay, normal;
    opacity: 0.9;
    border-radius: 40px;
`
const ProductsRightBox = styled.div`
    width: 621px;
    padding-left: 136px;
    margin-right: 76px;
    height: 530px;
    display: flex;
    flex-direction: column;
    background: url(${products_right_bg.src});
    background-blend-mode: soft-light, overlay, normal;
`
interface ProductsProps {
    value: number
    setValue: Function
}
export default function Products({ value, setValue }: ProductsProps) {
    return (
        <div className='flex pt-[324px] box2 w-screen pl-[136px] pr-[120px]'
            onWheelCapture={
                _.debounce((e: any) => {
                    if (value === 0) {
                        if (e.deltaY > 0) {
                            setValue(1)
                        }
                    } else if (value === 2) {
                        if (e.deltaY < 0) {
                            setValue(1)
                        }
                    } else {
                        if (e.deltaY < 0) {
                            setValue(0)
                        } else {
                            setValue(2)
                        }
                    }
                }, 300)
            }>
            <div className="flex w-[100%] items-center justify-between">
                <ProductsBox>
                    <p className='font-extrabold text-[56px] leading-[160%] text-[#1a1a1a]'>产品体系</p>
                    <p className='font-medium mt-4 text-[24px] uppercase font-[Lexend] leading-[160%] text-[#1a1a1a]'>System  of  products</p>
                </ProductsBox>
                <div className='h-[530px] overflow-hidden'>
                    <div
                        className={` transition-all duration-300 ${value === 1 ? 'translate-y-[-530px]' : value === 2 ? 'translate-y-[-1060px]' : ''} `}
                    >
                        <ProductsRightBox>
                            <p className='text-[38px] text-[#FF4B00] font-medium leading-[160%]'>主体课程</p>
                            <div className="flex gap-2 mt-[35px] items-center">
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] uppercase font-extralight font-[Lexend]'>Foundation</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>音乐启蒙课</p>
                            </div>
                            <div className="flex gap-2 my-[30px] items-center">
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>音乐专业课</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>音乐作品集</p>
                            </div>
                        </ProductsRightBox>
                        <ProductsRightBox>
                            <p className='text-[38px] mb-[35px] text-[#FF4B00] font-medium leading-[160%]'>主体课程综合增值服务</p>
                            <div className='flex h-[404px] gap-y-[30px] gap-x-12 flex-col flex-wrap'>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>顶尖录音棚录制</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>专业录音师监棚</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>作品集教研审核</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>留学择校指导</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>艺术文书申请</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>签证办理</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>夏校申请</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>专业导师推荐信</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>行业就业指导</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>行业实习引荐</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>行业实地学习</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>留学期间学习指导</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>寒暑期进修实习</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                            </div>
                        </ProductsRightBox>
                        <ProductsRightBox>
                            <p className='text-[38px] mb-[35px] text-[#FF4B00] font-medium leading-[160%]'>音乐艺术指导</p>
                            <div className='flex h-[404px] gap-y-[30px] gap-x-12 flex-col flex-wrap'>
                                <div className="flex gap-2  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>一对一个性化规划</p>
                                </div>
                                <div className="flex gap-2  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>音乐素养评估</p>
                                </div>
                                <div className="flex gap-2  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] uppercase font-extralight font-[Lexend]'>workshop</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>跨界联动</p>
                                </div>
                                <div className="flex gap-2  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>面试技巧辅导</p>
                                </div>
                                <div className="flex gap-2  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>海外大师课</p>
                                </div>
                                <div className="flex gap-2  items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>现场艺术展演</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>商业项目解读</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>乐队合作演奏</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-extralight font-[Lexend]'>+</p>
                                    <p className='text-[20px] leading-[160%] text-[#cccccc] font-light'>个人版权音乐发行</p>
                                    <div style={{ border: '1px solid #FF4B00' }} className='text-[14px] leading-[160%] text-[#FF4B00] uppercase font-bold rounded-[8px] py-[2] px-2 font-[Lexend]'>vip</div>
                                </div>
                            </div>
                        </ProductsRightBox>
                    </div>
                </div>
                <Image src={products_right} alt='' />
            </div>
        </div>
    )
}
