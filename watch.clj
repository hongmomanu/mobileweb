(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'mobileweb.core
   :output-to "out/main.js"})