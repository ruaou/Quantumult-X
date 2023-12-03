/************
> 脚本名称：喜马拉雅会员解锁demo
> 软件版本：9.18.7
> 脚本作者：kira
> 解锁说明：喜马拉雅会员共享脚本，抓CK，往里放！(需要配合去广告重写)
> 更新时间：2023-12-3
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用声明：🎇️🎇️🎇️
          本脚本仅供学习交流使用，禁止转载、售卖
          🎇️🎇️🎇️️

# [+]2023.12.3  增加会员下载权限+解锁VIP超高音质

[rewrite_local]

# > 会员解锁重写
^https?:\/\/.*\.xima.*\.com\/(mobile-playpage/(track/v3/baseInfo|playpage/(tabs|track/qualityAndEffect))|mobile/(v1/album/(track|detail)|download/v2/(track|album)|album/paid/info)|mobile-album/album/page|product/detail/v1/basicInfo/dynamic) url script-request-header https://raw.githubusercontent.com/ruaou/Quantumult-X/Sharedemo/Xmlyck.js

[mitm]

hostname = *xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,114.80.99.*

************/


// 在请求头中修改 Cookie，用于模拟登录状态

var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = '抓CK，往里放';

$done({ headers: modifiedHeaders });
