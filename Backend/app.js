import express from "express"
import cors from "cors"; // Importa el paquete cors
import { GetGamesData,GetGameById, AddUserPOST, addUserTsx_ID, addUserTsx } from './User.js'
import { GameCategories,getChartData, getValue , UpdateChartDB ,UpdateChart_Geeko, getChartDataTimmed} from "./chart_funtions.js"
import { getChainIdBySlug, getCoinID,getCoinIDbySlug ,updateCoin} from "./coin.js";

const app = express();
app.use(cors());
app.use( express.json() )
//

app.get('/games',  async (req, res) => {
    const games = await GetGamesData()
    res.send(games)
  })

app.get("/games/:id",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const id = req.params.id
  const game = await GetGameById(id)
  res.send(game)
})


app.post('/newuser/', async (req, res) => {
  /* POST REQUEST to add User into the database 
  Returns Created and the corresponding data of the table
  */
  const {user_name, last_name,wallet,user_mail,user_country} = req.body
  const user = await AddUserPOST(user_name, last_name,wallet,user_mail,user_country)
  res.sendStatus(201)//.sendStatus(user)
})

app.get("/chart/:chain/:coin/",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chain = req.params.chain
  const coin = req.params.coin
  const chart = await getChartData(coin,chain)
  res.sendStatus(chart)
})


app.post('/tsx', async (req, res) => {
  /* POST REQUEST to add User into the database 
  Returns Created and the corresponding data of the table
  */
  const {coin_id,tsx_hash,user_wallet,recipient_wallet,amount} = req.body
  const tsx = await addUserTsx(coin_id,tsx_hash,user_wallet,recipient_wallet,amount)
  res.send(tsx)
})

app.post("/chart/:game/:currency/",  async (req, res) => {
  /*Http request to get the last value of a game based on the slug and curreancy*/
  const game = req.params.game
  const currency = req.params.currency
  var data = await getValue(game,currency)
  var update = await UpdateChartDB(game,data,currency)
  res.sendStatus(201)
})

app.get("/chart/games/category/mapped",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chart = await GameCategories()
  const Yaxis = chart.map((value) => 
  value = {
    "x" : value.game_category,
    "y" : value.count
  }); 

  res.send(Yaxis)
})


app.get("/chart/:chain/:coin/mapped",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chain = req.params.chain
  const coin = req.params.coin
  const chart = await getChartData(coin,chain)
  const Yaxis = chart.map((value) => 
  value = {
    "x" : new Date(value.date_val).toDateString(),
    "y" : value.close_val
  }); 
  //res.sendStatus(200)
  res.send(Yaxis)
})


app.get("/chart/:chain/:coin/volume/mapped",  async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chain = req.params.chain
  const coin = req.params.coin
  const chart = await getChartData(coin,chain)
  const Yaxis = chart.map((value) => 
  value = {
    "x" : new Date(value.date_val).toDateString(),// to date string
    "y" : value.volume
  }); 
  //res.sendStatus(200)
  res.send(Yaxis)
})



app.get("/chart/:chain/:coin/:time/mapped", async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const chain = req.params.chain
  const coin = req.params.coin
  const time = req.params.time
  const chart = await getChartDataTimmed(coin,chain,time)
  const Yaxis = chart.map((value) => 
  value = {
    "x" : new Date(value.date_val).toDateString(),// todatestring
    "y" : value.close_val
  });
  res.send(Yaxis)
});

app.get("/chart/:chain/:coin/:time/volume/mapped", async (req, res) => {
   /*Http request to get the data of a game based on the id*/
   const chain = req.params.chain
   const coin = req.params.coin
   const time = req.params.time
   const chart = await getChartDataTimmed(coin,chain,time)
   const Yaxis = chart.map((value) => 
   value = {
     "x" : new Date(value.date_val).toDateString(),// todatestring
     "y" : value.volume
   });
   res.send(Yaxis) 
});


app.post("/update/chart",  async (req, res) => {
  /*Http request to get the last value of a game based on the slug and curreancy*/
  //const {coin_id, coin_rank, coin_Name, coin_slug, coin_symbol, coin_address, circulatingSupply , totalSupply, maxSupply } = req.body
  //const user_id = await GetUserIDbyWallet(user_wallet)
  const {close_val,volume,high,chain_id,Liquity,coin_id} = req.body
  const upp = await UpdateChart_Geeko(close_val,volume,high,chain_id,Liquity,coin_id)
 // console.log("a express le esta llegando: ",req.body)
  res.sendStatus(201)
});

app.post("/update/coin",  async (req, res) => {
  /*Http request to get the last value of a game based on the slug and curreancy*/
  //const {coin_id, coin_rank, coin_Name, coin_slug, coin_symbol, coin_address, circulatingSupply , totalSupply, maxSupply } = req.body
  //const user_id = await GetUserIDbyWallet(user_wallet)
  const  {coin_id,coin_rank,coin_Name,coin_slug,coin_symbol,coin_address,circulatingSupply,totalSupply,maxSupply} = req.body
  //console.log("a express le esta llegando: ",req.body)
  const upp = await updateCoin(coin_rank,coin_Name,coin_slug,coin_symbol,coin_address,circulatingSupply,totalSupply,maxSupply,coin_id)
  res.sendStatus(201)
});

app.get("/tests/:chain/:game_slug/:timelap", async (req, res) => {
  /*Http request to get the data of a game based on the id*/
  const _chain = req.params.chain
  const _game_slug = req.params.game_slug
  const _timelap = req.params.timelap
  const data = {
    chain : _chain,
    game_slug : _game_slug,
    timelaps : _timelap,
    message : "This is a test"
  }
  const coin = await getCoinIDbySlug(_game_slug)
  const chain_id = await getChainIdBySlug(_chain)
  const chart = await getChartData(2,2)//arreglar con mas datos
  const chart_mapped = chart.map((value) => 
  value = {
    "x" : value.date_val,
    "y" : value.close_val
  }); 
  //const data = await getChartData_CoinGeeko(chain,game_slug,"5",timelap)
  //const chart = await MapRawGeeko(data)
  /*const table = new Object(data['prices'])
  const chart = table.map((value) => 
        value = {
        "x": value[1],
        "y": new Date(value[0]).toLocaleString()
        })*/
  res.status(200).sendStatus(chart_mapped)
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendStatus(500).sendStatus('Something broke!')
});

app.listen(8080,() => {
    console.log("Server Running on port 8080")
});


