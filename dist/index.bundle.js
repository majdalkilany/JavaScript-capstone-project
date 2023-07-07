"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  font-size: large;
}

header {
  margin-bottom: 1rem;
  background: #413c3c;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 1rem 1rem;
}

.title {
  font-size: x-large;
  color: rgb(61, 58, 58);
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-transform: capitalize;
  gap: 1.1rem;
}

h1 {
  text-align: center;
}

#show-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 2rem;
  list-style-type: none;
}

.interact {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 0.5rem;
}

.comments {
  background-color: #979ba1;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.button .comments {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.likes {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.likes i {
  color: red;
  font-size: 20px;
  transition: color 0.3s ease-in-out;
}

.likes:hover i {
  color: pink;
}

.likes-count {
  margin-left: 1rem;
}

.likes-container {
  display: flex;
  align-items: center;
}

footer {
  height: 17vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgb(223, 216, 216);
  background-color: #fff;
}

footer p {
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  padding-bottom: 5rem;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  overflow: auto;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

#close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.img-preview {
  height: 30rem;
  width: 30rem;
}

.modal-content-container {
  display: flex;
  gap: 3rem;
  padding-bottom: 3rem;
}

h6 {
  font-size: x-large;
}

.summary {
  font-weight: bolder;
}

form {
  padding: 3rem;
  padding-left: 0;
}

.span-time {
  padding: 2rem;
  padding-top: 0;
  font-size: small;
}

.commenter-name {
  padding: 2rem;
  padding-bottom: 0;
  margin: 0;
  font-size: medium;
}

.comment {
  padding-left: 2rem;
}

.div-element-comments {
  padding-bottom: 1rem;
  width: 40%;
}

textarea {
  padding: 0.75rem 1.5rem;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

#username {
  padding: 0.75rem 1.5rem;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

/* Media queries for mobile devices */
@media only screen and (max-width: 767px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    gap: 0.5rem;
    height: auto;
  }

  #show-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .modal-content-container {
    flex-direction: column;
    gap: 2rem;
  }

  .div-element-comments {
    width: 100%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0;\n  font-size: large;\n}\n\nheader {\n  margin-bottom: 1rem;\n  background: #413c3c;\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  padding: 1rem 1rem;\n}\n\n.title {\n  font-size: x-large;\n  color: rgb(61, 58, 58);\n}\n\nul {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  text-transform: capitalize;\n  gap: 1.1rem;\n}\n\nh1 {\n  text-align: center;\n}\n\n#show-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n  padding: 2rem;\n  list-style-type: none;\n}\n\n.interact {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n  margin-top: 0.5rem;\n}\n\n.comments {\n  background-color: #979ba1;\n  color: #fff;\n  border: none;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.button .comments {\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 500;\n  transition: all 0.3s ease-in-out;\n}\n\n.likes {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.likes i {\n  color: red;\n  font-size: 20px;\n  transition: color 0.3s ease-in-out;\n}\n\n.likes:hover i {\n  color: pink;\n}\n\n.likes-count {\n  margin-left: 1rem;\n}\n\n.likes-container {\n  display: flex;\n  align-items: center;\n}\n\nfooter {\n  height: 17vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid rgb(223, 216, 216);\n  background-color: #fff;\n}\n\nfooter p {\n  margin: 0 auto;\n  font-size: 18px;\n  font-weight: 500;\n  color: #333;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  padding-bottom: 5rem;\n  border: 1px solid #888;\n  width: 80%;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  -o-border-radius: 10px;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n#close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.img-preview {\n  height: 30rem;\n  width: 30rem;\n}\n\n.modal-content-container {\n  display: flex;\n  gap: 3rem;\n  padding-bottom: 3rem;\n}\n\nh6 {\n  font-size: x-large;\n}\n\n.summary {\n  font-weight: bolder;\n}\n\nform {\n  padding: 3rem;\n  padding-left: 0;\n}\n\n.span-time {\n  padding: 2rem;\n  padding-top: 0;\n  font-size: small;\n}\n\n.commenter-name {\n  padding: 2rem;\n  padding-bottom: 0;\n  margin: 0;\n  font-size: medium;\n}\n\n.comment {\n  padding-left: 2rem;\n}\n\n.div-element-comments {\n  padding-bottom: 1rem;\n  width: 40%;\n}\n\ntextarea {\n  padding: 0.75rem 1.5rem;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 16px;\n  resize: none;\n}\n\n#username {\n  padding: 0.75rem 1.5rem;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 16px;\n  resize: none;\n}\n\n/* Media queries for mobile devices */\n@media only screen and (max-width: 767px) {\n  header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  ul {\n    gap: 0.5rem;\n    height: auto;\n  }\n\n  #show-list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .modal-content-container {\n    flex-direction: column;\n    gap: 2rem;\n  }\n\n  .div-element-comments {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentsCounter.js */ "./src/modules/commentsCounter.js");
/* harmony import */ var _modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likesCounter.js */ "./src/modules/likesCounter.js");
/* harmony import */ var _modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/moviesCounter.js */ "./src/modules/moviesCounter.js");







const APP_ID = 'DUanzoHMk8l8HLimHh6p';
let shows;

const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();

  shows = data.slice(0, 15);
  // Fetch likes count for each item and combine with base API data
  const likes = await getLikes();
  shows.forEach((show) => {
    const itemId = show.id;
    const likeData = likes.find((item) => item.item_id === itemId);
    show.likes = likeData ? likeData.likes : 0;
  });
};

const getLikes = async () => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`
  );
  const data = await res.json();
  return data;
};

const updateLikeCount = async (itemId) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic bWFqZDowMDAw');

  const raw = JSON.stringify({
    item_id: Number(itemId),
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));

  const likesCountElement = document.getElementById(`likes-count-${itemId}`);
  if (likesCountElement) {
    const likesCount = parseInt(likesCountElement.textContent, 10) + 1;
    likesCountElement.textContent = likesCount;
  }
};

fetchAPI()
  .then(() => {
    const showListContainer = document.getElementById('show-list');
    shows.forEach((show) => {
      const showTitle = show.name;
      const showImage = show.image.medium;
      const itemId = show.id;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${showImage}" alt="${showTitle}">
        <h2 class="title">${showTitle}</h2>
        <div class="interact">
          <button class="comments myBtn">Comment</button>
          <button class="likes" data-item-id="${itemId}"><i class="far fa-heart"></i></button>
          <span class="likes-count" id="likes-count-${itemId}">${show.likes}</span>
        </div>
        <hr>
      `;
      const btn = listItem.querySelector('.myBtn');
      btn.addEventListener('click', () => {
        const modal = document.getElementById('myModal');
        modal.innerHTML = ` <div class="modal-content">

      <span class="close" >&times;</span>
      <h6>MovieShow</h6>

    </div>`;

        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.runModal)(show);
      });

      showListContainer.appendChild(listItem);
      const likeButton = listItem.querySelector('.likes');
      likeButton.addEventListener('click', () => {
        const { itemId } = likeButton.dataset;
        updateLikeCount(itemId);
      });
    });

    const commentsCount = (0,_modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__.commentsCounter)();
    const likesCount = (0,_modules_likesCounter_js__WEBPACK_IMPORTED_MODULE_3__.likesCounter)();
    const moviesCount = (0,_modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__.moviesCounter)();

    const commentsCounterElement = document.querySelector('.counter.comments');
    const likesCounterElement = document.querySelector('.counter.likes');
    const moviesCounterElement = document.querySelector('.counter.movies');
    const allMoviesCounterElement = document.querySelector('#all .counter');

    commentsCounterElement.textContent = commentsCount;
    likesCounterElement.textContent = likesCount;
    moviesCounterElement.textContent = moviesCount;
    allMoviesCounterElement.textContent = moviesCount;
  })
  .catch((err) => console.log(err));


/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commentsCounter: () => (/* binding */ commentsCounter)
/* harmony export */ });
function commentsCounter() {
  const commentsElements = document.querySelectorAll('.comments');
  const commentsCount = commentsElements.length;
  return commentsCount;
}


/***/ }),

/***/ "./src/modules/commentsCounterPopup.js":
/*!*********************************************!*\
  !*** ./src/modules/commentsCounterPopup.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commentsCounterPopup: () => (/* binding */ commentsCounterPopup)
/* harmony export */ });
const commentsCounterPopup = () => {
  const countsCounterElements = document.querySelectorAll(
    '.div-element-comments'
  );
  const countsCounterElement = document.getElementById('commentsCount');
  const commentsCount = countsCounterElements.length;
  countsCounterElement.textContent = `comments (${commentsCount})`;
  return commentsCount;
};


/***/ }),

/***/ "./src/modules/likesCounter.js":
/*!*************************************!*\
  !*** ./src/modules/likesCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   likesCounter: () => (/* binding */ likesCounter)
/* harmony export */ });
function likesCounter() {
  const likesCountElements = document.querySelectorAll('.likes-count');
  let likesCount = 0;
  likesCountElements.forEach((element) => {
    const count = parseInt(element.textContent, 10);
    if (!Number.isNaN(count)) {
      likesCount += count;
    }
  });
  return likesCount;
}


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runModal: () => (/* binding */ runModal)
/* harmony export */ });
/* harmony import */ var _post_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-comments.js */ "./src/modules/post-comments.js");
/* harmony import */ var _commentsCounterPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounterPopup.js */ "./src/modules/commentsCounterPopup.js");



const runModal = async ({
  id,
  name,
  summary,
  language,
  genres,
  image: { original },
}) => {
  const commentsAPI = await fetchAPI(id);
  const modal = document.getElementById('myModal');
  const modalContent = document.querySelector('.modal-content');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalContent.textContent = '';
    }
  };

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('modal-des');
  modalContent.appendChild(descriptionContainer);

  modalContent.innerHTML = `
  <span class="close" >&times;</span>
  <h6>MovieShow</h6>
  <div class= "modal-content-container">
  <img src="${original}" alt="${name}" class= "img-preview">
  <div class= "modal-description">
  <h3> title : ${name}</h3>
  <h4> language : ${language} </h4>
  <h4> genres : ${genres[0]} ${genres[1]} </h4>
  <p>  <span class="summary">Summary</span> : ${summary}  </p>
  <br><br>
  </div>

  </div>
  <div id="comments-container">
  <h6 id="commentsCount"></h6>

</div>
  <form action="POST" id="myForm">
  <input type="hidden" name="item_id" id="item_id" value="${id}">

  <input type="text" name="username"
   id="username"
   placeholder="Enter your name ..."> <br> <br>
  <textarea id="comment"
   name="comment"
   rows="4" cols="40"
   placeholder="Enter your comment here..."></textarea><br>
   <input type="submit" value="comment" class="comments">
</form>

  `;
  // Get the <span> element that closes the modal
  const span = document.querySelector('.close');
  console.log(span);

  // When the user clicks the button, open the modal
  modal.style.display = 'block';

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    // console.log(span);
    modal.style.display = 'none';
    modalContent.textContent = '';
  };
  document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;
    const itemId = document.getElementById('item_id').value;
    renderComments(username, comment);
    (0,_post_comments_js__WEBPACK_IMPORTED_MODULE_0__.postComments)(username, comment, itemId);
    event.target.reset();
    (0,_commentsCounterPopup_js__WEBPACK_IMPORTED_MODULE_1__.commentsCounterPopup)();
  });

  if (commentsAPI.length >= 1) {
    // eslint-disable-next-line camelcase
    commentsAPI.forEach(({ username, comment, creation_date }) => {
      renderComments(username, comment, creation_date);
    });
  }
  (0,_commentsCounterPopup_js__WEBPACK_IMPORTED_MODULE_1__.commentsCounterPopup)();
};

const renderComments = (username, commentMessage, createdTime) => {
  const commentsContainer = document.getElementById('comments-container');
  const divElement = document.createElement('div');
  divElement.classList.add('div-element-comments');
  commentsContainer.appendChild(divElement);
  const commenterName = document.createElement('h6');
  commenterName.classList.add('commenter-name');
  commenterName.textContent = username;
  divElement.appendChild(commenterName);
  const comment = document.createElement('p');
  comment.classList.add('comment');
  comment.textContent = commentMessage;
  divElement.appendChild(comment);

  if (!createdTime) {
    const creationDate = new Date();
    [createdTime] = creationDate.toISOString().split('T');
  }

  const createdAt = document.createElement('span');
  createdAt.classList.add('span-time');
  createdAt.textContent = `at: ${createdTime}`;
  comment.appendChild(createdAt);
};

const fetchAPI = async (id) => {
  const baseURL = `
    https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUanzoHMk8l8HLimHh6p/comments?item_id=${id}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};


/***/ }),

/***/ "./src/modules/moviesCounter.js":
/*!**************************************!*\
  !*** ./src/modules/moviesCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moviesCounter: () => (/* binding */ moviesCounter)
/* harmony export */ });
function moviesCounter() {
  const moviesCounterElement = document.querySelector('.counter.movies');
  const showListContainer = document.getElementById('show-list');
  const moviesCount = showListContainer.children.length;
  moviesCounterElement.textContent = moviesCount;
  return moviesCount;
}


/***/ }),

/***/ "./src/modules/post-comments.js":
/*!**************************************!*\
  !*** ./src/modules/post-comments.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postComments: () => (/* binding */ postComments)
/* harmony export */ });
const APP_ID = 'DUanzoHMk8l8HLimHh6p';

const postComments = async (username, comment, itemId) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic bWFqZDowMDAw');
  console.log(itemId);
  const raw = JSON.stringify({
    item_id: Number(itemId),
    comment,
    username,
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUs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O0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsR0FBRzs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBWTtBQUNoQjtBQUNBLElBQUksOEVBQW9CO0FBQ3hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFQUFFLDhFQUFvQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0hBQW9ILEdBQUc7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLE9BQU87QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21tZW50c0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzQ291bnRlclBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9saWtlc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb3ZpZXNDb3VudGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wb3N0LWNvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjNDEzYzNjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGNvbG9yOiByZ2IoNjEsIDU4LCA1OCk7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGdhcDogMS4xcmVtO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3Nob3ctbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5pbnRlcmFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4ycmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5jb21tZW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzliYTE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbiAuY29tbWVudHMge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmxpa2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlrZXMgaSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmxpa2VzOmhvdmVyIGkge1xuICBjb2xvcjogcGluaztcbn1cblxuLmxpa2VzLWNvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5saWtlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDE3dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMywgMjE2LCAyMTYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5mb290ZXIgcCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2Nsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLXByZXZpZXcge1xuICBoZWlnaHQ6IDMwcmVtO1xuICB3aWR0aDogMzByZW07XG59XG5cbi5tb2RhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uc3VtbWFyeSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAzcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5zcGFuLXRpbWUge1xuICBwYWRkaW5nOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmNvbW1lbnRlci1uYW1lIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5jb21tZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4uZGl2LWVsZW1lbnQtY29tbWVudHMge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IDQwJTtcbn1cblxudGV4dGFyZWEge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuI3VzZXJuYW1lIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi8qIE1lZGlhIHF1ZXJpZXMgZm9yIG1vYmlsZSBkZXZpY2VzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIHVsIHtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAjc2hvdy1saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC5kaXYtZWxlbWVudC1jb21tZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFD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QUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kOiAjNDEzYzNjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIGNvbG9yOiByZ2IoNjEsIDU4LCA1OCk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBnYXA6IDEuMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2hvdy1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uaW50ZXJhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuMnJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzliYTE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uIC5jb21tZW50cyB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmxpa2VzIGkge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5saWtlczpob3ZlciBpIHtcXG4gIGNvbG9yOiBwaW5rO1xcbn1cXG5cXG4ubGlrZXMtY291bnQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5saWtlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDE3dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjMsIDIxNiwgMjE2KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW1nLXByZXZpZXcge1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIHdpZHRoOiAzMHJlbTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuaDYge1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbi5zcGFuLXRpbWUge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuLmNvbW1lbnRlci1uYW1lIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5kaXYtZWxlbWVudC1jb21tZW50cyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jdXNlcm5hbWUge1xcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgZm9yIG1vYmlsZSBkZXZpY2VzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgdWwge1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgI3Nob3ctbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuXFxuICAubW9kYWwtY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuXFxuICAuZGl2LWVsZW1lbnQtY29tbWVudHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJ1bk1vZGFsIH0gZnJvbSAnLi9tb2R1bGVzL21vZGFsLmpzJztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjb21tZW50c0NvdW50ZXIgfSBmcm9tICcuL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzJztcbmltcG9ydCB7IGxpa2VzQ291bnRlciB9IGZyb20gJy4vbW9kdWxlcy9saWtlc0NvdW50ZXIuanMnO1xuaW1wb3J0IHsgbW92aWVzQ291bnRlciB9IGZyb20gJy4vbW9kdWxlcy9tb3ZpZXNDb3VudGVyLmpzJztcblxuY29uc3QgQVBQX0lEID0gJ0RVYW56b0hNazhsOEhMaW1IaDZwJztcbmxldCBzaG93cztcblxuY29uc3QgZmV0Y2hBUEkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVSTCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgc2hvd3MgPSBkYXRhLnNsaWNlKDAsIDE1KTtcbiAgLy8gRmV0Y2ggbGlrZXMgY291bnQgZm9yIGVhY2ggaXRlbSBhbmQgY29tYmluZSB3aXRoIGJhc2UgQVBJIGRhdGFcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBzaG93cy5mb3JFYWNoKChzaG93KSA9PiB7XG4gICAgY29uc3QgaXRlbUlkID0gc2hvdy5pZDtcbiAgICBjb25zdCBsaWtlRGF0YSA9IGxpa2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaXRlbUlkKTtcbiAgICBzaG93Lmxpa2VzID0gbGlrZURhdGEgPyBsaWtlRGF0YS5saWtlcyA6IDA7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke0FQUF9JRH0vbGlrZXNgXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpa2VDb3VudCA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyBiV0ZxWkRvd01EQXcnKTtcblxuICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgaXRlbV9pZDogTnVtYmVyKGl0ZW1JZCksXG4gIH0pO1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICBib2R5OiByYXcsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICB9O1xuXG4gIGZldGNoKFxuICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke0FQUF9JRH0vbGlrZXNgLFxuICAgIHJlcXVlc3RPcHRpb25zXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG5cbiAgY29uc3QgbGlrZXNDb3VudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlrZXMtY291bnQtJHtpdGVtSWR9YCk7XG4gIGlmIChsaWtlc0NvdW50RWxlbWVudCkge1xuICAgIGNvbnN0IGxpa2VzQ291bnQgPSBwYXJzZUludChsaWtlc0NvdW50RWxlbWVudC50ZXh0Q29udGVudCwgMTApICsgMTtcbiAgICBsaWtlc0NvdW50RWxlbWVudC50ZXh0Q29udGVudCA9IGxpa2VzQ291bnQ7XG4gIH1cbn07XG5cbmZldGNoQVBJKClcbiAgLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IHNob3dMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctbGlzdCcpO1xuICAgIHNob3dzLmZvckVhY2goKHNob3cpID0+IHtcbiAgICAgIGNvbnN0IHNob3dUaXRsZSA9IHNob3cubmFtZTtcbiAgICAgIGNvbnN0IHNob3dJbWFnZSA9IHNob3cuaW1hZ2UubWVkaXVtO1xuICAgICAgY29uc3QgaXRlbUlkID0gc2hvdy5pZDtcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBzcmM9XCIke3Nob3dJbWFnZX1cIiBhbHQ9XCIke3Nob3dUaXRsZX1cIj5cbiAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj4ke3Nob3dUaXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50ZXJhY3RcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudHMgbXlCdG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpa2VzXCIgZGF0YS1pdGVtLWlkPVwiJHtpdGVtSWR9XCI+PGkgY2xhc3M9XCJmYXIgZmEtaGVhcnRcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlcy1jb3VudFwiIGlkPVwibGlrZXMtY291bnQtJHtpdGVtSWR9XCI+JHtzaG93Lmxpa2VzfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj5cbiAgICAgIGA7XG4gICAgICBjb25zdCBidG4gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcubXlCdG4nKTtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIiA+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDxoNj5Nb3ZpZVNob3c8L2g2PlxuXG4gICAgPC9kaXY+YDtcblxuICAgICAgICBydW5Nb2RhbChzaG93KTtcbiAgICAgIH0pO1xuXG4gICAgICBzaG93TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICBjb25zdCBsaWtlQnV0dG9uID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmxpa2VzJyk7XG4gICAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGl0ZW1JZCB9ID0gbGlrZUJ1dHRvbi5kYXRhc2V0O1xuICAgICAgICB1cGRhdGVMaWtlQ291bnQoaXRlbUlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29tbWVudHNDb3VudCA9IGNvbW1lbnRzQ291bnRlcigpO1xuICAgIGNvbnN0IGxpa2VzQ291bnQgPSBsaWtlc0NvdW50ZXIoKTtcbiAgICBjb25zdCBtb3ZpZXNDb3VudCA9IG1vdmllc0NvdW50ZXIoKTtcblxuICAgIGNvbnN0IGNvbW1lbnRzQ291bnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci5jb21tZW50cycpO1xuICAgIGNvbnN0IGxpa2VzQ291bnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci5saWtlcycpO1xuICAgIGNvbnN0IG1vdmllc0NvdW50ZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXIubW92aWVzJyk7XG4gICAgY29uc3QgYWxsTW92aWVzQ291bnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsIC5jb3VudGVyJyk7XG5cbiAgICBjb21tZW50c0NvdW50ZXJFbGVtZW50LnRleHRDb250ZW50ID0gY29tbWVudHNDb3VudDtcbiAgICBsaWtlc0NvdW50ZXJFbGVtZW50LnRleHRDb250ZW50ID0gbGlrZXNDb3VudDtcbiAgICBtb3ZpZXNDb3VudGVyRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmllc0NvdW50O1xuICAgIGFsbE1vdmllc0NvdW50ZXJFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWVzQ291bnQ7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjb21tZW50c0NvdW50ZXIoKSB7XG4gIGNvbnN0IGNvbW1lbnRzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudHMnKTtcbiAgY29uc3QgY29tbWVudHNDb3VudCA9IGNvbW1lbnRzRWxlbWVudHMubGVuZ3RoO1xuICByZXR1cm4gY29tbWVudHNDb3VudDtcbn1cbiIsImV4cG9ydCBjb25zdCBjb21tZW50c0NvdW50ZXJQb3B1cCA9ICgpID0+IHtcbiAgY29uc3QgY291bnRzQ291bnRlckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmRpdi1lbGVtZW50LWNvbW1lbnRzJ1xuICApO1xuICBjb25zdCBjb3VudHNDb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50c0NvdW50Jyk7XG4gIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBjb3VudHNDb3VudGVyRWxlbWVudHMubGVuZ3RoO1xuICBjb3VudHNDb3VudGVyRWxlbWVudC50ZXh0Q29udGVudCA9IGBjb21tZW50cyAoJHtjb21tZW50c0NvdW50fSlgO1xuICByZXR1cm4gY29tbWVudHNDb3VudDtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbGlrZXNDb3VudGVyKCkge1xuICBjb25zdCBsaWtlc0NvdW50RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtY291bnQnKTtcbiAgbGV0IGxpa2VzQ291bnQgPSAwO1xuICBsaWtlc0NvdW50RWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQoZWxlbWVudC50ZXh0Q29udGVudCwgMTApO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKGNvdW50KSkge1xuICAgICAgbGlrZXNDb3VudCArPSBjb3VudDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbGlrZXNDb3VudDtcbn1cbiIsImltcG9ydCB7IHBvc3RDb21tZW50cyB9IGZyb20gJy4vcG9zdC1jb21tZW50cy5qcyc7XG5pbXBvcnQgeyBjb21tZW50c0NvdW50ZXJQb3B1cCB9IGZyb20gJy4vY29tbWVudHNDb3VudGVyUG9wdXAuanMnO1xuXG5leHBvcnQgY29uc3QgcnVuTW9kYWwgPSBhc3luYyAoe1xuICBpZCxcbiAgbmFtZSxcbiAgc3VtbWFyeSxcbiAgbGFuZ3VhZ2UsXG4gIGdlbnJlcyxcbiAgaW1hZ2U6IHsgb3JpZ2luYWwgfSxcbn0pID0+IHtcbiAgY29uc3QgY29tbWVudHNBUEkgPSBhd2FpdCBmZXRjaEFQSShpZCk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcblxuICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG1vZGFsQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kZXMnKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcblxuICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgPiZ0aW1lczs8L3NwYW4+XG4gIDxoNj5Nb3ZpZVNob3c8L2g2PlxuICA8ZGl2IGNsYXNzPSBcIm1vZGFsLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gIDxpbWcgc3JjPVwiJHtvcmlnaW5hbH1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9IFwiaW1nLXByZXZpZXdcIj5cbiAgPGRpdiBjbGFzcz0gXCJtb2RhbC1kZXNjcmlwdGlvblwiPlxuICA8aDM+IHRpdGxlIDogJHtuYW1lfTwvaDM+XG4gIDxoND4gbGFuZ3VhZ2UgOiAke2xhbmd1YWdlfSA8L2g0PlxuICA8aDQ+IGdlbnJlcyA6ICR7Z2VucmVzWzBdfSAke2dlbnJlc1sxXX0gPC9oND5cbiAgPHA+ICA8c3BhbiBjbGFzcz1cInN1bW1hcnlcIj5TdW1tYXJ5PC9zcGFuPiA6ICR7c3VtbWFyeX0gIDwvcD5cbiAgPGJyPjxicj5cbiAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJjb21tZW50cy1jb250YWluZXJcIj5cbiAgPGg2IGlkPVwiY29tbWVudHNDb3VudFwiPjwvaDY+XG5cbjwvZGl2PlxuICA8Zm9ybSBhY3Rpb249XCJQT1NUXCIgaWQ9XCJteUZvcm1cIj5cbiAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaXRlbV9pZFwiIGlkPVwiaXRlbV9pZFwiIHZhbHVlPVwiJHtpZH1cIj5cblxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIlxuICAgaWQ9XCJ1c2VybmFtZVwiXG4gICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZSAuLi5cIj4gPGJyPiA8YnI+XG4gIDx0ZXh0YXJlYSBpZD1cImNvbW1lbnRcIlxuICAgbmFtZT1cImNvbW1lbnRcIlxuICAgcm93cz1cIjRcIiBjb2xzPVwiNDBcIlxuICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiPjwvdGV4dGFyZWE+PGJyPlxuICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImNvbW1lbnRcIiBjbGFzcz1cImNvbW1lbnRzXCI+XG48L2Zvcm0+XG5cbiAgYDtcbiAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICBjb25zb2xlLmxvZyhzcGFuKTtcblxuICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbiAgc3Bhbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHNwYW4pO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbW9kYWxDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIH07XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJykudmFsdWU7XG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50JykudmFsdWU7XG4gICAgY29uc3QgaXRlbUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1faWQnKS52YWx1ZTtcbiAgICByZW5kZXJDb21tZW50cyh1c2VybmFtZSwgY29tbWVudCk7XG4gICAgcG9zdENvbW1lbnRzKHVzZXJuYW1lLCBjb21tZW50LCBpdGVtSWQpO1xuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgIGNvbW1lbnRzQ291bnRlclBvcHVwKCk7XG4gIH0pO1xuXG4gIGlmIChjb21tZW50c0FQSS5sZW5ndGggPj0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgICBjb21tZW50c0FQSS5mb3JFYWNoKCh7IHVzZXJuYW1lLCBjb21tZW50LCBjcmVhdGlvbl9kYXRlIH0pID0+IHtcbiAgICAgIHJlbmRlckNvbW1lbnRzKHVzZXJuYW1lLCBjb21tZW50LCBjcmVhdGlvbl9kYXRlKTtcbiAgICB9KTtcbiAgfVxuICBjb21tZW50c0NvdW50ZXJQb3B1cCgpO1xufTtcblxuY29uc3QgcmVuZGVyQ29tbWVudHMgPSAodXNlcm5hbWUsIGNvbW1lbnRNZXNzYWdlLCBjcmVhdGVkVGltZSkgPT4ge1xuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cy1jb250YWluZXInKTtcbiAgY29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpdi1lbGVtZW50LWNvbW1lbnRzJyk7XG4gIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xuICBjb25zdCBjb21tZW50ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbiAgY29tbWVudGVyTmFtZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50ZXItbmFtZScpO1xuICBjb21tZW50ZXJOYW1lLnRleHRDb250ZW50ID0gdXNlcm5hbWU7XG4gIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY29tbWVudGVyTmFtZSk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xuICBjb21tZW50LnRleHRDb250ZW50ID0gY29tbWVudE1lc3NhZ2U7XG4gIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY29tbWVudCk7XG5cbiAgaWYgKCFjcmVhdGVkVGltZSkge1xuICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgW2NyZWF0ZWRUaW1lXSA9IGNyZWF0aW9uRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJyk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVkQXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNyZWF0ZWRBdC5jbGFzc0xpc3QuYWRkKCdzcGFuLXRpbWUnKTtcbiAgY3JlYXRlZEF0LnRleHRDb250ZW50ID0gYGF0OiAke2NyZWF0ZWRUaW1lfWA7XG4gIGNvbW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlZEF0KTtcbn07XG5cbmNvbnN0IGZldGNoQVBJID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGJhc2VVUkwgPSBgXG4gICAgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRFVhbnpvSE1rOGw4SExpbUhoNnAvY29tbWVudHM/aXRlbV9pZD0ke2lkfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVSTCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBtb3ZpZXNDb3VudGVyKCkge1xuICBjb25zdCBtb3ZpZXNDb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLm1vdmllcycpO1xuICBjb25zdCBzaG93TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWxpc3QnKTtcbiAgY29uc3QgbW92aWVzQ291bnQgPSBzaG93TGlzdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XG4gIG1vdmllc0NvdW50ZXJFbGVtZW50LnRleHRDb250ZW50ID0gbW92aWVzQ291bnQ7XG4gIHJldHVybiBtb3ZpZXNDb3VudDtcbn1cbiIsImNvbnN0IEFQUF9JRCA9ICdEVWFuem9ITWs4bDhITGltSGg2cCc7XG5cbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudHMgPSBhc3luYyAodXNlcm5hbWUsIGNvbW1lbnQsIGl0ZW1JZCkgPT4ge1xuICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBteUhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljIGJXRnFaRG93TURBdycpO1xuICBjb25zb2xlLmxvZyhpdGVtSWQpO1xuICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgaXRlbV9pZDogTnVtYmVyKGl0ZW1JZCksXG4gICAgY29tbWVudCxcbiAgICB1c2VybmFtZSxcbiAgfSk7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICBib2R5OiByYXcsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICB9O1xuICBmZXRjaChcbiAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtBUFBfSUR9L2NvbW1lbnRzYCxcbiAgICByZXF1ZXN0T3B0aW9uc1xuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==