const fs = require('fs');
const path = require('path');

const pathdir = path.join(__dirname,"files");
console.log(pathdir);
fs.writeFileSync(pathdir +"/index.txt","Hello Arman"); 