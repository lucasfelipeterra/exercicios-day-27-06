const prompt = require('prompt-sync')({ sigint: true });

const numer = parseInt(prompt("Digite um numero :"));

  if (isNaN(numer) || numer < 0) {
    console.log('Por favor, digite um número inteiro não negativo.');
  } else {
    let result = 1;
    for (let i = 2; i <= numer; i++) {
      result *= i;
    }
    console.log(`O fatorial de ${numer} é ${result}.`);
  }

