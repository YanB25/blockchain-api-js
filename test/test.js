const sonmApi = require('../index');
const vasyaCfg = require('./data/Vasya_11111111.json');
const { createSonmFactory } = sonmApi;
const URL_PRIVATE_CHAIN = "http://server.bensyan.top:7545"
let VASYA, PETYA, tokenList, sonmTokenAddress, sideChainSonmToken, sonmToken;

var test=async function () {
    // this.timeout(+Infinity);
    const vasyaSidechainClient = createSonmFactory(URL_PRIVATE_CHAIN, 'testrpc', true);
    var vasyaPrivateKey="4dcfde06f6c12ad57eaeb968ff52dc810678a99e85bc2b2379e25bd4b67d5f65"
    var sidechainVASYA = await vasyaSidechainClient.createAccount(vasyaCfg.address);
    vasyaSidechainClient.setPrivateKey(vasyaPrivateKey);
    console.log("PART 1");
    const res = await sidechainVASYA.createOrder({
        orderType: 1,
        price: '30888888',
    });
    console.log("This is my mark")
    console.log(res);
    expect(true).equal(true);
}

// init();
test();