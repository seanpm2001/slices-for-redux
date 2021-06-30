(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[130],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?a.createElement(f,i(i({ref:r},u),{},{components:t})):a.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1371:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var a=t(2122),n=t(9756),o=(t(7294),t(3905)),i={id:"createSliceGroup",title:"createSliceGroup",sidebar_label:"createSliceGroup"},p=void 0,c={unversionedId:"api/createSliceGroup",id:"api/createSliceGroup",isDocsHomePage:!1,title:"createSliceGroup",description:"A function that accepts a name and optionally a parent and creates a SliceGroup object.",source:"@site/docs/api/createSliceGroup.md",sourceDirName:"api",slug:"/api/createSliceGroup",permalink:"/slices-for-redux/docs/api/createSliceGroup",version:"current",frontMatter:{id:"createSliceGroup",title:"createSliceGroup",sidebar_label:"createSliceGroup"},sidebar:"docs",previous:{title:"Slice",permalink:"/slices-for-redux/docs/api/Slice"},next:{title:"SliceGroup",permalink:"/slices-for-redux/docs/api/SliceGroup"}},l=[{value:"Parameters",id:"parameters",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<em>parent</em>",id:"parent",children:[]}]},{value:"Return Value",id:"return-value",children:[]},{value:"Note",id:"note",children:[]}],u={toc:l};function s(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A function that accepts a ",(0,o.kt)("em",{parentName:"p"},"name")," and optionally a ",(0,o.kt)("em",{parentName:"p"},"parent")," and creates a ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup"))," object.\nThe default ",(0,o.kt)("em",{parentName:"p"},"parent")," is the ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"rootSliceGroup")),"."),(0,o.kt)("p",null,"SliceGroups are used to group Slices under some arbitrary named group.\nThis grouping of slices helps organize a large store and eases its navigation\nin the ",(0,o.kt)("a",{href:"https://redux-toolkit.js.org/api/configurestore",target:"_blank"},"Redux Dev Tools"),"."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createSliceGroup")," accepts a single configuration object argument, with the following options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function createSliceGroup({\n  /**\n   * The SliceGroup name.\n   */\n  name: string;\n\n  /**\n   * Optional - The SliceGroup's parent.\n   */\n  parent?: SliceParent | string;\n})\n")),(0,o.kt)("h3",{id:"name"},(0,o.kt)("inlineCode",{parentName:"h3"},"name")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup")),"'s name (or '/' to create a root SliceGroup).",(0,o.kt)("br",{parentName:"p"}),"\n","With the exception of creating a root SliceGroup, the ",(0,o.kt)("em",{parentName:"p"},"name")," cannot contain the path separator '/'.",(0,o.kt)("br",{parentName:"p"}),"\n","The ",(0,o.kt)("em",{parentName:"p"},"name")," is used to build the ",(0,o.kt)("em",{parentName:"p"},"path")," property of the ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup")),"."),(0,o.kt)("h3",{id:"parent"},(0,o.kt)("em",{parentName:"h3"},"parent")),(0,o.kt)("p",null,"optional - The ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup")),"'s parent.",(0,o.kt)("br",{parentName:"p"}),"\n","Default value is: ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"rootSliceGroup")),(0,o.kt)("br",{parentName:"p"}),"\n","When ",(0,o.kt)("em",{parentName:"p"},"parent")," is ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"rootSliceGroup"))," the created ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup")),"'s ",(0,o.kt)("em",{parentName:"p"},"reducer"),' will be added to the "root-reducer" (the reducer of the rootSliceGroup).',(0,o.kt)("br",{parentName:"p"}),"\n","When ",(0,o.kt)("em",{parentName:"p"},"parent")," is a ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceParent"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceParent")),", the created ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup")),"'s ",(0,o.kt)("em",{parentName:"p"},"reducer")," will be added to that parent's reducer.",(0,o.kt)("br",{parentName:"p"}),"\n","When ",(0,o.kt)("em",{parentName:"p"},"parent")," is a string, it represents the parent's path, and the created\n",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup")),"'s reducer will needs to be manually added to that parent's reducer."),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createSliceGroup")," returns a ",(0,o.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/SliceGroup"},(0,o.kt)("inlineCode",{parentName:"a"},"SliceGroup"))," object."),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,"In the rare case (not recommended) where multiple Redux stores are used, create a\nroot SliceGroup for each store with ",(0,o.kt)("inlineCode",{parentName:"p"},"createSliceGroup({ name: '/' })"),"."))}s.isMDXComponent=!0}}]);