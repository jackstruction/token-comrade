module.exports = async function main (callback) {
    try {
        // Our code will go here
        // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        // Set up a Truffle contract, representing our deployed tokencomrade instance
        const TokenComrade = artifacts.require('TokenComrade');
        // Call the function of the deployed tokencomrade contract
        const tokencomrade = await TokenComrade.deployed();
        const value = await tokencomrade.createEvent(50, "Concert", 5);
        console.log(value.toString());
        console.log(accounts)

        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }

};

