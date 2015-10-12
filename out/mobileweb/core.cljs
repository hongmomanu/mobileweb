(ns mobileweb.core
  (:require [goog.object :as o] [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]

        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]

               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )



(enable-console-print!)

(println "Hello world!")


(def serverurl "http://192.168.2.100:3000/")




(def.module starter ["ngRoute" "starter.controllers"])

(def.config starter [$routeProvider]
  (-> $routeProvider
    (.when "/" (obj :templateUrl "templates/main.html" :controller "AppCtrl"))

    (.otherwise (obj :redirectTo "/"))))


(def.module starter.controllers [])


(def.controller starter.controllers.AppCtrl [$scope  $timeout]

  (println "AppCtrl")
  (.parse js/$.parser)
  (.treegrid ($ :#temptree) (obj :url (str serverurl "temp/gettemptree") :onContextMenu menushow  :method "get" ))
  ;(! $scope.treedata  {})

  )

(defn testctl  [$scope]
  (js/alert 33)
  )

(defn menushow [e node]

  (js/console.log "haha")
  (.preventDefault e)
  ;(.tree ($ :#temptree) "select" node.target)

  (.menu ($ :#mm) "show" (obj :left e.pageX :top e.pageY))

  (js/console.log node)
  )