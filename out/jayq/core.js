// Compiled by ClojureScript 1.7.48 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(){
var args7171 = [];
var len__5245__auto___7174 = arguments.length;
var i__5246__auto___7175 = (0);
while(true){
if((i__5246__auto___7175 < len__5245__auto___7174)){
args7171.push((arguments[i__5246__auto___7175]));

var G__7176 = (i__5246__auto___7175 + (1));
i__5246__auto___7175 = G__7176;
continue;
} else {
}
break;
}

var G__7173 = args7171.length;
switch (G__7173) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7171.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__4206__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__7179 = null;
var G__7179__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__7179__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__7179 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__7179__2.call(this,self__,k);
case 3:
return G__7179__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7179.cljs$core$IFn$_invoke$arity$2 = G__7179__2;
G__7179.cljs$core$IFn$_invoke$arity$3 = G__7179__3;
return G__7179;
})()
;

jQuery.prototype.apply = (function (self__,args7178){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7178)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(){
var args__5252__auto__ = [];
var len__5245__auto___7185 = arguments.length;
var i__5246__auto___7186 = (0);
while(true){
if((i__5246__auto___7186 < len__5245__auto___7185)){
args__5252__auto__.push((arguments[i__5246__auto___7186]));

var G__7187 = (i__5246__auto___7186 + (1));
i__5246__auto___7186 = G__7187;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__7183){
var vec__7184 = p__7183;
var speed = cljs.core.nth.call(null,vec__7184,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7184,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq7180){
var G__7181 = cljs.core.first.call(null,seq7180);
var seq7180__$1 = cljs.core.next.call(null,seq7180);
var G__7182 = cljs.core.first.call(null,seq7180__$1);
var seq7180__$2 = cljs.core.next.call(null,seq7180__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__7181,G__7182,seq7180__$2);
});
jayq.core.text = (function jayq$core$text(){
var args7188 = [];
var len__5245__auto___7191 = arguments.length;
var i__5246__auto___7192 = (0);
while(true){
if((i__5246__auto___7192 < len__5245__auto___7191)){
args7188.push((arguments[i__5246__auto___7192]));

var G__7193 = (i__5246__auto___7192 + (1));
i__5246__auto___7192 = G__7193;
continue;
} else {
}
break;
}

var G__7190 = args7188.length;
switch (G__7190) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7188.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(){
var args7195 = [];
var len__5245__auto___7198 = arguments.length;
var i__5246__auto___7199 = (0);
while(true){
if((i__5246__auto___7199 < len__5245__auto___7198)){
args7195.push((arguments[i__5246__auto___7199]));

var G__7200 = (i__5246__auto___7199 + (1));
i__5246__auto___7199 = G__7200;
continue;
} else {
}
break;
}

var G__7197 = args7195.length;
switch (G__7197) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7195.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(){
var args7202 = [];
var len__5245__auto___7205 = arguments.length;
var i__5246__auto___7206 = (0);
while(true){
if((i__5246__auto___7206 < len__5245__auto___7205)){
args7202.push((arguments[i__5246__auto___7206]));

var G__7207 = (i__5246__auto___7206 + (1));
i__5246__auto___7206 = G__7207;
continue;
} else {
}
break;
}

var G__7204 = args7202.length;
switch (G__7204) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7202.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(){
var args7209 = [];
var len__5245__auto___7212 = arguments.length;
var i__5246__auto___7213 = (0);
while(true){
if((i__5246__auto___7213 < len__5245__auto___7212)){
args7209.push((arguments[i__5246__auto___7213]));

var G__7214 = (i__5246__auto___7213 + (1));
i__5246__auto___7213 = G__7214;
continue;
} else {
}
break;
}

var G__7211 = args7209.length;
switch (G__7211) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7209.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(){
var args7216 = [];
var len__5245__auto___7219 = arguments.length;
var i__5246__auto___7220 = (0);
while(true){
if((i__5246__auto___7220 < len__5245__auto___7219)){
args7216.push((arguments[i__5246__auto___7220]));

var G__7221 = (i__5246__auto___7220 + (1));
i__5246__auto___7220 = G__7221;
continue;
} else {
}
break;
}

var G__7218 = args7216.length;
switch (G__7218) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7216.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(){
var args7223 = [];
var len__5245__auto___7226 = arguments.length;
var i__5246__auto___7227 = (0);
while(true){
if((i__5246__auto___7227 < len__5245__auto___7226)){
args7223.push((arguments[i__5246__auto___7227]));

var G__7228 = (i__5246__auto___7227 + (1));
i__5246__auto___7227 = G__7228;
continue;
} else {
}
break;
}

var G__7225 = args7223.length;
switch (G__7225) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7223.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(){
var args7230 = [];
var len__5245__auto___7233 = arguments.length;
var i__5246__auto___7234 = (0);
while(true){
if((i__5246__auto___7234 < len__5245__auto___7233)){
args7230.push((arguments[i__5246__auto___7234]));

var G__7235 = (i__5246__auto___7234 + (1));
i__5246__auto___7234 = G__7235;
continue;
} else {
}
break;
}

var G__7232 = args7230.length;
switch (G__7232) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7230.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(){
var args__5252__auto__ = [];
var len__5245__auto___7241 = arguments.length;
var i__5246__auto___7242 = (0);
while(true){
if((i__5246__auto___7242 < len__5245__auto___7241)){
args__5252__auto__.push((arguments[i__5246__auto___7242]));

var G__7243 = (i__5246__auto___7242 + (1));
i__5246__auto___7242 = G__7243;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7239){
var vec__7240 = p__7239;
var speed = cljs.core.nth.call(null,vec__7240,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7240,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq7237){
var G__7238 = cljs.core.first.call(null,seq7237);
var seq7237__$1 = cljs.core.next.call(null,seq7237);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__7238,seq7237__$1);
});
jayq.core.show = (function jayq$core$show(){
var args__5252__auto__ = [];
var len__5245__auto___7248 = arguments.length;
var i__5246__auto___7249 = (0);
while(true){
if((i__5246__auto___7249 < len__5245__auto___7248)){
args__5252__auto__.push((arguments[i__5246__auto___7249]));

var G__7250 = (i__5246__auto___7249 + (1));
i__5246__auto___7249 = G__7250;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7246){
var vec__7247 = p__7246;
var speed = cljs.core.nth.call(null,vec__7247,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7247,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq7244){
var G__7245 = cljs.core.first.call(null,seq7244);
var seq7244__$1 = cljs.core.next.call(null,seq7244);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__7245,seq7244__$1);
});
jayq.core.toggle = (function jayq$core$toggle(){
var args__5252__auto__ = [];
var len__5245__auto___7255 = arguments.length;
var i__5246__auto___7256 = (0);
while(true){
if((i__5246__auto___7256 < len__5245__auto___7255)){
args__5252__auto__.push((arguments[i__5246__auto___7256]));

var G__7257 = (i__5246__auto___7256 + (1));
i__5246__auto___7256 = G__7257;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7253){
var vec__7254 = p__7253;
var speed = cljs.core.nth.call(null,vec__7254,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7254,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq7251){
var G__7252 = cljs.core.first.call(null,seq7251);
var seq7251__$1 = cljs.core.next.call(null,seq7251);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__7252,seq7251__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(){
var args__5252__auto__ = [];
var len__5245__auto___7262 = arguments.length;
var i__5246__auto___7263 = (0);
while(true){
if((i__5246__auto___7263 < len__5245__auto___7262)){
args__5252__auto__.push((arguments[i__5246__auto___7263]));

var G__7264 = (i__5246__auto___7263 + (1));
i__5246__auto___7263 = G__7264;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7260){
var vec__7261 = p__7260;
var speed = cljs.core.nth.call(null,vec__7261,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7261,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq7258){
var G__7259 = cljs.core.first.call(null,seq7258);
var seq7258__$1 = cljs.core.next.call(null,seq7258);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__7259,seq7258__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(){
var args__5252__auto__ = [];
var len__5245__auto___7269 = arguments.length;
var i__5246__auto___7270 = (0);
while(true){
if((i__5246__auto___7270 < len__5245__auto___7269)){
args__5252__auto__.push((arguments[i__5246__auto___7270]));

var G__7271 = (i__5246__auto___7270 + (1));
i__5246__auto___7270 = G__7271;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7267){
var vec__7268 = p__7267;
var speed = cljs.core.nth.call(null,vec__7268,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7268,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq7265){
var G__7266 = cljs.core.first.call(null,seq7265);
var seq7265__$1 = cljs.core.next.call(null,seq7265);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__7266,seq7265__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(){
var args__5252__auto__ = [];
var len__5245__auto___7276 = arguments.length;
var i__5246__auto___7277 = (0);
while(true){
if((i__5246__auto___7277 < len__5245__auto___7276)){
args__5252__auto__.push((arguments[i__5246__auto___7277]));

var G__7278 = (i__5246__auto___7277 + (1));
i__5246__auto___7277 = G__7278;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7274){
var vec__7275 = p__7274;
var speed = cljs.core.nth.call(null,vec__7275,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7275,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq7272){
var G__7273 = cljs.core.first.call(null,seq7272);
var seq7272__$1 = cljs.core.next.call(null,seq7272);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__7273,seq7272__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(){
var args__5252__auto__ = [];
var len__5245__auto___7283 = arguments.length;
var i__5246__auto___7284 = (0);
while(true){
if((i__5246__auto___7284 < len__5245__auto___7283)){
args__5252__auto__.push((arguments[i__5246__auto___7284]));

var G__7285 = (i__5246__auto___7284 + (1));
i__5246__auto___7284 = G__7285;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7281){
var vec__7282 = p__7281;
var speed = cljs.core.nth.call(null,vec__7282,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7282,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq7279){
var G__7280 = cljs.core.first.call(null,seq7279);
var seq7279__$1 = cljs.core.next.call(null,seq7279);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__7280,seq7279__$1);
});
jayq.core.siblings = (function jayq$core$siblings(){
var args7286 = [];
var len__5245__auto___7289 = arguments.length;
var i__5246__auto___7290 = (0);
while(true){
if((i__5246__auto___7290 < len__5245__auto___7289)){
args7286.push((arguments[i__5246__auto___7290]));

var G__7291 = (i__5246__auto___7290 + (1));
i__5246__auto___7290 = G__7291;
continue;
} else {
}
break;
}

var G__7288 = args7286.length;
switch (G__7288) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7286.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(){
var args7293 = [];
var len__5245__auto___7296 = arguments.length;
var i__5246__auto___7297 = (0);
while(true){
if((i__5246__auto___7297 < len__5245__auto___7296)){
args7293.push((arguments[i__5246__auto___7297]));

var G__7298 = (i__5246__auto___7297 + (1));
i__5246__auto___7297 = G__7298;
continue;
} else {
}
break;
}

var G__7295 = args7293.length;
switch (G__7295) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7293.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(){
var args7300 = [];
var len__5245__auto___7303 = arguments.length;
var i__5246__auto___7304 = (0);
while(true){
if((i__5246__auto___7304 < len__5245__auto___7303)){
args7300.push((arguments[i__5246__auto___7304]));

var G__7305 = (i__5246__auto___7304 + (1));
i__5246__auto___7304 = G__7305;
continue;
} else {
}
break;
}

var G__7302 = args7300.length;
switch (G__7302) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7300.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(){
var args7307 = [];
var len__5245__auto___7310 = arguments.length;
var i__5246__auto___7311 = (0);
while(true){
if((i__5246__auto___7311 < len__5245__auto___7310)){
args7307.push((arguments[i__5246__auto___7311]));

var G__7312 = (i__5246__auto___7311 + (1));
i__5246__auto___7311 = G__7312;
continue;
} else {
}
break;
}

var G__7309 = args7307.length;
switch (G__7309) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7307.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(){
var args7314 = [];
var len__5245__auto___7317 = arguments.length;
var i__5246__auto___7318 = (0);
while(true){
if((i__5246__auto___7318 < len__5245__auto___7317)){
args7314.push((arguments[i__5246__auto___7318]));

var G__7319 = (i__5246__auto___7318 + (1));
i__5246__auto___7318 = G__7319;
continue;
} else {
}
break;
}

var G__7316 = args7314.length;
switch (G__7316) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7314.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(){
var args7321 = [];
var len__5245__auto___7324 = arguments.length;
var i__5246__auto___7325 = (0);
while(true){
if((i__5246__auto___7325 < len__5245__auto___7324)){
args7321.push((arguments[i__5246__auto___7325]));

var G__7326 = (i__5246__auto___7325 + (1));
i__5246__auto___7325 = G__7326;
continue;
} else {
}
break;
}

var G__7323 = args7321.length;
switch (G__7323) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7321.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(){
var args7328 = [];
var len__5245__auto___7331 = arguments.length;
var i__5246__auto___7332 = (0);
while(true){
if((i__5246__auto___7332 < len__5245__auto___7331)){
args7328.push((arguments[i__5246__auto___7332]));

var G__7333 = (i__5246__auto___7332 + (1));
i__5246__auto___7332 = G__7333;
continue;
} else {
}
break;
}

var G__7330 = args7328.length;
switch (G__7330) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7328.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(){
var args7335 = [];
var len__5245__auto___7338 = arguments.length;
var i__5246__auto___7339 = (0);
while(true){
if((i__5246__auto___7339 < len__5245__auto___7338)){
args7335.push((arguments[i__5246__auto___7339]));

var G__7340 = (i__5246__auto___7339 + (1));
i__5246__auto___7339 = G__7340;
continue;
} else {
}
break;
}

var G__7337 = args7335.length;
switch (G__7337) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7335.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(){
var args7342 = [];
var len__5245__auto___7345 = arguments.length;
var i__5246__auto___7346 = (0);
while(true){
if((i__5246__auto___7346 < len__5245__auto___7345)){
args7342.push((arguments[i__5246__auto___7346]));

var G__7347 = (i__5246__auto___7346 + (1));
i__5246__auto___7346 = G__7347;
continue;
} else {
}
break;
}

var G__7344 = args7342.length;
switch (G__7344) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7342.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(){
var args7349 = [];
var len__5245__auto___7352 = arguments.length;
var i__5246__auto___7353 = (0);
while(true){
if((i__5246__auto___7353 < len__5245__auto___7352)){
args7349.push((arguments[i__5246__auto___7353]));

var G__7354 = (i__5246__auto___7353 + (1));
i__5246__auto___7353 = G__7354;
continue;
} else {
}
break;
}

var G__7351 = args7349.length;
switch (G__7351) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7349.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(){
var args__5252__auto__ = [];
var len__5245__auto___7361 = arguments.length;
var i__5246__auto___7362 = (0);
while(true){
if((i__5246__auto___7362 < len__5245__auto___7361)){
args__5252__auto__.push((arguments[i__5246__auto___7362]));

var G__7363 = (i__5246__auto___7362 + (1));
i__5246__auto___7362 = G__7363;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__7359){
var vec__7360 = p__7359;
var context = cljs.core.nth.call(null,vec__7360,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq7356){
var G__7357 = cljs.core.first.call(null,seq7356);
var seq7356__$1 = cljs.core.next.call(null,seq7356);
var G__7358 = cljs.core.first.call(null,seq7356__$1);
var seq7356__$2 = cljs.core.next.call(null,seq7356__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__7357,G__7358,seq7356__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(){
var args7364 = [];
var len__5245__auto___7367 = arguments.length;
var i__5246__auto___7368 = (0);
while(true){
if((i__5246__auto___7368 < len__5245__auto___7367)){
args7364.push((arguments[i__5246__auto___7368]));

var G__7369 = (i__5246__auto___7368 + (1));
i__5246__auto___7368 = G__7369;
continue;
} else {
}
break;
}

var G__7366 = args7364.length;
switch (G__7366) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7364.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(){
var args7371 = [];
var len__5245__auto___7374 = arguments.length;
var i__5246__auto___7375 = (0);
while(true){
if((i__5246__auto___7375 < len__5245__auto___7374)){
args7371.push((arguments[i__5246__auto___7375]));

var G__7376 = (i__5246__auto___7375 + (1));
i__5246__auto___7375 = G__7376;
continue;
} else {
}
break;
}

var G__7373 = args7371.length;
switch (G__7373) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7371.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(){
var args7378 = [];
var len__5245__auto___7381 = arguments.length;
var i__5246__auto___7382 = (0);
while(true){
if((i__5246__auto___7382 < len__5245__auto___7381)){
args7378.push((arguments[i__5246__auto___7382]));

var G__7383 = (i__5246__auto___7382 + (1));
i__5246__auto___7382 = G__7383;
continue;
} else {
}
break;
}

var G__7380 = args7378.length;
switch (G__7380) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7378.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(){
var args7385 = [];
var len__5245__auto___7388 = arguments.length;
var i__5246__auto___7389 = (0);
while(true){
if((i__5246__auto___7389 < len__5245__auto___7388)){
args7385.push((arguments[i__5246__auto___7389]));

var G__7390 = (i__5246__auto___7389 + (1));
i__5246__auto___7389 = G__7390;
continue;
} else {
}
break;
}

var G__7387 = args7385.length;
switch (G__7387) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7385.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__7394){
var map__7397 = p__7394;
var map__7397__$1 = ((((!((map__7397 == null)))?((((map__7397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7397):map__7397);
var request = map__7397__$1;
var data = cljs.core.get.call(null,map__7397__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__7397__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__7397,map__7397__$1,request,data,contentType){
return (function (p1__7393_SHARP_){
if(cljs.core.truth_((function (){var and__4194__auto__ = ct;
if(cljs.core.truth_(and__4194__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__4194__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__7393_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__7393_SHARP_;
}
});})(ct,map__7397,map__7397__$1,request,data,contentType))
.call(null,((function (ct,map__7397,map__7397__$1,request,data,contentType){
return (function (p1__7392_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__7392_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__7392_SHARP_;
}
});})(ct,map__7397,map__7397__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(){
var args7399 = [];
var len__5245__auto___7402 = arguments.length;
var i__5246__auto___7403 = (0);
while(true){
if((i__5246__auto___7403 < len__5245__auto___7402)){
args7399.push((arguments[i__5246__auto___7403]));

var G__7404 = (i__5246__auto___7403 + (1));
i__5246__auto___7403 = G__7404;
continue;
} else {
}
break;
}

var G__7401 = args7399.length;
switch (G__7401) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7399.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__7406,content,callback){
var vec__7408 = p__7406;
var method = cljs.core.nth.call(null,vec__7408,(0),null);
var uri = cljs.core.nth.call(null,vec__7408,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(){
var args__5252__auto__ = [];
var len__5245__auto___7414 = arguments.length;
var i__5246__auto___7415 = (0);
while(true){
if((i__5246__auto___7415 < len__5245__auto___7414)){
args__5252__auto__.push((arguments[i__5246__auto___7415]));

var G__7416 = (i__5246__auto___7415 + (1));
i__5246__auto___7415 = G__7416;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__7412){
var vec__7413 = p__7412;
var func = cljs.core.nth.call(null,vec__7413,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq7409){
var G__7410 = cljs.core.first.call(null,seq7409);
var seq7409__$1 = cljs.core.next.call(null,seq7409);
var G__7411 = cljs.core.first.call(null,seq7409__$1);
var seq7409__$2 = cljs.core.next.call(null,seq7409__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__7410,G__7411,seq7409__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(){
var args__5252__auto__ = [];
var len__5245__auto___7422 = arguments.length;
var i__5246__auto___7423 = (0);
while(true){
if((i__5246__auto___7423 < len__5245__auto___7422)){
args__5252__auto__.push((arguments[i__5246__auto___7423]));

var G__7424 = (i__5246__auto___7423 + (1));
i__5246__auto___7423 = G__7424;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7420){
var vec__7421 = p__7420;
var sel = cljs.core.nth.call(null,vec__7421,(0),null);
var data = cljs.core.nth.call(null,vec__7421,(1),null);
var handler = cljs.core.nth.call(null,vec__7421,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq7417){
var G__7418 = cljs.core.first.call(null,seq7417);
var seq7417__$1 = cljs.core.next.call(null,seq7417);
var G__7419 = cljs.core.first.call(null,seq7417__$1);
var seq7417__$2 = cljs.core.next.call(null,seq7417__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__7418,G__7419,seq7417__$2);
});
jayq.core.one = (function jayq$core$one(){
var args__5252__auto__ = [];
var len__5245__auto___7430 = arguments.length;
var i__5246__auto___7431 = (0);
while(true){
if((i__5246__auto___7431 < len__5245__auto___7430)){
args__5252__auto__.push((arguments[i__5246__auto___7431]));

var G__7432 = (i__5246__auto___7431 + (1));
i__5246__auto___7431 = G__7432;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7428){
var vec__7429 = p__7428;
var sel = cljs.core.nth.call(null,vec__7429,(0),null);
var data = cljs.core.nth.call(null,vec__7429,(1),null);
var handler = cljs.core.nth.call(null,vec__7429,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq7425){
var G__7426 = cljs.core.first.call(null,seq7425);
var seq7425__$1 = cljs.core.next.call(null,seq7425);
var G__7427 = cljs.core.first.call(null,seq7425__$1);
var seq7425__$2 = cljs.core.next.call(null,seq7425__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__7426,G__7427,seq7425__$2);
});
jayq.core.off = (function jayq$core$off(){
var args__5252__auto__ = [];
var len__5245__auto___7438 = arguments.length;
var i__5246__auto___7439 = (0);
while(true){
if((i__5246__auto___7439 < len__5245__auto___7438)){
args__5252__auto__.push((arguments[i__5246__auto___7439]));

var G__7440 = (i__5246__auto___7439 + (1));
i__5246__auto___7439 = G__7440;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7436){
var vec__7437 = p__7436;
var sel = cljs.core.nth.call(null,vec__7437,(0),null);
var handler = cljs.core.nth.call(null,vec__7437,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq7433){
var G__7434 = cljs.core.first.call(null,seq7433);
var seq7433__$1 = cljs.core.next.call(null,seq7433);
var G__7435 = cljs.core.first.call(null,seq7433__$1);
var seq7433__$2 = cljs.core.next.call(null,seq7433__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__7434,G__7435,seq7433__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(){
var args7441 = [];
var len__5245__auto___7444 = arguments.length;
var i__5246__auto___7445 = (0);
while(true){
if((i__5246__auto___7445 < len__5245__auto___7444)){
args7441.push((arguments[i__5246__auto___7445]));

var G__7446 = (i__5246__auto___7445 + (1));
i__5246__auto___7445 = G__7446;
continue;
} else {
}
break;
}

var G__7443 = args7441.length;
switch (G__7443) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7441.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(){
var args7448 = [];
var len__5245__auto___7451 = arguments.length;
var i__5246__auto___7452 = (0);
while(true){
if((i__5246__auto___7452 < len__5245__auto___7451)){
args7448.push((arguments[i__5246__auto___7452]));

var G__7453 = (i__5246__auto___7452 + (1));
i__5246__auto___7452 = G__7453;
continue;
} else {
}
break;
}

var G__7450 = args7448.length;
switch (G__7450) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7448.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(){
var args7455 = [];
var len__5245__auto___7458 = arguments.length;
var i__5246__auto___7459 = (0);
while(true){
if((i__5246__auto___7459 < len__5245__auto___7458)){
args7455.push((arguments[i__5246__auto___7459]));

var G__7460 = (i__5246__auto___7459 + (1));
i__5246__auto___7459 = G__7460;
continue;
} else {
}
break;
}

var G__7457 = args7455.length;
switch (G__7457) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7455.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(){
var args7462 = [];
var len__5245__auto___7465 = arguments.length;
var i__5246__auto___7466 = (0);
while(true){
if((i__5246__auto___7466 < len__5245__auto___7465)){
args7462.push((arguments[i__5246__auto___7466]));

var G__7467 = (i__5246__auto___7466 + (1));
i__5246__auto___7466 = G__7467;
continue;
} else {
}
break;
}

var G__7464 = args7462.length;
switch (G__7464) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7462.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(){
var args7469 = [];
var len__5245__auto___7472 = arguments.length;
var i__5246__auto___7473 = (0);
while(true){
if((i__5246__auto___7473 < len__5245__auto___7472)){
args7469.push((arguments[i__5246__auto___7473]));

var G__7474 = (i__5246__auto___7473 + (1));
i__5246__auto___7473 = G__7474;
continue;
} else {
}
break;
}

var G__7471 = args7469.length;
switch (G__7471) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7469.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(){
var args7476 = [];
var len__5245__auto___7479 = arguments.length;
var i__5246__auto___7480 = (0);
while(true){
if((i__5246__auto___7480 < len__5245__auto___7479)){
args7476.push((arguments[i__5246__auto___7480]));

var G__7481 = (i__5246__auto___7480 + (1));
i__5246__auto___7480 = G__7481;
continue;
} else {
}
break;
}

var G__7478 = args7476.length;
switch (G__7478) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7476.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(){
var args__5252__auto__ = [];
var len__5245__auto___7485 = arguments.length;
var i__5246__auto___7486 = (0);
while(true){
if((i__5246__auto___7486 < len__5245__auto___7485)){
args__5252__auto__.push((arguments[i__5246__auto___7486]));

var G__7487 = (i__5246__auto___7486 + (1));
i__5246__auto___7486 = G__7487;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq7483){
var G__7484 = cljs.core.first.call(null,seq7483);
var seq7483__$1 = cljs.core.next.call(null,seq7483);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__7484,seq7483__$1);
});
jayq.core.fail = (function jayq$core$fail(){
var args__5252__auto__ = [];
var len__5245__auto___7490 = arguments.length;
var i__5246__auto___7491 = (0);
while(true){
if((i__5246__auto___7491 < len__5245__auto___7490)){
args__5252__auto__.push((arguments[i__5246__auto___7491]));

var G__7492 = (i__5246__auto___7491 + (1));
i__5246__auto___7491 = G__7492;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq7488){
var G__7489 = cljs.core.first.call(null,seq7488);
var seq7488__$1 = cljs.core.next.call(null,seq7488);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__7489,seq7488__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(){
var args7493 = [];
var len__5245__auto___7496 = arguments.length;
var i__5246__auto___7497 = (0);
while(true){
if((i__5246__auto___7497 < len__5245__auto___7496)){
args7493.push((arguments[i__5246__auto___7497]));

var G__7498 = (i__5246__auto___7497 + (1));
i__5246__auto___7497 = G__7498;
continue;
} else {
}
break;
}

var G__7495 = args7493.length;
switch (G__7495) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7493.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(){
var args__5252__auto__ = [];
var len__5245__auto___7502 = arguments.length;
var i__5246__auto___7503 = (0);
while(true){
if((i__5246__auto___7503 < len__5245__auto___7502)){
args__5252__auto__.push((arguments[i__5246__auto___7503]));

var G__7504 = (i__5246__auto___7503 + (1));
i__5246__auto___7503 = G__7504;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq7500){
var G__7501 = cljs.core.first.call(null,seq7500);
var seq7500__$1 = cljs.core.next.call(null,seq7500);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__7501,seq7500__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(){
var args7505 = [];
var len__5245__auto___7508 = arguments.length;
var i__5246__auto___7509 = (0);
while(true){
if((i__5246__auto___7509 < len__5245__auto___7508)){
args7505.push((arguments[i__5246__auto___7509]));

var G__7510 = (i__5246__auto___7509 + (1));
i__5246__auto___7509 = G__7510;
continue;
} else {
}
break;
}

var G__7507 = args7505.length;
switch (G__7507) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7505.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map