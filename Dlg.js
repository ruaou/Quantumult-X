/******************************
> 脚本名称：多邻国修改金币、时间宝
> 软件版本：v6.233
> 脚本作者：kira
> 解锁说明：修改多邻国金币、时间宝（修改金币是自慰，但是仍能使用（自悟））
> 更新时间：2023-11-22
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇
*******************************

[rewrite_local]
^https:\/\/ios-api-2\.duolingo\.cn\/2023-05-23\/batch url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/Dlg.js

[mitm]
hostname = ios-api-2.duolingo.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/timerBoosts\\"\:\d+/g,'timerBoosts\\\":50');
body = body.replace(/gems\\"\:\d+/g,'gems\\\":21001');
$done(body);
