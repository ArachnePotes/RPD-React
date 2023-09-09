import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST ,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()

//const result = await pool.query(" SELECT * FROM readyplayerdao.user_table ")
//const rows = result[0]
export async function GetGamesData( ){
    const [rows] = await pool.query(" SELECT * FROM readyplayerdao.game ")
    return rows
}

export async function GetLastUser() {
    // se busca en la tabla Game el id de todos los juegos, y se devuelve maximo
    // return type INT
    const [rows] = await pool.query(" SELECT max(User_ID) FROM readyplayerdao.user_table; " )
    var last = rows[0]['max(User_ID)']
    return last
}

export async function AddUser(user) {
    /*
        esta funcion añade con la siguiente estructura un usuario a la base de datos
        user_data = {
            'User_Name': "Santiago",
            'Last_Name': "Potes",
            'Wallet': '0xb0a0fA8c0eD97C60cf0B7C4902Df28Bdcd1eD233',
            'User_Mail': "mail@mail.com",
            'User_Country' : 37
        }
        #GetLastUser(DEBUG=True) ussage was innnecesary because its auto incremented 
        addUser(user_data) 
        returns int  of the id added
    */
    const [result] = await pool.query(` INSERT INTO  readyplayerdao.user_table 
                                    ( User_Name, Last_Name, Wallet, User_Mail, User_Country )
                                    VALUES (?,?,?,?,?);` ,[ user['User_Name'] , user['Last_Name'], user['Wallet'], user['User_Mail'],user['User_Country'] ] )
    return result.insertId
}


export async function GetUserIDbyWallet(wallet) {
    const [rows] = await pool.query(`
    SELECT User_ID FROM readyplayerdao.user_table
    where Wallet = ?;
    `, [wallet])
    if ( rows[0]){
        return rows[0]['User_ID'];
    }
    else {
        return 1;
    }
} 

export async function GetGameById(id){
    const [rows] = await pool.query(
    ` SELECT * FROM readyplayerdao.game WHERE game_id = ? ; `
    ,[id])
    return rows[0]
}


export async function GetUserByID(id){
    const [rows] = await pool.query(
    ` SELECT * FROM readyplayerdao.user_table WHERE User_ID = ? ; `
    ,[id])
    return rows[0]
}


export async function AddUserPOST(User_Name , Last_Name, Wallet, User_Mail,User_Country) {
    /*
        Funciona igual que add user pero esta optimizada para formularios
        returns int  of the id added
    */
    const [result] = await pool.query(` INSERT INTO  readyplayerdao.user_table 
    ( User_Name, Last_Name, Wallet, User_Mail, User_Country )
    VALUES (?,?,?,?,?); `
    , [ User_Name , Last_Name, Wallet, User_Mail, User_Country ] )
    const id = result.insertId
    return GetUserByID(id)
}

export async function GetTxsId(id){
    const [result] = await pool.query(` SELECT * FROM readyplayerdao.tsx
    where user_id = ?; `,[id])
    return result[0]
}

export async function addUserTsx(coin_id,tsx_hash,user_wallet,recipient_wallet,amount){
    const user_id = await GetUserIDbyWallet(user_wallet)
    const [result] = await pool.query(` INSERT INTO  readyplayerdao.tsx
    (coin_id, User_ID, tsx_hash, user_wallet, recipient_wallet, amount)
    VALUES ( ?, ?, ?, ?, ?, ?); `
    , [ coin_id, user_id, tsx_hash, user_wallet, recipient_wallet, amount ] )
    const id = result.insertId
    return (await GetTxsId(id))
}

export async function addUserTsx_ID(user_id,coin_id,tsx_hash,user_wallet,recipient_wallet,amount){
    const [result] = await pool.query(` INSERT INTO  readyplayerdao.tsx
    (coin_id, User_ID, tsx_hash, user_wallet, recipient_wallet, amount)
    VALUES ( ?, ?, ?, ?, ?, ?); `
    , [ coin_id, user_id, tsx_hash, user_wallet, recipient_wallet, amount ] )
    const id = result.insertId
    return (await GetTxsId(id))
}

const newtsx = await GetUserIDbyWallet('0xb1a0fA8c1eD97C60cf0B7C4902Df25Bdcd1eD233')
console.log(newtsx)



