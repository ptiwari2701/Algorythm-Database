const con = require('./db')

var self = module.exports = {
    getAllData : (callback)=>{   
        self.dbQuerry("show tables in algo;",(result)=>{
            let querry="";
            for(let i=0;i<result.length;i++){
                if(i==(result.length-1)){
                    querry+="select * from algo."+result[i].Tables_in_algo;
                    break;   
                }
                querry+="select * from algo."+result[i].Tables_in_algo+" UNION DISTINCT ";
            }
            self.dbQuerry(querry,(result)=>{
                 callback(result);
            });
        });
    },
    dbQuerry : (querry,callback)=>{
        con.query(querry,function(err,result){
            if(err){
                throw err;
            }
            callback(result);
        });
    },
    tempToPerm : (callback)=>{
        let query = "SELECT * FROM algo.dummy;";
        self.dbQuerry(query,(result)=>{
            console.log(result.length);
            for(let i=0;i<result.length;i++){
                query = "Insert into algo."+result[i].Event+" (Booklet, Receipt, Name, Fathers_Name, Contact, Email, University_Code, University_Id, Accomodation, Transport, Event, Amount) values ('"+result[i].Booklet+"','"+result[i].Receipt+"','"+result[i].Name+"','"+result[i].Fathers_Name+"','"+result[i].Contact+"','"+result[i].Email+"','"+result[i].University_Code+"','"+result[i].University_Id+"','"+result[i].Accomodation+"','"+result[i].Transport+"','"+result[i].Event+"','"+result[i].Amount+"');";
                self.dbQuerry(query,(result)=>{});
            }
            callback();
        })
    }
}