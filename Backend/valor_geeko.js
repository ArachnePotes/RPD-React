//NFT => cambiar link y mapeo
//w = new Worker('../assets/js/geeko_rubber_data_all_coins.js');
//axs = new Worker('./workers/worker_Chart_AXS.js')
//setTimeout(axs_coin = new Worker('../assets/js/workers/worker_coin_axs.js'),36000)
//setTimeout(loka = new Worker('../assets/js/workers/worker_LOKA.js'),60*2*1000)
//setTimeout(ilv = new Worker('../assets/js/workers/worker_ILV.js'),60*4*1000)
//setTimeout(sand = new Worker('../assets/js/workers/worker_SAND.js'),60*1*1000)
//setTimeout(BigTime = new Worker('../assets/js/workers/worker_BIGTIME.js'),60*4*1000)
// setTimeout(pixel = new Worker('../assets/js/workers/worker_pixel.js'),60*3*1000)//NFT
//setTimeout(castaways = new Worker('../assets/js/workers/worker_castaways.js'),60*4*1000)//NFT
//setTimeout(cc = new Worker('../assets/js/workers/worker_CC.js'),60*1*1000)//NFT
//setTimeout(champAsc = new Worker('../assets/js/workers/worker_ChampAsc.js'),60*2*1000)//NFT
//setTimeout(eve = new Worker('../assets/js/workers/worker_EVE.js'),60*3*1000)//NFT
////setTimeout(uniC = new Worker('../assets/js/workers/worker_cryptoUnicorns.js'),60*2*1000)//NFT
////setTimeout(split = new Worker('../assets/js/workers/worker_Spliter.js'),60*3*1000)//NFT
////setTimeout(myPetHol = new Worker('../assets/js/workers/worker_mypethol.js'),60*1*1000)//NFT

function mapper_coin(data) {
    let rubber_to_coin = {
      coin_id: 2,
      coin_rank: data.coingecko_rank,
      coin_Name: data.name,
      coin_slug: data.id,
      coin_symbol: data.symbol,
      coin_address: data.contract_address,
      circulatingSupply: data.market_data.circulating_supply,
      totalSupply: data.market_data.total_supply,
      maxSupply: data.market_data.max_supply
    };
  
    /*let url = 'http://localhost:8080/update/coin';
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
      */
    return rubber_to_coin
  }

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
        coin_id: 2, //getCoinID(data.symbol),
    };
    return rubber_to_chart
/*
console.log(
    "chart_data" ,rubber_to_chart,
    "coin_data",rubber_to_coin,
    "paises_ltt",rubber_to_countries_played
)
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
*/
}

// mapper nft

export function geeko_shaped_data_axs() {
    var Time = 1800000;
    let url = new URL ('https://api.coingecko.com/api/v3/coins/axie-infinity/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic')
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>
        console.log(
          'Success:',
          mapper_coin(response), //la var que necesito para push
          postMessage(mapper_chart(response)) //sirve para debug
        )
      )
      .then(setTimeout(geeko_shaped_data_axs(), Time));
}

export function geeko_rubber_data_LOKA() {
    var Time = 1800000;
    url = "https://api.coingecko.com/api/v3/coins/league-of-kingdoms/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic"
    fetch(url, {
        method: "GET",headers: {"Content-Type": "application/json",},})
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:",
                                    mapper_chart(response),

                                    postMessage( mapper_chart(response) ) //sirve para debug 
                                    ))
    .then( setTimeout("geeko_rubber_data_LOKA()",Time))    
}

export function geeko_rubber_data_SAND() {
    var Time = 1800000;
    url = "https://api.coingecko.com/api/v3/coins/the-sandbox/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic"
    fetch(url, {
        method: "GET",headers: {"Content-Type": "application/json",},})
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:",
                                    mapper_chart(response),
                                    postMessage( mapper_chart(response) ) //sirve para debug 
                                    ))
    .then( setTimeout("geeko_rubber_data_SAND()",Time))    
}

export function geeko_rubber_data_ILV() {
    var Time = 1800000;
    url = "https://api.coingecko.com/api/v3/coins/illuvium/?localization=true?tickers=true?community_data=true?developer_data=true?vs_currency=usd,eth,btc,matic"
    fetch(url, {
        method: "GET",headers: {"Content-Type": "application/json",},})
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:",
                                    mapper_chart(response),

                                    postMessage( mapper_chart(response) ) //sirve para debug 
                                    ))
    .then( setTimeout("geeko_rubber_data_ILV()",Time))    
}

export function geeko_rubber_data_BigT() {
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