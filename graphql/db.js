let movies = [
  {
    id: 1,
    name: "Star Wars - The New One",
    score: 0.1
  },
  {
    id: 2,
    name: "Avengers - The New One",
    score: 0.1
  },
  {
    id: 3,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 4,
    name: "Logan",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredPeople = movies.filter(movie => movie.id === id);
  return filteredPeople[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
