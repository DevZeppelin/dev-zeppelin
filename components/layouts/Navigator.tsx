import React, { useState } from "react";
import IconSvg from "../icons/IconSvg";
import LogoSvg from "../icons/LogoSvg";
import HamburgerSvg from "../icons/HamburgerSvg";
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigator: React.FC = (props) => {

  const [open, setOpen] = useState(false)

  const router = useRouter()

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open)
  }

  const {asPath} = router

  console.log(asPath)

  return (
    <nav className="relative">
      <div className="flex w-full bg-myblue justify-center items-center">
        <div className="flex-1 flex md:space-x-8 md:items-center">
          <div className="bg-mylightblue p-2 md:p-4">
            <IconSvg className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <Link href="/">
            <div className="hidden md:block text-mywhite cursor-pointer">
              <div className="px-4 py-2"
              style={{borderBottom: asPath === '/' ? 'solid 2px #16c79a' : '' }}><a>Home</a></div>
            </div>
          </Link>
          <Link href="/blog">
            <div className="hidden md:block text-mywhite px-4 py-2 cursor-pointer"
            style={{borderBottom: asPath === '/blog' ? 'solid 2px #16c79a' : '' }}><a>Blog</a></div>
          </Link>
        </div>
        <div className="flex-1 text-center flex justify-center items-center">
          <LogoSvg className="w-15 md:w-50 md:h-30" />
        </div>
        <div className="flex-1 flex justify-end text-right items-center">
          <div className="p-2 md:p-4 md:hidden">
            <button onClick={toggleNav}>
              <HamburgerSvg className="h-6 stroke-current text-mywhite" />
            </button>
          </div>
          <div className="hidden md:block text-mywhite pr-8">
            Gino Pietrobon
          </div>
          <div className="pr-4">
            <img
              src="/imgs/avatar.webp"
              alt="avatar gino pietrobon"
              className="hidden md:block w-14 h-14 rounded-full"
            ></img>
          </div>
        </div>
      </div>
      <div className="absolute z-20 bg-myblue w-full" style={{ display: open ? 'block' : 'none' }}>
        <div className="flex flex-col text-lg p-4 text-mywhite divide-y" >
          <Link href="/"><a className="py-2">Home</a></Link>
          <Link href="/blog"><a className="py-2">Blog</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
