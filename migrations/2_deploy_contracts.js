const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const Lottery = artifacts.require("Lottery");
const Lotteryv2 = artifacts.require("Lotteryv2");

module.exports = async function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
  deployer.deploy(Lotteryv2);
  
  await deployer.deploy(Lottery, {overwrite: false});
  this.deployedLottery = await Lottery.deployed();
  console.log(`Migrations deployed Lottery: ${this.deployedLottery.address}`);
};