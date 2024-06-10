//tu código aquí
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

function conversion() {
  const quantidad = parseInt(prompt('Entra la quantidad por fa'));
  console.log(
    `${quantidad} metro equivale a ${quantidad * 3} pies y ${
      quantidad * 39.37
    } pulgadas`
  );
}
conversion();
