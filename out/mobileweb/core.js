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
return $routeProvider.when("/",(function (){var G__6421 = {};
(G__6421["controller"] = "AppCtrl");

(G__6421["templateUrl"] = "templates/main.html");

return G__6421;
})()).otherwise((function (){var G__6425 = {};
(G__6425["redirectTo"] = "/");

return G__6425;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_TempService = ["$http",(function ($http){
var G__6429 = {};
(G__6429["addtemp0"] = ((function (G__6429){
return (function (title){
return $http.get([cljs.core.str(mobileweb.core.serverurl_PLUS_),cljs.core.str("temp/addtemp0")].join(''),(function (){var G__6433 = {};
(G__6433["params"] = (function (){var G__6435 = {};
(G__6435["title"] = title);

return G__6435;
})());

return G__6433;
})()).then(((function (G__6429){
return (function (response){
return response;
});})(G__6429))
);
});})(G__6429))
);

return G__6429;
})];

angular.module("starter").service("TempService",mobileweb.core.starter_TempService);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout","$http",(function ($scope,$timeout,$http){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm0-new","#mm0-new",729573036)).click((function (){
return mobileweb.core.newmm0.call(null,$http);
}));

cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__6441 = {};
(G__6441["method"] = "get");

(G__6441["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__6441["onContextMenu"] = mobileweb.core.menushow);

return G__6441;
})());
})];

angular.module("starter.controllers").controller("AppCtrl",mobileweb.core.starter_controllers_AppCtrl);
mobileweb.core.testctl = (function mobileweb$core$testctl($scope){
return alert((33));
});
mobileweb.core.newmm0 = (function mobileweb$core$newmm0($http){
return cljs.core.println.call(null,"2323",$http);
});
mobileweb.core.menushow = (function mobileweb$core$menushow(e,node){
e.preventDefault();

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("select",node._id);

if(cljs.core._EQ_.call(null,node._id,"0")){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0","#mm_0",1029258867)).menu("show",(function (){var G__6462 = {};
(G__6462["top"] = (e["pageY"]));

(G__6462["left"] = (e["pageX"]));

return G__6462;
})());
} else {
var G__6466_6479 = cljs.core.second.call(null,clojure.string.split.call(null,node._id,/_/));
switch (G__6466_6479) {
case "1":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1","#mm_1",962371891)).menu("show",(function (){var G__6467 = {};
(G__6467["top"] = (e["pageY"]));

(G__6467["left"] = (e["pageX"]));

return G__6467;
})());

break;
case "2":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_2","#mm_2",-11660633)).menu("show",(function (){var G__6471 = {};
(G__6471["top"] = (e["pageY"]));

(G__6471["left"] = (e["pageX"]));

return G__6471;
})());

break;
case "3":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_3","#mm_3",-1327779546)).menu("show",(function (){var G__6475 = {};
(G__6475["top"] = (e["pageY"]));

(G__6475["left"] = (e["pageX"]));

return G__6475;
})());

break;
default:

}
}

return console.log(node);
});

//# sourceMappingURL=core.js.map