import { CaretDown } from "@phosphor-icons/react";
import { Flex, Text, Button, DropdownMenu } from "@radix-ui/themes";

interface TokensOptionsProps {
  token: string;
  setToken: (token: string) => void;
}

const tokens = ["usdc", "usdt", "dai", "busd", "tusd", "pax"];

const TokensOptions = ({ token, setToken }: TokensOptionsProps) => {
  return (
    <>
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger>
          <Button
            size="3"
            color="gray"
            radius="full"
            variant="surface"
            className="w-full"
          >
            <Flex
              gap="2"
              grow="1"
              align="center"
              direction="row"
              justify="between"
            >
              <Text as="div" size="2" weight="medium">
                {token || "Select a token"}
              </Text>

              <CaretDown size={16} />
            </Flex>
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sideOffset={10} style={{ width: "100%" }}>
          <DropdownMenu.Label className="DropdownMenuLabel">
            Select Token
          </DropdownMenu.Label>

          {tokens?.map((item, index) => {
            return (
              <DropdownMenu.CheckboxItem
                key={index}
                className="DropdownMenuCheckboxItem"
                onCheckedChange={() => setToken(item)}
                style={{ textTransform: "uppercase" }}
                checked={token?.toLowerCase() === item?.toLowerCase()}
              >
                {item}
              </DropdownMenu.CheckboxItem>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default TokensOptions;
