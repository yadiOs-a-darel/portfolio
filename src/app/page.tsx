
import Image from "next/image";
import Link from "next/link";


interface Image {

  title: string
  image: string
}


const imagesData:Array<Image> = [
  {
    title: "Livre 01",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845741-4NT25914DPJ5Z1T3X8QS/Group+87.jpg?format=1500w",
     
  },
  {
    title: "Livre 01",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845747-FQ9N2UBKUEKMBTT75NO5/Group+88.jpg?format=1500w",
   
  },
  {
    title: "Livre 01",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845751-XJD2R34QTKFCOQX9OJZ3/Group+93.jpg?format=1500w",
  
  },
  {
    title: "Livre 01",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845756-77W8HQ4L3G59QV3ZYQFH/Group+97.jpg?format=1500w",
   
  },
  {
    title: "Livre 01",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845761-UR2I5G48KOWRHJZZIC5W/Group+90.jpg?format=1500w",
   
  },
  {
    title: "Livre 01",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },

]

export default function page() {

    // HOOKS

    const images = imagesData.map(function(image, index) {
      return (
          <div key={index} className="align-middle mt-40">
              <div>
                  <img src={image.image} alt={image.image} />
              </div>
              <Link className="flex items-center justify-center font-medium text-sm underline" href={"#"}>{image.title}</Link>
          </div>
      )
  })



  return (
    <div className="bg-white text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 row-start-2 items-center sm:place-items-center font-light text-6xl pt-50">
          <div>
          Fine Art Painter. 
          </div>
          <div className=''>
            Printmaker.
          </div>
          <div className="grid grid-cols-3 gap-6 ">
                {images}
          </div>
          <div className="grid grid-cols-2">
            <img src="https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845771-1QWQQXHZI6PN43U7EWEU/Group+58.jpg?format=1500w" alt="image" />
            
            <div className="flex text-sm items-center justify-center ">
              <p>
                  Contact <br />
                  For custom paintings, or any questions you can contact me here:  <br />
                  <Link href={"#"} className="underline">email@email.com <br /> (555)555-5555</Link>
              </p>
             </div>  
          </div>
        </main>
    </div> 
  )
}
