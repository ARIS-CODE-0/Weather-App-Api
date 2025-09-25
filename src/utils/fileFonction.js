const fs = require('fs');
const path = require('path');


function readFile(name) {
    const filePath = path.join(__dirname,'../data',`${name}.json`);
    const file = fs.readFileSync(filePath,'utf-8');
    const data = JSON.parse(file);
    
    return data
}

function writeFile(name,data) {
    const filePath = path.join(__dirname,'../data',`${name}.json`);
    const contenu = JSON.stringify(data,null,2)
    fs.writeFileSync(filePath,contenu)

    return true
}



module.exports = { readFile, writeFile }