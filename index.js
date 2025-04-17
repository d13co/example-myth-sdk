import { AlgorandClient } from "@algorandfoundation/algokit-utils";
import { DualStake, Environment } from "@myth-finance/dualstake-ts-sdk";

const algodConfig = { server: "https://mainnet-api.4160.nodely.dev" }

const config = {
    dsRegistryAppId: 2933409454,
    // used for simulate
    sender: "A7NMWS3NT3IUDMLVO26ULGXGIIOUQ3ND2TXSER6EBGRZNOBOUIQXHIBGDE",
    algorand: AlgorandClient.fromConfig({ algodConfig }),
}

const listings = await DualStake.getAvailableContractListings(config)

listings.forEach(({ lstName, staked }) => console.log(lstName, Number(staked) / 1e6));

const tvl = [...listings.values()].map(({ staked: s }) => s).reduce((a, b) => a + b)
console.log("TVL", Number(tvl) / 1e6);