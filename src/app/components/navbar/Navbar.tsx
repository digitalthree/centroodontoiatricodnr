'use client'

import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import logo from "../../../../public/img/logo.png"
import Link from "next/link";
import NavbarLink from "@/app/components/navbar/components/NavbarLink";
import { PiClockCountdownFill } from "react-icons/pi";
import { GiSmartphone } from "react-icons/gi";
import { SiGooglemaps } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";






export interface NavbarProps{

}

const Navbar: React.FC<NavbarProps> = ({}) => {

    const [hrVisibility, setHrVisibility] = useState<string | undefined>('/')

    return(
        <div className="flex flex-col">
            <div className="flex justify-between items-center px-20 py-2">
                <div className="w-1/4">
                    <Link href={"/"} onClick={() => setHrVisibility("/")} className="flex justify-center">
                        <Image src={logo} alt="logo MM Systems" className="w-[45%]"/>
                    </Link>
                </div>

                <div className="flex">
                    <PiClockCountdownFill size={60} className="text-primary mr-3"/>
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-primary font-bold text-[15px]">Orari</span>
                        <span className="text-primary text-[15px]">Lun - Ven 8:00-21:00</span>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <GiSmartphone size={60} className="text-primary mr-3"/>
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-primary font-bold text-[15px]">Telefono</span>
                        <span className="text-primary text-[15px]">+39 32998137199797</span>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <SiGooglemaps size={60} className="text-primary mr-3"/>
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-primary font-bold text-[15px]">Vieni a trovarci</span>
                        <span className="text-primary text-[15px]">Via Fosso la Pietra, 2, 67031 Castel di Sangro AQ</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-8 border-2 border-primary">
                <div className="flex justify-evenly w-2/3 items-center py-3">
                    <NavbarLink link={'/'} title={"HOME"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                    <NavbarLink link={'servizi'} title={"SERVIZI"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                    <NavbarLink link={'chisiamo'} title={"CHI SIAMO"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                    <NavbarLink link={'contatti'} title={"CONTATTI"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                </div>
                <div className="flex justify-evenly w-1/3 border-l-2 border-primary py-3">
                    <FaFacebookF size={30} className="text-primary"/>
                    <FaInstagram size={30} className="text-primary"/>
                    <FaLinkedinIn size={30} className="text-primary"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar



