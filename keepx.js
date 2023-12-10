const version = 'V1.2.0';

if ($request.url.indexOf("people/my") !== -1) {
    // 处理 people/my 接口
    let e = JSON.parse($response.body);
    e.data.floatingInfo = {};
    $done({ body: JSON.stringify(e) });
} else if ($request.url.indexOf("config/v3/basic") !== -1) {
    // 处理 config/v3/basic 接口
    let t = JSON.parse($response.body);
    t.data.bottomBarControl.defaultTab = "home";
    t.data.bottomBarControl.tabs = Object.values(t.data.bottomBarControl.tabs).filter(e => ["home", "new_sports", "personal"].includes(e.tabType));
    t.data.homeTabs = [
        { type: "homeRecommend", order: 1, name: "推荐", schema: "keep://homepage/homeRecommend", showInFewDays: 7, reverseSwitch: false, default: true },
        { type: "homePrime", order: 2, name: "会员", schema: "keep://coursepage/homePrime", showInFewDays: 7, reverseSwitch: false, default: false }
    ];
    $done({ body: JSON.stringify(t) });
} else if ($request.url.indexOf("homepage/v") !== -1) {
    // 处理 homepage/v 接口
    let n = JSON.parse($response.body);
    if (n.data.sections.length > 0 && n.data.sections[0].contentStyle !== "quickEntranceV3") {
        // 构建新的 quickEntranceV3
        var a = {
            sectionStyle: null,
            contentStyle: "quickEntranceV3",
            // ...（省略其他属性）
        };
        n.data.sections.unshift(a);
    }
    $done({ body: JSON.stringify(n) });
} else if ($request.url.indexOf("preview") !== -1) {
    // 处理 preview 接口
    let i = JSON.parse($response.body);
    i.data.detailSections = Object.values(i.data.detailSections).filter(e => e.sectionType !== "recommendation");
    $done({ body: JSON.stringify(i) });
} else if ($request.url.indexOf("sportpage/sport/v3/mysport") !== -1) {
    // 处理 sportpage/sport/v3/mysport 接口
    let l = JSON.parse($response.body);
    if (l.data.sections) {
        delete l.data.sections;
    }
    $done({ body: JSON.stringify(l) });
} else {
    $done();
}
