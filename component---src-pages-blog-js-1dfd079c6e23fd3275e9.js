(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[7],{7383:function(e,t,a){"use strict";var r=a(7294),i=a(1554),n=a(5444),o=a(1621);t.Z=function(e){var t=e.posts.map((function(e){var t=e.frontmatter,a=e.fields,i=e.excerpt,n=e.timeToRead,o=t.title,l=t.tags,m=t.date,c=t.description,d=a.slug;return r.createElement(s,{key:d,tags:l,title:o,date:m,slug:d,timeToRead:n,description:c,excerpt:i})}));return r.createElement(l,null,t)};var s=function(e){var t=e.title,a=e.date,i=e.timeToRead,s=e.tags,l=e.excerpt,g=e.description,u=e.slug;return r.createElement(m,null,r.createElement(o.Z,{tags:s,isListPage:!1}),r.createElement(c,null,r.createElement(n.Link,{to:u},t)),r.createElement(d,{dangerouslySetInnerHTML:{__html:g||l}}),r.createElement(p,null,r.createElement("span",null,a),r.createElement("span",null,i," mins")))},l=i.ZP.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),m=i.ZP.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"rmizj4-1"})(["position:relative;display:flex;flex-direction:column;padding:1.5rem;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);border-radius:8px;&:hover{background-color:rgba(255,255,255,0.5);}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),c=i.ZP.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"rmizj4-2"})(['line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;}']),d=i.ZP.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"rmizj4-3"})(["margin-top:auto;font-size:var(--size-400);"]),p=i.ZP.div.withConfig({displayName:"post-list__PostListMeta",componentId:"rmizj4-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},1621:function(e,t,a){"use strict";var r=a(7294),i=a(1554),n=a(5444);t.Z=function(e){var t=e.tags;return r.createElement("div",null,t&&t.map((function(e){return r.createElement(o,{key:e},r.createElement(n.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var o=i.ZP.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},223:function(e,t,a){"use strict";a.r(t);var r=a(7294),i=a(5444),n=a(1397),o=a(7383),s=a(1554),l=(0,s.ZP)(i.Link).withConfig({displayName:"blog___StyledLink",componentId:"sc-1ak27tl-0"})(["margin-top:var(--size-400);color:inherit;text-transform:uppercase;"]);t.default=function(e){var t=e.data.allMarkdownRemark.nodes;return r.createElement(n.Z,{title:"Blog"},r.createElement(m,null,r.createElement("h1",null,"Blog"),r.createElement(l,{to:"/tags"},"모든 태그 보기")),r.createElement(o.Z,{posts:t}))};var m=s.ZP.div.withConfig({displayName:"blog__HeaderWrapper",componentId:"sc-1ak27tl-1"})(["display:flex;flex-direction:column;margin-top:var(--size-900);margin-bottom:var(--size-700);h1{max-width:none;}"])}}]);
//# sourceMappingURL=component---src-pages-blog-js-1dfd079c6e23fd3275e9.js.map