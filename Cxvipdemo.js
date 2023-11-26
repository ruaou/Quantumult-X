/***********************************
> 脚本名称：潮汐会员解锁demo
> 软件版本：3.45.1
> 脚本作者：kira
> 解锁说明：潮汐会员共享脚本，抓CK，往里放！
> 更新时间：2023-11-26
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇️🎇️🎇️
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇️🎇️🎇️️


[rewrite_local]

^https:\/\/tide-api\.moreless\.io\/v[12]\/(meditation\/albums|scenes) url script-request-header Cxvipdemo.js

[mitm]

hostname = tide-api.moreless.io

***********************************/

// 在请求头中修改 Cookie，用于模拟登录状态
var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = '抓CK，往里放'

$done({headers : modifiedHeaders});
