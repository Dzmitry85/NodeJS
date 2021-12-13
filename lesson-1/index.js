const fs = require('fs');
const readline = require('readline')


const readFile = fs.createReadStream('./access.log', 'utf8');

const data = process.argv[2];
const recordFile = fs.createWriteStream(`${data}` + '_requests.log')



const rl = readline.createInterface({
    input: readFile,


});

rl.on('line', (line) => {


    if (line.includes(data)) {
           recordFile.write(line + "\n")
        console.log('чтение данных')

}
 });



