webpackJsonp([0],{76:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),u=n(i),l=r(77),_=n(l),d=r(14),f=function(e){function t(){var e,r,n,s;a(this,t);for(var c=arguments.length,i=Array(c),u=0;u<c;u++)i[u]=arguments[u];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.renderedUserEmail=!1,n.getAuthor=function(){var e;return(e=n).__getAuthor__REACT_HOT_LOADER__.apply(e,arguments)},s=r,o(n,s)}return s(t,e),c(t,[{key:"__getAuthor__REACT_HOT_LOADER__",value:function(){return this.__getAuthor__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__getAuthor__REACT_HOT_LOADER__",value:function(e){if(!this.renderedUserEmail)return this.renderedUserEmail=!0,u.default.createElement("p",{className:"author"},e)}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{id:"UserContainer",className:"inner-container"},u.default.createElement(_.default,null,u.default.createElement(d.Link,{to:"/"},u.default.createElement("button",{className:"red"},"Back To Chat"))),this.props.messagesLoaded?u.default.createElement("div",{id:"message-container"},this.props.messages.map(function(t){if(t.user_id===e.props.userID)return u.default.createElement("div",{key:t.id,className:"message"},e.getAuthor(t.author),u.default.createElement("p",null,t.msg))})):u.default.createElement("div",{id:"loading-container"},u.default.createElement("img",{src:"/assets/icon.png",alt:"logo",id:"loader"}),"<"))}}]),t}(i.Component),p=f;t.default=p;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"UserContainer","/Users/Medcheck-Admin/Workspace/js/chatastophe/src/components/UserContainer.js"),__REACT_HOT_LOADER__.register(p,"default","/Users/Medcheck-Admin/Workspace/js/chatastophe/src/components/UserContainer.js"))}()},77:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=n(a),s=function(e){return o.default.createElement("div",{id:"Header"},o.default.createElement("img",{src:"/assets/icon.png",alt:"logo"}),o.default.createElement("h1",null,"Chatastrophe"),e.children)},c=s;t.default=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"Header","/Users/Medcheck-Admin/Workspace/js/chatastophe/src/components/Header.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/Medcheck-Admin/Workspace/js/chatastophe/src/components/Header.js"))}()}});