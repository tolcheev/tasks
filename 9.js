// Task 1.

function waitSomething() {
  return new Promise(
    res => setTimeout(res, 1000),
    console.log('Test1')
  )
};

function writeLog() {
  console.log("Test2");
}

async function testing() {
  await waitSomething()
  writeLog()
}

testing();

// another version

function anotherTesting() {
  let promise = new Promise(function (resolve) {
    setTimeout(() => resolve(console.log('test-1-1-1')), 1000)
  })
  promise.then(() => console.log('test-2-2-2'))
}

anotherTesting();


// Task 2 

function wait(timeout) {
  setTimeout(() => {
    console.log('Я вывел текст спустя ' + `${timeout}` + ' мс');
  }, timeout);
}

wait(2000);

// Task 3 

import fetch from "node-fetch";

fetch('https://swapi.dev/api')
  .then(
    result => result.json()
  )
  .then(
    result => console.log(result)
  );