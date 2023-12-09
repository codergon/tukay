import millify from "millify";
import { constrictAddress } from "utils/wallet";
import { Flex, Text, Table } from "@radix-ui/themes";
import { CurrencyCircleDollar } from "@phosphor-icons/react";

const Particpated = () => (
  <>
    <Table.Root variant="ghost">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="center">Token</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="center">Amount</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="center">
            Recipients
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="right">Creator</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {[
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
            <Table.Row key={index} className="border-b-0">
              <Table.RowHeaderCell>{item.name}</Table.RowHeaderCell>
              <Table.Cell align="center">
                <Flex
                  gap="1"
                  align={"center"}
                  direction={"row"}
                  justify={"center"}
                >
                  <CurrencyCircleDollar size={16} />
                  <Text>{item.token}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell align="center">
                {millify(item.amount, {
                  space: true,
                  precision: 3,
                })}
              </Table.Cell>
              <Table.Cell align="center">{item.recipients}</Table.Cell>
              <Table.Cell align="right">
                {constrictAddress(item.creator)}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  </>
);

export default Particpated;
