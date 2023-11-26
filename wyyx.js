/***********************************
> 脚本名称：网易云会员解锁demo
> 软件版本：3.45.1
> 脚本作者：kira
> 解锁说明：网易云会员共享脚本，抓CK，往里放！
> 更新时间：2023-11-26
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇️🎇️🎇️
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇️🎇️🎇️️

[rewrite_local]

^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header wyyx.js
[mitm] 
hostname = *.music.163.com

***********************************/


// 修改请求头，设置 Cookie、User-Agent、MConfig-Info

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = '抓CK，往里放';
modifiedHeaders['User-Agent'] = '抓UA，往里放';
modifiedHeaders['MConfig-Info'] = '抓MI，往里放';

$done({ headers: modifiedHeaders });

