// a) 1, 3, 5, 7...   Soma por 2 a cada elemento

const sequenceA = [1, 3, 5, 7];
const nextNumbersA = [];

for (let i = 0; i < 4; i++) {
    const nextNumberA = sequenceA[sequenceA.length - 1] + 2;
    sequenceA.push(nextNumberA);
    nextNumbersA.push(nextNumberA);
}

console.log(`a) ${sequenceA.join(', ')}`);

// b) 2, 4, 8, 16, 32, 64...  Multiplicação por 2 a cada elemento

const sequenceB = [2, 4, 8, 16, 32, 64];
const nextNumbersB = [];

for (let i = 0; i < 4; i++) {
    const nextNumberB = sequenceB[sequenceB.length - 1] * 2;
    sequenceB.push(nextNumberB);
    nextNumbersB.push(nextNumberB);
}

console.log(`b) ${sequenceB.join(', ')}`);

// c) 0, 1, 4, 9, 16, 25, 36...   Quadrados perfeitos dos números inteiros

const sequenceC = [0, 1, 4, 9, 16, 25, 36];
const nextNumbersC = [];

for (let i = 7; i < 11; i++) {
    const nextNumberC = i * i;
    sequenceC.push(nextNumberC);
    nextNumbersC.push(nextNumberC);
}

console.log(`c) ${sequenceC.join(', ')}`);


// d) 4, 16, 36, 64...   Quadrado de números pares começando do 2

const sequenceD = [4, 16, 36, 64];
const nextNumbersD = [];

for (let i = 10; i <= 16; i += 2) {
    const nextNumberD = i * i;
    sequenceD.push(nextNumberD);
    nextNumbersD.push(nextNumberD);
}

console.log(`d) ${sequenceD.join(', ')}`);

// e) 1, 1, 2, 3, 5, 8...   Fibonacci

const sequenceE = [1, 1, 2, 3, 5, 8];
const nextNumbersE = [];

for (let i = 0; i < 4; i++) {
    const nextNumberE = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];
    sequenceE.push(nextNumberE);
    nextNumbersE.push(nextNumberE);
}

console.log(`e) ${sequenceE.join(', ')}`);

// f) 2,10, 12, 16, 17, 18, 19...    Números que começam com a letra D

const sequenceF = [2, 10, 12, 16, 17, 18, 19];
const nextNumbersF = [200, 201, 202, 203];

sequenceF.push(...nextNumbersF);

console.log(`f) ${sequenceF.join(', ')}`);
