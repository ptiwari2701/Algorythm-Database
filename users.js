const router = require('express').Router()
const services = require('./services');
router.post('/',(req,res)=>{
    services.dbQuerry("Insert into algo.dummy (Booklet, Receipt, Name, Fathers_Name, Contact, Email, University_Code, University_Id, Accomodation, Transport, Event, Amount) values ('"+req.body.Booklet+"','"+req.body.Receipt+"','"+req.body.Name+"','"+req.body.Fathers_Name+"','"+req.body.Contact+"','"+req.body.Email+"','"+req.body.University_Code+"','"+req.body.University_Id+"','"+req.body.Accomodation+"','"+req.body.Transport+"','"+req.body.Event+"','"+req.body.Amount+"')",(result)=>{
        res.json("Record Inserted");
    });
});
router.get('/',(req,res)=>{
    services.getAllData((result)=>{
        res.json(result);
    });
});
router.get('/dummy',(req,res)=>{
    services.tempToPerm(()=>{
        res.json("Success");
    });
})
module.exports = router;