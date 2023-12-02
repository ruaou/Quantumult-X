/***********************************
> 脚本名称：网易云会员解锁demo
> 软件版本：3.45.1
> 脚本作者：kira
> 解锁说明：网易云会员共享脚本，抓CK，往里放！
> 更新时间：2023-12-2
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇️🎇️🎇️
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇️🎇️🎇️️

[rewrite_local]
# 播放器会员皮肤
^https:\/\/interface3\.music\.163\.com\/eapi\/playermode\/ url script-request-header wyyx.js

# 搜索结果会员歌曲
^https:\/\/interface3\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header wyyx.js

# 播放器会员歌曲
^https:\/\/interface3\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|type\/detail\/get) url script-request-header wyyx.js
^https:\/\/interface3\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header wyyx.js

# 侧边栏会员等级
^https:\/\/interface3\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header wyyx.js

# 首页歌单会员歌曲
^https?:\/\/interface3\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header wyyx.js

# 会员认证
^https?:\/\/interface3\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header wyyx.js

[mitm] 
hostname = *.music.163.com

***********************************/


// 修改请求头，设置 Cookie、User-Agent、MConfig-Info

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = '抓CK，往里放';
modifiedHeaders['User-Agent'] = '抓UA，往里放';
modifiedHeaders['MConfig-Info'] = '抓MI，往里放';

$done({ headers: modifiedHeaders });

