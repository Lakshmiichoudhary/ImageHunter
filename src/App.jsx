import { useEffect, useState } from "react"
import Header from "./Components/Header"
import ImageGrid from "./Components/ImageGrid"

function App() {
  const [images,setImages] = useState([])

  useEffect(()=>{
    searchImage("")
  },[])

  const searchImage = async (query) => {
      try{
        const response = await fetch(`https://pixabay.com/api/?key=43345050-ff5d45d50bdf7cc7090713bf4&q=${encodeURIComponent(query)}`)
        const json = await response.json()
        console.log(json)
          setImages(json.hits);
      }catch(error){
        console.error("error while fetching image:",error)
      }
  } 

  return (
    <>
      <Header onSearch={searchImage}/>
      <ImageGrid images={images} />
    </>
  )
}

export default App
