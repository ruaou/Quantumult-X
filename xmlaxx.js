/***********************************

> 脚本名称：喜马拉雅去广告脚本（自用，不定期更新）
> 软件版本：9.1.87
> 脚本作者：kira
> 解锁说明：去除应用开屏广告（如果广告仍然存在，请清除缓存或卸载应用重新安装）
> 更新时间：2023-11-26
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇🎇🎇
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇🎇🎇️
***********************************************/

let body = $response.body;

if (body) {
    switch (!0) {
        case /discovery-category\/customCategories/.test($request.url):
            try {
                let e = JSON.parse(body);
                e.customCategoryList && (e.customCategoryList = e.customCategoryList.filter(e => ("recommend" == e.itemType || "template_category" == e.itemType || "single_category" == e.itemType) && 1005 !== e.categoryId));
                e.defaultTabList && (e.defaultTabList = e.defaultTabList.filter(e => ("recommend" == e.itemType || "template_category" == e.itemType || "single_category" == e.itemType) && 1005 !== e.categoryId));
                body = JSON.stringify(e);
            } catch (t) {
                console.log("customCategories: " + t);
            }
            break;

        case /discovery-category\/v\d\/category/.test($request.url):
            try {
                let a = JSON.parse(body);
                a.focusImages && a.focusImages.data && (a.focusImages.data = a.focusImages.data.filter(e => -1 != e.realLink.indexOf("open") && !e.isAd));
                body = JSON.stringify(a);
            } catch (i) {
                console.log("categories: " + i);
            }
            break;

        case /focus-mobile\/focusPic/.test($request.url):
            try {
                let r = JSON.parse(body);
                r.header && r.header.length <= 1 && (r.header[0].item.list[0].data = r.header[0].item.list[0].data.filter(e => -1 != e.realLink.indexOf("open") && !e.isAd));
                body = JSON.stringify(r);
            } catch (s) {
                console.log("discovery-feed" + s);
            }
            break;
                        
          case /discovery-feed\/v\d\/mix/.test($request.url):
              try {
                  let d = JSON.parse(body);
                  if (d.header && d.header.length >= 2) {
                      for (let l = 0; l < d.header[1].item.list.length; l++)
                          d.header[1].item.list[l].displayClass = "one_line";
                      delete d.header[0];
                  } else if (d.header && d.header.length <= 1) {
                      for (let y = 0; y < d.header[0].item.list.length; y++)
                          d.header[0].item.list[y].displayClass = "one_line";
                  }
                  d.body = d.body.filter(e => "ALBUM" == e.itemTypeEnum && !e.item.adInfo);
                  body = JSON.stringify(d);
              } catch (c) {
                  console.log("discovery-feed:" + c);
              }
              break;
                        
        default:
            $done({});
    }
    $done({ body });
} else {
    $done({});
}
