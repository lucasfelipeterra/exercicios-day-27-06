const prompt = require('prompt-sync')({ sigint: true });



const story = prompt('Conte uma história: ');

const word = story.toLowerCase().match(/\b\w+\b/g); 

const wordFrequency = {};
if (word) {
  word.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });
}

console.log(`A história tem ${word} palavras.`);
console.log('Frequência das palavras:');
for (const word in wordFrequency) {
  console.log(`${word}: ${wordFrequency[word]}`);
}
