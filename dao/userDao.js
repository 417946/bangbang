var  jdbcTemplate = require('./mysql/jdbcTemplate');
var  tableinfo = require('./mysql/tableinfo').tableinfo;
var tableName = tableinfo.user;
/**
 * 添加
 */
exports.save = function (user,callback) {
    var sql ="insert into ?? (username,phoneNo,password) values(?,?,?)";
    jdbcTemplate.query(sql,[tableName,user.username,user.phoneNo,user.password],function(err,result,fields){
        return callback(err, result);
    });
};
/**
 * 更新
 */
exports.updatePhone = function (user,callback) {
    var sql ="update ?? set phoneNo=? where id=?";
    jdbcTemplate.query(sql,[tableName,user.phoneNo,user.id],function(err,result,fields){
        return callback(err, result.affectedRows);
    });
};
exports.updatePwd = function (user,callback) {
    var sql ="update ?? set password=? where id=?";
    jdbcTemplate.query(sql,[tableName,user.password,user.id],function(err,result,fields){
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