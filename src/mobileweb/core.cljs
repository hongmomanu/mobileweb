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


(def.service starter.TempService [$http]
  (obj
    :addtemp0 (fn [title]
                (-> $http
                  (.get (str serverurl+"temp/addtemp0")(obj :params {:title  title } ))
                  (.then (fn [response] response))))))

(def.controller starter.controllers.AppCtrl [$scope  $timeout  $http]

  (.click ($ :#mm0-new) (fn [] (newmm0 $http)))
  (println "AppCtrl")
  (.parse js/$.parser)
  (.treegrid ($ :#temptree) (obj :url (str serverurl "temp/gettemptree") :onContextMenu menushow  :method "get" ))
  ;(! $scope.treedata  {})

  )

(defn testctl  [$scope]
  (js/alert 33)
  )

(defn newmm0 [$http]
  (println  "2323" $http)
  )
(defn menushow [e node]

  (.preventDefault e)
  (.treegrid ($ :#temptree) "select" node._id)
  ;(println (second (clojure.string/split node._id #"_")))
  (if (= node._id "0")
    (.menu ($ :#mm_0) "show" (obj :left e.pageX :top e.pageY))
    (case (second (clojure.string/split node._id #"_"))
      "1" (.menu ($ :#mm_1) "show" (obj :left e.pageX :top e.pageY))
      "2" (.menu ($ :#mm_2) "show" (obj :left e.pageX :top e.pageY))
      "3" (.menu ($ :#mm_3) "show" (obj :left e.pageX :top e.pageY))
      "default"
      )
    )


  ;(.menu ($ :#mm_0) "show" (obj :left e.pageX :top e.pageY))

  (js/console.log node)
  )