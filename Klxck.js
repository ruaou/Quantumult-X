/************
> 脚本名称：看理想会员解锁demo
> 软件版本：4.0.8
> 脚本作者：kira
> 解锁说明：看理想会员共享脚本，抓CK，往里放！
> 更新时间：2023-12-9
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇️🎇️🎇️
          本脚本仅供学习交流使用，禁止转载、售卖
          使用脚本可能存在风险，包括但不限于造成账号异常、数据丢失等问题。使用脚本时，请谨慎操作，自行承担风险
          🎇️🎇️🎇️️

[rewrite_local]
#会员到期时间
https://api\.vistopia\.com\.cn/api/v\d/(user/profile|reader/section-detail) url script-response-body Klxck.js
#会员ck
^https:\/\/api\.vistopia\.com\.cn\/api\/v\d\/(user\/profile|reader\/section-detail|content\/article_list) url script-request-header Klxck.js
^https:\/\/api\.vistopia\.com\.cn\/api\/v2\/home\/advertisement url reject-dict
[mitm] 
hostname = api.vistopia.com.cn
************/

  //阅读reader/section-detail?
headers = $request.headers;

headers['Cookie'] = 'X3D';

headers['Device-Model'] = 'iPhone 5 Pro';

headers['OS-Version'] = '17.1';


headers['Authorization'] = 'Bed6';

headers['Api-Token:'] = 'c5x6';
$done({
    headers
});

  //到期显示等等..
var body = $response.body;
var url = $request.url;

if (url.includes("/user/profile")) {
    body = body.replace(/"equity_txt":\s*".*?"/, '"equity_txt": "畅听卡有效期至 2099-09-09"');
    body = body.replace(/"vip_expire_date":\s*".*?"/, '"vip_expire_date": "2099-09-09"');
} else if (url.includes("/v2/reader/section-detail")) {
    body = body.replace(/"equity_txt":\s*".*?"/, '"equity_txt": "免费脚本,1天更新一次,点击百度一下"');
    body = body.replace(/"equity_txt_url":\s*".*?"/, '"equity_txt_url": "https://www.baidu.com/"');
}

$done({ body });
