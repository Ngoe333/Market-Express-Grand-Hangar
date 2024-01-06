'use client'

import Image from "next/image";
import Link from "next/link";
// import UserIcon from "./icons/UserIcon";

const Header = () => {
    return (
        <div>
            <header className="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
                <nav className="flex items-center justify-between">
                    <div>

                        <Link href="/"><Image src='/Logo 3.png' width={100} height={70} alt="logo" /></Link>
                    </div>

                    <ul className=" flex  gap-6 font-semibold text-gray-500">
                        <Link className="text-green" href={'/'}>Home</Link>
                        <Link href={'/menu'}>Menus</Link>
                        <Link href={'/order'}>Order</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </ul>

                    <div>
                        <button className="flex items-center gap-1 bg-green px-6 py-2 rounded-full font-semibold shadow-md"><UserIcon /> Login</button>
                    </div>

                </nav>

            </header>
        </div>
    )
}

export default Header;