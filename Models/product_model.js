var db=require('../dbconnection');
var product={
    getAllProduct:function(callback){
        return db.query("select * from product_table",callback);
    },
    getProById:function(id,callback){
        return db.query("select * from product_table where pro_id=?",[id],callback);
    },
    addProduct:function(item,callback){
        console.log(item.pro_soh);
        return db.query("insert into product_table values(?,?,?,?)",[item.pro_id,item.pro_name,item.pro_price,item.pro_soh],callback);
    },
    deleteProduct:function(id,callback){
        return db.query("delete from product_table where pro_id=?",[id],callback);
    },
    updateProduct:function(id,item,callback){
        return db.query("update product_table set pro_name=?,pro_price=?,pro_soh=? where pro_id=?",[item.pro_name,item.pro_price,item.pro_soh,id],callback);
    }
}
module.exports=product;