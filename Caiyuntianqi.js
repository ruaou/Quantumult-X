/************

> 脚本名称：彩云天气+彩云天气Pro
> 软件版本：7.7.0
> 脚本作者：kira
> 解锁说明：修改用户会员等级、听书等级
> 更新时间：2023-12-14
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇️
          






[rewrite_local]
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners)|p\/v\d\/(vip_info|user_info)) url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/Caiyuntianqi.js
# SVIP地图-48小时预报(方法来源:苍井灰灰)
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/Caiyuntianqi.js

[mitm]
hostname = *.cyapi.cn, *.caiyunapp.com

************/












const kira = {};
const kirass = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const adUrl = /(activity\?app_name|operation\/banners)/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const infoUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/user_info/;

if (typeof $response == "undefined") {
  kira.headers = $request.headers;
  kira.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';
} else {
  switch (true) {
    case adUrl.test(url):
      kirass.status = "ok";
      kirass.activities = [{"items":[{}]}];
      kirass.data = [];
      break;
    case vipUrl.test(url):
      kirass = {  ...kirass,  vip: {    "expires_time" : "4094546691",    "is_auto_renewal" : true  },  trial_svip: {    ...kirass.trial_svip,    "received_time" : "1666666666",    "expires_time" : "4094546691",    "is_recharge_vip" : true  },  svip: {    "expires_time" : "4094546691",    "is_auto_renewal" : true  }};
      break;
    case userUrl.test(url):
      kirass.result = { ...kirass.result,  is_vip: true,  vip_expired_at: 4094546691,  svip_given: 9999,  is_xy_vip: true,  xy_svip_expire: 4094546691,  wt: {  ...kirass.result.wt,  vip: {  ...kirass.result.wt.vip,  "expired_at" : 0,  "enabled" : true,  "svip_apple_expired_at" : 4094546691,  "is_auto_renewal" : true,  "svip_expired_at" : 4094546691    },    svip_given: 9999,  },  is_phone_verified: true,  vip_take_effect: 1,  is_primary: true,  xy_vip_expire: 4094546691,  svip_expired_at: 4094546691,  svip_take_effect: 1,  vip_type: "s",  phone_num: "13145200000",  bound_status: {  ...kirass.result.bound_status,  caiyun: {  ...kirass.result.bound_status.caiyun,  "is_bound" : true}}};
  break;
    }
  kira.body = JSON.stringify(kirass);
}

$done(kira);
