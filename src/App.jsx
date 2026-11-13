import { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setMovies([
      { id: crypto.randomUUID(), title: 'Shrek' },
      { id: crypto.randomUUID(), title: 'Król Lew' },
      { id: crypto.randomUUID(), title: 'Toy Story' },
    ]);
  }, []);

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
      <MovieList movies={movies} />
    </>
  );
}

export default App;
