const {ethers} = require("hardhat")
const {expect, assert } = require("chai")

describe("SimpleStorage", function(){
 let simpleStorageFactory, simpleStorage;
 beforeEach(async function(){
  simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  simpleStorage = await simpleStorageFactory.deploy()
 })

 it("Should start with a favourite number 0", async function(){
  const currentValue = await simpleStorage.retrieve();
  const expectedValue = "0"
  assert.equal(currentValue.toString(), expectedValue);
 })

 it("Should update when we call store", async function(){
  const expectedValue = "7";
  const transactionResponse = await simpleStorage.store(expectedValue);
  await transactionResponse.wait(1);

  const currentValue = await simpleStorage.retrieve();
  assert.equal(currentValue.toString(), expectedValue);
 })

//  it("Should be able to add Person", async function(){
//   const personName = "tushar";
//   const personValue = "10";
//   const expectedPersonName = "tushar";
//   const expectedPersonValue = "10";
//   const transactionResponse = await simpleStorage.addPerson(personName, personValue);

//  })
})