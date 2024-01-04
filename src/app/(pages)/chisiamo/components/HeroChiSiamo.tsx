"use client"
import React, {useEffect} from 'react';
import AOS from 'aos'

interface HeroChiSiamoProps {
}

export const HeroChiSiamo: React.FC<HeroChiSiamoProps> = ({}) => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <>
            <div
                className="h-[30vh] bg-gradient-to-t from-white to-blue-200 flex justify-start"
                /*style={{
                    backgroundImage: "url('/img/chisiamo/team_banner.png')",
                    backgroundSize: "cover",
                }}*/
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                <div className="container m-auto">
                    <h1 className="text-primary">
                        <span className="text-black">Il </span>
                        Team
                        <span className="text-black"> di professionisti </span>
                    </h1>
                    <hr className="border border-primary w-[200px] mt-2 mb-4"/>
                    <h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s
                        <br/>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </h2>
                </div>
            </div>
        </>
    )

}