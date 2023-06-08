import { signer } from "./wallet";
import { ethers } from "ethers";

export default function sendTransaction(req, res) {
  const { to, value } = req.body;
  console.log(to, value)

  signer.sendTransaction({
    to: to,
    value: ethers.utils.parseEther(value)
  }).then((tx) => {
    res.status(200).json({ tx });
  }).catch((err) => {
    res.status(500).json({ err });
  });
}