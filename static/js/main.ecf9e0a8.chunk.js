(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),l=n.n(o),s=n(4),r=n(5),u=n(7),d=n(6),i=n(1),m=n.n(i),p=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selectedGood:null},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"header"},t?"".concat(t," is selected"):"No goods selected"),c.a.createElement("button",{type:"button",className:m()("button",{hidden:!t}),onClick:function(){e.setState({selectedGood:null})}},"X"),c.a.createElement("ul",null,p.map((function(n){return c.a.createElement("li",{key:n},c.a.createElement("span",{className:m()("good-name",{selected:t===n})},n),c.a.createElement("button",{type:"button",className:m()("button",{hidden:t===n}),onClick:function(){e.setState({selectedGood:n})}},"Select"))}))))}}]),n}(c.a.Component);l.a.render(c.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ecf9e0a8.chunk.js.map