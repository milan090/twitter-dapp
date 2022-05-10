import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { theme } from "../config/chakra.theme";
import { useEffect } from "react";
import { useEthStore } from "../stores/eth.store";
import { initializeAccounts } from "../config/web";

function MyApp({ Component, pageProps }: AppProps) {
  const bg = useColorModeValue("white", "bg.900");
  const color = useColorModeValue("white", "gray.800");

  const [setAccount, setLoading] = useEthStore((state) => [
    state.setAccount,
    state.setLoading,
  ]);

  useEffect(() => {
    initializeAccounts().then((accounts) => {
      setAccount(accounts[0]);
      setLoading(false);
    });
  }, [setAccount, setLoading]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
