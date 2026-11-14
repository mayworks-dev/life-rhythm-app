'use strict';
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pako=e()}}(function(){return function r(o,s,f){function l(t,e){if(!s[t]){if(!o[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var a=s[t]={exports:{}};o[t][0].call(a.exports,function(e){return l(o[t][1][e]||e)},a,a.exports,r,o,s,f)}return s[t].exports}for(var d="function"==typeof require&&require,e=0;e<f.length;e++)l(f[e]);return l}({1:[function(e,t,i){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;i.assign=function(e){for(var t,i,n=Array.prototype.slice.call(arguments,1);n.length;){var a=n.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var r in a)t=a,i=r,Object.prototype.hasOwnProperty.call(t,i)&&(e[r]=a[r])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={arraySet:function(e,t,i,n,a){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+n),a);else for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){var t,i,n,a,r,o;for(t=n=0,i=e.length;t<i;t++)n+=e[t].length;for(o=new Uint8Array(n),t=a=0,i=e.length;t<i;t++)r=e[t],o.set(r,a),a+=r.length;return o}},r={arraySet:function(e,t,i,n,a){for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,r))},i.setTyped(n)},{}],2:[function(e,t,i){"use strict";var f=e("./common"),a=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch(e){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){r=!1}for(var l=new f.Buf8(256),n=0;n<256;n++)l[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function d(e,t){if(t<65534&&(e.subarray&&r||!e.subarray&&a))return String.fromCharCode.apply(null,f.shrinkBuf(e,t));for(var i="",n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i}l[254]=l[254]=1,i.string2buf=function(e){var t,i,n,a,r,o=e.length,s=0;for(a=0;a<o;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(n-56320),a++),s+=i<128?1:i<2048?2:i<65536?3:4;for(t=new f.Buf8(s),a=r=0;r<s;a++)55296==(64512&(i=e.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=e.charCodeAt(a+1)))&&(i=65536+(i-55296<<10)+(n-56320),a++),i<128?t[r++]=i:(i<2048?t[r++]=192|i>>>6:(i<65536?t[r++]=224|i>>>12:(t[r++]=240|i>>>18,t[r++]=128|i>>>12&63),t[r++]=128|i>>>6&63),t[r++]=128|63&i);return t},i.buf2binstring=function(e){return d(e,e.length)},i.binstring2buf=function(e){for(var t=new f.Buf8(e.length),i=0,n=t.length;i<n;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){var i,n,a,r,o=t||e.length,s=new Array(2*o);for(i=n=0;i<o;)if((a=e[i++])<128)s[n++]=a;else if(4<(r=l[a]))s[n++]=65533,i+=r-1;else{for(a&=2===r?31:3===r?15:7;1<r&&i<o;)a=a<<6|63&e[i++],r--;1<r?s[n++]=65533:a<65536?s[n++]=a:(a-=65536,s[n++]=55296|a>>10&1023,s[n++]=56320|1023&a)}return d(s,n)},i.utf8border=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;0<=i&&128==(192&e[i]);)i--;return i<0?t:0===i?t:i+l[e[i]]>t?i:t}},{"./common":1}],3:[function(e,t,i){"use strict";t.exports=function(e,t,i,n){for(var a=65535&e|0,r=e>>>16&65535|0,o=0;0!==i;){for(i-=o=2e3<i?2e3:i;r=r+(a=a+t[n++]|0)|0,--o;);a%=65521,r%=65521}return a|r<<16|0}},{}],4:[function(e,t,i){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,t,i){"use strict";var s=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}();t.exports=function(e,t,i,n){var a=s,r=n+i;e^=-1;for(var o=n;o<r;o++)e=e>>>8^a[255&(e^t[o])];return-1^e}},{}],6:[function(e,t,i){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],7:[function(e,t,i){"use strict";t.exports=function(e,t){var i,n,a,r,o,s,f,l,d,c,u,h,b,m,w,k,_,g,v,p,x,y,S,E,Z;i=e.state,n=e.next_in,E=e.input,a=n+(e.avail_in-5),r=e.next_out,Z=e.output,o=r-(t-e.avail_out),s=r+(e.avail_out-257),f=i.dmax,l=i.wsize,d=i.whave,c=i.wnext,u=i.window,h=i.hold,b=i.bits,m=i.lencode,w=i.distcode,k=(1<<i.lenbits)-1,_=(1<<i.distbits)-1;e:do{b<15&&(h+=E[n++]<<b,b+=8,h+=E[n++]<<b,b+=8),g=m[h&k];t:for(;;){if(h>>>=v=g>>>24,b-=v,0===(v=g>>>16&255))Z[r++]=65535&g;else{if(!(16&v)){if(0==(64&v)){g=m[(65535&g)+(h&(1<<v)-1)];continue t}if(32&v){i.mode=12;break e}e.msg="invalid literal/length code",i.mode=30;break e}p=65535&g,(v&=15)&&(b<v&&(h+=E[n++]<<b,b+=8),p+=h&(1<<v)-1,h>>>=v,b-=v),b<15&&(h+=E[n++]<<b,b+=8,h+=E[n++]<<b,b+=8),g=w[h&_];i:for(;;){if(h>>>=v=g>>>24,b-=v,!(16&(v=g>>>16&255))){if(0==(64&v)){g=w[(65535&g)+(h&(1<<v)-1)];continue i}e.msg="invalid distance code",i.mode=30;break e}if(x=65535&g,b<(v&=15)&&(h+=E[n++]<<b,(b+=8)<v&&(h+=E[n++]<<b,b+=8)),f<(x+=h&(1<<v)-1)){e.msg="invalid distance too far back",i.mode=30;break e}if(h>>>=v,b-=v,(v=r-o)<x){if(d<(v=x-v)&&i.sane){e.msg="invalid distance too far back",i.mode=30;break e}if(S=u,(y=0)===c){if(y+=l-v,v<p){for(p-=v;Z[r++]=u[y++],--v;);y=r-x,S=Z}}else if(c<v){if(y+=l+c-v,(v-=c)<p){for(p-=v;Z[r++]=u[y++],--v;);if(y=0,c<p){for(p-=v=c;Z[r++]=u[y++],--v;);y=r-x,S=Z}}}else if(y+=c-v,v<p){for(p-=v;Z[r++]=u[y++],--v;);y=r-x,S=Z}for(;2<p;)Z[r++]=S[y++],Z[r++]=S[y++],Z[r++]=S[y++],p-=3;p&&(Z[r++]=S[y++],1<p&&(Z[r++]=S[y++]))}else{for(y=r-x;Z[r++]=Z[y++],Z[r++]=Z[y++],Z[r++]=Z[y++],2<(p-=3););p&&(Z[r++]=Z[y++],1<p&&(Z[r++]=Z[y++]))}break}}break}}while(n<a&&r<s);n-=p=b>>3,h&=(1<<(b-=p<<3))-1,e.next_in=n,e.next_out=r,e.avail_in=n<a?a-n+5:5-(n-a),e.avail_out=r<s?s-r+257:257-(r-s),i.hold=h,i.bits=b}},{}],8:[function(e,t,i){"use strict";var z=e("../utils/common"),R=e("./adler32"),N=e("./crc32"),O=e("./inffast"),C=e("./inftrees"),I=1,D=2,T=0,U=-2,F=1,n=852,a=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function r(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new z.Buf16(320),this.work=new z.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function o(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=F,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new z.Buf32(n),t.distcode=t.distdyn=new z.Buf32(a),t.sane=1,t.back=-1,T):U}function s(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,o(e)):U}function f(e,t){var i,n;return e&&e.state?(n=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,s(e))):U}function l(e,t){var i,n;return e?(n=new r,(e.state=n).window=null,(i=f(e,t))!==T&&(e.state=null),i):U}var d,c,u=!0;function H(e){if(u){var t;for(d=new z.Buf32(512),c=new z.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(C(I,e.lens,0,288,d,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;C(D,e.lens,0,32,c,0,e.work,{bits:5}),u=!1}e.lencode=d,e.lenbits=9,e.distcode=c,e.distbits=5}function j(e,t,i,n){var a,r=e.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new z.Buf8(r.wsize)),n>=r.wsize?(z.arraySet(r.window,t,i-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(n<(a=r.wsize-r.wnext)&&(a=n),z.arraySet(r.window,t,i-n,a,r.wnext),(n-=a)?(z.arraySet(r.window,t,i-n,n,0),r.wnext=n,r.whave=r.wsize):(r.wnext+=a,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=a))),0}i.inflateReset=s,i.inflateReset2=f,i.inflateResetKeep=o,i.inflateInit=function(e){return l(e,15)},i.inflateInit2=l,i.inflate=function(e,t){var i,n,a,r,o,s,f,l,d,c,u,h,b,m,w,k,_,g,v,p,x,y,S,E,Z=0,B=new z.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(i=e.state).mode&&(i.mode=13),o=e.next_out,a=e.output,f=e.avail_out,r=e.next_in,n=e.input,s=e.avail_in,l=i.hold,d=i.bits,c=s,u=f,y=T;e:for(;;)switch(i.mode){case F:if(0===i.wrap){i.mode=13;break}for(;d<16;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(2&i.wrap&&35615===l){B[i.check=0]=255&l,B[1]=l>>>8&255,i.check=N(i.check,B,2,0),d=l=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&l)<<8)+(l>>8))%31){e.msg="incorrect header check",i.mode=30;break}if(8!=(15&l)){e.msg="unknown compression method",i.mode=30;break}if(d-=4,x=8+(15&(l>>>=4)),0===i.wbits)i.wbits=x;else if(x>i.wbits){e.msg="invalid window size",i.mode=30;break}i.dmax=1<<x,e.adler=i.check=1,i.mode=512&l?10:12,d=l=0;break;case 2:for(;d<16;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(i.flags=l,8!=(255&i.flags)){e.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=l>>8&1),512&i.flags&&(B[0]=255&l,B[1]=l>>>8&255,i.check=N(i.check,B,2,0)),d=l=0,i.mode=3;case 3:for(;d<32;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}i.head&&(i.head.time=l),512&i.flags&&(B[0]=255&l,B[1]=l>>>8&255,B[2]=l>>>16&255,B[3]=l>>>24&255,i.check=N(i.check,B,4,0)),d=l=0,i.mode=4;case 4:for(;d<16;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}i.head&&(i.head.xflags=255&l,i.head.os=l>>8),512&i.flags&&(B[0]=255&l,B[1]=l>>>8&255,i.check=N(i.check,B,2,0)),d=l=0,i.mode=5;case 5:if(1024&i.flags){for(;d<16;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}i.length=l,i.head&&(i.head.extra_len=l),512&i.flags&&(B[0]=255&l,B[1]=l>>>8&255,i.check=N(i.check,B,2,0)),d=l=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&(s<(h=i.length)&&(h=s),h&&(i.head&&(x=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),z.arraySet(i.head.extra,n,r,h,x)),512&i.flags&&(i.check=N(i.check,n,h,r)),s-=h,r+=h,i.length-=h),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===s)break e;for(h=0;x=n[r+h++],i.head&&x&&i.length<65536&&(i.head.name+=String.fromCharCode(x)),x&&h<s;);if(512&i.flags&&(i.check=N(i.check,n,h,r)),s-=h,r+=h,x)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===s)break e;for(h=0;x=n[r+h++],i.head&&x&&i.length<65536&&(i.head.comment+=String.fromCharCode(x)),x&&h<s;);if(512&i.flags&&(i.check=N(i.check,n,h,r)),s-=h,r+=h,x)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;d<16;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(l!==(65535&i.check)){e.msg="header crc mismatch",i.mode=30;break}d=l=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=12;break;case 10:for(;d<32;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}e.adler=i.check=L(l),d=l=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=o,e.avail_out=f,e.next_in=r,e.avail_in=s,i.hold=l,i.bits=d,2;e.adler=i.check=1,i.mode=12;case 12:if(5===t||6===t)break e;case 13:if(i.last){l>>>=7&d,d-=7&d,i.mode=27;break}for(;d<3;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}switch(i.last=1&l,d-=1,3&(l>>>=1)){case 0:i.mode=14;break;case 1:if(H(i),i.mode=20,6!==t)break;l>>>=2,d-=2;break e;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=30}l>>>=2,d-=2;break;case 14:for(l>>>=7&d,d-=7&d;d<32;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if((65535&l)!=(l>>>16^65535)){e.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&l,d=l=0,i.mode=15,6===t)break e;case 15:i.mode=16;case 16:if(h=i.length){if(s<h&&(h=s),f<h&&(h=f),0===h)break e;z.arraySet(a,n,r,h,o),s-=h,r+=h,f-=h,o+=h,i.length-=h;break}i.mode=12;break;case 17:for(;d<14;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(i.nlen=257+(31&l),l>>>=5,d-=5,i.ndist=1+(31&l),l>>>=5,d-=5,i.ncode=4+(15&l),l>>>=4,d-=4,286<i.nlen||30<i.ndist){e.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;d<3;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}i.lens[A[i.have++]]=7&l,l>>>=3,d-=3}for(;i.have<19;)i.lens[A[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,S={bits:i.lenbits},y=C(0,i.lens,0,19,i.lencode,0,i.work,S),i.lenbits=S.bits,y){e.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;k=(Z=i.lencode[l&(1<<i.lenbits)-1])>>>16&255,_=65535&Z,!((w=Z>>>24)<=d);){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(_<16)l>>>=w,d-=w,i.lens[i.have++]=_;else{if(16===_){for(E=w+2;d<E;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(l>>>=w,d-=w,0===i.have){e.msg="invalid bit length repeat",i.mode=30;break}x=i.lens[i.have-1],h=3+(3&l),l>>>=2,d-=2}else if(17===_){for(E=w+3;d<E;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}d-=w,x=0,h=3+(7&(l>>>=w)),l>>>=3,d-=3}else{for(E=w+7;d<E;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}d-=w,x=0,h=11+(127&(l>>>=w)),l>>>=7,d-=7}if(i.have+h>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=30;break}for(;h--;)i.lens[i.have++]=x}}if(30===i.mode)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,S={bits:i.lenbits},y=C(I,i.lens,0,i.nlen,i.lencode,0,i.work,S),i.lenbits=S.bits,y){e.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,S={bits:i.distbits},y=C(D,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,S),i.distbits=S.bits,y){e.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===t)break e;case 20:i.mode=21;case 21:if(6<=s&&258<=f){e.next_out=o,e.avail_out=f,e.next_in=r,e.avail_in=s,i.hold=l,i.bits=d,O(e,u),o=e.next_out,a=e.output,f=e.avail_out,r=e.next_in,n=e.input,s=e.avail_in,l=i.hold,d=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;k=(Z=i.lencode[l&(1<<i.lenbits)-1])>>>16&255,_=65535&Z,!((w=Z>>>24)<=d);){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(k&&0==(240&k)){for(g=w,v=k,p=_;k=(Z=i.lencode[p+((l&(1<<g+v)-1)>>g)])>>>16&255,_=65535&Z,!(g+(w=Z>>>24)<=d);){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}l>>>=g,d-=g,i.back+=g}if(l>>>=w,d-=w,i.back+=w,i.length=_,0===k){i.mode=26;break}if(32&k){i.back=-1,i.mode=12;break}if(64&k){e.msg="invalid literal/length code",i.mode=30;break}i.extra=15&k,i.mode=22;case 22:if(i.extra){for(E=i.extra;d<E;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}i.length+=l&(1<<i.extra)-1,l>>>=i.extra,d-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;k=(Z=i.distcode[l&(1<<i.distbits)-1])>>>16&255,_=65535&Z,!((w=Z>>>24)<=d);){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(0==(240&k)){for(g=w,v=k,p=_;k=(Z=i.distcode[p+((l&(1<<g+v)-1)>>g)])>>>16&255,_=65535&Z,!(g+(w=Z>>>24)<=d);){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}l>>>=g,d-=g,i.back+=g}if(l>>>=w,d-=w,i.back+=w,64&k){e.msg="invalid distance code",i.mode=30;break}i.offset=_,i.extra=15&k,i.mode=24;case 24:if(i.extra){for(E=i.extra;d<E;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}i.offset+=l&(1<<i.extra)-1,l>>>=i.extra,d-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===f)break e;if(h=u-f,i.offset>h){if((h=i.offset-h)>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=30;break}h>i.wnext?(h-=i.wnext,b=i.wsize-h):b=i.wnext-h,h>i.length&&(h=i.length),m=i.window}else m=a,b=o-i.offset,h=i.length;for(f<h&&(h=f),f-=h,i.length-=h;a[o++]=m[b++],--h;);0===i.length&&(i.mode=21);break;case 26:if(0===f)break e;a[o++]=i.length,f--,i.mode=21;break;case 27:if(i.wrap){for(;d<32;){if(0===s)break e;s--,l|=n[r++]<<d,d+=8}if(u-=f,e.total_out+=u,i.total+=u,u&&(e.adler=i.check=i.flags?N(i.check,a,u,o-u):R(i.check,a,u,o-u)),u=f,(i.flags?l:L(l))!==i.check){e.msg="incorrect data check",i.mode=30;break}d=l=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;d<32;){if(0===s)break e;s--,l+=n[r++]<<d,d+=8}if(l!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=30;break}d=l=0}i.mode=29;case 29:y=1;break e;case 30:y=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=o,e.avail_out=f,e.next_in=r,e.avail_in=s,i.hold=l,i.bits=d,(i.wsize||u!==e.avail_out&&i.mode<30&&(i.mode<27||4!==t))&&j(e,e.output,e.next_out,u-e.avail_out)?(i.mode=31,-4):(c-=e.avail_in,u-=e.avail_out,e.total_in+=c,e.total_out+=u,i.total+=u,i.wrap&&u&&(e.adler=i.check=i.flags?N(i.check,a,u,e.next_out-u):R(i.check,a,u,e.next_out-u)),e.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),(0===c&&0===u||4===t)&&y===T&&(y=-5),y)},i.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,T},i.inflateGetHeader=function(e,t){var i;return e&&e.state?0==(2&(i=e.state).wrap)?U:((i.head=t).done=!1,T):U},i.inflateSetDictionary=function(e,t){var i,n=t.length;return e&&e.state?0!==(i=e.state).wrap&&11!==i.mode?U:11===i.mode&&R(1,t,n,0)!==i.check?-3:j(e,t,n,n)?(i.mode=31,-4):(i.havedict=1,T):U},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,t,i){"use strict";var I=e("../utils/common"),D=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],T=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],F=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,n,a,r,o,s){var f,l,d,c,u,h,b,m,w,k=s.bits,_=0,g=0,v=0,p=0,x=0,y=0,S=0,E=0,Z=0,B=0,A=null,z=0,R=new I.Buf16(16),N=new I.Buf16(16),O=null,C=0;for(_=0;_<=15;_++)R[_]=0;for(g=0;g<n;g++)R[t[i+g]]++;for(x=k,p=15;1<=p&&0===R[p];p--);if(p<x&&(x=p),0===p)return a[r++]=20971520,a[r++]=20971520,s.bits=1,0;for(v=1;v<p&&0===R[v];v++);for(x<v&&(x=v),_=E=1;_<=15;_++)if(E<<=1,(E-=R[_])<0)return-1;if(0<E&&(0===e||1!==p))return-1;for(N[1]=0,_=1;_<15;_++)N[_+1]=N[_]+R[_];for(g=0;g<n;g++)0!==t[i+g]&&(o[N[t[i+g]]++]=g);if(0===e?(A=O=o,h=19):1===e?(A=D,z-=257,O=T,C-=257,h=256):(A=U,O=F,h=-1),_=v,u=r,S=g=B=0,d=-1,c=(Z=1<<(y=x))-1,1===e&&852<Z||2===e&&592<Z)return 1;for(;;){for(b=_-S,o[g]<h?(m=0,w=o[g]):o[g]>h?(m=O[C+o[g]],w=A[z+o[g]]):(m=96,w=0),f=1<<_-S,v=l=1<<y;a[u+(B>>S)+(l-=f)]=b<<24|m<<16|w|0,0!==l;);for(f=1<<_-1;B&f;)f>>=1;if(0!==f?(B&=f-1,B+=f):B=0,g++,0==--R[_]){if(_===p)break;_=t[i+o[g]]}if(x<_&&(B&c)!==d){for(0===S&&(S=x),u+=v,E=1<<(y=_-S);y+S<p&&!((E-=R[y+S])<=0);)y++,E<<=1;if(Z+=1<<y,1===e&&852<Z||2===e&&592<Z)return 1;a[d=B&c]=x<<24|y<<16|u-r|0}}return 0!==B&&(a[u+B]=_-S<<24|64<<16|0),s.bits=x,0}},{"../utils/common":1}],10:[function(e,t,i){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,t,i){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/lib/inflate.js":[function(e,t,i){"use strict";var c=e("./zlib/inflate"),u=e("./utils/common"),h=e("./utils/strings"),b=e("./zlib/constants"),n=e("./zlib/messages"),a=e("./zlib/zstream"),r=e("./zlib/gzheader"),m=Object.prototype.toString;function o(e){if(!(this instanceof o))return new o(e);this.options=u.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new a,this.strm.avail_out=0;var i=c.inflateInit2(this.strm,t.windowBits);if(i!==b.Z_OK)throw new Error(n[i]);if(this.header=new r,c.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=h.string2buf(t.dictionary):"[object ArrayBuffer]"===m.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(i=c.inflateSetDictionary(this.strm,t.dictionary))!==b.Z_OK))throw new Error(n[i])}function s(e,t){var i=new o(t);if(i.push(e,!0),i.err)throw i.msg||n[i.err];return i.result}o.prototype.push=function(e,t){var i,n,a,r,o,s=this.strm,f=this.options.chunkSize,l=this.options.dictionary,d=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?b.Z_FINISH:b.Z_NO_FLUSH,"string"==typeof e?s.input=h.binstring2buf(e):"[object ArrayBuffer]"===m.call(e)?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new u.Buf8(f),s.next_out=0,s.avail_out=f),(i=c.inflate(s,b.Z_NO_FLUSH))===b.Z_NEED_DICT&&l&&(i=c.inflateSetDictionary(this.strm,l)),i===b.Z_BUF_ERROR&&!0===d&&(i=b.Z_OK,d=!1),i!==b.Z_STREAM_END&&i!==b.Z_OK)return this.onEnd(i),!(this.ended=!0);s.next_out&&(0!==s.avail_out&&i!==b.Z_STREAM_END&&(0!==s.avail_in||n!==b.Z_FINISH&&n!==b.Z_SYNC_FLUSH)||("string"===this.options.to?(a=h.utf8border(s.output,s.next_out),r=s.next_out-a,o=h.buf2string(s.output,a),s.next_out=r,s.avail_out=f-r,r&&u.arraySet(s.output,s.output,a,r,0),this.onData(o)):this.onData(u.shrinkBuf(s.output,s.next_out)))),0===s.avail_in&&0===s.avail_out&&(d=!0)}while((0<s.avail_in||0===s.avail_out)&&i!==b.Z_STREAM_END);return i===b.Z_STREAM_END&&(n=b.Z_FINISH),n===b.Z_FINISH?(i=c.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===b.Z_OK):n!==b.Z_SYNC_FLUSH||(this.onEnd(b.Z_OK),!(s.avail_out=0))},o.prototype.onData=function(e){this.chunks.push(e)},o.prototype.onEnd=function(e){e===b.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=u.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=o,i.inflate=s,i.inflateRaw=function(e,t){return(t=t||{}).raw=!0,s(e,t)},i.ungzip=s},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")});

function buildControls(ui){
    const {panel,button,select,toggle,play,practice,has,zone,state,focus} = ui;
    const action = (label,name) => {
        if(has(name)) button(panel,label,()=>play(name));
    };
    const pair = (label,open,close=null,key=open) => {
        if(has(open)) toggle(panel,label+' 開く',label+' 閉じる',open,close,key);
    };
    const levels = [['上段','3'],['中段','2'],['下段','1']];
    const staffLabels = [['chair','椅子を引く','椅子を戻す'],['top','上段 開く','上段 閉じる'],
        ['middle','中段 開く','中段 閉じる'],['bottom','下段 開く','下段 閉じる'],
        ['lift','椅子を上げる','椅子を下げる'],['spin','椅子を回す',null],['doors','棚を開く','棚を閉じる'],
        ['liner','袋を取り外す','袋を戻す'],['Bypass_Tray','手差しトレー 開く','手差しトレー 閉じる'],
        ['ADF_Scanner_Lid','スキャナーカバー 開く','スキャナーカバー 閉じる'],['Print_Demo','印刷する',null]];
    if(/^[ABCD]$/.test(zone)){
        select(panel,'教室の操作',[
            ['doors','廊下側'],['windows','窓・カーテン'],['seats','生徒席'],['teacher','教卓・収納']
        ],state.mode||'doors',v=>state.mode=v);
        if(state.mode==='windows'){
            select(panel,'窓',[[0,'窓 1'],[1,'窓 2'],[2,'窓 3'],[3,'窓 4'],[4,'全ての窓']],
                state.window||0,v=>state.window=Number(v));
            const n=String((state.window||0)+1).padStart(2,'0');
            pair('窓',state.window===4?'ExteriorV3_All_Four_Open_RightOnly':'ExteriorV3_Window_'+n+'_Open_RightOnly');
            const key=state.window===4?'Curtains_All4_Both_Close':'Curtain_Window_'+n+'_Both_Close';
            toggle(panel,'カーテン 閉じる','カーテン 開く',key,null,key);
        }else if(state.mode==='seats'){
            const seats=Array.from({length:30},(_,i)=>[i+1,'座席 '+(i+1)]);
            select(panel,'操作する座席',seats,state.seat||1,v=>state.seat=Number(v));
            const n=String(state.seat||1).padStart(2,'0');
            action('椅子を引く・戻す','Seat_'+n+'_Chair_Pull_Return');
        }else if(state.mode==='teacher'){
            for(const [label,num] of levels) pair(label,'Teacher_Desk_Drawer_'+num+'_Open','Teacher_Desk_Drawer_'+num+'_Close');
            toggle(panel,'椅子を引く','椅子を戻す','Teacher_Pull_Chair_40cm','Teacher_Stow_Chair_40cm','teacher-chair');
            toggle(panel,'椅子を上げる','椅子を下げる','Teacher_Lift_41_to_52cm','Teacher_Lower_52_to_41cm','teacher-lift');
            action('椅子を回す','Teacher_Seat_Swivel_360');
            pair('掃除用具入れ','CleanLocker_Door_Open','CleanLocker_Door_Close');
        }else{
            pair('前の引き戸','CorridorR2_FrontDoorRearLeaf_Open');
            pair('後ろの引き戸','CorridorR2_RearDoorFrontLeaf_Open');
            pair('廊下窓 前','CorridorR2_FrontWindowRightSash_Open');
            pair('廊下窓 後','CorridorR2_RearWindowRightSash_Open');
        }
    }else if(zone==='Lobby'){
        pair('玄関 左扉','Entrance_Left_Open','Entrance_Left_Close');
        pair('玄関 右扉','Entrance_Right_Open','Entrance_Right_Close');
        button(panel,'玄関前',()=>focus('outside'));
        button(panel,'下駄箱側',()=>focus('inside'));
    }else if(zone==='Reception'){
        select(panel,'受付の操作',[
            ['room','部屋'],['log','来客記入簿'],['cabinet','書類棚']
        ],state.mode||'room',v=>state.mode=v);
        if(state.mode==='log'){
            button(panel,'記入簿に寄る',()=>focus('log'));
            toggle(panel,'ペンを持つ','ペンを戻す','Lift pen','Set pen down','pen');
            toggle(panel,'ページをめくる','ページを戻す','Turn page','Return page','page');
        }else if(state.mode==='cabinet'){
            select(panel,'書類棚',Array.from({length:4},(_,i)=>[i+1,'棚 '+(i+1)]),
                state.cabinet||1,v=>state.cabinet=Number(v));
            pair('書類棚','Open double doors '+(state.cabinet||1),'Close double doors '+(state.cabinet||1));
        }else{
            toggle(panel,'職員用ドア 開く','職員用ドア 閉じる','Doors_Open_Hold_Close',null,'reception-door',[0,.85]);
            toggle(panel,'椅子を引く','椅子を戻す','Reception_Pull_Chair_16cm','Reception_Stow_Chair_16cm','chair');
        }
    }else if(zone==='Infirmary'){
        select(panel,'保健室の操作',[
            ['room','部屋'],['beds','ベッド'],['desk','机・椅子'],['cabinet','備品棚'],
            ['wash','手洗い'],['trolley','処置ワゴン'],['partition','間仕切り棚'],['scale','身長・体重計']
        ],state.mode||'room',v=>state.mode=v);
        if(state.mode==='beds'){
            select(panel,'ベッド',[[1,'ベッド1'],[2,'ベッド2'],[3,'ベッド3']],state.bed||1,v=>state.bed=Number(v));
            const n=state.bed||1;
            for(const [to,label] of [['Open','全開'],['L','L字止め'],['Closed','全閉']]){
                const from=state['bed'+n]||'Open';
                button(panel,label,()=>{
                    if(from!==to && play('Bed_'+n+'_'+from+'_to_'+to,null,'bed'+n)) {
                        state['bed'+n]=to;
                        ui.refresh();
                    }
                },from===to);
            }
        }else if(state.mode==='desk'){
            for(const [label,num] of levels) pair(label,'Drawer_'+num+'_Open','Drawer_'+num+'_Close');
            toggle(panel,'椅子を引く','椅子を戻す','Pull_Chair_49cm','Stow_Chair_49cm','chair');
            toggle(panel,'椅子を上げる','椅子を下げる','Lift_41_to_52cm','Lower_52_to_41cm','lift');
            action('椅子を回す','Seat_Swivel_360');
        }else if(state.mode==='cabinet'){
            select(panel,'備品棚',Array.from({length:5},(_,i)=>[i+1,'棚 '+(i+1)]),
                state.cabinet||1,v=>state.cabinet=Number(v));
            for(const [part,label] of [['Upper_Left','上段左'],['Upper_Right','上段右'],['Lower_Left','下段左'],['Lower_Right','下段右']]){
                const key='Cabinet_'+(state.cabinet||1)+'_'+part;
                pair(label,key+'_Open',key+'_Close');
            }
        }else if(state.mode==='wash'){
            button(panel,'流し台に寄る',()=>focus('wash'));
            action('水を流す','水栓 開閉・流水');
        }else if(state.mode==='trolley'){
            pair('引き出し','Drawer_Open','Drawer_Close');
            toggle(panel,'ブレーキをかける','ブレーキを外す','Brakes_Lock','Brakes_Release','brakes');
        }else if(state.mode==='partition'){
            pair('左扉','Door_Left_Open','Door_Left_Close');
            pair('右扉','Door_Right_Open','Door_Right_Close');
        }else if(state.mode==='scale'){
            toggle(panel,'測定板を下ろす','測定板を上げる','Headplate_Lower','Headplate_Raise','head');
        }else pair('引き戸','Door_Open','Door_Close');
    }else if(zone==='Staff'){
        select(panel,'職員室の操作',[
            ['room','部屋'],['equipment','追加設備'],['desk','机・椅子'],
            ['storage','書類棚'],['bin','ゴミ箱']
        ],state.mode||'room',v=>state.mode=v);
        if(!state.mode || state.mode==='room'){
            pair('引き戸','Door_Open','Door_Close');
        }else{
            const items=ui.staff.choices[state.mode];
            const id=state[state.mode]||items[0].id;
            select(panel,'設備を選ぶ',items.map(i=>[i.id,i.label]),id,v=>{
                state[state.mode]=v;
                focus(items.find(x=>x.id===v));
            });
            const item=items.find(x=>x.id===id);
            button(panel,'寄る',()=>focus(item));
            for(const [k,clips] of Object.entries(ui.staff.actions[id])){
                const known=staffLabels.find(x=>x[0]===k);
                const m=k.match(/^(Drawer|Cassette)_0(\d)$/);
                const label=m?(m[1]==='Drawer'?'引き出し':'給紙')+m[2]:k;
                if(clips.length===1) action(known?.[1]||label,clips[0]);
                else toggle(panel,known?.[1]||label+' 開く',known?.[2]||label+' 閉じる',
                            clips[0],clips[1],id+':'+k);
            }
        }
    }else button(panel,'部屋を選ぶ',()=>ui.showTop());
    if(zone!=='Campus' && !zone.endsWith('Stair')) button(panel,'初期状態',()=>practice());
}

async function openCampus(){
    const canvas=document.querySelector('#view'), notice=document.querySelector('#notice');
    const gl=canvas.getContext('webgl',{alpha:false,antialias:true,powerPreference:'high-performance'});
    if(!gl)throw Error('WebGL unavailable');
    const model=window.schoolCampusData;
    delete window.schoolCampusData;
    const payload=document.querySelector('#campus-data');
    const data=model||JSON.parse(payload.textContent);
    payload?.remove();
    const derivatives=gl.getExtension('OES_standard_derivatives');
    const anisotropic=gl.getExtension('EXT_texture_filter_anisotropic');

    const mainVertex = `
attribute vec3 p,n,tint;
attribute vec2 tex;
uniform mat4 world;
uniform mat3 worldNormal;
uniform vec3 right,up,eye,target;
uniform vec2 scale;
uniform float perspective, distance, depthScale;
varying vec3 worldPosition,normal,vertexTint;
varying vec2 uv;
void main(){
    worldPosition=(world*vec4(p,1.)).xyz;
    normal=worldNormal*n;
    vertexTint=tint;
    uv=tex;
    vec3 q=worldPosition-target;
    vec2 screen=vec2(dot(q,right),dot(q,up))*scale;
    float along=dot(q,eye);
    if(perspective>.5){
        const float near=.045,far=145.;
        float d=distance-along;
        gl_Position=vec4(screen,((far+near)*d-2.*near*far)/(far-near),d);
    }else{
        gl_Position=vec4(screen,-along*depthScale,1.);
    }
}`;

const mainFragment=(derivatives?'#extension GL_OES_standard_derivatives : enable\n#define NORMAL_MAPS\n':'')+`
precision highp float;
uniform sampler2D baseMap,surfaceMap,normalMap,emissionMap,shadowMap;
uniform vec4 tintColor,baseUv,surfaceUv,normalUv,emissionUv;
uniform vec4 textureAngles;
uniform vec2 coat,shadowScale;
uniform vec3 emissive,key,lightRight,lightUp,lightCenter,eye,cameraOrigin;
uniform float metal,roughness,normalStrength,aoStrength,glass,sheen,mirror,alphaCut,blendMode,useEmission,
              useShadow,shadowTexel,perspective,anisotropy;
varying vec3 worldPosition,normal,vertexTint;
varying vec2 uv;

vec3 displayColor(vec3 value){
    vec3 x=max(vec3(0.),value);
    return pow(clamp(x/(1.+x*.23),0.,1.),vec3(.454545));
}
vec2 locate(vec2 p,vec4 t,float rotation){
    float c=cos(rotation),s=sin(rotation);
    return mat2(c,s,-s,c)*(p*t.xy)+t.zw;
}
float sampleDepth(vec2 st){
    vec2 c=texture2D(shadowMap,st).rg;
    return c.x+c.y/255.;
}
float visibility(vec3 g){
    if(useShadow<.5)return 1.;
    vec3 q=worldPosition-lightCenter;
    vec2 st=vec2(dot(q,lightRight),dot(q,lightUp))*shadowScale.x+.5;
    if(st.x<.006||st.x>.994||st.y<.006||st.y>.994)return 1.;
    float z=.5-dot(q,key)*shadowScale.y;
    float bias=(.042+.043*(1.-max(0.,dot(g,key))))*shadowScale.y;
    float spread=shadowTexel*(1.2+2.9*clamp((z-sampleDepth(st))*55.,0.,1.));
    float total=0.;
    for(int x=-1;x<=1;x++){
        for(int y=-1;y<=1;y++){
            vec2 p=st+vec2(float(x),float(y))*spread;
            total+=smoothstep(-.00013,.00018,sampleDepth(p)-z+bias);
        }
    }
    return total/9.;
}
vec3 bump(vec3 n,vec2 st){
    #ifdef NORMAL_MAPS
    if(normalStrength>.001){
        vec3 dx=dFdx(worldPosition),dy=dFdy(worldPosition);
        vec2 u=dFdx(st),v=dFdy(st);
        vec3 t=cross(dy,n)*u.x+cross(n,dx)*v.x;
        vec3 b=cross(dy,n)*u.y+cross(n,dx)*v.y;
        float inv=inversesqrt(max(max(dot(t,t),dot(b,b)),1e-12));
        vec3 sample=texture2D(normalMap,st).rgb*2.-1.;
        return normalize(t*(inv*normalStrength*sample.x)+b*(inv*normalStrength*sample.y)+n*sample.z);
    }
    #endif
    return n;
}
vec3 F(vec3 f0,float a){return f0+(1.-f0)*pow(1.-clamp(a,0.,1.),5.);}
vec3 studio(vec3 r,float blur){
    float sky=smoothstep(-.42,.71,r.y);
    float lawn=1.-smoothstep(-.92,-.16,r.y);
    float window=exp(-pow(abs(r.y-.42)/(.11+.25*blur),2.))*smoothstep(-.49,-.06,r.x);
    float fill=exp(-pow(abs(r.y-.78)/(.21+.27*blur),2.))*smoothstep(.07,.67,r.z);
    return mix(vec3(.181,.197,.217),vec3(.49,.565,.65),sky)+lawn*vec3(.12,.105,.081)
         +window*vec3(.62,.70,.76)+fill*vec3(.56,.53,.476);
}
void main(){
    vec3 geometric=normalize(gl_FrontFacing?normal:-normal);
    vec3 v=perspective>.5?normalize(cameraOrigin-worldPosition):eye;
    vec2 st=locate(uv,baseUv,textureAngles.x);
    vec4 source=texture2D(baseMap,st);
    vec4 orm=texture2D(surfaceMap,locate(uv,surfaceUv,textureAngles.y));
    vec3 base=tintColor.rgb*max(vertexTint,vec3(0.))*pow(source.rgb,vec3(2.2));
    float a=source.a*tintColor.a;
    if(alphaCut>0.&&a<alphaCut)discard;
    float r=clamp(roughness*orm.g,.077,.985);
    vec3 n=bump(geometric,locate(uv,normalUv,textureAngles.z));
    float nv=max(.024,dot(n,v));
    vec3 reflected=reflect(-v,n);
    vec3 environment=studio(reflected,r);
    if(glass>.5){
        float angle=pow(1.-nv,3.2);
        float bright=smoothstep(.53,1.10,max(environment.r,max(environment.g,environment.b)));
        vec3 neutral=mix(vec3(.48,.63,.68),vec3(.91,.957,.984),.32+.64*bright);
        if(glass>2.5){
            gl_FragColor=vec4(mix(neutral,vec3(.945,.975,.99),.54),clamp(a*(.51+.72*bright+angle),.035,.45));
        }else if(glass>1.5){
            float flute=clamp(orm.g,.28,.9);
            vec3 milk=mix(neutral,displayColor(base),.35);
            gl_FragColor=vec4(milk,clamp(.35+.39*flute+.17*angle+.11*bright,.19,.82));
        }else{
            float glaze=.068+.38*angle+.24*bright;
            gl_FragColor=vec4(neutral,clamp(max(glaze,a<.9?a*.53:0.),.04,.58));
        }
        return;
    }
    if(mirror>.5){
        gl_FragColor=vec4(displayColor(environment*vec3(.85,.907,.92)+vec3(.16)),1.);
        return;
    }
    vec3 h=normalize(key+v);
    float nl=max(0.,dot(n,key)),nh=max(0.,dot(n,h));
    float m=metal*orm.b, a2=pow(r,4.);
    float d=nh*nh*(a2-1.)+1.;
    float distribution=a2/(3.14159*d*d+.00006);
    #ifdef NORMAL_MAPS
    if(anisotropy>.01){
        vec3 dx=dFdx(worldPosition),dy=dFdy(worldPosition);
        vec2 u=dFdx(st),w=dFdy(st);
        vec3 tx=cross(dy,n)*u.x+cross(n,dx)*w.x;
        tx*=inversesqrt(max(dot(tx,tx),1e-12));
        vec3 ty=cross(n,tx);
        float rt=r*r,ax=max(.009,rt*(1.-.52*anisotropy)),ay=rt*(1.+.86*anisotropy);
        vec2 q=vec2(dot(h,tx)/ax,dot(h,ty)/ay);
        float z=dot(q,q)+nh*nh;
        distribution=1./(3.14159*ax*ay*z*z+.00008);
    }
    #endif
    float k=(r+1.)*(r+1.)*.125;
    float g=nl/(nl*(1.-k)+k)*nv/(nv*(1.-k)+k);
    vec3 f0=mix(vec3(.043),base,m);
    float ao=mix(1.,orm.r,aoStrength);
    float contact=1.-.17*exp(-max(0.,worldPosition.y)*7.5)*(1.-max(0.,geometric.y));
    float fill=.54+.133*max(0.,n.y)+.09*max(0.,-n.y)+.052*max(0.,n.z);
    vec3 diffuse=base*(1.-.75*m)*fill*ao*contact;
    vec3 direct=(base*(1.-m)*.46+min(vec3(1.43),distribution*g*F(f0,dot(h,v))/(4.*nl*nv+.004)))
        *vec3(1.06,.995,.914)*nl*mix(.14,1.,visibility(geometric));
    vec3 reflections=F(f0,nv)*environment*(.93-.55*r)*ao;
    vec3 lacquer=coat.x*F(vec3(.034),dot(geometric,v))*studio(reflect(-v,geometric),coat.y);
    vec3 thread=base*sheen*pow(1.-nv,2.75)*.119;
    vec3 emission=emissive*mix(vec3(1.),pow(texture2D(emissionMap,locate(uv,emissionUv,textureAngles.w)).rgb,vec3(2.2)),useEmission);
    gl_FragColor=vec4(displayColor(diffuse+direct+reflections+lacquer+thread+emission),blendMode>.5?a:1.);
}`;

const shadowVertex=`
attribute vec3 p;
uniform mat4 world;
uniform vec3 key,lightRight,lightUp,lightCenter;
uniform vec2 shadowScale;
void main(){
    vec3 q=(world*vec4(p,1.)).xyz-lightCenter;
    gl_Position=vec4(2.*dot(q,lightRight)*shadowScale.x,2.*dot(q,lightUp)*shadowScale.x,
                     -2.*dot(q,key)*shadowScale.y,1.);
}`;
const shadowFragment=`
precision highp float;
void main(){
    float v=gl_FragCoord.z*255.;
    gl_FragColor=vec4(floor(v)/255.,fract(v),0.,1.);
}`;


    const identity=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
    const clamp=(v,lo,hi)=>Math.max(lo,Math.min(v,hi));
    const dot=(a,b)=>a.reduce((p,x,i)=>p+x*b[i],0);
    const unit=a=>{const d=Math.hypot(...a)||1;return a.map(x=>x/d);};
    const cross=([a,b,c],[x,y,z])=>[b*z-c*y,c*x-a*z,a*y-b*x];
    const apply=(m,p)=>[0,1,2].map(i=>m[i]*p[0]+m[i+4]*p[1]+m[i+8]*p[2]+m[i+12]);
    const mix=(a,b,t)=>a.map((x,i)=>x+(b[i]-x)*t);
    const point=(a,b)=>a.map((x,i)=>x-b[i]);

    function product(a,b){
        if(a===identity)return b;
        if(b===identity)return a;
        const v=new Array(16);
        for(let i=0;i<4;i++)for(let j=0;j<4;j++){
            const k=i*4;
            v[k+j]=a[j]*b[k]+a[j+4]*b[k+1]+a[j+8]*b[k+2]+a[j+12]*b[k+3];
        }
        return v;
    }
    function transform(t,[x,y,z,w],[a,b,c]){
        return [(1-2*y*y-2*z*z)*a,2*(x*y+z*w)*a,2*(x*z-y*w)*a,0,
                2*(x*y-z*w)*b,(1-2*x*x-2*z*z)*b,2*(y*z+x*w)*b,0,
                2*(x*z+y*w)*c,2*(y*z-x*w)*c,(1-2*x*x-2*y*y)*c,0,...t,1];
    }
    function normalTransform(m){
        const a=m.slice(0,3),b=m.slice(4,7),c=m.slice(8,11);
        const x=cross(b,c), det=dot(a,x);
        if(Math.abs(det)<1.e-10 || Math.max(Math.hypot(...a),Math.hypot(...b),Math.hypot(...c))<.00011)
            return null;
        return {matrix:[...x,...cross(c,a),...cross(a,b)].map(k=>k/det),flipped:det<0};
    }
    function compile(vertex,fragment,uniforms){
        const program=gl.createProgram(),shaders=[];
        for(const [type,source] of [[gl.VERTEX_SHADER,vertex],[gl.FRAGMENT_SHADER,fragment]]){
            const shader=gl.createShader(type);
            gl.shaderSource(shader,source);
            gl.compileShader(shader);
            if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(shader));
            gl.attachShader(program,shader);
            shaders.push(shader);
        }
        gl.linkProgram(program);
        if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
        shaders.forEach(s=>gl.deleteShader(s));
        const u=Object.fromEntries(uniforms.split(' ').map(k=>[k,gl.getUniformLocation(program,k)]));
        const attr=[['p',3,0],['n',3,12],['tex',2,24],['tint',3,32]].map(([k,n,o])=>[gl.getAttribLocation(program,k),n,o])
                     .filter(([i])=>i>=0);
        return {program,u,attr};
    }
    const illumination='key lightRight lightUp lightCenter shadowScale';
    const surface=compile(mainVertex,mainFragment,
        'world worldNormal right up eye target scale perspective distance depthScale '+illumination+
        ' baseMap surfaceMap normalMap emissionMap shadowMap tintColor baseUv surfaceUv normalUv emissionUv textureAngles coat emissive cameraOrigin metal roughness normalStrength aoStrength glass sheen mirror alphaCut blendMode useEmission useShadow shadowTexel anisotropy');
    const depth=compile(shadowVertex,shadowFragment,'world '+illumination);

    function bytes64(s){
        const code=atob(s),bytes=new Uint8Array(code.length);
        for(let i=0;i<code.length;i++)bytes[i]=code.charCodeAt(i);
        return bytes;
    }
    function inflate(s){return window.pako.inflate(bytes64(s));}
    function vertexBytes(encoded){
        const planar=inflate(encoded),interleaved=new Uint8Array(planar.length),n=planar.length/44;
        for(let attribute=0;attribute<44;attribute++){
            for(let i=0;i<n;i++)interleaved[i*44+attribute]=planar[attribute*n+i];
        }
        return interleaved;
    }
    function indexBytes(encoded){
        const delta=inflate(encoded),count=delta.length/2,indices=new Uint16Array(count);
        let value=0;
        for(let i=0;i<count;i++){
            const id=delta[i] | delta[count+i]<<8;
            value=(value+((id>>>1)^-(id&1)))&65535;
            indices[i]=value;
        }
        return indices;
    }
    let packed=vertexBytes(data.vertices);
    let V=new Float32Array(packed.buffer,packed.byteOffset,packed.byteLength/4);
    const vbuf=gl.createBuffer(), ibuf=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);
    gl.bufferData(gl.ARRAY_BUFFER,packed,gl.DYNAMIC_DRAW);
    delete data.vertices;
    packed=indexBytes(data.indices);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,packed,gl.STATIC_DRAW);
    delete data.indices;
    packed=inflate(data.shapes);
    const displacement=new Int16Array(packed.buffer,packed.byteOffset,packed.byteLength/2);
    delete data.shapes;
    packed=null;

    let attributeSlots=[];
    function use(pass){
        gl.useProgram(pass.program);
        const now=pass.attr.map(([i])=>i);
        for(const i of attributeSlots)if(!now.includes(i))gl.disableVertexAttribArray(i);
        for(const i of now)if(!attributeSlots.includes(i))gl.enableVertexAttribArray(i);
        attributeSlots=now;
    }
    function draw(pass,[base,index,count]){
        for(const [i,n,o] of pass.attr)gl.vertexAttribPointer(i,n,gl.FLOAT,false,44,base+o);
        gl.drawElements(gl.TRIANGLES,count,gl.UNSIGNED_SHORT,index);
    }
    function texture(){
        const id=gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D,id);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
        return id;
    }
    function solid(rgba){
        const t=texture();
        gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array(rgba));
        return t;
    }
    const white=solid([255,255,255,255]), flat=solid([128,128,255,255]);
    const defaults=[white,white,flat,white];
    const shadowSize=Math.min(2048,gl.getParameter(gl.MAX_TEXTURE_SIZE));
    const shadowMap=texture();
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,shadowSize,shadowSize,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
    const shadowBuffer=gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER,shadowBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,shadowSize,shadowSize);
    const shadowTarget=gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER,shadowTarget);
    gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,shadowMap,0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,shadowBuffer);
    const shadowOK=gl.checkFramebufferStatus(gl.FRAMEBUFFER)===gl.FRAMEBUFFER_COMPLETE;
    gl.bindFramebuffer(gl.FRAMEBUFFER,null);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,gl.NONE);

    const textureCache=new Map(), queued=new Set(), busy=new Set();
    let failed=0;
    function textureQueue(mats){
        for(const i of mats)if(i>=0 && !textureCache.has(i) && !busy.has(i))queued.add(i);
        pumpTextures();
    }
    function pumpTextures(){
        while(busy.size<5&&queued.size){
            const i=queued.values().next().value;
            queued.delete(i);
            busy.add(i);
            const image=new Image();
            const done=()=>{
                busy.delete(i);
                canvas.dataset.maps=String(textureCache.size);
                if(failed)setNotice('一部の質感を読み込めませんでした。');
                request();
                pumpTextures();
            };
            image.onload=()=>{
                if(gl.isContextLost())return;
                gl.activeTexture(gl.TEXTURE0);
                const t=texture();
                gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);
                if(!(image.width&(image.width-1))&&!(image.height&(image.height-1))){
                    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);
                    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.REPEAT);
                    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);
                    gl.generateMipmap(gl.TEXTURE_2D);
                    if(anisotropic)gl.texParameterf(gl.TEXTURE_2D,anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,4);
                }
                textureCache.set(i,t);
                done();
            };
            image.onerror=()=>{failed++;textureCache.set(i,white);done();};
            image.src=data.images[i];
        }
    }

    const zones=new Map(data.zones.map((k,i)=>[i,k]));
    const zoneId=k=>data.zones.indexOf(k);
    const translations=Object.fromEntries(Object.entries(data.origins).map(([id,z])=>
        [id,transform([0,0,z],[0,0,0,1],[1,1,1])]));
    const choices=data.zones.filter(k=>k!=='Campus');
    const landscape={
        all:{kind:'all',zone:'Campus',target:[17.1,.64,-26.5],az:1.24,el:.99,span:100,d:0},
        top:{kind:'top',zone:'Campus',target:[17.8,0.,-26.55],az:Math.PI/2,el:Math.PI/2,span:89,d:0},
        walkthrough:{kind:'walk',zone:'Campus',target:[32.67,1.58,-32.12],az:0,el:.014,span:7.6,d:7.15},
    };
    for(const [i,z] of [0,-11.8,-31.925,-43.725].entries()){
        landscape['ABCD'[i]]={target:[4.,.74,z-4.5],az:1.39,el:.79,span:12.6,d:0, cut:true};
    }
    Object.assign(landscape,{
        Lobby:{target:[37.5,.58,-26.325],az:1.24,el:.96,span:13.8,d:0},
        Reception:{target:[36.60,.85,-42.16],az:-1.28,el:.89,span:6.5,d:0,cut:true},
        Infirmary:{target:[26.52,.84,-4.54],az:1.31,el:.86,span:14.,d:0,cut:true},
        Staff:{target:[26.53,.76,-48.29],az:1.27,el:.88,span:14.9,d:0,cut:true},
        NorthStair:{target:[.33,1.24,-26.23],az:1.31,el:.80,span:11.,d:0},
        WestStair:{target:[17.5,1.24,5.9],az:1.12,el:.84,span:11.4,d:0},
        EastStair:{target:[17.76,1.24,-59.12],az:-1.2,el:.84,span:11.4,d:0},
    });
    const lights={key:unit([-.52,.76,.37])};
    lights.side=unit([lights.key[2],0,-lights.key[0]]);
    lights.up=cross(lights.key,lights.side);
    const state=Object.fromEntries(data.zones.map(k=>[k,{}]));
    const jobs=new Map(), poses=new Map(), weights=new Map(), hidden=new Set(), worlds=new Map();
    const morphGroups=new Map();
    const materialOpaque=[],materialClear=[];
    for(const draw of data.draws){
        const [j,,i,parent,local,geo,center,morph]=draw;
        const item={j,role:draw[1],m:data.mats[i],material:i,parent,local:local||identity,geo,center,morph};
        item.offset=translations[j]||identity;
        item.matrix=parent===null?normalTransform(item.local):null;
        if(morph){
            const [node,,n]=morph;
            const q=morphGroups.get(node)||[];
            const start=geo[0]/4,length=geo[3]*11;
            q.push({item,base:V.slice(start,start+length),scratch:new Float32Array(length),old:Array(n).fill(0)});
            morphGroups.set(node,q);
        }
        (item.m.blend?materialClear:materialOpaque).push(item);
    }
    V=null;
    materialOpaque.sort((a,b)=>a.material-b.material);
    const viewNav=document.querySelector('#views'),panel=document.querySelector('#controls'), pins=document.querySelector('#pins');
    let camera={...landscape.all},zone='Campus',roof=false,operation=false,pending=false,shadowDirty=true,lastShadow=0,frameNumber=0;
    const markers=[];
    const cameraButtons=new Map();

    function setNotice(message){
        notice.textContent=message;
        notice.hidden=!message;
    }
    function button(parent,label,fn,active=null){
        const b=document.createElement('button');
        b.type='button';
        b.textContent=label;
        b.addEventListener('click',fn);
        if(active!==null)b.setAttribute('aria-pressed',String(active));
        parent.appendChild(b);
        return b;
    }
    function select(parent,title,options,value,on){
        const box=document.createElement('select');
        box.setAttribute('aria-label',title);
        for(const [value,label] of options){
            const opt=document.createElement('option');
            opt.value=String(value);
            opt.textContent=label;
            box.appendChild(opt);
        }
        box.value=String(value);
        box.addEventListener('change',()=>{on(box.value);refresh();});
        parent.appendChild(box);
        return box;
    }
    const label=k=>data.sections[zoneId(k)][1];
    cameraButtons.set('all',button(viewNav,'全景',()=>go('all'),true));
    cameraButtons.set('top',button(viewNav,'真上',()=>go('top'),false));
    cameraButtons.set('walk',button(viewNav,'廊下から',()=>go('walkthrough'),false));
    const picker=select(viewNav,'部屋を選ぶ',[['Campus','1階全体'],...choices.map(k=>[k,label(k)])],'Campus',value=>{
        go(value==='Campus'?'all':value);
    });
    const roofButton=button(viewNav,'天井 表示',()=>{
        roof=!roof;
        shadowDirty=true;
        buttons();
        request();
    },false);
    const op=button(viewNav,'操作',()=>{
        operation=!operation;
        refresh();
        buttons();
        request();
    },false);
    for(const key of choices){
        const b=button(pins,label(key),()=>go(key));
        b.classList.add('pin');
        const p=landscape[key].target.slice();
        p[1]=.18;
        markers.push([b,p]);
    }

    function buttons(){
        canvas.dataset.zone=zone;
        canvas.dataset.roof=String(roof);
        for(const [id,b] of cameraButtons)b.setAttribute('aria-pressed',String(camera.kind===id));
        roofButton.textContent=roof?'天井 非表示':'天井 表示';
        roofButton.setAttribute('aria-pressed',String(roof));
        op.setAttribute('aria-pressed',String(operation));
        picker.value=zone;
    }
    function go(k){
        const v=landscape[k];
        const previous=zone;
        zone=v.zone||k;
        camera={...v,zone,kind:v.kind||'room',zoom:1};
        if(zone!==previous)roof=false;
        shadowDirty=true;
        buttons();
        refresh();
        request();
    }
    function focus(t){
        const v=landscape[zone];
        let extra={};
        if(zone==='Lobby'){
            extra=t==='outside'?
                {target:[40.59,1.21,-26.325],az:1.51,el:.185,span:12.1,d:10.9}:
                {target:[37.12,1.20,-26.325],az:1.59,el:.25,span:10.,d:6.1};
        }else if(zone==='Reception'&&t==='log'){
            extra={target:[34.17,1.08,-41.935],az:-1.52,el:.63,span:1.37,d:1.65,cut:true};
        }else if(zone==='Infirmary'&&t==='wash'){
            extra={target:[27.96,.98,-8.80],az:-.44,el:.43,span:3.44,d:3.3,cut:true};
        }else if(zone==='Staff' && t?.center){
            const [x,y,z]=t.center;
            extra={target:[26.265+z,y,-48.29-x],az:Math.PI*.5+t.yaw*Math.PI/180+.28,
                   el:t.id==='Schedule'?.10:.54,span:t.id==='Printer'?2.99:3.7,d:0,cut:true};
        }
        camera={...v,...extra,zone,kind:'detail',zoom:1};
        buttons();
        shadowDirty=true;
        request();
    }

    function clipName(name,group=zone){
        if(data.clips[group]?.[name])return name;
        if(/^[BCD]$/.test(group) && data.clips[group]?.[group+'__'+name])return group+'__'+name;
        return null;
    }
    function slerp(a,b,w){
        const sign=dot(a,b)<0?-1:1, end=b.map(v=>v*sign);
        const cos=clamp(dot(a,end),-1,1);
        if(cos>.9995)return unit(mix(a,end,w));
        const theta=Math.acos(cos),d=Math.sin(theta);
        return a.map((v,i)=>(v*Math.sin((1-w)*theta)+end[i]*Math.sin(w*theta))/d);
    }
    function sample(track,time){
        const [,mode,x,y,w,how]=track;
        const t=data.time[x],numbers=data.values[y];
        let a=0,b=t.length-1;
        while(b-a>1){const mid=(a+b)>>1;if(t[mid]<=time)a=mid;else b=mid;}
        if(t.length===1)b=a=0;
        const dt=t[b]-t[a]||1, f=clamp((time-t[a])/dt,0,1);
        const val=(i,l=0)=>numbers.slice((how===2?i*3+l:i)*w,(how===2?i*3+l:i)*w+w);
        if(how===1)return val(f>=1?b:a);
        let result;
        if(how===2){
            const p=val(a,1),q=val(b,1),m=val(a,2),n=val(b,0);
            const f2=f*f,f3=f2*f;
            result=p.map((x,i)=>(2*f3-3*f2+1)*x+(f3-2*f2+f)*dt*m[i]+(-2*f3+3*f2)*q[i]+(f3-f2)*dt*n[i]);
            if(mode===1)result=unit(result);
        }else result=mode===1?slerp(val(a),val(b),f):mix(val(a),val(b),f);
        return result;
    }
    function poseClip(clip,t){
        for(const track of clip[1]){
            const [id,kind]=track;
            const value=sample(track,t);
            if(kind===3)weights.set(id,value);
            else {
                let p=poses.get(id);
                if(!p){p=[];poses.set(id,p);}
                p[kind]=value;
            }
        }
    }
    function play(name,options=null,userKey=name){
        const full=clipName(name);
        if(!full)return false;
        const key=zone+':'+userKey;
        if(jobs.has(key))return false;
        const clip=data.clips[zone][full], length=clip[0];
        const [start,end]=options?.range||[0,length];
        let covered=null;
        if(zone==='Staff'&&/_(Lift_liner|Return_liner)$/.test(name)){
            covered=clip[1][0][0];
            hidden.delete(covered);
        }
        jobs.set(key,{clip,start,end,at:performance.now(),covered,hide:covered!==null&&name.includes('Lift')});
        request();
        return true;
    }
    function toggle(parent,openLabel,closeLabel,open,close,key,segment=null){
        const st=state[zone];
        const on=!!st[key];
        button(parent,on?closeLabel:openLabel,()=>{
            const swap=on&&close?close:open;
            const range=segment||[0,data.clips[zone][clipName(open)][0]];
            if(play(swap,{range:on?(close?null:range.slice().reverse()):range},key)){
                st[key]=!on;
                refresh();
            }
        },on);
    }
    function resetZone(){
        for(const key of [...jobs.keys()])if(key.startsWith(zone+':'))jobs.delete(key);
        for(const clip of Object.values(data.clips[zone]||{})){
            for(const [node] of clip[1]){poses.delete(node);weights.delete(node);hidden.delete(node);}
        }
        state[zone]={mode:state[zone].mode};
        shadowDirty=true;
        refresh();
        request();
    }
    function refresh(){
        panel.replaceChildren();
        panel.hidden=!operation;
        if(!operation)return;
        buildControls({panel,button,select,toggle,play,has:name=>Boolean(clipName(name)),practice:resetZone,focus,zone,
            state:state[zone],staff:data.staffActions,showTop:()=>go('top'),refresh});
    }

    function animator(now){
        for(const [key,job] of jobs){
            const length=Math.abs(job.end-job.start);
            const t=clamp((now-job.at)/Math.max(1,1000*length),0,1);
            poseClip(job.clip,job.start+(job.end-job.start)*t);
            if(t>=1){
                if(job.hide)hidden.add(job.covered);
                jobs.delete(key);
            }
            shadowDirty=true;
        }
        const bucket=data.clips[zone];
        if(bucket){
            const clock=Object.keys(bucket).find(name=>name.includes('ClockV2_')||name==='Clock_Loop');
            if(clock)poseClip(bucket[clock],now*.001%bucket[clock][0]);
        }
        worlds.clear();
    }
    function world(id){
        if(id===null)return identity;
        if(worlds.has(id))return worlds.get(id);
        const [parent,offset,t,r,s]=data.objects[id];
        const q=poses.get(id)||[];
        const m=product(product(world(parent),offset),transform(q[0]||t,q[1]||r,q[2]||s));
        worlds.set(id,m);
        return m;
    }
    function morph(item){
        if(!item.morph)return;
        const [node,offset,count]=item.morph;
        const v=weights.get(node)||data.morphDefaults[node];
        const q=morphGroups.get(node).find(x=>x.item===item);
        if(v.every((x,i)=>Math.abs(x-q.old[i])<.00001))return;
        const [start,,,number]=item.geo;
        q.scratch.set(q.base);
        for(let target=0;target<count;target++){
            const percent=v[target]||0;
            if(Math.abs(percent)<.00001)continue;
            const f=percent/8192, d=offset/2+target*number*6;
            for(let i=0;i<number;i++){
                for(let j=0;j<6;j++)q.scratch[i*11+j]+=displacement[d+i*6+j]*f;
            }
        }
        q.old=v.slice();
        gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);
        gl.bufferSubData(gl.ARRAY_BUFFER,start,q.scratch);
    }

    function isVisible(item,shadow=false){
        if(item.parent!==null && hidden.has(item.parent))return false;
        if(item.role===1&&!roof)return false;
        if(zone!=='Campus'){
            const k=zones.get(item.j);
            if(k!==zone&&k!=='Campus')return false;
            if(!shadow&&k===zone && camera.cut && item.role===2 && camera.kind==='detail'&&zone==='Reception')return false;
            if(!shadow&&k===zone && camera.cut && item.role===2 && camera.kind==='room'&&camera.el<.72)return false;
        }
        return true;
    }
    function lightUniforms(u){
        const wide=zone==='Campus';
        gl.uniform3fv(u.key,lights.key);
        gl.uniform3fv(u.lightRight,lights.side);
        gl.uniform3fv(u.lightUp,lights.up);
        const center=wide?[17.1,.9,-26.6]:landscape[zone].target;
        gl.uniform3fv(u.lightCenter,center);
        gl.uniform2f(u.shadowScale,wide?1/94:1/22,wide?1/115:1/35);
    }
    function bindWorld(pass,item){
        const basis=item.parent===null?item.local:product(world(item.parent),item.local);
        const m=product(item.offset,basis);
        const n=item.matrix||normalTransform(m);
        if(!n)return false;
        gl.uniformMatrix4fv(pass.u.world,false,m);
        if(pass===surface)gl.uniformMatrix3fv(pass.u.worldNormal,false,n.matrix);
        gl.frontFace(n.flipped?gl.CW:gl.CCW);
        if(item.m.double)gl.disable(gl.CULL_FACE);
        else gl.enable(gl.CULL_FACE);
        return true;
    }
    function drawShadow(now){
        if(!shadowOK||!shadowDirty||now-lastShadow<60&&jobs.size)return;
        gl.bindFramebuffer(gl.FRAMEBUFFER,shadowTarget);
        gl.viewport(0,0,shadowSize,shadowSize);
        gl.clearColor(1,1,1,1);
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
        use(depth);
        lightUniforms(depth.u);
        for(const item of materialOpaque){
            if(isVisible(item,true)&&bindWorld(depth,item))draw(depth,item.geo);
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER,null);
        lastShadow=now;
        shadowDirty=false;
    }
    function paint(item){
        const {m}=item,u=surface.u;
        gl.uniform4fv(u.tintColor,m.color);
        gl.uniform1f(u.metal,m.metal);
        gl.uniform1f(u.roughness,m.rough);
        gl.uniform1f(u.normalStrength,textureCache.has(m.maps[2])?m.normalScale:0);
        gl.uniform1f(u.aoStrength,m.occlusion);
        gl.uniform1f(u.glass,m.glass);
        gl.uniform1f(u.sheen,m.sheen);
        gl.uniform1f(u.mirror,m.mirror);
        gl.uniform1f(u.alphaCut,m.cut);
        gl.uniform1f(u.blendMode,m.blend?1:0);
        gl.uniform1f(u.anisotropy,m.anisotropy);
        gl.uniform2fv(u.coat,m.coat);
        gl.uniform3fv(u.emissive,m.emissive);
        gl.uniform1f(u.useEmission,m.maps[3]>=0?1:0);
        gl.uniform4fv(u.textureAngles,m.uv.map(x=>x[4]));
        const coords=[u.baseUv,u.surfaceUv,u.normalUv,u.emissionUv];
        for(let i=0;i<4;i++){
            gl.uniform4fv(coords[i],m.uv[i].slice(0,4));
            gl.activeTexture(gl.TEXTURE0+i);
            gl.bindTexture(gl.TEXTURE_2D,textureCache.get(m.maps[i])||defaults[i]);
        }
    }
    function axes(width,height){
        const {az,el,d,target,span}=camera;
        const a=Math.sin(az),b=Math.cos(az),s=Math.sin(el),c=Math.cos(el);
        const eye=[a*c,s,b*c],right=[b,0,-a],up=[-a*s,c,-b*s];
        const aspect=width/height;
        const factor=2*(camera.zoom||1)/span;
        const scale=aspect>1?[factor,factor*aspect]:[factor*aspect,factor];
        if(camera.kind==='all'||camera.kind==='top'){
            // Fit the full west-east span even on a narrow display.
            if(aspect<1.12){scale[0]=factor;scale[1]=factor*aspect;}
            else if(aspect>1.6){scale[1]*=1.6/aspect;scale[0]*=1.6/aspect;}
        }
        const origin=target.map((v,i)=>v+d*eye[i]);
        return {eye,right,up,origin,scale:scale.map(v=>v*(d||1))};
    }
    function showPins(w,h,axes){
        pins.hidden=camera.kind!=='top';
        if(pins.hidden)return;
        for(const [button,p] of markers){
            const q=point(p,camera.target);
            const x=(dot(q,axes.right)*axes.scale[0]+1)*.5*w;
            const y=(1-dot(q,axes.up)*axes.scale[1])*.5*h;
            button.style.left=x+'px';
            button.style.top=y+'px';
            button.hidden=x<0||y<0||x>w||y>h;
        }
    }
    const posChange=new Map();
    function render(now){
        const w=canvas.clientWidth,h=canvas.clientHeight;
        if(!w||!h||gl.isContextLost())return;
        const ratio=Math.min(window.devicePixelRatio||1,1.72,Math.sqrt(2200000/(w*h)));
        const W=Math.round(w*ratio),H=Math.round(h*ratio);
        if(canvas.width!==W)canvas.width=W;
        if(canvas.height!==H)canvas.height=H;
        animator(now);
        for(const nodes of morphGroups.values())for(const {item} of nodes)if(isVisible(item))morph(item);
        drawShadow(now);
        gl.viewport(0,0,W,H);
        gl.clearColor(.847,.879,.882,1);
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
        use(surface);
        lightUniforms(surface.u);
        const u=surface.u,basis=axes(w,h);
        const {eye,right,up,origin,scale}=basis;
        gl.uniform3fv(u.eye,eye);
        gl.uniform3fv(u.right,right);
        gl.uniform3fv(u.up,up);
        gl.uniform3fv(u.target,camera.target);
        gl.uniform3fv(u.cameraOrigin,origin);
        gl.uniform1f(u.perspective,camera.d?1:0);
        gl.uniform1f(u.distance,camera.d);
        gl.uniform1f(u.depthScale,zone==='Campus'?.018:.036);
        gl.uniform2fv(u.scale,scale);
        gl.uniform1i(u.baseMap,0);
        gl.uniform1i(u.surfaceMap,1);
        gl.uniform1i(u.normalMap,2);
        gl.uniform1i(u.emissionMap,3);
        gl.uniform1i(u.shadowMap,4);
        gl.uniform1f(u.shadowTexel,1/shadowSize);
        gl.uniform1f(u.useShadow,shadowOK?1:0);
        gl.activeTexture(gl.TEXTURE4);
        gl.bindTexture(gl.TEXTURE_2D,shadowMap);
        const front=new Set(),rest=new Set();
        function queue(item){
            const target=zone==='Campus'||zones.get(item.j)===zone?front:rest;
            for(const i of item.m.maps) if(i>=0)target.add(i);
        }
        let last=-1;
        for(const item of materialOpaque){
            if(!isVisible(item)||!bindWorld(surface,item))continue;
            if(last!==item.material){
                paint(item);
                queue(item);
                last=item.material;
            }
            draw(surface,item.geo);
        }
        const transparent=materialClear.filter(x=>isVisible(x));
        for(const item of transparent){
            const m=product(item.offset,product(world(item.parent),item.local));
            posChange.set(item,dot(apply(m,item.center),eye));
        }
        transparent.sort((a,b)=>posChange.get(a)-posChange.get(b));
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
        gl.depthMask(false);
        last=-1;
        for(const item of transparent){
            if(!bindWorld(surface,item))continue;
            if(last!==item.material){paint(item);queue(item);last=item.material;}
            draw(surface,item.geo);
        }
        gl.depthMask(true);
        gl.disable(gl.BLEND);
        posChange.clear();
        textureQueue([...front,...rest]);
        showPins(w,h,basis);
        canvas.dataset.frames=String(++frameNumber);
        if(jobs.size)request();
    }
    function request(){
        if(pending)return;
        pending=true;
        requestAnimationFrame(now=>{pending=false;render(now);});
    }

    const fingers=new Map();
    function zoomBy(factor){
        camera.zoom=clamp((camera.zoom||1)*factor,.44,7);
        request();
    }
    canvas.addEventListener('pointerdown',e=>{
        canvas.setPointerCapture(e.pointerId);
        fingers.set(e.pointerId,[e.clientX,e.clientY,e.shiftKey || e.button===2]);
    });
    canvas.addEventListener('pointermove',e=>{
        const prior=fingers.get(e.pointerId);
        if(!prior)return;
        const current=[e.clientX,e.clientY,prior[2]],dx=current[0]-prior[0],dy=current[1]-prior[1];
        fingers.set(e.pointerId,current);
        if(fingers.size>=2){
            const other=[...fingers.values()].find(x=>x!==current);
            const separation=p=>Math.hypot(p[0]-other[0],p[1]-other[1]);
            zoomBy(separation(current)/Math.max(1,separation(prior)));
        }else if(prior[2]||camera.kind==='top'){
            const {right,up}=axes(canvas.clientWidth,canvas.clientHeight);
            const speed=camera.span/(canvas.clientWidth*(camera.zoom||1));
            camera.target=camera.target.map((x,i)=>x+(-dx*right[i]+dy*up[i])*speed);
            request();
        }else{
            camera.az-=dx*.008;
            camera.el=clamp(camera.el+dy*.008,-.29,Math.PI/2);
            request();
        }
    });
    for(const name of ['pointerup','pointercancel','lostpointercapture'])
        canvas.addEventListener(name,e=>fingers.delete(e.pointerId));
    canvas.addEventListener('contextmenu',e=>e.preventDefault());
    canvas.addEventListener('wheel',e=>{e.preventDefault();zoomBy(Math.exp(-e.deltaY*.0014));},{passive:false});
    window.addEventListener('keydown',e=>{
        if((e.key!=='ArrowLeft'&&e.key!=='ArrowRight')||e.target?.tagName==='SELECT')return;
        const steps=['Campus',...choices];
        const i=steps.indexOf(zone),j=(i+(e.key==='ArrowRight'?1:-1)+steps.length)%steps.length;
        go(steps[j]==='Campus'?'all':steps[j]);
        e.preventDefault();
    });
    canvas.addEventListener('webglcontextlost',()=>setNotice('3D表示が停止しました。HTMLを開き直してください。'));
    if(typeof ResizeObserver==='function')new ResizeObserver(request).observe(canvas);
    else window.addEventListener('resize',request);
    // Refresh the real clock hands only while the viewer is visible and idle.
    setInterval(()=>{if(zone!=='Campus'&&!document.hidden)request();},1000);
    canvas.dataset.ready='true';
    setNotice('');
    go('all');
    if(window.schoolCampusTest)window.schoolCampusInspect=()=>({data,camera,zone,roof,jobs,poses,weights,go});
}

openCampus().catch(error=>{
    const status=document.querySelector('#notice');
    status.hidden=false;
    status.textContent='3Dを表示できませんでした。HTML Viewerでファイルを開き直してください。';
    console.error(error);
});
