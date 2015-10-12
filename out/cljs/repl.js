// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6376_6390 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6377_6391 = null;
var count__6378_6392 = (0);
var i__6379_6393 = (0);
while(true){
if((i__6379_6393 < count__6378_6392)){
var f_6394 = cljs.core._nth.call(null,chunk__6377_6391,i__6379_6393);
cljs.core.println.call(null,"  ",f_6394);

var G__6395 = seq__6376_6390;
var G__6396 = chunk__6377_6391;
var G__6397 = count__6378_6392;
var G__6398 = (i__6379_6393 + (1));
seq__6376_6390 = G__6395;
chunk__6377_6391 = G__6396;
count__6378_6392 = G__6397;
i__6379_6393 = G__6398;
continue;
} else {
var temp__4425__auto___6399 = cljs.core.seq.call(null,seq__6376_6390);
if(temp__4425__auto___6399){
var seq__6376_6400__$1 = temp__4425__auto___6399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6376_6400__$1)){
var c__4990__auto___6401 = cljs.core.chunk_first.call(null,seq__6376_6400__$1);
var G__6402 = cljs.core.chunk_rest.call(null,seq__6376_6400__$1);
var G__6403 = c__4990__auto___6401;
var G__6404 = cljs.core.count.call(null,c__4990__auto___6401);
var G__6405 = (0);
seq__6376_6390 = G__6402;
chunk__6377_6391 = G__6403;
count__6378_6392 = G__6404;
i__6379_6393 = G__6405;
continue;
} else {
var f_6406 = cljs.core.first.call(null,seq__6376_6400__$1);
cljs.core.println.call(null,"  ",f_6406);

var G__6407 = cljs.core.next.call(null,seq__6376_6400__$1);
var G__6408 = null;
var G__6409 = (0);
var G__6410 = (0);
seq__6376_6390 = G__6407;
chunk__6377_6391 = G__6408;
count__6378_6392 = G__6409;
i__6379_6393 = G__6410;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6411 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4206__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6411);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6411)))?cljs.core.second.call(null,arglists_6411):arglists_6411));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6380 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6381 = null;
var count__6382 = (0);
var i__6383 = (0);
while(true){
if((i__6383 < count__6382)){
var vec__6384 = cljs.core._nth.call(null,chunk__6381,i__6383);
var name = cljs.core.nth.call(null,vec__6384,(0),null);
var map__6385 = cljs.core.nth.call(null,vec__6384,(1),null);
var map__6385__$1 = ((((!((map__6385 == null)))?((((map__6385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6385):map__6385);
var doc = cljs.core.get.call(null,map__6385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6412 = seq__6380;
var G__6413 = chunk__6381;
var G__6414 = count__6382;
var G__6415 = (i__6383 + (1));
seq__6380 = G__6412;
chunk__6381 = G__6413;
count__6382 = G__6414;
i__6383 = G__6415;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6380);
if(temp__4425__auto__){
var seq__6380__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6380__$1)){
var c__4990__auto__ = cljs.core.chunk_first.call(null,seq__6380__$1);
var G__6416 = cljs.core.chunk_rest.call(null,seq__6380__$1);
var G__6417 = c__4990__auto__;
var G__6418 = cljs.core.count.call(null,c__4990__auto__);
var G__6419 = (0);
seq__6380 = G__6416;
chunk__6381 = G__6417;
count__6382 = G__6418;
i__6383 = G__6419;
continue;
} else {
var vec__6387 = cljs.core.first.call(null,seq__6380__$1);
var name = cljs.core.nth.call(null,vec__6387,(0),null);
var map__6388 = cljs.core.nth.call(null,vec__6387,(1),null);
var map__6388__$1 = ((((!((map__6388 == null)))?((((map__6388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6388):map__6388);
var doc = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6420 = cljs.core.next.call(null,seq__6380__$1);
var G__6421 = null;
var G__6422 = (0);
var G__6423 = (0);
seq__6380 = G__6420;
chunk__6381 = G__6421;
count__6382 = G__6422;
i__6383 = G__6423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map