// Compiled by ClojureScript 1.7.48 {}
goog.provide('mobileweb.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
mobileweb.core.serverurl = "http://192.168.2.100:3000/";
mobileweb.core.starter = angular.module("starter",["ngRoute","starter.controllers"]);
angular.module("starter").config(["$routeProvider",(function ($routeProvider){
return $routeProvider.when("/",(function (){var G__13120 = {};
(G__13120["controller"] = "AppCtrl");

(G__13120["templateUrl"] = "templates/main.html");

return G__13120;
})()).otherwise((function (){var G__13124 = {};
(G__13124["redirectTo"] = "/");

return G__13124;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_TempService = ["$http",(function ($http){
var G__13128 = {};
(G__13128["removetemp3"] = ((function (G__13128){
return (function (parenttext,text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/removetemp3")].join(''),(function (){var G__13132 = {};
(G__13132["id"] = id);

(G__13132["parenttext"] = parenttext);

(G__13132["text"] = text);

return G__13132;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

(G__13128["addtemp1"] = ((function (G__13128){
return (function (text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp1")].join(''),(function (){var G__13136 = {};
(G__13136["id"] = id);

(G__13136["text"] = text);

return G__13136;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

(G__13128["removemm01"] = ((function (G__13128){
return (function (id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/removemm01")].join(''),(function (){var G__13140 = {};
(G__13140["id"] = id);

return G__13140;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

(G__13128["addtemp2"] = ((function (G__13128){
return (function (keytext,text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp2")].join(''),(function (){var G__13144 = {};
(G__13144["keytext"] = keytext);

(G__13144["id"] = id);

(G__13144["text"] = text);

return G__13144;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

(G__13128["altermm10"] = ((function (G__13128){
return (function (value,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/altermm10")].join(''),(function (){var G__13148 = {};
(G__13148["value"] = value);

(G__13148["id"] = id);

return G__13148;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

(G__13128["altertemp3"] = ((function (G__13128){
return (function (parenttext,text,id,value){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/altertemp3")].join(''),(function (){var G__13152 = {};
(G__13152["value"] = value);

(G__13152["id"] = id);

(G__13152["parenttext"] = parenttext);

(G__13152["text"] = text);

return G__13152;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

(G__13128["addtemp0"] = ((function (G__13128){
return (function (title){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp0")].join(''),(function (){var G__13156 = {};
(G__13156["title"] = title);

return G__13156;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

(G__13128["removetemp2"] = ((function (G__13128){
return (function (text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/removetemp2")].join(''),(function (){var G__13160 = {};
(G__13160["id"] = id);

(G__13160["text"] = text);

return G__13160;
})()).then(((function (G__13128){
return (function (response){
return response;
});})(G__13128))
);
});})(G__13128))
);

return G__13128;
})];

angular.module("starter").service("TempService",mobileweb.core.starter_TempService);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout","$http","TempService",(function ($scope,$timeout,$http,TempService){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm0-new","#mm0-new",729573036)).click((function (){
return mobileweb.core.newmm0.call(null,TempService);
}));

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm1-new","#mm1-new",-1378372565)).click((function (){
return mobileweb.core.newmm1.call(null,TempService);
}));

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm2-new","#mm2-new",774789273)).click((function (){
return mobileweb.core.newmm2.call(null,TempService);
}));

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm2-remove","#mm2-remove",-1224972100)).click((function (){
return mobileweb.core.removemm2.call(null,TempService);
}));

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm3-remove","#mm3-remove",-1146695649)).click((function (){
return mobileweb.core.removemm3.call(null,TempService);
}));

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm0_1-remove","#mm0_1-remove",110575475)).click((function (){
return mobileweb.core.removemm01.call(null,TempService);
}));

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm1_0-alter","#mm1_0-alter",-119360860)).click((function (){
return mobileweb.core.altermm10.call(null,TempService);
}));

cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__13164 = {};
(G__13164["method"] = "get");

(G__13164["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__13164["onContextMenu"] = mobileweb.core.menushow);

return G__13164;
})());
})];

angular.module("starter.controllers").controller("AppCtrl",mobileweb.core.starter_controllers_AppCtrl);
mobileweb.core.testctl = (function mobileweb$core$testctl($scope){
return alert((33));
});
mobileweb.core.newmm0 = (function mobileweb$core$newmm0(TempService){
return $.messager.prompt("\u63D0\u793A","\u8BF7\u8F93\u5165\u5185\u5BB9:",(function (r){
if((r == null)){
return null;
} else {
cljs.core.println.call(null,r);

return TempService.addtemp0(r).then((function (response){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload");

return $.messager.alert("\u63D0\u793A",response.data.message);
}));
}
}));
});
mobileweb.core.newmm1 = (function mobileweb$core$newmm1(TempService){
var selectednode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("getSelected");
return $.messager.prompt("\u63D0\u793A","\u8BF7\u8F93\u5165\u5185\u5BB9:",((function (selectednode){
return (function (r){
if((r == null)){
return null;
} else {
cljs.core.println.call(null,r);

return TempService.addtemp1(r,selectednode.id).then(((function (selectednode){
return (function (response){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload",[cljs.core.str(selectednode.id),cljs.core.str("_1_1")].join(''));

return $.messager.alert("\u63D0\u793A",response.data.message);
});})(selectednode))
);
}
});})(selectednode))
);
});
mobileweb.core.newmm2 = (function mobileweb$core$newmm2(TempService){
var selectednode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("getSelected");
return $.messager.prompt("\u63D0\u793A","\u8BF7\u8F93\u5165\u5185\u5BB9:",((function (selectednode){
return (function (r){
if((r == null)){
return null;
} else {
cljs.core.println.call(null,r);

return TempService.addtemp2(selectednode.title,r,selectednode.id).then(((function (selectednode){
return (function (response){
cljs.core.println.call(null,response.data.message);

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload",[cljs.core.str(selectednode.id),cljs.core.str("_1_1")].join(''));

return $.messager.alert("\u63D0\u793A",response.data.message);
});})(selectednode))
);
}
});})(selectednode))
);
});
mobileweb.core.removemm2 = (function mobileweb$core$removemm2(TempService){
var selectednode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("getSelected");
cljs.core.println.call(null,selectednode);

return $.messager.confirm("\u63D0\u793A","\u786E\u5B9A\u8981\u5220\u9664\u6B64\u8282\u70B9\u4E48?",((function (selectednode){
return (function (r){
if(r === true){
cljs.core.println.call(null,r);

return TempService.removetemp2(selectednode.title,selectednode.id).then(((function (selectednode){
return (function (response){
cljs.core.println.call(null,response);

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload",[cljs.core.str(selectednode.id),cljs.core.str("_1_1")].join(''));

return $.messager.alert("\u63D0\u793A",response.data.message);
});})(selectednode))
);
} else {
return null;
}
});})(selectednode))
);
});
mobileweb.core.removemm3 = (function mobileweb$core$removemm3(TempService){
var selectednode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("getSelected");
var parentnode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("find",selectednode._parentId);
return $.messager.confirm("\u63D0\u793A","\u786E\u5B9A\u8981\u5220\u9664\u6B64\u8282\u70B9\u4E48?",((function (selectednode,parentnode){
return (function (r){
if(r === true){
cljs.core.println.call(null,r);

return TempService.removetemp3(parentnode.title,selectednode.title,selectednode.id).then(((function (selectednode,parentnode){
return (function (response){
cljs.core.println.call(null,response);

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload",[cljs.core.str(selectednode.id),cljs.core.str("_1_1")].join(''));

return $.messager.alert("\u63D0\u793A",response.data.message);
});})(selectednode,parentnode))
);
} else {
return null;
}
});})(selectednode,parentnode))
);
});
mobileweb.core.removemm01 = (function mobileweb$core$removemm01(TempService){
var selectednode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("getSelected");
return $.messager.confirm("\u63D0\u793A","\u786E\u5B9A\u8981\u5220\u9664\u6B64\u8282\u70B9\u4E48?",((function (selectednode){
return (function (r){
if(r === true){
cljs.core.println.call(null,r);

return TempService.removemm01(selectednode._id).then(((function (selectednode){
return (function (response){
cljs.core.println.call(null,response);

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload");

return $.messager.alert("\u63D0\u793A",response.data.message);
});})(selectednode))
);
} else {
return null;
}
});})(selectednode))
);
});
mobileweb.core.altertemp3 = (function mobileweb$core$altertemp3(TempService){
var selectednode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("getSelected");
var parentnode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("find",selectednode._parentId);
return $.messager.confirm("\u63D0\u793A","\u662F\u5426\u5F00\u542F\u9009\u9879?",((function (selectednode,parentnode){
return (function (r){
return TempService.altertemp3(parentnode.title,selectednode.title,selectednode.id,r).then(((function (selectednode,parentnode){
return (function (response){
cljs.core.println.call(null,response);

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload",[cljs.core.str(selectednode.id),cljs.core.str("_1_1")].join(''));

return $.messager.alert("\u63D0\u793A",response.data.message);
});})(selectednode,parentnode))
);
});})(selectednode,parentnode))
);
});
mobileweb.core.altermm10 = (function mobileweb$core$altermm10(TempService){
var selectednode = jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("getSelected");
$.messager.prompt("\u63D0\u793A","\u8BF7\u8F93\u5165\u5185\u5BB9:",((function (selectednode){
return (function (r){
if((r == null)){
return null;
} else {
return TempService.altermm10(r,selectednode.id).then(((function (selectednode){
return (function (response){
cljs.core.println.call(null,response.data.message);

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload");

return $.messager.alert("\u63D0\u793A",response.data.message);
});})(selectednode))
);
}
});})(selectednode))
);

return jayq.core.$.call(null,new cljs.core.Keyword(null,".messager-input",".messager-input",1102892718)).val(selectednode.value);
});
mobileweb.core.menushow = (function mobileweb$core$menushow(e,node){
e.preventDefault();

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("select",node._id);

var arr = clojure.string.split.call(null,node._id,/_/);
if(cljs.core._EQ_.call(null,node._id,"0")){
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0","#mm_0",1029258867)).menu("show",(function (){var G__13193 = {};
(G__13193["top"] = (e["pageY"]));

(G__13193["left"] = (e["pageX"]));

return G__13193;
})());
} else {
var G__13197 = cljs.core.second.call(null,arr);
switch (G__13197) {
case "1":
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,arr),"1")){
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1","#mm_1",962371891)).menu("show",(function (){var G__13198 = {};
(G__13198["top"] = (e["pageY"]));

(G__13198["left"] = (e["pageX"]));

return G__13198;
})());
} else {
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1_0","#mm_1_0",-1586755545)).menu("show",(function (){var G__13202 = {};
(G__13202["top"] = (e["pageY"]));

(G__13202["left"] = (e["pageX"]));

return G__13202;
})());
}

break;
case "2":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_2","#mm_2",-11660633)).menu("show",(function (){var G__13206 = {};
(G__13206["top"] = (e["pageY"]));

(G__13206["left"] = (e["pageX"]));

return G__13206;
})());

break;
case "3":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_3","#mm_3",-1327779546)).menu("show",(function (){var G__13210 = {};
(G__13210["top"] = (e["pageY"]));

(G__13210["left"] = (e["pageX"]));

return G__13210;
})());

break;
default:
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0_1","#mm_0_1",-766011765)).menu("show",(function (){var G__13214 = {};
(G__13214["top"] = (e["pageY"]));

(G__13214["left"] = (e["pageX"]));

return G__13214;
})());

}
}
});

//# sourceMappingURL=core.js.map