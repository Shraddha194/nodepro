var db=require('../dbconnection');
var hotel={
    getAllHotel:function(callback){
        return db.query("select * from hotel_table",callback);
    },
    getHotelById:function(id,callback){
        return db.query("select * from hotel_table where hotel_id=?",[id],callback);
    },
    addHotel:function(item,callback){
        
        return db.query("insert into hotel_table values(?,?,?,?,?,?,?,?,?)",[item.hotel_id,item.hotel_name,item.owner_name,item.mo_no,item.email,item.star_cat,item.owner_type,item.city,item.pincode],callback);
    },
    deleteHotel:function(id,callback){
        return db.query("delete from hotel_table where hotel_id=?",[id],callback);
    },
    updateHotel:function(id,item,callback){
        return db.query("update hotel_table set hotel_name=?,owner_name=?,mo_no=?,email=?,star_cat=?,owner_type=?,city=?,pincode=? where hotel_id=?",[item.hotel_name,item.owner_name,item.mo_no,item.email,item.star_cat,item.owner_type,item.city,item.pincode,id],callback);
    }
}
module.exports=hotel;