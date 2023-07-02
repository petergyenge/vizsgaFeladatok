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
        originalLanguage: "ensglish",
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
        originalLanguage: "englsish",
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
        originalLanguage: "englsish",
        length: 1000,
    },
];

function getLongestEnglishComedy(arr: Movie[]): string | null {
    let result = null;
    let newArray: Movie[] = [];
    let i = 0;
    while (arr[i] !== undefined) {
        if (arr[i].genre === "comedy" && arr[i].originalLanguage === "english")
            newArray = [...newArray, arr[i]];
        i++;
    }
            // let sortedArray: Movie[] = [];
            // let j = 0
            // while(newArray[j] !== undefined){
            //     if(newArray[j].length > newArray[j + 1].length){
            //         sortedArray = newArray
            //     }
            //     j++
            // }
    // let j = 0;
    // let shorter: boolean = false;
    // while (newArray[j] !== undefined) {
    //     let k = 0;
    //     while (newArray[k + 1] !== undefined) {
    //         if (newArray[k].length > newArray[k + 1].length) {
    //             shorter = true;
    //         }
    //         k++;
    //     }
    //     if (shorter !== false) {
    //         sortedArray = [...sortedArray, newArray[j]];
    //     }
    //     j++;
    //     shorter = false
    //}

    return result;
}

let test = getLongestEnglishComedy(movies);
console.log(test);


export{}