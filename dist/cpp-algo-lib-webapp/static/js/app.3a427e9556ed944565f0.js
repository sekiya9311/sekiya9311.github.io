webpackJsonp([1],{"6NKe":function(e,t){},GCZO:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s=n("zL8q"),r=n.n(s),o=n("znjY"),i=n.n(o),c=(n("tvR6"),n("GCZO"),{data:function(){return{preTreeData:[{name:"now loading",nodes:[{name:"now loading",nodes:[],type:"file"}]}],props:{children:"nodes",label:"name"},treeData:this.$store.getters.getTree}},methods:{nodeClick:function(e){e.content&&e.content.length&&(this.$store.commit("SET_DISPLAY_SOURCE_DATA",e),this.$emit("send-click-code"))}}}),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.treeData.length?t("el-tree",{attrs:{data:this.treeData,props:this.props},on:{"node-click":this.nodeClick}}):t("el-tree",{attrs:{data:this.preTreeData,props:this.props}})],1)},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(e){n("6NKe")},null,null).exports,d={data:function(){return{}},props:["data"],methods:{sourceCopy:function(){window.getSelection().removeAllRanges();var e=document.createElement("textarea");e.textContent=this.data.content,document.body.appendChild(e),e.select();var t=document.execCommand("copy");document.body.removeChild(e),t?this.$message({message:"Copied!",type:"success"}):this.$message({message:"not supported this function ...",type:"warning"})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-result"},[n("div",{staticClass:"title"},[e._v("\n    "+e._s(e.data.name)+"\n  ")]),e._v(" "),n("el-button",{attrs:{disabled:!this.data.content},on:{click:e.sourceCopy}},[e._v("\n      Copy\n    ")]),e._v(" "),n("div",{staticClass:"source"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.data.content,expression:"data.content"}]},[e._v("      "),n("code",{staticClass:"cpp"}),e._v("    ")])])],1)},staticRenderFns:[]};var h={data:function(){return{searchResultLibs:[]}},props:["searchWord"],components:{SearchResult:n("VU/8")(d,p,!1,function(e){n("taqS")},null,null).exports},methods:{},computed:{getResults:function(){var e=this.$store.getters.searchLibraries(this.searchWord),t=[];if(e)for(var n=0;n<e.length;n++)t.push(e.slice(n,n+4)),n+=4;return t.length?t:[[{name:"empty",content:"no results;"}]]}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.getResults,function(t,a,s){return n("div",{key:s,staticClass:"row"},[n("el-row",{attrs:{gutter:10}},e._l(t,function(e,t,a){return n("div",{key:a,staticClass:"columns"},[n("el-col",{attrs:{span:10}},[n("search-result",{attrs:{data:e}})],1)],1)}))],1)}))},staticRenderFns:[]};var f=n("VU/8")(h,m,!1,function(e){n("iZ1n")},null,null).exports,v={data:function(){return{data:this.$store.getters.getDisplaySourceData}},methods:{sourceCopy:function(){window.getSelection().removeAllRanges();var e=document.createElement("textarea");e.textContent=this.data.content,document.body.appendChild(e),e.select();var t=document.execCommand("copy");document.body.removeChild(e),t?this.$message({message:"Copied!",type:"success"}):this.$message({message:"not supported this function ...",type:"warning"})}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title"},[n("span",[e._v("\n      "+e._s(e.data.name)+"\n    ")])]),e._v(" "),n("div",{staticClass:"btn-div"},[n("el-button",{attrs:{disabled:!this.data.content},on:{click:e.sourceCopy}},[e._v("\n      Copy\n    ")])],1),e._v(" "),n("div",{staticClass:"source"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.data.content,expression:"data.content"}]},[e._v("      "),n("code",{staticClass:"cpp"}),e._v("    ")])])])},staticRenderFns:[]};var _={name:"App",data:function(){return{sourcePageVisible:!1,searchWord:"",searchResultLibs:[]}},components:{RepositoryTree:l,SourcePage:n("VU/8")(v,g,!1,function(e){n("P2XL")},null,null).exports,SearchResults:f},methods:{displayCode:function(){this.sourcePageVisible=!0;var e=setInterval(function(){var t=document.getElementsByClassName("el-dialog__wrapper");t[0].scrollTop&&(t[0].scrollTop=0,clearInterval(e))},10)}},mounted:function(){var e=this,t=s.Loading.service({fullscreen:!0});this.$store.dispatch("SET_TREE").then(function(){t.close()}).catch(function(n){console.log(n),e.$store.commit("ADD_TREE",{name:"Error!",content:"Error!"}),t.close()})},computed:{}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-container is-vertical",attrs:{id:"app"}},[n("div",{staticClass:"el-header",attrs:{id:"header"}},[e._v("\n    競技プログラミング用C++ライブラリ by sekiya9311\n    "),n("el-input",{model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}})],1),e._v(" "),n("div",{staticClass:"el-container"},[n("div",{staticClass:"el-aside",attrs:{id:"sidebar"}},[e._v("\n      Library List\n      "),n("repository-tree",{on:{"send-click-code":e.displayCode}})],1),e._v(" "),n("div",{staticClass:"el-main",attrs:{id:"main"}},[n("search-results",{attrs:{"search-word":e.searchWord}}),e._v(" "),n("el-dialog",{attrs:{title:"Source Page",visible:e.sourcePageVisible},on:{"update:visible":function(t){e.sourcePageVisible=t}}},[n("source-page")],1)],1)])])},staticRenderFns:[]};var y=n("VU/8")(_,C,!1,function(e){n("qKR4")},null,null).exports,E=n("/ocq");a.default.use(E.a);var D,R=new E.a({routes:[{path:"/",component:f}]}),b=n("//Fk"),S=n.n(b),A=n("bOdI"),T=n.n(A),w=n("NYxO"),x=n("mtWM"),$=n.n(x);a.default.use(w.a);var k=new w.a.Store({state:{tree:[],searchResultData:[],sourceData:{name:"main",content:"int main() {}"},displaySourceData:{name:"empty",content:"empty"}},mutations:(D={},T()(D,"ADD_TREE",function(e,t){e.tree.push(t)}),T()(D,"ADD_RANGE_TREE",function(e,t){t.forEach(function(t){return e.tree.push(t)})}),T()(D,"CLEAR_TREE",function(e){e.tree=[]}),T()(D,"SET_DISPLAY_SOURCE_DATA",function(e,t){e.displaySourceData.name=t.name,e.displaySourceData.content=t.content}),D),actions:T()({},"SET_TREE",function(e){return new S.a(function(t,n){$.a.get("https://script.google.com/macros/s/AKfycbyJVBH-DZ-3d_rhj8tdVgvOFGqFYt43F9WA7B-8E-AlGOD5B6Y/exec").then(function(n){e.commit("ADD_RANGE_TREE",n.data),t()}).catch(function(e){n(e)})})}),getters:{getTree:function(e){return e.tree},getSearchResultData:function(e){return e.searchResultData},getSourceData:function(e){return e.sourceData},getDisplaySourceData:function(e){return e.displaySourceData},searchLibraries:function(e){return function(t){var n=[],a=[];for(e.tree.forEach(function(e){return a.push(e)});a.length>0;){var s=a[a.length-1];a.pop(),0===s.nodes.length?s.content.length&&s.name.indexOf(t)>-1?n.push(s):s.content.indexOf(t)>-1&&n.push(s):s.nodes.forEach(function(e){return a.push(e)})}return n}}}}),L=n("5CJf"),O=n.n(L);a.default.config.productionTip=!1,a.default.use(O.a),a.default.use(r.a,{locale:i.a}),new a.default({el:"#app",router:R,store:k,components:{App:y},template:"<App/>"})},P2XL:function(e,t){},iZ1n:function(e,t){},qKR4:function(e,t){},taqS:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3a427e9556ed944565f0.js.map