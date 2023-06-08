import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const startModules = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjgyZjQyYTBlLWY0Y2ItNDE1NS1hOTcyLWNkNGY5OGM0NTdkZSIsIm9yZ0lkIjoiODAzODAiLCJ1c2VySWQiOiI4MDAyNCIsInR5cGVJZCI6Ijk4MDBlYzNhLTk5ODMtNDQ2OS05N2NkLTFiYzM4NjdhZjIwMiIsInR5cGUiOiJQUk9KRUNUIiwiaWF0IjoxNjg2MTY1MzcxLCJleHAiOjQ4NDE5MjUzNzF9.R-8IG1oEdUZL8Vfe3KtKjB5V9_yRQjuZaVOyfrG9Lt4",
    // ...and any other configuration
  });
}

startModules();


export default async function getTransactions(req, res) {
  const {address} = req.body;

  const chain = EvmChain.SEPOLIA;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

  res.status(200).json(response.toJSON());
}