//Wyświetlenie filmów
function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li>{movie.title}</li>
      ))}
    </ul>
  );
}

export default MovieList;
