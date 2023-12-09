import Created from "./tabs/created";
import Particpated from "./tabs/particpated";
import AirdropHeader from "./components/header";
import { Box, Flex, Tabs } from "@radix-ui/themes";

const Airdrop = () => {
  return (
    <>
      <Flex gap="6" width={"100%"} direction="column">
        <AirdropHeader />

        <Tabs.Root defaultValue="created">
          <Tabs.List>
            <Tabs.Trigger value="created">Created</Tabs.Trigger>
            <Tabs.Trigger value="participated">Participated</Tabs.Trigger>
            <Tabs.Trigger value="trending">Trending</Tabs.Trigger>
          </Tabs.List>

          <Box px="0" pt="3" pb="2">
            <Tabs.Content value="created">
              <Created />
            </Tabs.Content>
            <Tabs.Content value="participated">
              <Particpated />
            </Tabs.Content>
            <Tabs.Content value="trending">
              <Created />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Flex>
    </>
  );
};

export default Airdrop;
