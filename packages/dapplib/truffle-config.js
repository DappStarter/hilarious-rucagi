require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile purity install brand flush spy'; 
let testAccounts = [
"0x1d8923804f0d3c5300b0766b908f99c15245d00336f80497fa1378dbcff6321b",
"0x20c8d37d35d8968bfcadbb08d13906b877bc570370038c228add9520dd38f80e",
"0x00c52afdb57d9a6392a10cf1ee94f8cbb734e2bdfceaffdae7305b6056e8bc82",
"0x1882a51315ce945800d489b7a5b8b3ef7c748ab336153d4018eab4277dd716d5",
"0x9cbaacd2fe40d2d67bfa53f4c8aab9e0e97e86bf4caf78e9a34b9bf97258c6b2",
"0x7f665df63b2a190965ccf273fecebd749471f9645ce9527426391c631793d1f5",
"0xaf9418895036842764db0e528e5d6c5f600612072bc7cbad29f4aa485501081d",
"0x3a4b15df82fab8a7bb4aa8ac9c0e4119d606b185b2fb923a1216f1b10c7f0d1c",
"0xcf7a125ed2727528c2d337542e6bbfd46644b096be74b54f54356e46153b98a9",
"0x12da00d78ca6308a01569ca12f48ff9c99efd2edad9f2b5bd72703ab0a23cdf3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
