const API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.METAMASK_PRIVATE;

const {ethers} = require("hardhat");

// provider
const provider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// signer
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const CONTRACT_ADDRESS = 0x0;
const contractAbi = require("../clue.json");
const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);

async function main() {
  //
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

