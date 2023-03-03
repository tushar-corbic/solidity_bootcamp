// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "./SimpleStore.sol";

contract ExtraStorage is SimpleStorage{
    function store(uint256 _favouriteNumber) public override{
        favouriteNumber = _favouriteNumber+5;
    }
}