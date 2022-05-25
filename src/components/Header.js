import React from 'react'
import IngredientSearchInput from './IngredientSearchInput'

function Header() {
    return (
        <header className='bg-gray-900 p-5'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <h1 className='text-4xl text-slate-200 font-semibold'>Recipe Finder</h1>
                <IngredientSearchInput />
            </div>
        </header>
    )
}

export default Header