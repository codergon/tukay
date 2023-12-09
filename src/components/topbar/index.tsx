import { Flex, Text } from "@radix-ui/themes";
import Searchbar from "components/common/searchbar";
import { Cube, ChargingStation } from "@phosphor-icons/react";
import { useAccount, useFeeData, useBlockNumber } from "wagmi";

const Topbar = () => {
  const { data: gasfee, isError: feeErr, isLoading: loadingFee } = useFeeData();
  const {
    data: blockNo,
    isError: blockErr,
    isLoading: loadingBal,
  } = useBlockNumber();

  return (
    <div className="topbar py-[14px] flex flex-row align-middle justify-between min-h-[54px] border-b-2 w-full mb-8 border-slate-100 dark:border-zinc-850">
      <Searchbar />

      <Flex gap={"4"} direction="row" align={"center"}>
        <Flex gap={"2"} direction="row" align={"center"}>
          <ChargingStation size={16} weight="fill" />
          <Text size={"2"} color="gray">
            {!feeErr && !loadingFee
              ? Number(gasfee?.formatted?.gasPrice).toFixed(0) + " GWEI"
              : null}
          </Text>
        </Flex>

        <Flex gap={"2"} direction="row" align={"center"}>
          <Cube size={16} weight="fill" />
          <Text size={"2"} color="gray">
            {!blockErr && !loadingBal ? Number(blockNo).toFixed(0) : null}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Topbar;
