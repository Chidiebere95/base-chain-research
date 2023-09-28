const ethers = require('ethers');

// Generate a random mnemonic (12-word phrase)
const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;

// Create a wallet from the mnemonic
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

// Retrieve the private key
const privateKey = wallet.privateKey;

// Retrieve the public key
const publicKey = wallet.address;

console.log('Mnemonic:', mnemonic);
console.log('Private Key:', privateKey);
console.log('Public Key (Address):', publicKey);
