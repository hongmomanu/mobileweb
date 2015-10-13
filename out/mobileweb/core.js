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
return $routeProvider.when("/",(function (){var G__6570 = {};
(G__6570["controller"] = "AppCtrl");

(G__6570["templateUrl"] = "templates/main.html");

return G__6570;
})()).otherwise((function (){var G__6574 = {};
(G__6574["redirectTo"] = "/");

return G__6574;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_TempService = ["$http",(function ($http){
var G__6578 = {};
(G__6578["addtemp0"] = ((function (G__6578){
return (function (title){
return $http.post([cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/addtemp0")].join(''),(function (){var G__6582 = {};
(G__6582["title"] = title);

return G__6582;
})()).then(((function (G__6578){
return (function (response){
return response;
});})(G__6578))
);
});})(G__6578))
);

return G__6578;
})];

angular.module("starter").service("TempService",mobileweb.core.starter_TempService);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout","$http","TempService",(function ($scope,$timeout,$http,TempService){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm0-new","#mm0-new",729573036)).click((function (){
return mobileweb.core.newmm0.call(null,$http,TempService);
}));

cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__6586 = {};
(G__6586["method"] = "get");

(G__6586["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__6586["onContextMenu"] = mobileweb.core.menushow);

return G__6586;
})());
})];

angular.module("starter.controllers").controller("AppCtrl",mobileweb.core.starter_controllers_AppCtrl);
mobileweb.core.testctl = (function mobileweb$core$testctl($scope){
return alert((33));
});
mobileweb.core.newmm0 = (function mobileweb$core$newmm0($http,TempService){
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
mobileweb.core.menushow = (function mobileweb$core$menushow(e,node){
e.preventDefault();

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("select",node._id);

var arr = clojure.string.split.call(null,node._id,/_/);
if(cljs.core._EQ_.call(null,node._id,"0")){
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0","#mm_0",1029258867)).menu("show",(function (){var G__6611 = {};
(G__6611["top"] = (e["pageY"]));

(G__6611["left"] = (e["pageX"]));

return G__6611;
})());
} else {
var G__6615 = cljs.core.second.call(null,arr);
switch (G__6615) {
case "1":
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,arr),"1")){
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1","#mm_1",962371891)).menu("show",(function (){var G__6616 = {};
(G__6616["top"] = (e["pageY"]));

(G__6616["left"] = (e["pageX"]));

return G__6616;
})());
} else {
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1_0","#mm_1_0",-1586755545)).menu("show",(function (){var G__6620 = {};
(G__6620["top"] = (e["pageY"]));

(G__6620["left"] = (e["pageX"]));

return G__6620;
})());
}

break;
case "2":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_2","#mm_2",-11660633)).menu("show",(function (){var G__6624 = {};
(G__6624["top"] = (e["pageY"]));

(G__6624["left"] = (e["pageX"]));

return G__6624;
})());

break;
case "3":
return jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_3","#mm_3",-1327779546)).menu("show",(function (){var G__6628 = {};
(G__6628["top"] = (e["pageY"]));

(G__6628["left"] = (e["pageX"]));

return G__6628;
})());

break;
default:
return "default";

}
}
});

//# sourceMappingURL=core.js.map