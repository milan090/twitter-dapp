import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { theme } from "../config/chakra.theme";
import { useEffect } from "react";
import { useEthStore } from "../stores/eth.store";
import { initializeAccounts } from "../config/web";
import { DefaultSeo } from "next-seo";
import { SEO } from "../config/seo";

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
    <>
      <DefaultSeo
        title={pageProps?.seo?.title || SEO.DEFAULT_TITLE}
        titleTemplate={SEO.DEFAULT_TITLE_TEMPLATE}
        description={SEO.DEFAULT_DESCRIPTION}
        // canonical={url}
        openGraph={{
          type: "website",
          locale: "en_US",
          // url,
          site_name: SEO.SITE_NAME,
          title: SEO.SITE_NAME,
          description: SEO.DEFAULT_DESCRIPTION,
          images: [
            {
              url: SEO.DEFAULT_OG_IMAGE,
              alt: SEO.SITE_NAME,
            },
          ],
        }}
        twitter={{
          handle: SEO.TWITTER_HANDLE,
          site: SEO.TWITTER_HANDLE,
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "shortcut icon",
            href: SEO.FAVICON_LINK,
          },
        ]}
      />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
