import { ethers } from "ethers";
import { provider } from "./wallet";

export default async function getBalance(req, res) {
  const { address } = req.body;

  const balance_wei = await provider.getBalance(address);
  res.status(200).json({
    balance: parseFloat(ethers.utils.formatEther(balance_wei)).toFixed(4)
  });
}