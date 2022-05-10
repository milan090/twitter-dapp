import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Tweet } from "../components/Tweet";
import { useEthStore } from "../stores/eth.store";
import { TweetData } from "../types/tweet.types";
import { getTweetContract } from "../utils/getTweetContract";

export const Feed = () => {
  const [value, setValue] = React.useState("");
  const [account, loading] = useEthStore((state) => [
    state.account,
    state.loading,
  ]);
  const [tweets, setTweets] = useState<TweetData[]>([]);

  const handleInputChange = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const Tweets = getTweetContract();
    Tweets.getTweets().then(async (tweets: TweetData[]) => {
      console.log("Updating tweets:", tweets);
      setTweets(tweets);
    });
    Tweets.on(Tweets.filters.NewTweet(), async () => {
      Tweets.getTweets().then(async (tweets: TweetData[]) => {
        console.log("Updating tweets:", tweets);
        setTweets(tweets);
      });
    });

    // Unsubscrine from all listeners to avoid set state after component unmount
    return () => {
      Tweets.removeAllListeners();
    };
  }, []);

  const handleTweetClick = () => {
    if (!value) {
      console.log("No empty value allowed");
      return;
    }
    const Tweets = getTweetContract();
    const timestamp = +new Date();
    console.log("New Tweet inputs:", account, value, timestamp);
    Tweets.addTweet(account, value, timestamp);
  };

  return (
    <Box
      maxWidth="600px"
      width="100%"
      borderRight="1px"
      borderLeft="1px"
      borderColor="grey.700"
      minHeight="100vh"
    >
      <Box
        paddingX="1rem"
        marginTop="1"
        borderBottom="1px"
        borderColor="gray.500"
        paddingBottom="1rem"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Home
        </Text>
        <Box>
          <Box>{/* PFP */}</Box>
          <TweetInput value={value} handleInputChange={handleInputChange} />
        </Box>

        <Box display="flex">
          <Button
            background="primary.700"
            _hover={{ background: "primary.900" }}
            borderRadius="3xl"
            paddingX="5"
            marginLeft="auto"
            onClick={handleTweetClick}
          >
            Tweet
          </Button>
        </Box>
      </Box>

      {/* Tweets */}
      {[...tweets].reverse().map(({ author, content, timestamp }) => {
        // timestamps are prolly unique (i dont have unique ids atm)
        return (
          <Tweet
            author={author}
            content={content}
            timestamp={timestamp}
            key={timestamp.toNumber()}
          />
        );
      })}
      <Box></Box>
    </Box>
  );
};

interface TweetInputProps {
  value: string;
  handleInputChange: (newValue: string) => void;
}

const TweetInput: React.FC<TweetInputProps> = ({
  value,
  handleInputChange,
}) => {
  return (
    <>
      <Textarea
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Here is a sample placeholder"
        size="sm"
        resize="none"
        boxShadow={"none"}
        outline="none"
        border="none"
        fontSize="xl"
        padding={0}
        marginTop={1.5}
        _focus={{
          boxShadow: "none",
        }}
      />
    </>
  );
};
