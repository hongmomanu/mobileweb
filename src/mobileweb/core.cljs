(ns mobileweb.core
  (:require [goog.object :as o] [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]])
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )



(enable-console-print!)

(println "Hello world!")




(def.module starter ["ngRoute" "starter.controllers"])

(def.config starter [$routeProvider]
  (-> $routeProvider
    (.when "/" (obj :templateUrl "templates/main.html" :controller "AppCtrl"))

    (.otherwise (obj :redirectTo "/"))))


(def.module starter.controllers [])


(def.controller starter.controllers.AppCtrl [$scope  $timeout]


  (js/alert 1)
  (.parse js/$.parser)
  (println "AppCtrl")
  (! $scope.treedata  {})

  )

(defn testctl  [$scope]
  (js/alert 33)
  )