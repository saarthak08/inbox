pragma solidity ^0.6.1;

contract Inbox {
    string public message;

    constructor(string memory initial_message) public {
        message = initial_message;
    }

    function setMessage(string memory new_message) public {
        message = new_message;
    }

    function getMessage() public view returns(string) {
        return message;
    }

}