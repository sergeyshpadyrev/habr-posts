(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-flows"],{"0281":function(t,s,e){},"15e8":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tm-navigation-panel"},[t.title?e("div",{staticClass:"tm-navigation-panel__title"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t._t("default")],2)},i=[],r={name:"TMNavigationPanel",props:{title:{type:String,default:null}}},n=r,o=(e("1d30"),e("2877")),l=Object(o["a"])(n,a,i,!1,null,null,null);s["a"]=l.exports},"17d3":function(t,s,e){"use strict";e("fa96")},"1d30":function(t,s,e){"use strict";e("3092")},"1e5a":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isDesktop?e("TMLayoutSidebar",{attrs:{"show-adv":!1}},[t.companiesCategories&&t.companiesCategories.length?e("TMCompaniesFilter",{attrs:{categories:t.companiesCategories,"total-count":t.companiesCategoriesTotalCount}}):t._e()],1):t._e()},i=[],r=e("2f62"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("TMBlock",{attrs:{title:t.msg("FILTERS")}},[e("div",{staticClass:"tm-companies-filter"},[e("router-link",{staticClass:"tm-companies-filter__item",attrs:{"exact-active-class":"tm-companies-filter__item_active",to:{name:"COMPANIES"}}},[e("span",{staticClass:"tm-companies-filter__label"},[t._v(t._s(t.msg("ALL")))]),t._v(" "),e("span",{staticClass:"tm-companies-filter__counter"},[t._v(t._s(t.totalCount))])]),t._v(" "),t._l(t.categories,(function(s){return e("router-link",{key:s.alias,staticClass:"tm-companies-filter__item",attrs:{"active-class":"tm-companies-filter__item_active",to:{name:"COMPANIES_CATEGORIES",params:{categoryAlias:s.alias}}}},[e("span",{staticClass:"tm-companies-filter__label"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"tm-companies-filter__counter"},[t._v(t._s(s.stats.companiesCount))])])}))],2)])},o=[],l=e("19d1"),c={name:"TMCompaniesFilter",components:{TMBlock:l["a"]},props:{categories:{type:Array,default:null},totalCount:{type:Number,default:0}}},u=c,_=(e("63a7"),e("2877")),m=Object(_["a"])(u,n,o,!1,null,null,null),p=m.exports,g=e("0272"),d={components:{TMLayoutSidebar:g["a"],TMCompaniesFilter:p},asyncData({store:t}){return t.dispatch("companies/loadCompaniesCategories").catch(t=>this.$toast.error(t.message))},computed:{...Object(r["e"])("companies",["companiesCategories","companiesCategoriesTotalCount"]),...Object(r["c"])("global",["isDesktop"])}},h=d,v=Object(_["a"])(h,a,i,!1,null,null,null);s["default"]=v.exports},2637:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isDesktop?e("TMLayoutSidebar",{attrs:{"show-adv":!0}},[t.companiesTopRating&&t.companiesTopRating.length?e("TMCompaniesRatingBlock",{attrs:{companies:t.companiesTopRating}}):t._e(),t._v(" "),e("TMMostReadingBlock",{attrs:{"ga-type":"feed",layout:"sidebar"}})],1):t._e()},i=[],r=e("2f62"),n=e("3b57"),o=e("0272"),l=e("785c"),c={components:{TMMostReadingBlock:l["a"],TMCompaniesRatingBlock:n["a"],TMLayoutSidebar:o["a"]},asyncData({store:t}){const s=t.getters["global/isDesktop"];return s?Promise.all([t.dispatch("companies/loadTopCompanies")]):Promise.resolve(!0)},computed:{...Object(r["c"])("companies",["companiesTopRating"]),...Object(r["c"])("global",["isDesktop"])}},u=c,_=e("2877"),m=Object(_["a"])(u,a,i,!1,null,null,null);s["default"]=m.exports},3092:function(t,s,e){},3121:function(t,s,e){"use strict";e("f043")},"37a7":function(t,s,e){"use strict";e("0281")},"3b57":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("TMBlock",{attrs:{title:t.msg("TOP_COMPANIES_BLOCK_TITLE")},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"tm-companies-rating"},t._l(t.companies,(function(s,a){return e("router-link",{key:a,staticClass:"tm-companies-rating__item",attrs:{to:{name:"ARTICLES_LIST_BY_COMPANY",params:{name:s.alias,hl:t.$route.params.hl}}}},[e("TMEntityImage",{staticClass:"tm-companies-rating__avatar",attrs:{alias:s.alias,image:s.imageUrl,size:36,type:"company"}}),t._v(" "),e("span",{staticClass:"tm-companies-rating__name"},[t._v(t._s(s.titleHtml))]),t._v(" "),e("span",{staticClass:"tm-companies-rating__rating"},[t._v(t._s(s.statistics.rating))])],1)})),1)]},proxy:!0},{key:"footer",fn:function(){return[e("router-link",{staticClass:"tm-block-extralink",attrs:{to:{name:"COMPANIES"}}},[t._v("\n      "+t._s(t.msg("COMPANIES_ALL"))+"\n    ")])]},proxy:!0}])})},i=[],r=e("19d1"),n=e("2e8a"),o={name:"TMCompaniesRatingBlock",components:{TMBlock:r["a"],TMEntityImage:n["a"]},props:{companies:{type:Array,default:null}}},l=o,c=(e("37a7"),e("2877")),u=Object(c["a"])(l,a,i,!1,null,null,null);s["a"]=u.exports},4924:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tm-user-snippet"},[e("router-link",{staticClass:"tm-user-snippet__userpic-link",attrs:{to:t.userProfileRoute}},[e("TMEntityImage",{attrs:{alias:t.user.alias,image:t.user.avatarUrl,type:"user"}})],1),t._v(" "),e("div",{staticClass:"tm-user-snippet__info"},[e("router-link",{staticClass:"tm-user-snippet__title",attrs:{to:t.userProfileRoute},domProps:{innerHTML:t._s(t.user.fullname)}}),t._v(" "),t.user.alias?e("router-link",{staticClass:"tm-user-snippet__nickname",attrs:{to:t.userProfileRoute}},[t._v("\n      @"+t._s(t.user.alias)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"tm-user-snippet__description"},[t._v("\n      "+t._s(t.user.speciality||t.msg("USER"))+"\n    ")]),t._v(" "),t.isDesktop&&t.showLastPost&&t.user.lastPost?e("div",{staticClass:"tm-user-snippet__last-post"},[e("router-link",{staticClass:"tm-user-snippet__last-post-link",attrs:{to:t.lastPostRoute},domProps:{innerHTML:t._s(t.user.lastPost.titleHtml)}}),t._v(" "),e("TMDatetime",{staticClass:"tm-user-snippet__last-post-datetime",attrs:{date:new Date(t.user.lastPost.timePublished),"show-full-date-time":""}})],1):t._e()],1)],1)},i=[],r=e("2f62"),n=e("8fab"),o=e("2e8a"),l=e("d7b7"),c=e("9f2e"),u={name:"TMUserSnippet",components:{TMDatetime:n["a"],TMEntityImage:o["a"]},props:{user:l["a"],showLastPost:Boolean},computed:{...Object(r["c"])("global",["isDesktop"]),userProfileRoute(){return{name:"USER_PROFILE",params:{login:this.user.alias,hl:this.$route.params.hl}}},lastPostRoute(){return Object(c["b"])(this.user.lastPost,this.$route.params.hl)}}},_=u,m=(e("f8fd"),e("2877")),p=Object(m["a"])(_,a,i,!1,null,null,null);s["a"]=p.exports},"4dbb":function(t,s,e){},5943:function(t,s,e){"use strict";e("4dbb")},"60ca":function(t,s,e){},"63a7":function(t,s,e){"use strict";e("8ce6")},"7ffa":function(t,s,e){},"86f6":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tm-navigation-sorting"},[t.isDesktop?t._l(t.options,(function(s){return e("div",{key:s.id,staticClass:"tm-navigation-sorting__row-option",class:{"tm-navigation-sorting__row-option_active":t.currentSort===s.id,"tm-navigation-sorting__row-option_sortable":s.isSortable},style:{minWidth:s.width},on:{click:function(e){return t.setSorting(s,e)}}},[t._v("\n      "+t._s(s.label)+"\n\n      "),s.isSortable?e("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow",class:{"tm-navigation-sorting__arrow_desc":t.currentSort===s.id&&"desc"===t.currentOrder,"tm-navigation-sorting__arrow_asc":t.currentSort===s.id&&"asc"===t.currentOrder},attrs:{id:"sorting-down"}}):t._e()],1)})):t._e(),t._v(" "),t.isMobile?[e("button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:{esc:t.closeOptions},expression:"{ 'esc': closeOptions }"}],ref:"button",staticClass:"tm-navigation-sorting__button",on:{click:t.toggleOptions}},[e("span",{staticClass:"tm-navigation-sorting__title"},[t._v("\n        "+t._s(t.title)+"\n        "),e("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow",class:{"tm-navigation-sorting__arrow_desc":"desc"===t.orderTitle,"tm-navigation-sorting__arrow_asc":"asc"===t.orderTitle},attrs:{id:"sorting-down"}})],1),t._v(" "),e("TMSvgImg",{staticClass:"icon_dropdown-arrow",class:{"icon_dropdown-arrow-rotated":t.optionsVisible},attrs:{id:"arrow-down"}})],1),t._v(" "),e("div",{ref:"options",staticClass:"tm-navigation-sorting__options",style:t.getStyles},[t.$slots["categoriesFilter"]?[e("div",{staticClass:"tm-navigation-sorting__list-label"},[t._v("\n          "+t._s(t.msg("NAV_SORTING_CATEGORIES"))+"\n        ")]),t._v(" "),t._t("categoriesFilter")]:t._e(),t._v(" "),e("div",{staticClass:"tm-navigation-sorting__list-label"},[t._v("\n        "+t._s(t.msg("NAV_SORTING_SORTBY"))+"\n      ")]),t._v(" "),e("ul",{staticClass:"tm-navigation-sorting__list"},t._l(t.options,(function(s){return e("li",{key:s.label,staticClass:"tm-navigation-sorting__option",class:{"tm-navigation-sorting__option_active":t.currentSort===s.id},on:{click:function(e){t.currentSort=s.id}}},[t._v("\n          "+t._s(s.label)+"\n        ")])})),0),t._v(" "),e("div",{staticClass:"tm-navigation-sorting__list-label"},[t._v("\n        "+t._s(t.msg("NAV_SORTING_SHOW"))+"\n      ")]),t._v(" "),e("ul",{staticClass:"tm-navigation-sorting__list"},[e("li",{staticClass:"tm-navigation-sorting__option tm-navigation-sorting__option_icon",class:{"tm-navigation-sorting__option_active":"asc"===t.currentOrder},on:{click:function(s){t.currentOrder="asc"}}},[e("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow tm-navigation-sorting__arrow_asc",attrs:{id:"sorting-down"}})],1),t._v(" "),e("li",{staticClass:"tm-navigation-sorting__option tm-navigation-sorting__option_icon",class:{"tm-navigation-sorting__option_active":"desc"===t.currentOrder},on:{click:function(s){t.currentOrder="desc"}}},[e("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow tm-navigation-sorting__arrow_desc",attrs:{id:"sorting-down"}})],1)]),t._v(" "),e("TMButtonBase",{staticClass:"tm-navigation-sorting__apply",attrs:{"style-size":"small","style-type":"solid",type:"button"},on:{click:t.applySortingFilter}},[t._v("\n        "+t._s(t.msg("NAV_APPLY"))+"\n      ")])],2)]:t._e()],2)},i=[],r=e("2f62"),n=e("884d"),o=e("b7d0"),l={name:"TMNavigationSorting",components:{TMSvgImg:o["a"],TMButtonBase:n["a"]},props:{options:{type:Array,required:!0},sort:{type:String,default:null},order:{type:String,default:"desc"}},data(){return{optionsVisible:!1,currentSort:this.$route.query.sort||this.sort,currentOrder:this.$route.query.order||this.order}},computed:{...Object(r["c"])("global",["isMobile","isDesktop"]),title(){const t=this.options.findIndex(t=>t.id===this.currentSort);return this.options[t].title},orderTitle(){return this.$route.query.order},getStyles(){return this.optionsVisible&&this.maxHeightStyles},reversedOrder(){return"asc"===this.currentOrder?"desc":"asc"}},methods:{toggleOptions(){this.maxHeightStyles=`max-height: ${this.$refs.options.scrollHeight}px`,this.optionsVisible=!this.optionsVisible},closeOptions(){this.optionsVisible=!1},setSorting(t,s){return s&&!t.isSortable?s.preventDefault():this.$router.push({...this.$route,query:{sort:t.id,order:this.currentSort===t.id?this.reversedOrder:"desc"}})},applySortingFilter(){this.$router.push({...this.$route,query:{sort:this.currentSort,order:this.currentOrder}})}}},c=l,u=(e("9d3f"),e("2877")),_=Object(u["a"])(c,a,i,!1,null,null,null);s["a"]=_.exports},"8ce6":function(t,s,e){},"8db0":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"tm-users-list__sorting-panel"},[t.isDesktop&&t.sortingOptions.length&&t.currentAuthorList.length?e("TMNavigationSorting",{attrs:{options:t.sortingOptions,sort:t.defaultSort}}):t._e()],1),t._v(" "),t.isLoading?e("TMPlaceholder",{staticClass:"tm-users-list__placeholder",attrs:{times:7,type:"categories"}}):[t.showEmptyPlaceholder?e("TMEmptyPlaceholder",[t._t("empty",(function(){return[e("span",{domProps:{textContent:t._s(t.msg("USERS_EMPTY"))}})]}))],2):t._e(),t._v(" "),t.showEmptyPlaceholder?t._e():[e("div",{staticClass:"tm-users-list"},t._l(t.currentAuthorList,(function(s){return e("div",{key:s,staticClass:"tm-users-list__item"},[e("div",{staticClass:"tm-users-list__user-wrapper"},[e("TMUserSnippet",{attrs:{"show-last-post":"",user:t.currentAuthor(s)}})],1),t._v(" "),e("div",{staticClass:"tm-users-list__score-counters"},[t.contributionTable?t._e():e("span",{staticClass:"tm-users-list__score-counter tm-users-list__score-counter_rating"},[t.isMobile?e("TMSvgImg",{staticClass:"tm-users-list__icon tm-users-list__icon_rating",attrs:{id:"rating"}}):t._e(),t._v("\n              "+t._s(t.currentAuthor(s).rating)+"\n            ")],1),t._v(" "),t.contributionTable?t._e():e("span",{staticClass:"tm-users-list__score-counter tm-users-list__score-counter_karma",class:t.karmaClass(t.currentAuthor(s).scoreStats.score)},[t.isMobile?e("TMSvgImg",{staticClass:"tm-users-list__icon tm-users-list__icon_karma",attrs:{id:"karma"}}):t._e(),t._v("\n              "+t._s(t.currentAuthor(s).scoreStats.score)+"\n            ")],1),t._v(" "),t.contributionTable?e("span",{staticClass:"tm-users-list__score-counter tm-users-list__score-counter_contribution"},[t.isMobile?e("TMSvgImg",{staticClass:"tm-users-list__icon tm-users-list__icon_contribution",attrs:{id:"contribution"}}):t._e(),t._v("\n              "+t._s(t.abbreviateNumber(t.currentAuthor(s).invest))+"\n            ")],1):t._e()])])})),0),t._v(" "),t.currentPagesCount&&t.currentPagesCount>0?e("TMPagination",{attrs:{"route-name":t.paginationRouteName,"total-pages":t.currentPagesCount}}):t._e()]]],2)},i=[],r=e("2f62"),n=e("6833"),o=e("2e8a"),l=e("86f6"),c=e("57fc"),u=e("5188"),_=e("b7d0"),m=e("4924"),p=e("6be8"),g={name:"TMUsersList",components:{TMEntityImage:o["a"],TMEmptyPlaceholder:n["a"],TMNavigationSorting:l["a"],TMPagination:c["a"],TMPlaceholder:u["a"],TMSvgImg:_["a"],TMUserSnippet:m["a"]},props:{currentAuthorList:{type:Array,default:()=>[]},authorRefs:{type:Object,default:()=>{}},currentPagesCount:{type:Number,default:0},sortingOptions:{type:Array,default:()=>[]},defaultSort:{type:String,default:"rating"},contributionTable:Boolean,isLoading:Boolean},data(){return{categoryType:"user"}},computed:{...Object(r["c"])("i18n",["msg"]),...Object(r["c"])("global",["isMobile","isDesktop"]),paginationRouteName(){const t=-1!==this.$route.name.indexOf("_PAGES");return t?this.$route.name:this.$route.name+"_PAGES"},showEmptyPlaceholder(){return this.currentAuthorList&&!this.currentAuthorList.length||!this.currentAuthorList}},methods:{currentAuthor(t){return this.authorRefs[t]},abbreviateNumber(t){return Object(p["a"])(t)},karmaClass(t){return t>0?"tm-users-list__score-counter_karma-positive":t<0?"tm-users-list__score-counter_karma-negative":"tm-users-list__score-counter_karma-neutral"}}},d=g,h=(e("5943"),e("2877")),v=Object(h["a"])(d,a,i,!1,null,null,null);s["a"]=v.exports},"9d3f":function(t,s,e){"use strict";e("7ffa")},c5f1:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("TMPage",{scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"tm-page__top"},[e("TMSectionName",{attrs:{name:t.msg("NAV_FLOWS_ALL")}},[t.showSuggestCompanyButton?e("a",{staticClass:"tm-suggest-button",attrs:{href:"https://tmtm.ru/services/corpblog/"}},[t._v("\n          "+t._s(t.msg("SUGGEST_COMPANY"))+"\n        ")]):t._e(),t._v(" "),t.showSuggestHubButton?e("router-link",{staticClass:"tm-suggest-button",attrs:{to:t.suggestHubRoute}},[t._v("\n          "+t._s(t.msg("SUGGEST_HUB"))+"\n        ")]):t._e()],1),t._v(" "),e("TMTabs",{staticClass:"tm-tabs_page-header",attrs:{tabs:t.tabs}}),t._v(" "),t.isArticleFilterShown?e("div",{staticClass:"tm-navigation-filter"},[e("TMNavigationFilters",{attrs:{options:t.articlesFilterOptions},on:{applyFilter:t.saveFilterInCookies}},[e("TMRssButton")],1)],1):!t.isArticleFilterShown&&t.hasRss?e("TMNavigationPanel",{attrs:{title:t.msg("NAV_TITLE_LATEST")}},[e("TMRssButton")],1):t._e(),t._v(" "),t.showNavigationSearch?e("TMNavigationSearch"):t._e()],1),t._v(" "),e("router-view")]},proxy:!0},{key:"sidebar",fn:function(){return[e("router-view",{attrs:{name:"sidebar"}})]},proxy:!0}])})},i=[],r=e("2f62"),n=e("161e"),o=e("df93"),l=e("15e8"),c=e("84c2"),u=e("ff3c"),_=e("47e8"),m=e("2517"),p=e("b92c");function g(t){return-1!==t.indexOf("ARTICLES_LIST_TOP")?"ARTICLES_LIST_TOP":"ARTICLES_LIST_ALL"}var d={components:{TMNavigationFilters:o["a"],TMNavigationPanel:l["a"],TMNavigationSearch:c["a"],TMPage:u["a"],TMSectionName:m["a"],TMTabs:p["a"],TMRssButton:_["a"]},computed:{...Object(r["c"])("global",["isDesktop"]),showSuggestCompanyButton(){return-1!==["COMPANIES","COMPANIES_PAGES"].indexOf(this.$route.name)},showSuggestHubButton(){return-1!==["HUBS","HUBS_PAGES"].indexOf(this.$route.name)},suggestHubRoute(){return{name:"FEEDBACK",query:{type:8,subj:"suggest_hub"}}},hasRss(){return Boolean(this.$route.meta.rssLink)},articlesFilterOptions(){return[{label:this.msg("NAV_NEW"),value:"ARTICLES_LIST_ALL",rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_RATING"),children:[{label:this.msg("NAV_ALL"),value:"ARTICLES_LIST_ALL",params:{}},{label:"≥0",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"0"}},{label:"≥10",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"10"}},{label:"≥25",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"25"}},{label:"≥50",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"50"}},{label:"≥100",value:"ARTICLES_LIST_ALL_SCORE",params:{score:"100"}}]},{label:this.msg("NAV_BEST"),value:"ARTICLES_LIST_TOP",rootLabel:this.msg("NAV_SHOW_FIRST"),mainLabel:this.msg("NAV_SHOW_BY_PERIOD"),children:[{label:this.msg("NAV_DAY"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"daily"}},{label:this.msg("NAV_WEEK"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"weekly"}},{label:this.msg("NAV_MONTH"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"monthly"}},{label:this.msg("NAV_YEAR"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"yearly"}},{label:this.msg("NAV_ALLTIME"),value:"ARTICLES_LIST_TOP_PERIOD",params:{period:"alltime"}}]}]},showNavigationSearch(){return this.$route.meta.hasSearch},tabs(){return[{title:this.msg("NAV_ARTICLES"),route:{name:"ARTICLES_LIST_ALL"},children:this.articlesFilterOptions.map(t=>t.value)},{title:this.msg("NAV_NEWS"),route:{name:"NEWS"}},{title:this.msg("NAV_HUBS"),route:{name:"HUBS"}},{title:this.msg("NAV_AUTHORS"),route:{name:"USERS"}},{title:this.msg("NAV_COMPANIES"),route:{name:"COMPANIES"}}]},isArticleFilterShown(){return!0===this.$route.meta.showFilter}},methods:{saveFilterInCookies(t){const s=t.name,e=g(s);Object(n["c"])("habr_web_home",e,{expires:365})}}},h=d,v=(e("3121"),e("2877")),S=Object(v["a"])(h,a,i,!1,null,null,null);s["default"]=S.exports},d98f:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tm-sub-page"},[e("div",{staticClass:"tm-sub-page__main"},[t._t("default")],2),t._v(" "),t.hasSidebarSlot?e("div",{staticClass:"tm-sub-page__sidebar"},[t._t("sidebar")],2):t._e()])},i=[],r={name:"TMSubPage",computed:{hasSidebarSlot(){return!!this.$slots.sidebar}}},n=r,o=(e("dd8a"),e("2877")),l=Object(o["a"])(n,a,i,!1,null,null,null);s["a"]=l.exports},dd8a:function(t,s,e){"use strict";e("ee5d")},ee5d:function(t,s,e){},f043:function(t,s,e){},f735:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isDesktop?e("TMLayoutSidebar",{attrs:{"show-adv":!1}},[t.statistics?e("TMBlock",{attrs:{title:t.msg("STATISTICS_BLOCK_TITLE")}},t._l(t.items,(function(s){return e("TMDescriptionList",{key:s.title,attrs:{title:s.title,variant:"columns-numbers"}},[e("span",{domProps:{textContent:t._s(s.value)}})])})),1):t._e(),t._v(" "),t.karmaStats&&t.karmaStats.length?e("TMKarmagraph",{attrs:{"karma-stats":t.karmaStats}}):t._e()],1):t._e()},i=[],r=e("2f62"),n=e("19d1"),o=e("46ac"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("TMBlock",{attrs:{title:t.msg("TITLE_BLOCK_KARMAGRAPH")}},[e("svg",{staticClass:"karmagraph",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[e("g",{staticClass:"karmagraph__grid karmagraph__grid_x",attrs:{id:"xGrid"}},t._l(t.stepsY,(function(s,a){return e("line",{key:"line-x-"+s,attrs:{x1:"23",x2:"260",y1:t.stepYHeight*a+5,y2:t.stepYHeight*a+5}})})),0),t._v(" "),e("g",{staticClass:"karmagraph__labels karmagraph__labels_y"},t._l(t.stepsY,(function(s,a){return e("text",{key:"step"+s,attrs:{x:"10",y:t.stepYHeight*a+10}},[t._v("\n        "+t._s(s)+"\n      ")])})),0),t._v(" "),e("g",{staticClass:"karmagraph__grid karmagraph__grid_y",attrs:{id:"yGrid"}},t._l(t.stepsX,(function(s,a){return e("line",{key:"line-y-"+s,attrs:{x1:t.stepXWidth*a+t.xPadding,x2:t.stepXWidth*a+t.xPadding,y1:"5",y2:t.graphHeight+5}})})),0),t._v(" "),e("g",{staticClass:"karmagraph__labels karmagraph__labels_x"},t._l(t.stepsX,(function(s,a){return e("text",{key:"step"+s,attrs:{x:t.stepXWidth*a+t.xPadding,y:t.graphHeight+20}},[t._v("\n        "+t._s(s)+"\n      ")])})),0),t._v(" "),e("g",{staticClass:"karmagraph__bars"},t._l(t.karmaStats,(function(s,a){return e("rect",{key:"bar-"+s.d+"-"+s.count,class:"karmagraph__bars_"+s.type,attrs:{height:t.getBarHeight(s),width:t.barWidth,x:t.barWidth*a+t.xPadding,y:"plus"===s.type?t.zeroPos-t.getBarHeight(s):t.zeroPos}})})),0)]),t._v(" "),e("div",{staticClass:"karmagraph__description",domProps:{innerHTML:t._s(t.msg("KARMAGRAPH_BLOCK_DESCRIPTION"))}})])},c=[],u={components:{TMBlock:n["a"]},props:{karmaStats:{type:Array,required:!0}},data(){return{height:268,width:255,periodsCountPerDay:24.5,xPadding:30}},computed:{maxValue(){let t=0;return this.karmaStats.forEach(s=>{s.count>t&&(t=s.count)}),t},minValue(){let t=0;return this.karmaStats.forEach(s=>{s.count<t&&(t=s.count)}),t},stepsCountY(){return Math.ceil((this.maxValue-this.minValue)/10)+2},stepYHeight(){return Math.ceil(this.height/this.stepsCountY)},stepXWidth(){return 2*this.barWidth*this.periodsCountPerDay},zeroPos(){return this.stepsY.findIndex(t=>0===t)*this.stepYHeight+5},stepsY(){let t=10*Math.ceil(this.maxValue/10);const s=[];for(let e=0;e<this.stepsCountY;e+=1)s.push(t),t-=10;return s},stepsX(){const t=[...new Set(this.karmaStats.map(t=>t.date))];return t},barWidth(){return(this.width-this.xPadding)/this.karmaStats.length},graphHeight(){return this.stepYHeight*(this.stepsCountY-1)+5}},methods:{getBarHeight(t){const s=Math.abs(this.stepsY[0])+Math.abs(this.stepsY[this.stepsY.length-1]);return Math.abs(t.count)*this.graphHeight/s}}},_=u,m=(e("17d3"),e("2877")),p=Object(m["a"])(_,l,c,!1,null,null,null),g=p.exports,d=e("0272"),h={components:{TMDescriptionList:o["a"],TMBlock:n["a"],TMKarmagraph:g,TMLayoutSidebar:d["a"]},asyncData({store:t}){const s=t.getters["global/isDesktop"];return s?Promise.all([t.dispatch("users/loadUsersStatistics"),t.dispatch("users/loadKarmaStats")]).catch(()=>Promise.resolve()):Promise.resolve(!0)},computed:{...Object(r["e"])("users",["statistics","karmaStats"]),...Object(r["c"])("global",["isDesktop"]),...Object(r["c"])("i18n",["langOptions"]),items(){const t=new Intl.NumberFormat(this.langOptions.hl),s=s=>t.format(s),{msg:e}=this,{total:a,male:i,female:r,other:n}=this.statistics;return[{title:e("STATISTICS_TOTAL"),value:s(a)},{title:e("STATISTICS_MALE"),value:s(i)},{title:e("STATISTICS_FEMALE"),value:s(r)},{title:e("STATISTICS_OTHER"),value:s(n)}]}}},v=h,S=Object(m["a"])(v,a,i,!1,null,null,null);s["default"]=S.exports},f8fd:function(t,s,e){"use strict";e("60ca")},fa96:function(t,s,e){}}]);
//# sourceMappingURL=page-flows.ad3a6f38.js.map