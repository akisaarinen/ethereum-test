pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CookieJar.sol";

contract TestCookieJar {
  uint public initialBalance = 100 wei;

  function testPutAndSteal() {
    Assert.equal(this.balance, 100 wei, "This test should have initial balance");

    CookieJar jar = CookieJar(DeployedAddresses.CookieJar());    

    jar.put.value(10 wei)();
    Assert.equal(jar.balance,  10 wei, "Contract should have increased balance");
    Assert.equal(this.balance, 90 wei, "Parent balance should have decreased");

    jar.steal();
    Assert.equal(jar.balance,    0 wei, "Contract should have zero balance");
    Assert.equal(this.balance, 100 wei, "Parent balance should have increased");
  }

  function () payable {    
  }
}