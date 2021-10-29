// Task 1

function getSum(arr) {
    return arr = arr.reduce((total, current) => total + current, 0)
}

let testArr = [4, 8, 15, 16, 23, 42];
// console.log(getSum(testArr));

// Task 2

const inputArr = [[1, 2], [3, 4], [5, 6]];
const outputArrExample = [1, 2, 3, 4, 5];

function flatArr1(array) {
    const flated = array.reduce(function (a, b) {
        return a.concat(b);
    })
    return flated;
}

// console.log(flatArr1(inputArr));

function flatArr2(array) {
    const flatedArray = array.flat();
    return flatedArray;
}

// console.log(flatArr2(inputArr));

// Task 3

const users = [
    { id: 1, name: 'Паша', age: 23 },
    { id: 2, name: 'Маргарита', age: 28 },
    { id: 3, name: 'Лёша', age: 34 },
    { id: 4, name: 'Вера', age: 28 }
]

// output example {'23':1, '28':2, '34':1}

function countUniqAge() {
    const result = users.reduce((acc, user) => {
        return { ...acc, [user.age]: (acc[user.age] || 0) + 1 }
    }, {})
    return result;
}

// console.log(countUniqAge(users));

const countUniqAge2 = (obj) => {
    const count = {};

    for (let i of obj) { count[`${i.age}`] !== undefined ? (count[`${i.age}`] += 1) : (count[`${i.age}`] = 1) }
    return count;
}

// console.log(countUniqAge2(users));

// Task 4

const arr1 = [1, 2, 3, 4, 5]

arr1.forEach(element => {
    // console.log(element);
})

for (let element of arr1) {
    // console.log(element);
}

// Task 5

const obj01 = {
    name: 'uno',
    age: 42,
    test: 'testString'
}

const toArrs = (inputObj) => {
    const newArray1 = Object.keys(inputObj)
    const newArray2 = Object.values(inputObj)
    return [].concat([newArray1], [newArray2]);
}

//  console.log(toArrs(obj01));

// Task 6

const person6 = {
    namePerson: 'Uno',
    surname: 'Quatro',
    age: 'js',
    things: {
        current: 50,
        total: 100
    }
}

const person7 = {
    namePerson: 'Uno',
    surname: 'Quatro',
    age: 'js',
    things: {
        current: 50,
        total: 100
    }
}

const { name, type = 'hp', things: { current, total }, ...rest } = person6;
const { namePerson = 'Due' } = person7
const { things: { average = 40 } } = person7
// console.log(name, type);
// console.log(namePerson, rest);
// console.log(namePerson);
// console.log(average);