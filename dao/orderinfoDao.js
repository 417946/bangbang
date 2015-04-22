var  jdbcTemplate = require('./mysql/jdbcTemplate');
var  tableinfo = require('./mysql/tableinfo').tableinfo;
var tableName = tableinfo.orderinfo;
/**
 * 添加
 */
exports.save = function (order,callback) {
    var sql ="insert into ?? (userId,location,tolocation,content,fee,status,type) values(?,?,?,?,?,?,?)";
    jdbcTemplate.query(sql,[tableName,order.userId,order.location,order.tolocation,order.content,order.fee,order.status,order.type],function(err,result,fields){
        return callback(err, result);
    });
};
/**
 * 更新
 */
exports.updateStatus = function (order,callback) {
    var sql ="update ?? set status=? where id=?";
    jdbcTemplate.query(sql,[tableName,order.status,order.id],function(err,result,fields){
        return callback(err, result.affectedRows);
    });
};
exports.updateType = function (order,callback) {
    var sql ="update ?? set status=? where type=?";
    jdbcTemplate.query(sql,[tableName,order.type,order.id],function(err,result,fields){
        return callback(err, result.affectedRows);
    });
};
exports.getById = function (id,callback) {
    var sql ="select * from ?? where id=?";
    jdbcTemplate.query(sql,[tableName,id],function(err,result,fields){
        return callback(err, result.length>0?result[0]:null);
    });
};
exports.del = function (id,callback) {
    var sql = "delete from ?? where id=?";
    mysql.query(sql,[tableName,id],function(err,results,fields){
        callback(err,results.affectedRows);
    });
}