const mysql=require('mysql');
let con=mysql.createPool({
    connectionLimit : 10,
    host:'localhost',
    user:'root',
    password:'password'
});

con.getConnection((err,connection)=>{
    if(err){
        throw err;
    }
    return
})

module.exports = con;