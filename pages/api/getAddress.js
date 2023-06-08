import { signer } from "./wallet";

export default async function getAddress(req, res) {
  res.status(200).json({ address: await signer.getAddress() });
}