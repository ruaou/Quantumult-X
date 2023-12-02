/************
> 脚本名称：起点净化Plus
> 软件版本：5.9.319
> 脚本作者：ios151
> 解锁说明：去广告净化（如果广告仍然存在，请清除缓存或卸载应用重新安装）
> 更新时间：2023-12-2
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇
          
[rewrite_local]
# > 起点读书
^https?:\/\/qidian\.qpic\.cn\/qidian_common url reject-img
^https?:\/\/mage\.if\.qidian\.com\/Atom\.axd\/Api\/Client\/GetConfIOS url reject-img
^https?:\/\/mage\.if\.qidian\.com\/argus\/api\/v\d\/client\/getsplashscreen url reject
^https://magev6.if.qidian.com/argus/api/v1/client/iosad url reject
^https://magev6.if.qidian.com/argus/api/v1/bookshelf/getad url reject
^https://magev6.if.qidian.com/argus/api/v4/client/getsplashscreen? url reject
# > 开屏页广告,每日导读去除,冷启动强制跳转精选页去除,去除发现页弹出的活动弹窗,去除下方(精选 发现 中间的)活动时的tab,去除书架右下角的活动/广告的悬浮icon,搜索页可以搜索用户
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/(v4\/client\/getsplashscreen|v2\/deeplink\/geturl|v1\/(client\/getconf|adv\/getadvlistbatch\?positions=iOS_tab|dailyrecommend\/getdailyrecommend)) url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/qidian.js
# > 读书投票、章末免费领取章节卡等
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/adv url reject-dict
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/followsubscribe url reject-dict
# > 我的界面及活动按钮？
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/(v1\/assembly\/toolbar|v3\/user\/getaccountpage) url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/Purify/qd.js
# > 我的界面内测推广
^http[s]?:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/bookshelf\/refresh url reject-200
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/adv\/getadvlistbatch url reject
# > 书架置顶推广(保留签到移除花哨背景)
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/bookshelf\/getTopOperation url reject-dict
# > 发现上面的图标屏蔽
^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v2\/adv\/getadvlistbatch url reject-dict
[mitm] 
hostname = qidian.qpic.cn, mage.if.qidian.com, magev6.if.qidian.com
************/


if ($request.url.includes("argus/api/v3/user/getaccountpage")) {
  var Q = JSON.parse($response.body);
  Q.Data.BenefitButtonList = [];//福利中心
  Q.Data.FunctionButtonList = [];//我发布的
  Q.Data.BottomButtonList = [];//帮助与客服
  Q.Data.AccountBalance.Hints = [];
  Q.Data.Member = null;
  $done({body : JSON.stringify(Q)});
} else if ($request.url.includes("argus/api/v1/assembly/toolbar")) {
  var Q = JSON.parse($response.body);
  Q.Data.Toolbar.Adv = {};
  $done({body : JSON.stringify(Q)});
}
