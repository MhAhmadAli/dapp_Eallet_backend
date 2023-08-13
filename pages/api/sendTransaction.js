import User from "../models/user.model";
import { ethers } from "ethers";
import { provider } from "./wallet";

export default async function sendTransaction(req, res) {
  const { from, to, value } = req.body;
  console.log(from, to, value)

  if (!from || !to || !value) {
    res.status(400).json({
      error: "From, to and value are required"
    });
    return;
  };

  const user = await User.findOne({ address: from });

  if (!user) {
    res.status(400).json({
      error: "User not found"
    });
    return;
  };

  const wallet = ethers.Wallet.fromMnemonic(user.mnemonic);
  const signer = wallet.connect(provider);

  signer.sendTransaction({
    to: to,
    value: ethers.utils.parseEther(value)
  }).then((tx) => {
    res.status(200).json({ tx });
  }).catch((err) => {
    res.status(500).json({ err });
  });
}