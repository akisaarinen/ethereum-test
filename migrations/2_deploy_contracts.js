var CookieJar = artifacts.require("./CookieJar.sol");

module.exports = function(deployer) {
    deployer.deploy(CookieJar);
};