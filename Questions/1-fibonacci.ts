import * as readline from 'readline';

function fibonacciSequenceUpTo(num: number): { sequence: number[], isFibonacci: boolean } {
    if (num < 0) return { sequence: [], isFibonacci: false };

    let a = 0, b = 1;
    const sequence = [a];
    while (a < num) {
        [a, b] = [b, a + b];
        sequence.push(a);
    }

    const isFibonacci = sequence.includes(num);
    return { sequence, isFibonacci };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe um número: ', (input) => {
    const num = parseInt(input, 10);
    if (isNaN(num)) {
        console.log("Por favor, informe um número válido.");
    } else {
        const { sequence, isFibonacci } = fibonacciSequenceUpTo(num);
        console.log(`Sequência de Fibonacci até ${num}: ${sequence.join(', ')}`);
        console.log(isFibonacci ? "O número informado pertence à sequência de Fibonacci." : "O número informado não pertence à sequência de Fibonacci.");
    }
    rl.close();
});