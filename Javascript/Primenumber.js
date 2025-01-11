//Prime Numbers

const dili = (dr)=>{
    for (i = 2; i <=Math.sqrt(dr); i++)
    {
        if (dr % 2 == 0) return false
    }
    return true
};

console.log("result", dili(13));
console.log("result", dili(12));


const dini = (d)=>{
for (i=2; i <=Math.sqrt(d); i++)
{
    if(d % 2 == 0) return false
} return true
};
console.log("result", dini(2))


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0) 
            return false;
    } return true
};

console.log(isPrime(12));



function findPrimeInRange(start, end) {
    const primes = [];
    for (let i =start; i <= end; i++ ) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(findPrimeInRange(1 , 50));