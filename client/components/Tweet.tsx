import { Avatar, Box, Text } from "@chakra-ui/react";
import { BigNumber } from "ethers";
import React from "react";
import { timeSince } from "../utils/time";

interface Props {
  author: string;
  content: string;
  timestamp: BigNumber;
}

export const Tweet: React.FC<Props> = ({ author, content, timestamp }) => {
  const sinceMessage = `${timeSince(new Date(timestamp.toNumber()))} ago`;

  return (
    <Box
      padding="1rem"
      display="flex"
      gap="4"
      borderBottom="1px"
      borderColor="gray.500"
      paddingBottom="2rem"
    >
      <Box>
        {/* PFP */}
        {
          <Avatar
            name="Dan Abrahmov"
            size="md"
            src={`https://avatars.dicebear.com/api/male/${author}.svg?background=%230000ff`}
          />
        }
      </Box>
      <Box>
        <Box>
          {/* Content */}
          <Text fontWeight={"medium"}>{author}</Text>
          <Text fontWeight="light" color="gray.400" fontSize="sm">
            {sinceMessage}
          </Text>
          <Text fontWeight="light" color="gray.300">
            {content}
          </Text>
        </Box>
        <Box>{/* Buttons */}</Box>
      </Box>
    </Box>
  );
};
