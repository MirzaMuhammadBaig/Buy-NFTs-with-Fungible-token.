const { API_URL_INFURA , PRIVATE_KEY , NFT_CONTRACT_ADDRESS , PUBLIC_KEY }= process.env;
const contract = require("../artifacts/contracts/IEC-NFT.sol/IECnft.json");

// provider - Infura
const InfuraProvider = new ethers.providers.InfuraProvider(network="rinkeby", API_URL_INFURA);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, InfuraProvider);

// contract instance
const IECnft = new ethers.Contract(NFT_CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    
    const balanceOf = await IECnft.balanceOf(PUBLIC_KEY);
    console.log("The balance is: " + balanceOf);

   
    const BuyNFT = await IECnft.BuyNFT();
    console.log(BuyNFT); 

}

main();