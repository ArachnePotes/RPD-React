
  function mapper_coin(data) {
    let rubber_to_coin = {
      coin_id: 7,
      coin_rank: data.coingecko_rank,
      coin_Name: data.name,
      coin_slug: data.id,
      coin_symbol: data.symbol,
      coin_address: data.contract_address,
      circulatingSupply: data.market_data.circulating_supply,
      totalSupply: data.market_data.total_supply,
      maxSupply: data.market_data.max_supply
    };
  
    let url = 'http://localhost:8080/update/coin/';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(rubber_to_coin), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  
  function geeko_rubber_data_BigT() {
      var Time = 1800000;
      url = "https://api.coingecko.com/api/v3/coins/spacelens/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic"
      fetch(url, {
          method: "GET",headers: {"Content-Type": "application/json",},})
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:",
      mapper_coin(response),
                                      postMessage( mapper_coin(response) ) //sirve para debug 
                                      ))
      .then( setTimeout("geeko_rubber_data_BigT()",Time))    
  }
  
  
  geeko_rubber_data_BigT();