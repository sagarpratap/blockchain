pragma solidity ^0.5.0;

contract Lotteryv2 {
  string public organiser = "TestOrganiser";

  function set(string memory x) public {
    organiser = x;
  }
}