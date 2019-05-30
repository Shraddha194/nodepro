var express=require('express');
var router=express.Router();
var employee=require('../Models/empmodel');

router.get('/',function(req,res,next){
    employee.getAllEmp(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/:id?',function(req,res,next){
    employee.getEmpById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    employee.addEmp(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.delete('/:id',function(req,res,next){
    employee.deleteEmp(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:id',function(req,res,next){
    employee.updateEmp(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;