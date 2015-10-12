(ns mobile-web.core
  (:require [goog.object :as o] [clojure.browser.repl :as repl])
  (:use-macros ;[purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )



(enable-console-print!)

(println "Hello world!")


;(def.module starter [])

#_(def.config starter [$routeProvider]
  (-> $routeProvider
    (.when "/" (obj :templateUrl "index.html" :controller "AppCtrl"))

    (.otherwise (obj :redirectTo "/"))))


(def.module starter.controllers [])


(def.controller starter.controllers.AppCtrl [$scope $ionicModal $timeout]


  (println "AppCtrl")
  (! $scope.treedata  {})

  )