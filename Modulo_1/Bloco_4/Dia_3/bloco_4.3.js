let qtd = 5;
let qtdAsterisks = 5;
let char = '*';
let space = ' ';

let arr = [];

for (let line = 0; line <= qtd; line++) {
  console.log(char.repeat(line))
}
for (let column = 0; column <= qtd; column++) {
  console.log('x'.repeat(column))
}

// for (let i = 0; i <= line; i++) {
//   exp = line - (i + 1);
//   if (exp >= 0) {
//     console.log(" ".repeat(exp), "*".repeat(i))
//   }
// }


// for (let i = 0; i < line; i++) {
//   console.log(' '.repeat(line - i), char.repeat(i + 1));
// }
