const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  'https://quick-ultra-spring.base-goerli.discover.quiknode.pro/4aa8545e854b5a9e8722015e9ace2a9855282395/'
);

const usersWalletAddress = "0x0795a17db3598674eB18Fa20C16F92B0B65aadd2";
const getBalance = async () => {
  try {
    let balance = await provider.getBalance(usersWalletAddress);
    balance = ethers.utils.formatEther(balance);
    console.log(balance);
  } catch (error) {
    console.log(error);
  }
};

getBalance();
