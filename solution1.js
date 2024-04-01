let alphabets = 'The Quick Brown Fox';
function anArray(){
    let newAlphabets = '';//iterate through each character in the input string
    for(let i = 0; i < alphabets.length; i++){
        if([1,2,5,6,7,8,11,12,13,14,17,18].includes(i)){
            newAlphabets += alphabets[i].toUpperCase();//converts the alphabets to uppercase
        }
        else{
            newAlphabets += alphabets[i].toLowerCase();//converts the alphabets to lowercase
        }
    }
    return newAlphabets;//returns the new string
}
console.log (anArray());//testing the function