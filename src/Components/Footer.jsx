import React from 'react'

const Footer = () => {
  return (
    <footer className='py-4 text-center text-white bg-slate-950'>
        <p className="text-sm">&copy; 2024 ImageHunter. All rights reserved.</p>
        <div className='flex justify-center mt-2 p-2'>
            <div className='p-2 cursor-pointer mx-4'>
                <h1 className='mt-2'>ImageHunter</h1>
                <h1 className='mt-2'>About</h1>
                <h1 className='mt-2'>Contact Us</h1>
                <h1 className='mt-2'>pixabay</h1>
                <h1 className='mt-2'>API</h1>
            </div>
            <div className='p-2 cursor-pointer mx-4'>
                <h1 className='mt-2'>Image</h1>
                <h1 className='mt-2'>Search</h1>
                <h1 className='mt-2'>HD</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer
