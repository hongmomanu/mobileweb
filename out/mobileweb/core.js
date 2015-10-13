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
return $routeProvider.when("/",(function (){var G__8294 = {};
(G__8294["controller"] = "AppCtrl");

(G__8294["templateUrl"] = "templates/main.html");

return G__8294;
})()).otherwise((function (){var G__8298 = {};
(G__8298["redirectTo"] = "/");

return G__8298;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_TempService = ["$http",(function ($http){
var G__8302 = {};
(G__8302["addtemp1"] = ((function (G__8302){
return (function (text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp1")].join(''),(function (){var G__8306 = {};
(G__8306["id"] = id);

(G__8306["text"] = text);

return G__8306;
})()).then(((function (G__8302){
return (function (response){
return response;
});})(G__8302))
);
});})(G__8302))
);

(G__8302["addtemp2"] = ((function (G__8302){
return (function (keytext,text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp2")].join(''),(function (){var G__8310 = {};
(G__8310["keytext"] = keytext);

(G__8310["id"] = id);

(G__8310["text"] = text);

return G__8310;
})()).then(((function (G__8302){
return (function (response){
return response;
});})(G__8302))
);
});})(G__8302))
);

(G__8302["addtemp0"] = ((function (G__8302){
return (function (title){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp0")].join(''),(function (){var G__8314 = {};
(G__8314["title"] = title);

return G__8314;
})()).then(((function (G__8302){
return (function (response){
return response;
});})(G__8302))
);
});})(G__8302))
);

(G__8302["removetemp2"] = ((function (G__8302){
return (function (text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/removetemp2")].join(''),(function (){var G__8318 = {};
(G__8318["id"] = id);

(G__8318["text"] = text);

return G__8318;
})()).then(((function (G__8302){
return (function (response){
return response;
});})(G__8302))
);
});})(G__8302))
);

return G__8302;
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

cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__8322 = {};
(G__8322["method"] = "get");

(G__8322["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__8322["onContextMenu"] = mobileweb.core.menushow);

return G__8322;
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

return $.messager.alert("\u63D0\u793A",response.message);
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

return $.messager.alert("\u63D0\u793A",response.message);
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
if((r == null)){
return null;
} else {
cljs.core.println.call(null,r);

return TempService.removetemp2(selectednode.title,selectednode.id).then(((function (selectednode){
return (function (response){
cljs.core.println.call(null,response);

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("reload",[cljs.core.str(selectednode.id),cljs.core.str("_1_1")].join(''));

return $.messager.alert("\u63D0\u793A",response.message);
});})(selectednode))
);
}
});})(selectednode))
);
});
mobileweb.core.menushow = (function mobileweb$core$menushow(e,node){
e.preventDefault();

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("select",node._id);

var arr = clojure.string.split.call(null,node._id,/_/);
if(cljs.core._EQ_.call(null,node._id,"0")){
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0","#mm_0",1029258867)).menu("show",(function (){var G__8347 = {};
(G__8347["top"] = (e["pageY"]));

(G__8347["left"] = (e["pageX"]));

return G__8347;
})());
} else {
var G__8351 = cljs.core.second.call(null,arr);
switch (G__8351) {
case "1":
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,arr),"1")){
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1","#mm_1",962371891)).menu("show",(function (){var G__8352 = {};
(G__8352["top"] = (e["pageY"]));

(G__8352["left"] = (e["pageX"]));

return G__8352;
})());
} else {
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1_0","#mm_1_0",-1586755545)).menu("show",(function (){var G__8356 = {};
(G__8356["top"] = (e["pageY"]));

(G__8356["left"] = (e["pageX"]));

return G__8356;
})());
}

break;
case "2":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_2","#mm_2",-11660633)).menu("show",(function (){var G__8360 = {};
(G__8360["top"] = (e["pageY"]));

(G__8360["left"] = (e["pageX"]));

return G__8360;
})());

break;
case "3":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_3","#mm_3",-1327779546)).menu("show",(function (){var G__8364 = {};
(G__8364["top"] = (e["pageY"]));

(G__8364["left"] = (e["pageX"]));

return G__8364;
})());

break;
default:
return "default";

}
}
});

//# sourceMappingURL=core.js.map