(this["webpackJsonprandom-scatter-plot"]=this["webpackJsonprandom-scatter-plot"]||[]).push([[0],{12:function(t,e,a){t.exports=a(19)},17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(17),a(7)),s=(a(18),a(10)),o=a.n(s),u=a(3),m=a(1),f=function(t){var e=t.data,a=t.setData,c=Object(n.useRef)();return Object(n.useEffect)((function(){var t=Object(m.g)(c.current),n=Math.max.apply(Math,Object(u.a)(e.map((function(t){return t[0]})))),r=Math.max.apply(Math,Object(u.a)(e.map((function(t){return t[1]})))),l=Math.min.apply(Math,Object(u.a)(e.map((function(t){return t[0]})))),i=Math.min.apply(Math,Object(u.a)(e.map((function(t){return t[1]})))),s=Object(m.f)().domain([l,n]).range([0,600]),o=Object(m.f)().domain([i,r]).range([0,600]),f=Object(m.a)(s);t.select(".x-axis").style("transform","translateY(600px)").transition().call(f);var p=Object(m.b)(o);t.select(".y-axis").style("transform","translateX(600px)").transition().call(p),t.selectAll(".dataPoint").data(e).join("circle").attr("class","dataPoint").attr("r",3).transition().attr("cx",(function(t){return s(t[0])})).attr("cy",(function(t){return o(t[1])})),t.selectAll(".dataPoint").on("click",(function(t,n){m.c.stopPropagation();var r=e.slice();r.splice(n,1),a(r)})),t.on("click",(function(){var t=Object(m.d)(c.current),n=[s.invert(t[0]),o.invert(t[1])];a(e.concat([n]))}))}),[e,a]),r.a.createElement("svg",{ref:c,width:"600",height:"600",viewBox:"0 0 600 600"},r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"}))},p=function(t){var e=t.principalComponents,a=Object(n.useRef)();return Object(n.useEffect)((function(){var t=Object(m.g)(a.current),n=Math.max.apply(Math,Object(u.a)(e)),r=Object(m.e)().domain(e.map((function(t,e){return e}))).range([0,300]).padding(.5),c=Object(m.f)().domain([0,n]).range([150,0]),l=Object(m.a)(r).ticks(e.length);t.select(".x-axis").style("transform","translateY(150px)").call(l);var i=Object(m.b)(c);t.select(".y-axis").style("transform","translateX(300px)").transition().call(i),t.selectAll(".bar").data(e).join("rect").attr("class","bar").style("transform","scale(1, -1)").attr("x",(function(t,e){return r(e)})).attr("y",-150).attr("width",r.bandwidth()).transition().attr("height",(function(t){return 150-c(t)}))}),[e]),r.a.createElement("svg",{ref:a},r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"}))};var b=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),a=e[0],c=e[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){if(0!==a.length){var t=o.a.getEigenVectors(a);m(t.map((function(t){return t.eigenvalue})))}else m([])}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Webtools f\xfcr die Lehre"),r.a.createElement(f,{data:a,setData:c}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){for(var t=[],e=0;e<50;e++)t=t.concat([[1e3*Math.random()-500,1e3*Math.random()-500]]);c(t)}},"Generate random data"),r.a.createElement("button",{onClick:function(){return c([])}},"Clear data"),r.a.createElement("br",null),r.a.createElement(p,{principalComponents:u}))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.eeae758b.chunk.js.map