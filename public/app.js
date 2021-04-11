/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/App.js":
/*!***********************!*\
  !*** ./module/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./module/Layout.js\");\n/* harmony import */ var _GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameControl */ \"./module/GameControl.js\");\n/* harmony import */ var _DrawControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawControl */ \"./module/DrawControl.js\");\n/* harmony import */ var _KeyboardControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyboardControl */ \"./module/KeyboardControl.js\");\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor(container) {\r\n        this.container = container\r\n        this.layer = new _Layout__WEBPACK_IMPORTED_MODULE_0__.Layout(this.container)\r\n\r\n        this.KeyboardControl = _KeyboardControl__WEBPACK_IMPORTED_MODULE_3__.default;\r\n\r\n        this.gameControl = new _GameControl__WEBPACK_IMPORTED_MODULE_1__.GameControl(this);\r\n        this.drawControl = new _DrawControl__WEBPACK_IMPORTED_MODULE_2__.DrawControl();\r\n\r\n        window.addEventListener('keydown', function (event) {\r\n            if (event.code === this.KeyboardControl.paint) {\r\n                this.drawControl.startDraw(this.layer.context);\r\n                if (this.gameControl.loop)\r\n                    this.gameControl.stopGame(this.gameControl.loop);\r\n            }\r\n            if (event.code === this.KeyboardControl.game) {\r\n                if(!this.gameControl.gameTime){\r\n                    this.gameControl.startGame();\r\n                }\r\n            }\r\n        }.bind(this))\r\n    }\r\n}\r\n\r\n\r\nonload = function () {\r\n    new App(document.querySelector('body'));\r\n}\n\n//# sourceURL=webpack://canvas/./module/App.js?");

/***/ }),

/***/ "./module/DrawControl.js":
/*!*******************************!*\
  !*** ./module/DrawControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DrawControl\": () => (/* binding */ DrawControl)\n/* harmony export */ });\n/* harmony import */ var _Painter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Painter */ \"./module/Painter.js\");\n/* harmony import */ var _KeyboardControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyboardControl */ \"./module/KeyboardControl.js\");\n\r\n\r\n\r\nclass DrawControl{\r\n    constructor() {\r\n        this.KeyboardControl = _KeyboardControl__WEBPACK_IMPORTED_MODULE_1__.default;\r\n    }\r\n\r\n    startDraw(context){\r\n        this.painter = new _Painter__WEBPACK_IMPORTED_MODULE_0__.Painter(context).startListen();\r\n    }\r\n}\n\n//# sourceURL=webpack://canvas/./module/DrawControl.js?");

/***/ }),

/***/ "./module/GameControl.js":
/*!*******************************!*\
  !*** ./module/GameControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameControl\": () => (/* binding */ GameControl)\n/* harmony export */ });\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ \"./module/Rect.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./module/Player.js\");\n/* harmony import */ var _TotalTimeGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TotalTimeGame */ \"./module/TotalTimeGame.js\");\n/* harmony import */ var _Loop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loop */ \"./module/Loop.js\");\n/* harmony import */ var _KeyboardControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeyboardControl */ \"./module/KeyboardControl.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass GameControl {\r\n    constructor(app) {\r\n        this.app = app;\r\n        this.KeyboardControl = _KeyboardControl__WEBPACK_IMPORTED_MODULE_4__.default;\r\n        this.gameTime = '';\r\n\r\n        window.addEventListener('keydown', function (event) {\r\n            if (event.code === this.KeyboardControl.pauseGame) {\r\n                this.pauseGame();\r\n            }\r\n            if (event.code === this.KeyboardControl.addFigure) {\r\n                this.rectArray[this.rectArray.length] = new _Rect__WEBPACK_IMPORTED_MODULE_0__.Rect({layer: this.app.layer})\r\n            }\r\n        }.bind(this))\r\n    }\r\n\r\n    startGame() {\r\n        this.rectArray = [\r\n            new _Rect__WEBPACK_IMPORTED_MODULE_0__.Rect({\r\n                x: 300,\r\n                y: 300,\r\n                w: 30,\r\n                h: 30,\r\n                vx: 500,\r\n                vy: 500,\r\n                color: '#f19606',\r\n                layer: this.app.layer\r\n            }),\r\n            // new Rect({\r\n            //     x: 99,\r\n            //     y: 99,\r\n            //     w: 40,\r\n            //     h: 40,\r\n            //     vx: 400,\r\n            //     vy: 400,\r\n            //     color: '#1dd210',\r\n            //     layer: this.layer\r\n            // }),\r\n            // new Rect({\r\n            //     x: 150,\r\n            //     y: 150,\r\n            //     w: 50,\r\n            //     h: 50,\r\n            //     vx: 500,\r\n            //     vy: 500,\r\n            //     color: '#d21010',\r\n            //     layer: this.layer\r\n            // }),\r\n            // new Rect({\r\n            //     x: 150,\r\n            //     y: 150,\r\n            //     w: 50,\r\n            //     h: 50,\r\n            //     vx: 800,\r\n            //     vy: 800,\r\n            //     color: '#122148',\r\n            //     layer: this.layer\r\n            // })\r\n        ];\r\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__.Player({layer: this.app.layer});\r\n\r\n        this.gameTime = new _TotalTimeGame__WEBPACK_IMPORTED_MODULE_2__.TotalTimeGame();\r\n\r\n        this.loop = new _Loop__WEBPACK_IMPORTED_MODULE_3__.Loop(this.update.bind(this), this.display.bind(this), this.gameTime);\r\n    }\r\n\r\n    pauseGame() {\r\n        this.gameTime.stopTime();\r\n    }\r\n\r\n    stopGame() {\r\n        this.loop.stopGame();\r\n        this.loop = '';\r\n        this.rectArray = [];\r\n        this.player = '';\r\n        this.gameTime = '';\r\n    }\r\n\r\n    restartGame() {\r\n        this.stopGame(this.loop);\r\n        alert('Game over')\r\n\r\n        this.startGame()\r\n\r\n        // const reInit = new ReInitGame(this.app);\r\n        // reInit.reinit();\r\n    }\r\n\r\n\r\n    update(correction, loop) {\r\n\r\n        this.gameTime.displayTime();\r\n\r\n        //Противники\r\n        this.rectArray.forEach((e, i) => {\r\n            e.update(this.app.layer, correction);\r\n            e.collision(this.player, () => this.restartGame(loop))\r\n        })\r\n\r\n        //Игрок\r\n        this.player.update(this.app.layer, correction);\r\n    }\r\n\r\n    display() {\r\n        this.app.layer.context.clearRect(0, 0, this.app.layer.w, this.app.layer.h);\r\n\r\n        this.rectArray.forEach((e, i) => {\r\n            this.app.layer.context.fillStyle = e.color;\r\n            this.app.layer.context.fillRect(e.x, e.y, e.w, e.h);\r\n        })\r\n\r\n        this.app.layer.context.fillStyle = 'blue';\r\n        this.app.layer.context.fillRect(this.player.x, this.player.y, this.player.w, this.player.h);\r\n    }\r\n}\n\n//# sourceURL=webpack://canvas/./module/GameControl.js?");

/***/ }),

/***/ "./module/Helpers.js":
/*!***************************!*\
  !*** ./module/Helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Helpers\": () => (/* binding */ Helpers)\n/* harmony export */ });\nclass Helpers{\r\n    constructor() {\r\n    }\r\n\r\n    getRandomColor() {\r\n        let letters = '0123456789ABCDEF';\r\n        let color = '#';\r\n        for (let i = 0; i < 6; i++) {\r\n            color += letters[Math.floor(Math.random() * 16)];\r\n        }\r\n        return color;\r\n    }\r\n\r\n    randomInteger(min, max) {\r\n        let rand = min - 0.5 + Math.random() * (max - min + 1);\r\n        return Math.round(rand);\r\n    }\r\n}\n\n//# sourceURL=webpack://canvas/./module/Helpers.js?");

/***/ }),

/***/ "./module/KeyboardControl.js":
/*!***********************************!*\
  !*** ./module/KeyboardControl.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    pauseGame:'Space',\r\n    addFigure:'Enter',\r\n    paint:'KeyP',\r\n    game:'KeyG',\r\n});\n\n//# sourceURL=webpack://canvas/./module/KeyboardControl.js?");

/***/ }),

/***/ "./module/Layout.js":
/*!**************************!*\
  !*** ./module/Layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\nclass Layout {\r\n    constructor(container) {\r\n        this.canvas = document.createElement('canvas')\r\n        this.context = this.canvas.getContext('2d');\r\n        container.appendChild(this.canvas)\r\n\r\n        this.fitToContainer = this.fitToContainer.bind(this)\r\n        this.fitToContainer(this.canvas);\r\n        addEventListener('resize', () => this.fitToContainer(this.canvas))\r\n    }\r\n\r\n    fitToContainer(canvas) {\r\n        this.w = this.canvas.width = canvas.offsetWidth;\r\n        this.h = this.canvas.height = canvas.offsetHeight;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://canvas/./module/Layout.js?");

/***/ }),

/***/ "./module/Loop.js":
/*!************************!*\
  !*** ./module/Loop.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loop\": () => (/* binding */ Loop)\n/* harmony export */ });\nclass Loop {\r\n    constructor(_update, _display, gameTime) {\r\n        this.update = _update;\r\n        this.display = _display\r\n        this.deltaTime = 0;\r\n        this.lastUpdate = 0;\r\n        this.maxInterval = 40;\r\n        this.gameTime = gameTime;\r\n\r\n        this.payse = false;\r\n        this.stop = false;\r\n\r\n        this.start = false;\r\n\r\n        this.animate = this.animate.bind(this);\r\n        this.animate();\r\n    }\r\n\r\n    animate(currentTime = 0) {\r\n        this.start = requestAnimationFrame(this.animate);\r\n        if(!this.gameTime.gameStop){\r\n\r\n            this.gameTime.updateTime();\r\n\r\n            this.deltaTime = currentTime - this.lastUpdate\r\n            if (this.deltaTime < this.maxInterval) {\r\n\r\n                this.update(this.deltaTime / 1000, this);\r\n                this.display();\r\n            }\r\n\r\n            this.lastUpdate = currentTime;\r\n        }\r\n    }\r\n\r\n    stopGame() {\r\n        cancelAnimationFrame(this.start)\r\n    }\r\n}\n\n//# sourceURL=webpack://canvas/./module/Loop.js?");

/***/ }),

/***/ "./module/Painter.js":
/*!***************************!*\
  !*** ./module/Painter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Painter\": () => (/* binding */ Painter)\n/* harmony export */ });\nclass Painter {\r\n    constructor(context) {\r\n        this.mouseIsDown = false;\r\n        this.context = context;\r\n    }\r\n\r\n\r\n    mouseHandlerDown(event) {\r\n        this.mouseIsDown = true;\r\n        this.context.beginPath();\r\n        this.context.moveTo(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)\r\n    }\r\n\r\n    mouseHandlerUp() {\r\n        this.mouseIsDown = false;\r\n    }\r\n\r\n    mouseHandlerMove(event) {\r\n        if (this.mouseIsDown) {\r\n            this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop);\r\n        }\r\n    }\r\n\r\n    draw(x, y) {\r\n        this.context.lineTo(x, y);\r\n        // this.context.strokeStyle = \"red\";\r\n        this.context.stroke();\r\n    }\r\n\r\n\r\n    startListen() {\r\n        window.addEventListener('mousedown', this.mouseHandlerDown.bind(this))\r\n        window.addEventListener('mouseup', this.mouseHandlerUp.bind(this))\r\n        window.addEventListener('mousemove', this.mouseHandlerMove.bind(this))\r\n    }\r\n\r\n    endListen() {\r\n        window.removeEventListener('mousedown', this.mouseHandlerDown.bind(this))\r\n        window.removeEventListener('mouseup', this.mouseHandlerUp.bind(this))\r\n        window.removeEventListener('mousemove', this.mouseHandlerMove.bind(this))\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://canvas/./module/Painter.js?");

/***/ }),

/***/ "./module/Player.js":
/*!**************************!*\
  !*** ./module/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ \"./module/Rect.js\");\n\r\n\r\nclass Player extends _Rect__WEBPACK_IMPORTED_MODULE_0__.Rect {\r\n    constructor({layer}) {\r\n        super({x:0,y:0,w:50,h:50,vx:500,vy:500,layer});\r\n        this.joystick = {\r\n            KeyW: false,\r\n            KeyS: false,\r\n            KeyA: false,\r\n            KeyD: false,\r\n        }\r\n        window.onkeydown = function (event) {\r\n            this.keyDown(event)\r\n        }.bind(this)\r\n        window.onkeyup = function (event) {\r\n            this.keyUp(event)\r\n        }.bind(this)\r\n    }\r\n\r\n    update(layer, correction) {\r\n        this.move(correction)\r\n        this.colliderField(layer);\r\n\r\n    }\r\n\r\n    keyDown(event) {\r\n        if (!this.joystick.hasOwnProperty(event.code)) return;\r\n        this.joystick[event.code] = true;\r\n    }\r\n\r\n    keyUp(event) {\r\n        if (!this.joystick.hasOwnProperty(event.code)) return;\r\n        this.joystick[event.code] = false;\r\n    }\r\n\r\n    move(correction) {\r\n        if (this.joystick.KeyW) {\r\n            this.y += -this.vy * correction\r\n        }\r\n        if (this.joystick.KeyS) {\r\n            this.y += this.vy * correction\r\n        }\r\n        if (this.joystick.KeyA) {\r\n            this.x += -this.vx * correction\r\n        }\r\n        if (this.joystick.KeyD) {\r\n            this.x += this.vx * correction\r\n        }\r\n    }\r\n\r\n    colliderField(layer){\r\n        if (this.x < 0) {\r\n            this.x = 0\r\n        }\r\n        if (this.x + this.w > layer.w) {\r\n            this.x = layer.w - this.w;\r\n        }\r\n        if (this.y < 0) {\r\n            this.y = 0\r\n        }\r\n        if (this.y + this.h > layer.h) {\r\n            this.y = layer.h - this.h;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://canvas/./module/Player.js?");

/***/ }),

/***/ "./module/Rect.js":
/*!************************!*\
  !*** ./module/Rect.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rect\": () => (/* binding */ Rect)\n/* harmony export */ });\n/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers */ \"./module/Helpers.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ \"./module/Layout.js\");\n\r\n\r\n\r\nclass Rect {\r\n    constructor({x, y, w, h, vx, vy,color,layer}) {\r\n        this.helpers = new _Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers();\r\n        if(!w){\r\n            this.w = this.helpers.randomInteger(10,layer.canvas.width/10);\r\n        }else {\r\n            this.w = w;\r\n        }\r\n        if(!h){\r\n            this.h = this.helpers.randomInteger(10,layer.canvas.width/10);\r\n        }else {\r\n            this.h = h;\r\n        }\r\n        if(!x){\r\n            this.x = this.helpers.randomInteger(100,layer.canvas.width - this.w);\r\n        }else {\r\n            this.x = x;\r\n        }\r\n        if(!y){\r\n            this.y = this.helpers.randomInteger(100,layer.canvas.height - this.h);\r\n        }else {\r\n            this.y = y;\r\n        }\r\n\r\n        if(!vx){\r\n            this.vx = this.helpers.randomInteger(10,800)\r\n        }else {\r\n            this.vx =  vx;\r\n        }\r\n        if(!vy){\r\n            this.vy = this.helpers.randomInteger(10,800)\r\n        }else {\r\n            this.vy =  vy;\r\n        }\r\n        if(!color){\r\n            this.color = this.helpers.getRandomColor();\r\n        }else{\r\n            this.color = color;\r\n        }\r\n\r\n    }\r\n\r\n    update(layer, correction) {\r\n        if (this.x <= 0 && this.vx < 0 || this.x + this.w > layer.w && this.vx > 0) {\r\n            this.vx = -this.vx\r\n        }\r\n        if (this.y <= 0 && this.vy < 0 || this.y + this.h > layer.h && this.vy > 0) {\r\n            this.vy = -this.vy\r\n        }\r\n        this.x += this.vx * correction;\r\n        this.y += this.vy * correction;\r\n    }\r\n\r\n    collision(withWhom, whatToDo) {\r\n        if (\r\n            withWhom.y <= this.y + this.h && withWhom.y >= this.y && withWhom.x <= this.x + this.w && withWhom.x >= this.x ||\r\n            withWhom.y + withWhom.h >= this.y && withWhom.y <= this.y + this.h && withWhom.x + withWhom.w >= this.x && withWhom.x <= this.x + this.w\r\n        ) {\r\n            whatToDo();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://canvas/./module/Rect.js?");

/***/ }),

/***/ "./module/TotalTimeGame.js":
/*!*********************************!*\
  !*** ./module/TotalTimeGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TotalTimeGame\": () => (/* binding */ TotalTimeGame)\n/* harmony export */ });\nclass TotalTimeGame {\r\n    constructor() {\r\n        this.gameTime = {\r\n            start: new Date().getTime(),\r\n            end: null,\r\n            duration: 0,\r\n            timePause: 0,\r\n            pauseStart: 0,\r\n        };\r\n        this.gameStop = false;\r\n    }\r\n\r\n    updateTime() {\r\n        if (!this.gameStop) {\r\n            //Подсчет общего времени в игре\r\n            this.gameTime.duration = new Date().getTime() - this.gameTime.start - this.gameTime.timePause;\r\n        }\r\n    }\r\n\r\n    stopTime() {\r\n        this.gameStop = !this.gameStop;\r\n        if (this.gameStop) {\r\n            this.pauseStart = new Date().getTime();\r\n        } else {\r\n            this.gameTime.timePause += new Date().getTime() - this.pauseStart;\r\n\r\n        }\r\n    }\r\n\r\n    displayTime() {\r\n        if (!this.gameStop) {\r\n            // console.log('Play', Math.floor((this.gameTime.duration / 1000).toFixed(3)))\r\n        }\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://canvas/./module/TotalTimeGame.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module/App.js");
/******/ 	
/******/ })()
;