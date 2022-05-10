import "@nomiclabs/hardhat-ethers";
import { Contract } from "ethers";
import { ethers } from "hardhat";

const deploy = async () => {
  const Tweets = await ethers.getContractFactory("Tweets");
  const tweets = await Tweets.deploy();
  await tweets.deployed();

  console.log("Tweets Contract Address:", tweets.address);

  return tweets;
};

const run = async (tweets: Contract) => {
  console.log("All Tweets:", await tweets.getTweets());
};

deploy().then(run);
