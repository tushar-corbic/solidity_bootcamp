// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "./SimpleStore.sol";

contract FactoryStorage{
    SimpleStorage[] simpleStorageArray;

    function createSimpleStorageContract() public{
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
    }
    function sfStore(uint256 _simpleStorateIndex, uint256 _simpleStorageNumber) public{
        simpleStorageArray[_simpleStorateIndex].store(_simpleStorageNumber);
    }
    function sfGet(uint256 _simpleStorageIndex) public view returns(uint256) {
        return simpleStorageArray[_simpleStorageIndex].retrieve();
    }
}