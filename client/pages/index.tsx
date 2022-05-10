import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Feed } from "../layouts/Feed";
import RightBar from "../layouts/RightBar";
import { Sidebar } from "../layouts/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box backgroundColor="bg.700" minHeight="100vh" paddingX="1rem">
      <Box
        marginX="auto"
        width="100%"
        maxWidth="1240px"
        boxSizing="content-box"
        display="flex"
        justifyContent="center"
        color="white"
        minHeight="100%"
      >
        {/* <Sidebar /> */}
        <Feed />
        {/* <RightBar /> */}
      </Box>
    </Box>
  );
};

export default Home;
