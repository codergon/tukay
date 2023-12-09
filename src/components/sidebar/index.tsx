import { Fragment } from "react";
import { useTheme } from "contexts";
import { NavLink } from "react-router-dom";
import { constrictAddress } from "utils/wallet";
import Blockie from "components/common/blockie";
import { AppTheme } from "src/contexts/ThemeProvider";
import {
  Box,
  Flex,
  Text,
  Card,
  Inset,
  Button,
  Avatar,
  DropdownMenu,
} from "@radix-ui/themes";
import {
  useAccount,
  useBalance,
  useEnsName,
  useConnect,
  useEnsAvatar,
  useDisconnect,
} from "wagmi";
import {
  Bug,
  Info,
  Gear,
  Wallet,
  Lightning,
  Parachute,
  CaretDown,
  CopySimple,
  MinusCircle,
  ArrowUpRight,
} from "@phosphor-icons/react";

const navlinks = {
  system: [
    {
      link: "/issue",
      name: "Report Issue",
      icon: <Bug size={20} />,
    },
    {
      link: "/feature",
      name: "Request Feature",
      icon: <Info size={19} />,
    },
  ],
  overview: [
    {
      link: "/",
      name: "Airdrop",
      icon: (isActive = false) => (
        <Parachute size={20} weight={isActive ? "fill" : "regular"} />
      ),
    },
    {
      link: "/giveaways",
      name: "Give-aways",
      icon: (isActive = false) => (
        <Lightning size={20} weight={isActive ? "fill" : "regular"} />
      ),
    },

    {
      name: "Crowdfund",
      link: "/crowdfund",
      icon: (isActive = false) => (
        <Wallet size={20} weight={isActive ? "fill" : "regular"} />
      ),
    },
  ],
};

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { connect, isLoading, connectors, pendingConnector } = useConnect();

  const { data: balance, isLoading: loadingBalance } = useBalance({
    address: address,
  });

  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName });

  return (
    <div className="sidebar border-r-2 border-slate-100 dark:border-zinc-800">
      <div className="sidebar-header">
        {isConnected ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Card
                className="max-w-full py-[10px]"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <Inset p="0" side="y" clip="border-box">
                  <Flex gap="3" align="center">
                    {ensAvatar ? (
                      <Avatar
                        size="3"
                        fallback="👾"
                        radius="medium"
                        src={ensAvatar + ""}
                      />
                    ) : (
                      <Blockie address={address} />
                    )}

                    <Flex direction="column" style={{ gap: 1, flex: 1 }}>
                      <Text as="div" size="2" weight="medium">
                        {ensName ?? constrictAddress(address)}
                      </Text>
                      {!loadingBalance && balance && (
                        <Text as="div" size="1" color="gray">{`${Number(
                          balance.formatted
                        ).toFixed(4)} ${balance.symbol}`}</Text>
                      )}
                    </Flex>

                    <CaretDown size={16} />
                  </Flex>
                </Inset>
              </Card>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              size="2"
              sideOffset={7}
              alignOffset={100}
              className="w-[calc(270px-40px)]]:!important"
            >
              <DropdownMenu.Label
                className="DropdownMenuLabel"
                style={{ marginBottom: "4px" }}
              >
                <Flex gap="2" align="center">
                  <Blockie size={18} address={address} />
                  <Flex direction="column">
                    <Text as="div" size="2" weight="medium">
                      {constrictAddress(address, 8, 8)}
                    </Text>
                  </Flex>
                </Flex>
              </DropdownMenu.Label>

              <DropdownMenu.Item
                onSelect={() => {}}
                style={{
                  cursor: "pointer",
                }}
              >
                <Flex gap="3" align="center">
                  <CopySimple size={18} />
                  <Text as="div" size="2" weight="medium">
                    Copy address
                  </Text>
                </Flex>
              </DropdownMenu.Item>

              <DropdownMenu.Item
                color="red"
                style={{
                  cursor: "pointer",
                }}
                onSelect={() => {
                  // disconnect();
                }}
              >
                <Flex gap="3" align="center">
                  <MinusCircle size={18} />
                  <Text as="div" size="2" weight="medium">
                    Disconnect wallet
                  </Text>
                </Flex>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ) : (
          <w3m-button />
        )}
      </div>

      <div className="sidebar__menu">
        <p className="sidebar__menu-header text-[#808080]">Dashboard</p>
        <ul>
          {navlinks.overview.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item?.link}
                  className={({ isActive, isPending }) =>
                    isPending || !isActive
                      ? "sidebar__menu-item"
                      : "sidebar__menu-item--active"
                  }
                >
                  {({ isActive, isPending, isTransitioning }) => (
                    <Fragment>
                      {item?.icon(isActive)}
                      <Text as="div" size="2" weight="medium">
                        {item?.name}
                      </Text>
                    </Fragment>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <p className="sidebar__menu-header text-[#808080]">System</p>
        <ul>
          {navlinks.system.map((item, index) => {
            return (
              <li key={index}>
                <a
                  target="_blank"
                  href={item?.link}
                  className="sidebar__menu-item"
                >
                  {item?.icon}
                  <Text as="div" size="2" weight="medium" className="flex-1">
                    {item?.name}
                  </Text>
                  <ArrowUpRight size={16} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebar__footer">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button
              size="3"
              color="gray"
              radius="full"
              variant="surface"
              // className="focus:outline-none"
              style={{
                cursor: "pointer",
              }}
            >
              <Flex gap="2" align="center" direction="row" justify="center">
                <Gear size={16} />
                <Box>
                  <Text as="div" size="2" weight="medium">
                    Settings
                  </Text>
                </Box>
              </Flex>
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content sideOffset={10}>
            <DropdownMenu.Label className="DropdownMenuLabel">
              Theme
            </DropdownMenu.Label>

            {["dark", "light", "system"].map((item, index) => {
              return (
                <DropdownMenu.CheckboxItem
                  key={index}
                  checked={theme === item}
                  className="DropdownMenuCheckboxItem"
                  style={{ textTransform: "capitalize" }}
                  onCheckedChange={() => {
                    setTheme(item as AppTheme);
                  }}
                >
                  {item} Mode
                </DropdownMenu.CheckboxItem>
              );
            })}

            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘+H" onSelect={() => {}}>
              Hide balance
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Sidebar;
