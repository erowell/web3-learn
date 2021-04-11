# web3-learn
A repository for web3 projects with the goal of understanding blockchain technology and building/deploying an ERC-20 token.

## Blockchain tutorial

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

## Definitions

**Web3** - A set of protocols led by blockchain that intends to reinvent how the Internet is wired in the backend. It combines the logic of the Internet with the logic of the computer. Money is native to the ecosystem. Web3 is a backend revolution.

**Blockchain** - A system in which a record of transactions made in bitcoin, ether, or other cryptocurrencies are maintained across several computers that are linked in a peer-to-peer network. A specific type of database that stores data in blocks chained together. A new block is added to the most recent added block maintaining chronological order. A common use case is a ledger for transactions (bitcoin). Decentralized blockchains are immutable. Data entered is irreversable, permanently recorded, and viewable to anyone.

**Node** - A critical component of a blockchain’s infrastructure. They store, spread, and preserve the blockchain data. Nodes are key to the decentralized nature of blockchain.

**Bitcoin (blockchain)** - A public ledger that records bitcoin transactions.

**Bitcoin (BTC)** - A cryptocurrency that trades on the bitcoin blockchain. BTC is a virtual/digital currency. Stored in digital wallets.

**Ethereum** - A blockchain-based, decentralized software platform. Trades on its own cryptocurrency, ether. It enables Smart Contracts and Distributed Applications (DApps) to be built and run without any downtime, fraud, control, or interference from a third party. Ethereum also refers to the programming language that runs on the blockchain and allows developers to build and publish DApps.

**Ether (ETH)** - The cryptocurrency of the ethereum network. It acts as the "fuel" for the decentralized apps and transactions. Ether is the token by which you make payments for the computing power required for operations on the network.

**Decentralized Apps (Dapps)** - Web applications built on top of the network. Open. No single party can control data or limit access. Anyone is able to build and connect with different dapps without permission from a central company. Many kinds available, decentralized finance (DeFi), or with the use of smart contracts, gaming, gambling, voting, crowdfunding, blind auctions, and multi-signature wallets.

**Smart Contract** - Programs which govern the behaviour of accounts within the Ethereum state. Contracts are deployed to the blockchain. It can be an exchange, a token, a record of exchange, system for secure voting, health records (with private key), inventory management, payment automations, and other bookkeeping/financial services.

**Exchange** - A platform that allows buying and selling. Can build exchanges through smart contracts.

**Token** - Digital assets that are being built on top of the Ethereum blockchain. Can create new tokens and exchange them through smart contracts.

**ERC-20 token** - A token written to the ERC-20 specifications. They can be traded on cryptocurrency exchanges (ie, MANA, RAC, UNI, etc).

**Tokenomics** - A field of economics where tokens and cryptocurrencies are used to design completely new business models and economies.

**Decentralized Finance (DeFi)** - Enables lending and borrowing, tokenizing real-world assets and art. Make predictions, invest, and trade cypto assets.

**Proof-of-Stake (PoS)** - A consensus mechanism to confirm transactions and mine new tokens on a blockchain. The block chain reaches consensus by expending effort solving an arbitrary mathematical puzzle.
    - Uses significant amounts of electricity.
    - Very limited in the number of transactions it can process at the same time.

**Proof-of-Work (PoW)** - Alternative to PoW. Also a consensus mechanism to confirm transactions and mine new tokens on a blockchain. The creator of the next block is chosen via various combinations of random selection and wealth or age (i.e., the stake).
    - Uses signifigantly less electricity and allows faster transaction validation.
    - DASH token currently uses PoS. Ethereum is migrating to PoS for its next version.

**Ganache** - Development blockchain. One click block chain. Run tests, execute commands, and inspect state while controlling how the chain operates.

**Truffle** - Development environment, testing framework, and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM).

**Solidity** - An object-oriented, high-level language for implementing smart contracts. It targets the Ethereum Virtual Machine (EVM).

**Ethereum Virtual Machine (EVM)** - A level of abstraction between smart contract executable code and the executing machine. It exists as one single entity maintained by thousands of connected computers running an Ethereum client. An EVM can execute smart contracts written in Solidity. All EVMs must adhere to the Ethereum yellow pages specs.

**Migrations** - Series of steps, deploys contracts to the blockchain

**Web3 Foundation** - Funds R&D teams building the foundation of the decentralized web.

**Polkadot** - Will enable a completely decentralized web where users are in control. Funded by Web3 Foundation, lead by Ethereum founder.

**React** (TODO: Add to a separate project specifically for learning react) - Web application framework. Component based UI building. Extended by libraries. Similar to Angular in concept. The core library builds UI, then various libs add additional functionality. A React stack example:

NextJS for project bootstrap
    https://github.com/vercel/next.js
GatsbyJS another bootstrapping option. Good for quickly building react sites (static especially)
    https://github.com/gatsbyjs/gatsby
Redux for state management
    https://github.com/reduxjs/react-redux
SASS/SCSS with React Bootstrap for styling
    https://github.com/sass/node-sass
    https://github.com/react-bootstrap/react-bootstrap
React-router for navigation
    https://github.com/ReactTraining/react-router
Formik or React Hook Form for forms
    https://github.com/formium/formik
    https://github.com/react-hook-form/react-hook-form
Animations
    https://github.com/airbnb/lottie-web
React Typescript Reference
    https://github.com/typescript-cheatsheets/react

## Sources

https://decrypt.co/resources/what-is-web-3
https://www.investopedia.com/terms/b/blockchain.asp
https://web3js.readthedocs.io/en/v1.3.4/
https://web3.foundation/
https://polkadot.network/about/
https://www.youtube.com/watch?v=99pYGpTWcXM (DApp tutorial)
https://corporatefinanceinstitute.com/resources/knowledge/deals/smart-contracts/
https://www.trufflesuite.com/
https://www.trufflesuite.com/ganache
https://docs.soliditylang.org/en/v0.7.4/
https://www.investopedia.com/terms/e/ethereum.asp
https://www.investopedia.com/terms/p/proof-work.asp
https://www.investopedia.com/terms/p/proof-stake-pos.asp
https://www.bitdegree.org/crypto/tutorials/proof-of-work-vs-proof-of-stake
https://en.wikipedia.org/wiki/Proof_of_work
https://en.wikipedia.org/wiki/Proof_of_stake
https://ethereum.org/en/developers/docs/intro-to-ethereum/
https://ethereum.org/en/developers/docs/evm/
https://medium.com/mycrypto/the-ethereum-virtual-machine-how-does-it-work-9abac2b7c9e