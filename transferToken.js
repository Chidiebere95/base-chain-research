const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(
  'https://quick-ultra-spring.base-goerli.discover.quiknode.pro/4aa8545e854b5a9e8722015e9ace2a9855282395/'
);
const account1 = '0x675ACe8161d804d7e7Ce6eaEe78207216feDD19c';
const account2 = '0x1b49589B690f4aece32D49753Aaaf98d35aAa790';

const privateKeyForAccount1 =
  '0x33bd25278d7a5bca362cf0b769014dc6c2a0e1372f7f156b4c7d21161809ae12';
const privateKeyForAccount2 =
  '0x5f590150a5edcf951167d38960c1c6e04b43f7dc217df824d12862ed2153cdc9';

const wallet = new ethers.Wallet(privateKeyForAccount1, provider);

const getBalance = async () => {
  try {
    let balance = await provider.getBalance(account1);
    balance = ethers.utils.formatEther(balance);
    return balance;
  } catch (error) {
    console.log(error);
  }
};

const sendTransaction = async () => {
  console.log('balance before', await getBalance());

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther('0.0001387'),
  });
  console.log('sending');

  const confirmed = await tx.wait();
  console.log('confirmed');
  console.log('balance after',await getBalance());
};

sendTransaction();
