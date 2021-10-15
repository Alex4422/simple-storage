const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: () =>
          new HDWalletProvider("solar such lumber firm inhale combine old hint neutral obscure fiber dumb", "https://ropsten.infura.io/v3/0cf118ade5ad413a8bd22c155b396750"),
      network_id: 3,
      confirmations: 1,
      timeoutBlocks: 200,
      pollingInterval: 8000,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      websocket: false
    }
  }
};
