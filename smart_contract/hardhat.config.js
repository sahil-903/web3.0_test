// https://eth-goerli.g.alchemy.com/v2/uoETZMg4_MX6KzFSIZElFph6ncozfqbG

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/uoETZMg4_MX6KzFSIZElFph6ncozfqbG',
      accounts: [ '9806c503ee4428e89703a5408ca1baf56f72e9560672f519bc17049e78543543' ]
    }
  }
}