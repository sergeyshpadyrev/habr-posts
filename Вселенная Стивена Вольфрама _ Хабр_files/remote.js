(function(g){var window=this;'use strict';var sYa=function(a,b,c){null!=c&&(g.td(a,b,1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.He=b,g.Ge=c,g.rd(a,g.He),g.rd(a,g.Ge))},tYa=function(a,b,c){b=g.Hd(b,c);
null!=b&&(g.td(a,c,0),a.i.i.push(b?1:0))},uYa=function(a,b){return g.zf(a,b)},vYa=function(a,b){b=b instanceof g.Bg?b:g.Hg(b,/^data:image\//i.test(b));
a.src=g.Cg(b)},xYa=function(a){g.F.call(this,a,-1,wYa)},yYa=function(a){g.F.call(this,a)},BYa=function(){return[1,
zYa,2,AYa]},CYa=function(){return[1,
g.qr,yYa,BYa]},DYa=function(a){g.F.call(this,a)},EYa=function(a){g.F.call(this,a)},GYa=function(){return[1,
g.sr,2,g.sr,3,FYa]},HYa=function(a){g.F.call(this,a)},JYa=function(){return[1,
g.sr,2,g.sr,3,IYa,4,FYa]},LYa=function(){return[1,
g.Ve,EYa,GYa,KYa,2,g.Ve,HYa,JYa,KYa]},PYa=function(){return[1,
MYa,g.Yi,2,NYa,g.Yi,3,OYa,g.Yi]},SYa=function(){return[1,
QYa,g.Xi,2,RYa,g.Xi,3,g.Ve,xYa,CYa,g.Xi]},UYa=function(){return[1,
g.qr,g.Ui,PYa,2,TYa,g.Vi,SYa]},YYa=function(){return[1,
g.sr,5,VYa,2,TYa,DYa,LYa,3,WYa,6,XYa,4,g.qr,g.Ti,UYa]},W6=function(a){g.Ml(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Va()).toString(36));
return a},X6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Rl(a.j,b,c)},ZYa=function(a){if(a===g.Ko)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},$Ya=function(a){if(a instanceof g.Io)return a;
if("function"==typeof a.Og)return a.Og(!1);if(g.Pa(a)){var b=0,c=new g.Io;c.next=function(){for(;;){if(b>=a.length)return g.f2;if(b in a)return g.Jo(a[b++]);b++}};
var d=c.next;c.Mj=function(){return g.Lo(d.call(c))};
return c}throw Error("Not implemented");},aZa=function(a,b,c){if(g.Pa(a))try{g.wc(a,b,c)}catch(e){ZYa(e)}else for(a=$Ya(a);;){var d=void 0;
try{d=a.Mj()}catch(e){if(e===g.Ko)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){ZYa(e)}}},bZa=function(a,b){var c=[];
aZa(b,function(d){try{var e=g.$q.prototype.j.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.bha(e)&&c.push(d)},a);
return c},cZa=function(a,b){bZa(a,b).forEach(function(c){g.$q.prototype.remove.call(this,c)},a)},dZa=function(a){if(a.ea){if(a.ea.locationOverrideToken)return{locationOverrideToken:a.ea.locationOverrideToken};
if(null!=a.ea.latitudeE7&&null!=a.ea.longitudeE7)return{latitudeE7:a.ea.latitudeE7,longitudeE7:a.ea.longitudeE7}}return null},eZa=function(a,b){g.bc(a,b)||a.push(b)},Y6=function(a){var b=0,c;
for(c in a)b++;return b},fZa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Z6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return fZa(a)},gZa=function(a,b,c,d){var e=new g.vl(null,void 0);
a&&g.wl(e,a);b&&g.xl(e,b);c&&g.Hl(e,c);d&&(e.J=d);return e},$6=function(a,b){g.du[a]=!0;
var c=g.bu();c&&c.publish.apply(c,arguments);g.du[a]=!1},a7=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Iq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",hZa(this,a.capabilities||""),iZa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},hZa=function(a,b){a.capabilities.clear();
g.Po(b.split(","),g.Ua(uYa,jZa)).forEach(function(c){a.capabilities.add(c)})},iZa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},b7=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},c7=function(a,b){return!!b&&(a.id==b||a.uuid==b)},kZa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},lZa=function(a){return new b7(a)},mZa=function(a){return Array.isArray(a)?g.zn(a,lZa):[]},d7=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},e7=function(a){return Array.isArray(a)?"["+g.zn(a,d7).join(",")+"]":"null"},f7=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},nZa=function(a){return g.zn(a,function(b){return{key:b.id,
name:b.name}})},g7=function(a,b){return g.Xb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},h7=function(a,b){return g.Xb(a,function(c){return c7(c,b)})},oZa=function(){var a=(0,g.Ex)();
a&&cZa(a,a.i.Og(!0))},i7=function(){var a=g.Hx("yt-remote-connected-devices")||[];
g.tc(a);return a},pZa=function(a){if(g.cc(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.zn(a,function(d,e){return 0==e?d:d.substring(c.length)})},qZa=function(a){g.Gx("yt-remote-connected-devices",a,86400)},k7=function(){if(j7)return j7;
var a=g.Hx("yt-remote-device-id");a||(a=f7(),g.Gx("yt-remote-device-id",a,31536E3));for(var b=i7(),c=1,d=a;g.bc(b,d);)c++,d=a+"#"+c;return j7=d},l7=function(){var a=i7(),b=k7();
g.bc(a,b);g.Jx()&&g.vc(a,b);a=pZa(a);if(g.cc(a))try{g.Eka("remote_sid")}catch(c){}else try{g.ft("remote_sid",a.join(","),-1)}catch(c){}},rZa=function(){return g.Hx("yt-remote-session-browser-channel")},sZa=function(){return g.Hx("yt-remote-local-screens")||[]},tZa=function(){g.Gx("yt-remote-lounge-token-expiration",!0,86400)},uZa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.zn(sZa(),function(d){return d.loungeToken}),c=g.zn(a,function(d){return d.loungeToken});
g.An(c,function(d){return!g.bc(b,d)})&&tZa();
g.Gx("yt-remote-local-screens",a,31536E3)},vZa=function(a,b){g.Gx("yt-remote-session-browser-channel",a);
g.Gx("yt-remote-session-screen-id",b);a=i7();b=k7();g.bc(a,b)||a.push(b);qZa(a);l7()},m7=function(a){a||(g.Ix("yt-remote-session-screen-id"),g.Ix("yt-remote-session-video-id"));
l7();a=i7();g.gc(a,k7());qZa(a)},wZa=function(){if(!n7){var a=g.ir();
a&&(n7=new g.Xq(a))}},xZa=function(){wZa();
return n7?!!n7.get("yt-remote-use-staging-server"):!1},o7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},yZa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},zZa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},p7=function(a){a.length?AZa(a.shift(),function(){p7(a)}):q7()},BZa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},AZa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Pk(d,g.Nq(a));(document.head||document.documentElement).appendChild(d)},CZa=function(){var a=o7(),b=[];
if(1<a){var c=a-1;b.push("//www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},q7=function(){var a=zZa();
a&&a(!1,"No cast extension found")},r7=function(){if(DZa){var a=2,b=zZa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;AZa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",q7,c)}},EZa=function(){r7();
var a=CZa();a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},GZa=function(){r7();
var a=CZa();a.push.apply(a,g.v(FZa.map(BZa)));a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},HZa=function(){this.i=s7();
this.i.Vy("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},IZa=function(){this.i=s7();
this.i.Vy("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},JZa=function(){this.i=s7();
this.i.Vy("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},t7=function(a,b,c){g.I.call(this);
this.I=null!=c?(0,g.Ta)(a,c):a;this.Xf=b;this.C=(0,g.Ta)(this.CR,this);this.i=!1;this.j=0;this.u=this.Ob=null;this.B=[]},u7=function(a,b,c){g.I.call(this);
this.B=null!=c?a.bind(c):a;this.Xf=b;this.u=null;this.i=!1;this.j=0;this.Ob=null},v7=function(a){a.Ob=g.Hi(function(){a.Ob=null;
a.i&&!a.j&&(a.i=!1,v7(a))},a.Xf);
var b=a.u;a.u=null;a.B.apply(null,b)},w7=function(){},x7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},z7=function(a){y7.dispatchEvent(new KZa(y7,a))},KZa=function(a,b){g.df.call(this,"statevent",a);
this.stat=b},A7=function(a,b,c,d){this.i=a;
this.u=b;this.N=c;this.J=d||1;this.j=45E3;this.B=new g.Sl(this);this.I=new g.Gi;this.I.setInterval(250)},MZa=function(a,b,c){a.pu=1;
a.yn=W6(b.clone());a.Oq=c;a.C=!0;LZa(a,null)},B7=function(a,b,c,d,e){a.pu=1;
a.yn=W6(b.clone());a.Oq=null;a.C=c;e&&(a.QO=!1);LZa(a,d)},LZa=function(a,b){a.St=Date.now();
C7(a);a.Vo=a.yn.clone();X6(a.Vo,"t",a.J);a.kC=0;a.Nf=a.i.mE(a.i.Xx()?b:null);0<a.bD&&(a.vB=new u7((0,g.Ta)(a.PP,a,a.Nf),a.bD));a.B.Pa(a.Nf,"readystatechange",a.DR);b=a.wp?g.Gf(a.wp):{};a.Oq?(a.hC="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Nf.send(a.Vo,a.hC,a.Oq,b)):(a.hC="GET",a.QO&&!g.hf&&(b.Connection="close"),a.Nf.send(a.Vo,a.hC,null,b));a.i.Nj(1)},OZa=function(a,b){var c=a.kC,d=b.indexOf("\n",c);
if(-1==d)return D7;c=Number(b.substring(c,d));if(isNaN(c))return NZa;d+=1;if(d+c>b.length)return D7;b=b.substr(d,c);a.kC=d+c;return b},QZa=function(a,b){a.St=Date.now();
C7(a);var c=b?window.location.hostname:"";a.Vo=a.yn.clone();g.Ml(a.Vo,"DOMAIN",c);g.Ml(a.Vo,"t",a.J);try{a.dk=new ActiveXObject("htmlfile")}catch(m){E7(a);a.hn=7;z7(22);F7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in G7)f=G7[f];else if(f in PZa)f=G7[f]=PZa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
G7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Yg(g.tg("b/12014412"),d);a.dk.open();a.dk.write(g.Ug(c));a.dk.close();a.dk.parentWindow.m=(0,g.Ta)(a.HX,a);a.dk.parentWindow.d=(0,g.Ta)(a.ZN,a,!0);a.dk.parentWindow.rpcClose=(0,g.Ta)(a.ZN,a,!1);c=a.dk.createElement("DIV");a.dk.parentWindow.document.body.appendChild(c);d=g.Gg(a.Vo.toString());d=g.oh(g.Cg(d));d=g.Yg(g.tg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.$g(c,d);a.i.Nj(1)},C7=function(a){a.kI=Date.now()+
a.j;
RZa(a,a.j)},RZa=function(a,b){if(null!=a.Gu)throw Error("WatchDog timer not null");
a.Gu=x7((0,g.Ta)(a.PX,a),b)},H7=function(a){a.Gu&&(g.C.clearTimeout(a.Gu),a.Gu=null)},F7=function(a){a.i.yf()||a.Op||a.i.Py(a)},E7=function(a){H7(a);
g.af(a.vB);a.vB=null;a.I.stop();g.Ul(a.B);if(a.Nf){var b=a.Nf;a.Nf=null;b.abort();b.dispose()}a.dk&&(a.dk=null)},I7=function(a,b){try{a.i.SN(a,b),a.i.Nj(4)}catch(c){}},TZa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;SZa(a,b,function(h){h?c(!0):g.C.setTimeout(function(){TZa(a,b,c,d,f)},f)})}},SZa=function(a,b,c){var d=new Image;
d.onload=function(){try{J7(d),c(!0)}catch(e){}};
d.onerror=function(){try{J7(d),c(!1)}catch(e){}};
d.onabort=function(){try{J7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
vYa(d,a)},J7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},UZa=function(a){this.i=a;
this.j=new w7},VZa=function(a){var b=K7(a.i,a.Ev,"/mail/images/cleardot.gif");
W6(b);TZa(b.toString(),5E3,(0,g.Ta)(a.sS,a),3,2E3);a.Nj(1)},M7=function(a){var b=a.i.W;
if(null!=b)z7(5),b?(z7(11),L7(a.i,a,!1)):(z7(12),L7(a.i,a,!0));else if(a.qh=new A7(a,void 0,void 0,void 0),a.qh.wp=a.cD,b=a.i,b=K7(b,b.Xx()?a.hv:null,a.dD),z7(5),!g.Mc||g.Fc(10))X6(b,"TYPE","xmlhttp"),B7(a.qh,b,!1,a.hv,!1);else{X6(b,"TYPE","html");var c=a.qh;a=!!a.hv;c.pu=3;c.yn=W6(b.clone());QZa(c,a)}},N7=function(a,b,c){this.i=1;
this.j=[];this.B=[];this.C=new w7;this.N=a||null;this.W=null!=b?b:null;this.I=c||!1},WZa=function(a,b){this.i=a;
this.map=b;this.context=null},XZa=function(a,b,c,d){g.df.call(this,"timingevent",a);
this.size=b;this.Nx=d},YZa=function(a){g.df.call(this,"serverreachability",a)},a_a=function(a){ZZa(a);
if(3==a.i){var b=a.Zw++,c=a.Gz.clone();g.Ml(c,"SID",a.u);g.Ml(c,"RID",b);g.Ml(c,"TYPE","terminate");O7(a,c);b=new A7(a,a.u,b,void 0);b.pu=2;b.yn=W6(c.clone());vYa(new Image,b.yn.toString());b.St=Date.now();C7(b)}$Za(a)},b_a=function(a){a.XS(1,0);
a.Gz=K7(a,null,a.eD);P7(a)},ZZa=function(a){a.Cn&&(a.Cn.abort(),a.Cn=null);
a.Pe&&(a.Pe.cancel(),a.Pe=null);a.Sl&&(g.C.clearTimeout(a.Sl),a.Sl=null);Q7(a);a.Yg&&(a.Yg.cancel(),a.Yg=null);a.Nn&&(g.C.clearTimeout(a.Nn),a.Nn=null)},c_a=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.j.push(new WZa(a.IU++,b));2!=a.i&&3!=a.i||P7(a)},d_a=function(a){var b=0;
a.Pe&&b++;a.Yg&&b++;return b},P7=function(a){a.Yg||a.Nn||(a.Nn=x7((0,g.Ta)(a.XN,a),0),a.Ls=0)},f_a=function(a,b){if(1==a.i){if(!b){a.Zw=Math.floor(1E5*Math.random());
b=a.Zw++;var c=new A7(a,"",b,void 0);c.wp=a.xk;var d=R7(a),e=a.Gz.clone();g.Ml(e,"RID",b);g.Ml(e,"CVER","1");O7(a,e);MZa(c,e,d);a.Yg=c;a.i=2}}else 3==a.i&&(b?e_a(a,b):0==a.j.length||a.Yg||e_a(a))},e_a=function(a,b){if(b)if(6<a.Pp){a.j=a.B.concat(a.j);
a.B.length=0;var c=a.Zw-1;b=R7(a)}else c=b.N,b=b.Oq;else c=a.Zw++,b=R7(a);var d=a.Gz.clone();g.Ml(d,"SID",a.u);g.Ml(d,"RID",c);g.Ml(d,"AID",a.vt);O7(a,d);c=new A7(a,a.u,c,a.Ls+1);c.wp=a.xk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Yg=c;MZa(c,d,b)},O7=function(a,b){a.Of&&(a=a.Of.sL())&&g.pf(a,function(c,d){g.Ml(b,d,c)})},R7=function(a){var b=Math.min(a.j.length,1E3),c=["count="+b];
if(6<a.Pp&&0<b){var d=a.j[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Cr:e.Cr},f++){e.Cr=a.j[f].i;var h=a.j[f].map;e.Cr=6>=a.Pp?f:e.Cr-d;try{g.pf(h,function(l){return function(m,n){c.push("req"+l.Cr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Cr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.j.splice(0,b));
return c.join("&")},g_a=function(a){a.Pe||a.Sl||(a.J=1,a.Sl=x7((0,g.Ta)(a.WN,a),0),a.us=0)},S7=function(a){if(a.Pe||a.Sl||3<=a.us)return!1;
a.J++;a.Sl=x7((0,g.Ta)(a.WN,a),h_a(a,a.us));a.us++;return!0},L7=function(a,b,c){a.fC=c;
a.yk=b.Jl;a.I||b_a(a)},Q7=function(a){null!=a.Xp&&(g.C.clearTimeout(a.Xp),a.Xp=null)},h_a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},T7=function(a,b){if(2==b||9==b){var c=null;
a.Of&&(c=null);var d=(0,g.Ta)(a.VY,a);c||(c=new g.vl("//www.google.com/images/cleardot.gif"),W6(c));SZa(c.toString(),1E4,d)}else z7(2);i_a(a,b)},i_a=function(a,b){a.i=0;
a.Of&&a.Of.HK(b);$Za(a);ZZa(a)},$Za=function(a){a.i=0;
a.yk=-1;if(a.Of)if(0==a.B.length&&0==a.j.length)a.Of.WD();else{var b=g.jc(a.B),c=g.jc(a.j);a.B.length=0;a.j.length=0;a.Of.WD(b,c)}},K7=function(a,b,c){var d=g.Nl(c);
if(""!=d.i)b&&g.xl(d,b+"."+d.i),g.Hl(d,d.u);else{var e=window.location;d=gZa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Yv&&g.pf(a.Yv,function(f,h){g.Ml(d,h,f)});
g.Ml(d,"VER",a.Pp);O7(a,d);return d},j_a=function(){},k_a=function(){this.i=[];
this.j=[]},l_a=function(){},s7=function(){if(!U7){U7=new g.Ji(new l_a);
var a=g.xs("client_streamz_web_flush_count",-1);-1!==a&&(U7.B=a)}return U7},m_a=function(a,b){this.action=a;
this.params=b||{}},V7=function(a,b){g.I.call(this);
this.i=new g.K(this.yX,0,this);g.J(this,this.i);this.Xf=5E3;this.j=0;if("function"===typeof a)b&&(a=(0,g.Ta)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ta)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},W7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.I=b;this.u=new g.Wq;this.j=new V7(this.wY,this);this.i=null;this.Y=!1;this.C=null;this.W="";this.N=this.B=0;this.J=[];this.ya=c;this.ea=d;this.Ha=e;this.xa=new HZa;this.Ia=new IZa;this.La=new JZa},n_a=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.fC,sessionId:a.i.u,arrayId:a.i.vt}},o_a=function(a,b){a.N=b||0;
a.j.stop();X7(a);a.i&&(3==a.i.getState()&&f_a(a.i),a_a(a.i));a.N=0},Y7=function(a){return!!a.i&&3==a.i.getState()},X7=function(a){if(a.i){var b=a.ea(),c=a.i.xk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.xk=c}},Z7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.j=!0;a=a||document.location.href;var b=Number(g.wj(4,a))||"";b&&(this.port=":"+b);this.domain=g.xj(a)||"";a=g.zb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.j=!1))},$7=function(a,b){var c=a.i;
a.j&&(c="https://"+a.domain+a.port+a.i);return g.Ij(c+b,{})},a8=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ua(a.B,d,!0),onError:g.Ua(a.u,e),onTimeout:g.Ua(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Xs(b,a)},s_a=function(){var a=p_a;
q_a();b8.push(a);r_a()},c8=function(a,b){q_a();
var c=t_a(a,String(b));g.cc(b8)?u_a(c):(r_a(),g.wc(b8,function(d){d(c)}))},q_a=function(){b8||(b8=g.La("yt.mdx.remote.debug.handlers_")||[],g.Ka("yt.mdx.remote.debug.handlers_",b8,void 0))},u_a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},r_a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.wc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},t_a=function(a,b){var c=(Date.now()-v_a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Rw.call(this);
this.I=a;this.screens=[]},w_a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},x_a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Po(a.screens,function(f){return!!g7(b,f)});
for(var d=0,e=b.length;d<e;d++)c=w_a(a,b[d])||c;return c},y_a=function(a,b){var c=a.screens.length;
a.screens=g.Po(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Rw.call(this);
this.u=a;this.J=b;this.B=c;this.I=d;this.C=e;this.j=0;this.i=null;this.Ob=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.j=a;this.i=NaN;i8(this);this.info("Initializing with "+e7(this.screens))},z_a=function(a){if(a.screens.length){var b=g.zn(a.screens,function(d){return d.id}),c=$7(a.j,"/pairing/get_lounge_token_batch");
a8(a.j,c,{screen_ids:b.join(",")},(0,g.Ta)(a.xT,a),(0,g.Ta)(a.wT,a))}},i8=function(a){if(g.Q("deprecate_pair_servlet_enabled"))return x_a(a,[]);
var b=mZa(sZa());b=g.Po(b,function(c){return!c.uuid});
return x_a(a,b)},k8=function(a,b){uZa(g.zn(a.screens,kZa));
b&&tZa()},m8=function(a,b){g.Rw.call(this);
this.I=b;b=(b=g.Hx("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.bc(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.j=null;l8("Initialized with "+g.nj(this.i))},n8=function(a,b,c){var d=$7(a.C,"/pairing/get_screen_availability");
a8(a.C,d,{lounge_token:b.token},(0,g.Ta)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ta)(function(){c(!1)},a))},o8=function(a,b){a:if(Y6(b)!=Y6(a.i))var c=!1;
else{c=g.xf(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.nj(a.i)),a.i=b,a.Z("screenChange"));A_a(a)},p8=function(a){isNaN(a.u)||g.Ts(a.u);
a.u=g.Rs((0,g.Ta)(a.bH,a),0<a.B&&a.B<g.Va()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},B_a=function(a){var b={};
g.wc(a.I(),function(c){c.token?b[c.token]=c.id:this.re("Requesting availability of screen w/o lounge token.")});
return b},A_a=function(a){a=g.xf(g.qf(a.i,function(b){return b}));
g.tc(a);a.length?g.Gx("yt-remote-online-screen-ids",a.join(","),60):g.Ix("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.j=null;this.u=[];this.C={};C_a(this)},E_a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Hh(),l=c?h7(h,c):null;c&&(a.J||l)||(l=h7(h,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.i,m,function(n){e(n?m:null)})}else c?D_a(a,c,(0,g.Ta)(function(n){var p=r8(this,new b7({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},F_a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},G_a=function(a,b,c){n8(a.i,b,c)},D_a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Xs($7(a.B,"/pairing/get_lounge_token_batch"),e)},H_a=function(a){a.screens=a.j.Hh();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+e7(a.screens))},C_a=function(a){s8(a);
a.j=new j8(a.B);a.j.subscribe("screenChange",(0,g.Ta)(a.GT,a));H_a(a);a.J||(a.u=mZa(g.Hx("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+e7(a.u));a.i=new m8(a.B,(0,g.Ta)(a.Hh,a,!0));a.i.subscribe("screenChange",(0,g.Ta)(function(){this.Z("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=h7(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||I_a(a));s8(a);a.C[b.uuid]=b.id;g.Gx("yt-remote-device-id-map",a.C,31536E3);return b},I_a=function(a){a=g.Po(a.u,function(b){return"shortLived"!=b.idType});
g.Gx("yt-remote-automatic-screen-cache",g.zn(a,kZa))},s8=function(a){a.C=g.Hx("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Rw.call(this);
this.ya=c;this.u=a;this.i=b;this.B=null},u8=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},J_a=function(a,b){a.B&&(a.B.token=b,r8(a.u,a.B));
a.Z("sessionScreen",a.B)},v8=function(a,b){c8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.j=null;this.ea=(0,g.Ta)(this.IR,this);this.xa=(0,g.Ta)(this.TX,this);this.Y=g.Rs(function(){K_a(d,null)},12E4);
this.J=this.C=this.I=this.N=0;this.va=!1;this.W="unknown"},x8=function(a,b){g.Ts(a.J);
a.J=0;0==b?L_a(a):a.J=g.Rs(function(){L_a(a)},b)},L_a=function(a){M_a(a,"getLoungeToken");
g.Ts(a.C);a.C=g.Rs(function(){N_a(a,null)},3E4)},M_a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.nj(void 0));
var c={};c.type=b;a.j?a.j.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ta)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.nj(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.GL(b,function(c){u8(a,c)},function(){return a.Ag()},5)):a.Ag(Error("Waiting for session status timed out."))},P_a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new b7(b);O_a(a,d,function(e){e?(a.va=!0,r8(a.u,d),u8(a,d),a.W="unknown",x8(a,c)):(g.Bs(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Ag())},5)},K_a=function(a,b){g.Ts(a.Y);
a.Y=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?P_a(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Bs(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.Bs(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Ag(Error("Waiting for session status timed out."))},N_a=function(a,b){g.Ts(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.W=c,x8(a,3E4)):(J_a(a,b.loungeToken),a.va=!1,a.W="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},O_a=function(a,b,c,d){g.Ts(a.I);
a.I=0;G_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Rs(function(){O_a(a,b,c,d-1)},300)})},Q_a=function(a){g.Ts(a.N);
a.N=0;g.Ts(a.I);a.I=0;g.Ts(a.Y);a.Y=0;g.Ts(a.C);a.C=0;g.Ts(a.J);a.J=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.j=this.N=null;this.xa="";this.La=c;this.Ia=null;this.Y=function(){};
this.W=NaN;this.Ha=(0,g.Ta)(this.JR,this);this.C=function(){};
this.J=this.I=0;this.ea=!1;this.va="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.j)?0:b.getDialAppInfo))},R_a=function(a){a.C=a.u.uJ(a.xa,a.i.label,a.i.friendlyName,A8(a),function(b,c){a.C=function(){};
a.ea=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.C=function(){};
a.Ag(b)})},S_a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.La;xZa()&&(b.env_useStageMdx=1);return g.Gj(b)},C8=function(a){return new Promise(function(b){a.xa=f7();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,S_a(a));b(c);R_a(a)}else a.Y=function(){g.Ts(a.W);a.Y=function(){};
a.W=NaN;var d=new chrome.cast.DialLaunchResponse(!0,S_a(a));b(d);R_a(a)},a.W=g.Rs(function(){a.Y()},100)})},U_a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);return(new Promise(function(e){T_a(a,d,function(f){f?(a.ea=!0,r8(a.u,d),u8(a,d),B8(a,c)):g.Bs(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},V_a=function(a,b){var c=a.N.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){E_a(a.u,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},T_a=function(a,b,c,d){g.Ts(a.I);
a.I=0;G_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Rs(function(){T_a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Ts(a.J),a.J=0,0==b?W_a(a):a.J=g.Rs(function(){W_a(a)},b))},W_a=function(a){A8(a)&&a.j.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,B8(a,3E4)):(a.ea=!1,a.va="unknown",J_a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";B8(a,3E4)})},X_a=function(a){g.Ts(a.I);
a.I=0;g.Ts(a.J);a.J=0;a.C();a.C=function(){};
g.Ts(a.W)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.j=g.Rs((0,g.Ta)(this.wt,this,null),150)},E8=function(a,b){g.Rw.call(this);
this.config_=b;this.j=a;this.N=b.appId||"233637DE";this.B=b.theme||"cl";this.W=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.J=!1;this.u=[];this.C=(0,g.Ta)(this.MW,this)},Y_a=function(a,b){return b?g.Xb(a.u,function(c){return c7(b,c.label)},a):null},F8=function(a){c8("Controller",a)},p_a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.J||!!a.u.length||!!a.i},H8=function(a,b,c){b!=a.i&&(g.af(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.Ta)(a.VN,a,b)),b.subscribe("sessionFailed",function(){return Z_a(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.wt(null)):a.Z("yt-remote-cast2-session-change",null))},Z_a=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},$_a=function(a){var b=a.j.tJ(),c=a.i&&a.i.i;
a=g.zn(b,function(d){c&&c7(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Y_a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},e0a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):a0a()?b0a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?c0a(a,c):(window.__onGCastApiAvailable=function(e,f){e?c0a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Ix("yt-remote-cast-available"),g.Ix("yt-remote-cast-receiver"),
d0a(),c(!1))},d.loadCastApiSetupScript?g.Kx("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=o7()&&EZa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?q7():89<=o7()?GZa():(r7(),p7(FZa.map(BZa))))):I8("Cannot initialize because not running Chrome")},d0a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ka("yt.mdx.remote.cloudview.instance_",null,void 0);f0a(!1);g.gu(N8);N8.length=0},O8=function(){return!!g.Hx("yt-remote-cast-installed")},g0a=function(){var a=g.Hx("yt-remote-cast-receiver");
return a?a.friendlyName:null},h0a=function(){I8("clearCurrentReceiver");
g.Ix("yt-remote-cast-receiver")},i0a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.fu("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},a0a=function(){var a=0<=g.zb().search(/ (CrMo|Chrome|CriOS)\//);
return g.rz||a},j0a=function(a,b){M8().init(a,b)},b0a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Gx("yt-remote-cast-available",d);$6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Gx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Gx("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+d7(d));
d||g.Ix("yt-remote-cast-receiver");$6("yt-remote-cast2-session-change",d)}),g.Ka("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.La("yt.mdx.remote.cloudview.instance_")},c0a=function(a,b){L8(!0);
J8(!1);j0a(a,function(c){c?(f0a(!0),g.hu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Ix("yt-remote-cast-available"),g.Ix("yt-remote-cast-receiver"),d0a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Gx("yt-remote-cast-installed",a)},P8=function(){return!!g.La("yt.mdx.remote.cloudview.apiReady_")},f0a=function(a){I8("setApiReady_ "+a);
g.Ka("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ka("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.Yk=!1;this.N=this.C=this.i=this.B=0;this.u=NaN;this.j=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Yk=!1;a.hasNext=!1;a.J=0;a.I=g.Va();a.B=0;a.i=0;a.C=0;a.N=0;a.u=NaN;a.j=!1},U8=function(a){return a.Gc()?(g.Va()-a.I)/1E3:0},V8=function(a,b){a.J=b;
a.I=g.Va()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Va()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Hf(a.trackData);b.hasPrevious=a.Yk;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.N;b.liveIngestionTime=a.u;return b},$8=function(a,b){g.Rw.call(this);
this.u=0;this.B=a;this.I=[];this.C=new k_a;this.j=this.i=null;this.W=(0,g.Ta)(this.sV,this);this.J=(0,g.Ta)(this.lx,this);this.N=(0,g.Ta)(this.rV,this);this.Y=(0,g.Ta)(this.zV,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.sH,this),k0a(this))):c=3;0!=c&&(b?this.sH(c):g.Rs((0,g.Ta)(function(){this.sH(c)},this),0));
(a=i0a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Y)},a9=function(a){return new S8(a.B.getPlayerContextData())},k0a=function(a){g.wc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.B.subscribe(b,g.Ua(this.KW,b),this))},a)},l0a=function(a){g.wc(a.I,function(b){this.B.unsubscribeByKey(b)},a);
a.I.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.C;
50>c.i.length+c.j.length&&a.C.j.push(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.B.sendMessage(b,c)},d9=function(a,b){l0a(a);
a.B.setPlayerContextData(Y8(b));k0a(a)},Z8=function(a,b){a.j&&(a.j.removeUpdateListener(a.W),a.j.removeMediaListener(a.J),a.lx(null));
a.j=b;a.j&&(c8("CP","Setting cast session: "+a.j.sessionId),a.j.addUpdateListener(a.W),a.j.addMediaListener(a.J),a.j.media.length&&a.lx(a.j.media[0]))},m0a=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.i.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Ta)(function(d){this.re("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.re("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},h9=function(a,b,c,d){d=void 0===d?!1:d;
g.Rw.call(this);var e=this;this.C=NaN;this.va=!1;this.N=this.J=this.Y=this.ea=NaN;this.W=[];this.B=this.I=this.u=this.wc=this.i=null;this.Ha=a;this.ya=d;this.W.push(g.Mt(window,"beforeunload",function(){e.Hs(2)}));
this.j=[];this.wc=new S8;this.Ia=b.id;this.xa=b.idType;this.i=n0a(this,c);this.i.subscribe("handlerOpened",this.wV,this);this.i.subscribe("handlerClosed",this.tV,this);this.i.subscribe("handlerError",this.uV,this);this.i.subscribe("handlerMessage",this.vV,this);this.i.HB(b.token);this.subscribe("remoteQueueChange",function(){var f=this.wc.videoId;g.Jx()&&g.Gx("yt-remote-session-video-id",f)},this)},o0a=function(a){return g.Xb(a.j,function(b){return"LOUNGE_SCREEN"==b.type})},i9=function(a){c8("conn",
a)},n0a=function(a,b){return new W7($7(a.Ha,"/bc"),b,!1,function(){return a.yJ()},"shortLived"==a.xa)},j9=function(a,b){a.Z("proxyStateChange",b)},p0a=function(a){a.C=g.Rs(function(){i9("Connecting timeout");
a.Hs(1)},2E4)},k9=function(a){g.Ts(a.C);
a.C=NaN},l9=function(a){g.Ts(a.ea);
a.ea=NaN},q0a=function(a){m9(a);
a.Y=g.Rs(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Ts(a.Y);
a.Y=NaN},s0a=function(a,b){var c=null;
if(b){var d=o0a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ka("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=Y7(a.i)&&isNaN(a.C);b==c?b&&(j9(a,1),n9(a,"getSubtitlesTrack")):b?(a.FL()&&a.wc.reset(),j9(a,1),n9(a,"getNowPlaying"),r0a(a)):a.Hs(1)},t0a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.wc.videoId&&(g.Cf(b.params)?a.wc.trackData=null:a.wc.trackData=b.params,a.Z("remotePlayerChange"))},u0a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.wc.listId=b.params.listId||a.wc.listId;X8(a.wc,d,e);a.Z("remoteQueueChange",c)},w0a=function(a,b){b.params=b.params||{};
u0a(a,b,"NOW_PLAYING_MAY_CHANGE");v0a(a,b);a.Z("autoplayDismissed")},v0a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.wc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.wc.playerState&&(c=-1E3);a.wc.playerState=c;c=Number(b.params.loadedTime);a.wc.N=isNaN(c)?0:c;a.wc.Wj(Number(b.params.duration));c=a.wc;var d=Number(b.params.liveIngestionTime);c.u=d;c.j=isNaN(d)?!1:!0;c=a.wc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.wc.playerState?q0a(a):m9(a);a.Z("remotePlayerChange")},x0a=function(a,b){if(-1E3!=a.wc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.wc.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.wc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},y0a=function(a,b){var c="true"==b.params.muted;
a.wc.volume=parseInt(b.params.volume,10);a.wc.muted=c;a.Z("remotePlayerChange")},z0a=function(a,b){a.I=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},A0a=function(a,b){var c="true"==b.params.hasNext;
a.wc.Yk="true"==b.params.hasPrevious;a.wc.hasNext=c;a.Z("previousNextChange")},r0a=function(a){g.Ts(a.N);
a.N=g.Rs(function(){a.Hs(1)},864E5)},n9=function(a,b,c){c?i9("Sending: action="+b+", params="+g.nj(c)):i9("Sending: action="+b);
a.i.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.We=a;this.i=[];this.i.push(this.We.$_s("screenChange",(0,g.Ta)(this.NR,this)));this.i.push(this.We.$_s("onlineScreenChange",(0,g.Ta)(this.qW,this)))},E0a=function(a,b){wZa();
if(!n7||!n7.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;oZa();l7();p9||(p9=new Z7(b?b.loungeApiHost:void 0),xZa()&&(p9.i="/api/loungedev"));q9||(q9=g.La("yt.mdx.remote.deferredProxies_")||[],g.Ka("yt.mdx.remote.deferredProxies_",q9,void 0));B0a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ka("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ka("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);e0a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){$6("yt-remote-receiver-availability-change")})},e)}b&&!g.La("yt.mdx.remote.initialized_")&&(g.Ka("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.nj(b)),u9.push(g.fu("yt-remote-cast2-api-ready",function(){$6("yt-remote-api-ready")})),u9.push(g.fu("yt-remote-cast2-availability-change",function(){$6("yt-remote-receiver-availability-change")})),u9.push(g.fu("yt-remote-cast2-receiver-selected",function(){v9(null);
$6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.fu("yt-remote-cast2-receiver-resumed",function(){$6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.fu("yt-remote-cast2-session-change",C0a)),u9.push(g.fu("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),h0a())})),u9.push(g.fu("yt-remote-cast2-session-failed",function(){$6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Q("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.nj(a)),a?(g.Gx("yt-remote-session-app",a.app),g.Gx("yt-remote-session-name",a.name)):(g.Ix("yt-remote-session-app"),g.Ix("yt-remote-session-name")),g.Ka("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||D0a())}},F0a=function(){var a=r9().We.$_gos();
var b=y9();b&&z9()&&(g7(a,b)||a.push(b));return nZa(a)},A9=function(){var a=G0a();
!a&&O8()&&g0a()&&(a={key:"cast-selector-receiver",name:g0a()});return a},G0a=function(){var a=F0a(),b=y9();
b||(b=w9());return g.Xb(a,function(c){return b&&c7(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Hh();return h7(b,a)},C0a=function(a){t9("remote.onCastSessionChange_: "+d7(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.HB(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.La("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.La("yt.mdx.remote.currentScreenId_")},H0a=function(a){g.Ka("yt.mdx.remote.currentScreenId_",a,void 0)},I0a=function(){return g.La("yt.mdx.remote.connectData_")},v9=function(a){g.Ka("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.La("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||H0a("");g.Ka("yt.mdx.remote.connection_",a,void 0);q9&&(g.wc(q9,function(c){c(a)}),q9.length=0);
b&&!a?$6("yt-remote-connection-change",!1):!b&&a&&$6("yt-remote-connection-change",!0)},w9=function(){var a=g.Jx();
if(!a)return null;var b=r9();if(!b)return null;b=b.Hh();return h7(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{H0a(a.id);var c=g.La("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new h9(p9,a,x9(),c);a.connect(b,I0a());a.subscribe("beforeDisconnect",function(d){$6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},D0a=function(){var a=w9();
a?(t9("Resume connection to: "+d7(a)),D9(a,0)):(m7(),h0a(),t9("Skipping connecting because no session screen found."))},B0a=function(){var a=x9();
if(g.Cf(a)){a=k7();var b=g.Hx("yt-remote-session-name")||"",c=g.Hx("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ka("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.La("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.I.call(this);
var d=this;this.j=a;this.G=b;this.Vb=c;this.events=new g.jC(this);this.Y=this.events.S(this.G,"onVolumeChange",function(e){J0a(d,e)});
this.C=!1;this.I=new g.KI(64);this.i=new g.K(this.bP,500,this);this.u=new g.K(this.cP,1E3,this);this.N=new t7(this.oZ,0,this);this.B={};this.W=new g.K(this.HP,1E3,this);this.J=new u7(this.seekTo,1E3,this);g.J(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.bW);this.events.S(b,"captionschanged",this.pV);this.events.S(b,"captionssettingschanged",this.hP);this.events.S(b,"videoplayerreset",this.aB);this.events.S(b,"mdxautoplaycancel",function(){d.Vb.bL()});
a=this.Vb;a.isDisposed();a.subscribe("proxyStateChange",this.RN,this);a.subscribe("remotePlayerChange",this.qx,this);a.subscribe("remoteQueueChange",this.aB,this);a.subscribe("previousNextChange",this.ON,this);a.subscribe("nowAutoplaying",this.IN,this);a.subscribe("autoplayDismissed",this.lN,this);g.J(this,this.i);g.J(this,this.u);g.J(this,this.N);g.J(this,this.W);g.J(this,this.J);this.hP();this.aB();this.qx()},J0a=function(a,b){if(J9(a)){a.Vb.unsubscribe("remotePlayerChange",a.qx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Vb);if(c!==d.volume||b!==d.muted)a.Vb.setVolume(c,b),a.W.start();a.Vb.subscribe("remotePlayerChange",a.qx,a)}},K0a=function(a){a.Rb(0);
a.i.stop();a.Wb(new g.KI(64))},K9=function(a,b){if(J9(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Mf(c,b));a.Vb.xJ(a.G.getVideoData(1).videoId,c);a.B=a9(a.Vb).trackData}},L9=function(a,b){var c=a.G.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Vb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,dZa(c));a.Wb(new g.KI(1))},L0a=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{cM:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},J9=function(a){return a9(a.Vb).videoId===a.G.getVideoData(1).videoId},M9=function(){g.W.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",V:{role:"dialog"},U:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",U:[{D:"div",K:"ytp-mdx-popup-title",qa:"\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"},{D:"div",K:"ytp-mdx-popup-description",qa:'\u0420\u043e\u043b\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043d\u0430 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u0435, \u0447\u0442\u043e \u0441\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u043d\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u0445. \u0427\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0433\u043e \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 "\u041e\u0442\u043c\u0435\u043d\u0430" \u0438 \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435.'},
{D:"div",K:"ytp-mdx-privacy-popup-buttons",U:[{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"\u041e\u0442\u043c\u0435\u043d\u0430"},{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-confirm"],qa:"\u041e\u041a"}]}]}]});this.i=new g.KK(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.S(this.cancelButton,"click",this.j);this.S(this.confirmButton,"click",this.u)},N9=function(a){g.W.call(this,
{D:"div",
K:"ytp-remote",U:[{D:"div",K:"ytp-remote-display-status",U:[{D:"div",K:"ytp-remote-display-status-icon",U:[g.$J()]},{D:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.i=new g.KK(this,250);g.J(this,this.i);this.S(a,"presentingplayerstatechange",this.onStateChange);M0a(this,a.yb())},M0a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.V(b,128)?g.eH('\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"',c):b.Gc()||g.V(b,4)?g.eH('\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"',c):g.eH('\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 "$RECEIVER_NAME"',
c);a.Ma("statustext",b);a.i.show()}else a.i.hide()},O9=function(a,b){g.qP.call(this,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430",0,a,b);
this.G=a;this.So={};this.S(a,"onMdxReceiversChange",this.C);this.S(a,"presentingplayerstatechange",this.C);this.C()},P9=function(a){g.pM.call(this,a);
this.jl={key:f7(),name:"\u042d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440"};this.gi=null;this.subscriptions=[];this.NG=this.Vb=null;this.So=[this.jl];this.En=this.jl;this.Ed=new g.KI(64);this.AM=0;this.Bf=-1;this.Ax=!1;this.yx=this.Nt=null;if(!g.YD(this.player.T())&&!g.ZD(this.player.T())){a=this.player;var b=g.SL(a);b&&(b=b.Wn())&&(b=new O9(a,b),g.J(this,b));b=new N9(a);g.J(this,b);g.bM(a,b.element,4);this.Nt=new M9;g.J(this,this.Nt);g.bM(a,this.Nt.element,4);this.Ax=
!!w9()}},Q9=function(a){a.yx&&(a.player.removeEventListener("presentingplayerstatechange",a.yx),a.yx=null)},N0a=function(a,b,c){a.Ed=c;
a.player.Z("presentingplayerstatechange",new g.NG(c,b))},R9=function(a,b){if(b.key!==a.En.key)if(b.key===a.jl.key)C9();
else{var c;(c=!a.player.T().L("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.Ax||!a.Nt);(c?0:g.nE(a.player.T())||g.qE(a.player.T()))&&O0a(a);a.En=b;if(!a.player.T().L("disable_mdx_connection_in_mdx_module_for_music_web")||!g.ZD(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.T().L("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.jM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=dZa(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.nj(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?$6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Hh(),(b=h7(a,b.key))&&D9(b,1))}}},O0a=function(a){a.player.yb().Gc()?a.player.pauseVideo():(a.yx=function(b){!a.Ax&&g.PG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.yx));
a.Nt&&a.Nt.fd();z9()||(H9=!0)};
g.Yc.prototype.C=g.da(0,function(){var a=g.bd(this);return 4294967296*g.bd(this)+(a>>>0)});
var zYa=g.Fe(function(a,b,c){if(1!==a.j)return!1;g.D(b,c,g.jd(a));return!0},g.Ie),RYa=g.Fe(function(a,b,c,d){if(1!==a.j)return!1;
g.Pd(b,c,d,g.jd(a));return!0},g.Ie),AYa=g.Fe(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.$c(a.i));return!0},g.Je),QYa=g.Fe(function(a,b,c,d){if(0!==a.j)return!1;
g.Pd(b,c,d,g.$c(a.i));return!0},g.Je),IYa=g.Fe(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.ad(a.i));return!0},g.Ke),NYa=g.Fe(function(a,b,c,d){if(0!==a.j)return!1;
g.Pd(b,c,d,g.ad(a.i));return!0},g.Ke),VYa=g.Fe(function(a,b,c){if(1!==a.j)return!1;
g.D(b,c,a.i.C());return!0},function(a,b,c){sYa(a,c,g.Hd(b,c))}),XYa=g.Fe(function(a,b,c){if(1!==a.j&&2!==a.j)return!1;
b=g.Jd(b,c);if(2==a.j){c=g.Yc.prototype.C;var d=g.ad(a.i)>>>0;for(d=a.i.i+d;a.i.i<d;)b.push(c.call(a.i))}else b.push(a.i.C());return!0},function(a,b,c){b=g.Jd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)sYa(a,c,b[d])}),FYa=g.Fe(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.cd(a.i));return!0},tYa),OYa=g.Fe(function(a,b,c,d){if(0!==a.j)return!1;
g.Pd(b,c,d,g.cd(a.i));return!0},tYa),WYa=g.Fe(function(a,b,c){if(2!==a.j)return!1;
a=g.ld(a);g.Gd(b);g.Jd(b,c).push(a);return!0},function(a,b,c){b=g.Jd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.wd(a,c,g.ib(e))}}),MYa=g.Fe(function(a,b,c,d){if(2!==a.j)return!1;
g.Pd(b,c,d,g.ld(a));return!0},g.Le),TYa=g.Fe(function(a,b,c,d,e){if(2!==a.j)return!1;
g.id(a,g.Qd(b,d,c),e);return!0},g.Me),wYa=[1];
g.w(xYa,g.F);g.w(yYa,g.F);g.w(DYa,g.F);g.w(EYa,g.F);var KYa=[1,2];g.w(HYa,g.F);var PZa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G7={"'":"\\'"},jZa={L_:"atp",fca:"ska",Kaa:"que",x9:"mus",eca:"sus",i5:"dsp",kba:"seq",a9:"mic",d4:"dpa",b0:"cds",v9:"mlm",Z3:"dsdtr",d$:"ntb"};a7.prototype.equals=function(a){return a?this.id==a.id:!1};
var n7,j7="",DZa=yZa("loadCastFramework")||yZa("loadCastApplicationFramework"),FZa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Wa(t7,g.I);g.k=t7.prototype;g.k.BR=function(a){this.B=arguments;this.i=!1;this.Ob?this.u=g.Va()+this.Xf:this.Ob=g.Hi(this.C,this.Xf)};
g.k.stop=function(){this.Ob&&(g.C.clearTimeout(this.Ob),this.Ob=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.j};
g.k.resume=function(){this.j&&(--this.j,!this.j&&this.i&&(this.i=!1,this.I.apply(null,this.B)))};
g.k.ra=function(){this.stop();t7.qe.ra.call(this)};
g.k.CR=function(){this.Ob&&(g.C.clearTimeout(this.Ob),this.Ob=null);this.u?(this.Ob=g.Hi(this.C,this.u-g.Va()),this.u=null):this.j?this.i=!0:(this.i=!1,this.I.apply(null,this.B))};g.w(u7,g.I);g.k=u7.prototype;g.k.sJ=function(a){this.u=arguments;this.Ob||this.j?this.i=!0:v7(this)};
g.k.stop=function(){this.Ob&&(g.C.clearTimeout(this.Ob),this.Ob=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.j++};
g.k.resume=function(){this.j--;this.j||!this.i||this.Ob||(this.i=!1,v7(this))};
g.k.ra=function(){g.I.prototype.ra.call(this);this.stop()};w7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
w7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var y7=new g.cg;g.w(KZa,g.df);g.k=A7.prototype;g.k.wp=null;g.k.Wm=!1;g.k.Gu=null;g.k.kI=null;g.k.St=null;g.k.pu=null;g.k.yn=null;g.k.Vo=null;g.k.Oq=null;g.k.Nf=null;g.k.kC=0;g.k.dk=null;g.k.hC=null;g.k.hn=null;g.k.fv=-1;g.k.QO=!0;g.k.Op=!1;g.k.bD=0;g.k.vB=null;var NZa={},D7={};g.k=A7.prototype;g.k.setTimeout=function(a){this.j=a};
g.k.DR=function(a){a=a.target;var b=this.vB;b&&3==g.Vj(a)?b.sJ():this.PP(a)};
g.k.PP=function(a){try{if(a==this.Nf)a:{var b=g.Vj(this.Nf),c=this.Nf.j,d=this.Nf.getStatus();if(g.Mc&&!g.Fc(10)||g.hf&&!g.Ec("420+")){if(4>b)break a}else if(3>b||3==b&&!g.gk(this.Nf))break a;this.Op||4!=b||7==c||(8==c||0>=d?this.i.Nj(3):this.i.Nj(2));H7(this);var e=this.Nf.getStatus();this.fv=e;var f=g.gk(this.Nf);if(this.Wm=200==e){4==b&&E7(this);if(this.C){for(a=!0;!this.Op&&this.kC<f.length;){var h=OZa(this,f);if(h==D7){4==b&&(this.hn=4,z7(15),a=!1);break}else if(h==NZa){this.hn=4;z7(16);a=!1;
break}else I7(this,h)}4==b&&0==f.length&&(this.hn=1,z7(17),a=!1);this.Wm=this.Wm&&a;a||(E7(this),F7(this))}else I7(this,f);this.Wm&&!this.Op&&(4==b?this.i.Py(this):(this.Wm=!1,C7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.hn=3,z7(13)):(this.hn=0,z7(14)),E7(this),F7(this)}}catch(l){this.Nf&&g.gk(this.Nf)}finally{}};
g.k.HX=function(a){x7((0,g.Ta)(this.GX,this,a),0)};
g.k.GX=function(a){this.Op||(H7(this),I7(this,a),C7(this))};
g.k.ZN=function(a){x7((0,g.Ta)(this.FX,this,a),0)};
g.k.FX=function(a){this.Op||(E7(this),this.Wm=a,this.i.Py(this),this.i.Nj(4))};
g.k.cancel=function(){this.Op=!0;E7(this)};
g.k.PX=function(){this.Gu=null;var a=Date.now();0<=a-this.kI?(2!=this.pu&&this.i.Nj(3),E7(this),this.hn=2,z7(18),F7(this)):RZa(this,this.kI-a)};
g.k.getLastError=function(){return this.hn};g.k=UZa.prototype;g.k.cD=null;g.k.qh=null;g.k.wB=!1;g.k.dP=null;g.k.Fz=null;g.k.IF=null;g.k.dD=null;g.k.Zh=null;g.k.Jl=-1;g.k.hv=null;g.k.Ev=null;g.k.connect=function(a){this.dD=a;a=K7(this.i,null,this.dD);z7(3);this.dP=Date.now();var b=this.i.N;null!=b?(this.hv=b[0],(this.Ev=b[1])?(this.Zh=1,VZa(this)):(this.Zh=2,M7(this))):(X6(a,"MODE","init"),this.qh=new A7(this,void 0,void 0,void 0),this.qh.wp=this.cD,B7(this.qh,a,!1,null,!0),this.Zh=0)};
g.k.sS=function(a){if(a)this.Zh=2,M7(this);else{z7(4);var b=this.i;b.yk=b.Cn.Jl;T7(b,9)}a&&this.Nj(2)};
g.k.mE=function(a){return this.i.mE(a)};
g.k.abort=function(){this.qh&&(this.qh.cancel(),this.qh=null);this.Jl=-1};
g.k.yf=function(){return!1};
g.k.SN=function(a,b){this.Jl=a.fv;if(0==this.Zh)if(b){try{var c=this.j.parse(b)}catch(d){a=this.i;a.yk=this.Jl;T7(a,2);return}this.hv=c[0];this.Ev=c[1]}else a=this.i,a.yk=this.Jl,T7(a,2);else if(2==this.Zh)if(this.wB)z7(7),this.IF=Date.now();else if("11111"==b){if(z7(6),this.wB=!0,this.Fz=Date.now(),a=this.Fz-this.dP,!g.Mc||g.Fc(10)||500>a)this.Jl=200,this.qh.cancel(),z7(12),L7(this.i,this,!0)}else z7(8),this.Fz=this.IF=Date.now(),this.wB=!1};
g.k.Py=function(){this.Jl=this.qh.fv;if(this.qh.Wm)0==this.Zh?this.Ev?(this.Zh=1,VZa(this)):(this.Zh=2,M7(this)):2==this.Zh&&((!g.Mc||g.Fc(10)?!this.wB:200>this.IF-this.Fz)?(z7(11),L7(this.i,this,!1)):(z7(12),L7(this.i,this,!0)));else{0==this.Zh?z7(9):2==this.Zh&&z7(10);var a=this.i;this.qh.getLastError();a.yk=this.Jl;T7(a,2)}};
g.k.Xx=function(){return this.i.Xx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Nj=function(a){this.i.Nj(a)};g.k=N7.prototype;g.k.xk=null;g.k.Yv=null;g.k.Yg=null;g.k.Pe=null;g.k.eD=null;g.k.Gz=null;g.k.rK=null;g.k.Qy=null;g.k.Zw=0;g.k.IU=0;g.k.Of=null;g.k.Nn=null;g.k.Sl=null;g.k.Xp=null;g.k.Cn=null;g.k.fC=null;g.k.vt=-1;g.k.zM=-1;g.k.yk=-1;g.k.Ls=0;g.k.us=0;g.k.Pp=8;g.Wa(XZa,g.df);g.Wa(YZa,g.df);g.k=N7.prototype;g.k.connect=function(a,b,c,d,e){z7(0);this.eD=b;this.Yv=c||{};d&&void 0!==e&&(this.Yv.OSID=d,this.Yv.OAID=e);this.I?(x7((0,g.Ta)(this.NK,this,a),100),b_a(this)):this.NK(a)};
g.k.NK=function(a){this.Cn=new UZa(this);this.Cn.cD=this.xk;this.Cn.j=this.C;this.Cn.connect(a)};
g.k.yf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.XN=function(a){this.Nn=null;f_a(this,a)};
g.k.WN=function(){this.Sl=null;this.Pe=new A7(this,this.u,"rpc",this.J);this.Pe.wp=this.xk;this.Pe.bD=0;var a=this.rK.clone();g.Ml(a,"RID","rpc");g.Ml(a,"SID",this.u);g.Ml(a,"CI",this.fC?"0":"1");g.Ml(a,"AID",this.vt);O7(this,a);if(!g.Mc||g.Fc(10))g.Ml(a,"TYPE","xmlhttp"),B7(this.Pe,a,!0,this.Qy,!1);else{g.Ml(a,"TYPE","html");var b=this.Pe,c=!!this.Qy;b.pu=3;b.yn=W6(a.clone());QZa(b,c)}};
g.k.SN=function(a,b){if(0!=this.i&&(this.Pe==a||this.Yg==a))if(this.yk=a.fv,this.Yg==a&&3==this.i)if(7<this.Pp){try{var c=this.C.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Sl){if(this.Pe)if(this.Pe.St+3E3<this.Yg.St)Q7(this),this.Pe.cancel(),this.Pe=null;else break a;S7(this);z7(19)}}else this.zM=a[1],0<this.zM-this.vt&&37500>a[2]&&this.fC&&0==this.us&&!this.Xp&&(this.Xp=x7((0,g.Ta)(this.mV,this),6E3));else T7(this,11)}else null!=b&&T7(this,11);else if(this.Pe==
a&&Q7(this),!g.nb(b))for(a=this.C.parse(b),b=0;b<a.length;b++)c=a[b],this.vt=c[0],c=c[1],2==this.i?"c"==c[0]?(this.u=c[1],this.Qy=c[2],c=c[3],null!=c?this.Pp=c:this.Pp=6,this.i=3,this.Of&&this.Of.JK(),this.rK=K7(this,this.Xx()?this.Qy:null,this.eD),g_a(this)):"stop"==c[0]&&T7(this,7):3==this.i&&("stop"==c[0]?T7(this,7):"noop"!=c[0]&&this.Of&&this.Of.IK(c),this.us=0)};
g.k.mV=function(){null!=this.Xp&&(this.Xp=null,this.Pe.cancel(),this.Pe=null,S7(this),z7(20))};
g.k.Py=function(a){if(this.Pe==a){Q7(this);this.Pe=null;var b=2}else if(this.Yg==a)this.Yg=null,b=1;else return;this.yk=a.fv;if(0!=this.i)if(a.Wm)if(1==b){b=Date.now()-a.St;var c=y7;c.dispatchEvent(new XZa(c,a.Oq?a.Oq.length:0,b,this.Ls));P7(this);this.B.length=0}else g_a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.yk)){if(d=1==b)this.Yg||this.Nn||1==this.i||2<=this.Ls?d=!1:(this.Nn=x7((0,g.Ta)(this.XN,this,a),h_a(this,this.Ls)),this.Ls++,d=!0);d=!(d||2==b&&S7(this))}if(d)switch(c){case 1:T7(this,
5);break;case 4:T7(this,10);break;case 3:T7(this,6);break;case 7:T7(this,12);break;default:T7(this,2)}}};
g.k.XS=function(a){if(!g.bc(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.VY=function(a){a?z7(2):(z7(1),i_a(this,8))};
g.k.mE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Pj;a.N=!1;return a};
g.k.isActive=function(){return!!this.Of&&this.Of.isActive(this)};
g.k.Nj=function(a){var b=y7;b.dispatchEvent(new YZa(b,a))};
g.k.Xx=function(){return!(!g.Mc||g.Fc(10))};
g.k=j_a.prototype;g.k.JK=function(){};
g.k.IK=function(){};
g.k.HK=function(){};
g.k.WD=function(){};
g.k.sL=function(){return{}};
g.k.isActive=function(){return!0};g.k=k_a.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.j.length};
g.k.clear=function(){this.i=[];this.j=[]};
g.k.contains=function(a){return g.bc(this.i,a)||g.bc(this.j,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.xSa)(b,a);0<=c?(g.fc(b,c),b=!0):b=!1;return b||g.gc(this.j,a)};
g.k.Ci=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.j.length;for(b=0;b<c;++b)a.push(this.j[b]);return a};l_a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Q("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Zi(c.value),c={serializedIncrementBatch:g.Ic(g.Ee(c,YYa))},g.bv("streamzIncremented",c,{mH:b})}};var U7;g.Wa(V7,g.I);g.k=V7.prototype;g.k.yX=function(){this.Xf=Math.min(3E5,2*this.Xf);this.u();this.j&&this.start()};
g.k.start=function(){var a=this.Xf+15E3*Math.random();g.lq(this.i,a);this.j=Date.now()+a};
g.k.stop=function(){this.i.stop();this.j=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Xf=5E3};g.Wa(W7,j_a);g.k=W7.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.gg=function(a){return this.u.gg(a)};
g.k.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.k.dispose=function(){this.Y||(this.Y=!0,g.af(this.u),o_a(this),g.af(this.j),this.j=null,this.ea=function(){return""})};
g.k.isDisposed=function(){return this.Y};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.W="";this.j.stop();this.C=a||null;this.B=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new N7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.i;e&&(e.Of=null);d.Of=this;this.i=d;X7(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.xk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.xk=f}e?(3!=e.getState()&&0==d_a(e)||e.getState(),this.i.connect(a,b,this.I,e.u,e.vt)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Mf(a,b);this.j.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):Y7(this)&&(X7(this),c_a(this.i,a))};
g.k.JK=function(){this.j.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)c_a(this.i,a[b])}this.Z("handlerOpened")};
g.k.HK=function(a){var b=2==a&&401==this.i.yk;4==a||b||this.j.start();this.Z("handlerError",a,b)};
g.k.WD=function(a,b){if(!this.j.isActive())this.Z("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.J.push(e)}this.xa.i.JI("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.i.IC("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.La.i.IC("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.sL=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.B&&(a.ui=""+this.B);0!=this.N&&(a.ui=""+this.N);this.C&&g.Mf(a,this.C);return a};
g.k.IK=function(a){"S"==a[0]?this.W=a[1]:"gracefulReconnect"==a[0]?(this.j.start(),a_a(this.i)):this.Z("handlerMessage",new m_a(a[0],a[1]))};
g.k.HB=function(a){(this.I.loungeIdToken=a)||this.j.stop();if(this.Ha&&this.i){var b=this.i.xk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.xk=b}};
g.k.wY=function(){this.j.isActive();0==d_a(this.i)&&this.connect(this.C,this.B)};Z7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
Z7.prototype.C=function(a){a(Error("request timed out"))};var v_a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Wa(g8,g.Rw);g8.prototype.Hh=function(){return this.screens};
g8.prototype.contains=function(a){return!!g7(this.screens,a)};
g8.prototype.get=function(a){return a?h7(this.screens,a):null};
g8.prototype.info=function(a){c8(this.I,a)};g.w(h8,g.Rw);g.k=h8.prototype;g.k.start=function(){!this.i&&isNaN(this.Ob)&&this.kO()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Ob)||(g.Ts(this.Ob),this.Ob=NaN)};
g.k.ra=function(){this.stop();g.Rw.prototype.ra.call(this)};
g.k.kO=function(){this.Ob=NaN;this.i=g.Xs($7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Ta)(this.FR,this),onError:(0,g.Ta)(this.ER,this),onTimeout:(0,g.Ta)(this.GR,this)})};
g.k.FR=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.I;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new b7(a),b)};
g.k.ER=function(a){this.i=null;a.status&&404==a.status?this.j>=P0a.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=P0a[this.j],this.Ob=g.Rs((0,g.Ta)(this.kO,this),a),this.j++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.k.GR=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var P0a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Wa(j8,g8);g.k=j8.prototype;g.k.start=function(){i8(this)&&this.Z("screenChange");!g.Hx("yt-remote-lounge-token-expiration")&&z_a(this);g.Ts(this.i);this.i=g.Rs((0,g.Ta)(this.start,this),1E4)};
g.k.add=function(a,b){i8(this);w_a(this,a);k8(this,!1);this.Z("screenChange");b(a);a.token||z_a(this)};
g.k.remove=function(a,b){var c=i8(this);y_a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.k.dC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.k.ra=function(){g.Ts(this.i);j8.qe.ra.call(this)};
g.k.xT=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.I,"Missed "+b+" lounge tokens.")};
g.k.wT=function(a){c8(this.I,"Requesting lounge tokens failed: "+a)};g.w(m8,g.Rw);g.k=m8.prototype;g.k.start=function(){var a=parseInt(g.Hx("yt-remote-fast-check-period")||"0",10);(this.B=g.Va()-144E5<a?0:a)?p8(this):(this.B=g.Va()+3E5,g.Gx("yt-remote-fast-check-period",this.B),this.bH())};
g.k.isEmpty=function(){return g.Cf(this.i)};
g.k.update=function(){l8("Updating availability on schedule.");var a=this.I(),b=g.qf(this.i,function(c,d){return c&&!!h7(a,d)},this);
o8(this,b)};
g.k.ra=function(){g.Ts(this.u);this.u=NaN;this.j&&(this.j.abort(),this.j=null);g.Rw.prototype.ra.call(this)};
g.k.bH=function(){g.Ts(this.u);this.u=NaN;this.j&&this.j.abort();var a=B_a(this);if(Y6(a)){var b=$7(this.C,"/pairing/get_screen_availability");this.j=a8(this.C,b,{lounge_token:g.xf(a).join(",")},(0,g.Ta)(this.eX,this,a),(0,g.Ta)(this.dX,this))}else o8(this,{}),p8(this)};
g.k.eX=function(a,b){this.j=null;var c=g.xf(B_a(this));if(g.uc(c,g.xf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.re("Changing Screen set during request."),this.bH()};
g.k.dX=function(a){this.re("Screen availability failed: "+a);this.j=null;p8(this)};
g.k.re=function(a){c8("OnlineScreenService",a)};g.Wa(q8,g8);g.k=q8.prototype;g.k.start=function(){this.j.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.k.add=function(a,b,c){this.j.add(a,b,c)};
g.k.remove=function(a,b,c){this.j.remove(a,b,c);this.i.update()};
g.k.dC=function(a,b,c,d){this.j.contains(a)?this.j.dC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.I,a),d(Error(a)))};
g.k.Hh=function(a){return a?this.screens:g.ic(this.screens,g.Po(this.u,function(b){return!this.contains(b)},this))};
g.k.tJ=function(){return g.Po(this.Hh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.uJ=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.af(l);e(r8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.af(l);f(m)});
l.start();return(0,g.Ta)(l.stop,l)};
g.k.HR=function(a,b,c,d){g.Xs($7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ta)(function(e,f){e=new b7(f.screen||{});if(!e.name||F_a(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);F_a(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Ta)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ta)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.af(this.j);g.af(this.i);q8.qe.ra.call(this)};
g.k.GT=function(){H_a(this);this.Z("screenChange");this.i.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Wa(t8,g.Rw);g.k=t8.prototype;g.k.getScreen=function(){return this.B};
g.k.Ag=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.k.info=function(a){c8(this.ya,a)};
g.k.vJ=function(){return null};
g.k.rH=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ta)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ta)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.rH("");t8.qe.ra.call(this)};g.w(w8,t8);g.k=w8.prototype;g.k.qH=function(a){if(this.j){if(this.j==a)return;v8(this,"Overriding cast session with new session object");Q_a(this);this.va=!1;this.W="unknown";this.j.removeUpdateListener(this.ea);this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.j=a;this.j.addUpdateListener(this.ea);this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);M_a(this,"getMdxSessionStatus")};
g.k.wt=function(a){this.info("launchWithParams no-op for Cast: "+g.nj(a))};
g.k.stop=function(){this.j?this.j.stop((0,g.Ta)(function(){this.Ag()},this),(0,g.Ta)(function(){this.Ag(Error("Failed to stop receiver app."))},this)):this.Ag(Error("Stopping cast device without session."))};
g.k.rH=function(){};
g.k.ra=function(){this.info("disposeInternal");Q_a(this);this.j&&(this.j.removeUpdateListener(this.ea),this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.j=null;t8.prototype.ra.call(this)};
g.k.TX=function(a,b){if(!this.isDisposed())if(b)if(b=Z6(b),g.Qa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.nj(b)),a){case "mdxSessionStatus":K_a(this,b);break;case "loungeToken":N_a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.k.GL=function(a,b,c,d){g.Ts(this.N);this.N=0;E_a(this.u,this.i.label,a,this.i.friendlyName,(0,g.Ta)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Rs((0,g.Ta)(this.GL,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.vJ=function(){return this.j};
g.k.IR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Ag())};g.w(z8,t8);g.k=z8.prototype;g.k.qH=function(a){this.j=a;this.j.addUpdateListener(this.Ha)};
g.k.wt=function(a){this.Ia=a;this.Y()};
g.k.stop=function(){X_a(this);this.j?this.j.stop((0,g.Ta)(this.Ag,this,null),(0,g.Ta)(this.Ag,this,"Failed to stop DIAL device.")):this.Ag()};
g.k.ra=function(){X_a(this);this.j&&this.j.removeUpdateListener(this.Ha);this.j=null;t8.prototype.ra.call(this)};
g.k.JR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.C(),this.C=function(){},this.Ag())};g.w(D8,t8);D8.prototype.stop=function(){this.Ag()};
D8.prototype.qH=function(){};
D8.prototype.wt=function(){g.Ts(this.j);this.j=NaN;var a=h7(this.u.Hh(),this.i.label);a?u8(this,a):this.Ag(Error("No such screen"))};
D8.prototype.ra=function(){g.Ts(this.j);this.j=NaN;t8.prototype.ra.call(this)};g.w(E8,g.Rw);g.k=E8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.W||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ta)(this.PW,this);c=new chrome.cast.ApiConfig(c,(0,g.Ta)(this.TN,this),e,d,a);c.customDialLaunchCallback=(0,g.Ta)(this.IV,this);
chrome.cast.initialize(c,(0,g.Ta)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.C),s_a(),this.j.subscribe("onlineScreenChange",(0,g.Ta)(this.wJ,this)),this.u=$_a(this),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(f){this.re("Failed to set initial custom receivers: "+g.nj(f))},this)),this.Z("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Ta)(function(f){this.re("Failed to initialize API: "+g.nj(f));
b(!1)},this))};
g.k.AY=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.i.i.friendlyName),H8(this,null)}if(a&&b){if(!this.i){c=h7(this.j.Hh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=Y_a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(d){this.re("Failed to set initial custom receivers: "+g.nj(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.j,a),!0)}this.i.rH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.k.BY=function(a){this.isDisposed()?this.re("Setting connection data on disposed cast v2"):this.i?this.i.wt(a):this.re("Setting connection data without a session")};
g.k.LR=function(){this.isDisposed()?this.re("Stopping session on disposed cast v2"):this.i?(this.i.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Ta)(this.TN,this),(0,g.Ta)(this.hX,this))};
g.k.ra=function(){this.j.unsubscribe("onlineScreenChange",(0,g.Ta)(this.wJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=p_a,b=g.La("yt.mdx.remote.debug.handlers_");g.gc(b||[],a);g.af(this.i);g.Rw.prototype.ra.call(this)};
g.k.re=function(a){c8("Controller",a)};
g.k.VN=function(a,b){this.i==a&&(b||H8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.k.MW=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.j,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.j,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.j,a,this.config_));break;default:this.re("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.re("Stopping receiver w/o session: "+a.friendlyName)}else this.re("onReceiverAction_ called without receiver.")};
g.k.IV=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.re("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.re("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return F8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.re('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.j,b,this.B,this.config_))}b=this.i;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=U_a(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Bs(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=V_a(b,c)):a=V_a(b,c)):a=C8(b);return a};
g.k.TN=function(a){var b=this;if(!this.isDisposed()&&!this.I){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.j,c,this.config_),!0);else{this.re("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=h7(this.j.Hh(),
d.label);e&&c7(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.af(this.i),this.i=new w8(this.j,c,this.config_),this.i.subscribe("sessionScreen",(0,g.Ta)(this.VN,this,this.i)),this.i.subscribe("sessionFailed",function(){return Z_a(b,b.i)}),this.i.wt(null));
this.i.qH(a)}}};
g.k.KR=function(){return this.i?this.i.vJ():null};
g.k.hX=function(a){this.isDisposed()||(this.re("Failed to estabilish a session: "+g.nj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.k.PW=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.Z("yt-remote-cast2-availability-change",G8(this))}};
g.k.wJ=function(){this.isDisposed()||(this.u=$_a(this),F8("Updating custom receivers: "+g.nj(this.u)),chrome.cast.setCustomReceivers(this.u,function(){},(0,g.Ta)(function(){this.re("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.BY;E8.prototype.setConnectedScreenStatus=E8.prototype.AY;E8.prototype.stopSession=E8.prototype.LR;E8.prototype.getCastSession=E8.prototype.KR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.k=S8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Yk=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.N=a.loadedTime,this.u=a.liveIngestionTime,this.j=
!isNaN(this.u))};
g.k.Gc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Wj=function(a){this.C=isNaN(a)?0:a};
g.k.getDuration=function(){return this.j?this.C+U8(this):this.C};
g.k.clone=function(){return new S8(Y8(this))};g.w($8,g.Rw);g.k=$8.prototype;g.k.getState=function(){return this.u};
g.k.play=function(){b9(this)?(this.i?this.i.play(null,g.Ma,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.play)};
g.k.pause=function(){b9(this)?(this.i?this.i.pause(null,g.Ma,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.pause)};
g.k.seekTo=function(a){if(b9(this)){if(this.i){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Gc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ma,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.Z("remotePlayerChange")}else c9(this,g.Ua(this.seekTo,a))};
g.k.stop=function(){if(b9(this)){this.i?this.i.stop(null,g.Ma,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.stop)};
g.k.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.j){if(c.volume!=a){var d=Math.round(a)/100;this.j.setReceiverVolumeLevel(d,(0,g.Ta)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Ta)(function(){this.re("failed to set receiver volume.")},this))}c.muted!=b&&this.j.setReceiverMuted(b,(0,g.Ta)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Ta)(function(){this.re("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ua(this.setVolume,a,b))};
g.k.xJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.nj(b.style),g.Mf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ua(this.xJ,a,b))};
g.k.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ua(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.nj(h));f9(this,"setPlaylist",m);d||d9(this,l)};
g.k.oB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ua(this.oB,a,b))};
g.k.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ua(this.nextVideo,a,b))};
g.k.ys=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.ys)};
g.k.bL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.bL)};
g.k.dispose=function(){if(3!=this.u){var a=this.u;this.u=3;this.Z("proxyStateChange",a,this.u)}g.Rw.prototype.dispose.call(this)};
g.k.ra=function(){l0a(this);this.B=null;this.C.clear();Z8(this,null);g.Rw.prototype.ra.call(this)};
g.k.sH=function(a){if((a!=this.u||2==a)&&3!=this.u&&0!=a){var b=this.u;this.u=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,0===b.i.length&&(b.i=b.j,b.i.reverse(),b.j=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.KW=function(a,b){this.Z(a,b)};
g.k.sV=function(a){if(!a)this.lx(null),Z8(this,null);else if(this.j.receiver.volume){a=this.j.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.k.lx=function(a){c8("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.N);if(this.i=a)this.i.addUpdateListener(this.N),m0a(this),this.Z("remotePlayerChange")};
g.k.rV=function(a){a?(m0a(this),this.Z("remotePlayerChange")):this.lx(null)};
g.k.MH=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.zV=function(){var a=i0a();a&&Z8(this,a)};
g.k.re=function(a){c8("CP",a)};g.w(h9,g.Rw);g.k=h9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.ya&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.wc.listId=c);this.wc.videoId=d;this.wc.index=l||0;this.wc.state=3;V8(this.wc,
n);this.B="UNSUPPORTED";c=this.ya?"setInitialState":"setPlaylist";i9("Connecting with "+c+" and params: "+g.nj(m));this.i.connect({method:c,params:g.nj(m)},a,rZa())}else i9("Connecting without params"),this.i.connect({},a,rZa());p0a(this)};
g.k.HB=function(a){this.i.HB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ka("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),j9(this,3));g.Rw.prototype.dispose.call(this)};
g.k.ra=function(){k9(this);m9(this);l9(this);g.Ts(this.J);this.J=NaN;g.Ts(this.N);this.N=NaN;this.u=null;g.Nt(this.W);this.W.length=0;this.i.dispose();g.Rw.prototype.ra.call(this);this.B=this.I=this.j=this.wc=this.i=null};
g.k.wV=function(){var a=this;i9("Channel opened");this.va&&(this.va=!1,l9(this),this.ea=g.Rs(function(){i9("Timing out waiting for a screen.");a.Hs(1)},15E3));
vZa(n_a(this.i),this.Ia)};
g.k.tV=function(){i9("Channel closed");isNaN(this.C)?m7(!0):m7();this.dispose()};
g.k.uV=function(a,b){m7();isNaN(this.ww())?(b&&"shortLived"==this.xa&&this.Z("browserChannelAuthError",a),i9("Channel error: "+a+" without reconnection"),this.dispose()):(this.va=!0,i9("Channel error: "+a+" with reconnection in "+this.ww()+" ms"),j9(this,2))};
g.k.lM=function(a){if(!this.j||0===this.j.length)return!1;for(var b=g.q(this.j),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.vV=function(a){a.params?i9("Received: action="+a.action+", params="+g.nj(a.params)):i9("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Z6(a.params.devices);this.j=g.zn(a,function(c){return new a7(c)});
a=!!g.Xb(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
s0a(this,a);a=this.lM("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.hc(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
s0a(this,!1);break;case "remoteConnected":var b=new a7(Z6(a.params.device));g.Xb(this.j,function(c){return c.equals(b)})||eZa(this.j,b);
break;case "remoteDisconnected":b=new a7(Z6(a.params.device));g.hc(this.j,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":u0a(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":w0a(this,a);break;case "onStateChange":v0a(this,a);break;case "onAdStateChange":x0a(this,a);break;case "onVolumeChanged":y0a(this,a);break;case "onSubtitlesTrackChanged":t0a(this,a);break;case "nowAutoplaying":z0a(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.Z("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":A0a(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:i9("Unrecognized action: "+a.action)}};
g.k.qT=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.ww())?Y7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Hs=function(a){i9("Disconnecting with "+a);g.Ka("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.Z("beforeDisconnect",a);1==a&&m7();o_a(this.i,a);this.dispose()};
g.k.oT=function(){var a=this.wc;this.u&&(a=this.wc.clone(),X8(a,this.u,a.index));return Y8(a)};
g.k.CY=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.wc.videoId&&(this.u=c.videoId,g.Ts(this.J),this.J=g.Rs(function(){if(b.u){var e=b.u;b.u=null;b.wc.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.wc.listId==c.listId&&this.wc.videoId==c.videoId&&this.wc.index==c.index||d.push("remoteQueueChange");this.wc.playerState==c.playerState&&this.wc.volume==c.volume&&this.wc.muted==c.muted&&W8(this.wc)==W8(c)&&g.nj(this.wc.trackData)==g.nj(c.trackData)||d.push("remotePlayerChange");this.wc.reset(a);g.wc(d,function(e){this.Z(e)},this)};
g.k.FL=function(){var a=this.i.I.id,b=g.Xb(this.j,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.ww=function(){var a=this.i;return a.j.isActive()?a.j.j-Date.now():NaN};
g.k.lT=function(){return this.B||"UNSUPPORTED"};
g.k.mT=function(){return this.I||""};
g.k.MR=function(){if(!isNaN(this.ww())){var a=this.i.j;g.mq(a.i);a.start()}};
g.k.zY=function(a,b){n9(this,a,b);r0a(this)};
g.k.yJ=function(){var a=g.gt("SID","")||"",b=g.gt("SAPISID","")||"",c=g.gt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ic(g.jb(a),2);b=g.Ic(g.jb(b),2);c=g.Ic(g.jb(c),2);return g.Ic(g.jb(a+","+b+","+c),2)};
h9.prototype.subscribe=h9.prototype.subscribe;h9.prototype.unsubscribeByKey=h9.prototype.gg;h9.prototype.getProxyState=h9.prototype.qT;h9.prototype.disconnect=h9.prototype.Hs;h9.prototype.getPlayerContextData=h9.prototype.oT;h9.prototype.setPlayerContextData=h9.prototype.CY;h9.prototype.getOtherConnectedRemoteId=h9.prototype.FL;h9.prototype.getReconnectTimeout=h9.prototype.ww;h9.prototype.getAutoplayMode=h9.prototype.lT;h9.prototype.getAutoplayVideoId=h9.prototype.mT;h9.prototype.reconnect=h9.prototype.MR;
h9.prototype.sendMessage=h9.prototype.zY;h9.prototype.getXsrfToken=h9.prototype.yJ;h9.prototype.isCapabilitySupportedOnConnectedDevices=h9.prototype.lM;g.w(o9,g8);g.k=o9.prototype;g.k.Hh=function(a){return this.We.$_gs(a)};
g.k.contains=function(a){return!!this.We.$_c(a)};
g.k.get=function(a){return this.We.$_g(a)};
g.k.start=function(){this.We.$_st()};
g.k.add=function(a,b,c){this.We.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.We.$_r(a,b,c)};
g.k.dC=function(a,b,c,d){this.We.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.i.length;a<b;++a)this.We.$_ubk(this.i[a]);this.i.length=0;this.We=null;g8.prototype.ra.call(this)};
g.k.NR=function(){this.Z("screenChange")};
g.k.qW=function(){this.Z("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.HR;q8.prototype.$_gsppc=q8.prototype.uJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.dC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Hh;q8.prototype.$_gos=q8.prototype.tJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.gg;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.w(I9,g.I);g.k=I9.prototype;g.k.ra=function(){g.I.prototype.ra.call(this);this.i.stop();this.u.stop();this.N.stop();var a=this.Vb;a.unsubscribe("proxyStateChange",this.RN,this);a.unsubscribe("remotePlayerChange",this.qx,this);a.unsubscribe("remoteQueueChange",this.aB,this);a.unsubscribe("previousNextChange",this.ON,this);a.unsubscribe("nowAutoplaying",this.IN,this);a.unsubscribe("autoplayDismissed",this.lN,this);this.Vb=this.j=null};
g.k.Fj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.Vb.u)if(J9(this)){var c=a;if(!a9(this.Vb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.Vb).Gc()?this.Vb.pause():this.Vb.play();break;case "control_play":this.Vb.play();break;case "control_pause":this.Vb.pause();break;case "control_seek":this.J.sJ(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.pV=function(a){this.N.BR(a)};
g.k.oZ=function(a){this.Fj("control_subtitles_set_track",g.Cf(a)?null:a)};
g.k.hP=function(){var a=this.G.getOption("captions","track");g.Cf(a)||K9(this,a)};
g.k.Rb=function(a){this.j.Rb(a,this.G.getVideoData().lengthSeconds)};
g.k.bW=function(){g.Cf(this.B)||L0a(this,this.B);this.C=!1};
g.k.RN=function(a,b){this.u.stop();2===b&&this.cP()};
g.k.qx=function(){if(J9(this)){this.i.stop();var a=a9(this.Vb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Bf=1;break;case 1082:case 1083:this.j.Bf=0;break;default:this.j.Bf=-1}switch(a.playerState){case 1081:case 1:this.Wb(new g.KI(8));this.bP();break;case 1085:case 3:this.Wb(new g.KI(9));break;case 1083:case 0:this.Wb(new g.KI(2));this.J.stop();this.Rb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Wb(new g.KI(4));break;case 2:this.Wb(new g.KI(4));this.Rb(W8(a));
break;case -1:this.Wb(new g.KI(64));break;case -1E3:this.Wb(new g.KI(128,{errorCode:"mdx.remoteerror",errorMessage:"\u0412\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f.",wE:2}))}a=a9(this.Vb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==
b.languageName&&a.kind==b.kind:1)||(this.B=a,L0a(this,a));a=a9(this.Vb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.W.isActive()||this.HP()}else K0a(this)};
g.k.ON=function(){this.G.Z("mdxpreviousnextchange")};
g.k.aB=function(){J9(this)||K0a(this)};
g.k.IN=function(a){isNaN(a)||this.G.Z("mdxnowautoplaying",a)};
g.k.lN=function(){this.G.Z("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J9(this)&&this.Vb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a9(this.Vb).playerState?L9(this,a):b&&this.Vb.seekTo(a)};
g.k.HP=function(){var a=this;if(J9(this)){var b=a9(this.Vb);this.events.vc(this.Y);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Y=this.events.S(this.G,"onVolumeChange",function(c){J0a(a,c)})}};
g.k.bP=function(){this.i.stop();if(!this.Vb.isDisposed()){var a=a9(this.Vb);a.Gc()&&this.Wb(new g.KI(8));this.Rb(W8(a));this.i.start()}};
g.k.cP=function(){this.u.stop();this.i.stop();var a=this.Vb.B.getReconnectTimeout();2==this.Vb.u&&!isNaN(a)&&this.u.start()};
g.k.Wb=function(a){this.u.stop();var b=this.I;if(!g.PI(b,a)){var c=g.V(a,2);c!==g.V(this.I,2)&&this.G.Yt(c);this.I=a;N0a(this.j,b,a)}};g.w(M9,g.W);M9.prototype.fd=function(){this.i.show()};
M9.prototype.Cb=function(){this.i.hide()};
M9.prototype.j=function(){$6("mdx-privacy-popup-cancel");this.Cb()};
M9.prototype.u=function(){$6("mdx-privacy-popup-confirm");this.Cb()};g.w(N9,g.W);N9.prototype.onStateChange=function(a){M0a(this,a.state)};g.w(O9,g.qP);O9.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.So=g.xc(a,this.i,this),g.rP(this,g.zn(a,this.i)),a=this.G.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Yh(a),this.enable(!0)):this.enable(!1)};
O9.prototype.i=function(a){return a.key};
O9.prototype.wj=function(a){return"cast-selector-receiver"===a?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":this.So[a].name};
O9.prototype.Hf=function(a){g.qP.prototype.Hf.call(this,a);this.G.setOption("remote","currentReceiver",this.So[a]);this.ob.Cb()};g.w(P9,g.pM);g.k=P9.prototype;
g.k.create=function(){var a=this.player.T(),b=g.WD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.L("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.L("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.L("enable_cast_short_lived_lounge_token")};E0a(b,a);this.subscriptions.push(g.fu("yt-remote-before-disconnect",this.oV,this));this.subscriptions.push(g.fu("yt-remote-connection-change",this.QW,this));this.subscriptions.push(g.fu("yt-remote-receiver-availability-change",this.QN,
this));this.subscriptions.push(g.fu("yt-remote-auto-connect",this.OW,this));this.subscriptions.push(g.fu("yt-remote-receiver-resumed",this.NW,this));this.subscriptions.push(g.fu("mdx-privacy-popup-confirm",this.fY,this));this.subscriptions.push(g.fu("mdx-privacy-popup-cancel",this.eY,this));this.QN()};
g.k.load=function(){this.player.cancelPlayback();g.pM.prototype.load.call(this);this.gi=new I9(this,this.player,this.Vb);var a=(a=I0a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Rb(a);N0a(this,this.Ed,this.Ed);this.player.xl(6)};
g.k.unload=function(){this.player.Z("mdxautoplaycanceled");this.En=this.jl;g.bf(this.gi,this.Vb);this.Vb=this.gi=null;g.pM.prototype.unload.call(this);this.player.xl(5);Q9(this)};
g.k.ra=function(){g.gu(this.subscriptions);g.pM.prototype.ra.call(this)};
g.k.ll=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.gi.Fj.apply(this.gi,[a].concat(g.v(b)))};
g.k.getAdState=function(){return this.Bf};
g.k.Yk=function(){return this.Vb?a9(this.Vb).Yk:!1};
g.k.hasNext=function(){return this.Vb?a9(this.Vb).hasNext:!1};
g.k.Rb=function(a,b){this.AM=a||0;this.player.Z("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.AM};
g.k.getProgressState=function(){var a=a9(this.Vb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.T().L("web_player_mdx_allow_seeking_change_killswitch")?this.player.kf():!a.isAdPlaying()&&this.player.kf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.j?a.u+U8(a):a.u,isAtLiveHead:1>=(a.j?a.i+U8(a):a.i)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.j?a.i+U8(a):a.i,seekableStart:0<
a.B?a.B+U8(a):a.B}};
g.k.nextVideo=function(){this.Vb&&this.Vb.nextVideo()};
g.k.oB=function(){this.Vb&&this.Vb.oB()};
g.k.oV=function(a){1===a&&(this.NG=this.Vb?a9(this.Vb):null)};
g.k.QW=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.En;this.loaded&&this.unload();this.Vb=a;this.NG=null;b.key!==this.jl.key&&(this.En=b,this.load())}else g.af(this.Vb),this.Vb=null,this.loaded&&(this.unload(),(a=this.NG)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.QN=function(){var a=[this.jl],b=a.concat,c=F0a();O8()&&g.Hx("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.So=b.call(a,c);a=A9()||this.jl;R9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.OW=function(){var a=A9();R9(this,a)};
g.k.NW=function(){this.En=A9()};
g.k.fY=function(){this.Ax=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.k.eY=function(){this.Ax=!1;Q9(this);R9(this,this.jl);this.En=this.jl;H9=!1;B9=null;this.player.playVideo()};
g.k.sf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.So;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.En:this.jl;case "quickCast":return 2===this.So.length&&"cast-selector-receiver"===this.So[1].key?(b&&Q8(),!0):!1}};
g.k.MH=function(){this.Vb.MH()};
g.k.Sh=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.oM("remote",P9);})(_yt_player);
