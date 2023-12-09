import * as blockies from "blockies-ts";
import { Avatar } from "@radix-ui/themes";

interface IBlockieProps {
  size?: number;
  address: string;
}

const Blockie = (props: IBlockieProps) => {
  const seed = props?.address?.toLowerCase() || "";
  const imgUrl = blockies.create({ seed }).toDataURL();

  return (
    <>
      <Avatar
        // size="2"
        src={imgUrl}
        fallback="👾"
        radius="full"
        style={{ width: `${props?.size}px`, height: `${props?.size}px` }}
      />
    </>
  );
};

Blockie.defaultProps = {
  size: 36,
  address: "0x0000000000000000000000000000000000000000",
};

export default Blockie;
