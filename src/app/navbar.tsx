
import Link from "next/link";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


export default function NavBar() {
  return (
    <div className=" text-black bg-white">
        <nav className="bg-white border-gray-200 fixed">
          <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-cta">
                <ul className="flex flex-col mt-4 rtl:space-x-reverse md:flex-row gap-8">
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
