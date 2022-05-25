import IngredientList from './IngredientList'

function IngredientSearchInput({ onSelectIngredient, ingredientData, onSearchIngredient }) {

    const handleChange = (e) => {
        const val = e.target.value
        onSearchIngredient(val)
    }

    return (
        <div className='relative min-w-[500px]'>
            <input
                className='py-2 px-4 w-full border border-slate-400 rounded-md shadow-md focus:outline-none'
                type="text"
                id="ingredientName"
                name="ingredientName"
                placeholder='Please choose your ingredients'
                onChange={handleChange}
                autoComplete="off"
            />
            {ingredientData.length > 0 && <IngredientList data={ingredientData} onSelectIngredient={onSelectIngredient} />}
        </div>
    )
}

export default IngredientSearchInput