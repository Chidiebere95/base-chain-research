# Getting Started

This is a research on the base chain

### `genWalletAddress.js`

Generates a random new wallet address without Mnemonic phrase

### `genWalletAddressWithMnemonic.js`

First generate a random 12-word phrase, then generates a new wallet address with this phrase.
If you should copy the 12-word phrase and use it to run the function again, it returns the same wallet address and the same privatekey.

The particular method may be risky because if someone should ever coin those words they'd be able to run this function and then get your private keys and your wallet address

Note that your ethers should be on this version ethers@5.7.2 (Just below version 6.0) to run this. ie  npm i ethers@5.7.2


## `getBalance.js`

If you just want to get the native tokens balance of a wallet address you can run this function

### `listenToBlocks.js`

See all transactions inside each new block that has been added to the blockchain like the block number, miner, difficulty, block hash etc

### `listenToTransfers.js`

Stream all transfers of native tokens happening on the blockchain, you can also capture when a particular wallet address has sent some native tokens and the amount sent, and also when a particular wallet address has received some native tokens and the amount that it received


## `transferToken.js`

Transfer native tokens from one wallet address to another within the chain that the node provider endpoint is set on.