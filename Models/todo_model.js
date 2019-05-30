var db=require('../dbconnection');
var todo={
    getAllTask:function(callback){
        return db.query("select * from todo_table",callback);
    },
    getTaskById:function(id,callback){
        return db.query("select * from todo_table where id=?",[id],callback);
    },
    addTask:function(item,callback){
        return db.query("insert into todo_table values(?,?,?)",[item.id,item.title,item.status],callback);
    },
    deleteTask:function(id,callback){
        return db.query("delete from todo_table where id=?",[id],callback);
    },
    updateTask:function(id,item,callback){
        return db.query("update todo_table set title=?,status=? where id=?",[item.title,item.status,id],callback);
    }
}
module.exports=todo;