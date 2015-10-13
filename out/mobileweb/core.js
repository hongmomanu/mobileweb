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
return $routeProvider.when("/",(function (){var G__6612 = {};
(G__6612["controller"] = "AppCtrl");

(G__6612["templateUrl"] = "templates/main.html");

return G__6612;
})()).otherwise((function (){var G__6616 = {};
(G__6616["redirectTo"] = "/");

return G__6616;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_TempService = ["$http",(function ($http){
var G__6620 = {};
(G__6620["addtemp0"] = ((function (G__6620){
return (function (title){
return $http.get([cljs.core.str(mobileweb.core.serverurl_PLUS_),cljs.core.str("temp/addtemp0")].join(''),(function (){var G__6624 = {};
(G__6624["params"] = (function (){var G__6626 = {};
(G__6626["title"] = title);

return G__6626;
})());

return G__6624;
})()).then(((function (G__6620){
return (function (response){
return response;
});})(G__6620))
);
});})(G__6620))
);

return G__6620;
})];

angular.module("starter").service("TempService",mobileweb.core.starter_TempService);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout","$http","TempService",(function ($scope,$timeout,$http,TempService){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm0-new","#mm0-new",729573036)).click((function (){
return mobileweb.core.newmm0.call(null,$http,TempService);
}));

cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__6632 = {};
(G__6632["method"] = "get");

(G__6632["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__6632["onContextMenu"] = mobileweb.core.menushow);

return G__6632;
})());
})];

angular.module("starter.controllers").controller("AppCtrl",mobileweb.core.starter_controllers_AppCtrl);
mobileweb.core.testctl = (function mobileweb$core$testctl($scope){
return alert((33));
});
mobileweb.core.newmm0 = (function mobileweb$core$newmm0($http,TempService){
$.messager.prompt("\u63D0\u793A","\u8BF7\u8F93\u5165\u5185\u5BB9:",(function (r){
if((r == null)){
return null;
} else {
return cljs.core.println.call(null,r);
}
}));

TempService.addtemp0("title").then((function (response){
return cljs.core.println.call(null,"",(2222));
}));

return cljs.core.println.call(null,"2323",TempService);
});
mobileweb.core.menushow = (function mobileweb$core$menushow(e,node){
e.preventDefault();

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("select",node._id);

if(cljs.core._EQ_.call(null,node._id,"0")){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0","#mm_0",1029258867)).menu("show",(function (){var G__6653 = {};
(G__6653["top"] = (e["pageY"]));

(G__6653["left"] = (e["pageX"]));

return G__6653;
})());
} else {
var G__6657_6670 = cljs.core.second.call(null,clojure.string.split.call(null,node._id,/_/));
switch (G__6657_6670) {
case "1":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1","#mm_1",962371891)).menu("show",(function (){var G__6658 = {};
(G__6658["top"] = (e["pageY"]));

(G__6658["left"] = (e["pageX"]));

return G__6658;
})());

break;
case "2":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_2","#mm_2",-11660633)).menu("show",(function (){var G__6662 = {};
(G__6662["top"] = (e["pageY"]));

(G__6662["left"] = (e["pageX"]));

return G__6662;
})());

break;
case "3":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_3","#mm_3",-1327779546)).menu("show",(function (){var G__6666 = {};
(G__6666["top"] = (e["pageY"]));

(G__6666["left"] = (e["pageX"]));

return G__6666;
})());

break;
default:

}
}

return console.log(node);
});

//# sourceMappingURL=core.js.map