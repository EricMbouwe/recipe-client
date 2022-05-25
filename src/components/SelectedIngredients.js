import React from 'react'

function SelectedIngredients() {
    return (
        <section className='max-w-7xl mx-auto mt-10'>
            <h1 className='font-medium text-2xl'>Your selected ingredients</h1>

            <div className='flex items-center gap-10'>
                <div className='flex-1'>
                    <ul className='shadow-md mt-5 rounded bg-slate-200 text-gray-900 p-4 min-h-[400px]'>
                        <li className='flex space-x-2 items-center'>
                            <span>Selected ingredient one</span>
                            <button
                                className='border border-gray-500'
                            >
                                <span className=''>x</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='flex-1'>
                    <button
                        className='p-4 border shadow-md text-gray-600 hover:text-white font-medium bg-slate-300 hover:bg-slate-400 rounded-md transition-all duration-300'>
                        Find recipes
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SelectedIngredients