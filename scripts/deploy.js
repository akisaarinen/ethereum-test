const fs = require('fs');
const Web3 = require('web3');

const gas = 200000 // Based on local test

// Connect to local Ethereum node, run it with geth --unlock
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Load compiled source code, requires running build before deploy
const json = JSON.parse(fs.readFileSync('build/contracts/CookieJar.json'));
console.log(json);

web3.eth.getCoinbase().then((coinbase) => {
    const contract = new web3.eth.Contract(json.abi, {
        gas: gas
    });

    console.log(json.bytecode);

    contract.deploy({
        data: json.bytecode        
    })
    .send({
        from: coinbase,
        gas: gas,
        gasPrice: gasPrice
    }, (error, transactionHash) => {
        console.log("Error: " + error);
        console.log(error);
        console.log("TransactionHash: " + transactionHash);
        console.log(transactionHash);
    })
    .on("error", (err) => {
        console.log("Error");
        console.log(err);
    })
    .then((newContractInstance) => {
        console.log("New instance received");
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
});