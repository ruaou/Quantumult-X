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












var _0xodN='jsjiami.com.v7';const _0x5bcde2=_0x16b7;function _0x16b7(_0x2e914a,_0x27f8c2){const _0x1cd0bf=_0x1cd0();return _0x16b7=function(_0x16b723,_0x2f3421){_0x16b723=_0x16b723-0xf4;let _0x4c1fd8=_0x1cd0bf[_0x16b723];if(_0x16b7['bppScV']===undefined){var _0x2788ea=function(_0xc3ae33){const _0x5603d5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3255fb='',_0x343b47='';for(let _0x1ad452=0x0,_0xb59a56,_0x11a52,_0x26880c=0x0;_0x11a52=_0xc3ae33['charAt'](_0x26880c++);~_0x11a52&&(_0xb59a56=_0x1ad452%0x4?_0xb59a56*0x40+_0x11a52:_0x11a52,_0x1ad452++%0x4)?_0x3255fb+=String['fromCharCode'](0xff&_0xb59a56>>(-0x2*_0x1ad452&0x6)):0x0){_0x11a52=_0x5603d5['indexOf'](_0x11a52);}for(let _0x382c77=0x0,_0x5ced81=_0x3255fb['length'];_0x382c77<_0x5ced81;_0x382c77++){_0x343b47+='%'+('00'+_0x3255fb['charCodeAt'](_0x382c77)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x343b47);};const _0x286b90=function(_0x2d51f9,_0x8238ce){let _0x4729ab=[],_0x579a32=0x0,_0x228f82,_0x5a2940='';_0x2d51f9=_0x2788ea(_0x2d51f9);let _0xfbc61e;for(_0xfbc61e=0x0;_0xfbc61e<0x100;_0xfbc61e++){_0x4729ab[_0xfbc61e]=_0xfbc61e;}for(_0xfbc61e=0x0;_0xfbc61e<0x100;_0xfbc61e++){_0x579a32=(_0x579a32+_0x4729ab[_0xfbc61e]+_0x8238ce['charCodeAt'](_0xfbc61e%_0x8238ce['length']))%0x100,_0x228f82=_0x4729ab[_0xfbc61e],_0x4729ab[_0xfbc61e]=_0x4729ab[_0x579a32],_0x4729ab[_0x579a32]=_0x228f82;}_0xfbc61e=0x0,_0x579a32=0x0;for(let _0x4dba60=0x0;_0x4dba60<_0x2d51f9['length'];_0x4dba60++){_0xfbc61e=(_0xfbc61e+0x1)%0x100,_0x579a32=(_0x579a32+_0x4729ab[_0xfbc61e])%0x100,_0x228f82=_0x4729ab[_0xfbc61e],_0x4729ab[_0xfbc61e]=_0x4729ab[_0x579a32],_0x4729ab[_0x579a32]=_0x228f82,_0x5a2940+=String['fromCharCode'](_0x2d51f9['charCodeAt'](_0x4dba60)^_0x4729ab[(_0x4729ab[_0xfbc61e]+_0x4729ab[_0x579a32])%0x100]);}return _0x5a2940;};_0x16b7['apAeOc']=_0x286b90,_0x2e914a=arguments,_0x16b7['bppScV']=!![];}const _0x589c0e=_0x1cd0bf[0x0],_0x21ea81=_0x16b723+_0x589c0e,_0x180662=_0x2e914a[_0x21ea81];return!_0x180662?(_0x16b7['crtVCq']===undefined&&(_0x16b7['crtVCq']=!![]),_0x4c1fd8=_0x16b7['apAeOc'](_0x4c1fd8,_0x2f3421),_0x2e914a[_0x21ea81]=_0x4c1fd8):_0x4c1fd8=_0x180662,_0x4c1fd8;},_0x16b7(_0x2e914a,_0x27f8c2);}function _0x1cd0(){const _0x1148ea=(function(){return[_0xodN,'LhjlUsBxjdTNikahMhmLiWG.hHpcrdKoqrmHD.v7==','WQKgWOC','aGJdV2SZm2LBtW','W5usW5utWProW77cL8kjW7GP','p2FcN8o2','wu/dGCoCWOOuW5rAWQRdNIC','hHlcG8krW5qr','bCopWPS4WR9cwYK','EHbFW4dcTr4EWRmcW6ug','WOFcTK7dQmknWRTjySomCSoJ','bSolW4rpWObPyd7cGJy','bSoYW4ddGH5C','rbddGCkoWRJcGCkWW49MbCkx','xSoUWRGxahTko8oNW6L8lCkv','t2ZcLmoCW4yNWPTps8oxW6W2','WRJdM8oFWQ4MW5G'].concat((function(){return['cmkRwNhdJJhcQq','WPrpWODdW4nnW5lcSCkK','aCkGWORdI8o2oG8','nSkbWQ8ZwCkLWO7dPmkbWR8','vLBcQmkvmrvqWQ7dV8kgWOZcSW','AmommmkcW7dcQZhdRWdcVa','fCkkEaS','W44gzuPuffDq','fedcHmotW7VdMSo0WPyZrG','xwdcKG','lSkzESodWQNdQW','W7JdQmkPbSkdcW','q0ZcVJjOhxffECkaCq','W7DlWQddTW','vCoSmSkZW7nUESkF','bCooaaHoWOG','W7pdTSowWOJdJtmY'].concat((function(){return['tSkpu0XDWRlcGSkbE1O','W50dASoaW63cL8oAea','x0BdH8ouWOTvWRryWRddLYfPkG','paRdTCoXW6BdN8kHW7nv','WRiEW6VcTCoYW6GBWO7dSd4ogSob','ESo9WPHdwmoB','EuVcPmoFW77dLSkCW7rnta','WOHqDmoN','wCoAou/cM8k7WPu7W7O1','vSksWOqqWQnmqHlcSsmGWPm','A3FcH18','gdJdLCkfWPzYWOjZuCoXW6WBWP4','xCkDW4dcUmkMxSolWPdcSa','rfJcR8kima','e8k9eSk3','WO/dRSoDFsGLCG5PWPbi'];}()));}()));}());_0x1cd0=function(){return _0x1148ea;};return _0x1cd0();};(function(_0x44db9d,_0x4b3945,_0x3ac61a,_0x1e0eb4,_0x2889a7,_0x44d888,_0x153ea4){return _0x44db9d=_0x44db9d>>0x4,_0x44d888='hs',_0x153ea4='hs',function(_0x3f7b1a,_0xc8d5b6,_0x48d9af,_0x4a41b6,_0x577fe3){const _0x20b0a5=_0x16b7;_0x4a41b6='tfi',_0x44d888=_0x4a41b6+_0x44d888,_0x577fe3='up',_0x153ea4+=_0x577fe3,_0x44d888=_0x48d9af(_0x44d888),_0x153ea4=_0x48d9af(_0x153ea4),_0x48d9af=0x0;const _0x588a2a=_0x3f7b1a();while(!![]&&--_0x1e0eb4+_0xc8d5b6){try{_0x4a41b6=parseInt(_0x20b0a5(0x10b,'4I6W'))/0x1+-parseInt(_0x20b0a5(0x10d,'#yox'))/0x2*(-parseInt(_0x20b0a5(0x11f,'LwWk'))/0x3)+-parseInt(_0x20b0a5(0xfa,'I]Y7'))/0x4*(parseInt(_0x20b0a5(0x110,'^6n]'))/0x5)+-parseInt(_0x20b0a5(0xfc,'4(Dg'))/0x6*(parseInt(_0x20b0a5(0x108,'s7rc'))/0x7)+parseInt(_0x20b0a5(0x118,'Y3MD'))/0x8*(parseInt(_0x20b0a5(0x115,'wsO^'))/0x9)+-parseInt(_0x20b0a5(0x101,'P8xC'))/0xa*(-parseInt(_0x20b0a5(0x112,'sP#1'))/0xb)+-parseInt(_0x20b0a5(0x104,'rZQ*'))/0xc;}catch(_0x59bfb6){_0x4a41b6=_0x48d9af;}finally{_0x577fe3=_0x588a2a[_0x44d888]();if(_0x44db9d<=_0x1e0eb4)_0x48d9af?_0x2889a7?_0x4a41b6=_0x577fe3:_0x2889a7=_0x577fe3:_0x48d9af=_0x577fe3;else{if(_0x48d9af==_0x2889a7['replace'](/[hLUpkMrHKBlxqWDTNGd=]/g,'')){if(_0x4a41b6===_0xc8d5b6){_0x588a2a['un'+_0x44d888](_0x577fe3);break;}_0x588a2a[_0x153ea4](_0x577fe3);}}}}}(_0x3ac61a,_0x4b3945,function(_0x2e12db,_0x5dfb41,_0x33ae75,_0x1e9459,_0x1f1385,_0x351087,_0x29dd6a){return _0x5dfb41='\x73\x70\x6c\x69\x74',_0x2e12db=arguments[0x0],_0x2e12db=_0x2e12db[_0x5dfb41](''),_0x33ae75='\x72\x65\x76\x65\x72\x73\x65',_0x2e12db=_0x2e12db[_0x33ae75]('\x76'),_0x1e9459='\x6a\x6f\x69\x6e',(0x14bc93,_0x2e12db[_0x1e9459](''));});}(0xc40,0x1df0f,_0x1cd0,0xc6),_0x1cd0)&&(_0xodN=0xca);const kira={},kirass=JSON[_0x5bcde2(0x106,')#]M')](typeof $response!=_0x5bcde2(0x105,'!5#i')&&$response[_0x5bcde2(0x10c,'V9&u')]||null),url=$request[_0x5bcde2(0x109,'(c%1')],adUrl=/(activity\?app_name|operation\/banners)/,vipUrl=/https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/,userUrl=/https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/,infoUrl=/https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/user_info/;if(typeof $response==_0x5bcde2(0x119,'4I6W'))kira['headers']=$request['headers'],kira[_0x5bcde2(0xf8,'B]Ry')][_0x5bcde2(0x116,'rZQ*')]='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';else{switch(!![]){case adUrl[_0x5bcde2(0xf5,'0Iz!')](url):kirass[_0x5bcde2(0xf7,'l#]u')]='ok',kirass[_0x5bcde2(0x120,'s*$P')]=[{'items':[{}]}],kirass[_0x5bcde2(0x100,'I]Y7')]=[];break;case vipUrl[_0x5bcde2(0x107,'$cjo')](url):kirass={...kirass,'vip':{'expires_time':'4094546691','is_auto_renewal':!![]},'trial_svip':{...kirass[_0x5bcde2(0xff,'4(Dg')],'received_time':'1666666666','expires_time':_0x5bcde2(0x11b,'Rk[u'),'is_recharge_vip':!![]},'svip':{'expires_time':_0x5bcde2(0x11d,'fvrf'),'is_auto_renewal':!![]}};break;case userUrl[_0x5bcde2(0x11e,'P8xC')](url):kirass[_0x5bcde2(0x10e,'#yox')]={...kirass[_0x5bcde2(0x123,'dYla')],'is_vip':!![],'vip_expired_at':0xf40dd303,'svip_given':0x270f,'is_xy_vip':!![],'xy_svip_expire':0xf40dd303,'wt':{...kirass['result']['wt'],'vip':{...kirass[_0x5bcde2(0xfe,'%psc')]['wt'][_0x5bcde2(0x121,'rZQ*')],'expired_at':0x0,'enabled':!![],'svip_apple_expired_at':0xf40dd303,'is_auto_renewal':!![],'svip_expired_at':0xf40dd303},'svip_given':0x270f},'is_phone_verified':!![],'vip_take_effect':0x1,'is_primary':!![],'xy_vip_expire':0xf40dd303,'svip_expired_at':0xf40dd303,'svip_take_effect':0x1,'vip_type':'s','phone_num':_0x5bcde2(0x114,'s*$P'),'bound_status':{...kirass[_0x5bcde2(0x122,'fvrf')][_0x5bcde2(0x11c,')#]M')],'caiyun':{...kirass[_0x5bcde2(0x117,'@Don')][_0x5bcde2(0x102,'sP#1')][_0x5bcde2(0x113,'qHsE')],'is_bound':!![]}}};break;}kira[_0x5bcde2(0x103,'TNt$')]=JSON[_0x5bcde2(0x10a,'abOC')](kirass);}$done(kira);var version_ = 'jsjiami.com.v7';
