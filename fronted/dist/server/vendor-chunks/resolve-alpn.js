"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/resolve-alpn";
exports.ids = ["vendor-chunks/resolve-alpn"];
exports.modules = {

/***/ "(ssr)/./node_modules/resolve-alpn/index.js":
/*!********************************************!*\
  !*** ./node_modules/resolve-alpn/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst tls = __webpack_require__(/*! tls */ \"tls\");\n\nmodule.exports = (options = {}, connect = tls.connect) => new Promise((resolve, reject) => {\n\tlet timeout = false;\n\n\tlet socket;\n\n\tconst callback = async () => {\n\t\tawait socketPromise;\n\n\t\tsocket.off('timeout', onTimeout);\n\t\tsocket.off('error', reject);\n\n\t\tif (options.resolveSocket) {\n\t\t\tresolve({alpnProtocol: socket.alpnProtocol, socket, timeout});\n\n\t\t\tif (timeout) {\n\t\t\t\tawait Promise.resolve();\n\t\t\t\tsocket.emit('timeout');\n\t\t\t}\n\t\t} else {\n\t\t\tsocket.destroy();\n\t\t\tresolve({alpnProtocol: socket.alpnProtocol, timeout});\n\t\t}\n\t};\n\n\tconst onTimeout = async () => {\n\t\ttimeout = true;\n\t\tcallback();\n\t};\n\n\tconst socketPromise = (async () => {\n\t\ttry {\n\t\t\tsocket = await connect(options, callback);\n\n\t\t\tsocket.on('error', reject);\n\t\t\tsocket.once('timeout', onTimeout);\n\t\t} catch (error) {\n\t\t\treject(error);\n\t\t}\n\t})();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1hbHBuL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLGdCQUFLOztBQUV6Qiw4QkFBOEI7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtREFBbUQ7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsWUFBWSwyQ0FBMkM7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hyYXZcXGFpLmFwdC1tZXRhbW92ZS1oYWNrYXRob25cXGZyb250ZWRcXG5vZGVfbW9kdWxlc1xccmVzb2x2ZS1hbHBuXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCB0bHMgPSByZXF1aXJlKCd0bHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAob3B0aW9ucyA9IHt9LCBjb25uZWN0ID0gdGxzLmNvbm5lY3QpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0bGV0IHRpbWVvdXQgPSBmYWxzZTtcblxuXHRsZXQgc29ja2V0O1xuXG5cdGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IHNvY2tldFByb21pc2U7XG5cblx0XHRzb2NrZXQub2ZmKCd0aW1lb3V0Jywgb25UaW1lb3V0KTtcblx0XHRzb2NrZXQub2ZmKCdlcnJvcicsIHJlamVjdCk7XG5cblx0XHRpZiAob3B0aW9ucy5yZXNvbHZlU29ja2V0KSB7XG5cdFx0XHRyZXNvbHZlKHthbHBuUHJvdG9jb2w6IHNvY2tldC5hbHBuUHJvdG9jb2wsIHNvY2tldCwgdGltZW91dH0pO1xuXG5cdFx0XHRpZiAodGltZW91dCkge1xuXHRcdFx0XHRhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdFx0c29ja2V0LmVtaXQoJ3RpbWVvdXQnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdHJlc29sdmUoe2FscG5Qcm90b2NvbDogc29ja2V0LmFscG5Qcm90b2NvbCwgdGltZW91dH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBvblRpbWVvdXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dGltZW91dCA9IHRydWU7XG5cdFx0Y2FsbGJhY2soKTtcblx0fTtcblxuXHRjb25zdCBzb2NrZXRQcm9taXNlID0gKGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0c29ja2V0ID0gYXdhaXQgY29ubmVjdChvcHRpb25zLCBjYWxsYmFjayk7XG5cblx0XHRcdHNvY2tldC5vbignZXJyb3InLCByZWplY3QpO1xuXHRcdFx0c29ja2V0Lm9uY2UoJ3RpbWVvdXQnLCBvblRpbWVvdXQpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdH1cblx0fSkoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/resolve-alpn/index.js\n");

/***/ })

};
;