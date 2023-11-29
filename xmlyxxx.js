/************

> 脚本名称：修改用户会员、听书等级显示为满级@kira（自慰）
> 软件版本：9.1.93
> 脚本作者：kira
> 解锁说明：修改用户会员等级、听书等级
> 更新时间：2023-11-29
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇️





          
************/

















































var url = $request.url;

if (url.indexOf('https://mobile.ximalaya.com/mobile-user/v2/homePage/') !== -1) {
    var kira = JSON.parse($response.body);
    var kirass = kira.data.vipInfo;
    kirass.isVip = true;
    kirass.level = 5;
    kira.data.vipInfo = kirass;
    kira.data.topPicInfo = {
        "picUrl": "https://imagev2.xmcdn.com/storages/1c63-audiofreehighqps/B0/37/GMCoOScJDSvBAAm9-wJy0ISu.png",
        "color": "#242121",
        "foregroundPicUrl": "https://imagev2.xmcdn.com/storages/cdb9-audiofreehighqps/C0/C0/GKwRIW4JGUyIAAAY9wJ3hiOE.png",
        "backgroundPicUrl": "https://imagev2.xmcdn.com/storages/93d1-audiofreehighqps/DC/B8/GMCoOSIJGUxwAADDBQJ3hhpR.png"
    };
    $done({ body: JSON.stringify(kira) });
} else if (url.indexOf('https://mobile.ximalaya.com/mobile-user/v2/artist/') !== -1) {
    var kira = JSON.parse($response.body);
    var kirass = kira.data.xiaoyaGradeInfo;
    kirass.grade = 10;
    kira.data.mvpGrade = 10;
    kira.data.xiaoyaGradeInfo = kirass;
    var kiravv = kira.data.vipInfo;
    kiravv.isVip = true;
    kiravv.iconUrl = "http://imagev2.xmcdn.com/storages/2fd2-audiofreehighqps/93/C6/GKwRIDoF9MpUAAAP_AEhz-MP.png!op_type=0&magick=webp";
    kira.data.vipInfo = kiravv;
    $done({ body: JSON.stringify(kira) });
} else if (url.indexOf('https://m.ximalaya.com/business-vip-presale-mobile-web/page/') !== -1) {
    var body = $response.body;
    body = body.replace(/subtitle\":"([^"]*)"/g, 'subtitle":"会员将于2099-10-01到期"');
    body = body.replace(/vipStatus\":\d/g, 'vipStatus":2');
    body = body.replace(/userLevelIcon"\s*:\s*"[^"]*"/g, 'userLevelIcon":"http://imagev2.xmcdn.com/storages/2fd2-audiofreehighqps/93/C6/GKwRIDoF9MpUAAAP_AEhz-MP.png!op_type=0&magick=webp"');
    $done(body);
} else {
    $done({});
}
