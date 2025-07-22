 const a = require('./people');

console.log(a)

const a = require('./people');

console.log(a.people,a.age)

const {people,age} = require('./people');

console.log(people,age)

const os = require('os')

console.log(os.platform(),os.homedir())