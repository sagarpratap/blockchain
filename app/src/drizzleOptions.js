import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import Lottery from "./contracts/Lottery.json";
import Lotteryv2 from "./contracts/Lotteryv2.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, Lottery, Lotteryv2],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
