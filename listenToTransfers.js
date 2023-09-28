const { Web3 } = require('web3');
// Connect to your Ethereum node or Infura
const web3 = new Web3(
  'wss://quick-ultra-spring.base-goerli.discover.quiknode.pro/4aa8545e854b5a9e8722015e9ace2a9855282395/'
);

async function pollForTransactions() {
  const latestBlockNumber = await web3.eth.getBlockNumber();
  for (
    let blockNumber = BigInt(latestBlockNumber.toString()) - BigInt(5);
    blockNumber <= BigInt(latestBlockNumber);
    blockNumber++
  ) {
    const block = await web3.eth.getBlock(blockNumber.toString(), true);
    if (block && block.transactions.length > 0) {
      block.transactions.forEach((tx) => {
        if (tx.value > BigInt(0)) {
          // Ensure tx.value is a BigInt
          console.log(
            `Received ${web3.utils.fromWei(tx.value.toString(), 'ether')} Ether`
          );
          console.log(`From: ${tx.from}`);
          console.log(`To: ${tx.to}`);
          if (
            tx.from ===
            '0x675ACe8161d804d7e7Ce6eaEe78207216feDD19c'.toLowerCase()
          ) {
            // For some reason this if statement will run twice when the wallet address sends a coin, Still trying to figure why
            console.log(
              `you sent  ${web3.utils.fromWei(
                tx.value.toString(),
                'ether'
              )}ether ############################################################`
            );
          }
          if (
            tx.to === '0x1b49589B690f4aece32D49753Aaaf98d35aAa790'.toLowerCase()
          ) {
            // For some reason this if statement will run twice when the wallet address receives a coin, Still trying to figure why
            console.log(
              `you received ${web3.utils.fromWei(
                tx.value.toString(),
                'ether'
              )}ether ##############################################################`
            );
          }
        }
      });
    }
  }

  setTimeout(pollForTransactions, 5000); // Poll every 5 seconds (adjust as needed)
}

// Start polling
pollForTransactions();
