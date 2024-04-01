function primeNum(start,end){
    let prime = [];//initialize an empty array to store the generated the generated numbers
    for(let i =start; i < end; i++){ //for loop used to iterate between the start and the end
        if (isprime(i)){
            prime.push(i);//adds the number into the array formed
        }
    }
    return prime;
}
function isprime(num){//the two functions are dependent on each other
    if(num <= 1)return false;//returns false if it does not align with the condition given
    for(let i = 2; i <= Math.sqrt(num); i++){//iterate through the numbers
        if (num%i === 0){
            return false;
        }
    }
    return true;//if the for loop returns a true statement meaning its input is a prime number
}
const results = primeNum(2,10)//results will be between the numbers included
console.log(results)//gives the final result