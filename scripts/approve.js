const { API_URL_INFURA , PRIVATE_KEY , CONTRACT_ADDRESS }= process.env;
const contract = require("../artifacts/contracts/IEC-Token.sol/IECtoken.json");

const InfuraProvider = new ethers.providers.InfuraProvider(network="rinkeby", API_URL_INFURA);

const signer = new ethers.Wallet(PRIVATE_KEY, InfuraProvider);

const IECnft = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    
    const balanceOf = await IECnft.balanceOf(CONTRACT_ADDRESS);
    console.log("The balance is: " + balanceOf); 

    
    const approve = await IECnft.approve(CONTRACT_ADDRESS, 
    ethers.utils.parseUnits('0.5', 18));
    
    console.log(approve); 
}

main();