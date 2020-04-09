"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadMultipleMedia = exports.uploader = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _q = _interopRequireDefault(require("q"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Uploader function
 * Accepts:
 * file: each file media or video
 * returns:
 * the whole success object body, pick the property you want
 */
var uploader = function uploader(file, cloudinaryOptions) {
  _cloudinary["default"].config({
    cloud_name: cloudinaryOptions.cloudName,
    api_key: cloudinaryOptions.apiKey,
    api_secret: cloudinaryOptions.apiSecret
  });

  return _q["default"].promise(function (resolve, reject) {
    _cloudinary["default"].v2.uploader.upload(file, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, result) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!err) {
                  _context.next = 4;
                  break;
                }

                reject(err);
                _context.next = 5;
                break;

              case 4:
                return _context.abrupt("return", resolve(result));

              case 5:
                return _context.abrupt("return", true);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};
/**
 * UploadMultipleImages method
 * Accepts:
 * files
 * cloudinaryOptions(object): the place your cloudinary config in there
 * returns:
 * an array of cloudinary urls of the image uploaded
 */


exports.uploader = uploader;

var uploadMultipleMedia = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(files, cloudinaryOptions) {
    var urls, _iterator, _step, file, path, newPath;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            urls = [];
            _iterator = _createForOfIteratorHelper(files);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                file = _step.value;
                path = file.path;
                newPath = uploader(path, cloudinaryOptions);
                urls.push(newPath.url);

                _fs["default"].unlinkSync(path);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context2.abrupt("return", urls);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function uploadMultipleMedia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.uploadMultipleMedia = uploadMultipleMedia;