// Compiled by ClojureScript 1.7.48 {}
goog.provide('mobile_web.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
mobile_web.core.starter_controllers = angular.module("starter.controllers",[]);
mobile_web.core.starter_controllers_AppCtrl = ["$scope","$ionicModal","$timeout",(function ($scope,$ionicModal,$timeout){
cljs.core.println.call(null,"AppCtrl");

return mobile_web.core._BANG_.call(null,($scope["treedata"]),cljs.core.PersistentArrayMap.EMPTY);
})];

angular.module("starter.controllers").controller("AppCtrl",mobile_web.core.starter_controllers_AppCtrl);

//# sourceMappingURL=core.js.map