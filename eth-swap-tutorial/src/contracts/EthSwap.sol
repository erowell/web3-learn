pragma solidity ^0.5.0;

import "./Token.sol";

contract EthSwap {
    // The name is stored on the blockchain because the
    // public modifier makes it a 'state variable'
    string public name = "EthSwap Instant Exchange";

    // The Token smart contract
    Token public token;

    // Redemption rate = # of tokens they receive for 1 ether
    uint256 public rate = 100;

    // A TokensPurchased event will be emitted after buy transfer
    event TokensPurchased(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );

    // A TokensPurchased event will be emitted after sell transfer
    event TokensSold(
        address account,
        address token,
        uint256 amount,
        uint256 rate
    );

    // The Token contract is passed in on create
    constructor(Token _token) public {
        token = _token;
    }

    // Sender exchanges ETH for Tokens
    function buyTokens() public payable {
        // Calculate the number of tokens to buy
        // tokenAmount = ETH in the message * Redemption rate
        uint256 tokenAmount = msg.value * rate;

        // Validation logic. Cannot buy more than exists in this exchange
        require(token.balanceOf(address(this)) >= tokenAmount);

        token.transfer(msg.sender, tokenAmount);

        // Emit an event (acts like a return value for the method caller)
        emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);
    }

    // Sender exchanges Tokens for ETH
    function sellTokens(uint256 _tokenAmount) public payable {
        // Validation logic. Cannot sell more tokens than they have.
        require(token.balanceOf(msg.sender) >= _tokenAmount);

        // Calculate the amount of Ether to redeem
        uint256 etherAmount = _tokenAmount / rate;

        // Require that EthSwap has enough Ether
        require(address(this).balance >= etherAmount);

        // Perform sale
        token.transferFrom(msg.sender, address(this), _tokenAmount);
        msg.sender.transfer(etherAmount);

        // Emit an TokensSold event
        emit TokensSold(msg.sender, address(token), _tokenAmount, rate);
    }
}
