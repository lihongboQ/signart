"use client"
import styled from "styled-components"

const Box = styled.div`
    padding: 15px 15px;
    white-space:nowrap;
    border: 1px solid #FF4B00;
    border-radius: 24px;
    font-family: 'FusionPixel';
    font-weight: 400;
    font-size: 28px;
    line-height: 160%;
    text-transform: uppercase;
    color: #FF4B00;
    &:hover{
        background: #FF4B00;
        color: #1a1a1a;
    }
`
const Roll = styled.div`
    display: flex;
    gap: 0.25rem;
    animation: schoolRoll 10s linear infinite;
    @keyframes schoolRoll {
        from{}
        to{transform:translateX(-1440px)}
    }
`
export default function SchoolRoll() {
    return (
        <div className="flex mt-[214px] w-full justify-center">
            <div className="w-screen overflow-hidden">
                <Roll className="w-[5766px]">
                    <Box>约翰霍普金斯大学皮博迪音乐学院</Box>
                    <Box>音乐制作</Box>
                    <Box>多媒体视觉配乐</Box>
                    <Box>旧金山艺术大学</Box>
                    <Box>东京艺术大学</Box>
                    <Box>金斯顿大学</Box>
                    <Box>约翰霍普金斯大学皮博迪音乐学院</Box>
                    <Box>音乐制作</Box>
                    <Box>多媒体视觉配乐</Box>
                    <Box>旧金山艺术大学</Box>
                    <Box>东京艺术大学</Box>
                    <Box>金斯顿大学</Box>
                    <Box>约翰霍普金斯大学皮博迪音乐学院</Box>
                    <Box>音乐制作</Box>
                    <Box>多媒体视觉配乐</Box>
                    <Box>旧金山艺术大学</Box>
                    <Box>东京艺术大学</Box>
                    <Box>金斯顿大学</Box>
                    <Box>约翰霍普金斯大学皮博迪音乐学院</Box>
                    <Box>音乐制作</Box>
                    <Box>多媒体视觉配乐</Box>
                    <Box>旧金山艺术大学</Box>
                    <Box>东京艺术大学</Box>
                    <Box>金斯顿大学</Box>
                </Roll>
            </div>
        </div>
    )
}