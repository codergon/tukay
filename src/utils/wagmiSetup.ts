import { mainnet, arbitrum } from "viem/chains";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

const projectId = import.meta.env.TUKAY_WALLET_CONNECT_PROJECT_ID;

const metadata = {
  name: "Tukay",
  url: "https://web3modal.com",
  description: "Win prizes, airdrops and more",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
export const wagmiConfig = defaultWagmiConfig({ chains, metadata, projectId });

createWeb3Modal({ chains, projectId, wagmiConfig });
