/**
 * @Author: Duncan
 * @Date: 2017-01-14
 * @Last Modified by:
 * @Last Modified time:
 * @function: 微信相关 
 */

 var express = require('express');
 var route = express.Router(); 
 router.get('/accesscheck' , function (req, res ,next) 
 {
 	var query = url.parse(req.url, true).query;

 	var signature = query.signature;
 	var echostr = query.echostr;
 	var timestamp = query['timestamp'];
 	var nonce = query.nonce;

 	console.log("[routes/wechatroute------------18行]" + signature);

 	var oriArray = new Array();
 	oriArray[0] = nonce;
 	oriArray[1] = timestamp;
 	oriArray[2] = 'duncan';//加入和自己在微信后台一样的标签
 	oriArray.sort();

 	var original = original.join('');
 	var md5sum = crypto.createHash("sha1");
 	md5sum.update(original);

 	var scyptoString = md5sum.digest("hex");
 	if(signature == scyptoString)
 	{
 		res.end(echostr);
 	}else
 	{
 		res.end('false');
 	}
 });