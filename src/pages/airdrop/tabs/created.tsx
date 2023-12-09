import millify from "millify";
import { useAccount, useEnsName } from "wagmi";
import { constrictAddress } from "utils/wallet";
import Blockie from "components/common/blockie";
import { CurrencyCircleDollar } from "@phosphor-icons/react";
import { Flex, Text, Card, Table, Inset, Button } from "@radix-ui/themes";

const Created = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <>
      <Flex gap="4" direction={"column"} style={{ marginTop: "8px" }}>
        {[
          {
            token: "USDC",
            amount: 762898,
            recipients: 2000,
            name: "ABCD Whyte",
            creator: "0xfe9C006Cdc1D3c7d3Bf7992674446B209966C31f",
          },
          {
            token: "USDT",
            amount: 459890,
            recipients: 100,
            name: "Random Air",
            creator: "0x1234567890123456789012345668901234567890",
          },
          {
            token: "USDC",
            amount: 762898,
            recipients: 2000,
            name: "ABCD Whyte",
            creator: "0xfe9C006Cdc1D3c7d3Bf2992674446B209966C31f",
          },
          {
            token: "USDT",
            amount: 459890,
            recipients: 100,
            name: "Random Air",
            creator: "0x1234567890123456789012345678901234567890",
          },
          {
            token: "USDC",
            amount: 762898,
            recipients: 2000,
            name: "ABCD Whyte",
            creator: "0x12345678901234A6789012345678901234567890",
          },
          {
            token: "USDT",
            amount: 459890,
            recipients: 100,
            name: "Random Air",
            creator: "0xfe9C006Cdc1D1c7d3Bf7992674446B209966C31f",
          },
          {
            token: "USDC",
            amount: 762898,
            recipients: 2000,
            name: "ABCD Whyte",
            creator: "0x1234567890123456789012345678901234567890",
          },
          {
            token: "USDT",
            amount: 459890,
            recipients: 100,
            name: "Random Air",
            creator: "0x1234567890123456789012345678901234567890",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="gap-4 flex max-w-full p-4 w-full bg-neutral-50 border-[1px] border-neutral-300 rounded-2xl flex-col dark:bg-neutral-850 dark:border-neutral-750"
            >
              <Flex
                gap="3"
                align={"center"}
                direction={"row"}
                justify={"between"}
              >
                <Flex gap="3" align={"center"} direction={"row"}>
                  <Blockie address={item?.creator} />

                  <Flex direction="column" style={{ flex: 1 }}>
                    <Text as="div" size="2" weight="medium">
                      {ensName ?? constrictAddress(address)}
                    </Text>

                    <Text as="div" size="1" color="gray">
                      2 days ago
                    </Text>
                  </Flex>
                </Flex>

                <Flex gap="3" align={"center"} direction={"row"}>
                  <Button>
                    <Text size="2">Claim rewards</Text>
                  </Button>
                </Flex>
              </Flex>

              <Flex gap="8" align={"center"} direction={"row"}>
                <Flex style={{ gap: 1 }} direction="column-reverse">
                  <Text as="div" size="2" weight="medium">
                    {item?.name}
                  </Text>

                  <Text as="div" size="1" color="gray">
                    Name
                  </Text>
                </Flex>

                <Flex style={{ gap: 1 }} direction="column-reverse">
                  <Text as="div" size="2" weight="medium">
                    {item?.token}
                  </Text>

                  <Text as="div" size="1" color="gray">
                    Token
                  </Text>
                </Flex>

                <Flex style={{ gap: 1 }} direction="column-reverse">
                  <Text as="div" size="2" weight="medium">
                    {millify(item.amount, {
                      space: true,
                      precision: 3,
                    })}
                  </Text>

                  <Text as="div" size="1" color="gray">
                    Amount
                  </Text>
                </Flex>

                <Flex style={{ gap: 1 }} direction="column-reverse">
                  <Text as="div" size="2" weight="medium">
                    {item?.recipients}
                  </Text>

                  <Text as="div" size="1" color="gray">
                    Recipients
                  </Text>
                </Flex>
              </Flex>
            </div>
          );
        })}
      </Flex>
    </>
  );
};

export default Created;
