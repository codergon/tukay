import { useState } from "react";
import { isAddress } from "viem";
import TokensOptions from "./tokens";
import Papa, { LocalFile } from "papaparse";
import { Plus } from "@phosphor-icons/react";
import { FileUploader } from "react-drag-drop-files";
import {
  Flex,
  Text,
  Dialog,
  Button,
  Heading,
  TextField,
} from "@radix-ui/themes";

const AirdropHeader = () => {
  const [token, setToken] = useState("");

  const [file, setFile] = useState<unknown>(null);
  const handleChange = (file: string | LocalFile) => {
    Papa.parse<string[]>(file, {
      worker: true,
      complete({ data }) {
        data
          ?.splice(1)
          ?.flat()
          ?.every((address, index) => {
            if (isAddress(address)) {
              return true;
            } else {
              console.log(`invalid address, ${address}, found at index`, index);
              return false;
            }
          });
      },
    });
  };

  return (
    <>
      <Flex mb="6" gap="3" align="center" direction="row" justify={"start"}>
        <Heading size="8">Airdrop</Heading>

        <Dialog.Root>
          <Dialog.Trigger>
            <Button
              radius="full"
              variant="solid"
              style={{ padding: 0, aspectRatio: 1 }}
            >
              <Plus size={16} weight="bold" />
            </Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title mb="2">Create Airdrop</Dialog.Title>
            <Dialog.Description mb="4" size="2">
              Create a new airdrop to distribute tokens
            </Dialog.Description>

            <Flex gap="4" direction="column">
              <label>
                <TextField.Input
                  size="3"
                  radius="full"
                  placeholder="Name for your airdrop"
                />
              </label>
              <label>
                <TokensOptions token={token} setToken={setToken} />
              </label>
              <label>
                <TextField.Input
                  size="3"
                  radius="full"
                  type="number"
                  placeholder="Amount of tokens to airdrop"
                />
              </label>
              <label>
                <TextField.Input
                  size="3"
                  radius="full"
                  type="number"
                  placeholder="Number of recipients"
                />
              </label>

              <FileUploader
                name="file"
                types={["csv"]}
                handleChange={handleChange}
              />
            </Flex>

            <Flex mt="4" gap="3" justify="end">
              <Dialog.Close>
                <Button color="gray" variant="soft">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Create</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
    </>
  );
};

export default AirdropHeader;
