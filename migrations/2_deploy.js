const TokenComrade = artifacts.require('TokenComrade');

module.exports = async function (deployer) {
    await deployer.deploy(TokenComrade);
};