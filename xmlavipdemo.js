/***********************************
> 脚本名称：喜马拉雅会员解锁demo
> 软件版本：9.18.7
> 脚本作者：kira
> 解锁说明：网易云会员共享脚本，抓CK，往里放！(需要配合去广告重写)
> 更新时间：2023-11-26
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇️🎇️🎇️
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇️🎇️🎇️️

[rewrite_local]

# > 去广告重写
^https?:\/\/.*\.xima.*\.com\/discovery-category\/customCategories url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/Adblock/xmlaxx.js
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/focus\/queryF url reject
^https?:\/\/.*\.xima.*\.com\/mobile-playpage\/view\/ url reject
^https?:\/\/.*\.xima.*\.com\/chaos-notice-web\/v1\/message\/preview\/list url reject
^https?:\/\/.*\.xima.*\.com\/social-web\/bottomTabs\/dynamicEntrance\/status url reject
^https?:\/\/.*\.xmcdn\.com\/\w{8}\/\w{4}-\w{16}\/.+gif$ url reject
^https?:\/\/.*\.xima.*\.com\/(dog-portal\/checkOld|(child-mobile\/child|aged-mobile\/aged)\/mode\/query) url reject
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/isShowUserGiftPendant url reject
^https?:\/\/.*\.xima.*\.com\/mobile-user\/unread url reject
^https?:\/\/.*\.xima.*\.com/mobile-user/minorProtection/pop url reject
^https?:\/\/.*\.xima.*\.com\/collector\/xl\/v\d url reject
^https?:\/\/.*\.xima.*\.com\/butler-portal\/versionCheck url reject
^https?:\/\/(adse\.wsa|adse|adbehavior|gslbtx|adbtse|xdcs-collector|gslbali|adxmlyse)\.xima.*\.com\/.* url reject
^https?:\/\/.*\.xima.*\.com\/mobile\/discovery\/v\d\/location url reject
^https?:\/\/.*\.xima.*\.com\/hotWord url reject
^https?:\/\/.*\.xima.*\.com\/guideWord url reject
^https?:\/\/.*\.xima.*\.com\/api\/v\d\/adRealTime url reject
^https?:\/\/.*\.xima.*\.com\/ting\/(loading|feed|home)? url reject
^https?:\/\/.*\.xima.*\.com\/focus-mobile\/focusPic url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/Adblock/xmlaxx.js
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/v\d\/mix url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/Adblock/xmlaxx.js
^https?:\/\/.*\.xima.*\.com\/discovery-category\/v\d/category url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/Adblock/xmlaxx.js
^https?:\/\/.*\.xima.*\.com\/mobile-user\/v\d\/homePage url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/Adblock/xmlaxx.js

# > 会员解锁重写
^https?:\/\/.*\.xima.*\.com\/(mobile-playpage/track/v3/baseInfo|mobile/v1/album/track|mobile/v1/album/detail|mobile-album/album/page|mobile/album/paid/info|mobile-playpage/playpage/tabs|product/detail/v1/basicInfo/dynamic) url script-request-header xmlavipdemo.js

[mitm]

hostname = *.xima*.*, *.xmcdn.*


***********************************/


// 在请求头中修改 Cookie，用于模拟登录状态

var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = '抓CK，往里放';

$done({ headers: modifiedHeaders });
