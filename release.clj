(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:output-to "out/main.js"
   ;;:externs ["lib/ionic/js/ionic.bundle.js"]
   :optimizations :advanced})

(System/exit 0)