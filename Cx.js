/************
> 脚本名称：潮汐解锁会员显示
> 软件版本：3.45.1
> 脚本作者：kira
> 解锁说明：配合潮汐会员解锁demo一起使用！
> 更新时间：2023-11-28
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载、售卖
          ⚠️⚠️⚠️


[rewrite_local]
# > 拦截潮汐-开屏日图
^https:\/\/tide-api\.moreless\.io\/v1\/dailypics url reject
# > 解锁会员信息（单独使用是自慰，需要配合共享会员ck脚本使用https://raw.githubusercontent.com/ruaou/Quantumult-X/Sharedemo/Cxx.js）
^https:\/\/tide-api\.moreless\.io\/v1\/(users\/self|user_premium_tip) url script-response-body https://raw.githubusercontent.com/ruaou/Quantumult-X/CrackVip/cx.js

[mitm]
hostname = tide-api.moreless.io
************/

(function() {
    'use strict';

    var url = $request.url;

    if (url.indexOf('/v1/users/self') !== -1) {
        var kira = JSON.parse($response.body);
        kira.vip = {
            "expired_at": 4094467200,
            "created_at": 1670332222,
            "updated_at": 4094467200,
            "is_lifetime_member": false,
            "is_valid": true,
            "expired_day_at": 4094467200,
            "premium_type": 3,
            "subscription_type": 0,
            "active_sub": null,
            "sub_info": {
                "auto_subscription_expired_at": 1673718416,
                "subscription_type": 1,
                "product_id": "",
                "cancel_at": 0,
                "updated_at": 1671011378,
                "auto_subscription_expired_day_at": 1673798399,
                "sub_pay_channel": "appstore",
                "google_play_subscription_expired_at": 0
            },
            "sub_expired_at": 0,
            "sub_expired_day_at": 0,
            "sub_cancel_at": 0
        };
        $done({ body: JSON.stringify(kira) });
    } else if (url.indexOf('/v1/user_premium_tip') !== -1) {
        // 脚本二处理链接二
        var kira = {
            "self_card_tip": {
                "en": "Expires on October 1, 2099",
                "zh-Hans": "将于2099年10月1日到期",
                "zh-Hant": "將於2099年10月1日到期",
                "ja": "2099年10月1日で期限切れ",
                "ko": "2099년10월1일만료"
            },
            "resource_tip": {},
            "is_show_renew_entrance": false,
            "plus_desc": {
                "en": "Subscribed · Full Premium",
                "zh-Hans": "已开通 · 畅享所有优质内容",
                "zh-Hant": "已開通 · 暢享所有優質內容",
                "ja": "購読済み · フルプレミアム",
                "ko": "구독 완료 · 프리미엄 전체 이용"
            },
            "plus_time": {
                "en": "October 1, 2099 due",
                "zh-Hans": "2099年10月1日到期",
                "zh-Hant": "2099年10月1日到期",
                "ja": "2099年10月1日期限切れ",
                "ko": "2099년10월1일만료"
            },
            "plus_sub_status": "expired",
            "plus_sub_product_id": "",
            "plus_sub_pay_channel": "appstore",
            "plus_sub_plan_desc": {
                "en": "Monthly",
                "zh-Hans": "连续包月",
                "zh-Hant": "連續包月",
                "ja": "毎月の継続購読",
                "ko": "매월 구독"
            },
            "plus_sub_renew_time": {
                "en": "October 1, 2099",
                "zh-Hans": "2099年10月1日",
                "zh-Hant": "2099年10月1日",
                "ja": "2099年10月1日",
                "ko": "2099년10월1일"
            },
            "plus_sub_renew_symbol": "¥",
            "plus_sub_renew_price": -1,
            "plus_sub_option_tip": {},
            "plus_sub_option_link": "tide://system_manage_subscription",
            "scene_pass_desc": {},
            "scene_pass_time": {},
            "scene_pass_sub_status": "",
            "scene_pass_sub_product_id": "",
            "scene_pass_sub_pay_channel": "",
            "scene_pass_sub_plan_desc": {},
            "scene_pass_sub_renew_time": {},
            "scene_pass_sub_renew_symbol": "",
            "scene_pass_sub_renew_price": 0,
            "scene_pass_sub_option_tip": {},
            "scene_pass_sub_option_link": ""
        };

        $done({ body: JSON.stringify(kira) });
    } else {
        var obj = JSON.parse($response.body);
        $done({ body: JSON.stringify(obj) });
    }
})();
