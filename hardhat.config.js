require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const {API_URL_INFURA, PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat:{},
    rinkeby:{
      url: API_URL_INFURA,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
