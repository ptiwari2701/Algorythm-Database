const router = require('express').Router();
const services = require('./services');
const excel = require('exceljs');
let workbook = new excel.Workbook();
var t=0;
router.post('/',(req,res)=>{
    services.writeToXLS();
    
});
router.get("/",(req,res)=>{
 res.send("hi");
});

module.exports=router;