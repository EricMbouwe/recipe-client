import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SelectedIngredients from './components/SelectedIngredients';
import useFetch from './utils/useFetch';

function App() {
  const [selectedIngrendients, setSelectedIgredients] = useState([])
  const [recipes, setRecipes] = useState([])
  const [ingredientData, setIngredientData] = useState([])

  const ingredientLocalUrl = '/api/v1/ingredients'
  // const ingredientProdUrl = 'http://futa-recipe-api.herokuapp.com/api/v1/ingredients'

  const recipeLocalUrl = '/api/v1/recipes'
  // const recipeProdUrl = 'http://futa-recipe-api.herokuapp.com/api/v1/recipes'

  const { data, loading } = useFetch(ingredientLocalUrl)

  useEffect(() => {
    if (data.length) {
      setIngredientData(data)
    }
  }, [data])

  const searchIngredient = (searchValue) => {
    const sanitizeStr = searchValue.trim()

    if (!sanitizeStr) {
      console.log('Set default ingredient list')
      return setIngredientData(data)
    }

    console.log('Call api to request the search ingred: ', sanitizeStr)
    // api post req
    // setIngredientData(req response)
  }

  const selectAnIngredient = (name) => {
    const newList = [...selectedIngrendients, name]
    const uniques = [...new Set(newList)]
    setSelectedIgredients(uniques)
  }

  const removeAnIngredient = (idx) => {
    const newList = selectedIngrendients.filter((_elt, id) => id !== idx)
    setSelectedIgredients(newList)
  }

  const findRecipes = (ingredients) => {
    setRecipes([])
  }

  return (
    <>
      <Header onSelectIngredient={selectAnIngredient} ingredientData={ingredientData} onSearchIngredient={searchIngredient} />
      {
        loading ?
          <div className='h-screen overflow-hidden flex items-center justify-center'>
            <p className='animate-spin'>Loading...</p>
          </div>
          :
          (<main className='px-5'>
            <SelectedIngredients selected={selectedIngrendients} onRemoveSelected={removeAnIngredient} onFindRecipe={findRecipes} />
            <RecipeList recipes={recipes} />
          </main>)
      }
    </>
  );
}

export default App;
