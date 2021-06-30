(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[826],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||c;return t?n.createElement(f,a(a({ref:r},d),{},{components:t})):n.createElement(f,a({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4433:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return l}});var n=t(2122),o=t(9756),c=(t(7294),t(3905)),a={id:"mutable-reducers",title:"Mutable Reducers",sidebar_label:"Mutable Reducers"},i=void 0,u={unversionedId:"concepts/mutable-reducers",id:"concepts/mutable-reducers",isDocsHomePage:!1,title:"Mutable Reducers",description:"Now that we have come to appreciated the benefits of immutability,",source:"@site/docs/concepts/mutable-reducers.md",sourceDirName:"concepts",slug:"/concepts/mutable-reducers",permalink:"/slices-for-redux/docs/concepts/mutable-reducers",version:"current",frontMatter:{id:"mutable-reducers",title:"Mutable Reducers",sidebar_label:"Mutable Reducers"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/slices-for-redux/docs/introduction/quick-start"},next:{title:"rootSliceGroup",permalink:"/slices-for-redux/docs/api/rootSliceGroup"}},s=[{value:"Example",id:"example",children:[]}],d={toc:s};function l(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Now that we have come to appreciated the benefits of immutability,\nproposing the use of mutable reducers may, at first look, seen as an anti-pattern.",(0,c.kt)("br",{parentName:"p"}),"\n","Please, read why maybe using mutable reducers may not be such a bad idea after all."),(0,c.kt)("p",null,'Most applications create the "root-reducer" with ',(0,c.kt)("a",{href:"https://redux.js.org/api/combinereducers",target:"_blank"},"combineReducers()"),' from Redux. Slice reducers are imported and combined when creating the rootReducer. This is often done in a "reducers.js" file.'),(0,c.kt)("p",null,'Large applications use code splitting to incrementally load code chunks.\nCode inside a dynamically loaded chunk needs a way to add its slice reducers to the rootReducer.\nCurrent solutions involve creating a new "root-reducer" and calling ',(0,c.kt)("a",{href:"https://redux.js.org/api/store#replacereducernextreducer",target:"_blank"},"store.replaceReducer(newReducer)"),"."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Slices for Redux"),'\'s "root-reducer" is a combine reducer that is mutable. Slice reducers can be added to the "root-reducer" as needed. This not only simplifies the code that one writes but actually promotes code splitting to occur in the first place. Importing and combining reducers at startup can be avoided for the majority of slice reducers. Slice reducers can add themselves to the "root-reducer" when their code is loaded.'),(0,c.kt)("p",null,'Only those reducers that are not adding themselves need to be imported and explicitly added to the rootReducer.\nThere is no longer the need to import and modify the "reducers.js" file each time a new reducer is written. This removes the boilerplate code inside the "reducers.js" file.'),(0,c.kt)("p",null,"When slice reducers files are no longer imported in the reducers.js file,\nthe bundler will be able to defer more code, reducing the size of the first chunk."),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("p",null,"Using the ",(0,c.kt)("inlineCode",{parentName:"p"},"addReducers")," function of the ",(0,c.kt)("a",{parentName:"p",href:"/slices-for-redux/docs/api/rootSliceGroup"},(0,c.kt)("inlineCode",{parentName:"a"},"rootSliceGroup")),'\none can add one or more slice reducers to the "root-reducer" before and after the Redux store is created.'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit';\nimport { rootSliceGroup } from 'slices-for-redux';\n\n// Add initial reducers before creating the store\nrootSliceGroup.addReducers({\n  slice1: reducer1,\n});\n// Create the store\nconst store = configureStore({\n  reducer: rootSliceGroup.reducer,\n});\n\n// And later as lazy loaded module are loaded they can add their reducers to the \"root-reducer\".\nrootSliceGroup.addReducers({ [sliceName]: sliceReducer });\n\nrootSliceGroup.addReducers({ slice2: sliceReducer2, slice3: sliceReducer3 });\n")))}l.isMDXComponent=!0}}]);