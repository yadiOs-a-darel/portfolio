
import Link from "next/link";
import { useState } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";


export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

    <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-20 sm:hidden"
        >
          {isOpen ? <RxCross1 /> : <HiMenuAlt4 />}
      </button>
  return (
    <div className=" text-black bg-white">
        <nav className="bg-white border-gray-200 ">
          <div className="max-w-screen-xl flex items-center  justify-between mx-auto p-4">
            <div className={`fixed inset-0 bg-black items-center justify-between ${ isOpen ? 'flex' : 'hidden sm:flex'} 
              hidden w-full md:flex md:w-auto md:order-1 " id="navbar-cta`}>
                <ul className="flex flex-col mt-4  rtl:space-x-reverse md:flex-row gap-8 ">
                  <li>
                    <Link href="/" aria-current="page"></Link>
                  </li>
                  <li>
                    <Link href="/allprints" className="block py-2 px-3 md:p-0 text-black " aria-current="page">All Prints</Link>
                  </li>
                  <li>
                    <Link href="/about" className="block py-2 px-3 md:p-0 text-black" aria-current="page">About</Link>
                  </li>
                  </ul>
                  <div>
                    <Link href="/" className="flex flex-col mt-2  rtl:space-x-reverse md:flex-row pl-108" aria-current="page">Jay Montclaire</Link>
                  </div>
                  <div >
                    <Link className="flex p-4 mt-2 md:flex-row gap-2 pl-120" href={"#"} ><PiShoppingCartSimpleFill /> 0</Link>
                  </div>
            </div>
          </div>
        </nav>
    </div>
  );
}

{/*import { FiShoppingCart } from "react-icons/fi";
<FiShoppingCart/>*/}
