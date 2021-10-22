const fs=require('fs');

// file exists korle update na thakle create kore 
// fs.writeFileSync('read.txt',"welcome");
// append kore 
// fs.appendFileSync('read.txt',"hii") 
// it returns buffer data that stores data in binary format it cracks in packet 
const data=fs.readFileSync('read.txt');
console.log(data)

// this returns in actual form 
org_data=data.toString();
console.log(org_data);

fs.unlinkSync('read.txt')
