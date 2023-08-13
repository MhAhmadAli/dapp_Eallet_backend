import User from "../models/user.model";
import { ethers } from "ethers";

export default async function createUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      error: "Email and password are required"
    });
    return;
  }
  
  const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
  const address = ethers.Wallet.fromMnemonic(mnemonic).address;

  const user = new User({
    email,
    password,
    address,
    mnemonic
  });

  await user.save();

  res.status(200).json({
    user
  });
}