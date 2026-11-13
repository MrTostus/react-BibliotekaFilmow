// 4. Wyświetlenie filmów jako lista za pomocą .map() z właściwością key
function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default MovieList;
