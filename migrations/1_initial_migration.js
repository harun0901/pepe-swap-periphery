const PepeRouter = artifacts.require('PepeRouter');

module.exports = function(deployer, network) {
  let factoryAddress;
  let wbnbAddress;
  switch (network) {
    case 'bscTestNet': {
      factoryAddress = '0x20110F8182E38d69aD400Bb09478aA8132C2E29B';
      wbnbAddress = '0x094616f0bdfb0b526bd735bf66eca0ad254ca81f';
      break;
    }
    case 'bsc': {
      // TODO: fill up factoryAddress and wbnbAddress on the mainnet
      return;
      break;
    }
    default: {
      console.log('Error - Unregistered network type');
      return;
    }
  }

  deployer.deploy(PepeRouter, factoryAddress, wbnbAddress).then(() => {
    console.log('Pepe Router is deployed.');
  });
};
