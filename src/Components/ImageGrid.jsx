import React from 'react'
import Shimmer from '../Utils/Shimmer'

const ImageGrid = ({images}) => {

  return (
    <div>
      <div className="p-2 lg:flex overflow-hidden flex-wrap lg:mx-28">
      {images && images.length > 0 ? (
      images.map((image) => (
        <div key={image.id} className="p-2 mx-4 shadow-2xl rounded-md from-slate-950 mt-4">
          <img className='p-4 w-80 h-72'
          src={image.previewURL} alt={image.tags} />
        </div>
      ))
      ) : (<Shimmer />
    )}
    </div>
    </div>
  )
}

export default ImageGrid
