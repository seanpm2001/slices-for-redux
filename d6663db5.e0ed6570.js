(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),i=r(6),a=(r(0),r(108)),c={id:"SliceGroup",title:"SliceGroup",sidebar_label:"SliceGroup",hide_title:!0},o=[{value:"Properties",id:"properties",children:[{value:"<code>addReducers</code>",id:"addreducers",children:[]},{value:"<code>path</code>",id:"path",children:[]},{value:"<code>reducer</code>",id:"reducer",children:[]}]},{value:"Note",id:"note",children:[]}],l={id:"api/SliceGroup",title:"SliceGroup",description:"# `SliceGroup`",source:"@site/docs/api/SliceGroup.md",permalink:"/slices-for-redux/docs/api/SliceGroup",sidebar_label:"SliceGroup",sidebar:"docs",previous:{title:"createSliceGroup",permalink:"/slices-for-redux/docs/api/createSliceGroup"},next:{title:"SliceParent Interface",permalink:"/slices-for-redux/docs/api/SliceParentInterface"}},p={rightToc:o,metadata:l},d="wrapper";function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)(d,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"slicegroup"},Object(a.b)("inlineCode",{parentName:"h1"},"SliceGroup")),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroup")," allows grouping several Slices under a given name.\nA ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroup")," is similar in concept to a Folder, where the Slices are the files.\nInstead of having all the Slices created directly under the root, one can groups\nSlices by some arbitrary chosen group names."),Object(a.b)("p",null,"This can make it easier to navigate in the Redux Dev Tools, a large redux state object with 30+ Slices.\nSliceGroups like folders can be nested.\nAvoid deep nesting, it may have the opposite effect, making it difficult to find the slices in the store state object."),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroup")," is an object that looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"{\n    addReducers: AddReducers,\n    path: string,\n    reducer: Reducer,\n}\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"addreducers"},Object(a.b)("inlineCode",{parentName:"h3"},"addReducers")),Object(a.b)("p",null,"A function that children Slices or SliceGroups use to add their reducer to\nthis SliceGroup's ",Object(a.b)("inlineCode",{parentName:"p"},"reducer"),"."),Object(a.b)("h3",{id:"path"},Object(a.b)("inlineCode",{parentName:"h3"},"path")),Object(a.b)("p",null,"A string expressing the location of this ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroup"),"."),Object(a.b)("h3",{id:"reducer"},Object(a.b)("inlineCode",{parentName:"h3"},"reducer")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroup"),"'s reducer.",Object(a.b)("br",{parentName:"p"}),"\n",'It is a "mutable combine reducer".',Object(a.b)("br",{parentName:"p"}),"\n","Use the ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroup"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"addReducers")," function to add reducers to it."),Object(a.b)("h2",{id:"note"},"Note"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"SliceGroup")," is a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceParentInterface"}),Object(a.b)("inlineCode",{parentName:"a"},"SliceParent"))," that exposes its reducer."))}u.isMDXComponent=!0},108:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u}));var n=r(0),i=r.n(n),a=i.a.createContext({}),c=function(e){var t=i.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},o=function(e){var t=c(e.components);return i.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,s=d[o+"."+u]||d[u]||p[u]||a;return r?i.a.createElement(s,Object.assign({},{ref:t},l,{components:r})):i.a.createElement(s,Object.assign({},{ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:n,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);