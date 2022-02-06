//load dependencies
const { expect } = require('chai');

// Load compiled artifacts
const TokenComrade = artifacts.require('TokenComrade');

// Start test block
contract('TokenComrade', function () {
    beforeEach(async function () {
        // Deploy a new TokenComrade contract for each test
        this.tokencomrade = await TokenComrade.new();
    });

    // Test case
    it('createEvent creates a ticketed event', async function () {
        //create an event
        await this.tokencomrade.createEvent(50,"Concert",2);

        // Test if the returned value is [Object object] I guess
        //note need strings to compare 256 bit integers
        expect((await this.tokencomrade.mint()).toString()).to.equal('object Object');
    })
})