function min(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

function power(base, exponent) {
    let result = 1
    for (let i = 0; i < exponent; i++) {
        result = result * base
    }
    return result;
}

function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b
    } else if (operator === '-') {
        return a - b
    } else if (operator === '*') {
        return a * b
    } else if (operator === '/') {
        if (b !== 0) {
            return a / b
        } else {
            return 'Ошибка'
        }
    } else {
        return 'Неверный оператор';
    }
}

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

function multiplicationtable(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(n + ' * ' + i + ' = ' + (n * i))
    }
}

for (let i = 2; i <= 9; i++) {
    multiplicationtable(i)
}

function mod(a, b) {
    let quotient = Math.floor(a / b)
    let result = a - (b * quotient)
    return result
}

function sum() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i]
    }
    return total
}

function maxNumber() {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

console.log(min(5, 8))
console.log(power(2, 3))
console.log(calculate(5, 2, '+'))
console.log(isPrime(17))
console.log(mod(17, 5))
console.log(sum(1, 2, 3))
console.log(maxNumber(3, 7, 2, 9))
function printEvenOrOdd(start, end, even) {
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i <= end; i = i + 1) {
        if (even === true) {
            if (i % 2 === 0) {
                console.log(i);
            }
        } else {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else {
        if (year % 100 === 0) {
            return false;
        } else {
            if (year % 4 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function nextDay(day, month, year) {
    let daysInMonth;

    if (month === 1) {
        daysInMonth = 31;
    } else if (month === 2) {
        if (isLeapYear(year) === true) {
            daysInMonth = 29;
        } 
        else {
            daysInMonth = 28;
        }
    }
     else if (month === 3) {
        daysInMonth = 31;
    } 
    else if (month === 4) {
        daysInMonth = 30;
    }
     else if (month === 5) {
        daysInMonth = 31;
    } 
    else if (month === 6) {
        daysInMonth = 30;
    } else if (month === 7) {
        daysInMonth = 31;
    } 
    else if (month === 8) {
        daysInMonth = 31;
    } 
    else if (month === 9) {
        daysInMonth = 30;
    } 
    else if (month === 10) {
        daysInMonth = 31;
    } 
    else if (month === 11) {
        daysInMonth = 30;
    } 
    else if (month === 12) {
        daysInMonth = 31;
    } 
    else {
        return 'Неверный месяц';
    }

    day = day + 1;

    if (day > daysInMonth) {
        day = 1;
        month = month + 1;

        if (month > 12) {
            month = 1;
            year = year + 1;
        }
    }

    let dd;
    if (day < 10) {
        dd = '0' + day;
    } else {
        dd = '' + day;
    }

    let mm;
    if (month < 10) {
        mm = '0' + month
    } else {
        mm = '' + month
    }

    let yyyy = '' + year

    return dd + '.' + mm + '.' + yyyy
}

console.log(nextDay(28, 2, 2020));