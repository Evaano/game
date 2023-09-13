/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0e8138b7d83074ab76fc3acb63cfcebb.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "61ba1576e2e1c428a9d35a5e38b5d242.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 5;
    this.position = {
      x: 30,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 50;
    this.height = 100;
    this.jumping = false; // Jumping status
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_4__["default"])
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_2__["default"])
      }
    };
    this.currentSprite = this.sprites.stand.right;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      context.drawImage(this.currentSprite, 177 * this.frames, 0, 177, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 28) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y < canvas.height) this.velocity.y += gravity;
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width - 20;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var Scenario = /*#__PURE__*/function () {
  function Scenario(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, Scenario);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Scenario, [{
    key: "draw",
    value: function draw() {
      context.drawImage(this.image, this.position.x, this.position.y, canvas.width,
      // Use canvas width as the destination width
      canvas.height // Use canvas height as the destination height
      );
    }
  }]);
  return Scenario;
}();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [];
var scenario = [];
var key = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

// Main Game
function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: 0,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 400,
    y: 380,
    image: platformImage
  })];
  scenario = [new Scenario({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Scenario({
    x: 1024 - 2,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

// End of Main

function animate() {
  requestAnimationFrame(animate);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  scenario.forEach(function (scenario) {
    scenario.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (key.right.pressed && player.position.x < 500) {
    player.velocity.x = player.speed;
  } else if (key.left.pressed && player.position.x > 30) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (key.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      scenario.forEach(function (scenario) {
        scenario.position.x -= player.speed * 0.66;
      });
    } else if (key.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      scenario.forEach(function (scenario) {
        scenario.position.x += player.speed * 0.66;
      });
    }
  }
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
      player.position.y = platform.position.y - player.height; // Align player with the platform
      player.jumping = false; // Reset jumping status
    }
  });

  if (scrollOffset > 2000) {
    console.log("You Win!");
  }
  if (player.position.y > canvas.height) {
    init();
  }
}
init();
animate();
addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;
  switch (keyCode) {
    case 65:
      key.left.pressed = true;
      break;
    case 68:
      key.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      break;
    case 83:
      break;
    case 87:
      if (!player.jumping) {
        // Check if the player is not already jumping
        player.velocity.y -= 10;
        player.jumping = true; // Set jumping status to true
      }

      break;
  }
});
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;
  switch (keyCode) {
    case 65:
      key.left.pressed = false;
      break;
    case 68:
      key.right.pressed = false;
      break;
    case 83:
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map