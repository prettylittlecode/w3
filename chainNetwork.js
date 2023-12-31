const network = [
    { ID: '1', chainName: 'Ethereum Main Network (Mainnet)'},
    { ID: '3', chainName: 'Ropsten Test Network'},
    { ID: '4', chainName: 'Rinkeby Test Network'},
    { ID: '5', chainName: 'Goerli Test Network'},
    { ID: '42', chainName: 'Kovan Test Network'},
    { ID: '137', chainName: 'Polygon Main Network'},
    { ID: '43113', chainName: 'Fuji Test Network'},
    { ID: '588', chainName: 'Metis Stardust Test Network'},
    { ID: '1313161554', chainName: 'Aurora Main Network'},
    { ID: '1313161555', chainName: 'Aurora Test Network'},
    { ID: '56', chainName: 'Binance Smart Chain Main Network'},
    { ID: '97', chainName: 'Binance Smart Chain Test Network'},
    { ID: '250', chainName: 'Fantom Opera Main Network'},
    { ID: '4002', chainName: 'Fantom Test Network'},
];

function getNetwork( id ){
    let index = network.findIndex( e => e.ID === id );
    let chainName = 'Unknown network';
    if( index >= 0 ){
        chainName = network[index].chainName;
    }
    return '<p><i class="fa fa-link"></i>' + chainName + '</p>';
   
}
