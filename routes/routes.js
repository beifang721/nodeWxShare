/**
 * Created by Huanbei_dev3 on 2017/3/29.
 */
var path = require('path');
var signature = require('../signature');
var config = require('../config')();
var createSignature = signature.getSignature(config);//调用生成签名的方法

module.exports = function(app){
    //app.post('*', getSignature);
    app.get('*', fun);
}

function fun(req, res) {
    var u = req.query.url;//得到当前url地址生成签名
    createSignature(u, function(error, result) {
        console.log(u);
        if (error){
            res.send({
                'error': error
            });
        }else{
            res.send(result);//传送相应的签名数据
        }
        //res.render('../public/wxshare.html', result);
    });

}

function getSignature(req, res) {
    var url = req.body.url;
    //console.log(url);
    createSignature(url, function(error, result) {
        if (error) {
            res.json({
                'error': error
            });
        } else {
            res.json(result);
        }
    });
}
