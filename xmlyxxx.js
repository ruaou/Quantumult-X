/***********************************

> 脚本名称：喜马拉雅修改用户显示（自慰）
> 软件版本：9.1.87
> 脚本作者：kira
> 解锁说明：修改用户会员等级、听书等级
> 更新时间：2023-11-27
> 特别提醒：抓包不易如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇️



[rewrite_local]
^https?:\/\/((.+ximalaya.+)|114\.80\.99\.*\/mobile-user\/v2\/homePage|m\business-vip-presale-mobile-web\/page|business-master-class-mobile-web\/V2\/home\/index|starwar\/task\/listen\/listenTime|mobile-user\/v2\/artist\/homepage|mobile-user\/v2\/artist\/intro|vip\/v1\/recommand)$ url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/xmlyxxx.js

[mitm]
hostname = mobile.ximalaya.com,114.80.99.*,m.ximalaya.com

************************/

var body=$response.body;
body = body.replace(/vipLevel\":\d/g,'vipLevel":5');
body = body.replace(/isVip\":\w+/g,'isVip":true');
body = body.replace(/level\":\d/g,'level":5');
body = body.replace(/vipExpireTime\":\d+/g,'vipExpireTime":4094530924000');
body = body.replace(/subtitle\":"([^"]*)"/g,'subtitle":"会员将于2099-10-01到期"');
body = body.replace(/("xiaoyaGradeInfo"\s*:\s*\{[^}]*"icon"\s*:\s*")[^"]*("/g, '$1http://imagev2.xmcdn.com/storages/e3cf-audiofreehighqps/D5/57/CMCoOSUD6KusAAAR_ACBDdGE.png!op_type=0$2');
$done(body);
