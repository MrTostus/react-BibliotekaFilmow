import { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import './App.css';

function App() {
  // 1. Stan movies - początkowo pusta tablica
  const [movies, setMovies] = useState([]);
  // 5. Osobny stan na wartość inputa
  const [title, setTitle] = useState('');

  // 2. Po pierwszym renderze ustawiamy trzy domyślne filmy
  useEffect(() => {
    setMovies([
      { id: crypto.randomUUID(), title: 'Shrek' },
      { id: crypto.randomUUID(), title: 'Król Lew' },
      { id: crypto.randomUUID(), title: 'Toy Story' },
    ]);
  }, []);

  // 6. Dodanie filmu na koniec listy bez mutowania istniejącej tablicy
  const handleAddMovie = () => {
    const trimmed = title.trim();
    if (trimmed === '') return;

    setMovies((prevMovies) => [
      ...prevMovies,
      { id: crypto.randomUUID(), title: trimmed },
    ]);
    setTitle('');
  };

  return (
    <>
      <Header />
      <div>
        <input
          placeholder="Wpisz tytuł filmu..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddMovie()}
        />
        <button onClick={handleAddMovie}>Dodaj film</button>
      </div>
      {/* 3. Lista filmów przekazana propsem */}
      <MovieList movies={movies} />
    </>
  );
}

export default App;
