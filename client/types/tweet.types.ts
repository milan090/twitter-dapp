import { BigNumber } from "ethers";

export interface TweetData {
  author: string;
  content: string;
  timestamp: BigNumber;
}
