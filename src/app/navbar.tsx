
import Link from "next/link";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


export default function NavBar() {
  return (
    <div className=" bg-white text-black font-mono ">
        <nav className="inline-block border-s-white fixed w-full">
          <div className="grid grid-cols-3 justify-items-center lg:gap-90">
            <div className="mt-10">
              <ul className="inline-flex lg:gap-8">
                <li>
                  <Link href="/" aria-current="page"></Link>
                </li>
                <li className="">
                  <Link href="/allprints" className="" aria-current="page">All Prints</Link>
                </li>
                <li>
                  <Link href="/about" className="" aria-current="page">About</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <Link href="/" className="text-2xl font-sans" aria-current="page">Jay Montclaire</Link>
            </div>
            <div className="mt-10">
              <Link href="/shoppingcart" aria-current="page"><PiShoppingCartSimpleFill className="w-10 h-6 inline-block justify-end"/>0</Link>
            </div>
          </div>
        </nav>
    </div>
  );
}

{/*import { FiShoppingCart } from "react-icons/fi";
<FiShoppingCart/>*/}
