
  function mapper_coin(data) {
    let rubber_to_coin = {
      coin_id: 4,
      coin_rank: data.coingecko_rank,
      coin_Name: data.name,
      coin_slug: data.id,
      coin_symbol: data.symbol,
      coin_address: data.contract_address,
      circulatingSupply: data.market_data.circulating_supply,
      totalSupply: data.market_data.total_supply,
      maxSupply: data.market_data.max_supply
    };
    return rubber_to_coin
    /*
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
      .then(response => console.log('Success:', response));*/
  }

  export function geeko_rubber_data_ILV() {
    var Time = 1800000;
    const url = new URL("https://api.coingecko.com/api/v3/coins/illuvium/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic");
  
    fetch(url, {method: "GET", headers: {"Content-Type": "application/json"}})
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        mapper_coin(response, url); // Pass the url to the function
        postMessage(mapper_coin(response)); // This line seems unnecessary
      })
      .then(() => setTimeout(geeko_rubber_data_ILV, Time)); // Use a function reference here
  }
  
  geeko_rubber_data_ILV();