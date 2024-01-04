"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {CarouselItem} from "@/model/CarouselItem";
export interface CarouselProps {
    items: CarouselItem[]
}

const CarouselHome: React.FC<CarouselProps> = ({items}) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            if(currentImg < items.length - 1){
                setCurrentImg((prevState) => {
                    if(prevState < items.length - 1){
                        return prevState + 1
                    }else{
                        return prevState
                    }

                })
            }else{
                setCurrentImg(0)
            }
        }, 5000)
        return () => {};
    }, [currentImg, items.length]);




    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])
    return (
        <div>
            {/* Carousel container */}
            <div className='w-screen h-[66vh] rounded-md overflow-hidden relative'>
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width
                    }}
                    className='w-full h-full absolute flex transition-all duration-300'>
                    {/* Map through data to render images */}
                    {items.map((v, i) => (
                        <div key={i} className="bg-gradient-to-t from-[#2C4CA5] to-blue-400 relative shrink-0 w-full h-full pt-10">
                            <div className="flex justify-evenly items-center ">
                                <div
                                    className="p-8 bg-white bg-opacity-20 flex flex-col w-[30%] text-left justify-evenly h-[300px]">
                                    <h2 className="text-5xl z-10 text-white font-bold">{v.cardTitle}</h2>
                                    <p className="text-white text-xl">{v.cardDescription}</p>
                                    <button
                                        className="btn btn-md bg-[#2C4CA5] border-[#2C4CA5] text-white w-1/3 hover:bg-primary hover:opacity-60">{v.cardButtonText}
                                    </button>
                                </div>
                                <Image src={v.image} alt="slide 1" className="mb-0 right-0"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <div>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border  px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'} absolute justify-center top-1/2 left-5 rounded text-white bg-gradient-to-t from-[#2C4CA5] to-blue-400 shadow-xl`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentImg === items.length - 1}
                    onClick={() => {
                        setCurrentImg(prev => prev + 1)
                    }}
                    className={`border px-4 py-2 font-bold ${currentImg === items.length - 1 && 'opacity-50'} absolute justify-center top-1/2 right-5 rounded text-white bg-gradient-to-t from-[#2C4CA5] to-blue-400 shadow-xl`}
                >
                    {">"}
                </button>
            </div>
        </div>

    )
}

export default CarouselHome