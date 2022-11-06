require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_HTTP, METAMASK_PRIVATE } = process.env;
/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_HTTP,
      accounts: [`0x${METAMASK_PRIVATE}`]
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.METAMASK_PRIVATE]
    },
  },
}
