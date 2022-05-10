import { ethers } from "ethers";
import { getEth } from "../config/web";
import Tweets from "../../web3/artifacts/contracts/Tweets.sol/Tweets.json";

export const getTweetContract = () => {
  return new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
    Tweets.abi,
    new ethers.providers.Web3Provider(getEth()).getSigner()
  );
};
