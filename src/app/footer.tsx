import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white text-black">
        <div className="flex">
            <div className="text-sm">
                <div className="flex align-baseline lg:gap-250 row-start-2 pl-8 gap-40">
                    <p> Made with <Link href="#" className="underline">Squarespace</Link> </p>
                    <p>©JayMontclaire</p>
                </div>
                <div className="mt-15 lg:mt-8  lg:pl-100 pl-8">
                <p> Sign up with your email address to receive news and updates.</p>
                </div>
                <div className="flex justify-center pt-6 space-x-2 rounded-none">
                    <input className="bg-white border text-black text-xs tracking-wide px-8 py-4" placeholder="Email Address" type="text" />
                    <button className="bg-black text-white text-xl">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    
  );
}