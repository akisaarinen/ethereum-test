pragma solidity ^0.4.17;

contract MetaCoin {
    mapping (address => uint) balances;

    function MetaCoin() public {
        balances[msg.sender] = 10000;
    }

    function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
        if (balances[msg.sender] < amount)
            return false;

        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        return true;
    }

    function getBalance(address addr) public view returns(uint) {
        return balances[addr];
    }
}