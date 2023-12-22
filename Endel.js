/************
> 脚本名称：Endel+解锁订阅
> 软件版本：5.9.319
> 脚本作者：ios151
> 解锁说明：每次使用需要开启！
> 更新时间：2023-12-2
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇

************/

[rewrite_local]
^https?:\/\/api-production\.endel\.io\/v\d\/call url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/Endel.js

[mitm]
hostname = api-production.endel.io

*************************************/


var kira = JSON.parse($response.body);

kira.subscription = {
    "promo_type" : "DEFAULT",
    "period" : "YEAR",
    "store_trial" : false,
    "time_left" : 0,
    "price_id" : "12_Months_Instant_Offer",
    "valid_until" : 4094470861,
    "type" : "ACTIVE",
    "trial_type" : "CALENDAR_BASED",
    "prev_store" : "NOSTORE",
    "cancel_at_period_end" : false,
    "multiple_subscriptions" : false,
    "store" : "APP_STORE",
    "trial_canceled" : false
  };

$done({body : JSON.stringify(kira)});
