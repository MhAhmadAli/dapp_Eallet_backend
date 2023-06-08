import "@ethersproject/shims"
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/d03ebd52ffdf4f1e8468e95035e931c3");
const wallet = ethers.Wallet.fromMnemonic('regret today deal sail fancy desk drill observe magnet toe firm neck');
const signer = wallet.connect(provider);

export { provider, wallet, signer };