webpackJsonp([1],{"4TeK":function(e,t){},"6NKe":function(e,t){},GCZO:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a=n("zL8q"),r=n.n(a),o=n("znjY"),c=n.n(o),i=(n("tvR6"),n("GCZO"),{data:function(){return{preTreeData:[{name:"now loading",nodes:[{name:"now loading",nodes:[],type:"file"}]}],props:{children:"nodes",label:"name"},treeData:this.$store.getters.getTree}},methods:{nodeClick:function(e){e.content&&e.content.length&&(this.$store.commit("SET_DISPLAY_SOURCE_DATA",e),this.$emit("send-click-code"))}}}),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.treeData.length?t("el-tree",{attrs:{data:this.treeData,props:this.props},on:{"node-click":this.nodeClick}}):t("el-tree",{attrs:{data:this.preTreeData,props:this.props}})],1)},staticRenderFns:[]};var l=n("VU/8")(i,u,!1,function(e){n("6NKe")},null,null).exports,d={data:function(){return{}},props:["data"],methods:{sourceCopy:function(){window.getSelection().removeAllRanges();var e=document.createElement("textarea");e.textContent=this.data.content,document.body.appendChild(e),e.select();var t=document.execCommand("copy");document.body.removeChild(e),t?this.$message({message:"Copied!",type:"success"}):this.$message({message:"not supported this function ...",type:"warning"})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-result"},[n("div",{staticClass:"title"},[e._v("\n    "+e._s(e.data.name)+"\n  ")]),e._v(" "),n("el-button",{attrs:{disabled:!this.data.content},on:{click:e.sourceCopy}},[e._v("\n      Copy\n    ")]),e._v(" "),n("div",{staticClass:"source"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.data.content,expression:"data.content"}]},[e._v("      "),n("code",{staticClass:"cpp"}),e._v("    ")])])],1)},staticRenderFns:[]};var h={data:function(){return{searchResultLibs:[]}},props:["searchWord"],components:{SearchResult:n("VU/8")(d,p,!1,function(e){n("taqS")},null,null).exports},methods:{},computed:{getResults:function(){var e=this.$store.getters.searchLibraries(this.searchWord),t=[];if(e)for(var n=0;n<e.length;n++)t.push(e.slice(n,n+4)),n+=4;return t.length?t:[[{name:"empty",content:"no results;"}]]}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.getResults,function(t,s,a){return n("div",{key:a,staticClass:"row"},[n("el-row",{attrs:{gutter:10}},e._l(t,function(e,t,s){return n("div",{key:s,staticClass:"columns"},[n("el-col",{attrs:{span:10}},[n("search-result",{attrs:{data:e}})],1)],1)}))],1)}))},staticRenderFns:[]};var f=n("VU/8")(h,m,!1,function(e){n("iZ1n")},null,null).exports,v={data:function(){return{data:this.$store.getters.getDisplaySourceData}},methods:{sourceCopy:function(){window.getSelection().removeAllRanges();var e=document.createElement("textarea");e.textContent=this.data.content,document.body.appendChild(e),e.select();var t=document.execCommand("copy");document.body.removeChild(e),t?this.$message({message:"Copied!",type:"success"}):this.$message({message:"not supported this function ...",type:"warning"})}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"btn-div"},[t("el-button",{attrs:{disabled:!this.data.content},on:{click:this.sourceCopy}},[this._v("\n      Copy\n    ")])],1),this._v(" "),t("div",{staticClass:"source"},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:this.data.content,expression:"data.content"}]},[this._v("      "),t("code",{staticClass:"cpp"}),this._v("    ")])])])},staticRenderFns:[]};var _={name:"App",data:function(){return{sourcePageVisible:!1,searchWord:"",searchResultLibs:[],sourceData:this.$store.getters.getDisplaySourceData}},components:{RepositoryTree:l,SourcePage:n("VU/8")(v,g,!1,function(e){n("4TeK")},null,null).exports,SearchResults:f},methods:{displayCode:function(){this.sourcePageVisible=!0;var e=setInterval(function(){var t=document.getElementsByClassName("el-dialog__wrapper");t[0].scrollTop&&(t[0].scrollTop=0,clearInterval(e))},10)}},mounted:function(){var e=this,t=a.Loading.service({fullscreen:!0});this.$store.dispatch("SET_TREE").then(function(){t.close()}).catch(function(n){console.log(n),e.$store.commit("ADD_TREE",{name:"Error!",content:"Error!"}),t.close()})},computed:{}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",[n("span",{staticClass:"title"},[e._v("\n        競技プログラミング用C++ライブラリ by sekiya9311\n      ")])]),e._v(" "),n("el-container",[n("el-aside",[n("span",{staticClass:"el-search-text"},[n("el-input",{attrs:{placeholder:"Search"},model:{value:e.searchWord,callback:function(t){e.searchWord=t},expression:"searchWord"}})],1),e._v(" "),n("span",[e._v("\n        Library List\n      ")]),e._v(" "),n("repository-tree",{on:{"send-click-code":e.displayCode}})],1),e._v(" "),n("el-main",[n("search-results",{attrs:{"search-word":e.searchWord}}),e._v(" "),n("el-dialog",{attrs:{title:e.sourceData.name,visible:e.sourcePageVisible},on:{"update:visible":function(t){e.sourcePageVisible=t}}},[n("source-page")],1)],1)],1)],1)],1)},staticRenderFns:[]};var C=n("VU/8")(_,y,!1,function(e){n("kVdu")},null,null).exports,D=n("/ocq");s.default.use(D.a);var E,R=new D.a({routes:[{path:"/",component:f}]}),b=n("//Fk"),S=n.n(b),T=n("bOdI"),A=n.n(T),w=n("NYxO"),x=n("mtWM"),$=n.n(x);s.default.use(w.a);var k=new w.a.Store({state:{tree:[],searchResultData:[],sourceData:{name:"main",content:"int main() {}"},displaySourceData:{name:"empty",content:"empty"}},mutations:(E={},A()(E,"ADD_TREE",function(e,t){e.tree.push(t)}),A()(E,"ADD_RANGE_TREE",function(e,t){t.forEach(function(t){return e.tree.push(t)})}),A()(E,"CLEAR_TREE",function(e){e.tree=[]}),A()(E,"SET_DISPLAY_SOURCE_DATA",function(e,t){e.displaySourceData.name=t.name,e.displaySourceData.content=t.content}),E),actions:A()({},"SET_TREE",function(e){return new S.a(function(t,n){$.a.get("https://script.google.com/macros/s/AKfycbyJVBH-DZ-3d_rhj8tdVgvOFGqFYt43F9WA7B-8E-AlGOD5B6Y/exec").then(function(n){e.commit("ADD_RANGE_TREE",n.data),t()}).catch(function(e){n(e)})})}),getters:{getTree:function(e){return e.tree},getSearchResultData:function(e){return e.searchResultData},getSourceData:function(e){return e.sourceData},getDisplaySourceData:function(e){return e.displaySourceData},searchLibraries:function(e){return function(t){var n=[],s=[];for(e.tree.forEach(function(e){return s.push(e)});s.length>0;){var a=s[s.length-1];s.pop(),0===a.nodes.length?a.content.length&&a.name.indexOf(t)>-1?n.push(a):a.content.indexOf(t)>-1&&n.push(a):a.nodes.forEach(function(e){return s.push(e)})}return n}}}}),V=n("5CJf"),L=n.n(V);s.default.config.productionTip=!1,s.default.use(L.a),s.default.use(r.a,{locale:c.a}),new s.default({el:"#app",router:R,store:k,components:{App:C},template:"<App/>"})},iZ1n:function(e,t){},kVdu:function(e,t){},taqS:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.30ff5f4b266a2ae408bc.js.map