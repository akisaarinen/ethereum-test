const fs = require('fs');
const Web3 = require('web3');

const address = "0x33736e8f63dc85f8a7ed8858ab8ee381faf66c81"

// Connect to local Ethereum node, run it with geth --unlock
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Load compiled source code, requires running build before deploy
const json = JSON.parse(fs.readFileSync('build/contracts/CookieJar.json'));
console.log(json);

web3.eth.getCoinbase().then((coinbase) => {
    const contract = new web3.eth.Contract(json.abi, address, {
        from: coinbase
    });

    contract.methods.put().send({ 
        from: coinbase,
        value: 10
    })
    .on('transactionHash', function(hash){
        console.log("Hash: " + hash);
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log("confirmation");
        console.log(confirmationNumber);
        console.log(receipt);
    })
    .on('receipt', function(receipt){
        console.log(receipt);
    })
    .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.    
});