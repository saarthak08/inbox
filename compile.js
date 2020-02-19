const path = require('path'); //Path acquiring irrespective of OS
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');  //Path aquiring

const source = fs.readFileSync(inboxPath, 'UTF-8'); //reading the file


var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

//console.log(JSON.stringify(output,null,'\t')); //Pretty Console Output

//console.log(output.contracts['Inbox.sol']);
//console.log(output.contracts['Inbox.sol']['Inbox']);

module.exports = output.contracts['Inbox.sol']['Inbox'];