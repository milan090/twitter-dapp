import { useState } from "react";

import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";

import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
import { SidebarOption } from "../components/SidebarOption";
import { Avatar, Box } from "@chakra-ui/react";
import { useEthStore } from "../stores/eth.store";

const className = {
  tweetButton:
    "bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer",
  navContainer: "flex-1",
  profileImage: "height-12 w-12 rounded-full",
  profileRight: "flex-1 flex",
  details: "flex-1",
  name: "text-lg",
  handle: "text-[#8899a6]",
  moreContainer: "flex items-center mr-2",
};

export type SidebarSelectedOption =
  | "Home"
  | "Explore"
  | "Notifications"
  | "Messages"
  | "Bookmarks"
  | "Lists"
  | "Profile"
  | "Profile"
  | "More";

export const Sidebar: React.FC<{
  initialSelectedOption?: SidebarSelectedOption;
}> = ({ initialSelectedOption = "Home" }) => {
  const [account] = useEthStore((state) => [state.account]);
  const [selected, setSelected] = useState<SidebarSelectedOption>(
    initialSelectedOption
  );

  const handleSelectedChange = (newSelected: SidebarSelectedOption) =>
    setSelected(newSelected);

  return (
    <Box
      flex="0.7"
      display="flex"
      flexDirection="column"
      paddingX={8}
      maxWidth={300}
    >
      <Box fontSize={"3xl"} margin={4}>
        <VscTwitter />
      </Box>

      <Box flex={1}>
        <SidebarOption
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={Boolean(selected === "Home")}
          setSelected={handleSelectedChange}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Explore" ? FaHashtag : BiHash}
          text="Explore"
          isActive={Boolean(selected === "Explore")}
          setSelected={handleSelectedChange}
        />
        <SidebarOption
          Icon={selected === "Notifications" ? FaBell : FiBell}
          text="Notifications"
          isActive={Boolean(selected === "Notifications")}
          setSelected={handleSelectedChange}
        />
        <SidebarOption
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={Boolean(selected === "Messages")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          isActive={Boolean(selected === "Bookmarks")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Lists" ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          isActive={Boolean(selected === "Lists")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === "Profile")}
          setSelected={setSelected}
        />
        <SidebarOption Icon={CgMoreO} text="More" />

        <Box
          backgroundColor={"primary.700"}
          _hover={{ backgroundColor: "primary.800" }}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          fontWeight="bold"
          borderRadius={"3xl"}
          height={50}
          mt={20}
          cursor="pointer"
        >
          Tweet
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        mb={8}
        cursor="pointer"
        _hover={{ bgColor: "gray.800" }}
        borderRadius={"full"}
        px={2}
      >
        <Box
          display={"flex"}
          // alignItems="center"

          cursor="pointer"
          _hover={{ bgColor: "gray.800" }}
          rounded={"full"}
          mr={2}
          py={4}
          px={2}
        >
          <Avatar
            size="sm"
            src={`https://avatars.dicebear.com/api/male/${account}.svg?background=%230000ff`}
          />
        </Box>
        <Box display={"flex"} flex={1}>
          <Box flex={1}>
            <div className={className.handle}>{account.slice(0, 12)}...</div>
          </Box>
          <Box display={"flex"} alignItems="center" mr={2}>
            <FiMoreHorizontal />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
