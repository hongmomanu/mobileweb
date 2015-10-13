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
return $routeProvider.when("/",(function (){var G__6907 = {};
(G__6907["controller"] = "AppCtrl");

(G__6907["templateUrl"] = "templates/main.html");

return G__6907;
})()).otherwise((function (){var G__6911 = {};
(G__6911["redirectTo"] = "/");

return G__6911;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_TempService = ["$http",(function ($http){
var G__6915 = {};
(G__6915["addtemp1"] = ((function (G__6915){
return (function (text,id){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp1")].join(''),(function (){var G__6919 = {};
(G__6919["id"] = id);

(G__6919["text"] = text);

return G__6919;
})()).then(((function (G__6915){
return (function (response){
return response;
});})(G__6915))
);
});})(G__6915))
);

(G__6915["addtemp0"] = ((function (G__6915){
return (function (title){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp0")].join(''),(function (){var G__6923 = {};
(G__6923["title"] = title);

return G__6923;
})()).then(((function (G__6915){
return (function (response){
return response;
});})(G__6915))
);
});})(G__6915))
);

return G__6915;
})];

angular.module("starter").service("TempService",mobileweb.core.starter_TempService);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout","$http","TempService",(function ($scope,$timeout,$http,TempService){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm0-new","#mm0-new",729573036)).click((function (){
return mobileweb.core.newmm0.call(null,TempService);
}));

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm1-new","#mm1-new",-1378372565)).click((function (){
return mobileweb.core.newmm1.call(null,TempService);
}));

cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__6927 = {};
(G__6927["method"] = "get");

(G__6927["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__6927["onContextMenu"] = mobileweb.core.menushow);

return G__6927;
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

return $.messager.alert("\u63D0\u793A",response.message.call(null));
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

return $.messager.alert("\u63D0\u793A",response.message.call(null));
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
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0","#mm_0",1029258867)).menu("show",(function (){var G__6952 = {};
(G__6952["top"] = (e["pageY"]));

(G__6952["left"] = (e["pageX"]));

return G__6952;
})());
} else {
var G__6956 = cljs.core.second.call(null,arr);
switch (G__6956) {
case "1":
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,arr),"1")){
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1","#mm_1",962371891)).menu("show",(function (){var G__6957 = {};
(G__6957["top"] = (e["pageY"]));

(G__6957["left"] = (e["pageX"]));

return G__6957;
})());
} else {
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1_0","#mm_1_0",-1586755545)).menu("show",(function (){var G__6961 = {};
(G__6961["top"] = (e["pageY"]));

(G__6961["left"] = (e["pageX"]));

return G__6961;
})());
}

break;
case "2":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_2","#mm_2",-11660633)).menu("show",(function (){var G__6965 = {};
(G__6965["top"] = (e["pageY"]));

(G__6965["left"] = (e["pageX"]));

return G__6965;
})());

break;
case "3":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_3","#mm_3",-1327779546)).menu("show",(function (){var G__6969 = {};
(G__6969["top"] = (e["pageY"]));

(G__6969["left"] = (e["pageX"]));

return G__6969;
})());

break;
default:
return "default";

}
}
});

//# sourceMappingURL=core.js.map