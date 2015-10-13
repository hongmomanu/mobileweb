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
return $routeProvider.when("/",(function (){var G__6461 = {};
(G__6461["controller"] = "AppCtrl");

(G__6461["templateUrl"] = "templates/main.html");

return G__6461;
})()).otherwise((function (){var G__6465 = {};
(G__6465["redirectTo"] = "/");

return G__6465;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_TempService = ["$http",(function ($http){
var G__6469 = {};
(G__6469["addtemp0"] = ((function (G__6469){
return (function (title){
return $http.get([cljs.core.str(mobileweb.core.serverurl_PLUS_),cljs.core.str("temp/addtemp0")].join(''),(function (){var G__6473 = {};
(G__6473["params"] = (function (){var G__6475 = {};
(G__6475["title"] = title);

return G__6475;
})());

return G__6473;
})()).then(((function (G__6469){
return (function (response){
return response;
});})(G__6469))
);
});})(G__6469))
);

return G__6469;
})];

angular.module("starter").service("TempService",mobileweb.core.starter_TempService);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout","$http","TempService",(function ($scope,$timeout,$http,TempService){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm0-new","#mm0-new",729573036)).click((function (){
return mobileweb.core.newmm0.call(null,$http,TempService);
}));

cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__6481 = {};
(G__6481["method"] = "get");

(G__6481["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__6481["onContextMenu"] = mobileweb.core.menushow);

return G__6481;
})());
})];

angular.module("starter.controllers").controller("AppCtrl",mobileweb.core.starter_controllers_AppCtrl);
mobileweb.core.testctl = (function mobileweb$core$testctl($scope){
return alert((33));
});
mobileweb.core.newmm0 = (function mobileweb$core$newmm0($http,TempService){
TempService.addtemp0("title").then((function (response){
return cljs.core.println.call(null,"",(2222));
}));

return cljs.core.println.call(null,"2323",TempService);
});
mobileweb.core.menushow = (function mobileweb$core$menushow(e,node){
e.preventDefault();

jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid("select",node._id);

if(cljs.core._EQ_.call(null,node._id,"0")){
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_0","#mm_0",1029258867)).menu("show",(function (){var G__6502 = {};
(G__6502["top"] = (e["pageY"]));

(G__6502["left"] = (e["pageX"]));

return G__6502;
})());
} else {
var G__6506_6519 = cljs.core.second.call(null,clojure.string.split.call(null,node._id,/_/));
switch (G__6506_6519) {
case "1":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_1","#mm_1",962371891)).menu("show",(function (){var G__6507 = {};
(G__6507["top"] = (e["pageY"]));

(G__6507["left"] = (e["pageX"]));

return G__6507;
})());

break;
case "2":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_2","#mm_2",-11660633)).menu("show",(function (){var G__6511 = {};
(G__6511["top"] = (e["pageY"]));

(G__6511["left"] = (e["pageX"]));

return G__6511;
})());

break;
case "3":
jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm_3","#mm_3",-1327779546)).menu("show",(function (){var G__6515 = {};
(G__6515["top"] = (e["pageY"]));

(G__6515["left"] = (e["pageX"]));

return G__6515;
})());

break;
default:

}
}

return console.log(node);
});

//# sourceMappingURL=core.js.map