



interface Image {

  title: string
  image: string
}


const imagesData:Array<Image> = [
  {
    title: "Fresa",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845741-4NT25914DPJ5Z1T3X8QS/Group+87.jpg?format=1500w",
     
  },
  {
    title: "Nuclear",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845747-FQ9N2UBKUEKMBTT75NO5/Group+88.jpg?format=1500w",
   
  },
  {
    title: "Sand",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845751-XJD2R34QTKFCOQX9OJZ3/Group+93.jpg?format=1500w",
  
  },
  {
    title: "Satellite",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845756-77W8HQ4L3G59QV3ZYQFH/Group+97.jpg?format=1500w",
   
  },
  {
    title: "Tide",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845761-UR2I5G48KOWRHJZZIC5W/Group+90.jpg?format=1500w",
   
  },
  {
    title: "Sangre",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },
  {
    title: "Eclipse",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },
  {
    title: "SeaShell",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },
  {
    title: "War",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },
  {
    title: "Ocean",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },
  {
    title: "Durne",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },
  {
    title: "Storm",
    image: "https://images.squarespace-cdn.com/content/v1/624b3c6dfa94ce68f1db3837/1649097845765-JMOLHVDOBVZL01JT09FI/Group+95.jpg?format=1500w",
  
  },
]

export default function page() {

    // HOOKS

    const images = imagesData.map(function(image, index) {
      return (
          <div key={index} className="align-middle">
              <div>
                  <img src={image.image} alt={image.image} />
              </div>
              <div className="flex items-center justify-center font-medium text-sm">{image.title}</div>
          </div>
      )
  })



  return (
    <div className="bg-white text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 row-start-2 items-center sm:place-items-center font-light text-6xl ">
          <div className="grid grid-cols-3 gap-6 space-y-35">
                {images}
            </div>
        </main>
    </div>
  )
}
