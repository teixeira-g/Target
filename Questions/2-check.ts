// Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

import * as readline from 'readline';

function checkLetterA(str: string): void {
    const regex = /a/gi;
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe uma string: ', (inputString) => {
    checkLetterA(inputString);
    rl.close();
});