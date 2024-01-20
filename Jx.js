/************
> 脚本名称：简讯——解锁VIP
> 软件版本：5.0.16
> 脚本作者：kira
> 解锁说明：解锁VIP会员
> 更新时间：2023-12-14
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载、售卖
          ⚠️⚠️⚠️


[rewrite_local]
# > 拦截开屏广告
^https?:\/\/api\.tipsoon\.com\/api\/v1\/top\/ad url reject-img
# > 解锁会员
^https:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/Jx.js

[mitm] 
hostname = api.tipsoon.com

************/

var body = $response.body;
body = body.replace(/\"is_vip":\w+/g, '\"is_vip":true');
body = body.replace(/"vip_expire_time":\s*".*?"/, '"vip_expire_time": "2099-10-01 01:01:01"');

$done({ body: body });

