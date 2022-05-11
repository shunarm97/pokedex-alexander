import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
import ProtectedPages from './pages/ProtectedPages';
import Pokemon from './pages/Pokemon';
import Encounters from './pages/Encounters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login/>}  />
          <Route element={<ProtectedPages/>} >
          <Route path='/pokedex' element={<PokemonList/>}/>
           <Route path='/pokedex/:id' element={<Pokemon/>}/>
           <Route path='/pokedex/:id/encounters' element={<Encounters/>}/>
          </Route>
          <Route path='/pokedex/settings'/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
