// Compiled by ClojureScript 1.7.48 {}
goog.provide('mobileweb.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
mobileweb.core.starter = angular.module("starter",["ngRoute","starter.controllers"]);
angular.module("starter").config(["$routeProvider",(function ($routeProvider){
return $routeProvider.when("/",(function (){var G__7733 = {};
(G__7733["controller"] = "AppCtrl");

(G__7733["templateUrl"] = "templates/main.html");

return G__7733;
})()).otherwise((function (){var G__7737 = {};
(G__7737["redirectTo"] = "/");

return G__7737;
})());
})]);
mobileweb.core.starter_controllers = angular.module("starter.controllers",[]);
mobileweb.core.starter_controllers_AppCtrl = ["$scope","$timeout",(function ($scope,$timeout){
cljs.core.println.call(null,"AppCtrl");

($["parser"]).parse();

var o_SHARP_ = $scope;
(o_SHARP_["treedata"] = cljs.core.PersistentArrayMap.EMPTY);

return o_SHARP_;
})];

angular.module("starter.controllers").controller("AppCtrl",mobileweb.core.starter_controllers_AppCtrl);
mobileweb.core.testctl = (function mobileweb$core$testctl($scope){
return alert((33));
});

//# sourceMappingURL=core.js.map