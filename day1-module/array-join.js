function joinArrays(a1, prop1, a2, prop2) {
  // TODO: return an array with the joined objects from a1 and a2, joined on prop1 values in a1 matching prop2 values in a2.
  return a1.map( item1 => {
    const match = a2.filter( item2 => item1[prop1] === item2[prop2] )[0];
    return Object.assign({}, item1, match)
  });
}

const directors = [
  { id: 11, name: 'George Lucas' },
  { id: 12, name: 'James Cameron' },
  { id: 13, name: 'Steven Spielberg' },
  { id: 14, name: 'Ridley Scott' },
];

const movies = [
  { id: 1, title: 'Star Wars', directorId: 11 },
  { id: 2, title: 'Terminator', directorId: 12 },
  { id: 3, title: 'Blade Runner', directorId: 14 },
  { id: 4, title: 'Raiders of the Lost Ark', directorId: 13 },
  { id: 5, title: 'Jaws', directorId: 13 }
];

const moviesWithDirectors = joinArrays(movies, 'directorId', directors, 'id');
console.log(moviesWithDirectors);
