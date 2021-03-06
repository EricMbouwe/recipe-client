import React from 'react'
import IngredientSearchInput from './IngredientSearchInput'

function Header({ onSelectIngredient, ingredientData, onSearchIngredient }) {
    return (
        <header className='bg-gray-900 p-5 sticky top-0'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <h1 className='text-4xl text-slate-200 font-semibold'>Recipe Finder</h1>
                <IngredientSearchInput onSelectIngredient={onSelectIngredient} ingredientData={ingredientData} onSearchIngredient={onSearchIngredient} />
            </div>
        </header>
    )
}

export default Header