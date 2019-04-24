module.exports = {
    livenet: {
        url: 'https://mainnet.infura.io',
        contractAddress: {},
    },
    livenet_private: {
        url: 'https://sidechain.livenet.sonm.com',
        contractAddress: {
            addressRegistry: '0x70a884df5916196775cb2ff6016e36a5ba30df92',
        },
    },
    rinkeby: {
        url: 'https://rinkeby.infura.io',
        contractAddress: {},
    },
    rinkeby_private: {
        url: 'https://sidechain-dev.sonm.com',
        contractAddress: {
            addressRegistry: '0x70a884df5916196775cb2ff6016e36a5ba30df92',
        },
    },
    testrpc: {
        url: 'http://server.bensyan.top:8545',
        contractAddress: {},
    },
    testrpc_private: {
        url: 'http://server.bensyan.top:7545',
        contractAddress: {
            addressRegistry: "0x70a884df5916196775cb2ff6016e36a5ba30df92",
        },
    },
};