var Web3 = require('Web3')
var Contract = require('web3-eth-contract');
var provider = 'http://127.0.0.1:8549'
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
Contract.setProvider(provider);

myacc='0x3F6dA8CFbd71248Ef2F2BCf2EdCb30Da25F8fe37'
web3.eth.defaultAccount = '0x3F6dA8CFbd71248Ef2F2BCf2EdCb30Da25F8fe37';

web3.eth.getBalance(myacc) .then(console.log)

contract_abi=[
	{
		"inputs": [],
		"name": "checkVoteStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "InitializeCandidates",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "voteForCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "approved_prop",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidateList",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "totalVotesFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "validCandidate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voter",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "votesReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
contract_address='0xA9905434dA336827D6aA5359F49B12488615F80B'

const NameContract =new  web3.eth.Contract(contract_abi, contract_address);


mydude='0x5448454455444500000000000000000000000000000000000000000000000000'
da=NameContract.methods.candidateList('1').call().then(function(result){
	console.log(result)
})

web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ",result);
});
