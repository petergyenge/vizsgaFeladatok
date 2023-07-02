function getSiteName(str: string): string{
    let newString = ""
    let result = ""
    let i = 0
    while(str[i] !== "."){
        i++
    }
     let j = 0
    while(str[j] + str[j + 1] !== "//"){
        j++
    }
    let k = 0
    while(str[k] !== undefined){
        if(k > (j+1) && k < i){
            newString += str[k]
        }
        k++
    }
    let l = 0
    while(newString[l] !== undefined){
        if(l === 0){
            result += newString[l].toUpperCase()
        }else{
            result += newString[l]
        }
        l++
    }
    return result
}

let test = getSiteName("https://codecool.com/")
console.log(test)

let test2 = getSiteName("https://twitter.com/ ")
console.log(test2)

let test3 = getSiteName("http://nemzetisport.hu/")
console.log(test3)


export{}