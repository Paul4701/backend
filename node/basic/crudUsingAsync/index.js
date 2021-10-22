const fs=require('fs');

// fs.mkdir('pintu',(e)=>{
//     console.log('folder created'+e);
// });

fs.writeFile('./pintu/bio.txt',"my bame",(e)=>{
    console.log(e)
})