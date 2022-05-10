//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Tweets {
    struct Tweet {
        address payable author;
        string content;
        uint64 timestamp;
    }
    
    mapping (uint32 => Tweet) allTweets;
    uint32 tweetsCount;

    event NewTweet(Tweet newTweet);

    function addTweet(address payable author, string memory content, uint64 timestamp) public {
        allTweets[tweetsCount] = Tweet(author, content, timestamp);
        emit NewTweet(allTweets[tweetsCount]);
        tweetsCount++;
    }

    function getTweets() public view returns (Tweet[] memory) {
        Tweet[] memory tweets = new Tweet[](tweetsCount);
        for (uint32 i = 0; i < tweetsCount; ++i) {
            tweets[i] = allTweets[i];
        }
        return tweets;
    }
}
