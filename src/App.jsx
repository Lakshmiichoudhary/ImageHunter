import { useEffect, useState } from "react"
import Header from "./Components/Header"
import ImageGrid from "./Components/ImageGrid"
import Footer from "./Components/Footer"

function App() {
  const [images,setImages] = useState([])

  useEffect(()=>{
    const storedImages = localStorage.getItem("images");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    } else {
      searchImage("");
    }
  },[])

  const searchImage = async (query) => {
      try{
        const response = await fetch(`https://pixabay.com/api/?key=43345050-ff5d45d50bdf7cc7090713bf4&q=${encodeURIComponent(query)}`)
        const json = await response.json()
        //console.log(json)
          setImages(json.hits);
          localStorage.setItem("images", JSON.stringify(json.hits));
      }catch(error){
        console.error("error while fetching image:",error)
      }
  } 

  return (
    <>
      <Header onSearch={searchImage}/>
      <ImageGrid images={images} />
      <Footer />
    </>
  )
}

export default App
