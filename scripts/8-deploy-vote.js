import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x9a6C737b380E7c86990b88153f6331f13C034842",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      
      name: "JusForFunDAO's Hilarious Proposals",

      votingTokenAddress: "0xaB6Df0277a013442ade837f77bB71A7a11e4e2B6",

      proposalStartWaitTimeInSeconds: 0,


      proposalVotingTimeInSeconds: 24 * 60 * 60,

      votingQuorumFraction: 0,

      minimumNumberOfTokensNeededToPropose: "100",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();