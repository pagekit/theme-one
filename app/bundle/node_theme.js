/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};


/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(5)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jan/htdocs/pagekit/packages/pagekit/theme-one/app/components/node-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div class="uk-form-horizontal">

	//         <template v-if="node.type === 'page'">
	//             <div class="uk-form-row">
	//                 <span class="uk-form-label">{{ 'Title' | trans }}</span>
	//                 <div class="uk-form-controls uk-form-controls-text">
	//                     <label><input type="checkbox" v-model="node.theme.title_hide"> {{ 'Hide Title' | trans }}</label>
	//                 </div>
	//             </div>

	//             <div class="uk-form-row">
	//                 <span class="uk-form-label">{{ 'Title Size' | trans }}</span>
	//                 <div class="uk-form-controls uk-form-controls-text">
	//                     <label><input type="checkbox" v-model="node.theme.title_large"> {{ 'Extra large title.' | trans }}</label>
	//                 </div>
	//             </div>

	//             <div class="uk-form-row">
	//                 <span class="uk-form-label">{{ 'Alignment' | trans }}</span>
	//                 <div class="uk-form-controls uk-form-controls-text">
	//                     <label><input type="checkbox" v-model="node.theme.alignment"> {{ 'Center the title and content.' | trans }}</label>
	//                 </div>
	//             </div>
	//         </template>

	//         <div class="uk-form-row">
	//             <label for="form-class" class="uk-form-label">{{ 'HTML Class' | trans }}</label>
	//             <div class="uk-form-controls">
	//                 <input id="form-class" class="uk-form-width-large" type="text" v-model="node.theme.html_class">
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <span class="uk-form-label">{{ 'Sidebar' | trans }}</span>
	//             <div class="uk-form-controls uk-form-controls-text">
	//                 <label><input type="checkbox" v-model="node.theme.sidebar_first"> {{ 'Show the sidebar before the content.' | trans }}</label>
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <label class="uk-form-label">{{ 'Hero Image' | trans }}</label>
	//             <div class="uk-form-controls uk-form-controls-text">
	//                 <p class="uk-form-controls-condensed">
	//                     <label><input type="checkbox" v-model="node.theme.hero_viewport"> {{ 'Full viewport height' | trans }}</label>
	//                 </p>
	//                 <p class="uk-form-controls-condensed">
	//                     <label><input type="checkbox" v-model="node.theme.hero_contrast"> {{ 'Invert colors' | trans }}</label>
	//                 </p>
	//                 <p class="uk-form-controls-condensed uk-margin-bottom">
	//                     <label><input type="checkbox" v-model="node.theme.navbar_transparent"> {{ 'Transparent navbar as overlay' | trans }}</label>
	//                 </p>
	//                 <p class="uk-form-controls-condensed uk-form-width-large"><input-image :source.sync="node.theme.hero_image"></input-image></p>
	//                 <p class="uk-form-help-block">{{ 'Select a background image for the hero position.' | trans }}</p>
	//             </div>
	//         </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 90
	    },

	    props: ['node']

	};

	window.Site.components['node-theme'] = module.exports;

	// </script>

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal\">\n\n        <template v-if=\"node.type === 'page'\">\n            <div class=\"uk-form-row\">\n                <span class=\"uk-form-label\">{{ 'Title' | trans }}</span>\n                <div class=\"uk-form-controls uk-form-controls-text\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.title_hide\"> {{ 'Hide Title' | trans }}</label>\n                </div>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <span class=\"uk-form-label\">{{ 'Title Size' | trans }}</span>\n                <div class=\"uk-form-controls uk-form-controls-text\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.title_large\"> {{ 'Extra large title.' | trans }}</label>\n                </div>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <span class=\"uk-form-label\">{{ 'Alignment' | trans }}</span>\n                <div class=\"uk-form-controls uk-form-controls-text\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.alignment\"> {{ 'Center the title and content.' | trans }}</label>\n                </div>\n            </div>\n        </template>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-class\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.html_class\">\n            </div>\n        </div>\n\n  <div class=\"uk-form-row\">\n       <label for=\"form-class\" class=\"uk-form-label\">{{ 'Page Description' | trans }}</label>\n       <div class=\"uk-form-controls\">\n       <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.page_description\">\n   </div>\n    </div>\n\n          <div class=\"uk-form-row\">\n       <label for=\"form-class\" class=\"uk-form-label\">{{ 'Key Words' | trans }}</label>\n       <div class=\"uk-form-controls\">\n       <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.key_words\">\n   </div>\n    </div>\n\n           <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Sidebar' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.sidebar_first\"> {{ 'Show the sidebar before the content.' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{ 'Hero Image' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <p class=\"uk-form-controls-condensed\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.hero_viewport\"> {{ 'Full viewport height' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.hero_contrast\"> {{ 'Invert colors' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed uk-margin-bottom\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.navbar_transparent\"> {{ 'Transparent navbar as overlay' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed uk-form-width-large\"><input-image :source.sync=\"node.theme.hero_image\"></input-image></p>\n                <p class=\"uk-form-help-block\">{{ 'Select a background image for the hero position.' | trans }}</p>\n            </div>\n        </div>\n\n    </div>";

/***/ }
/******/ ]);
