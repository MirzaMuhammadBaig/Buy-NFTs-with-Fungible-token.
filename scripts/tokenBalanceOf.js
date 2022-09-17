const { API_URL_INFURA ,  PRIVATE_KEY , ERC_CONTRACT_ADDRESS } = process.env;
const contract = require("../artifacts/contracts/IEC-Token.sol/IECtoken.json");

// provider - Infura
const InfuraProvider = new ethers.providers.InfuraProvider(network="goerli", API_URL_INFURA);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, InfuraProvider);

// contract instance
const IECtoken = new ethers.Contract(ERC_CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    
    const balanceOf = await IECtoken.balanceOf("Your NFTs Contract Address");
    console.log("The balance is: " + balanceOf); 

}

main();