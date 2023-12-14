/************
> 脚本名称：Filmic Pro相机解锁订阅
> 软件版本：7.5.6
> 脚本作者：kira
> 解锁说明：解锁Filmic Pro
> 更新时间：2023-11-28
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载、售卖
          ⚠️⚠️⚠️


**************************************

[rewrite_local]
^https:\/\/filmicpro\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/Filmicpro.js

[mitm]
hostname = filmicpro.oracle.bendingspoonsapps.com

*************************************/


var kira = JSON.parse($response.body);

kira["me"]["active_subscriptions_ids"] = ["com.cinegenix.filmic.pro.1y_t80_1w_bis"];
kira["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-10-01T01:01:01.01+00:00",
   "product_id" : "com.cinegenix.filmic.pro.1y_t80_1w_bis",
   "features" : ["unlock"]
  }];
kira["settings"]["__identity__"]["expiration"] = "2099-10-01T01:01:01.01+00:00";

$done({body : JSON.stringify(kira)});
