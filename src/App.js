import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SelectedIngredients from './components/SelectedIngredients';

function App() {
  return (
    <>
      <Header />
      <main className='px-5'>
        <SelectedIngredients />
        <RecipeList />
      </main>
    </>
  );
}

export default App;
