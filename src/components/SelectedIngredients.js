import React from 'react'

function SelectedIngredients({ selected, onRemoveSelected, onFindRecipe }) {
    return (
        <section className='max-w-7xl mx-auto mt-10'>
            <h1 className='font-medium text-3xl'>Your selected ingredients</h1>

            <div className='flex flex-col gap-10'>
                <div className=''>
                    <ul className='shadow-md mt-5 rounded bg-slate-100 text-gray-900 p-4 min-h-[300px] max-h-96 max-w-xl overflow-y-auto'>
                        {selected.map((ingredientName, id) => (
                            <li key={id} className='flex space-x-2 items-center'>
                                <span>{ingredientName}</span>
                                <button
                                    className='border border-gray-500'
                                    onClick={() => onRemoveSelected(id)}
                                >
                                    <span className=''>x</span>
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>

                <div className=''>
                    <button
                        onClick={onFindRecipe}
                        className='p-4 border shadow-md text-gray-600 hover:text-gray-700 font-medium bg-slate-200 hover:bg-slate-300 rounded-md transition-all duration-300'>
                        Find recipes
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SelectedIngredients