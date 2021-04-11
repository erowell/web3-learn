# eth-swap-tutorial

A tutorial from DApp University for setting up a cryptocurrency exchange.

## DApp Univesity blockchain tutorial video

https://www.youtube.com/watch?v=99pYGpTWcXM

## Setup (macOS)

1. Install Xcode, launch, and accept the T&C

2. Install Node (via nvm)

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    nvm install 9.10.0
    ```

3. Install Ganache (Truffle Suite, one-click blockchain that runs locally)

    Download, install, and run: https://www.trufflesuite.com/ganache

4. Install Truffle framework (Smart contract dev framework to create Ethereum contracts with the Solidity language. It can also write tests against the contracts, and deploy them to the blockchain)

    ```
    npm install --g truffle@5.1.14
    ```

5. Clone the starter project

    ```
    git clone https://github.com/dappuniversity/eth_swap eth-swap
    ```

6. Install identicon lib

    ```
    npm install --save identicon.js@^2.3.3
    ```

7. Build and deploy a custom ERC-20 token: TODO

## Credits

https://github.com/dappuniversity/eth_swap  
https://www.youtube.com/channel/UCY0xL8V6NzzFcwzHCgB8orQ