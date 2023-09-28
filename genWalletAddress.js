const ethers = require('ethers');

// Generate a random wallet
const wallet = ethers.Wallet.createRandom();

// Retrieve the wallet address (public key)
const address = wallet.address;

// Retrieve the private key (in hexadecimal format)
const privateKey = wallet.privateKey;

console.log('Random Wallet Address:', address);
console.log('Private Key:', privateKey);
