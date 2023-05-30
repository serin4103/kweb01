const getDivisors = num => {
    const divisors = [];
    let i = 1;
    for ( ; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
            divisors.push(i);
            divisors.push(num/i);
    }
    }
    if (num % i == 0) divisors.push(i);
    divisors.sort((first, second) => first - second);
    return divisors;
    };