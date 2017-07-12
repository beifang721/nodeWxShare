/**
 * Created by Huanbei_dev3 on 2017/3/29.
 */
var express = require("express");
    http = require("http"),
    request = require("request"),
    path = require("path"),
    fs = require('fs');
var template = require('art-template');
var signature = require('./signature');
var rotues = require("./routes/routes");
var config = require('./config')();

var app = express();
app.all('*', function(req, res, next) {//设置跨域访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
rotues(app);//调用路由方法
app.listen(process.env.PORT||1497);