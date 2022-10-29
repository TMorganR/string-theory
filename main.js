/*

*/

//yellingChars

function yellingChars(str){
    let newStr = ""

    for(let i = 0; i < str.length; i++){
        newStr += sre[i]
        newStr += '!'
    }
    return newStr
}
console.log(yellingChars('Goodness'))
console.log(yellingChars('Oh hello'))

/*

*/

//indexedChars

function indexedChars(str2){

    let newStr1 = ""
    for(let i = 0; i < str2.length; i++){
        newStr1 += 1
        newStr1 += str2[i] 
    }
    return newStr1
}

console.log(indexedChars("Hello"))

/*

*/


//exclaim

function exclaim(str){
    let newStr = ""

    for(let i = 0; i < str.length; i++){

        if(str[i] === "?" || str[i] === "."){
            newStr += "!"
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(exclaim('What are yiu doing? Are you crazy?'))
console.log(exclaim("This is fine."))

/*

*/


//ciEmailify

function ciEmailify(str){
    let newStr = ""

    for(let i = 0; i < str.length; i++){

        if(str[i] === " "){
            newStr += "."
        } else {
            newStr += str[i]
        }
    }
    return newStr.toLowerCase() + "@codeimmersives.com"
}

console.log(ciEmailify('ricky bobby'))
console.log(ciEmailify("Bobby Flay"))

/*

*/


//reverse

function reverse(str){
    let backString = ""

    for(let i = str.length-1; i >= 0; i--){
        backString -= str[i]
    }
    return backString
}

console.log(reverse('ricky bobby'))
console.log(reverse("Bobby Flay"))

/*

*/

//onlyVowels

function onlyVowels(str){
    let newStr = ""

    for(let i = 0; i < str.length; i++){

        if(str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e"
         || str.toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u"){
            newStr += str[i]
         }
    }
    return newStr
}

console.log(onlyVowels('ricky bobby'))
console.log(onlyVowels("Bobby Flay"))
console.log(onlyVowels("No shot"))