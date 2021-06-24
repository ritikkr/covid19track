(this.webpackJsonpcovid19track=this.webpackJsonpcovid19track||[]).push([[0],{104:function(e,t,a){e.exports={card:"Card_card__17NWW"}},242:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(92),o=a.n(c),s=a(10),u=a.n(s),i=a(16),d=a(2),l=a(3),p=a(7),f=a(6),h=a(27),v=a(62),b=a(44),j=a.n(b),m="https://covid19.mathdro.id/api",x=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,n,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m,t&&(a="".concat(m,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(m,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(95),g=a.n(C),y=a(5),k=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country,s=Object(r.useState)({}),d=Object(h.a)(s,2),l=d[0],p=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?Object(y.jsx)(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null,b=l[0]?Object(y.jsx)(v.b,{data:{labels:l.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:l.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return Object(y.jsx)("div",{className:g.a.container,children:o?f:b})},w=a(264),N=a(263),S=a(96),D=a.n(S),I=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),n=Object(h.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(y.jsx)(w.a,{className:D.a.formControl,children:Object(y.jsxs)(N.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(y.jsx)("option",{value:"",children:"United States"}),c.map((function(e,t){return Object(y.jsx)("option",{value:e,children:e},t)}))]})})},U=a(262),E=a(260),V=a(265),T=a(261),B=a(102),G=a.n(B),R=a(103),J=a.n(R),A=a(104),H=a.n(A),L=function(e){var t=e.className,a=e.cardTitle,r=e.value,n=e.lastUpdate,c=e.cardSubtitle;return Object(y.jsx)(E.a,{item:!0,xs:12,md:3,component:V.a,className:J()(H.a.card,t),children:Object(y.jsxs)(T.a,{children:[Object(y.jsx)(U.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(y.jsx)(U.a,{variant:"h5",component:"h2",children:Object(y.jsx)(G.a,{start:0,end:r,duration:2.75,separator:","})}),Object(y.jsx)(U.a,{color:"textSecondary",children:new Date(n).toDateString()}),Object(y.jsx)(U.a,{variant:"body2",component:"p",children:c})]})})},M=a(32),P=a.n(M),W=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=t.lastUpdate;return a?Object(y.jsxs)("div",{className:P.a.container,children:[Object(y.jsx)(U.a,{gutterBottom:!0,variant:"h4",component:"h2",children:"Global"}),Object(y.jsxs)(E.a,{container:!0,spacing:3,justify:"center",children:[Object(y.jsx)(L,{className:P.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:c,cardSubtitle:"Number of active cases from COVID-19."}),Object(y.jsx)(L,{className:P.a.recovered,cardTitle:"Recovered",value:r.value,lastUpdate:c,cardSubtitle:"Number of recoveries from COVID-19."}),Object(y.jsx)(L,{className:P.a.deaths,cardTitle:"Deaths",value:n.value,lastUpdate:c,cardSubtitle:"Number of deaths caused by COVID-19."})]})]}):"Loading..."},Y=a(61),Z=a.n(Y),z=a.p+"static/media/image.9e5d4fc7.png",F=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(y.jsxs)("div",{className:Z.a.container,children:[Object(y.jsx)("img",{className:Z.a.image,src:z,alt:"COVID-19"}),Object(y.jsx)(W,{data:t}),Object(y.jsx)(I,{handleCountryChange:this.handleCountryChange}),Object(y.jsx)(k,{data:t,country:a})]})}}]),a}(n.a.Component);o.a.render(Object(y.jsx)(F,{}),document.getElementById("root"))},32:function(e,t,a){e.exports={container:"Cards_container__1h-E-",card:"Cards_card__2eFcr",infected:"Cards_infected__3sGGH",recovered:"Cards_recovered__171TY",deaths:"Cards_deaths__33d0B"}},61:function(e,t,a){e.exports={container:"App_container__2Oso3"}},95:function(e,t,a){e.exports={container:"Chart_container___GtwM",card:"Chart_card__15bHk",infected:"Chart_infected__3Z8Rx",recovered:"Chart_recovered__arsEk",deaths:"Chart_deaths__2_JVz"}},96:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3aZYE"}}},[[242,1,2]]]);
//# sourceMappingURL=main.8d86baa7.chunk.js.map