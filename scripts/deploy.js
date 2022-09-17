const hre = require("hardhat");

async function main() { 

  const IECtoken = await hre.ethers.getContractFactory("IECtoken");
  const IECToken = await IECtoken.deploy();

  await IECToken.deployed();

  console.log(
    "IECtoken Token is deployed to:", IECToken.address
  );

    const IECnft = await hre.ethers.getContractFactory("IECnft");
    const IECNft = await MyOptimusPrime.deploy(IECtoken.address);
  
    await IECNft.deployed();
  
    console.log("IECnft contract is deployed to:", IECNft.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
