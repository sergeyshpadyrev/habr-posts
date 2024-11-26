"use strict";(self["webpackChunkhabr_web"]=self["webpackChunkhabr_web"]||[]).push([[1231],{98921:(t,e,s)=>{s.d(e,{Z:()=>g});var a=s(66252),i=s(56612);const r={class:"tm-companies-rating"},o=["innerHTML"],l={class:"tm-companies-rating__rating"};function n(t,e,s,n,u,m){const p=(0,a.up)("TMEntityImage"),_=(0,a.up)("router-link"),h=(0,a.up)("TMBlock");return(0,a.wg)(),(0,a.j4)(h,{title:t.msg("TOP_COMPANIES_BLOCK_TITLE")},{default:(0,a.w5)((()=>[(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.companies,((e,s)=>((0,a.wg)(),(0,a.j4)(_,{key:s,class:"tm-companies-rating__item",to:{name:"ARTICLES_LIST_BY_COMPANY",params:{name:e.alias,hl:t.$route.params.hl}}},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{alias:e.alias,class:"tm-companies-rating__avatar",image:e.imageUrl,size:36,type:"company"},null,8,["alias","image"]),(0,a._)("span",{class:"tm-companies-rating__name",innerHTML:e.titleHtml},null,8,o),(0,a._)("span",l,(0,i.zw)(e.statistics.rating),1)])),_:2},1032,["to"])))),128))])])),footer:(0,a.w5)((()=>[(0,a.Wm)(_,{class:"tm-block-extralink",to:{name:"COMPANIES"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.msg("COMPANIES_ALL")),1)])),_:1})])),_:1},8,["title"])}var u=s(13088),m=s(61602);const p={name:"TMCompaniesRatingBlock",components:{TMBlock:u.Z,TMEntityImage:m.Z},props:{companies:{type:Array,default:null}}};var _=s(83744);const h=(0,_.Z)(p,[["render",n]]),g=h},9246:(t,e,s)=>{s.d(e,{Z:()=>H});var a=s(66252),i=s(56612);const r=["innerHTML"],o={key:0,class:"tm-hubs-list__sorting-panel"},l={class:"tm-hubs-list"},n={class:"tm-hubs-list__hub"},u={class:"tm-hubs-list__hub-rating"},m={class:"tm-hubs-list__hub-subscribers"};function p(t,e,s,p,_,h){const g=(0,a.up)("TMPlaceholder"),c=(0,a.up)("TMEmptyPlaceholder"),S=(0,a.up)("TMNavigationSorting"),d=(0,a.up)("TMHubSnippet"),T=(0,a.up)("TMSvgImg"),b=(0,a.up)("TMPagination");return(0,a.wg)(),(0,a.iD)("div",null,[t.isLoading?((0,a.wg)(),(0,a.j4)(g,{key:0,class:"tm-hubs-list__placeholder",times:7,type:"categories"})):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[t.showEmptyPlaceholder?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[(0,a.WI)(t.$slots,"empty",{},(()=>[(0,a._)("span",{innerHTML:t.msg("SEARCH_EMPTY_HUBS")},null,8,r)]))])),_:3})):(0,a.kq)("",!0),t.showEmptyPlaceholder?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[t.isDesktop&&t.sortingOptions.length?((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(S,{options:t.sortingOptions,sort:t.defaultSort},null,8,["options","sort"])])):(0,a.kq)("",!0),(0,a._)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.currentHubsList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"tm-hubs-list__category-wrapper"},[(0,a._)("div",n,[(0,a.Wm)(d,{hub:e,"show-common-tags":t.isDesktop},null,8,["hub","show-common-tags"]),(0,a._)("div",u,[t.isMobile?((0,a.wg)(),(0,a.j4)(T,{key:0,id:"rating",class:"tm-hubs-list__hub-icon tm-hubs-list__hub-icon_rating"})):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,i.zw)(e.statistics.rating),1)]),(0,a._)("div",m,[t.isMobile?((0,a.wg)(),(0,a.j4)(T,{key:0,id:"subscribers",class:"tm-hubs-list__hub-icon tm-hubs-list__hub-icon_subscribers"})):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,i.zw)(t.abbreviateNumber(e.statistics.subscribersCount)),1)])])])))),128))]),(0,a.Wm)(b,{"route-name":t.paginationRouteName,"total-pages":t.currentPagesCount},null,8,["route-name","total-pages"])],64))],64))])}var _=s(33907),h=s(22782);const g={class:"tm-hub"},c={class:"tm-hub__info"},S=["innerHTML"],d=["title"],T=["innerHTML"],b={key:0,class:"tm-hubs-list__hub-tags"};function w(t,e,s,r,o,l){const n=(0,a.up)("TMEntityImage"),u=(0,a.up)("TMHubLink"),m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(u,{class:"tm-hub__userpic-link",hub:s.hub},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{alias:s.hub.alias,image:s.hub.imageUrl,type:"hub"},null,8,["alias","image"])])),_:1},8,["hub"]),(0,a._)("div",c,[(0,a._)("div",null,[(0,a.Wm)(u,{class:(0,i.C_)(["tm-hub__title",{"tm-hub__title_subscribed":s.hub.relatedData&&s.hub.relatedData.isSubscribed}]),hub:s.hub},{default:(0,a.w5)((()=>[(0,a._)("span",{innerHTML:s.hub.titleHtml},null,8,S)])),_:1},8,["class","hub"]),s.hub.isProfiled?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"tm-hub__profiled",title:t.msg("PROFILED_HUB")}," * ",8,d)):(0,a.kq)("",!0)]),(0,a._)("div",{class:"tm-hub__description",innerHTML:s.hub.descriptionHtml},null,8,T),s.showCommonTags&&s.hub.commonTags&&s.hub.commonTags.length?((0,a.wg)(),(0,a.iD)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.hub.commonTags,(t=>((0,a.wg)(),(0,a.j4)(m,{key:t,class:"tm-hubs-list__hub-tag",to:l.searchTagRoute(t)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t),1)])),_:2},1032,["to"])))),128))])):(0,a.kq)("",!0)])])}var L=s(61602),A=s(39289);const E={name:"TMHubSnippet",components:{TMHubLink:A.Z,TMEntityImage:L.Z},props:{hub:{type:Object,required:!0},showCommonTags:{type:Boolean}},computed:{...(0,_.Se)("i18n",["langOptions"])},methods:{searchTagRoute(t){return{name:"SEARCH_QUERY_RESULTS",query:{q:`[${t}]`,target_type:"posts",order:"relevance"}}}}};var O=s(83744);const N=(0,O.Z)(E,[["render",w]]),v=N;var I=s(90662),k=s(30761),y=s(66866),P=s(46206),R=s(85725),C=s(87934);const M={name:"TMHubsListPresenter",components:{TMEmptyPlaceholder:h.Z,TMHubSnippet:v,TMNavigationSorting:I.Z,TMPagination:k.Z,TMPlaceholder:y.Z,TMSvgImg:P.Z},props:{sortingOptions:{type:Array,default:()=>[]},defaultSort:{type:String,default:"rating"}},data(){return{routeKey:(0,R.Z)(this.$route)}},computed:{...(0,_.rn)("hubs",["hubRefs","hubIds","pagesCount","isLoading"]),...(0,_.Se)("global",["isMobile","isDesktop"]),currentHubsList(){const t=this.hubIds[this.routeKey];return t&&Array.isArray(t)?t.map((t=>this.hubRefs[t])):[]},currentPagesCount(){return this.pagesCount[this.routeKey]},paginationRouteName(){return-1!==this.$route.name.indexOf("_PAGES")?this.$route.name:`${this.$route.name}_PAGES`},showEmptyPlaceholder(){return this.currentHubsList&&!this.currentHubsList.length||!this.currentHubsList}},methods:{abbreviateNumber(t){return(0,C.O)(t)}}},f=(0,O.Z)(M,[["render",p]]),H=f},40603:(t,e,s)=>{s.d(e,{Z:()=>p});var a=s(66252),i=s(56612);const r={class:"tm-navigation-panel"},o={key:0,class:"tm-navigation-panel__title"};function l(t,e,s,l,n,u){return(0,a.wg)(),(0,a.iD)("div",r,[s.title?((0,a.wg)(),(0,a.iD)("div",o,(0,i.zw)(s.title),1)):(0,a.kq)("",!0),(0,a.WI)(t.$slots,"default")])}const n={name:"TMNavigationPanel",props:{title:{type:String,default:null}}};var u=s(83744);const m=(0,u.Z)(n,[["render",l]]),p=m},24205:(t,e,s)=>{s.r(e),s.d(e,{default:()=>k});var a=s(66252),i=s(56612);const r={class:"tm-page__top","data-test-id":"page-top"},o={key:0,class:"tm-suggest-button",href:"https://tmtm.ru/services/corpblog/"},l={key:0,class:"tm-navigation-filter"};function n(t,e,s,n,u,m){const p=(0,a.up)("TMAdfoxBanner"),_=(0,a.up)("router-link"),h=(0,a.up)("TMSectionName"),g=(0,a.up)("TMTabs"),c=(0,a.up)("TMRssButton"),S=(0,a.up)("TMNavigationFilters"),d=(0,a.up)("TMNavigationPanel"),T=(0,a.up)("TMNavigationSearch"),b=(0,a.up)("router-view"),w=(0,a.up)("TMPage");return(0,a.wg)(),(0,a.j4)(w,null,{default:(0,a.w5)((()=>[t.userShowAdv?((0,a.wg)(),(0,a.j4)(p,{key:0,"adfox-id":"169815559787254866","div-id":"topBanner",params:{pp:"g",ps:"fnps",p2:"iqny"},variant:"narrow"})):(0,a.kq)("",!0),(0,a._)("div",r,[(0,a.Wm)(h,{name:t.msg("NAV_FLOWS_ALL")},{default:(0,a.w5)((()=>[m.showSuggestCompanyButton?((0,a.wg)(),(0,a.iD)("a",o,(0,i.zw)(t.msg("SUGGEST_COMPANY")),1)):(0,a.kq)("",!0),m.showSuggestHubButton?((0,a.wg)(),(0,a.j4)(_,{key:1,class:"tm-suggest-button",to:m.suggestHubRoute},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.msg("SUGGEST_HUB")),1)])),_:1},8,["to"])):(0,a.kq)("",!0)])),_:1},8,["name"]),(0,a.Wm)(g,{class:"tm-tabs_page-header",tabs:m.tabs},null,8,["tabs"]),m.isArticleFilterShown?((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(S,{"extra-options":m.filterExtraOptions,options:m.filterOptions,onApplyFilter:m.saveFlowFilter},{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1},8,["extra-options","options","onApplyFilter"])])):!m.isArticleFilterShown&&m.hasRss?((0,a.wg)(),(0,a.j4)(d,{key:1,title:t.msg("NAV_TITLE_LATEST")},{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1},8,["title"])):(0,a.kq)("",!0),m.showNavigationSearch?((0,a.wg)(),(0,a.j4)(T,{key:2})):(0,a.kq)("",!0)]),(0,a.Wm)(b)])),sidebar:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"sidebar"})])),_:1})}var u=s(22201),m=s(33907),p=s(26945),_=s(10937),h=s(40603),g=s(71759),c=s(49071),S=s(90241),d=s(94675),T=s(62978),b=s(4218),w=s(89554),L=s(73833),A=s(44383),E=s(68171),O=s(88447);const N={components:{TMAdfoxBanner:p.Z,TMNavigationFilters:_.Z,TMNavigationPanel:h.Z,TMNavigationSearch:g.Z,TMPage:c.Z,TMSectionName:d.Z,TMTabs:T.Z,TMRssButton:S.Z},setup(){const t=(0,u.yj)(),[e]=(0,b.Kw)("me",["user"]),s=(0,w.f)(),i=(0,a.Fl)((()=>{if(!e.value)return"ARTICLES_LIST_TOP_PERIOD"!==t.name&&"ARTICLES_LIST_ALL_SCORE"!==t.name;const a=(0,O.buildCookieName)({flowName:"all"}),i=s.get(a);return!i||"/articles/"===i})),r=(0,a.Fl)((()=>{if(!e.value)return"NEWS_LIST_TOP_PERIOD"!==t.name&&"NEWS_LIST_ALL_SCORE"!==t.name;const a=(0,O.buildCookieName)({flowName:"all",isNews:!0}),i=s.get(a);return!i||"/news/"===i}));return{user:e,isShowCountNewNews:r,isShowCountNewArticles:i}},computed:{...(0,m.Se)("global",["isDesktop"]),...(0,m.rn)("flows",["updates"]),...(0,m.Se)("me",["userShowAdv"]),...(0,m.Se)("i18n",["langOptions"]),isFlEnglish(){return"en"===this.langOptions.fl},showSuggestCompanyButton(){return-1!==["COMPANIES","COMPANIES_PAGES"].indexOf(this.$route.name)},showSuggestHubButton(){return-1!==["HUBS","HUBS_PAGES"].indexOf(this.$route.name)},suggestHubRoute(){return{name:"FEEDBACK",query:{type:8,subj:"suggest_hub"}}},hasRss(){return Boolean(this.$route.meta.rssLink)},isNewsRoute(){return this.$route.matched.some((t=>t.name&&t.name.startsWith("NEWS")))},isPostsRoute(){return this.$route.matched.some((t=>t.name&&t.name.startsWith("POSTS")))},isShowCountNewPosts(){return!0},filterOptions(){return this.isPostsRoute?this.postsFilterOptions:this.isNewsRoute?this.newsFilterOptions:this.articlesFilterOptions},addExtraOptions(){return!this.isNewsRoute&&!this.isPostsRoute},filterExtraOptions(){return this.addExtraOptions?(0,L.r)(this.msg):[]},articlesFilterOptions(){return[{label:this.msg("NAV_NEW"),rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_RATING"),children:[{label:this.msg("NAV_ALL"),value:"ARTICLES_LIST_ALL",params:{}},{label:"≥0",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"0"}},{label:"≥10",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"10"}},{label:"≥25",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"25"}},{label:"≥50",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"50"}},{label:"≥100",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"100"}}]},{label:this.msg("NAV_BEST"),rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_PERIOD"),children:[{label:this.msg("NAV_DAY"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"daily"}},{label:this.msg("NAV_WEEK"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"weekly"}},{label:this.msg("NAV_MONTH"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"monthly"}},{label:this.msg("NAV_YEAR"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"yearly"}},{label:this.msg("NAV_ALLTIME"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"alltime"}}]}]},newsFilterOptions(){return[{label:this.msg("NAV_NEW"),rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_RATING"),children:[{label:this.msg("NAV_ALL"),value:"NEWS_LIST_ALL",params:{}},{label:"≥0",value:"NEWS_LIST_ALL_SCORE",params:{score:"0"}},{label:"≥10",value:"NEWS_LIST_ALL_SCORE",params:{score:"10"}},{label:"≥25",value:"NEWS_LIST_ALL_SCORE",params:{score:"25"}},{label:"≥50",value:"NEWS_LIST_ALL_SCORE",params:{score:"50"}},{label:"≥100",value:"NEWS_LIST_ALL_SCORE",params:{score:"100"}}]},{label:this.msg("NAV_BEST"),rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_PERIOD"),children:[{label:this.msg("NAV_DAY"),value:"NEWS_LIST_TOP_PERIOD",params:{period:"daily"}},{label:this.msg("NAV_WEEK"),value:"NEWS_LIST_TOP_PERIOD",params:{period:"weekly"}},{label:this.msg("NAV_MONTH"),value:"NEWS_LIST_TOP_PERIOD",params:{period:"monthly"}},{label:this.msg("NAV_YEAR"),value:"NEWS_LIST_TOP_PERIOD",params:{period:"yearly"}},{label:this.msg("NAV_ALLTIME"),value:"NEWS_LIST_TOP_PERIOD",params:{period:"alltime"}}]}]},postsFilterOptions(){return[{label:this.msg("NAV_NEW"),rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_RATING"),children:[{label:this.msg("NAV_ALL"),value:"POSTS_ALL",params:{}},{label:"≥0",value:"POSTS_ALL_SCORE",params:{score:"0"}},{label:"≥10",value:"POSTS_ALL_SCORE",params:{score:"10"}},{label:"≥25",value:"POSTS_ALL_SCORE",params:{score:"25"}},{label:"≥50",value:"POSTS_ALL_SCORE",params:{score:"50"}},{label:"≥100",value:"POSTS_ALL_SCORE",params:{score:"100"}}]},{label:this.msg("NAV_BEST"),rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_PERIOD"),children:[{label:this.msg("NAV_DAY"),value:"POSTS_TOP_PERIOD",params:{period:"daily"}},{label:this.msg("NAV_WEEK"),value:"POSTS_TOP_PERIOD",params:{period:"weekly"}},{label:this.msg("NAV_MONTH"),value:"POSTS_TOP_PERIOD",params:{period:"monthly"}},{label:this.msg("NAV_YEAR"),value:"POSTS_TOP_PERIOD",params:{period:"yearly"}},{label:this.msg("NAV_ALLTIME"),value:"POSTS_TOP_PERIOD",params:{period:"alltime"}}]}]},showNavigationSearch(){return this.$route.meta.hasSearch},tabs(){const t="ru"!==this.$route.params.hl||this.isFlEnglish?[]:[{title:this.msg("NAV_COMPANIES"),route:{name:"COMPANIES"}}];return[{title:this.msg("NAV_ARTICLES"),route:{name:"ARTICLES_LIST_ALL"},children:(0,A.nz)(this.articlesFilterOptions),countNew:this.isShowCountNewArticles?this.updates.countPosts:0},{title:this.msg("NAV_POSTS"),route:{name:"POSTS_ALL"},children:(0,A.nz)(this.postsFilterOptions),countNew:this.isShowCountNewPosts?this.updates.countThreads:0},{title:this.msg("NAV_NEWS"),route:{name:"NEWS_LIST_ALL"},children:(0,A.nz)(this.newsFilterOptions),countNew:this.isShowCountNewNews?this.updates.countNews:0},{title:this.msg("NAV_HUBS"),route:{name:"HUBS"}},{title:this.msg("NAV_AUTHORS"),route:{name:"USERS"}},...t]},isArticleFilterShown(){return!0===this.$route.meta.showFilter},needSaveHomePage(){return["ARTICLES_LIST","NEWS_LIST","POSTS"].some((t=>this.$route.name.startsWith(t)))&&!this.$route.name.endsWith("_PAGES")}},mounted(){this.saveHomePage(),Object.keys(this.updates).length||this.loadUpdates()},methods:{...(0,m.nv)("flows",["loadUpdates"]),saveHomePage(){this.needSaveHomePage&&(0,E.qV)(this.$route)},saveFlowFilter(t){(0,E.YL)({route:this.$router.resolve(t),flowName:"all",isNews:this.isNewsRoute,isPosts:this.isPostsRoute})}}};var v=s(83744);const I=(0,v.Z)(N,[["render",n]]),k=I},85254:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var a=s(66252);function i(t,e,s,i,r,o){const l=(0,a.up)("TMCompaniesRatingBlock"),n=(0,a.up)("TMMostReadingBlock"),u=(0,a.up)("TMLayoutSidebar");return t.isDesktop?((0,a.wg)(),(0,a.j4)(u,{key:0,"show-adv":!0},{default:(0,a.w5)((()=>["ru"===t.$route.params.hl&&!o.isFlEnglish&&t.companiesTopRating&&t.companiesTopRating.length?((0,a.wg)(),(0,a.j4)(l,{key:0,companies:t.companiesTopRating},null,8,["companies"])):(0,a.kq)("",!0),(0,a.Wm)(n,{"ga-type":"feed",layout:"sidebar"})])),_:1})):(0,a.kq)("",!0)}var r=s(33907),o=s(98921),l=s(19890),n=s(66921),u=s(21805);const m={components:{TMMostReadingBlock:n.Z,TMCompaniesRatingBlock:o.Z,TMLayoutSidebar:l.Z},setup(){return(0,u.w)((({store:t})=>{const e=t.getters["global/isDesktop"];return e?Promise.all([t.dispatch("companies/loadTopCompanies")]):Promise.resolve(!0)}))},computed:{...(0,r.Se)("companies",["companiesTopRating"]),...(0,r.Se)("global",["isDesktop"]),...(0,r.Se)("i18n",["langOptions"]),isFlEnglish(){return"en"===this.langOptions.fl}}};var p=s(83744);const _=(0,p.Z)(m,[["render",i]]),h=_},4366:(t,e,s)=>{s.r(e),s.d(e,{default:()=>P});var a=s(66252),i=s(56612);const r=["textContent"];function o(t,e,s,o,l,n){const u=(0,a.up)("TMDescriptionList"),m=(0,a.up)("TMBlock"),p=(0,a.up)("TMKarmagraph"),_=(0,a.up)("TMLayoutSidebar");return t.isDesktop?((0,a.wg)(),(0,a.j4)(_,{key:0,"show-adv":!1},{default:(0,a.w5)((()=>[t.statistics?((0,a.wg)(),(0,a.j4)(m,{key:0,title:t.msg("STATISTICS_BLOCK_TITLE")},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,(t=>((0,a.wg)(),(0,a.j4)(u,{key:t.title,title:t.title,variant:"columns-numbers"},{default:(0,a.w5)((()=>[(0,a._)("span",{textContent:(0,i.zw)(t.value)},null,8,r)])),_:2},1032,["title"])))),128))])),_:1},8,["title"])):(0,a.kq)("",!0),t.karmaStats&&t.karmaStats.length?((0,a.wg)(),(0,a.j4)(p,{key:1,"karma-stats":t.karmaStats},null,8,["karma-stats"])):(0,a.kq)("",!0)])),_:1})):(0,a.kq)("",!0)}var l=s(33907),n=s(13088),u=s(71754);const m={id:"xGrid",class:"karmagraph__grid karmagraph__grid_x"},p=["y1","y2"],_={class:"karmagraph__labels karmagraph__labels_y"},h=["y"],g={id:"yGrid",class:"karmagraph__grid karmagraph__grid_y"},c=["x1","x2","y2"],S={class:"karmagraph__labels karmagraph__labels_x"},d=["x","y"],T={class:"karmagraph__bars"},b=["height","width","x","y"],w=["innerHTML"];function L(t,e,s,r,o,l){const n=(0,a.up)("TMBlock");return(0,a.wg)(),(0,a.j4)(n,{title:t.msg("TITLE_BLOCK_KARMAGRAPH")},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)("svg",{class:"karmagraph",style:(0,i.j5)({height:l.graphHeight+28+"px"}),xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("g",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.stepsY,((t,e)=>((0,a.wg)(),(0,a.iD)("line",{key:`line-x-${t}`,x1:"23",x2:"260",y1:l.stepYHeight*e+5,y2:l.stepYHeight*e+5},null,8,p)))),128))]),(0,a._)("g",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.stepsY,((t,e)=>((0,a.wg)(),(0,a.iD)("text",{key:`step${t}`,x:"10",y:l.stepYHeight*e+10},(0,i.zw)(t),9,h)))),128))]),(0,a._)("g",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.stepsX,((t,e)=>((0,a.wg)(),(0,a.iD)("line",{key:`line-y-${t}`,x1:l.stepXWidth*e+o.xPadding,x2:l.stepXWidth*e+o.xPadding,y1:"5",y2:l.graphHeight+5},null,8,c)))),128))]),(0,a._)("g",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.stepsX,((t,e)=>((0,a.wg)(),(0,a.iD)("text",{key:`step${t}`,x:l.stepXWidth*e+o.xPadding,y:l.graphHeight+20},(0,i.zw)(t),9,d)))),128))]),(0,a._)("g",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.karmaStats,((t,e)=>((0,a.wg)(),(0,a.iD)("rect",{key:`bar-${t.d}-${t.count}`,class:(0,i.C_)(`karmagraph__bars_${t.type}`),height:l.getBarHeight(t),width:l.barWidth,x:l.barWidth*e+o.xPadding,y:"plus"===t.type?l.zeroPos-l.getBarHeight(t):l.zeroPos},null,10,b)))),128))])],4)),(0,a._)("div",{class:"karmagraph__description",innerHTML:t.msg("KARMAGRAPH_BLOCK_DESCRIPTION")},null,8,w)])),_:1},8,["title"])}const A={components:{TMBlock:n.Z},props:{karmaStats:{type:Array,required:!0}},data(){return{height:268,width:255,periodsCountPerDay:24.5,xPadding:30}},computed:{maxValue(){let t=0;return this.karmaStats.forEach((e=>{e.count>t&&(t=e.count)})),t},minValue(){let t=0;return this.karmaStats.forEach((e=>{e.count<t&&(t=e.count)})),t},stepsCountY(){return Math.ceil((this.maxValue-this.minValue)/10)+2},stepYHeight(){return Math.ceil(this.height/this.stepsCountY)},stepXWidth(){return 2*this.barWidth*this.periodsCountPerDay},zeroPos(){return this.stepsY.findIndex((t=>0===t))*this.stepYHeight+5},stepsY(){let t=10*Math.ceil(this.maxValue/10);const e=[];for(let s=0;s<this.stepsCountY;s+=1)e.push(t),t-=10;return e},stepsX(){return[...new Set(this.karmaStats.map((t=>t.date)))]},barWidth(){return(this.width-this.xPadding)/this.karmaStats.length},graphHeight(){return this.stepYHeight*(this.stepsCountY-1)+5}},methods:{getBarHeight(t){const e=Math.abs(this.stepsY[0])+Math.abs(this.stepsY[this.stepsY.length-1]);return Math.abs(t.count)*this.graphHeight/e}}};var E=s(83744);const O=(0,E.Z)(A,[["render",L]]),N=O;var v=s(19890),I=s(21805);const k={components:{TMDescriptionList:u.Z,TMBlock:n.Z,TMKarmagraph:N,TMLayoutSidebar:v.Z},setup(){return(0,I.w)((({store:t})=>{const e=t.getters["global/isDesktop"];return e?Promise.all([t.dispatch("users/loadUsersStatistics"),t.dispatch("users/loadKarmaStats")]).catch((()=>Promise.resolve())):Promise.resolve(!0)}))},computed:{...(0,l.rn)("users",["statistics","karmaStats"]),...(0,l.Se)("global",["isDesktop"]),...(0,l.Se)("i18n",["langOptions"]),items(){const t=new Intl.NumberFormat(this.langOptions.hl),e=e=>t.format(e),{msg:s}=this,{total:a,male:i,female:r,other:o}=this.statistics;return[{title:s("STATISTICS_TOTAL"),value:e(a)},{title:s("STATISTICS_MALE"),value:e(i)},{title:s("STATISTICS_FEMALE"),value:e(r)},{title:s("STATISTICS_NOT_SPECIFIED"),value:e(o)}]}}},y=(0,E.Z)(k,[["render",o]]),P=y},5642:(t,e,s)=>{s.r(e),s.d(e,{default:()=>E});var a=s(66252);function i(t,e,s,i,r,o){const l=(0,a.up)("TMCompaniesFilter"),n=(0,a.up)("TMLayoutSidebar");return t.isDesktop?((0,a.wg)(),(0,a.j4)(n,{key:0,"show-adv":!1},{default:(0,a.w5)((()=>[t.companiesCategories&&t.companiesCategories.length?((0,a.wg)(),(0,a.j4)(l,{key:0,categories:t.companiesCategories,"total-count":t.companiesCategoriesTotalCount},null,8,["categories","total-count"])):(0,a.kq)("",!0)])),_:1})):(0,a.kq)("",!0)}var r=s(23002),o=s(33907),l=s(56612);const n={class:"tm-companies-filter"},u={class:"tm-companies-filter__label"},m={class:"tm-companies-filter__counter"},p={class:"tm-companies-filter__label"},_={class:"tm-companies-filter__counter"};function h(t,e,s,i,r,o){const h=(0,a.up)("router-link"),g=(0,a.up)("TMBlock");return(0,a.wg)(),(0,a.j4)(g,{title:t.msg("FILTERS")},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(h,{class:"tm-companies-filter__item","exact-active-class":"tm-companies-filter__item_active",to:{name:"COMPANIES"}},{default:(0,a.w5)((()=>[(0,a._)("span",u,(0,l.zw)(t.msg("ALL")),1),(0,a._)("span",m,(0,l.zw)(s.totalCount),1)])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.categories,(t=>((0,a.wg)(),(0,a.j4)(h,{key:t.alias,"active-class":"tm-companies-filter__item_active",class:"tm-companies-filter__item",to:{name:"COMPANIES_CATEGORIES",params:{categoryAlias:t.alias}}},{default:(0,a.w5)((()=>[(0,a._)("span",p,(0,l.zw)(t.title),1),(0,a._)("span",_,(0,l.zw)(t.stats.companiesCount),1)])),_:2},1032,["to"])))),128))])])),_:1},8,["title"])}var g=s(13088);const c={name:"TMCompaniesFilter",components:{TMBlock:g.Z},props:{categories:{type:Array,default:null},totalCount:{type:Number,default:0}}};var S=s(83744);const d=(0,S.Z)(c,[["render",h]]),T=d;var b=s(19890),w=s(21805);const L={components:{TMLayoutSidebar:b.Z,TMCompaniesFilter:T},setup(){const t=(0,r.pm)();return(0,w.w)((({store:e})=>e.dispatch("companies/loadCompaniesCategories").catch((e=>{t.error(e.message),console.error(e)}))))},computed:{...(0,o.rn)("companies",["companiesCategories","companiesCategoriesTotalCount"]),...(0,o.Se)("global",["isDesktop"])}},A=(0,S.Z)(L,[["render",i]]),E=A},57145:(t,e,s)=>{s.r(e),s.d(e,{default:()=>_});var a=s(66252);function i(t,e,s,i,r,o){const l=(0,a.up)("TMHubsList");return(0,a.wg)(),(0,a.j4)(l,{"sorting-options":o.sortingOptions},null,8,["sorting-options"])}var r=s(22201),o=s(33907),l=s(9246),n=s(21805);const u={components:{TMHubsList:l.Z},setup(){const t=(0,r.yj)();return(0,n.w)((({store:e})=>e.dispatch("hubs/loadHubs",{route:t})))},data(){return{loadingFlows:!0}},computed:{...(0,o.rn)("flows",["flows"]),...(0,o.Se)("i18n",["msg","pageTitle","langOptions"]),i18n(){return{shortInfoPlaceholder:this.msg("HUB")}},sortingOptions(){return[{label:this.msg("NAV_SORTING_ABC"),title:this.msg("NAV_SORTING_ABC_TITLE"),id:"title",isSortable:!0},{label:this.msg("NAV_SORTING_RATING"),title:this.msg("NAV_SORTING_RATING_TITLE"),id:"rating",isSortable:!0},{label:this.msg("NAV_SORTING_SUBSCRIBERS"),title:this.msg("NAV_SORTING_SUBSCRIBERS_TITLE"),id:"subscribers",isSortable:!0}]}},mounted(){0===this.flows.length&&this.loadFlows().then((()=>{this.loadingFlows=!1}))},methods:{...(0,o.nv)("flows",["loadFlows"]),...(0,o.nv)("hubs",["loadHubs"])}};var m=s(83744);const p=(0,m.Z)(u,[["render",i]]),_=p}}]);
//# sourceMappingURL=page-flows.634b8b05.js.map