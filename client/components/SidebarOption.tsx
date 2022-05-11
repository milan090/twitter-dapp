import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";
import { SidebarSelectedOption } from "../types/sidebar.types";
import { Box } from "@chakra-ui/react";

interface SidebarOptionProps {
  text: String;
  Icon: IconType;
  isActive?: Boolean;
  setSelected?: (newSelected: SidebarSelectedOption) => void;
  redirect?: URL | string;
}

export const SidebarOption: React.FC<SidebarOptionProps> = ({
  text,
  Icon,
  isActive,
  setSelected,
  redirect,
}) => {
  const router = useRouter();

  const handleClick = (buttonText = text) => {
    if (buttonText !== "More" && setSelected) {
      setSelected(buttonText as SidebarSelectedOption);
    } else return;
  };

  return (
    <Box
      width={"min"}
      alignItems={"center"}
      display="flex"
      borderRadius={100}
      p={4}
      cursor={"pointer"}
      _hover={{
        bgColor: "gray.800",
        transition: "200ms ease-in-out",
      }}
      transition="all"
      onClick={() => {
        handleClick(text);
        if (redirect) {
          router.push(redirect);
        } else return;
      }}
    >
      <Box fontSize={"3xl"} mr={4}>
        <Icon />
      </Box>
      <Box fontWeight={`${isActive ? "bold" : "medium"}`} fontSize={"xl"}>
        {text}
      </Box>
    </Box>
  );
};
