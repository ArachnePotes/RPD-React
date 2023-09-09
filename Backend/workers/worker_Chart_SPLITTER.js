function mapper_coin(data) {
    let rubber_to_coin = {
      coin_id: 10,
      coin_rank: 0,
      coin_Name: data.name,
      coin_slug: data.id,
      coin_symbol: data.symbol,
      coin_address: data.contract_address,
      circulatingSupply: parseInt(data.number_of_unique_addresses),
      totalSupply: parseInt(data.total_supply),
      maxSupply: 0
    };
     return rubber_to_coin
  }
  
  function geeko_rubber_data_CryptoU() {
    var Time = 1818100;
    // problem with url
    url = "https://api.coingecko.com/api/v3/nfts/splittershards";
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => console.log('request  Success:',res.json().then(
        function(value) {
          let msg = mapper_coin(value)
          //console.log(msg)
          postMessage(msg)
          },
        function(error) {
          console.error('Error:', error) 
        }
      )))
      .then(setTimeout('geeko_rubber_data_CryptoU()', Time));
  }
  
  
  
  geeko_rubber_data_CryptoU();