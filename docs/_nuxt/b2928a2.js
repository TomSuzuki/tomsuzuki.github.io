(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{251:function(e,t,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(132).default)("4f60db31",content,!0,{sourceMap:!1})},263:function(e,t,r){"use strict";r(251)},264:function(e,t,r){var o=r(131)(!1);o.push([e.i,"#profile{padding:0 2rem}#profile_img_header{width:100%;height:640px;max-width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;overflow:hidden}#profile_title{font-size:xx-large;padding:.25em 1em;margin:2em 0 .75em}#profile_info,#profile_info_outer,#profile_title{text-align:center}#profile_info{display:inline-flex;justify-content:center;flex-flow:wrap;align-items:center;grid-gap:1em 3em;gap:1em 3em}#profile_img_icon{border-radius:50%;width:8rem;text-align:center}#profile_table,#profile_table_outer{text-align:center}#profile_table{display:inline-block;font-size:medium;border-spacing:.25em;margin-top:.5em}#profile_table td,#profile_table th{border-radius:var(--default_radius);padding:.25em .5em}#profile_table th{text-align:center;background-color:var(--color_theme);color:var(--color_white)}#profile_table td{text-align:left}#profile_sns{padding:1em 0;list-style-type:none;display:flex;flex-wrap:wrap;justify-content:center}#profile_msg{padding:2em 0 1em}",""]),e.exports=o},282:function(e,t,r){"use strict";r.r(t);var o={name:"Head",props:["info"]},l=(r(263),r(42)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"profile"}},[r("div",{attrs:{id:"profile_title"}},[e._v(e._s(e.info.title))]),e._v(" "),r("div",{attrs:{id:"profile_info_outer"}},[r("div",{attrs:{id:"profile_info"}},[r("img",{attrs:{id:"profile_img_icon",src:e.info.profile.img}}),e._v(" "),r("div",{attrs:{id:"profile_table_outer"}},[r("table",{attrs:{id:"profile_table"}},e._l(e.info.profile.table,(function(text,head){return r("tr",[r("th",[e._v(e._s(head))]),e._v(" "),r("td",[e._v(e._s(text))])])})),0)])])]),e._v(" "),r("ul",{attrs:{id:"profile_sns"}},e._l(e.info.profile.sns,(function(t){return r("li",[r("a",{staticClass:"btn5",class:t.tag,attrs:{target:"_blank",href:t.link}},[r("span",{staticClass:"inner_btn5"},[e._v(e._s(t.text))])])])})),0),e._v(" "),r("p",{staticClass:"center",attrs:{id:"profile_msg"}},[e._v(e._s(e.info.profile.msg))])])}),[],!1,null,null,null);t.default=component.exports}}]);