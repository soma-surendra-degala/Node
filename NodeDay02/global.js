console.log(global);

setTimeout(()=>{
    console.log("Oops! Time out");
    clearInterval(run);
},5000)

const run = setInterval(()=>{
    console.log("I am Running")
},1000);

console.log(__filename);
console.log(__dirname);