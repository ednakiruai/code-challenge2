const startNum = -1
const endNum = 10
function anArray(start,end){//generate an array of numbers between two given numbers
    let array =[];//initialize an empty array to store the generated numbers
    for (let i = start; i <=end; i++)//loops from the start number to the end number
    { array.push(i);//adds each number to the array
    }
    return array;//returns the new array
}
const resultArray = anArray(startNum,endNum);
console.log(resultArray);//gives the final result
