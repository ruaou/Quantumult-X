/***********************************
> 脚本名称：喜马拉雅会员解锁demo
> 软件版本：9.18.7
> 脚本作者：kira
> 解锁说明：网易云会员共享脚本，抓CK，往里放！
> 更新时间：2023-11-26
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇️🎇️🎇️
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇️🎇️🎇️️
		  
[rewrite_local]
^https?:\/\/.*\.xima.*\.com\/(mobile-playpage/track/v3/baseInfo|mobile/v1/album/track|mobile/v1/album/detail|mobile-album/album/page|mobile/album/paid/info|mobile-playpage/playpage/tabs|product/detail/v1/basicInfo/dynamic) url script-request-header xmlavipdemo.js

[mitm]
hostname = *.xima*.*, *.xmcdn.*

***********************************/


// 在请求头中修改 Cookie，用于模拟登录状态

var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = '抓CK，往里放';

$done({ headers: modifiedHeaders });
