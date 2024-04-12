import React, { useState } from 'react';

const Header = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            onSearch(query);
        }
    };

    return (
        <div className='p-4 lg:flex shadow-2xl from-slate-950'>
            <h1 className='mx-20 lg:mx-12 font-bold text-2xl'>
                ImageHunter
            </h1>
            <form className='text-center lg:mx-36 flex mt-4 lg:mt-0' onSubmit={handleSubmit}>
                <input 
                    className='p-3 w-80 rounded-l-full bg-slate-900 text-white' 
                    type='text'
                    placeholder='search for image'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button className='p-3 bg-slate-900 text-white rounded-r-full' type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Header;
