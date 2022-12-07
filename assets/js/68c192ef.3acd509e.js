"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[827],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const i={title:"Custom fields",slug:"/custom-fields",tags:["content-type-builder","plugins"]},l="Custom fields",o={unversionedId:"custom-fields",id:"custom-fields",title:"Custom fields",description:"Summary",source:"@site/docs/custom-fields.md",sourceDirName:".",slug:"/custom-fields",permalink:"/custom-fields",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/custom-fields.md",tags:[{label:"content-type-builder",permalink:"/tags/content-type-builder"},{label:"plugins",permalink:"/tags/plugins"}],version:"current",frontMatter:{title:"Custom fields",slug:"/custom-fields",tags:["content-type-builder","plugins"]},sidebar:"docs",previous:{title:"Example",permalink:"/example"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Detailed design",id:"detailed-design",level:2},{value:"Server",id:"server",level:3},{value:"Admin",id:"admin",level:3},{value:"Packaging",id:"packaging",level:3},{value:"Example",id:"example",level:3},{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-fields"},"Custom fields"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Custom fields provide a way to replace the inputs of existing Strapi types to improve the content editing experience."),(0,n.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,n.kt)("p",null,"A custom field needs to be registered in both the admin and server."),(0,n.kt)("h3",{id:"server"},"Server"),(0,n.kt)("p",null,"To register a custom field on the server, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html#registering-a-custom-field-on-the-server"},"documentation"),"."),(0,n.kt)("p",null,"The custom field will be added to Strapi during the server ",(0,n.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/server.html#register"},"register lifecycle"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"type: customField")," saved on the schema.json for a content-type or component is converted to the underlying Strapi data type by calling the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi/blob/a8f807d27ebc9c8b9b335e885154a06c60a896ae/packages/core/strapi/lib/Strapi.js#L395"},"convertCustomFieldType function")," as soon as the app starts during the ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," lifecycle, right after all custom fields have been loaded."),(0,n.kt)("h3",{id:"admin"},"Admin"),(0,n.kt)("p",null,"To register a custom field to the admin panel, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html#registering-a-custom-field-in-the-admin-panel"},"documentation"),"."),(0,n.kt)("p",null,"A custom field being saved on a content-type or component will have it\u2019s underlying data type converted from the underlying data type to ",(0,n.kt)("inlineCode",{parentName:"p"},"type: customField")," just before save in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi/blob/33debd57010667a3fc5dfa343a673206cfb956e1/packages/core/content-type-builder/admin/src/components/DataManagerProvider/utils/cleanData.js#L97-L100"},"formatAttributes function")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"cleanData")," util"),(0,n.kt)("h3",{id:"packaging"},"Packaging"),(0,n.kt)("p",null,"A custom field can be registered in either a Strapi application or Strapi plugin. However, they can only be shared through plugins by publishing the package on npm."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi/blob/main/packages/plugins/color-picker/"},"Color Picker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WalkingPizza/strapi-plugin-shopify-fields/"},"Shopify plugin"))),(0,n.kt)("h2",{id:"tradeoffs"},"Tradeoffs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We do not yet offer the ability to create a custom database type in Strapi."),(0,n.kt)("li",{parentName:"ul"},"When extending a custom field\u2019s base and advanced forms in the Content-type Builder, it is not yet possible to import custom input components."),(0,n.kt)("li",{parentName:"ul"},"We do not allow custom fields to use the relation, component, dynamic zone and media types.")),(0,n.kt)("h2",{id:"alternatives"},"Alternatives"),(0,n.kt)("p",null,"We consider making special packages for Custom fields but :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Custom fields would not have been able to access other features from the plugin API. While that is not always required, it also enables custom fields that do need it to implement more advanced behaviors. For example, a custom field can also use injection zones if needed."),(0,n.kt)("li",{parentName:"ul"},"Introducing a new custom field type of package would have required a new loader in Strapi, and a new section and review processes on the marketplace, which would have made the feature more complex to ship."),(0,n.kt)("li",{parentName:"ul"},"The overkill aspect of the plugin API for a simple custom field could be mitigated by adding a new plugin generator that only created the files required for a custom field.")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strapi.io/custom-fields"},"Custom Fields page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html"},"Docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strapi/rfcs/pull/40"},"non-technical RFC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strapi/rfcs/pull/42"},"technical RFC"))))}d.isMDXComponent=!0}}]);