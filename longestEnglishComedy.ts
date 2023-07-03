type Movie = {
  title: string;
  genre: string;
  originalLanguage: string;
  length: number;
};

let movies: Movie[] = [
  {
    title: "Ace Ventura",
    genre: "comedy",
    originalLanguage: "nemet",
    length: 12,
  },
  {
    title: "Titanic",
    genre: "drama",
    originalLanguage: "nemet",
    length: 180,
  },
  {
    title: "aceve",
    genre: "comedy",
    originalLanguage: "english",
    length: 200,
  },
  {
    title: "Ace Ventura 2",
    genre: "comedy",
    originalLanguage: "english",
    length: 8,
  },
  {
    title: "Titanic",
    genre: "dsa",
    originalLanguage: "nemet",
    length: 200,
  },
  {
    title: "Ace Ventura 3",
    genre: "comedy",
    originalLanguage: "english",
    length: 1000,
  },
];

function getLongestEnglishComedy(movies: Movie[]): string | null {
  let englishComedies: Movie[] = [];
  let i = 0;
  while (movies[i] !== undefined) {
    if (movies[i].genre === "comedy" && movies[i].originalLanguage === "english") {
      englishComedies = [...englishComedies, movies[i]];
    }
    i++;
  }
/*    if (englishComedies[0] === undefined) return null;

   let longest = 0;
   let lastIndex = 0;
   i = 0;
   while (englishComedies[i] !== undefined) {
     if (englishComedies[i].length > longest) {
       longest = englishComedies[i].length;
       lastIndex = i;
     }
     i++;
   }
 */
  let longest: Movie | null = null
  i = 0;
   while (englishComedies[i] !== undefined) {
     if (!longest || longest.length > englishComedies[i].length) {
       longest = englishComedies[i];
     }
     i++;
   }

  return longest ? longest.title : null;
}

let test = getLongestEnglishComedy(movies);
console.log(test);

export {};
