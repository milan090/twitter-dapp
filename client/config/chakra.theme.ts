import { extendTheme, useColorMode } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    bg: {
      900: "#000000",
      800: "#181818",
      700: "#202327",
    },
    primary: {
      900: "#174D77",
      800: "#318CD8",
      700: "#1d9bf0",
    },
    grey: {
      800: "#393D3F",
      700: "#71767B",
      600: "##71767B",
    },
  },
  components: {
    Input: {
      variants: {
        unstyled: {
          field: {
            borderColor: "gray.300",
            _placeholder: {
              color: "gray.500",
            },
          },
        },
      },
    },
  },
};

export const theme = extendTheme(config);
