"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "uploadMultipleMedia", {
  enumerable: true,
  get: function get() {
    return _multipleImages.uploadMultipleMedia;
  }
});
Object.defineProperty(exports, "uploader", {
  enumerable: true,
  get: function get() {
    return _multipleImages.uploader;
  }
});
Object.defineProperty(exports, "getMetadata", {
  enumerable: true,
  get: function get() {
    return _pathChecker.getMetadata;
  }
});
Object.defineProperty(exports, "isAImage", {
  enumerable: true,
  get: function get() {
    return _pathChecker.isAImage;
  }
});
Object.defineProperty(exports, "isAVideo", {
  enumerable: true,
  get: function get() {
    return _pathChecker.isAVideo;
  }
});
Object.defineProperty(exports, "imageUpload", {
  enumerable: true,
  get: function get() {
    return _image["default"];
  }
});

var _multipleImages = require("./wrappers/multipleImages");

var _pathChecker = require("./wrappers/pathChecker");

var _image = _interopRequireDefault(require("./wrappers/image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }