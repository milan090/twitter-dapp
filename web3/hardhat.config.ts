require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [`${process.env.RINKEBY_KEY}`],
    },
  },
};
