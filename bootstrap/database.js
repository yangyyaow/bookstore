/*
* 数据库连接
* */
const config = require('../config/index')
const mongoose = use('mongoose');

let uri='';
if(config.mongodb.auth == true){
    //认证数据库
    //  uri = 'mongodb://username:password@127.0.0.1:27017/bookstore';
    uri = `mongodb://${config.mongodb.username}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`
}else{
//非认证数据库

     uri = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`

}

const db = mongoose.connect(uri).then(()=>{
    console.log('数据库连接成功!')
}).catch(err=>{
    console.log('数据库连接失败!'+err)
});

module.exports = db;