var db=require('../dbconnection');
var student={
    getAllStud:function(callback){
        return db.query("select * from student",callback);
    },
    getStudById:function(id,callback){
        return db.query("select * from student where s_id=?",[id],callback);
    },
    addStud:function(item,callback){
        return db.query("insert into student values(?,?,?,?)",[item.s_id,item.s_name,item.s_city,item.s_attendance],callback);
    },
    deleteStud:function(id,callback){
        return db.query("delete from student where s_id=?",[id],callback);
    },
    updateStud:function(id,item,callback){
        return db.query("update student set s_name=?,s_city=?,s_attendance=? where s_id=?",[item.s_name,item.s_city,item.s_attendance,id],callback);
    }
}
module.exports=student;