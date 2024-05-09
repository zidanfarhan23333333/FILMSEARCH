import { getMovieGenres } from "../../api";

const Genres = async () => {
  const result = await getMovieGenres()
  console.log(result);
  return (
    <div>
      <h1>GENRES</h1>
    </div>
  );
};

export default Genres;
