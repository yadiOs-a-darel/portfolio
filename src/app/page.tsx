
import Image from "next/image";
import Link from "next/link";


interface Image {

  title: string
  image: string
}


const imagesData:Array<Image> = [
  {
    title: "Sand",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845741-4NT25914DPJ5Z1T3X8QS/Group+87.jpg?format=1500w",
     
  },
  {
    title: "Satellite",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845747-FQ9N2UBKUEKMBTT75NO5/Group+88.jpg?format=1500w",
   
  },
  {
    title: "Ocean",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845751-XJD2R34QTKFCOQX9OJZ3/Group+93.jpg?format=1500w",
  
  },
  {
    title: "Fresa",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845756-77W8HQ4L3G59QV3ZYQFH/Group+97.jpg?format=1500w",
   
  },
  {
    title: "Sangre",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845761-UR2I5G48KOWRHJZZIC5W/Group+90.jpg?format=1500w",
   
  },
  {
    title: "Dune",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },

]

export default function page() {

    // HOOKS

    const images = imagesData.map(function(image, index) {
      return (
          <div key={index} className="align-middle lg:mt-60">
              <div>
                  <img src={image.image} alt={image.image} />
              </div>
              <Link className="flex items-center justify-center font-medium text-sm underline" href={"#"}>{image.title}</Link>
          </div>
      )
  })



  return (
    <div className="bg-white text-black items-center justify-items-center pb-20 p-20">
        <main className="flex flex-col gap-2 items-center text-xl lg:text-4xl pt-50">
          <div className="font-mono grid lg:grid-cols-2 lg:pl-100 ">
            <p className="lg:col-span-1">Fine Art Painter. </p>
            <p className="lg:col-span-2 lg:pt-4 lg:ml-15">Printmaker.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 ">
                {images}
          </div>
          <div className="grid sm:grid-cols-2 mt-40">
            <div className="">
              <img src="https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845771-1QWQQXHZI6PN43U7EWEU/Group+58.jpg?format=1500w" alt="image" />
            </div>
            <div className="flex text-sm items-center justify-center">
              <div>
                 <h1> Contact </h1> <br/>
                 <h1>For custom paintings, or any questions you can contact me here:</h1><br />
                <Link href={"#"} className="underline">email@email.com <br /> (555)555-5555</Link>
              </div>
             </div>  
          </div>
        </main>
    </div> 
  )
}
