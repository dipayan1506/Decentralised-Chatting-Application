const hre = require("hardhat");

async function main() {
  const chatContract = await hre.ethers.deployContract("Chat");

  await chatContract.waitForDeployment();
  console.log("Contract Address: ",chatContract.target);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
