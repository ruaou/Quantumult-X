/***********************************

> 应用名称：多多视频
> 软件版本：1.1
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁VIP电影，去除悬浮广告，视频开头广告，首页广告，限时广告以及底部广场Tab
> 更新时间：2022-12-11
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️

hostname=api.juxingclub.com

# > 多多视频_悬浮广告@ddgksf2013
^https:\/\/api.juxingclub.com\/ad\/getAll url script-response-body https://github.com/ruaou/Quantumult-X/blob/ffae94a6b6ff2247c0e9e8a3c6b50a9208165dc7/Scripts/master/duoduoProCrack.js
# > 多多视频_我的页面@ddgksf2013
^https?:\/\/api.juxingclub.com\/v3plus\/index\/channel\?pageNum=1&position=CHANNEL_MY url script-response-body https://github.com/ruaou/Quantumult-X/blob/ffae94a6b6ff2247c0e9e8a3c6b50a9208165dc7/Scripts/master/duoduoProCrack.js
# > 多多视频_限时广告@ddgksf2013
https://api.juxingclub.com/storage/business/rootName/app/homePage\?dataType=JSON url reject-dict
# > 多多视频_首页广告@ddgksf2013
https://api.juxingclub.com/v3plus/index/channel\?pageNum=1&position=CHANNEL_INDEX url script-response-body https://github.com/ruaou/Quantumult-X/blob/ffae94a6b6ff2247c0e9e8a3c6b50a9208165dc7/Scripts/master/duoduoProCrack.js
# > 多多视频_VIP Level@ddgksf2013
^https?:\/\/api.juxingclub.com\/vip\/level\/info url script-response-body https://github.com/ruaou/Quantumult-X/blob/ffae94a6b6ff2247c0e9e8a3c6b50a9208165dc7/Scripts/master/duoduoProCrack.js
# > 多多视频_去除广场@ddgksf2013
^https?:\/\/api.juxingclub.com\/app\/config\/h5NativeBar url script-response-body https://github.com/ruaou/Quantumult-X/blob/ffae94a6b6ff2247c0e9e8a3c6b50a9208165dc7/Scripts/master/duoduoProCrack.js
