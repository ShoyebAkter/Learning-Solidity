//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] public addressArray;
    mapping(address=>uint256) mostWaves;
    constructor() {
        console.log("My first contract and I am smart");
    }

    function wave() public {
        totalWaves+=1;
        console.log("%s have waved",msg.sender);
        addressArray.push(msg.sender);
    }

    function getTotalWaves() public view returns (uint256){
        console.log("We have %d total waves!",totalWaves);
        return totalWaves;
        
    }
    function getArrayAddress() public view returns (address [] memory){
        console.log("Length of array",addressArray.length);
        return addressArray;
    }
}