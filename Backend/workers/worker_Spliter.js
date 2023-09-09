
function mapper_chart(data) {
    let rubber_to_chart;
    /* rubber_to_devAcivity, rubber_to_stats, rubber_to_countries_played, rubber_to_chain, rubber_to_coin,rubber_to_community
    rubber_to_countries_played = data.localization
    rubber_to_stats = //should be tickers but later will be implemented
    rubber_to_community = //{data.community_data} las paginas estan en livecoin y aqui hay algo mas interesante , luego se implementa
    */
    rubber_to_chart = {
      close_val: data.market_data.current_price.usd,
      volume: data.market_data.total_volume.usd,
      high: data.market_data.high_24h.usd,
      chain_id: 1,
      Liquity: data.liquidity_score,
      coin_id: 8, //getCoinID(data.symbol),
    };
    /*
    console.log(
        "chart_data" ,rubber_to_chart,
        "coin_data",rubber_to_coin,
        "paises_ltt",rubber_to_countries_played
    )*/
    let url = 'http://localhost:8080/update/chart';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(rubber_to_chart), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
  /*
  function mapper_coin(data) {
    let rubber_to_coin = {
      coin_id: 8,
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
  }*/
  
  
  function geeko_rubber_data_SPS() {
      var Time = 1800000;
      url = "https://api.coingecko.com/api/v3/coins/splintershards/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic"
      fetch(url, {
          method: "GET",headers: {"Content-Type": "application/json",},})
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:",
                                      mapper_chart(response),

                                      postMessage( mapper_chart(response) ) //sirve para debug 
                                      ))
      .then( setTimeout("geeko_rubber_data_SPS()",Time))    
  }
  
  
  geeko_rubber_data_SPS();