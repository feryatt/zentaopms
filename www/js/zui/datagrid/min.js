/*!
 * ZUI: 数据表格② - v1.10.0 - 2023-02-17
 * http://openzui.com
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2023 cnezsoft.com; Licensed MIT
 */
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var l=t||window.event,n=s.call(arguments,1),d=0,g=0,h=0,u=0,f=0,p=0;if(t=e.event.fix(l),t.type="mousewheel","detail"in l&&(h=l.detail*-1),"wheelDelta"in l&&(h=l.wheelDelta),"wheelDeltaY"in l&&(h=l.wheelDeltaY),"wheelDeltaX"in l&&(g=l.wheelDeltaX*-1),"axis"in l&&l.axis===l.HORIZONTAL_AXIS&&(g=h*-1,h=0),d=0===h?g:h,"deltaY"in l&&(h=l.deltaY*-1,d=h),"deltaX"in l&&(g=l.deltaX,0===h&&(d=g*-1)),0!==h||0!==g){if(1===l.deltaMode){var v=e.data(this,"mousewheel-line-height");d*=v,h*=v,g*=v}else if(2===l.deltaMode){var m=e.data(this,"mousewheel-page-height");d*=m,h*=m,g*=m}if(u=Math.max(Math.abs(h),Math.abs(g)),(!i||u<i)&&(i=u,r(l,u)&&(i/=40)),r(l,u)&&(d/=40,g/=40,h/=40),d=Math[d>=1?"floor":"ceil"](d/i),g=Math[g>=1?"floor":"ceil"](g/i),h=Math[h>=1?"floor":"ceil"](h/i),c.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();f=t.clientX-y.left,p=t.clientY-y.top}return t.deltaX=g,t.deltaY=h,t.deltaFactor=i,t.offsetX=f,t.offsetY=p,t.deltaMode=0,n.unshift(t,d,g,h),o&&clearTimeout(o),o=setTimeout(a,200),(e.event.dispatch||e.event.handle).apply(this,n)}}function a(){i=null}function r(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var o,i,l=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],s=Array.prototype.slice;if(e.event.fixHooks)for(var d=l.length;d;)e.event.fixHooks[l[--d]]=e.event.mouseHooks;var c=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var a=n.length;a;)this.addEventListener(n[--a],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",c.getLineHeight(this)),e.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var a=n.length;a;)this.removeEventListener(n[--a],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var a=e(t),r=a["offsetParent"in e.fn?"offsetParent":"parent"]();return r.length||(r=e("body")),parseInt(r.css("fontSize"),10)||parseInt(a.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),function(e,t){"use strict";function a(t){t instanceof e&&(t=t[0]);var a=document.createRange();a.selectNodeContents(t);var r=window.getSelection();r.removeAllRanges(),r.addRange(a)}function r(e){e=e.toLowerCase();var t="r"===e[0]?e.substring(1).split("c"):e.split("-");return[parseInt(t[0],10),parseInt(t[1],10)]}function o(e,a){return a===t?"R"+e:["R",e,"C",a].join("")}var i=function(t){var a=[];t.find("thead>tr:first>th").each(function(t){var r=e(this);if(a.push(e.extend({name:t,label:r.html(),html:!0,width:r.outerWidth()},r.data())),r.attr("colspan")&&"1"!==r.attr("colspan"))throw new Error("Table th element with colspan attribute is not support.")});var r=[];return t.find("tbody>tr").each(function(){var t=e(this),a={};t.children("td").each(function(t){a[t]=e(this).html()}),r.push(e.extend(a,t.data()))}),{cols:a,array:r,length:r.length}},l="zui.datagrid",n={date:{getter:function(e,t,a){var r=a.options.defaultDateFormatter||a.options.defaultDateFormater;return Date.create(e).format(r)},setter:function(e,t,a){if("string"==typeof e){var r=parseInt(e,10);isNaN(r)||(e=r)}return Date.timestamp(e)}}},s={},d={page:0,recTotal:0,recPerPage:10},c={fixedLeftUntil:0,fixedTopUntil:0,order:"asc",sortBy:null,pager:d,selections:{}},g=function(t,a){var r=0,o=a.length,i=0,l={};return e.each(t,function(e,t){var n=typeof t;"number"===n||"number"===n?t+="":"string"!==n&&(t=JSON.stringify(n));for(var s=0,d=0;d<o;++d){var c=a[d];t.includes(c)&&(s=t.startsWith(c)?10:20,l[c]||(l[c]=1,i++))}r+=s}),r=i===o?r:0},h=function(e,t){return e==t?0:e<t?-1:1},u={zh_cn:{errorCannotGetDataFromRemote:"无法从远程服务器（{0}）获取数据。",errorCannotHandleRemoteData:"无法处理远程服务器返回的数据。"},zh_tw:{errorCannotGetDataFromRemote:"無法從遠程服務器（{0}）獲取數據。",errorCannotHandleRemoteData:"無法處理遠程服務器返回的數據。"},en:{errorCannotGetDataFromRemote:"Cannot fetch data from remote server {0}.",errorCannotHandleRemoteData:"Cannot handle the remote data."}},f=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,p=function(t,a){var r=this,o=r.$=e(t);r.name=l,r.uuid=e.zui.uuid(),r.id="zui-datagrid-"+r.uuid,a=e.extend({},p.DEFAULTS,r.$.data(),a);var d=e.zui.clientLang?e.zui.clientLang():"en",g=a.lang;e.isPlainObject(g)?r.lang=e.extend(!0,{},e.zui.getLangData?e.zui.getLangData(l,d,u):u[d],g):(g=g||d,r.lang=e.zui.getLangData?e.zui.getLangData(l,g,u):u[g]||u[d]),a.valueOperator=e.extend({},n,a.valueOperator),a.rowDefaultHeight=a.rowDefaultHeight||30,a.headerHeight=a.headerHeight||a.rowDefaultHeight||30,r.options=a,"number"!=typeof a.borderWidth&&(a.borderWidth=1),o.is("table")&&(a.dataSource=e.extend(i(r.$),a.dataSource),o.hide(),o=e('<div class="datagrid" id="datagrid-'+r.uuid+'" />').insertAfter(r.$));var h=o.find(".datagrid-container:first");h.length||(h=e('<div class="datagrid-container" />').appendTo(o)),h.css({width:a.width,borderWidth:a.borderWidth});var f=e(document),v=function(t){var a=h.find(".datagrid-scrollbar-"+t);a.length||(a=e('<div class="datagrid-scrollbar datagrid-scrollbar-'+t+'"><div class="bar"></div></div>').appendTo(h));var o,i,n,s,d=!1,c=null,g=".scrollbar"+t+"."+l+"."+r.uuid,u=function(e){if(d){var a=e["h"===t?"pageX":"pageY"];if(c!==a){c=a,a=a-o+i;var l,g=r.layout[t+"Scroll"];l=n?c-o+s:Math.max(0,Math.min(g.space,a-Math.round(g.barSize/2))),"h"===t?r.setScrollbarOffset(l):r.setScrollbarOffset(null,l)}}},p=0,v=function(t){p&&(e.zui.clearAsap||clearTimeout)(p),p=(e.zui.asap||setTimeout)(function(){p=0,u(t)},0)};a.on("mousedown",function(l){l.preventDefault(),d=!0;var c=r.layout[t+"Scroll"],h="h"===t?"X":"Y";i=l["offset"+h],o=l["page"+h],n=e(l.target).is(".bar"),s=c.offset,n&&(i+=s),v(l),a.addClass("scrolling"),f.on("mouseup"+g,function(e){d=!1,v(e),f.off(g),a.removeClass("scrolling")}).on("mousemove"+g,v)}),r["$"+t+"Scroll"]=a,r["$"+t+"Scrollbar"]=a.find(".bar")};v("h"),v("v");var m=a.mouseWheelFactor,y=window.navigator.userAgent.match(/Win/i),C="onwheel"in document.createElement("div");y&&!C&&(m*=20),C&&(m*=-1),h.on(C?"wheel":"mousewheel",function(e){var t=C?e.originalEvent.deltaX:e.deltaX,a=C?e.originalEvent.deltaY:e.deltaY,o=r.layout,i=o.scrollLeft-Math.round(t*m),l=o.scrollTop-Math.round(a*m);i=Math.max(0,Math.min(i,o.width-o.containerWidth)),l=Math.max(0,Math.min(l,o.height-o.containerHeight)),i===o.scrollLeft&&l===o.scrollTop||(r.scroll(i,l),e.preventDefault())}),r.$container=h;var w=o.find(".datagrid-cells:first");if(w.length||(w=e('<div class="datagrid-cells" />').appendTo(h)),w.toggleClass("datagrid-hover-cell",!!a.hoverCell).toggleClass("datagrid-hover-row",!!a.hoverRow).toggleClass("datagrid-hover-col",!!a.hoverCol).toggleClass("datagrid-hover-shadow",!!a.hoverCol),r.$cells=w,r.isFuncConfigs="function"==typeof a.configs,r.configs=r.isFuncConfigs?a.configs:e.extend({},s,a.configs),r.layout={scrollLeft:0,scrollTop:0},r.configsCache={},r.userConfigs={},r.states=e.extend(!0,{},c,a.states),r.cells=[],r.setPager(r.states.pager),r.setDataSource(a.dataSource),a.responsive&&h.on("resize",function(){r.layout.cols=null,r.render()}),a.hoverCol&&w.on("mouseenter",".datagrid-cell-head",function(){var t=e(this),a=t.data("col");r.$cells.find(".datagrid-cell.hover").removeClass("hover"),r.$cells.find('.datagrid-cell[data-col="'+a+'"]').addClass("hover")}).on("mouseleave",".datagrid-cell-head.hover",function(){r.$cells.find(".datagrid-cell.hover").removeClass("hover")}),a.sortable&&w.on("click",".datagrid-col-sortable",function(){var t=e(this).data("col"),a=r.getColConfig(t),o=r.states.sortBy,i=r.states.order;o!==a.name?(o=a.name,i="desc"):"desc"===i?i="asc":"asc"===i&&(o=""),r.sortBy(o,i)}),a.onClickCell&&w.on("click",".datagrid-cell",function(t){var a=e(this),o=r.getCell(a.data("row"),a.data("col"));r.$.callComEvent(r,"onClickCell",[t,o,a])}),a.checkable?a.selectable&&e.fn.selectable?(r.selectable=w.selectable(e.extend({selector:".datagrid-row-cell",trigger:a.checkByClickRow?null:".datagrid-row-cell .datagrid-has-checkbox",clickBehavior:"multi",select:function(e){r.checkRow(e.id,!0)},unselect:function(e){r.checkRow(e.id,!1)}},e.isPlainObject(a.selectable)?a.selectable:null)).data("zui.selectable"),w.on("click",".datagrid-cell-head.datagrid-has-checkbox",function(){r.checkRow(e(this).data("row")),r.selectable.syncSelectionsFromClass()})):w.on("click",a.checkByClickRow?".datagrid-row":".datagrid-has-checkbox",function(t){var a=e(this).data("row");(a||e(t.target).closest(".datagrid-has-checkbox").length)&&r.checkRow(a)}):a.freeSelect&&(a.selectable&&e.fn.selectable||w.on("click",".datagrid-cell-cell",function(t){var a=e(this),o=a.data("row"),i=a.data("col");r.selectCell(o,i,!0,!0)})),a.editOnDbclick&&(w.on("dblclick",".datagrid-cell-cell:not(.editing)",function(t){var a=e(this),o=a.data("row"),i=a.data("col");r.setCellEditable(o,i,!0),t.preventDefault()}),w.on("blur",".datagrid-cell-cell.editing",function(t){var a=e(this),o=a.data("row"),i=a.data("col");r.editCell(o,i,a.text().trim(),!0)}).on("paste",".datagrid-cell-cell.editing",function(t){var a=e(this);a.text(a.text().trim())})),e.fn.pager){var b=r.$.find(".pager");b.length&&(r.pagerObj=b.pager(e.extend({},r.pager,{onPageChange:function(e){r.setPager(e).render()}})).data("zui.pager"))}if(e.fn.searchBox){var x=r.$.find(".search-box");x&&(r.searchbox=x.searchBox({onSearchChange:function(e){r.search(e)}}))}r.render()};p.prototype.setPager=function(t,a,r){var o=this;"object"==typeof t&&(r=t.recPerPage,a=t.recTotal,t=t.page);var i=o.pager,l=e.extend({},i);return i||(i=e.extend({},d)),"number"==typeof r&&r>0&&(i.recPerPage=r),"number"==typeof a&&a>=0&&(i.recTotal=a),"number"==typeof t&&t>=0&&(i.page=t),i.totalPage=i.recTotal&&i.recPerPage?Math.ceil(i.recTotal/i.recPerPage):1,i.page=Math.max(0,Math.min(i.page,i.totalPage)),i.pageRecCount=i.recTotal,i.page&&i.recTotal&&(i.page<i.totalPage?i.pageRecCount=i.recPerPage:i.page>1&&(i.pageRecCount=i.recTotal-i.recPerPage*(i.page-1))),i.skip=i.page>1?(i.page-1)*i.recPerPage:0,i.end=i.skip+i.pageRecCount,o.pager=i,l.page===i.page&&l.recTotal===i.recTotal&&l.recPerPage===i.recPerPage||(setTimeout(function(){o.scroll(0,0)},200),o.layout.cols=null),o},p.prototype.goToPage=function(e){return this.goToPage(e)},p.prototype.gotoPage=function(e){return this.setPager(e).render()},p.prototype.setSearch=function(a){return a!==t&&null!==a||(a=""),this.states.search=e.trim(a),this},p.prototype.search=function(e){var t=this;return e!==t.states.search&&t.pager.page&&t.setPager(1),t.setSearch(e).render()},p.prototype.setSorter=function(e,a){var r=this;return a===t&&(a="desc"===r.states.order?"asc":"desc"),r.states.order=a.toLowerCase(),r.states.sortBy=e,r},p.prototype.sortBy=function(e,t){return this.setSorter(e,t).render()},p.prototype.setDataSource=function(a,r){var o=this,i={},l=o.dataSource&&o.dataSource.cols;if(Array.isArray(a)?(i.array=a,i.length=a.length,o.setPager("",a.length)):e.isPlainObject(a)?i=e.extend(i,a):"string"==typeof a&&(i.remote=a),i.cache===!0||i.cache===t?(i.cache=[],i.cacheSize=1):"number"==typeof i.cache&&(i.cacheSize=i.cache,i.cache=[]),Array.isArray(i.data)?(i.array=i.data,i.length=i.array.length,o.setPager("",i.length),delete i.data):i.data||"function"!=typeof i.getByIndex||o.setPager("",i.length),o.dataSource=i,r=r||i.cols||l||[],r.length)for(var n=0;n<r.length;++n){var s=r[n];"string"==typeof s&&(r[n]={name:s})}r!==l&&(o.layout.cols=null),i.cols=r},p.prototype.filterData=function(e,t){var a=this,r=e,o=null;if(t.search){var i=t.search.replace(/\s{2,}/g," ").split(" ");r=[];for(var l=a.options.searchFunc||g,n=0;n<e.length;++n){var s=e[n],d=l(s,i,n,t,a);d&&(null===o&&(o="number"==typeof d),o&&(s._SCORE=d),r.push(s))}}if(a.setPager(-1,r.length),r.length){var c=t.sortBy||!!o&&"_SCORE",u="_SCORE"===c?"DESC":t.order;c||(c="index",u="ASC");var f=a.getColConfigByName(c),p="desc"===u,v=f&&f.sortFunc||a.options.sortFunc||h;r.sort(function(e,t){var r=v(e[c],t[c],e,t,c,a);return p?-1*r:r});var m=a.pager;m.page&&(r=r.slice(m.skip,m.end))}return r},p.prototype.getFilterParams=function(){var e=this,t=e.states;return{page:e.pager.page,recPerPage:e.pager.recPerPage,search:t.search,sortBy:t.sortBy,order:t.order}},p.prototype.loadData=function(t){var a=this;a.loadingId=e.zui.uuid();var r=function(e){return a.$.callComEvent(a,"onLoad",e),t&&t(e)},o=a.getFilterParams(),i=[o.page,o.recPerPage,o.search,o.sortBy,o.order].join("&"),l=a.getData(i);if(l)return r(l);var n=a.dataSource;if(n.array)return l=a.filterData(n.array,o),a.resetData(i,l,a.pager),r(l);if(n.getByIndex)return l=n.getByIndex,a.resetData(i,l),r(l);var s=n.loader,d=n.remote;if(!s&&d&&(s=function(t,r){var o="function"==typeof d?d(t,a):{url:d};e.ajax(e.extend({type:"GET",data:t,dataType:"json",success:function(t,o,i){if(n.remoteConverter&&(t=n.remoteConverter(t,o,i,a)),"string"==typeof t&&(t=e.parseJSON(t)),e.isPlainObject(t)&&t.data){var l=t.result||t.status;"success"===l||"ok"===l||200===l?r(t):r(!1,t.message||t.reason||a.lang.errorCannotHandleRemoteData,t)}else r(!1,a.lang.errorCannotHandleRemoteData,t)},error:function(){r(!1,a.lang.errorCannotGetDataFromRemote.format(n.remote))}},o))}),!s)return r(!1);a.renderLoading(!0);var c=a.loadingId;s(o,function(e,t){if(c===a.loadingId){if(a.renderLoading(!1),t)return a.showMessage(t,"danger"),void r(!1);a.resetData(i,e.data,e.pager),r(e.data)}})},p.prototype.getDataItem=function(e,t,a){var r=this;return t=t||r.getData(),"function"==typeof t?(a=a||r.getFilterParams(),t(e,a)):t[e]},p.prototype.showMessage=function(a,r,o){var i=this;i.messagerAutoCloseTimer&&(clearTimeout(i.messagerAutoCloseTimer),i.messagerAutoCloseTimer=null);var l=i.$container.find(".datagrid-messager");return a?(r=r||"info",o===t&&(o=5e3),l.length||(l=e('<div class="datagrid-messager" style="display: none"><div class="content"></div><button type="button" class="close">×</button></div>').appendTo(i.$container).on("click",".close",function(){l.slideUp(),i.messagerAutoCloseTimer&&(clearTimeout(i.messagerAutoCloseTimer),i.messagerAutoCloseTimer=null)})),l.attr("class","datagrid-messager bg-"+r).find(".content").text(a),l.slideDown(),void(o&&(i.messagerAutoCloseTimer=setTimeout(function(){l.slideUp(),i.messagerAutoCloseTimer=null},o)))):void l.slideUp()},p.prototype.renderLoading=function(a){var r=this;a!==t&&(r.states.loading=a);var o=r.$container.find(".datagrid-loading");a?(o.length||(o=e('<div class="datagrid-loading" style="display: none"><div class="content"><i class="icon icon-spin icon-spinner icon-2x"></i><div className="datagrid-loading-message"></div></div></div>').appendTo(r.$container)),o.find(".datagrid-loading-message").text("string"==typeof a?a:""),o.fadeIn()):o.fadeOut()},p.prototype.getData=function(e){var t=this.dataSource,a=null;if(e&&e!==t.dataId){if(t.cache&&t.cache.length)for(var r=t.cache.length-1;r>=0;--r){var o=t.cache[r];if(o.id===e){t.dataId=e,t.data=o.data,this.setPager(o.pager),a=o.data;break}}}else a=t.data;return a},p.prototype.resetData=function(t,a,r){var o=this.dataSource;if(o.dataId=t,o.data=a,o.cache){for(var i=o.cache.length-1;i>0;--i){var l=o.cache[i];if(l.id===t){o.cache.splice(i,1);break}}for(o.cache.push({id:t,data:a,pager:e.extend({},r)});o.cache.length>o.cacheSize;)o.cache.shift()}r&&this.setPager(r)},p.prototype.getRowLayout=function(e){var t=this.layout;if(0===e)return{top:0,height:t.headerHeight};var a=t.rowHeight;return{height:a,top:t.headerHeight+(e>1?(e-1)*a:0)+e*t.borderWidth}},p.prototype.updateLayout=function(){var a=this,r=a.options,o=a.layout,i=(a.data,a.pager),l=i.pageRecCount,n=a.$container,s=n.width(),d=a.dataSource;if(!d.cols.length&&l&&e.each(a.getDataItem(0),function(e){d.cols.push({name:e})}),!o.cols){for(var c,g,h=d.cols,u=r.colAutoMinWidth,f=r.colAutoDefaultWidth,p=0,v=0,m=r.rowIndexWidth,y=[{left:0,width:r.showRowIndex?"auto"===m?8*(l+a.pager.skip+"").length+18:m:0}],C=0,w=y[0].width,b=!1,x=0,S=0,T=0;T<h.length;++T){var D=h[T];D&&(g=D.width,g&&"auto"!==g||(g=.1),c={left:0},g>=1?(D.minWidth!==t&&(g=Math.max(g,D.minWidth)),c.width=g,w+=g):(D.minWidth===t&&(D.minWidth=u),c.grow=g,p+=g,v+=D.minWidth,x<=c.grow&&(x=c.grow,b=T+1)),c.minWidth=D.minWidth,!S&&D.checkbox&&(S=T+1,c.checkbox=!0),y.push(c))}r.checkable&&!S&&(y[0].checkbox=!0,"auto"===m&&(y[0].width+=30,w+=30));for(var M=s-w,R=M<v,P=0;P<y.length;++P){if(c=y[P],g=c.width,g||0===g||(g=R?f*c.grow*10:M*c.grow/p,g=Math.floor(Math.max(c.minWidth,g)),c.width=g),P>0){var L=y[P-1];c.left=L.left+L.width}C+=g}var k=s-C;b&&k>0&&(y[b].width+=k,C+=k),o.width=C,o.cols=y}o.containerWidth=s,o.rowHeight=r.rowDefaultHeight,o.borderWidth=r.borderWidth,o.headerHeight=r.showHeader?r.headerHeight:0,o.rowsLength=l+1,o.colsLength=o.cols.length,o.height=o.headerHeight+l*(o.rowHeight+o.borderWidth),o.spanMap={};var I=r.height;"page"===I&&(I=o.headerHeight+a.pager.recPerPage*(o.rowHeight+o.borderWidth)),n.css("height",I),o.containerHeight=I,o.vScrollSpare=o.height-o.containerHeight,o.hScrollSpare=o.width-o.containerWidth,a.layout=o;var H=!!i.page||r.partialRendering;return"auto"===H&&(H=o.height>2*o.containerHeight),o.partialRendering=H,o},p.prototype.getCell=function(e,a){var r,i,l=this,n=l.options,s=l.getCellConfig(e,a),d=a>0?l.dataSource.cols[a-1]:null,c={rowIndex:e,colIndex:a,config:s,checked:l.isRowChecked(s.rowId),selected:l.isCellSelected(s.id)};if(0===a?(r="index",i=!n.dataItemIsArray&&s.data&&s.data.index!==t?s.data.index:s.label!==t?s.label:e>0?l.pager.skip+e:""):0===e?(r="head",i=s.label!==t?s.label:s.name!==t?s.name:a):(r="cell",i=s.data&&s.data[n.dataItemIsArray?a:d.name]),e>0){var g=n.valueOperator,h=s.valueType,u=s.valueOperator||(g&&h?g[h]:null);u&&u.getter&&(i=u.getter(i,c,l))}i===t&&(i=""),c.value=i,c.type=r;var f=l.layout.spanMap;if(f[s.id]||s.hidden)c.hidden=!0;else if(s.colspan&&s.colspan>1||s.rowspan&&s.rowspan>1){for(var p=e+(s.rowspan||1),v=a+(s.colspan||1),m=e;m<p;++m)for(var y=a;y<v;++y)m===e&&y===a||(f[o(m,y)]=s.id);s.span=!0}return c},p.prototype.getRowConfig=function(a){var r=this,i=o(a),l=r.configsCache[i];l||(l=e.extend({},r.isFuncConfigs?r.configs(i):r.configs[i],r.userConfigs[i]),r.configsCache[i]=l);var n=a>0?r.getDataItem(a-1):null;return l.data=n,n&&(i=n.rowId||n.id),l.rowId=i!==t?i:0===a?"#header":a,l},p.prototype.getColConfigByName=function(e){for(var t=this.dataSource.cols,a=0;a<t.length;++a)if(t[a].name===e)return this.getColConfig(a+1);return null},p.prototype.getColConfig=function(t){var a=this,r="C"+t,o=null;return o||(o=e.extend({valueType:"string"},t>0?a.dataSource.cols[t-1]:{name:"index"},a.layout.cols?a.layout.cols[t]:null,a.isFuncConfigs?a.configs(r):a.configs[r],a.userConfigs[r]),0!==t||a.options.showRowIndex||(o.hidden=!0)),o},p.prototype.getCellConfig=function(t,a){var r=this,i=o(t,a),l=null;return l||(l=e.extend({id:i},r.getColConfig(a),r.getRowConfig(t),r.isFuncConfigs?r.configs(i):r.configs[i],r.userConfigs[i])),l},p.prototype.isRowChecked=function(e){return!!this.states.selections[e]},p.prototype.checkRow=function(e,a,r){var o=this,i=o.states.selections,l=o.getRowConfig(e),n=l.rowId;if(a===t&&(a=!i[n]),i[n]!==a){if(a?i[n]=l:(delete i[n],e>0&&i["#header"]&&(delete i["#header"],o.renderRow(0))),o.renderRow(e),0===e){o.toggleAnimation(!1);for(var s=1;s<o.layout.rowsLength;++s)o.checkRow(s,a,!0);o.toggleAnimation(!0)}return o.renderFixeds(),r||o.$.callComEvent(o,"onSelectRow",[n,a,i]),a}},p.prototype.toggleAnimation=function(e){var a=this;e===t&&(e=a.$.hasClass("no-animation")),a.toggleAnimationTimer&&(clearTimeout(a.toggleAnimationTimer),a.toggleAnimationTimer=null),e?a.toggleAnimationTimer=setTimeout(function(){a.toggleAnimationTimer=null,a.$.removeClass("no-animation")},500):a.$.addClass("no-animation")},p.prototype.getCheckItems=function(){var t=this.states.selections,a=[];return t&&e.each(t,function(e){a.push(t[e].data)}),a},p.prototype.getCellElement=function(t,a){return"string"==typeof t&&(t=r(t),a=t[1],t=t[0]),e(["#"+this.id,"cell",t,a].join("-"))},p.prototype.selectCell=function(a,r,i,l,n){var s=this,d=o(a,r),c=s.states.selections;if(l&&e.each(c,function(e){d!==e&&c[e]&&(delete c[e],s.getCellElement(e).removeClass("selected"))}),i===t&&(i=!c[d]),c[d]!==i)return i?c[d]=!0:delete c[d],s.getCellElement(a,r).toggleClass("selected",!!i),n||s.$.callComEvent(s,"onSelectCell",[a,r,i,c]),i},p.prototype.getSelectCells=function(){var t=this.states.selections,a=[];return t&&e.each(t,function(e){t[e]&&a.push(r(e))}),a},p.prototype.isCellSelected=function(e,t){var a=this.states.selections,r="string"==typeof e?e:o(e,t);return!!a&&!!a[r]},p.prototype.setCellEditable=function(e,t){var r=this,i=o(e,t);if(r.editingCellID){if(r.editingCellID===i)return;r.cancelCellEditable()}r.editingCellID=i;var l=r.renderCell(e,t);a(l.trigger("focus"))},p.prototype.editCell=function(e,t,a,r){var o=this,i=o.getCell(e,t);if(i.value===a)return void o.cancelCellEditable();var l=o.options;if(i.config.data){var n=o.dataSource.cols[t-1];i.config.data[l.dataItemIsArray?t:n.name]=a}r&&(o.editingCellID=null),o.renderCell(e,t),o.$.callComEvent(o,"onEditCell",[e,t,a,i])},p.prototype.cancelCellEditable=function(){var e=this;if(e.editingCellID){var t=e.editingCellID;e.editingCellID=null,e.renderCellByID(t)}},p.prototype.renderCellByID=function(e){var e=r(e);return this.renderCell(e[0],e[1])},p.prototype.renderCell=function(t,a,r){var o=this,i=o.options,l=o.getCell(t,a),n=l.config;if(!l.hidden){var s=n.checkbox,d=!s&&!n.readonly&&"cell"===l.type&&l.config.id===o.editingCellID,c=[o.id,"cell",t,a].join("-"),g=e("#"+c);if(!g.length&&(r=r||e("#"+o.id+"-row-"+t),g=(i.cellCreator?i.cellCreator(l,o):e('<div class="datagrid-cell" />')).appendTo(r),g.attr({id:c,"data-type":l.type,"data-col":l.colIndex,"data-row":l.rowIndex}).toggleClass("datagrid-cell-head",0===t).toggleClass("datagrid-cell-cell","cell"===l.type).toggleClass("datagrid-cell-index",0===a),s)){var h=g.find(".datagrid-checkbox");h.length||(h=e('<div class="checkbox-primary datagrid-checkbox"><label class="content"></label></div>').prependTo(g.addClass("datagrid-has-checkbox")))}var u=i.borderWidth,p=o.layout,v=p.colsLength,m={top:u?-u:0,bottom:u?-u:0,left:u?n.left-u:n.left,width:u?n.width+(v-1===a?2:1)*u:n.width,borderWidth:u};if(n.span&&(n.rowspan&&n.rowspan>1&&(m.bottom-=(n.rowspan-1)*(p.rowHeight+u)),n.colspan&&n.colspan>1))for(var y=a+n.colspan,C=a+1;C<y;++C){var w=o.getCell(t,C);m.width+=w.config.width}var b=n.style;"function"==typeof b&&(b=b(l,m,o));var x=e.extend({},b,m);g.css(x).toggleClass("datagrid-cell-span",!!n.span);var S=i.cellFormatter||i.cellFormator;if(S)S(g,l,o);else{var T=s?g.find(".content"):g;T[l.config.html?"html":"text"](l.value),n.className&&g.addClass(n.className)}if((a>0||!i.dataItemIsArray)&&0===t&&i.sortable&&n.sort!==!1){var D=!1;n.name===o.states.sortBy&&(D="desc"===o.states.order?"down":"up");var M=g.find(".datagrid-sorter");M.length||(M=e('<div class="datagrid-sorter"><i class="icon icon-sort"></i></div>').appendTo(g),g.addClass("datagrid-col-sortable")),M.toggleClass("datagrid-sort-up","up"===D).toggleClass("datagrid-sort-down","down"===D)}return s&&(g.find(".datagrid-checkbox").toggleClass("checked",l.checked),r.toggleClass("active",l.checked)),g.toggleClass("selected",l.selected).attr("contenteditable",d?f?"true":"plaintext-only":null).toggleClass("editing",d),g}},p.prototype.renderRow=function(t){var a=this,r=a.layout,o=a.options,i=a.getRowLayout(t),l=r.colsLength,n=a.id+"-row-"+t,s=e("#"+n);s.length?r.partialRendering&&s.css("top",i.top-r.scrollTop):(s=(o.rowCreator?o.rowCreator(t,a):e('<div class="datagrid-row" />')).appendTo(a.$cells),s.attr({id:n,"data-row":t,"data-id":t}).css({top:r.partialRendering?i.top-r.scrollTop:i.top,height:i.height}).toggleClass("datagrid-row-head",0===t).toggleClass("datagrid-row-cell",0!==t));for(var d=0;d<l;++d)a.renderCell(t,d,s);return s},p.prototype.renderData=function(){var t=this,a=t.layout;a.cols||t.updateLayout();var r=1,o=a.rowsLength-1;if(a.partialRendering){var i=a.rowHeight+a.borderWidth;r=Math.min(o,Math.max(1,Math.floor((a.scrollTop-a.headerHeight)/i))),o=Math.min(o,Math.max(1,Math.ceil((a.scrollTop+a.containerHeight-a.headerHeight)/i))),t.$cells.find(".datagrid-row").each(function(){var t=e(this),a=t.data("row");a>0&&!t.hasClass("datagrid-fixed")&&(a<r||a>o)&&t.remove()})}t.options.showHeader&&t.renderRow(0);for(var l=r;l<=o;++l)t.renderRow(l);if(a.vScrollSpare){var n=t.states,s=n.fixedTopUntil,d=n.fixedBottomFrom;if("number"==typeof s&&s>0&&s<r)for(var l=1;l<=s;++l)t.renderRow(l);if("number"==typeof d&&d>0&&d>o)for(var l=d;l<=a.rowsLength-1;++l)t.renderRow(l)}t.pagerObj&&t.pagerObj.set(t.pager)},p.prototype.render=function(e){var t=this,a=t.options;return!e&&a.renderDelay?(t.renderDelayTimer&&clearTimeout(t.renderDelayTimer),t.renderDelayTimer=setTimeout(function(){t.render(!0)},a.renderDelay),t):(t.renderDelayTimer&&(clearTimeout(t.renderDelayTimer),t.renderDelayTimer=null),t.loadData(function(e){var a=t.updateLayout();t.$cells.css({width:a.width,height:a.partialRendering?a.containerHeight:t.layout.height}),t.renderData(),t.renderScrolls(),t.renderFixeds(),t.$.callComEvent(t,"onRender")}),t)},p.prototype.setScrollbarOffset=function(e,t){var a=this,r=a.layout,o=r.scrollLeft,i=r.scrollTop;if("number"==typeof e){var l=r.hScroll;l.offset!==e&&(o=Math.round(e*r.hScrollSpare/l.space))}if("number"==typeof t){var n=r.vScroll;n.offset!==t&&(i=Math.round(t*r.vScrollSpare/n.space))}a.scroll(o,i)},p.prototype.renderScrolls=function(){var e=this,t=e.layout,a=t.vScrollSpare,r=t.hScrollSpare,o=a>0,i=r>0;if(e.$vScroll.toggle(o),e.$hScroll.toggle(i),t.scrollLeft=i?Math.max(0,Math.min(r,t.scrollLeft)):0,t.scrollTop=o?Math.max(0,Math.min(a,t.scrollTop)):0,o){var l=e.$vScrollbar,n=t.containerHeight/t.height,s=Math.max(20,Math.floor(n*t.containerHeight)),d=t.containerHeight-s,c=d/a,g=Math.round(t.scrollTop*c);t.vScroll={space:d,size:a,scale:c,barSize:s,offset:g};var h={height:s,top:g};l.css(h)}if(i){var l=e.$hScrollbar,n=t.containerWidth/t.width,s=Math.max(20,Math.floor(n*t.containerWidth)),d=t.containerWidth-s,g=Math.round(t.scrollLeft*d/r),h={width:s,left:g};t.hScroll={offset:g,space:d,size:r,barSize:s},l.css(h)}e.$cells.css({top:t.partialRendering?0:-t.scrollTop,left:-t.scrollLeft})},p.prototype.scroll=function(e,t,a){var r=this,o=new Date,i=r.options.scrollDelay;if(i){if(!a&&r.lastScrollTime&&o-r.lastScrollTime<i)return r.scrollDelayTimer&&clearTimeout(r.scrollDelayTimer),void(r.scrollDelayTimer=setTimeout(function(){r.scroll(e,t)},i-(o-r.lastScrollTime)));r.scrollDelayTimer&&(clearTimeout(r.scrollDelayTimer),r.scrollDelayTimer=null),r.lastScrollTime=o}var l=r.layout,n=!1,s=!1;"number"==typeof e&&(e=Math.max(0,Math.min(e,l.width-l.containerWidth)),e!==l.scrollLeft&&(n=!0,l.scrollLeft=e)),"number"==typeof t&&(t=Math.max(0,Math.min(t,l.height-l.containerHeight)),t!==l.scrollTop&&(s=!0,l.scrollTop=t)),s&&l.partialRendering&&r.renderData(),(n||s)&&(r.renderScrolls(),r.renderFixeds()),r.$.callComEvent(r,"onScroll",[e,t,{vScrolled:s,hScrolled:n}])},p.prototype.renderFixeds=function(){var t=this,a=t.states,r=t.layout;if(t.$cells.find(".datagrid-fixed").removeClass("datagrid-fixed"),t.$cells.find(".datagrid-fixed-edge-top").removeClass("datagrid-fixed-edge-top"),t.$cells.find(".datagrid-fixed-edge-bottom").removeClass("datagrid-fixed-edge-bottom"),t.$cells.find(".datagrid-fixed-edge-left").removeClass("datagrid-fixed-edge-left"),t.$cells.find(".datagrid-fixed-edge-right").removeClass("datagrid-fixed-edge-right"),r.vScrollSpare){var o=a.fixedTopUntil;if("number"==typeof o&&o>-1){o=Math.min(o,r.rowsLength);for(var i=0;i<=o;++i){var l=t.getRowLayout(i),n=e("#"+t.id+"-row-"+i),s=r.partialRendering?l.top:l.top+r.scrollTop;n.addClass("datagrid-fixed").css("top",s),i===o&&r.scrollTop&&n.addClass("datagrid-fixed-edge-top")}}else o=-1;var d=a.fixedBottomFrom;if("number"==typeof d&&d>-1){d=Math.max(o>-1?o+1:1,Math.min(d,r.rowsLength));for(var i=d;i<r.rowsLength;++i){var l=t.getRowLayout(i),n=e("#"+t.id+"-row-"+i),s=r.partialRendering?l.top-r.vScrollSpare:l.top-r.vScrollSpare+r.scrollTop;n.addClass("datagrid-fixed").css("top",s),i===d&&r.scrollTop<r.vScrollSpare&&n.addClass("datagrid-fixed-edge-bottom")}}}if(r.hScrollSpare){var c=a.fixedLeftUntil;if("number"==typeof c&&c>-1){c=Math.min(c,r.colsLength);for(var i=0;i<=c;++i){var g=r.cols[i],h=t.$cells.find('.datagrid-cell[data-col="'+i+'"]'),u=g.left+r.scrollLeft-r.borderWidth;h.addClass("datagrid-fixed").css("left",u),i===c&&r.scrollLeft&&h.addClass("datagrid-fixed-edge-left")}}else c=-1;var f=a.fixedRightFrom;if("number"==typeof f&&f>-1){f=Math.max(c>-1?c+1:1,Math.min(f,r.colsLength));for(var i=f;i<r.colsLength;++i){var g=r.cols[i],h=t.$cells.find('.datagrid-cell[data-col="'+i+'"]'),u=g.left-r.hScrollSpare+r.scrollLeft;h.addClass("datagrid-fixed").css("left",u),i===f&&r.scrollLeft<r.hScrollSpare&&h.addClass("datagrid-fixed-edge-right")}}}},p.DEFAULTS={width:"auto",height:400,rowDefaultHeight:36,colAutoDefaultWidth:80,colAutoMinWidth:50,showHeader:!0,headerHeight:36,showRowIndex:!0,rowIndexWidth:"auto",borderWidth:1,hoverRow:!0,hoverCol:!0,hoverCell:!1,responsive:!0,defaultDateFormatter:"yyyy-MM-dd hh:mm",partialRendering:"auto",scrollDelay:0,renderDelay:100,checkByClickRow:!0,selectable:!0,mouseWheelFactor:1},e.fn.datagrid=function(t){return this.each(function(){var a=e(this),r=a.data(l),o="object"==typeof t&&t;r||a.data(l,r=new p(this,o)),"string"==typeof t&&r[t]()})},p.NAME=l,e.fn.datagrid.Constructor=p,e(function(){e('[data-ride="datagrid"]').datagrid()})}(jQuery,void 0);