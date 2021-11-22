require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pulse hunt glide force spring'; 
let testAccounts = [
"0xf2087941a65718eb4a84592a97ea890c2acc8f1d6a13d6171f32e5b8e1a5fe47",
"0xdacf53d1e0f701431d96f32a58f5c20aed1b6aa7e04eff66fc99a7cc59101b28",
"0x2bb85a3d2be7d785bb882866b6756aafa7eb02c9f5b08e168c0bcc48e10cbd93",
"0x81cdcf33464384b8ba2cf45c8ea1fe96d81b7d85b9284dbb6df8db46caf93333",
"0xb9fe746bd22e47ad069343ea35649cab628aa7ebe0af6e0e1194bc84d1c21039",
"0x7e1b4d8754a7fe86cef8e6bda5bd3d662d8fc4a658c3b6e01c6336f651f9ec08",
"0xb664a4dab8da3a0dab83d969a2dbf9e7d4dbf5216bd760d7a1146529d0b944f0",
"0x3333f834895893b4d6368d9d8bed6c538832ff5c4182e0f104cb95284d05e8b6",
"0x7029eb03d81abb5d01c412a797e284fc7fbd22fff8b3212fb2b7853394d73ce1",
"0x587c41ddbefda87116f1389381a3b0ca2c0a86da6bc12622088b61ea2a539a11"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


