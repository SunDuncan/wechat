/**
 * @Author: Duncan
 * @Date: 2017-01-14
 * @Last Modified by:
 * @Last Modified time:
 * @function: 微信相关 
 */

 var Weixin = function() 
 {
 	this.data = '';
 	this.msgType = 'text';
 	this.fromUserName = '';
 	this.toUserName = '';
 	this.funcFlag = 0;
 }

/**
*第一步，验证开发者的身份
*/
 //验证开发者
 Weixin.prototype.checkSignature = function (req)
 {
 	//获取校验的参数
 	this.signature = req.query.signature;
 	this.timestamp = req.query.timestamp;
 	this.nonce = req.query.nonce;
 	this.echostr = req.query.echostr;

 	//按照字典排序
 	var array = [this.token, this.timestamp, this.nonce];
 	array.sort();

 	//链接
 	array.sha1(array.join(''));

 	//对比签名
 	if (str == this.signature)
 	{
 		return true;
 	} else {
 		return false;
 	}
 }

 module.exports = new Weixin();