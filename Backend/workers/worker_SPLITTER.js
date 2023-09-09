function mapper_chart(data) {
    let rubber_to_chart;

    rubber_to_chart = {
      close_val: data.market_data.current_price.usd,
      volume: data.market_data.total_volume.usd,
      high: data.market_data.high_24h.usd,
      chain_id: 1,
      Liquity: data.liquidity_score,
      coin_id: 8, //getCoinID(data.symbol),
    };
    return rubber_to_chart
  }

  function geeko_rubber_data_SPS() {
    //error with url
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