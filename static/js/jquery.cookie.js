/*
* jQuery Cookie Plugin v1.4.0
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2013 Klaus Hartl
* Released under the MIT license
*/
(function(a,h,c){function b(i){return i}function g(i){return decodeURIComponent(i.replace(f," "))}var f=/\+/g;var d=a.cookie=function(q,s,e){if(s!==c){e=a.extend({},d.defaults,e);if(s===null){e.expires=-1}if(typeof e.expires==="number"){var k=e.expires,n=e.expires=new Date;n.setDate(n.getDate()+k)}s=d.json?JSON.stringify(s):String(s);return h.cookie=[encodeURIComponent(q),"=",d.raw?s:encodeURIComponent(s),e.expires?"; expires="+e.expires.toUTCString():"",e.path?"; path="+e.path:"",e.domain?"; domain="+e.domain:"",e.secure?"; secure":""].join("")}var i=d.raw?b:g;var m=h.cookie.split("; ");for(var o=0,j;j=m[o]&&m[o].split("=");o++){if(i(j.shift())===q){var t=i(j.join("="));return d.json?JSON.parse(t):t}}return null};d.defaults={};a.removeCookie=function(i,e){if(a.cookie(i)!==null){a.cookie(i,null,e);return true}return false}})(jQuery,document);