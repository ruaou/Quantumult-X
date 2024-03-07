/************

> 脚本名称：Nicegram解锁会员1.5.6
> 软件版本：7.7.0
> 脚本作者：kira
> 解锁说明：修改用户会员等级、听书等级
> 更新时间：2023-03-20
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇️
          






[rewrite_local]
  
# > Nicegram解锁会员权限（2024-02-20）
^https?:\/\/nicegram\.cloud\/api\/v\d\/(ai-assistant\/purchase-list|user\/info|telegram\/auth) url script-response-body https://github.com/ddgksf2013/MoYu/raw/master/NicegramProCrack.js

[mitm] 

hostname=nicegram.cloud


************/



var body=$response.body.replace(/subscription":\w+/g,'subscription":true');
$done({body});
