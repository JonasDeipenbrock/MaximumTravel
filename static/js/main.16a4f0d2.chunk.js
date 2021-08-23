/*! For license information please see main.16a4f0d2.chunk.js.LICENSE.txt */
(this["webpackJsonpmaximum-travel"]=this["webpackJsonpmaximum-travel"]||[]).push([[0],{133:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(25),s=r.n(i),l=(r(103),r(104),r(105),r(106),r(15)),o=r(181),c=r(183),p=r(184),f=r(26),u=Object(l.d)((function(e){return Object(f.b)(o.a,{position:"sticky",css:{padding:8,display:"flex",flexDirection:"row",justifyContent:"space-evenly"},children:[Object(f.a)(c.a,{variant:"h1",fontSize:"2rem",children:"Welcome to MaximumTravel"}),Object(f.a)(p.a,{css:{color:e.theme.palette.primary.contrastText},children:"NightMode"})]})})),b=r(38),y=r.n(b),d=r(54),h=r(13),m=r(83),v=r.n(m).a.create({baseURL:"https://api.deutschebahn.com/"});function j(e,t){return v.get("fahrplan-plus/v1/departureBoard/".concat(e,"?date=").concat(t.toISOString()),{headers:{Authorization:"Bearer 8f8efb8904be9c88cfc789e507fdcb67",Accept:"application/json"}})}function T(e){return v.get("fahrplan-plus/v1/location/".concat(e),{headers:{Authorization:"Bearer 8f8efb8904be9c88cfc789e507fdcb67",Accept:"application/json"}})}function g(e){return v.get("fahrplan-plus/v1/journeyDetails/".concat(e),{headers:{Authorization:"Bearer 8f8efb8904be9c88cfc789e507fdcb67",Accept:"application/json","Access-Control-Allow-Origin":"*"}})}function O(){return(O=Object(d.a)(y.a.mark((function e(t,r){var a,n,i,s,l,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:return a=e.sent,n=a.data,n[0].id,console.log("Retrieved locations"),e.next=8,j(t,r);case 8:return i=e.sent,s=i.data,console.log("retrieved boards"),new Map,console.log("Trying to get single route"),e.prev=13,e.next=16,g(s[0].detailsId);case 16:return o=e.sent,console.log(o),e.abrupt("return",null!==(l=o.data[0].stopName)&&void 0!==l?l:"Empty");case 21:e.prev=21,e.t0=e.catch(13),console.log("had an error"),console.error(e.t0.message);case 25:return console.log("Got nothing"),e.abrupt("return","Received nothing or failed");case 27:case"end":return e.stop()}}),e,null,[[13,21]])})))).apply(this,arguments)}var x=function(e,t){return O.apply(this,arguments)},A=r(66),w=r(2),B={width:500,height:500},k=["places"],S={lat:49.006889,lng:8.403653},M={styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"},{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"on"},{color:"#e0dfe0"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#a8a9a8"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#5b5b5a"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]}],disableDefaultUI:!0};function D(){var e=Object(A.b)({googleMapsApiKey:"AIzaSyDkSQQpkYcrMKPDTXTcvC9rkc4M2cD5eu4",id:"fa9a1bc2cb56ad9f",libraries:k}),t=e.isLoaded;return e.loadError?Object(w.jsx)("div",{children:"Error loading maps"}):t?Object(w.jsx)("div",{children:Object(w.jsx)(A.a,{mapContainerStyle:B,zoom:8,center:S,options:M})}):Object(w.jsx)("div",{children:"Loading map"})}var R=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(D,{})})},I=r(46),z=r(185),C=r(177),H=r(178),P=r(84);var K=function(){return Object(w.jsx)(z.a,{children:Object(w.jsx)(C.a,{id:"city-input",options:P.map((function(e){return e.Ort})),renderInput:function(e){return Object(w.jsx)(H.a,Object(I.a)(Object(I.a)({},e),{},{label:"Search input",margin:"normal",variant:"outlined",inputProps:Object(I.a)(Object(I.a)({},e.inputProps),{},{type:"search"})}))}})})};var L=function(){var e=n.a.useState(""),t=Object(h.a)(e,2),r=t[0],a=t[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(K,{}),Object(w.jsx)(R,{}),Object(w.jsx)(p.a,{onClick:Object(d.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("Karlsruhe",new Date(Date.now()));case 2:t=e.sent,console.log("retrieved info"),a(t);case 5:case"end":return e.stop()}}),e)}))),children:"Test API"}),Object(w.jsx)(c.a,{children:r})]})},N=r(186),E=r(85),F={palette:{primary:{main:"#263238",light:"#4f5b62",dark:"#000a12",contrastText:"#ffffff"},secondary:{main:"#b0bec5",light:"#e2f1f8",dark:"#808e95",contrastText:"#000000"}},spacing:4},V=Object(E.a)(F);var G=function(){return Object(f.a)(l.c,{theme:V,children:Object(f.b)(N.a,{css:{backgroundColor:F.palette.primary.light,width:"100vw",height:"100vh"},children:[Object(f.a)(u,{}),Object(f.a)(L,{})]})})};s.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(G,{})}),document.getElementById("root"))},84:function(e){e.exports=JSON.parse('[{"Bundesland":"Hessen","RB":"RB Mitte","BM":"Darmstadt","Bf. Nr.":119,"Station":"Altheim (Hess)","Bf DS 100Abk.":"FAT","Kat. Vst":6,"Stra\xdfe":"M\xfcnstererstr. 19","PLZ":64839,"Ort":"M\xfcnster","Aufgabentr\xe4ger":"Rhein-Main-Verkehrsverbund GmbH"},{"Bundesland":"Hessen","RB":"RB Mitte","BM":"Darmstadt","Bf. Nr.":201,"Station":"Assmannshausen","Bf DS 100Abk.":"FAH","Kat. Vst":5,"Stra\xdfe":"Bahnhofstr. 1","PLZ":65385,"Ort":"R\xfcdesheim am Rhein","Aufgabentr\xe4ger":"Rhein-Main-Verkehrsverbund GmbH"}]')}},[[133,1,2]]]);
//# sourceMappingURL=main.16a4f0d2.chunk.js.map