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
    originalLanguage: "english",
    length: 12,
  },
  {
    title: "Titanic",
    genre: "drama",
    originalLanguage: "english",
    length: 180,
  },
  {
    title: "aceve",
    genre: "comedy",
    originalLanguage: "dsa",
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
    originalLanguage: "english",
    length: 200,
  },
  {
    title: "Ace Ventura 3",
    genre: "comedy",
    originalLanguage: "english",
    length: 1000,
  },
];

function getLongestEnglishComedy(arr: Movie[]): string | null {
  let newArray: Movie[] = [];
  let i = 0;
  while (arr[i] !== undefined) {
    if (arr[i].genre === "comedy" && arr[i].originalLanguage === "english") {
      newArray = [...newArray, arr[i]];
    }
    i++;
  }
  if (newArray === undefined) return null;

  let longest = 0;
  let lastIndex = 0;
  i = 0;
  while (newArray[i] !== undefined) {
    if (newArray[i].length > longest) {
      longest = newArray[i].length;
      lastIndex = i;
    }
    i++;
  }

  return newArray[lastIndex].title;
}

let test = getLongestEnglishComedy(movies);
console.log(test);

export {};
