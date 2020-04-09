"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadata = exports.isAImage = exports.isAVideo = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var videoExtensions = ['mp4'];
var imageExtensions = ['png', 'jpg'];
/**
 * check if path is image or video
 * Path: should be a string
 * Accepts:
 * isAVideo: local path or online path
 * returns boolean
 * isAImage: local path or online path
 * returns boolean
 */

var isAVideo = function isAVideo(path) {
  for (var i = 0; i < videoExtensions.length; i++) {
    var extension = videoExtensions[i];
    if (path.endsWith(extension)) return true;
  }

  return false;
};

exports.isAVideo = isAVideo;

var isAImage = function isAImage(path) {
  for (var i = 0; i < imageExtensions.length; i++) {
    var extension = imageExtensions[i];
    if (path.endsWith(extension)) return true;
  }

  return false;
};
/**
 * Metadata
 * Accepts: 
 * publicID(string), 
 * path{cloudinary link}(string),
 * cloudinaryOptions: {cloudName, apiKey, apiSecret} (object)
 * returns full object
 */


exports.isAImage = isAImage;

var getMetadata = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, path, cloudinaryOptions) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _cloudinary["default"].config({
              cloud_name: cloudinaryOptions.cloudName,
              api_key: cloudinaryOptions.apiKey,
              api_secret: cloudinaryOptions.apiSecret
            });

            _context.next = 3;
            return _cloudinary["default"].v2.uploader.explicit(id, {
              image_metadata: true,
              type: 'upload',
              resource_type: isAVideo(path) ? 'video' : 'image'
            }, function (error, result) {
              if (error) return error;
              return result;
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMetadata(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMetadata = getMetadata;