// imports
const { ethers, run , network } = require("hardhat")


// main function
async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract.....")
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();

  console.log(`Deployed contract at the address ${simpleStorage.address}`);
  console.log(network.config);
  if(network.config.chainId===4 && process.env.ETHERSCAN_API_KEY){
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`The current value is :${currentValue}`);

  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`The updated value is ${updatedValue}`);
}


async function verify(contractAddress, args){
  console.log("Verifying contract...")

  try{
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  }catch(error){
    if (error.message.toLowerCase().includes("already Verified")){
      console.log("Already Verified");
    }else{
      console.log(error);
    }
  }
}

// call the main funtion
main().then(()=> process.exit(0)).catch((error)=>{
  console.log(error);
  process.exit(1);
})
