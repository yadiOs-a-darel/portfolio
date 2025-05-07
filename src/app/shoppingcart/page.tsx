import Link from "next/link";


export default function Home() {
    return (
      <div className="bg-white text-black grid grid-rows-[20px_1fr_20px] place-items-stretch justify-items-start min-h-screen pl-15 ">
        <main className="flex flex-col gap-6 row-start-2">
        <p className="pt-15 lg:mt-20 text-2xl font-semibold">
          Shopping Cart
        </p>
        <p>
        You have nothing in your shopping cart.
        </p>
        <p className="hidden" >
         <Link href="/">Continue Shopping</Link> 
        </p>
          
      </main>
      </div>
    );
  }
  