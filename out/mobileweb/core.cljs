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
                  (.post (str serverurl "temp/addtemp0")(obj  :title  title  ))
                  (.then (fn [response] response))))
    :addtemp1 (fn [text id]
                (-> $http
                  (.post (str serverurl "temp/addtemp1")(obj  :text  text :id id  ))
                  (.then (fn [response] response))))
    :addtemp2 (fn [keytext text id]
                (-> $http
                  (.post (str serverurl "temp/addtemp2")(obj :keytext keytext  :text  text :id id  ))
                  (.then (fn [response] response))))

    :removetemp2 (fn [ text id]
                (-> $http
                  (.post (str serverurl "temp/removetemp2")(obj   :text  text :id id  ))
                  (.then (fn [response] response))))


    ))

(def.controller starter.controllers.AppCtrl [$scope  $timeout  $http TempService]

  (.click ($ :#mm0-new) (fn [] (newmm0  TempService)))

  (.click ($ :#mm1-new) (fn [] (newmm1  TempService)))

  (.click ($ :#mm2-new) (fn [] (newmm2  TempService)))

  (.click ($ :#mm2-remove) (fn [] (removemm2  TempService)))

  (println "AppCtrl")
  (.parse js/$.parser)
  (.treegrid ($ :#temptree) (obj :url (str serverurl "temp/gettemptree") :onContextMenu menushow  :method "get" ))
  ;(! $scope.treedata  {})

  )

(defn testctl  [$scope]
  (js/alert 33)
  )

(defn newmm0 [ TempService]

  #_(let [
         selectednode (.treegrid ($ :#temptree) "getSelected")
         ]
    (println selectednode)

    )

  (.prompt $.messager "提示" "请输入内容:"
    (fn [r] (when-not (nil? r) (do (println r)
                                 (-> TempService
                                   (.addtemp0 r)
                                   (.then (fn [response]
                                            (.treegrid ($ :#temptree) "reload")
                                            (.alert $.messager "提示" response.message)

                                            )))
                                 )
                                                 )))



  )

(defn newmm1 [ TempService]

  (let [
         selectednode (.treegrid ($ :#temptree) "getSelected")
         ]

    (.prompt $.messager "提示" "请输入内容:"
        (fn [r] (when-not (nil? r) (do (println r)
                                     (-> TempService
                                       (.addtemp1 r selectednode.id)
                                       (.then (fn [response]
                                                (.treegrid ($ :#temptree) "reload" (str selectednode.id "_1_1"))
                                                (.alert $.messager "提示" response.message)

                                                )))
                                     )
                  )))
    )

  )

(defn newmm2 [ TempService]

  (let [
         selectednode (.treegrid ($ :#temptree) "getSelected")
         ]

    (.prompt $.messager "提示" "请输入内容:"
        (fn [r] (when-not (nil? r) (do (println r)
                                     (-> TempService
                                       (.addtemp2 selectednode.title r selectednode.id)
                                       (.then (fn [response]
                                                (println response.data.message)
                                                (.treegrid ($ :#temptree) "reload" (str selectednode.id "_1_1"))
                                                (.alert $.messager "提示" response.data.message)

                                                )))
                                     )
                  )))
    )

  )

(defn removemm2 [ TempService]

  (let [
         selectednode (.treegrid ($ :#temptree) "getSelected")
         ]

    (println selectednode)
    (.confirm $.messager "提示" "确定要删除此节点么?"
        (fn [r] (when-not (nil? r) (do (println r)
                                     (-> TempService
                                       (.removetemp2  selectednode.title selectednode.id )
                                       (.then (fn [response]
                                                (println response)
                                                (.treegrid ($ :#temptree) "reload" (str selectednode.id "_1_1"))
                                                (.alert $.messager "提示" response.message)
                                                )))
                                     )
                  )))
    )





  )


(defn menushow [e node]

  (.preventDefault e)
  (.treegrid ($ :#temptree) "select" node._id)
  (let [
         arr (clojure.string/split node._id #"_")
         ]
    (if (= node._id "0")
      (.menu ($ :#mm_0) "show" (obj :left e.pageX :top e.pageY))
      (case (second arr)
        "1" (if (= (last arr ) "1")(.menu ($ :#mm_1) "show" (obj :left e.pageX :top e.pageY))
              (.menu ($ :#mm_1_0) "show" (obj :left e.pageX :top e.pageY))
              )
        "2" (.menu ($ :#mm_2) "show" (obj :left e.pageX :top e.pageY))
        "3" (.menu ($ :#mm_3) "show" (obj :left e.pageX :top e.pageY))
        "default"
        )
      )

    )
  ;(println (second (clojure.string/split node._id #"_")))



  )