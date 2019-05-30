var db=require('../dbconnection');
var employee={
    getAllEmp:function(callback){
        return db.query("select * from emp_table",callback);
    },
    getEmpById:function(id,callback){
        return db.query("select * from emp_table where emp_id=?",[id],callback);
    },
    addEmp:function(item,callback){
        return db.query("insert into emp_table values(?,?,?,?)",[item.emp_id,item.emp_name,item.emp_salary,item.emp_desg],callback);
    },
    deleteEmp:function(id,callback){
        return db.query("delete from emp_table where emp_id=?",[id],callback);
    },
    updateEmp:function(id,item,callback){
        return db.query("update emp_table set emp_name=?,emp_salary=?,emp_desg=? where emp_id=?",[item.emp_name,item.emp_salary,item.emp_desg,id],callback);
    }
}
module.exports=employee;