
import Link from "next/link";


export default function Home() {
    return (
      <div className="bg-white text-black grid grid-rows-[20px_1fr_20px] place-items-stretch justify-items-start min-h-screen pl-15 ">
        <main className="flex flex-col gap-22 row-start-2">
        <p className="pt-15">
          About
        </p>
        <p className=" font-sans text-3xl">
          It all begins with an idea. Maybe you want <br />
          to launch a business. Maybe you want to <br />
          turn a hobby into something more. Or <br />
          maybe you have a creative project to share <br />
          with the world. Whatever it is, the way you <br />
          tell your story online can make all the <br />
          difference. 
        </p>
        <p className="font-medium">
          Don’t worry about sounding professional. Sound like you. There are over 1.5 billion <br />
          websites out there, but your story is what’s going to separate this one from the rest. If <br />
          you read the words back and don’t hear your own voice in your head, that’s a good <br />
          sign you still have more work to do.
        </p>
        <div className="my-2 border-t border-gray-800 w-150 gap-2"></div>
        <div className="gap-2">
          <p>email@example.com</p>
          <Link className="underline" href={"#"}>instagram</Link>
          
        </div>        
      </main>
      </div>
    );
  }
  