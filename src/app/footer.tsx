import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white text-black grid grid-rows-[20px_1fr_20px] place-items-stretch justify-items-start min-h-screen pl-15">
        <div className="flex flex-col gap-22 row-start-2">
            <div className="text-sm">
                <div className="flex align-baseline gap-70">
                    <p> Made with <Link href="#" className="underline">Squarespace</Link> </p>
                    <p className="mt-6"> Sign up with your email address to receive news and updates.</p>
                    <p>©JayMontclaire</p>
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