function getFibonacciSeries(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series[i] = series[i-1] + series[i-2];
    }
    return series.slice(0, n);
}

function promptForNumber() {
    let input = prompt("Enter a number for the Fibonacci series:");
    let number = parseInt(input);

    if (isNaN(number) || number <= 0) {
        alert("Error: Please enter a valid positive number.");
        return promptForNumber();
    }

    return number;
}

function displayResult(series) {
    console.log(series.join(", "));
    
}

function main() {
    let number = promptForNumber();
    let fibonacciSeries = getFibonacciSeries(number);
    displayResult(fibonacciSeries);
}

main();