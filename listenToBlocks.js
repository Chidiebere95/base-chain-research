const { Web3 } = require('web3');

const providerUrl =
  'wss://quick-ultra-spring.base-goerli.discover.quiknode.pro/4aa8545e854b5a9e8722015e9ace2a9855282395/';
const web3 = new Web3(new Web3.providers.WebsocketProvider(providerUrl));
// Subscribe to new transactions
const getLogs=async()=>{
    const subscription = await web3.eth.subscribe(
      'newBlockHeaders',
      (error, result) => {
        if (!error) {
          console.log('New Block:', result.number);
        } else {
          console.error('Error:', error);
        }
      }
    );

    subscription.on('data', (blockHeader) => {
      console.log('New Transaction Block:', blockHeader);
    });

    subscription.on('error', (error) => {
      console.error('Subscription Error:', error);
    });
}
getLogs()
