import React from 'react';
import Link from "next/link";

export interface NavbarLinkProps{
    link: string | undefined,
    title: string
    hrVisibility: string | undefined,
    setHrVisibility: (v: string | undefined) => void
}

const NavbarLink: React.FC<NavbarLinkProps> = ({link, title, hrVisibility, setHrVisibility}) => {
    return(
        <Link href={link ? link : '/'} className="text-primary hover:opacity-50" onClick={() => setHrVisibility(link)}>
            <div className="flex flex-col">
                {title}
                {hrVisibility && hrVisibility === link && <hr className="w-full border border-secondary"/>}
            </div>
        </Link>
    )
}

export default NavbarLink