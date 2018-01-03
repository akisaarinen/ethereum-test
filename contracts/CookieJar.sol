pragma solidity ^0.4.17;

contract CookieJar {
    function CookieJar() public {
    }

    function put() public payable {
        require(msg.value == 10 wei);
    }

    function steal() public {
        uint amount = 10 wei;
        require(this.balance >= amount);
        msg.sender.transfer(amount);
    }
}