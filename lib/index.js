(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['vue2-request-utils'] = factory());
}(this, (function () { 'use strict';

  const hello = () => {
      console.log(123);
  };
  var index = { hello };

  return index;

})));
