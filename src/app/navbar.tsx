import Link from "next/link";


export default function Menu() {
    return (
        <div className="h-screen pl-54 pt-44">

            <img className="w-8 h-8" src="/public/img/MainBefore.jpg" alt="" />
            <div className="pt-12 flex font-medium flex-col gap-1">
                <Link href="/">Home</Link>
                <Link href="/all">All</Link>
                <Link href="/prints">Prints</Link>
                <Link href="/about">About</Link>
                <div className="my-2 border-t border-gray-300 w-32"></div>
            </div>
        </div>
    );
}