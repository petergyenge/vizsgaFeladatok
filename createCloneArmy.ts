type Clone = { 
    name: string,
    age: number,
    gender: string
  }

let person: Clone = { 
    name: "Jango Fett",
    age: 35,
    gender: "male"
  }

function createCloneArmy(person:Clone, num:number): Clone[] {
    let result: Clone[] = []
    let i = 0
    while(i < num && i <100){
      result = [...result, person]
      i++
    }

    return result
}

let test = createCloneArmy(person, 500)
console.log(test)
export{}