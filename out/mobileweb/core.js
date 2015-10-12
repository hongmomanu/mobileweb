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
return $routeProvider.when("/",(function (){var G__6531 = {};
(G__6531["controller"] = "AppCtrl");

(G__6531["templateUrl"] = "templates/main.html");

return G__6531;
})()).otherwise((function (){var G__6535 = {};
(G__6535["redirectTo"] = "/");

return G__6535;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout",(function ($scope,$timeout){
cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

return jayq.core.$.call(null,new cljs.core.Keyword(null,"#temptree","#temptree",-516572480)).treegrid((function (){var G__6539 = {};
(G__6539["method"] = "get");

(G__6539["url"] = [cljs.core.str(mobileweb.core.serverurl),cljs.core.str("temp/gettemptree")].join(''));

(G__6539["onContextMenu"] = mobileweb.core.menushow);

return G__6539;
})());
})];

angular.module("starter.controllers").controller("AppCtrl",mobileweb.core.starter_controllers_AppCtrl);
mobileweb.core.testctl = (function mobileweb$core$testctl($scope){
return alert((33));
});
mobileweb.core.menushow = (function mobileweb$core$menushow(e,node){
console.log("haha");

e.preventDefault();

jayq.core.$.call(null,new cljs.core.Keyword(null,"#mm","#mm",-219537863)).menu("show",(function (){var G__6547 = {};
(G__6547["top"] = (e["pageY"]));

(G__6547["left"] = (e["pageX"]));

return G__6547;
})());

return console.log(node);
});

//# sourceMappingURL=core.js.map