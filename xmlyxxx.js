/************
************/










































          







var url = $request.url;
var kiraaa = /https:\/\/(114\.80\.\d+\.\d+|(mobile|m|mobwsa)\.ximalaya\.com)\/mobile-user\/v2\/homePage/;
var kirabb = /https:\/\/(114\.80\.\d+\.\d+|mobile\.ximalaya\.com)\/mobile-user\/v2\/artist/;

if (kiraaa.test(url)) {
    var kira = JSON.parse($response.body);
    var kirass = kira.data;
    var kiravv = kirass.vipInfo;
    kiravv.isVip = true;
    kiravv.level = 5;
    kirass.vipInfo = kiravv;
    kirass.topPicInfo = {
        "picUrl": "https://imagev2.xmcdn.com/storages/1c63-audiofreehighqps/B0/37/GMCoOScJDSvBAAm9-wJy0ISu.png",
        "color": "#242121",
        "foregroundPicUrl": "https://imagev2.xmcdn.com/storages/cdb9-audiofreehighqps/C0/C0/GKwRIW4JGUyIAAAY9wJ3hiOE.png",
        "backgroundPicUrl": "https://imagev2.xmcdn.com/storages/93d1-audiofreehighqps/DC/B8/GMCoOSIJGUxwAADDBQJ3hhpR.png"
    };
    kirass.serviceModule.entrances = [
        {
          "isAgedDisplay" : false,
          "isEnterNeedLogin" : true,
          "icon" : "http://imagev2.xmcdn.com/storages/0c96-audiofreehighqps/F0/38/GKwRIasHUia6AAADugHRsqqC.png!op_type=0&magick=webp",
          "isIosNeedHideInAudit" : true,
          "entranceShowCondition" : 0,
          "name" : "签到领VIP",
          "version" : "[8.3.45,]",
          "agedIcon" : "",
          "updatedAt" : 1692893096000,
          "labelType" : 0,
          "id" : 210,
          "isLinkNeedTimeStamp" : false,
          "platform" : 2,
          "enterNeedLogin" : true,
          "iosNeedHideInAudit" : true,
          "linkUrl" : "iting://open?msg_type=94&bundle=rn_credit_center&reuse=true&srcChannel=mine_page",
          "mark" : "user_point",
          "moduleId" : 7,
          "interval" : 0,
          "minorProtection" : true,
          "agedDisplay" : false
        },
		        {
          "isAgedDisplay" : false,
          "isEnterNeedLogin" : true,
          "icon" : "http://imagev2.xmcdn.com/storages/24e1-audiofreehighqps/E7/07/GMCoOSYHFqRQAAAETgGtp96i.png!op_type=0&magick=webp",
          "isIosNeedHideInAudit" : true,
          "entranceShowCondition" : 0,
          "name" : "月票中心",
          "version" : "[9.0.67,]",
          "agedIcon" : "",
          "updatedAt" : 1683685928000,
          "labelType" : 0,
          "id" : 276,
          "isLinkNeedTimeStamp" : true,
          "platform" : 2,
          "enterNeedLogin" : true,
          "iosNeedHideInAudit" : true,
          "linkUrl" : "iting://open?msg_type=94&bundle=rn_ticket",
          "moduleId" : 9,
          "interval" : 180,
          "minorProtection" : false,
          "agedDisplay" : false
        },
        {
          "isAgedDisplay" : false,
          "isEnterNeedLogin" : true,
          "icon" : "http://imagev2.xmcdn.com/storages/54a6-audiofreehighqps/E6/95/CMCoOSEFRFfEAAAFFQDuJqW1.png!op_type=0&magick=webp",
          "isIosNeedHideInAudit" : false,
          "entranceShowCondition" : 0,
          "name" : "定时",
          "version" : "[8.3.45,]",
          "agedIcon" : "",
          "updatedAt" : 1636622965000,
          "labelType" : 0,
          "id" : 217,
          "isLinkNeedTimeStamp" : false,
          "platform" : 2,
          "enterNeedLogin" : true,
          "iosNeedHideInAudit" : true,
          "linkUrl" : "https://pages.ximalaya.com/mkt/act/9d3ffaa5bbadc931?utm_source=23123icon3",
          "moduleId" : 8,
          "interval" : 0,
          "minorProtection" : false,
          "agedDisplay" : false
        },
        {
          "isAgedDisplay" : false,
          "isEnterNeedLogin" : false,
          "icon" : "http://imagev2.xmcdn.com/storages/405a-audiofreehighqps/EE/E1/CMCoOScFPcSmAAACSQDsjCwM.png!op_type=0&magick=webp",
          "isIosNeedHideInAudit" : false,
          "entranceShowCondition" : 0,
          "name" : "全部服务",
          "version" : "[8.3.45,]",
          "agedIcon" : "",
          "updatedAt" : 1634371901000,
          "labelType" : 0,
          "id" : 215,
          "isLinkNeedTimeStamp" : true,
          "platform" : 2,
          "enterNeedLogin" : false,
          "iosNeedHideInAudit" : false,
          "linkUrl" : "iting://open?msg_type=334&moduleIds=8,9",
          "mark" : "all_service",
          "moduleId" : 7,
          "interval" : 0,
          "minorProtection" : false,
          "agedDisplay" : false
        }
      ],
    $done({ body: JSON.stringify(kira) });
} else if (kirabb.test(url)) {
    var kira = JSON.parse($response.body);
    var kirass = kira.data;
    var kiravv = kirass.xiaoyaGradeInfo;
    kiravv.grade = 10;
    kirass.mvpGrade = 10;
    kirass.xiaoyaGradeInfo = kiravv;
    var kiraii = kirass.vipInfo;
    kiraii.isVip = true;
    kiraii.iconUrl = "http://imagev2.xmcdn.com/storages/2fd2-audiofreehighqps/93/C6/GKwRIDoF9MpUAAAP_AEhz-MP.png!op_type=0&magick=webp";
    kirass.vipInfo = kiraii;
    $done({ body: JSON.stringify(kira) });
} else if (url.indexOf('https://m.ximalaya.com/businevv-vip-presale-mobile-web/page/') !== -1) {
    var body = $response.body;
    body = body.replace(/subtitle\":"([^"]*)"/g, 'subtitle":"会员将于2099-10-01到期"');
    body = body.replace(/vipStatus\":\d/g, 'vipStatus":2');
    body = body.replace(/userLevelIcon"\s*:\s*"[^"]*"/g, 'userLevelIcon":"http://imagev2.xmcdn.com/storages/2fd2-audiofreehighqps/93/C6/GKwRIDoF9MpUAAAP_AEhz-MP.png!op_type=0&magick=webp"');
    $done({ body: body });
} else {
    $done({});
}
