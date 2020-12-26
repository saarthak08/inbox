pragma solidity >=0.7.0 <0.8.0;

contract Inbox {
    string public message;
    
    constructor(string memory initialMessage) {
        message=initialMessage;
    }
    
    function setMessage(string calldata newMessage) public {
        message=newMessage;
    }
    
    
}  