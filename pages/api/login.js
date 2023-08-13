import { ethers } from "ethers";
import User from "../models/user.model";

export default async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      error: "Email and password are required"
    });
    return;
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({
      error: "User not found"
    });
    return;
  }

  if (user.password !== password) {
    res.status(400).json({
      error: "Password is incorrect"
    });
    return;
  }

  res.status(200).json({
    user
  });
}