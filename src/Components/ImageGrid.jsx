import React from 'react'

const ImageGrid = ({images}) => {
  return (
    <div>
      <div className="p-2 lg:flex overflow-hidden flex-wrap mx-32">
      {images.map((image) => (
        <div key={image.id} className="p-2 mx-2 shadow-lg rounded-md from-black mt-4">
          <img className='p-4 w-80 h-72'
          src={image.previewURL} alt={image.tags} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default ImageGrid
