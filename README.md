# Buy-NFTs-with-Fungible-Token

## About Repo

```
1: Total supply of token is 1000

2: Contract is only mintable/Buyable by an ERC20 fungible token 

3: Each NFT price is set to 0.5 fungible token

4: When transaction will be successfull, NFT will be transfer to the buyer, and token is transfer to the seller's account.

5: Writing hardhat scripts to mint NFTs and getBlance for both NFTs and Token.

```
### Setting Up the Environment

```
1- Remix
2- Solidity
3- VScode
4- Hardhat
5- Ether.js
6- Node.js
7- Node.js
8- MetaMask
```

Most Ethereum libraries and tools are written in JavaScript, and so is Ether.js. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and hardhat is built on top of it.

## Getting Started

### Connect to the Ethereum network

There are many ways to make requests to the Ethereum chain. For simplicity, we’ll use a free account on #Infura, a blockchain developer platform, and API that allows us to communicate with the Ethereum chain.

#### Initializing npm

##### Note: You can take my packege.json file from my repo and use in your project, then run:
```
npm i
```

### Compiling Smart Contract Using hardhat
To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.
```
npx hardhat compile

Compilation finished successfully

```

### Deploying Smart contract on Rinkeby Testnet
The contract has been successfully compiled and is ready to be used.
Now, deploy this contract to rinkeby testnet. Run the deployment script present in the scripts folder, using following command:
```
npx hardhat run scripts/deploy.js --network rinkeby
Contract deployed successfully

```

##  Interact with your Smart Contract using ether.js and node.js script

### Installing Dotenv file to keep private key and sensitive data secured

```
npm install dotenv --save

```

#### Your .env should look like this:

```
PRIVATE_KEY = ""
INFURA_PROJECT_ID = ""
ETHERSCAN_API_KEY= ""
ERC_CONTRACT_ADDRESS=""
NFT_CONTRACT_ADDRESS=""

```
### Grab your contract ABI

```
const contract = require("../artifacts/contracts/IEC-NFT.sol/IECnft.json");

```

## After make all scripts:

### Run the script using: 

...

npx hardhat run scripts/{NameYouScript}.js --network rinkeby
-LIKE:
npx hardhat run scripts/Nft.js --network rinkeby
...

## Smart Contract Versioning

```
pragma solidity ^0.8.17;

```

## License

```

// SPDX-License-Identifier: MIT

```
