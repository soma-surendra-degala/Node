const fs=require('fs');

const readStream=fs.createReadStream('./doc/blog3.txt',{encoding:'utf8'})
const writeStream=fs.createWriteStream('./doc/blog4');

// readStream.on('data',(chunk)=>{
//     console.log("------New Chunk---------");
//     console.log(chunk);
//     writeStream.write('\n New Chunk \n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);