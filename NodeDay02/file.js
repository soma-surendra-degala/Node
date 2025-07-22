const fs=require('fs')

//Read the Files

fs.readFile('./doc/blog1.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString());
});
console.log("Last Line")

//Write the Files

fs.writeFile('./doc/blog1.txt','Hii There',()=>{
    console.log('File 1 is written')
})

fs.writeFile('./doc/blog2.txt','This Is Node',()=>{
    console.log('File 2 is written')
})


//To create Folder
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',()=>{
        console.log('Created Folder')
    })
//To Remove Folders
}else{
    fs.rmdir('./assets',()=>{
        console.log('Folder Delete')
    })
}

//To Delete Files
if(!fs.existsSync('./deleteme.txt')){
fs.unlink('./deleteme.txt',()=>{
    console.log('File Delete');
})
}