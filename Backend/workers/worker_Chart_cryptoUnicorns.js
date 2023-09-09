function mapper_chart(data) {
    let rubber_to_chart;
    rubber_to_chart = {
      close_val: parseFloat(data.market_cap.usd),
      volume: parseFloat(data.volume_24h.usd),
      high: 0,
      chain_id: 1,
      Liquity:0,
      coin_id: 10, //getCoinID(data.symbol),
    };
    return rubber_to_chart}

  function geeko_rubber_data_CryptoU() {
      var Time = 1890000;
      url = "https://api.coingecko.com/api/v3/nfts/crypto-unicorns";
      fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => console.log('request  Success:',res.json().then(
          function(value) {
            let msg = mapper_chart(value)
            //console.log("ANTES DE ENVIAR A API",msg)
            postMessage(msg)
            },
          function(error) {
            console.error('Error:', error) 
          }
        )))
        .then(setTimeout('geeko_rubber_data_CryptoU()', Time));
    }


    geeko_rubber_data_CryptoU();