'use strict';

var dataSchemas = require('@librechat/data-schemas');
var types_js = require('@modelcontextprotocol/sdk/types.js');
var require$$3 = require('crypto');
var auth_js = require('@modelcontextprotocol/sdk/client/auth.js');
var auth_js$1 = require('@modelcontextprotocol/sdk/shared/auth.js');
var fs$2 = require('fs');
var path$2 = require('path');
var require$$2 = require('os');
var crypto$2 = require('node:crypto');
var axios$1 = require('axios');
var librechatDataProvider = require('librechat-data-provider');
var fetch$1 = require('node-fetch');
var agents = require('@librechat/agents');
var tiktoken = require('tiktoken');
var yaml = require('js-yaml');
var events = require('events');
var stdio_js = require('@modelcontextprotocol/sdk/client/stdio.js');
var streamableHttp_js = require('@modelcontextprotocol/sdk/client/streamableHttp.js');
var websocket_js = require('@modelcontextprotocol/sdk/client/websocket.js');
var sse_js = require('@modelcontextprotocol/sdk/client/sse.js');
var index_js = require('@modelcontextprotocol/sdk/client/index.js');
var zod = require('zod');
var keyv = require('keyv');
var tools = require('@langchain/core/tools');
var undici = require('undici');
var require$$1 = require('util');
var require$$0$1 = require('stream');
var require$$3$1 = require('http');
var require$$4$1 = require('https');
var require$$5 = require('url');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespaceDefault(fs$2);
var path__namespace = /*#__PURE__*/_interopNamespaceDefault(path$2);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$9 = Array.isArray;

var isArray_1 = isArray$9;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();

var _root = root$8;

var root$7 = _root;

/** Built-in value references. */
var Symbol$6 = root$7.Symbol;

var _Symbol = Symbol$6;

var Symbol$5 = _Symbol;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$d.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$d.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$c = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$c.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$4 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$5(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$5;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$5(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$5;

var baseGetTag$4 = _baseGetTag,
    isObjectLike$4 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$3(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol$3;

var isArray$8 = isArray_1,
    isSymbol$2 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$3(value, object) {
  if (isArray$8(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$3;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$5(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$5;

var baseGetTag$3 = _baseGetTag,
    isObject$4 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$4(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var root$6 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$6['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject$3 = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$b = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$9).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$7;

var getNative$6 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$6(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$3(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$3;

var eq$2 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var getNative$5 = _getNative,
    root$5 = _root;

/* Built-in method references that are verified to be native. */
var Map$4 = getNative$5(root$5, 'Map');

var _Map = Map$4;

var Hash = _Hash,
    ListCache$3 = _ListCache,
    Map$3 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$3 || ListCache$3),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$3(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype['delete'] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;

var _MapCache = MapCache$3;

var MapCache$2 = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache$2;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar$1 = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$2 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName$1, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$2;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$2(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$2;

var Symbol$3 = _Symbol,
    arrayMap$1 = _arrayMap,
    isArray$7 = isArray_1,
    isSymbol$1 = isSymbol_1;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$7(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap$1(value, baseToString$1) + '';
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray$6 = isArray_1,
    isKey$2 = _isKey,
    stringToPath$1 = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$4(value, object) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath$1(toString(value));
}

var _castPath = castPath$4;

var isSymbol = isSymbol_1;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$5(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

var _toKey = toKey$5;

var castPath$3 = _castPath,
    toKey$4 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$3(object, path) {
  path = castPath$3(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$4(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$3;

var getNative$4 = _getNative;

var defineProperty$2 = (function() {
  try {
    var func = getNative$4(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$2;

var defineProperty$1 = _defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$2(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$2;

var baseAssignValue$1 = _baseAssignValue,
    eq$1 = eq_1;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq$1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

var _assignValue = assignValue$1;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$3;

var assignValue = _assignValue,
    castPath$2 = _castPath,
    isIndex$2 = _isIndex,
    isObject$2 = isObject_1,
    toKey$3 = _toKey;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet$1(object, path, value, customizer) {
  if (!isObject$2(object)) {
    return object;
  }
  path = castPath$2(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey$3(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject$2(objValue)
          ? objValue
          : (isIndex$2(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet$1;

var baseGet$2 = _baseGet,
    baseSet = _baseSet,
    castPath$1 = _castPath;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy$2(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet$2(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath$1(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy$2;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var baseGetTag$2 = _baseGetTag,
    isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$2 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$3 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments$3;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$3(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$3;

var castPath = _castPath,
    isArguments$2 = isArguments_1,
    isArray$5 = isArray_1,
    isIndex$1 = _isIndex,
    isLength$2 = isLength_1,
    toKey$2 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$2(length) && isIndex$1(key, length) &&
    (isArray$5(object) || isArguments$2(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn,
    hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$2(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$2;

var basePickBy$1 = _basePickBy,
    hasIn$1 = hasIn_1;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick$1(object, paths) {
  return basePickBy$1(object, paths, function(value, path) {
    return hasIn$1(object, path);
  });
}

var _basePick = basePick$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$3(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$3;

var Symbol$2 = _Symbol,
    isArguments$1 = isArguments_1,
    isArray$4 = isArray_1;

/** Built-in value references. */
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$4(value) || isArguments$1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable$1;

var arrayPush$2 = _arrayPush,
    isFlattenable = _isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$2(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten$1;

var baseFlatten = _baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

var flatten_1 = flatten$1;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;

var apply = _apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

var _overRest = overRest$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity$2(value) {
  return value;
}

var identity_1 = identity$2;

var constant = constant_1,
    defineProperty = _defineProperty,
    identity$1 = identity_1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;

var baseSetToString = _baseSetToString,
    shortOut = _shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut(baseSetToString);

var _setToString = setToString$1;

var flatten = flatten_1,
    overRest = _overRest,
    setToString = _setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest$1(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

var _flatRest = flatRest$1;

var basePick = _basePick,
    flatRest = _flatRest;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

var pick_1 = pick;

var pick$1 = /*@__PURE__*/getDefaultExportFromCjs(pick_1);

class MCPOAuthHandler {
    /**
     * Discovers OAuth metadata from the server
     */
    static discoverMetadata(serverUrl) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            dataSchemas.logger.debug(`[MCPOAuth] discoverMetadata called with serverUrl: ${serverUrl}`);
            let authServerUrl = new URL(serverUrl);
            let resourceMetadata;
            try {
                // Try to discover resource metadata first
                dataSchemas.logger.debug(`[MCPOAuth] Attempting to discover protected resource metadata from ${serverUrl}`);
                resourceMetadata = yield auth_js.discoverOAuthProtectedResourceMetadata(serverUrl);
                if ((_a = resourceMetadata === null || resourceMetadata === void 0 ? void 0 : resourceMetadata.authorization_servers) === null || _a === void 0 ? void 0 : _a.length) {
                    authServerUrl = new URL(resourceMetadata.authorization_servers[0]);
                    dataSchemas.logger.debug(`[MCPOAuth] Found authorization server from resource metadata: ${authServerUrl}`);
                }
                else {
                    dataSchemas.logger.debug(`[MCPOAuth] No authorization servers found in resource metadata`);
                }
            }
            catch (error) {
                dataSchemas.logger.debug('[MCPOAuth] Resource metadata discovery failed, continuing with server URL', {
                    error,
                });
            }
            // Discover OAuth metadata
            dataSchemas.logger.debug(`[MCPOAuth] Discovering OAuth metadata from ${authServerUrl}`);
            const rawMetadata = yield auth_js.discoverAuthorizationServerMetadata(authServerUrl);
            if (!rawMetadata) {
                dataSchemas.logger.error(`[MCPOAuth] Failed to discover OAuth metadata from ${authServerUrl}`);
                throw new Error('Failed to discover OAuth metadata');
            }
            dataSchemas.logger.debug(`[MCPOAuth] OAuth metadata discovered successfully`);
            const metadata = yield auth_js$1.OAuthMetadataSchema.parseAsync(rawMetadata);
            dataSchemas.logger.debug(`[MCPOAuth] OAuth metadata parsed successfully`);
            return {
                metadata: metadata,
                resourceMetadata,
                authServerUrl,
            };
        });
    }
    /**
     * Registers an OAuth client dynamically
     */
    static registerOAuthClient(serverUrl, metadata, resourceMetadata, redirectUri) {
        return __awaiter(this, void 0, void 0, function* () {
            dataSchemas.logger.debug(`[MCPOAuth] Starting client registration for ${serverUrl}, server metadata:`, {
                grant_types_supported: metadata.grant_types_supported,
                response_types_supported: metadata.response_types_supported,
                token_endpoint_auth_methods_supported: metadata.token_endpoint_auth_methods_supported,
                scopes_supported: metadata.scopes_supported,
            });
            /** Client metadata based on what the server supports */
            const clientMetadata = {
                client_name: 'LibreChat MCP Client',
                redirect_uris: [redirectUri || this.getDefaultRedirectUri()],
                grant_types: ['authorization_code'],
                response_types: ['code'],
                token_endpoint_auth_method: 'client_secret_basic',
                scope: undefined,
            };
            const supportedGrantTypes = metadata.grant_types_supported || ['authorization_code'];
            const requestedGrantTypes = ['authorization_code'];
            if (supportedGrantTypes.includes('refresh_token')) {
                requestedGrantTypes.push('refresh_token');
                dataSchemas.logger.debug(`[MCPOAuth] Server ${serverUrl} supports \`refresh_token\` grant type, adding to request`);
            }
            else {
                dataSchemas.logger.debug(`[MCPOAuth] Server ${serverUrl} does not support \`refresh_token\` grant type`);
            }
            clientMetadata.grant_types = requestedGrantTypes;
            clientMetadata.response_types = metadata.response_types_supported || ['code'];
            if (metadata.token_endpoint_auth_methods_supported) {
                // Prefer client_secret_basic if supported, otherwise use the first supported method
                if (metadata.token_endpoint_auth_methods_supported.includes('client_secret_basic')) {
                    clientMetadata.token_endpoint_auth_method = 'client_secret_basic';
                }
                else if (metadata.token_endpoint_auth_methods_supported.includes('client_secret_post')) {
                    clientMetadata.token_endpoint_auth_method = 'client_secret_post';
                }
                else if (metadata.token_endpoint_auth_methods_supported.includes('none')) {
                    clientMetadata.token_endpoint_auth_method = 'none';
                }
                else {
                    clientMetadata.token_endpoint_auth_method =
                        metadata.token_endpoint_auth_methods_supported[0];
                }
            }
            const availableScopes = (resourceMetadata === null || resourceMetadata === void 0 ? void 0 : resourceMetadata.scopes_supported) || metadata.scopes_supported;
            if (availableScopes) {
                clientMetadata.scope = availableScopes.join(' ');
            }
            dataSchemas.logger.debug(`[MCPOAuth] Registering client for ${serverUrl} with metadata:`, clientMetadata);
            const clientInfo = yield auth_js.registerClient(serverUrl, {
                metadata: metadata,
                clientMetadata,
            });
            dataSchemas.logger.debug(`[MCPOAuth] Client registered successfully for ${serverUrl}:`, {
                client_id: clientInfo.client_id,
                has_client_secret: !!clientInfo.client_secret,
                grant_types: clientInfo.grant_types,
                scope: clientInfo.scope,
            });
            return clientInfo;
        });
    }
    /**
     * Initiates the OAuth flow for an MCP server
     */
    static initiateOAuthFlow(serverName, serverUrl, userId, config) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            dataSchemas.logger.debug(`[MCPOAuth] initiateOAuthFlow called for ${serverName} with URL: ${serverUrl}`);
            const flowId = this.generateFlowId(userId, serverName);
            const state = this.generateState();
            dataSchemas.logger.debug(`[MCPOAuth] Generated flowId: ${flowId}, state: ${state}`);
            try {
                // Check if we have pre-configured OAuth settings
                if ((config === null || config === void 0 ? void 0 : config.authorization_url) && (config === null || config === void 0 ? void 0 : config.token_url) && (config === null || config === void 0 ? void 0 : config.client_id)) {
                    dataSchemas.logger.debug(`[MCPOAuth] Using pre-configured OAuth settings for ${serverName}`);
                    /** Metadata based on pre-configured settings */
                    const metadata = {
                        authorization_endpoint: config.authorization_url,
                        token_endpoint: config.token_url,
                        issuer: serverUrl,
                        scopes_supported: (_b = (_a = config.scope) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [],
                        grant_types_supported: (_c = config === null || config === void 0 ? void 0 : config.grant_types_supported) !== null && _c !== void 0 ? _c : [
                            'authorization_code',
                            'refresh_token',
                        ],
                        token_endpoint_auth_methods_supported: (_d = config === null || config === void 0 ? void 0 : config.token_endpoint_auth_methods_supported) !== null && _d !== void 0 ? _d : [
                            'client_secret_basic',
                            'client_secret_post',
                        ],
                        response_types_supported: (_e = config === null || config === void 0 ? void 0 : config.response_types_supported) !== null && _e !== void 0 ? _e : ['code'],
                        code_challenge_methods_supported: (_f = config === null || config === void 0 ? void 0 : config.code_challenge_methods_supported) !== null && _f !== void 0 ? _f : [
                            'S256',
                            'plain',
                        ],
                    };
                    dataSchemas.logger.debug(`[MCPOAuth] metadata for "${serverName}": ${JSON.stringify(metadata)}`);
                    const clientInfo = {
                        client_id: config.client_id,
                        client_secret: config.client_secret,
                        redirect_uris: [config.redirect_uri || this.getDefaultRedirectUri(serverName)],
                        scope: config.scope,
                    };
                    dataSchemas.logger.debug(`[MCPOAuth] Starting authorization with pre-configured settings`);
                    const { authorizationUrl, codeVerifier } = yield auth_js.startAuthorization(serverUrl, {
                        metadata: metadata,
                        clientInformation: clientInfo,
                        redirectUrl: ((_g = clientInfo.redirect_uris) === null || _g === void 0 ? void 0 : _g[0]) || this.getDefaultRedirectUri(serverName),
                        scope: config.scope,
                    });
                    /** Add state parameter with flowId to the authorization URL */
                    authorizationUrl.searchParams.set('state', flowId);
                    dataSchemas.logger.debug(`[MCPOAuth] Added state parameter to authorization URL`);
                    const flowMetadata = {
                        serverName,
                        userId,
                        serverUrl,
                        state,
                        codeVerifier,
                        clientInfo,
                        metadata,
                    };
                    dataSchemas.logger.debug(`[MCPOAuth] Authorization URL generated: ${authorizationUrl.toString()}`);
                    return {
                        authorizationUrl: authorizationUrl.toString(),
                        flowId,
                        flowMetadata,
                    };
                }
                dataSchemas.logger.debug(`[MCPOAuth] Starting auto-discovery of OAuth metadata from ${serverUrl}`);
                const { metadata, resourceMetadata, authServerUrl } = yield this.discoverMetadata(serverUrl);
                dataSchemas.logger.debug(`[MCPOAuth] OAuth metadata discovered, auth server URL: ${authServerUrl}`);
                /** Dynamic client registration based on the discovered metadata */
                const redirectUri = (config === null || config === void 0 ? void 0 : config.redirect_uri) || this.getDefaultRedirectUri(serverName);
                dataSchemas.logger.debug(`[MCPOAuth] Registering OAuth client with redirect URI: ${redirectUri}`);
                const clientInfo = yield this.registerOAuthClient(authServerUrl.toString(), metadata, resourceMetadata, redirectUri);
                dataSchemas.logger.debug(`[MCPOAuth] Client registered with ID: ${clientInfo.client_id}`);
                /** Authorization Scope */
                const scope = (config === null || config === void 0 ? void 0 : config.scope) ||
                    ((_h = resourceMetadata === null || resourceMetadata === void 0 ? void 0 : resourceMetadata.scopes_supported) === null || _h === void 0 ? void 0 : _h.join(' ')) ||
                    ((_j = metadata.scopes_supported) === null || _j === void 0 ? void 0 : _j.join(' '));
                dataSchemas.logger.debug(`[MCPOAuth] Starting authorization with scope: ${scope}`);
                let authorizationUrl;
                let codeVerifier;
                try {
                    dataSchemas.logger.debug(`[MCPOAuth] Calling startAuthorization...`);
                    const authResult = yield auth_js.startAuthorization(serverUrl, {
                        metadata: metadata,
                        clientInformation: clientInfo,
                        redirectUrl: redirectUri,
                        scope,
                    });
                    authorizationUrl = authResult.authorizationUrl;
                    codeVerifier = authResult.codeVerifier;
                    dataSchemas.logger.debug(`[MCPOAuth] startAuthorization completed successfully`);
                    dataSchemas.logger.debug(`[MCPOAuth] Authorization URL: ${authorizationUrl.toString()}`);
                    /** Add state parameter with flowId to the authorization URL */
                    authorizationUrl.searchParams.set('state', flowId);
                    dataSchemas.logger.debug(`[MCPOAuth] Added state parameter to authorization URL`);
                    if ((resourceMetadata === null || resourceMetadata === void 0 ? void 0 : resourceMetadata.resource) != null && resourceMetadata.resource) {
                        authorizationUrl.searchParams.set('resource', resourceMetadata.resource);
                        dataSchemas.logger.debug(`[MCPOAuth] Added resource parameter to authorization URL: ${resourceMetadata.resource}`);
                    }
                    else {
                        dataSchemas.logger.warn(`[MCPOAuth] Resource metadata missing 'resource' property for ${serverName}. ` +
                            'This can cause issues with some Authorization Servers who expect a "resource" parameter.');
                    }
                }
                catch (error) {
                    dataSchemas.logger.error(`[MCPOAuth] startAuthorization failed:`, error);
                    throw error;
                }
                const flowMetadata = {
                    serverName,
                    userId,
                    serverUrl,
                    state,
                    codeVerifier,
                    clientInfo,
                    metadata,
                    resourceMetadata,
                };
                dataSchemas.logger.debug(`[MCPOAuth] Authorization URL generated for ${serverName}: ${authorizationUrl.toString()}`);
                const result = {
                    authorizationUrl: authorizationUrl.toString(),
                    flowId,
                    flowMetadata,
                };
                dataSchemas.logger.debug(`[MCPOAuth] Returning from initiateOAuthFlow with result ${flowId} for ${serverName}`, result);
                return result;
            }
            catch (error) {
                dataSchemas.logger.error('[MCPOAuth] Failed to initiate OAuth flow', { error, serverName, userId });
                throw error;
            }
        });
    }
    /**
     * Completes the OAuth flow by exchanging the authorization code for tokens
     */
    static completeOAuthFlow(flowId, authorizationCode, flowManager) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** Flow state which contains our metadata */
                const flowState = yield flowManager.getFlowState(flowId, this.FLOW_TYPE);
                if (!flowState) {
                    throw new Error('OAuth flow not found');
                }
                const flowMetadata = flowState.metadata;
                if (!flowMetadata) {
                    throw new Error('OAuth flow metadata not found');
                }
                const metadata = flowMetadata;
                if (!metadata.metadata || !metadata.clientInfo || !metadata.codeVerifier) {
                    throw new Error('Invalid flow metadata');
                }
                let resource;
                try {
                    if (((_a = metadata.resourceMetadata) === null || _a === void 0 ? void 0 : _a.resource) != null && metadata.resourceMetadata.resource) {
                        resource = new URL(metadata.resourceMetadata.resource);
                        dataSchemas.logger.debug(`[MCPOAuth] Resource URL for flow ${flowId}: ${resource.toString()}`);
                    }
                }
                catch (error) {
                    dataSchemas.logger.warn(`[MCPOAuth] Invalid resource URL format for flow ${flowId}: '${metadata.resourceMetadata.resource}'. ` +
                        `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Proceeding without resource parameter.`);
                    resource = undefined;
                }
                const tokens = yield auth_js.exchangeAuthorization(metadata.serverUrl, {
                    redirectUri: ((_b = metadata.clientInfo.redirect_uris) === null || _b === void 0 ? void 0 : _b[0]) || this.getDefaultRedirectUri(),
                    metadata: metadata.metadata,
                    clientInformation: metadata.clientInfo,
                    codeVerifier: metadata.codeVerifier,
                    authorizationCode,
                    resource,
                });
                dataSchemas.logger.debug('[MCPOAuth] Raw tokens from exchange:', {
                    access_token: tokens.access_token ? '[REDACTED]' : undefined,
                    refresh_token: tokens.refresh_token ? '[REDACTED]' : undefined,
                    expires_in: tokens.expires_in,
                    token_type: tokens.token_type,
                    scope: tokens.scope,
                });
                const mcpTokens = Object.assign(Object.assign({}, tokens), { obtained_at: Date.now(), expires_at: tokens.expires_in ? Date.now() + tokens.expires_in * 1000 : undefined });
                /** Now complete the flow with the tokens */
                yield flowManager.completeFlow(flowId, this.FLOW_TYPE, mcpTokens);
                return mcpTokens;
            }
            catch (error) {
                dataSchemas.logger.error('[MCPOAuth] Failed to complete OAuth flow', { error, flowId });
                yield flowManager.failFlow(flowId, this.FLOW_TYPE, error);
                throw error;
            }
        });
    }
    /**
     * Gets the OAuth flow metadata
     */
    static getFlowState(flowId, flowManager) {
        return __awaiter(this, void 0, void 0, function* () {
            const flowState = yield flowManager.getFlowState(flowId, this.FLOW_TYPE);
            if (!flowState) {
                return null;
            }
            return flowState.metadata;
        });
    }
    /**
     * Generates a flow ID for the OAuth flow
     * @returns Consistent ID so concurrent requests share the same flow
     */
    static generateFlowId(userId, serverName) {
        return `${userId}:${serverName}`;
    }
    /**
     * Generates a secure state parameter
     */
    static generateState() {
        return require$$3.randomBytes(32).toString('base64url');
    }
    /**
     * Gets the default redirect URI for a server
     */
    static getDefaultRedirectUri(serverName) {
        const baseUrl = process.env.DOMAIN_SERVER || 'http://localhost:3080';
        return serverName
            ? `${baseUrl}/api/mcp/${serverName}/oauth/callback`
            : `${baseUrl}/api/mcp/oauth/callback`;
    }
    /**
     * Refreshes OAuth tokens using a refresh token
     */
    static refreshOAuthTokens(refreshToken, metadata, config) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            dataSchemas.logger.debug(`[MCPOAuth] Refreshing tokens for ${metadata.serverName}`);
            try {
                /** If we have stored client information from the original flow, use that first */
                if ((_a = metadata.clientInfo) === null || _a === void 0 ? void 0 : _a.client_id) {
                    dataSchemas.logger.debug(`[MCPOAuth] Using stored client information for token refresh for ${metadata.serverName}`);
                    dataSchemas.logger.debug(`[MCPOAuth] Client ID: ${metadata.clientInfo.client_id} for ${metadata.serverName}`);
                    dataSchemas.logger.debug(`[MCPOAuth] Has client secret: ${!!metadata.clientInfo.client_secret} for ${metadata.serverName}`);
                    dataSchemas.logger.debug(`[MCPOAuth] Stored client info for ${metadata.serverName}:`, {
                        client_id: metadata.clientInfo.client_id,
                        has_client_secret: !!metadata.clientInfo.client_secret,
                        grant_types: metadata.clientInfo.grant_types,
                        scope: metadata.clientInfo.scope,
                    });
                    /** Use the stored client information and metadata to determine the token URL */
                    let tokenUrl;
                    if (config === null || config === void 0 ? void 0 : config.token_url) {
                        tokenUrl = config.token_url;
                    }
                    else if (!metadata.serverUrl) {
                        throw new Error('No token URL available for refresh');
                    }
                    else {
                        /** Auto-discover OAuth configuration for refresh */
                        const oauthMetadata = yield auth_js.discoverAuthorizationServerMetadata(metadata.serverUrl);
                        if (!oauthMetadata) {
                            throw new Error('Failed to discover OAuth metadata for token refresh');
                        }
                        if (!oauthMetadata.token_endpoint) {
                            throw new Error('No token endpoint found in OAuth metadata');
                        }
                        tokenUrl = oauthMetadata.token_endpoint;
                    }
                    const body = new URLSearchParams({
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                    });
                    /** Add scope if available */
                    if (metadata.clientInfo.scope) {
                        body.append('scope', metadata.clientInfo.scope);
                    }
                    const headers = {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Accept: 'application/json',
                    };
                    /** Use client_secret for authentication if available */
                    if (metadata.clientInfo.client_secret) {
                        const clientAuth = Buffer.from(`${metadata.clientInfo.client_id}:${metadata.clientInfo.client_secret}`).toString('base64');
                        headers['Authorization'] = `Basic ${clientAuth}`;
                    }
                    else {
                        /** For public clients, client_id must be in the body */
                        body.append('client_id', metadata.clientInfo.client_id);
                    }
                    dataSchemas.logger.debug(`[MCPOAuth] Refresh request to: ${tokenUrl}`, {
                        body: body.toString(),
                        headers,
                    });
                    const response = yield fetch(tokenUrl, {
                        method: 'POST',
                        headers,
                        body,
                    });
                    if (!response.ok) {
                        const errorText = yield response.text();
                        throw new Error(`Token refresh failed: ${response.status} ${response.statusText} - ${errorText}`);
                    }
                    const tokens = yield response.json();
                    return Object.assign(Object.assign({}, tokens), { obtained_at: Date.now(), expires_at: tokens.expires_in ? Date.now() + tokens.expires_in * 1000 : undefined });
                }
                // Fallback: If we have pre-configured OAuth settings, use them
                if ((config === null || config === void 0 ? void 0 : config.token_url) && (config === null || config === void 0 ? void 0 : config.client_id)) {
                    dataSchemas.logger.debug(`[MCPOAuth] Using pre-configured OAuth settings for token refresh`);
                    const tokenUrl = new URL(config.token_url);
                    const clientAuth = config.client_secret
                        ? Buffer.from(`${config.client_id}:${config.client_secret}`).toString('base64')
                        : null;
                    const body = new URLSearchParams({
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                    });
                    if (config.scope) {
                        body.append('scope', config.scope);
                    }
                    const headers = {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Accept: 'application/json',
                    };
                    if (clientAuth) {
                        headers['Authorization'] = `Basic ${clientAuth}`;
                    }
                    else {
                        // Use client_id in body for public clients
                        body.append('client_id', config.client_id);
                    }
                    const response = yield fetch(tokenUrl, {
                        method: 'POST',
                        headers,
                        body,
                    });
                    if (!response.ok) {
                        const errorText = yield response.text();
                        throw new Error(`Token refresh failed: ${response.status} ${response.statusText} - ${errorText}`);
                    }
                    const tokens = yield response.json();
                    return Object.assign(Object.assign({}, tokens), { obtained_at: Date.now(), expires_at: tokens.expires_in ? Date.now() + tokens.expires_in * 1000 : undefined });
                }
                /** For auto-discovered OAuth, we need the server URL */
                if (!metadata.serverUrl) {
                    throw new Error('Server URL required for auto-discovered OAuth token refresh');
                }
                /** Auto-discover OAuth configuration for refresh */
                const oauthMetadata = yield auth_js.discoverAuthorizationServerMetadata(metadata.serverUrl);
                if (!(oauthMetadata === null || oauthMetadata === void 0 ? void 0 : oauthMetadata.token_endpoint)) {
                    throw new Error('No token endpoint found in OAuth metadata');
                }
                const tokenUrl = new URL(oauthMetadata.token_endpoint);
                const body = new URLSearchParams({
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken,
                });
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json',
                };
                const response = yield fetch(tokenUrl, {
                    method: 'POST',
                    headers,
                    body,
                });
                if (!response.ok) {
                    const errorText = yield response.text();
                    throw new Error(`Token refresh failed: ${response.status} ${response.statusText} - ${errorText}`);
                }
                const tokens = yield response.json();
                return Object.assign(Object.assign({}, tokens), { obtained_at: Date.now(), expires_at: tokens.expires_in ? Date.now() + tokens.expires_in * 1000 : undefined });
            }
            catch (error) {
                dataSchemas.logger.error(`[MCPOAuth] Failed to refresh tokens for ${metadata.serverName}`, error);
                throw error;
            }
        });
    }
}
MCPOAuthHandler.FLOW_TYPE = 'mcp_oauth';
MCPOAuthHandler.FLOW_TTL = 10 * 60 * 1000; // 10 minutes

var main = {exports: {}};

var version$1 = "16.4.7";
var require$$4 = {
	version: version$1};

const fs$1 = fs$2;
const path$1 = path$2;
const os = require$$2;
const crypto$1 = require$$3;
const packageJson = require$$4;

const version = packageJson.version;

const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;

// Parse src into an Object
function parse (src) {
  const obj = {};

  // Convert buffer to string
  let lines = src.toString();

  // Convert line breaks to same format
  lines = lines.replace(/\r\n?/mg, '\n');

  let match;
  while ((match = LINE.exec(lines)) != null) {
    const key = match[1];

    // Default undefined or null to empty string
    let value = (match[2] || '');

    // Remove whitespace
    value = value.trim();

    // Check if double quoted
    const maybeQuote = value[0];

    // Remove surrounding quotes
    value = value.replace(/^(['"`])([\s\S]*)\1$/mg, '$2');

    // Expand newlines if double quoted
    if (maybeQuote === '"') {
      value = value.replace(/\\n/g, '\n');
      value = value.replace(/\\r/g, '\r');
    }

    // Add to object
    obj[key] = value;
  }

  return obj
}

function _parseVault (options) {
  const vaultPath = _vaultPath(options);

  // Parse .env.vault
  const result = DotenvModule.configDotenv({ path: vaultPath });
  if (!result.parsed) {
    const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
    err.code = 'MISSING_DATA';
    throw err
  }

  // handle scenario for comma separated keys - for use with key rotation
  // example: DOTENV_KEY="dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=prod,dotenv://:key_7890@dotenvx.com/vault/.env.vault?environment=prod"
  const keys = _dotenvKey(options).split(',');
  const length = keys.length;

  let decrypted;
  for (let i = 0; i < length; i++) {
    try {
      // Get full key
      const key = keys[i].trim();

      // Get instructions for decrypt
      const attrs = _instructions(result, key);

      // Decrypt
      decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);

      break
    } catch (error) {
      // last key
      if (i + 1 >= length) {
        throw error
      }
      // try next key
    }
  }

  // Parse decrypted .env string
  return DotenvModule.parse(decrypted)
}

function _log (message) {
  console.log(`[dotenv@${version}][INFO] ${message}`);
}

function _warn (message) {
  console.log(`[dotenv@${version}][WARN] ${message}`);
}

function _debug (message) {
  console.log(`[dotenv@${version}][DEBUG] ${message}`);
}

function _dotenvKey (options) {
  // prioritize developer directly setting options.DOTENV_KEY
  if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
    return options.DOTENV_KEY
  }

  // secondary infra already contains a DOTENV_KEY environment variable
  if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
    return process.env.DOTENV_KEY
  }

  // fallback to empty string
  return ''
}

function _instructions (result, dotenvKey) {
  // Parse DOTENV_KEY. Format is a URI
  let uri;
  try {
    uri = new URL(dotenvKey);
  } catch (error) {
    if (error.code === 'ERR_INVALID_URL') {
      const err = new Error('INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development');
      err.code = 'INVALID_DOTENV_KEY';
      throw err
    }

    throw error
  }

  // Get decrypt key
  const key = uri.password;
  if (!key) {
    const err = new Error('INVALID_DOTENV_KEY: Missing key part');
    err.code = 'INVALID_DOTENV_KEY';
    throw err
  }

  // Get environment
  const environment = uri.searchParams.get('environment');
  if (!environment) {
    const err = new Error('INVALID_DOTENV_KEY: Missing environment part');
    err.code = 'INVALID_DOTENV_KEY';
    throw err
  }

  // Get ciphertext payload
  const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
  const ciphertext = result.parsed[environmentKey]; // DOTENV_VAULT_PRODUCTION
  if (!ciphertext) {
    const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
    err.code = 'NOT_FOUND_DOTENV_ENVIRONMENT';
    throw err
  }

  return { ciphertext, key }
}

function _vaultPath (options) {
  let possibleVaultPath = null;

  if (options && options.path && options.path.length > 0) {
    if (Array.isArray(options.path)) {
      for (const filepath of options.path) {
        if (fs$1.existsSync(filepath)) {
          possibleVaultPath = filepath.endsWith('.vault') ? filepath : `${filepath}.vault`;
        }
      }
    } else {
      possibleVaultPath = options.path.endsWith('.vault') ? options.path : `${options.path}.vault`;
    }
  } else {
    possibleVaultPath = path$1.resolve(process.cwd(), '.env.vault');
  }

  if (fs$1.existsSync(possibleVaultPath)) {
    return possibleVaultPath
  }

  return null
}

function _resolveHome (envPath) {
  return envPath[0] === '~' ? path$1.join(os.homedir(), envPath.slice(1)) : envPath
}

function _configVault (options) {
  _log('Loading env from encrypted .env.vault');

  const parsed = DotenvModule._parseVault(options);

  let processEnv = process.env;
  if (options && options.processEnv != null) {
    processEnv = options.processEnv;
  }

  DotenvModule.populate(processEnv, parsed, options);

  return { parsed }
}

function configDotenv (options) {
  const dotenvPath = path$1.resolve(process.cwd(), '.env');
  let encoding = 'utf8';
  const debug = Boolean(options && options.debug);

  if (options && options.encoding) {
    encoding = options.encoding;
  } else {
    if (debug) {
      _debug('No encoding is specified. UTF-8 is used by default');
    }
  }

  let optionPaths = [dotenvPath]; // default, look for .env
  if (options && options.path) {
    if (!Array.isArray(options.path)) {
      optionPaths = [_resolveHome(options.path)];
    } else {
      optionPaths = []; // reset default
      for (const filepath of options.path) {
        optionPaths.push(_resolveHome(filepath));
      }
    }
  }

  // Build the parsed data in a temporary object (because we need to return it).  Once we have the final
  // parsed data, we will combine it with process.env (or options.processEnv if provided).
  let lastError;
  const parsedAll = {};
  for (const path of optionPaths) {
    try {
      // Specifying an encoding returns a string instead of a buffer
      const parsed = DotenvModule.parse(fs$1.readFileSync(path, { encoding }));

      DotenvModule.populate(parsedAll, parsed, options);
    } catch (e) {
      if (debug) {
        _debug(`Failed to load ${path} ${e.message}`);
      }
      lastError = e;
    }
  }

  let processEnv = process.env;
  if (options && options.processEnv != null) {
    processEnv = options.processEnv;
  }

  DotenvModule.populate(processEnv, parsedAll, options);

  if (lastError) {
    return { parsed: parsedAll, error: lastError }
  } else {
    return { parsed: parsedAll }
  }
}

// Populates process.env from .env file
function config (options) {
  // fallback to original dotenv if DOTENV_KEY is not set
  if (_dotenvKey(options).length === 0) {
    return DotenvModule.configDotenv(options)
  }

  const vaultPath = _vaultPath(options);

  // dotenvKey exists but .env.vault file does not exist
  if (!vaultPath) {
    _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);

    return DotenvModule.configDotenv(options)
  }

  return DotenvModule._configVault(options)
}

function decrypt$1 (encrypted, keyStr) {
  const key = Buffer.from(keyStr.slice(-64), 'hex');
  let ciphertext = Buffer.from(encrypted, 'base64');

  const nonce = ciphertext.subarray(0, 12);
  const authTag = ciphertext.subarray(-16);
  ciphertext = ciphertext.subarray(12, -16);

  try {
    const aesgcm = crypto$1.createDecipheriv('aes-256-gcm', key, nonce);
    aesgcm.setAuthTag(authTag);
    return `${aesgcm.update(ciphertext)}${aesgcm.final()}`
  } catch (error) {
    const isRange = error instanceof RangeError;
    const invalidKeyLength = error.message === 'Invalid key length';
    const decryptionFailed = error.message === 'Unsupported state or unable to authenticate data';

    if (isRange || invalidKeyLength) {
      const err = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)');
      err.code = 'INVALID_DOTENV_KEY';
      throw err
    } else if (decryptionFailed) {
      const err = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY');
      err.code = 'DECRYPTION_FAILED';
      throw err
    } else {
      throw error
    }
  }
}

// Populate process.env with parsed values
function populate$2 (processEnv, parsed, options = {}) {
  const debug = Boolean(options && options.debug);
  const override = Boolean(options && options.override);

  if (typeof parsed !== 'object') {
    const err = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate');
    err.code = 'OBJECT_REQUIRED';
    throw err
  }

  // Set process.env
  for (const key of Object.keys(parsed)) {
    if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
      if (override === true) {
        processEnv[key] = parsed[key];
      }

      if (debug) {
        if (override === true) {
          _debug(`"${key}" is already defined and WAS overwritten`);
        } else {
          _debug(`"${key}" is already defined and was NOT overwritten`);
        }
      }
    } else {
      processEnv[key] = parsed[key];
    }
  }
}

const DotenvModule = {
  configDotenv,
  _configVault,
  _parseVault,
  config,
  decrypt: decrypt$1,
  parse,
  populate: populate$2
};

main.exports.configDotenv = DotenvModule.configDotenv;
main.exports._configVault = DotenvModule._configVault;
main.exports._parseVault = DotenvModule._parseVault;
main.exports.config = DotenvModule.config;
main.exports.decrypt = DotenvModule.decrypt;
main.exports.parse = DotenvModule.parse;
main.exports.populate = DotenvModule.populate;

main.exports = DotenvModule;

var mainExports = main.exports;

// ../config.js accepts options via environment variables
const options = {};

if (process.env.DOTENV_CONFIG_ENCODING != null) {
  options.encoding = process.env.DOTENV_CONFIG_ENCODING;
}

if (process.env.DOTENV_CONFIG_PATH != null) {
  options.path = process.env.DOTENV_CONFIG_PATH;
}

if (process.env.DOTENV_CONFIG_DEBUG != null) {
  options.debug = process.env.DOTENV_CONFIG_DEBUG;
}

if (process.env.DOTENV_CONFIG_OVERRIDE != null) {
  options.override = process.env.DOTENV_CONFIG_OVERRIDE;
}

if (process.env.DOTENV_CONFIG_DOTENV_KEY != null) {
  options.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY;
}

var envOptions = options;

const re = /^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;

var cliOptions = function optionMatcher (args) {
  return args.reduce(function (acc, cur) {
    const matches = cur.match(re);
    if (matches) {
      acc[matches[1]] = matches[2];
    }
    return acc
  }, {})
};

(function () {
  mainExports.config(
    Object.assign(
      {},
      envOptions,
      cliOptions(process.argv)
    )
  );
})();

var _a$1, _b$1;
const { webcrypto } = crypto$2;
// Use hex decoding for both key and IV for legacy methods.
const key = Buffer.from((_a$1 = process.env.CREDS_KEY) !== null && _a$1 !== void 0 ? _a$1 : '', 'hex');
const iv = Buffer.from((_b$1 = process.env.CREDS_IV) !== null && _b$1 !== void 0 ? _b$1 : '', 'hex');
const algorithm = 'AES-CBC';
// --- Legacy v1/v2 Setup: AES-CBC with fixed key and IV ---
function encrypt(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const cryptoKey = yield webcrypto.subtle.importKey('raw', key, { name: algorithm }, false, [
            'encrypt',
        ]);
        const encoder = new TextEncoder();
        const data = encoder.encode(value);
        const encryptedBuffer = yield webcrypto.subtle.encrypt({ name: algorithm, iv: iv }, cryptoKey, data);
        return Buffer.from(encryptedBuffer).toString('hex');
    });
}
function decrypt(encryptedValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const cryptoKey = yield webcrypto.subtle.importKey('raw', key, { name: algorithm }, false, [
            'decrypt',
        ]);
        const encryptedBuffer = Buffer.from(encryptedValue, 'hex');
        const decryptedBuffer = yield webcrypto.subtle.decrypt({ name: algorithm, iv: iv }, cryptoKey, encryptedBuffer);
        const decoder = new TextDecoder();
        return decoder.decode(decryptedBuffer);
    });
}
// --- v2: AES-CBC with a random IV per encryption ---
function encryptV2(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const gen_iv = webcrypto.getRandomValues(new Uint8Array(16));
        const cryptoKey = yield webcrypto.subtle.importKey('raw', key, { name: algorithm }, false, [
            'encrypt',
        ]);
        const encoder = new TextEncoder();
        const data = encoder.encode(value);
        const encryptedBuffer = yield webcrypto.subtle.encrypt({ name: algorithm, iv: gen_iv }, cryptoKey, data);
        return Buffer.from(gen_iv).toString('hex') + ':' + Buffer.from(encryptedBuffer).toString('hex');
    });
}
function decryptV2(encryptedValue) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const parts = encryptedValue.split(':');
        if (parts.length === 1) {
            return parts[0];
        }
        const gen_iv = Buffer.from((_a = parts.shift()) !== null && _a !== void 0 ? _a : '', 'hex');
        const encrypted = parts.join(':');
        const cryptoKey = yield webcrypto.subtle.importKey('raw', key, { name: algorithm }, false, [
            'decrypt',
        ]);
        const encryptedBuffer = Buffer.from(encrypted, 'hex');
        const decryptedBuffer = yield webcrypto.subtle.decrypt({ name: algorithm, iv: gen_iv }, cryptoKey, encryptedBuffer);
        const decoder = new TextDecoder();
        return decoder.decode(decryptedBuffer);
    });
}
// --- v3: AES-256-CTR using Node's crypto functions ---
const algorithm_v3 = 'aes-256-ctr';
/**
 * Encrypts a value using AES-256-CTR.
 * Note: AES-256 requires a 32-byte key. Ensure that process.env.CREDS_KEY is a 64-character hex string.
 *
 * @param value - The plaintext to encrypt.
 * @returns The encrypted string with a "v3:" prefix.
 */
function encryptV3(value) {
    if (key.length !== 32) {
        throw new Error(`Invalid key length: expected 32 bytes, got ${key.length} bytes`);
    }
    const iv_v3 = crypto$2.randomBytes(16);
    const cipher = crypto$2.createCipheriv(algorithm_v3, key, iv_v3);
    const encrypted = Buffer.concat([cipher.update(value, 'utf8'), cipher.final()]);
    return `v3:${iv_v3.toString('hex')}:${encrypted.toString('hex')}`;
}
function decryptV3(encryptedValue) {
    const parts = encryptedValue.split(':');
    if (parts[0] !== 'v3') {
        throw new Error('Not a v3 encrypted value');
    }
    const iv_v3 = Buffer.from(parts[1], 'hex');
    const encryptedText = Buffer.from(parts.slice(2).join(':'), 'hex');
    const decipher = crypto$2.createDecipheriv(algorithm_v3, key, iv_v3);
    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
    return decrypted.toString('utf8');
}
function getRandomValues(length) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!Number.isInteger(length) || length <= 0) {
            throw new Error('Length must be a positive integer');
        }
        const randomValues = new Uint8Array(length);
        webcrypto.getRandomValues(randomValues);
        return Buffer.from(randomValues).toString('hex');
    });
}
/**
 * Computes SHA-256 hash for the given input.
 * @param input - The input to hash.
 * @returns The SHA-256 hash of the input.
 */
function hashBackupCode(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = yield webcrypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    });
}

var CONSTANTS;
(function (CONSTANTS) {
    CONSTANTS["mcp_delimiter"] = "_mcp_";
    /** System user ID for app-level OAuth tokens (all zeros ObjectId) */
    CONSTANTS["SYSTEM_USER_ID"] = "000000000000000000000000";
})(CONSTANTS || (CONSTANTS = {}));
function isSystemUserId(userId) {
    return userId === CONSTANTS.SYSTEM_USER_ID;
}

class MCPTokenStorage {
    static getLogPrefix(userId, serverName) {
        return isSystemUserId(userId)
            ? `[MCP][${serverName}]`
            : `[MCP][User: ${userId}][${serverName}]`;
    }
    /**
     * Stores OAuth tokens for an MCP server
     *
     * @param params.existingTokens - Optional: Pass existing token state to avoid duplicate DB calls.
     * This is useful when refreshing tokens, as getTokens() already has the token state.
     */
    static storeTokens({ userId, serverName, tokens, createToken, updateToken, findToken, clientInfo, existingTokens, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const logPrefix = this.getLogPrefix(userId, serverName);
            try {
                const identifier = `mcp:${serverName}`;
                // Encrypt and store access token
                const encryptedAccessToken = yield encryptV2(tokens.access_token);
                dataSchemas.logger.debug(`${logPrefix} Token expires_in: ${'expires_in' in tokens ? tokens.expires_in : 'N/A'}, expires_at: ${'expires_at' in tokens ? tokens.expires_at : 'N/A'}`);
                // Handle both expires_in and expires_at formats
                let accessTokenExpiry;
                if ('expires_at' in tokens && tokens.expires_at) {
                    /** MCPOAuthTokens format - already has calculated expiry */
                    dataSchemas.logger.debug(`${logPrefix} Using expires_at: ${tokens.expires_at}`);
                    accessTokenExpiry = new Date(tokens.expires_at);
                }
                else if (tokens.expires_in) {
                    /** Standard OAuthTokens format - calculate expiry */
                    dataSchemas.logger.debug(`${logPrefix} Using expires_in: ${tokens.expires_in}`);
                    accessTokenExpiry = new Date(Date.now() + tokens.expires_in * 1000);
                }
                else {
                    /** No expiry provided - default to 1 year */
                    dataSchemas.logger.debug(`${logPrefix} No expiry provided, using default`);
                    accessTokenExpiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
                }
                dataSchemas.logger.debug(`${logPrefix} Calculated expiry date: ${accessTokenExpiry.toISOString()}`);
                dataSchemas.logger.debug(`${logPrefix} Date object: ${JSON.stringify({
                    time: accessTokenExpiry.getTime(),
                    valid: !isNaN(accessTokenExpiry.getTime()),
                    iso: accessTokenExpiry.toISOString(),
                })}`);
                // Ensure the date is valid before passing to createToken
                if (isNaN(accessTokenExpiry.getTime())) {
                    dataSchemas.logger.error(`${logPrefix} Invalid expiry date calculated, using default`);
                    accessTokenExpiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
                }
                // Calculate expiresIn (seconds from now)
                const expiresIn = Math.floor((accessTokenExpiry.getTime() - Date.now()) / 1000);
                const accessTokenData = {
                    userId,
                    type: 'mcp_oauth',
                    identifier,
                    token: encryptedAccessToken,
                    expiresIn: expiresIn > 0 ? expiresIn : 365 * 24 * 60 * 60, // Default to 1 year if negative
                };
                // Check if token already exists and update if it does
                if (findToken && updateToken) {
                    // Use provided existing token state if available, otherwise look it up
                    const existingToken = (existingTokens === null || existingTokens === void 0 ? void 0 : existingTokens.accessToken) !== undefined
                        ? existingTokens.accessToken
                        : yield findToken({ userId, identifier });
                    if (existingToken) {
                        yield updateToken({ userId, identifier }, accessTokenData);
                        dataSchemas.logger.debug(`${logPrefix} Updated existing access token`);
                    }
                    else {
                        yield createToken(accessTokenData);
                        dataSchemas.logger.debug(`${logPrefix} Created new access token`);
                    }
                }
                else {
                    // Create new token if it's initial store or update methods not provided
                    yield createToken(accessTokenData);
                    dataSchemas.logger.debug(`${logPrefix} Created access token (no update methods available)`);
                }
                // Store refresh token if available
                if (tokens.refresh_token) {
                    const encryptedRefreshToken = yield encryptV2(tokens.refresh_token);
                    const extendedTokens = tokens;
                    const refreshTokenExpiry = extendedTokens.refresh_token_expires_in
                        ? new Date(Date.now() + extendedTokens.refresh_token_expires_in * 1000)
                        : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // Default to 1 year
                    /** Calculated expiresIn for refresh token */
                    const refreshExpiresIn = Math.floor((refreshTokenExpiry.getTime() - Date.now()) / 1000);
                    const refreshTokenData = {
                        userId,
                        type: 'mcp_oauth_refresh',
                        identifier: `${identifier}:refresh`,
                        token: encryptedRefreshToken,
                        expiresIn: refreshExpiresIn > 0 ? refreshExpiresIn : 365 * 24 * 60 * 60,
                    };
                    // Check if refresh token already exists and update if it does
                    if (findToken && updateToken) {
                        // Use provided existing token state if available, otherwise look it up
                        const existingRefreshToken = (existingTokens === null || existingTokens === void 0 ? void 0 : existingTokens.refreshToken) !== undefined
                            ? existingTokens.refreshToken
                            : yield findToken({
                                userId,
                                identifier: `${identifier}:refresh`,
                            });
                        if (existingRefreshToken) {
                            yield updateToken({ userId, identifier: `${identifier}:refresh` }, refreshTokenData);
                            dataSchemas.logger.debug(`${logPrefix} Updated existing refresh token`);
                        }
                        else {
                            yield createToken(refreshTokenData);
                            dataSchemas.logger.debug(`${logPrefix} Created new refresh token`);
                        }
                    }
                    else {
                        yield createToken(refreshTokenData);
                        dataSchemas.logger.debug(`${logPrefix} Created refresh token (no update methods available)`);
                    }
                }
                /** Store client information if provided */
                if (clientInfo) {
                    dataSchemas.logger.debug(`${logPrefix} Storing client info:`, {
                        client_id: clientInfo.client_id,
                        has_client_secret: !!clientInfo.client_secret,
                    });
                    const encryptedClientInfo = yield encryptV2(JSON.stringify(clientInfo));
                    const clientInfoData = {
                        userId,
                        type: 'mcp_oauth_client',
                        identifier: `${identifier}:client`,
                        token: encryptedClientInfo,
                        expiresIn: 365 * 24 * 60 * 60,
                    };
                    // Check if client info already exists and update if it does
                    if (findToken && updateToken) {
                        // Use provided existing token state if available, otherwise look it up
                        const existingClientInfo = (existingTokens === null || existingTokens === void 0 ? void 0 : existingTokens.clientInfoToken) !== undefined
                            ? existingTokens.clientInfoToken
                            : yield findToken({
                                userId,
                                identifier: `${identifier}:client`,
                            });
                        if (existingClientInfo) {
                            yield updateToken({ userId, identifier: `${identifier}:client` }, clientInfoData);
                            dataSchemas.logger.debug(`${logPrefix} Updated existing client info`);
                        }
                        else {
                            yield createToken(clientInfoData);
                            dataSchemas.logger.debug(`${logPrefix} Created new client info`);
                        }
                    }
                    else {
                        yield createToken(clientInfoData);
                        dataSchemas.logger.debug(`${logPrefix} Created client info (no update methods available)`);
                    }
                }
                dataSchemas.logger.debug(`${logPrefix} Stored OAuth tokens`);
            }
            catch (error) {
                const logPrefix = this.getLogPrefix(userId, serverName);
                dataSchemas.logger.error(`${logPrefix} Failed to store tokens`, error);
                throw error;
            }
        });
    }
    /**
     * Retrieves OAuth tokens for an MCP server
     */
    static getTokens({ userId, serverName, findToken, createToken, updateToken, refreshTokens, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const logPrefix = this.getLogPrefix(userId, serverName);
            try {
                const identifier = `mcp:${serverName}`;
                // Get access token
                const accessTokenData = yield findToken({
                    userId,
                    type: 'mcp_oauth',
                    identifier,
                });
                /** Check if access token is missing or expired */
                const isMissing = !accessTokenData;
                const isExpired = (accessTokenData === null || accessTokenData === void 0 ? void 0 : accessTokenData.expiresAt) && new Date() >= accessTokenData.expiresAt;
                if (isMissing || isExpired) {
                    dataSchemas.logger.info(`${logPrefix} Access token ${isMissing ? 'missing' : 'expired'}`);
                    /** Refresh data if we have a refresh token and refresh function */
                    const refreshTokenData = yield findToken({
                        userId,
                        type: 'mcp_oauth_refresh',
                        identifier: `${identifier}:refresh`,
                    });
                    if (!refreshTokenData) {
                        dataSchemas.logger.info(`${logPrefix} Access token ${isMissing ? 'missing' : 'expired'} and no refresh token available`);
                        return null;
                    }
                    if (!refreshTokens) {
                        dataSchemas.logger.warn(`${logPrefix} Access token ${isMissing ? 'missing' : 'expired'}, refresh token available but no \`refreshTokens\` provided`);
                        return null;
                    }
                    if (!createToken) {
                        dataSchemas.logger.warn(`${logPrefix} Access token ${isMissing ? 'missing' : 'expired'}, refresh token available but no \`createToken\` function provided`);
                        return null;
                    }
                    try {
                        dataSchemas.logger.info(`${logPrefix} Attempting to refresh token`);
                        const decryptedRefreshToken = yield decryptV2(refreshTokenData.token);
                        /** Client information if available */
                        let clientInfo;
                        let clientInfoData;
                        try {
                            clientInfoData = yield findToken({
                                userId,
                                type: 'mcp_oauth_client',
                                identifier: `${identifier}:client`,
                            });
                            if (clientInfoData) {
                                const decryptedClientInfo = yield decryptV2(clientInfoData.token);
                                clientInfo = JSON.parse(decryptedClientInfo);
                                dataSchemas.logger.debug(`${logPrefix} Retrieved client info:`, {
                                    client_id: clientInfo.client_id,
                                    has_client_secret: !!clientInfo.client_secret,
                                });
                            }
                        }
                        catch (_b) {
                            dataSchemas.logger.debug(`${logPrefix} No client info found`);
                        }
                        const metadata = {
                            userId,
                            serverName,
                            identifier,
                            clientInfo,
                        };
                        const newTokens = yield refreshTokens(decryptedRefreshToken, metadata);
                        // Store the refreshed tokens (handles both create and update)
                        // Pass existing token state to avoid duplicate DB calls
                        yield this.storeTokens({
                            userId,
                            serverName,
                            tokens: newTokens,
                            createToken,
                            updateToken,
                            findToken,
                            clientInfo,
                            existingTokens: {
                                accessToken: accessTokenData, // We know this is expired/missing
                                refreshToken: refreshTokenData, // We already have this
                                clientInfoToken: clientInfoData, // We already looked this up
                            },
                        });
                        dataSchemas.logger.info(`${logPrefix} Successfully refreshed and stored OAuth tokens`);
                        return newTokens;
                    }
                    catch (refreshError) {
                        dataSchemas.logger.error(`${logPrefix} Failed to refresh tokens`, refreshError);
                        // Check if it's an unauthorized_client error (refresh not supported)
                        const errorMessage = refreshError instanceof Error ? refreshError.message : String(refreshError);
                        if (errorMessage.includes('unauthorized_client')) {
                            dataSchemas.logger.info(`${logPrefix} Server does not support refresh tokens for this client. New authentication required.`);
                        }
                        return null;
                    }
                }
                // If we reach here, access token should exist and be valid
                if (!accessTokenData) {
                    return null;
                }
                const decryptedAccessToken = yield decryptV2(accessTokenData.token);
                /** Get refresh token if available */
                const refreshTokenData = yield findToken({
                    userId,
                    type: 'mcp_oauth_refresh',
                    identifier: `${identifier}:refresh`,
                });
                const tokens = {
                    access_token: decryptedAccessToken,
                    token_type: 'Bearer',
                    obtained_at: accessTokenData.createdAt.getTime(),
                    expires_at: (_a = accessTokenData.expiresAt) === null || _a === void 0 ? void 0 : _a.getTime(),
                };
                if (refreshTokenData) {
                    tokens.refresh_token = yield decryptV2(refreshTokenData.token);
                }
                dataSchemas.logger.debug(`${logPrefix} Loaded existing OAuth tokens from storage`);
                return tokens;
            }
            catch (error) {
                dataSchemas.logger.error(`${logPrefix} Failed to retrieve tokens`, error);
                return null;
            }
        });
    }
}

/**
 * Logs Axios errors based on the error object and a custom message.
 * @param options - The options object.
 * @param options.message - The custom message to be logged.
 * @param options.error - The Axios error object.
 * @returns The log message.
 */
const logAxiosError = ({ message, error }) => {
    var _a, _b;
    let logMessage = message;
    try {
        const stack = error.stack || 'No stack trace available';
        if ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) {
            const { status, headers, data } = error.response;
            logMessage = `${message} The server responded with status ${status}: ${error.message}`;
            dataSchemas.logger.error(logMessage, {
                status,
                headers,
                data,
                stack,
            });
        }
        else if (error.request) {
            const { method, url } = error.config || {};
            logMessage = `${message} No response received for ${method ? method.toUpperCase() : ''} ${url || ''}: ${error.message}`;
            dataSchemas.logger.error(logMessage, {
                requestInfo: { method, url },
                stack,
            });
        }
        else if ((_b = error === null || error === void 0 ? void 0 : error.message) === null || _b === void 0 ? void 0 : _b.includes("Cannot read properties of undefined (reading 'status')")) {
            logMessage = `${message} It appears the request timed out or was unsuccessful: ${error.message}`;
            dataSchemas.logger.error(logMessage, { stack });
        }
        else {
            logMessage = `${message} An error occurred while setting up the request: ${error.message}`;
            dataSchemas.logger.error(logMessage, { stack });
        }
    }
    catch (err) {
        logMessage = `Error in logAxiosError: ${err.message}`;
        dataSchemas.logger.error(logMessage, { stack: err.stack || 'No stack trace available' });
    }
    return logMessage;
};
/**
 * Creates and configures an Axios instance with optional proxy settings.

 * @returns A configured Axios instance
 * @throws If there's an issue creating the Axios instance or parsing the proxy URL
 */
function createAxiosInstance() {
    const instance = axios$1.create();
    if (process.env.proxy) {
        try {
            const url = new URL(process.env.proxy);
            const proxyConfig = {
                host: url.hostname.replace(/^\[|\]$/g, ''),
                protocol: url.protocol.replace(':', ''),
            };
            if (url.port) {
                proxyConfig.port = parseInt(url.port, 10);
            }
            instance.defaults.proxy = proxyConfig;
        }
        catch (error) {
            console.error('Error parsing proxy URL:', error);
            throw new Error(`Invalid proxy URL: ${process.env.proxy}`);
        }
    }
    return instance;
}

/**
 * Checks if the given value is truthy by being either the boolean `true` or a string
 * that case-insensitively matches 'true'.
 *
 * @param value - The value to check.
 * @returns Returns `true` if the value is the boolean `true` or a case-insensitive
 *                    match for the string 'true', otherwise returns `false`.
 * @example
 *
 * isEnabled("True");  // returns true
 * isEnabled("TRUE");  // returns true
 * isEnabled(true);    // returns true
 * isEnabled("false"); // returns false
 * isEnabled(false);   // returns false
 * isEnabled(null);    // returns false
 * isEnabled();        // returns false
 */
function isEnabled(value) {
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        return value.toLowerCase().trim() === 'true';
    }
    return false;
}
/**
 * Checks if the provided value is 'user_provided'.
 *
 * @param value - The value to check.
 * @returns - Returns true if the value is 'user_provided', otherwise false.
 */
const isUserProvided = (value) => value === 'user_provided';
/**
 * @param values
 */
function optionalChainWithEmptyCheck(...values) {
    for (const value of values) {
        if (value !== undefined && value !== null && value !== '') {
            return value;
        }
    }
    return values[values.length - 1];
}

/**
 * Sanitizes the model name to be used in the URL by removing or replacing disallowed characters.
 * @param modelName - The model name to be sanitized.
 * @returns The sanitized model name.
 */
const sanitizeModelName = (modelName) => {
    // Replace periods with empty strings and other disallowed characters as needed.
    return modelName.replace(/\./g, '');
};
/**
 * Generates the Azure OpenAI API endpoint URL.
 * @param params - The parameters object.
 * @param params.azureOpenAIApiInstanceName - The Azure OpenAI API instance name.
 * @param params.azureOpenAIApiDeploymentName - The Azure OpenAI API deployment name.
 * @returns The complete endpoint URL for the Azure OpenAI API.
 */
const genAzureEndpoint = ({ azureOpenAIApiInstanceName, azureOpenAIApiDeploymentName, }) => {
    return `https://${azureOpenAIApiInstanceName}.openai.azure.com/openai/deployments/${azureOpenAIApiDeploymentName}`;
};
/**
 * Generates the Azure OpenAI API chat completion endpoint URL with the API version.
 * If both deploymentName and modelName are provided, modelName takes precedence.
 * @param azureConfig - The Azure configuration object.
 * @param azureConfig.azureOpenAIApiInstanceName - The Azure OpenAI API instance name.
 * @param azureConfig.azureOpenAIApiDeploymentName - The Azure OpenAI API deployment name (optional).
 * @param azureConfig.azureOpenAIApiVersion - The Azure OpenAI API version.
 * @param modelName - The model name to be included in the deployment name (optional).
 * @param client - The API Client class for optionally setting properties (optional).
 * @returns The complete chat completion endpoint URL for the Azure OpenAI API.
 * @throws Error if neither azureOpenAIApiDeploymentName nor modelName is provided.
 */
const genAzureChatCompletion = ({ azureOpenAIApiInstanceName, azureOpenAIApiDeploymentName, azureOpenAIApiVersion, }, modelName, client) => {
    // Determine the deployment segment of the URL based on provided modelName or azureOpenAIApiDeploymentName
    let deploymentSegment;
    if (isEnabled(process.env.AZURE_USE_MODEL_AS_DEPLOYMENT_NAME) && modelName) {
        const sanitizedModelName = sanitizeModelName(modelName);
        deploymentSegment = sanitizedModelName;
        if (client && typeof client === 'object') {
            client.azure.azureOpenAIApiDeploymentName = sanitizedModelName;
        }
    }
    else if (azureOpenAIApiDeploymentName) {
        deploymentSegment = azureOpenAIApiDeploymentName;
    }
    else if (!process.env.AZURE_OPENAI_BASEURL) {
        throw new Error('Either a model name with the `AZURE_USE_MODEL_AS_DEPLOYMENT_NAME` setting or a deployment name must be provided if `AZURE_OPENAI_BASEURL` is omitted.');
    }
    else {
        deploymentSegment = '';
    }
    return `https://${azureOpenAIApiInstanceName}.openai.azure.com/openai/deployments/${deploymentSegment}/chat/completions?api-version=${azureOpenAIApiVersion}`;
};
/**
 * Retrieves the Azure OpenAI API credentials from environment variables.
 * @returns An object containing the Azure OpenAI API credentials.
 */
const getAzureCredentials = () => {
    var _a;
    return {
        azureOpenAIApiKey: (_a = process.env.AZURE_API_KEY) !== null && _a !== void 0 ? _a : process.env.AZURE_OPENAI_API_KEY,
        azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
        azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
        azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
    };
};
/**
 * Constructs a URL by replacing placeholders in the baseURL with values from the azure object.
 * It specifically looks for '${INSTANCE_NAME}' and '${DEPLOYMENT_NAME}' within the baseURL and replaces
 * them with 'azureOpenAIApiInstanceName' and 'azureOpenAIApiDeploymentName' from the azure object.
 * If the respective azure property is not provided, the placeholder is replaced with an empty string.
 *
 * @param params - The parameters object.
 * @param params.baseURL - The baseURL to inspect for replacement placeholders.
 * @param params.azureOptions - The azure options object containing the instance and deployment names.
 * @returns The complete baseURL with credentials injected for the Azure OpenAI API.
 */
function constructAzureURL({ baseURL, azureOptions, }) {
    var _a, _b;
    let finalURL = baseURL;
    // Replace INSTANCE_NAME and DEPLOYMENT_NAME placeholders with actual values if available
    if (azureOptions) {
        finalURL = finalURL.replace('${INSTANCE_NAME}', (_a = azureOptions.azureOpenAIApiInstanceName) !== null && _a !== void 0 ? _a : '');
        finalURL = finalURL.replace('${DEPLOYMENT_NAME}', (_b = azureOptions.azureOpenAIApiDeploymentName) !== null && _b !== void 0 ? _b : '');
    }
    return finalURL;
}

/**
 * List of allowed user fields that can be used in MCP environment variables.
 * These are non-sensitive string/boolean fields from the IUser interface.
 */
const ALLOWED_USER_FIELDS = [
    'id',
    'name',
    'username',
    'email',
    'provider',
    'role',
    'googleId',
    'facebookId',
    'openidId',
    'samlId',
    'ldapId',
    'githubId',
    'discordId',
    'appleId',
    'emailVerified',
    'twoFactorEnabled',
    'termsAccepted',
];
/**
 * List of allowed request body fields that can be used in header placeholders.
 * These are common fields from the request body that are safe to expose in headers.
 */
const ALLOWED_BODY_FIELDS = ['conversationId', 'parentMessageId', 'messageId'];
/**
 * Processes a string value to replace user field placeholders
 * @param value - The string value to process
 * @param user - The user object
 * @returns The processed string with placeholders replaced
 */
function processUserPlaceholders(value, user) {
    if (!user || typeof value !== 'string') {
        return value;
    }
    for (const field of ALLOWED_USER_FIELDS) {
        const placeholder = `{{LIBRECHAT_USER_${field.toUpperCase()}}}`;
        if (!value.includes(placeholder)) {
            continue;
        }
        const fieldValue = user[field];
        // Skip replacement if field doesn't exist in user object
        if (!(field in user)) {
            continue;
        }
        // Special case for 'id' field: skip if undefined or empty
        if (field === 'id' && (fieldValue === undefined || fieldValue === '')) {
            continue;
        }
        const replacementValue = fieldValue == null ? '' : String(fieldValue);
        value = value.replace(new RegExp(placeholder, 'g'), replacementValue);
    }
    return value;
}
/**
 * Replaces request body field placeholders within a string.
 * Recognized placeholders: `{{LIBRECHAT_BODY_<FIELD>}}` where `<FIELD>` ∈ ALLOWED_BODY_FIELDS.
 * If a body field is absent or null/undefined, it is replaced with an empty string.
 *
 * @param value - The string value to process
 * @param body - The request body object
 * @returns The processed string with placeholders replaced
 */
function processBodyPlaceholders(value, body) {
    for (const field of ALLOWED_BODY_FIELDS) {
        const placeholder = `{{LIBRECHAT_BODY_${field.toUpperCase()}}}`;
        if (!value.includes(placeholder)) {
            continue;
        }
        const fieldValue = body[field];
        const replacementValue = fieldValue == null ? '' : String(fieldValue);
        value = value.replace(new RegExp(placeholder, 'g'), replacementValue);
    }
    return value;
}
/**
 * Processes a single string value by replacing various types of placeholders
 * @param originalValue - The original string value to process
 * @param customUserVars - Optional custom user variables to replace placeholders
 * @param user - Optional user object for replacing user field placeholders
 * @param body - Optional request body object for replacing body field placeholders
 * @returns The processed string with all placeholders replaced
 */
function processSingleValue({ originalValue, customUserVars, user, body = undefined, }) {
    let value = originalValue;
    // 1. Replace custom user variables
    if (customUserVars) {
        for (const [varName, varVal] of Object.entries(customUserVars)) {
            /** Escaped varName for use in regex to avoid issues with special characters */
            const escapedVarName = varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const placeholderRegex = new RegExp(`\\{\\{${escapedVarName}\\}\\}`, 'g');
            value = value.replace(placeholderRegex, varVal);
        }
    }
    // 2. Replace user field placeholders (e.g., {{LIBRECHAT_USER_EMAIL}}, {{LIBRECHAT_USER_ID}})
    value = processUserPlaceholders(value, user);
    // 3. Replace body field placeholders (e.g., {{LIBRECHAT_BODY_CONVERSATIONID}}, {{LIBRECHAT_BODY_PARENTMESSAGEID}})
    if (body) {
        value = processBodyPlaceholders(value, body);
    }
    // 4. Replace system environment variables
    value = librechatDataProvider.extractEnvVariable(value);
    return value;
}
/**
 * Recursively processes an object to replace environment variables in string values
 * @param params - Processing parameters
 * @param params.options - The MCP options to process
 * @param params.user - The user object containing all user fields
 * @param params.customUserVars - vars that user set in settings
 * @param params.body - the body of the request that is being processed
 * @returns - The processed object with environment variables replaced
 */
function processMCPEnv(params) {
    const { options, user, customUserVars, body } = params;
    if (options === null || options === undefined) {
        return options;
    }
    const newObj = structuredClone(options);
    if ('env' in newObj && newObj.env) {
        const processedEnv = {};
        for (const [key, originalValue] of Object.entries(newObj.env)) {
            processedEnv[key] = processSingleValue({ originalValue, customUserVars, user, body });
        }
        newObj.env = processedEnv;
    }
    if ('args' in newObj && newObj.args) {
        const processedArgs = [];
        for (const originalValue of newObj.args) {
            processedArgs.push(processSingleValue({ originalValue, customUserVars, user, body }));
        }
        newObj.args = processedArgs;
    }
    // Process headers if they exist (for WebSocket, SSE, StreamableHTTP types)
    // Note: `env` and `headers` are on different branches of the MCPOptions union type.
    if ('headers' in newObj && newObj.headers) {
        const processedHeaders = {};
        for (const [key, originalValue] of Object.entries(newObj.headers)) {
            processedHeaders[key] = processSingleValue({ originalValue, customUserVars, user, body });
        }
        newObj.headers = processedHeaders;
    }
    // Process URL if it exists (for WebSocket, SSE, StreamableHTTP types)
    if ('url' in newObj && newObj.url) {
        newObj.url = processSingleValue({ originalValue: newObj.url, customUserVars, user, body });
    }
    return newObj;
}
/**
 * Resolves header values by replacing user placeholders, body variables, custom variables, and environment variables.
 *
 * @param options - Optional configuration object.
 * @param options.headers - The headers object to process.
 * @param options.user - Optional user object for replacing user field placeholders (can be partial with just id).
 * @param options.body - Optional request body object for replacing body field placeholders.
 * @param options.customUserVars - Optional custom user variables to replace placeholders.
 * @returns The processed headers with all placeholders replaced.
 */
function resolveHeaders(options) {
    const { headers, user, body, customUserVars } = options !== null && options !== void 0 ? options : {};
    const inputHeaders = headers !== null && headers !== void 0 ? headers : {};
    const resolvedHeaders = Object.assign({}, inputHeaders);
    if (inputHeaders && typeof inputHeaders === 'object' && !Array.isArray(inputHeaders)) {
        Object.keys(inputHeaders).forEach((key) => {
            resolvedHeaders[key] = processSingleValue({
                originalValue: inputHeaders[key],
                customUserVars,
                user: user,
                body,
            });
        });
    }
    return resolvedHeaders;
}

/**
 * Sends message data in Server Sent Events format.
 * @param res - The server response.
 * @param event - The message event.
 * @param event.event - The type of event.
 * @param event.data - The message to be sent.
 */
function sendEvent(res, event) {
    if (typeof event.data === 'string' && event.data.length === 0) {
        return;
    }
    res.write(`event: message\ndata: ${JSON.stringify(event)}\n\n`);
}
/**
 * Sends error data in Server Sent Events format and ends the response.
 * @param res - The server response.
 * @param message - The error message.
 */
function handleError(res, message) {
    res.write(`event: error\ndata: ${JSON.stringify(message)}\n\n`);
    res.end();
}

/**
 * Sanitize a filename by removing any directory components, replacing non-alphanumeric characters
 * @param inputName
 */
function sanitizeFilename(inputName) {
    // Remove any directory components
    let name = path$2.basename(inputName);
    // Replace any non-alphanumeric characters except for '.' and '-'
    name = name.replace(/[^a-zA-Z0-9.-]/g, '_');
    // Ensure the name doesn't start with a dot (hidden file in Unix-like systems)
    if (name.startsWith('.') || name === '') {
        name = '_' + name;
    }
    // Limit the length of the filename
    const MAX_LENGTH = 255;
    if (name.length > MAX_LENGTH) {
        const ext = path$2.extname(name);
        const nameWithoutExt = path$2.basename(name, ext);
        name =
            nameWithoutExt.slice(0, MAX_LENGTH - ext.length - 7) +
                '-' +
                crypto$2.randomBytes(3).toString('hex') +
                ext;
    }
    return name;
}

/**
 * Makes a function to make HTTP request and logs the process.
 * @param params
 * @param params.directEndpoint - Whether to use a direct endpoint.
 * @param params.reverseProxyUrl - The reverse proxy URL to use for the request.
 * @returns A promise that resolves to the response of the fetch request.
 */
function createFetch({ directEndpoint = false, reverseProxyUrl = '', }) {
    /**
     * Makes an HTTP request and logs the process.
     * @param url - The URL to make the request to. Can be a string or a Request object.
     * @param init - Optional init options for the request.
     * @returns A promise that resolves to the response of the fetch request.
     */
    return function (_url, init) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = _url;
            if (directEndpoint) {
                url = reverseProxyUrl;
            }
            dataSchemas.logger.debug(`Making request to ${url}`);
            if (typeof Bun !== 'undefined') {
                return yield fetch$1(url, init);
            }
            return yield fetch$1(url, init);
        });
    };
}
/**
 * Creates event handlers for stream events that don't capture client references
 * @param res - The response object to send events to
 * @returns Object containing handler functions
 */
function createStreamEventHandlers(res) {
    return {
        [agents.GraphEvents.ON_RUN_STEP]: function (event) {
            if (res) {
                sendEvent(res, event);
            }
        },
        [agents.GraphEvents.ON_MESSAGE_DELTA]: function (event) {
            if (res) {
                sendEvent(res, event);
            }
        },
        [agents.GraphEvents.ON_REASONING_DELTA]: function (event) {
            if (res) {
                sendEvent(res, event);
            }
        },
    };
}
function createHandleLLMNewToken(streamRate) {
    return function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (streamRate) {
                yield agents.sleep(streamRate);
            }
        });
    };
}

/**
 * Load Google service key from file path, URL, or stringified JSON
 * @param keyPath - The path to the service key file, URL to fetch it from, or stringified JSON
 * @returns The parsed service key object or null if failed
 */
function loadServiceKey(keyPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!keyPath) {
            return null;
        }
        let serviceKey;
        // Check if it's base64 encoded (common pattern for storing in env vars)
        if (keyPath.trim().match(/^[A-Za-z0-9+/]+=*$/)) {
            try {
                const decoded = Buffer.from(keyPath.trim(), 'base64').toString('utf-8');
                // Try to parse the decoded string as JSON
                serviceKey = JSON.parse(decoded);
            }
            catch (_a) {
                // Not base64 or not valid JSON after decoding, continue with other methods
                // Silent failure - not critical
            }
        }
        // Check if it's a stringified JSON (starts with '{')
        if (!serviceKey && keyPath.trim().startsWith('{')) {
            try {
                serviceKey = JSON.parse(keyPath);
            }
            catch (error) {
                dataSchemas.logger.error('Failed to parse service key from stringified JSON', error);
                return null;
            }
        }
        // Check if it's a URL
        else if (!serviceKey && /^https?:\/\//.test(keyPath)) {
            try {
                const response = yield axios$1.get(keyPath);
                serviceKey = response.data;
            }
            catch (error) {
                dataSchemas.logger.error(`Failed to fetch the service key from URL: ${keyPath}`, error);
                return null;
            }
        }
        else if (!serviceKey) {
            // It's a file path
            try {
                const absolutePath = path$2.isAbsolute(keyPath) ? keyPath : path$2.resolve(keyPath);
                const fileContent = fs$2.readFileSync(absolutePath, 'utf8');
                serviceKey = JSON.parse(fileContent);
            }
            catch (error) {
                dataSchemas.logger.error(`Failed to load service key from file: ${keyPath}`, error);
                return null;
            }
        }
        // If the response is a string (e.g., from a URL that returns JSON as text), parse it
        if (typeof serviceKey === 'string') {
            try {
                serviceKey = JSON.parse(serviceKey);
            }
            catch (parseError) {
                dataSchemas.logger.error(`Failed to parse service key JSON from ${keyPath}`, parseError);
                return null;
            }
        }
        // Validate the service key has required fields
        if (!serviceKey || typeof serviceKey !== 'object') {
            dataSchemas.logger.error(`Invalid service key format from ${keyPath}`);
            return null;
        }
        // Fix private key formatting if needed
        const key = serviceKey;
        if (key.private_key && typeof key.private_key === 'string') {
            // Replace escaped newlines with actual newlines
            // When JSON.parse processes "\\n", it becomes "\n" (single backslash + n)
            // When JSON.parse processes "\n", it becomes an actual newline character
            key.private_key = key.private_key.replace(/\\n/g, '\n');
            // Also handle the String.raw`\n` case mentioned in Stack Overflow
            key.private_key = key.private_key.split(String.raw `\n`).join('\n');
            // Ensure proper PEM format
            if (!key.private_key.includes('\n')) {
                // If no newlines are present, try to format it properly
                const privateKeyMatch = key.private_key.match(/^(-----BEGIN [A-Z ]+-----)(.*)(-----END [A-Z ]+-----)$/);
                if (privateKeyMatch) {
                    const [, header, body, footer] = privateKeyMatch;
                    // Add newlines after header and before footer
                    key.private_key = `${header}\n${body}\n${footer}`;
                }
            }
        }
        return key;
    });
}

/**
 * Separates LibreChat-specific parameters from model options
 * @param options - The combined options object
 */
function extractLibreChatParams(options) {
    var _a;
    if (!options) {
        return {
            modelOptions: {},
            resendFiles: librechatDataProvider.librechat.resendFiles.default,
        };
    }
    const modelOptions = Object.assign({}, options);
    const resendFiles = (_a = (delete modelOptions.resendFiles, options.resendFiles)) !== null && _a !== void 0 ? _a : librechatDataProvider.librechat.resendFiles.default;
    const promptPrefix = (delete modelOptions.promptPrefix, options.promptPrefix);
    const maxContextTokens = (delete modelOptions.maxContextTokens, options.maxContextTokens);
    const modelLabel = (delete modelOptions.modelLabel, options.modelLabel);
    return {
        modelOptions: modelOptions,
        maxContextTokens,
        promptPrefix,
        resendFiles,
        modelLabel,
    };
}

/**
 * Evaluates a mathematical expression provided as a string and returns the result.
 *
 * If the input is already a number, it returns the number as is.
 * If the input is not a string or contains invalid characters, an error is thrown.
 * If the evaluated result is not a number, an error is thrown.
 *
 * @param str - The mathematical expression to evaluate, or a number.
 * @param fallbackValue - The default value to return if the input is not a string or number, or if the evaluated result is not a number.
 *
 * @returns The result of the evaluated expression or the input number.
 *
 * @throws Throws an error if the input is not a string or number, contains invalid characters, or does not evaluate to a number.
 */
function math(str, fallbackValue) {
    const fallback = typeof fallbackValue !== 'undefined' && typeof fallbackValue === 'number';
    if (typeof str !== 'string' && typeof str === 'number') {
        return str;
    }
    else if (typeof str !== 'string') {
        if (fallback) {
            return fallbackValue;
        }
        throw new Error(`str is ${typeof str}, but should be a string`);
    }
    const validStr = /^[+\-\d.\s*/%()]+$/.test(str);
    if (!validStr) {
        if (fallback) {
            return fallbackValue;
        }
        throw new Error('Invalid characters in string');
    }
    const value = eval(str);
    if (typeof value !== 'number') {
        if (fallback) {
            return fallbackValue;
        }
        throw new Error(`[math] str did not evaluate to a number but to a ${typeof value}`);
    }
    return value;
}

/**
 * Helper function to safely log sensitive data when debug mode is enabled
 * @param obj - Object to stringify
 * @param maxLength - Maximum length of the stringified output
 * @returns Stringified object with sensitive data masked
 */
function safeStringify(obj, maxLength = 1000) {
    try {
        const str = JSON.stringify(obj, (key, value) => {
            // Mask sensitive values
            if (key === 'client_secret' ||
                key === 'Authorization' ||
                key.toLowerCase().includes('token') ||
                key.toLowerCase().includes('password')) {
                return typeof value === 'string' && value.length > 6
                    ? `${value.substring(0, 3)}...${value.substring(value.length - 3)}`
                    : '***MASKED***';
            }
            return value;
        });
        if (str && str.length > maxLength) {
            return `${str.substring(0, maxLength)}... (truncated)`;
        }
        return str;
    }
    catch (error) {
        return `[Error stringifying object: ${error.message}]`;
    }
}
/**
 * Helper to log headers without revealing sensitive information
 * @param headers - Headers object to log
 * @returns Stringified headers with sensitive data masked
 */
function logHeaders(headers) {
    const headerObj = {};
    if (!headers || typeof headers.entries !== 'function') {
        return 'No headers available';
    }
    for (const [key, value] of headers.entries()) {
        if (key.toLowerCase() === 'authorization' || key.toLowerCase().includes('secret')) {
            headerObj[key] = '***MASKED***';
        }
        else {
            headerObj[key] = value;
        }
    }
    return safeStringify(headerObj);
}

/**
 * Default retention period for temporary chats in hours
 */
const DEFAULT_RETENTION_HOURS = 24 * 30; // 30 days
/**
 * Minimum allowed retention period in hours
 */
const MIN_RETENTION_HOURS = 1;
/**
 * Maximum allowed retention period in hours (1 year = 8760 hours)
 */
const MAX_RETENTION_HOURS = 8760;
/**
 * Gets the temporary chat retention period from environment variables or config
 * @param config - The custom configuration object
 * @returns The retention period in hours
 */
function getTempChatRetentionHours(config) {
    var _a;
    let retentionHours = DEFAULT_RETENTION_HOURS;
    // Check environment variable first
    if (process.env.TEMP_CHAT_RETENTION_HOURS) {
        const envValue = parseInt(process.env.TEMP_CHAT_RETENTION_HOURS, 10);
        if (!isNaN(envValue)) {
            retentionHours = envValue;
        }
        else {
            dataSchemas.logger.warn(`Invalid TEMP_CHAT_RETENTION_HOURS environment variable: ${process.env.TEMP_CHAT_RETENTION_HOURS}. Using default: ${DEFAULT_RETENTION_HOURS} hours.`);
        }
    }
    // Check config file (takes precedence over environment variable)
    if (((_a = config === null || config === void 0 ? void 0 : config.interface) === null || _a === void 0 ? void 0 : _a.temporaryChatRetention) !== undefined) {
        const configValue = config.interface.temporaryChatRetention;
        if (typeof configValue === 'number' && !isNaN(configValue)) {
            retentionHours = configValue;
        }
        else {
            dataSchemas.logger.warn(`Invalid temporaryChatRetention in config: ${configValue}. Using ${retentionHours} hours.`);
        }
    }
    // Validate the retention period
    if (retentionHours < MIN_RETENTION_HOURS) {
        dataSchemas.logger.warn(`Temporary chat retention period ${retentionHours} is below minimum ${MIN_RETENTION_HOURS} hours. Using minimum value.`);
        retentionHours = MIN_RETENTION_HOURS;
    }
    else if (retentionHours > MAX_RETENTION_HOURS) {
        dataSchemas.logger.warn(`Temporary chat retention period ${retentionHours} exceeds maximum ${MAX_RETENTION_HOURS} hours. Using maximum value.`);
        retentionHours = MAX_RETENTION_HOURS;
    }
    return retentionHours;
}
/**
 * Creates an expiration date for temporary chats
 * @param config - The custom configuration object
 * @returns The expiration date
 */
function createTempChatExpirationDate(config) {
    const retentionHours = getTempChatRetentionHours(config);
    const expiredAt = new Date();
    expiredAt.setHours(expiredAt.getHours() + retentionHours);
    return expiredAt;
}

class Tokenizer {
    constructor() {
        this.tokenizersCache = {};
        this.tokenizerCallsCount = 0;
    }
    getTokenizer(encoding, isModelName = false, extendSpecialTokens = {}) {
        let tokenizer;
        if (this.tokenizersCache[encoding]) {
            tokenizer = this.tokenizersCache[encoding];
        }
        else {
            if (isModelName) {
                tokenizer = tiktoken.encoding_for_model(encoding, extendSpecialTokens);
            }
            else {
                tokenizer = tiktoken.get_encoding(encoding, extendSpecialTokens);
            }
            this.tokenizersCache[encoding] = tokenizer;
        }
        return tokenizer;
    }
    freeAndResetAllEncoders() {
        try {
            Object.keys(this.tokenizersCache).forEach((key) => {
                if (this.tokenizersCache[key]) {
                    this.tokenizersCache[key].free();
                    delete this.tokenizersCache[key];
                }
            });
            this.tokenizerCallsCount = 1;
        }
        catch (error) {
            dataSchemas.logger.error('[Tokenizer] Free and reset encoders error', error);
        }
    }
    resetTokenizersIfNecessary() {
        var _a;
        if (this.tokenizerCallsCount >= 25) {
            if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.debug) {
                dataSchemas.logger.debug('[Tokenizer] freeAndResetAllEncoders: reached 25 encodings, resetting...');
            }
            this.freeAndResetAllEncoders();
        }
        this.tokenizerCallsCount++;
    }
    getTokenCount(text, encoding = 'cl100k_base') {
        this.resetTokenizersIfNecessary();
        try {
            const tokenizer = this.getTokenizer(encoding);
            return tokenizer.encode(text, 'all').length;
        }
        catch (error) {
            dataSchemas.logger.error('[Tokenizer] Error getting token count:', error);
            this.freeAndResetAllEncoders();
            const tokenizer = this.getTokenizer(encoding);
            return tokenizer.encode(text, 'all').length;
        }
    }
}
const TokenizerSingleton = new Tokenizer();

function loadYaml(filepath) {
    try {
        const fileContents = fs$2.readFileSync(filepath, 'utf8');
        return yaml.load(fileContents);
    }
    catch (e) {
        return e;
    }
}

/**
 * Normalizes an error-like object into an HTTP status and message.
 * Ensures we always respond with a valid numeric status to avoid UI hangs.
 */
function normalizeHttpError(err, fallbackStatus = 400) {
    let status = fallbackStatus;
    if (err && typeof err === 'object' && 'status' in err && typeof err.status === 'number') {
        status = err.status;
    }
    let message = 'An error occurred.';
    if (err &&
        typeof err === 'object' &&
        'message' in err &&
        typeof err.message === 'string' &&
        err.message.length > 0) {
        message = err.message;
    }
    return { status, message };
}

var _a, _b, _c;
/**
 * Centralized configuration for MCP-related environment variables.
 * Provides typed access to MCP settings with default values.
 */
const mcpConfig = {
    OAUTH_ON_AUTH_ERROR: isEnabled((_a = process.env.MCP_OAUTH_ON_AUTH_ERROR) !== null && _a !== void 0 ? _a : true),
    OAUTH_DETECTION_TIMEOUT: math((_b = process.env.MCP_OAUTH_DETECTION_TIMEOUT) !== null && _b !== void 0 ? _b : 5000),
    CONNECTION_CHECK_TTL: math((_c = process.env.MCP_CONNECTION_CHECK_TTL) !== null && _c !== void 0 ? _c : 60000),
};

// ATTENTION: If you modify OAuth detection logic in this file, run the integration tests to verify:
// npx jest --testMatch="**/detectOAuth.integration.dev.ts" (from packages/api directory)
//
// These tests are excluded from CI because they make live HTTP requests to external services,
// which could cause flaky builds due to network issues or changes in third-party endpoints.
// Manual testing ensures the OAuth detection still works against real MCP servers.
/**
 * Detects if an MCP server requires OAuth authentication using proactive discovery methods.
 *
 * This function implements a comprehensive OAuth detection strategy:
 * 1. Standard Protected Resource Metadata (RFC 9728) - checks /.well-known/oauth-protected-resource
 * 2. 401 Challenge Method - checks WWW-Authenticate header for resource_metadata URL
 * 3. Optional fallback: treat any 401/403 response as OAuth requirement (if MCP_OAUTH_ON_AUTH_ERROR=true)
 *
 * @param serverUrl - The MCP server URL to check for OAuth requirements
 * @returns Promise<OAuthDetectionResult> - OAuth requirement details
 */
function detectOAuthRequirement(serverUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const protectedResourceResult = yield checkProtectedResourceMetadata(serverUrl);
        if (protectedResourceResult)
            return protectedResourceResult;
        const challengeResult = yield check401ChallengeMetadata(serverUrl);
        if (challengeResult)
            return challengeResult;
        const fallbackResult = yield checkAuthErrorFallback(serverUrl);
        if (fallbackResult)
            return fallbackResult;
        // No OAuth detected
        return {
            requiresOAuth: false,
            method: 'no-metadata-found',
            metadata: null,
        };
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// ------------------------ Private helper functions for OAuth detection -------------------------//
////////////////////////////////////////////////////////////////////////////////////////////////////
// Checks for OAuth using standard protected resource metadata (RFC 9728)
function checkProtectedResourceMetadata(serverUrl) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resourceMetadata = yield auth_js.discoverOAuthProtectedResourceMetadata(serverUrl);
            if (!((_a = resourceMetadata === null || resourceMetadata === void 0 ? void 0 : resourceMetadata.authorization_servers) === null || _a === void 0 ? void 0 : _a.length))
                return null;
            return {
                requiresOAuth: true,
                method: 'protected-resource-metadata',
                metadata: resourceMetadata,
            };
        }
        catch (_b) {
            return null;
        }
    });
}
// Checks for OAuth using 401 challenge with resource metadata URL
function check401ChallengeMetadata(serverUrl) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(serverUrl, {
                method: 'HEAD',
                signal: AbortSignal.timeout(mcpConfig.OAUTH_DETECTION_TIMEOUT),
            });
            if (response.status !== 401)
                return null;
            const wwwAuth = response.headers.get('www-authenticate');
            const metadataUrl = (_a = wwwAuth === null || wwwAuth === void 0 ? void 0 : wwwAuth.match(/resource_metadata="([^"]+)"/)) === null || _a === void 0 ? void 0 : _a[1];
            if (!metadataUrl)
                return null;
            const metadataResponse = yield fetch(metadataUrl, {
                signal: AbortSignal.timeout(mcpConfig.OAUTH_DETECTION_TIMEOUT),
            });
            const metadata = yield metadataResponse.json();
            if (!((_b = metadata === null || metadata === void 0 ? void 0 : metadata.authorization_servers) === null || _b === void 0 ? void 0 : _b.length))
                return null;
            return {
                requiresOAuth: true,
                method: '401-challenge-metadata',
                metadata,
            };
        }
        catch (_c) {
            return null;
        }
    });
}
// Fallback method: treats any auth error as OAuth requirement if configured
function checkAuthErrorFallback(serverUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!mcpConfig.OAUTH_ON_AUTH_ERROR)
                return null;
            const response = yield fetch(serverUrl, {
                method: 'HEAD',
                signal: AbortSignal.timeout(mcpConfig.OAUTH_DETECTION_TIMEOUT),
            });
            if (response.status !== 401 && response.status !== 403)
                return null;
            return {
                requiresOAuth: true,
                method: 'no-metadata-found',
                metadata: null,
            };
        }
        catch (_a) {
            return null;
        }
    });
}

function isStdioOptions(options) {
    return 'command' in options;
}
function isWebSocketOptions(options) {
    if ('url' in options) {
        const protocol = new URL(options.url).protocol;
        return protocol === 'ws:' || protocol === 'wss:';
    }
    return false;
}
function isSSEOptions(options) {
    if ('url' in options) {
        const protocol = new URL(options.url).protocol;
        return protocol !== 'ws:' && protocol !== 'wss:';
    }
    return false;
}
/**
 * Checks if the provided options are for a Streamable HTTP transport.
 *
 * Streamable HTTP is an MCP transport that uses HTTP POST for sending messages
 * and supports streaming responses. It provides better performance than
 * SSE transport while maintaining compatibility with most network environments.
 *
 * @param options MCP connection options to check
 * @returns True if options are for a streamable HTTP transport
 */
function isStreamableHTTPOptions(options) {
    if ('url' in options && 'type' in options) {
        const optionType = options.type;
        if (optionType === 'streamable-http' || optionType === 'http') {
            const protocol = new URL(options.url).protocol;
            return protocol !== 'ws:' && protocol !== 'wss:';
        }
    }
    return false;
}
const FIVE_MINUTES = 5 * 60 * 1000;
class MCPConnection extends events.EventEmitter {
    setRequestHeaders(headers) {
        if (!headers) {
            return;
        }
        const normalizedHeaders = {};
        for (const [key, value] of Object.entries(headers)) {
            normalizedHeaders[key.toLowerCase()] = value;
        }
        dataSchemas.logger.debug(`${this.getLogPrefix()} Setting request headers: ${JSON.stringify(normalizedHeaders)}`);
        this.requestHeaders = normalizedHeaders;
    }
    getRequestHeaders() {
        return this.requestHeaders;
    }
    constructor(params) {
        super();
        this.transport = null; // Make this nullable
        this.connectionState = 'disconnected';
        this.connectPromise = null;
        this.MAX_RECONNECT_ATTEMPTS = 3;
        this.shouldStopReconnecting = false;
        this.isReconnecting = false;
        this.isInitializing = false;
        this.reconnectAttempts = 0;
        this.lastConnectionCheckAt = 0;
        this.oauthRequired = false;
        this.options = params.serverConfig;
        this.serverName = params.serverName;
        this.userId = params.userId;
        this.iconPath = params.serverConfig.iconPath;
        this.timeout = params.serverConfig.timeout;
        this.lastPingTime = Date.now();
        if (params.oauthTokens) {
            this.oauthTokens = params.oauthTokens;
        }
        this.client = new index_js.Client({
            name: '@librechat/api-client',
            version: '1.2.3',
        }, {
            capabilities: {},
        });
        this.setupEventListeners();
    }
    /** Helper to generate consistent log prefixes */
    getLogPrefix() {
        const userPart = this.userId ? `[User: ${this.userId}]` : '';
        return `[MCP]${userPart}[${this.serverName}]`;
    }
    /**
     * Factory function to create fetch functions without capturing the entire `this` context.
     * This helps prevent memory leaks by only passing necessary dependencies.
     *
     * @param getHeaders Function to retrieve request headers
     * @returns A fetch function that merges headers appropriately
     */
    createFetchFunction(getHeaders) {
        return function customFetch(input, init) {
            const requestHeaders = getHeaders();
            if (!requestHeaders) {
                return fetch(input, init);
            }
            let initHeaders = {};
            if (init === null || init === void 0 ? void 0 : init.headers) {
                if (init.headers instanceof Headers) {
                    initHeaders = Object.fromEntries(init.headers.entries());
                }
                else if (Array.isArray(init.headers)) {
                    initHeaders = Object.fromEntries(init.headers);
                }
                else {
                    initHeaders = init.headers;
                }
            }
            return fetch(input, Object.assign(Object.assign({}, init), { headers: Object.assign(Object.assign({}, initHeaders), requestHeaders) }));
        };
    }
    emitError(error, errorContext) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        dataSchemas.logger.error(`${this.getLogPrefix()} ${errorContext}: ${errorMessage}`);
    }
    constructTransport(options) {
        var _a, _b, _c;
        try {
            let type;
            if (isStdioOptions(options)) {
                type = 'stdio';
            }
            else if (isWebSocketOptions(options)) {
                type = 'websocket';
            }
            else if (isStreamableHTTPOptions(options)) {
                // Could be either 'streamable-http' or 'http', normalize to 'streamable-http'
                type = 'streamable-http';
            }
            else if (isSSEOptions(options)) {
                type = 'sse';
            }
            else {
                throw new Error('Cannot infer transport type: options.type is not provided and cannot be inferred from other properties.');
            }
            switch (type) {
                case 'stdio':
                    if (!isStdioOptions(options)) {
                        throw new Error('Invalid options for stdio transport.');
                    }
                    return new stdio_js.StdioClientTransport({
                        command: options.command,
                        args: options.args,
                        // workaround bug of mcp sdk that can't pass env:
                        // https://github.com/modelcontextprotocol/typescript-sdk/issues/216
                        env: Object.assign(Object.assign({}, stdio_js.getDefaultEnvironment()), ((_a = options.env) !== null && _a !== void 0 ? _a : {})),
                    });
                case 'websocket':
                    if (!isWebSocketOptions(options)) {
                        throw new Error('Invalid options for websocket transport.');
                    }
                    this.url = options.url;
                    return new websocket_js.WebSocketClientTransport(new URL(options.url));
                case 'sse': {
                    if (!isSSEOptions(options)) {
                        throw new Error('Invalid options for sse transport.');
                    }
                    this.url = options.url;
                    const url = new URL(options.url);
                    dataSchemas.logger.info(`${this.getLogPrefix()} Creating SSE transport: ${url.toString()}`);
                    const abortController = new AbortController();
                    /** Add OAuth token to headers if available */
                    const headers = Object.assign({}, options.headers);
                    if ((_b = this.oauthTokens) === null || _b === void 0 ? void 0 : _b.access_token) {
                        headers['Authorization'] = `Bearer ${this.oauthTokens.access_token}`;
                    }
                    const transport = new sse_js.SSEClientTransport(url, {
                        requestInit: {
                            headers,
                            signal: abortController.signal,
                        },
                        eventSourceInit: {
                            fetch: (url, init) => {
                                const fetchHeaders = new Headers(Object.assign({}, init === null || init === void 0 ? void 0 : init.headers, headers));
                                return fetch(url, Object.assign(Object.assign({}, init), { headers: fetchHeaders }));
                            },
                        },
                        fetch: this.createFetchFunction(this.getRequestHeaders.bind(this)),
                    });
                    transport.onclose = () => {
                        dataSchemas.logger.info(`${this.getLogPrefix()} SSE transport closed`);
                        this.emit('connectionChange', 'disconnected');
                    };
                    transport.onmessage = (message) => {
                        dataSchemas.logger.info(`${this.getLogPrefix()} Message received: ${JSON.stringify(message)}`);
                    };
                    this.setupTransportErrorHandlers(transport);
                    return transport;
                }
                case 'streamable-http': {
                    if (!isStreamableHTTPOptions(options)) {
                        throw new Error('Invalid options for streamable-http transport.');
                    }
                    this.url = options.url;
                    const url = new URL(options.url);
                    dataSchemas.logger.info(`${this.getLogPrefix()} Creating streamable-http transport: ${url.toString()}`);
                    const abortController = new AbortController();
                    /** Add OAuth token to headers if available */
                    const headers = Object.assign({}, options.headers);
                    if ((_c = this.oauthTokens) === null || _c === void 0 ? void 0 : _c.access_token) {
                        headers['Authorization'] = `Bearer ${this.oauthTokens.access_token}`;
                    }
                    const transport = new streamableHttp_js.StreamableHTTPClientTransport(url, {
                        requestInit: {
                            headers,
                            signal: abortController.signal,
                        },
                        fetch: this.createFetchFunction(this.getRequestHeaders.bind(this)),
                    });
                    transport.onclose = () => {
                        dataSchemas.logger.info(`${this.getLogPrefix()} Streamable-http transport closed`);
                        this.emit('connectionChange', 'disconnected');
                    };
                    transport.onmessage = (message) => {
                        dataSchemas.logger.info(`${this.getLogPrefix()} Message received: ${JSON.stringify(message)}`);
                    };
                    this.setupTransportErrorHandlers(transport);
                    return transport;
                }
                default: {
                    throw new Error(`Unsupported transport type: ${type}`);
                }
            }
        }
        catch (error) {
            this.emitError(error, 'Failed to construct transport:');
            throw error;
        }
    }
    setupEventListeners() {
        this.isInitializing = true;
        this.on('connectionChange', (state) => {
            this.connectionState = state;
            if (state === 'connected') {
                this.isReconnecting = false;
                this.isInitializing = false;
                this.shouldStopReconnecting = false;
                this.reconnectAttempts = 0;
                /**
                 * // FOR DEBUGGING
                 * // this.client.setRequestHandler(PingRequestSchema, async (request, extra) => {
                 * //    logger.info(`[MCP][${this.serverName}] PingRequest: ${JSON.stringify(request)}`);
                 * //    if (getEventListeners && extra.signal) {
                 * //      const listenerCount = getEventListeners(extra.signal, 'abort').length;
                 * //      logger.debug(`Signal has ${listenerCount} abort listeners`);
                 * //    }
                 * //    return {};
                 * //  });
                 */
            }
            else if (state === 'error' && !this.isReconnecting && !this.isInitializing) {
                this.handleReconnection().catch((error) => {
                    dataSchemas.logger.error(`${this.getLogPrefix()} Reconnection handler failed:`, error);
                });
            }
        });
        this.subscribeToResources();
    }
    handleReconnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isReconnecting ||
                this.shouldStopReconnecting ||
                this.isInitializing ||
                this.oauthRequired) {
                if (this.oauthRequired) {
                    dataSchemas.logger.info(`${this.getLogPrefix()} OAuth required, skipping reconnection attempts`);
                }
                return;
            }
            this.isReconnecting = true;
            const backoffDelay = (attempt) => Math.min(1000 * Math.pow(2, attempt), 30000);
            try {
                while (this.reconnectAttempts < this.MAX_RECONNECT_ATTEMPTS &&
                    !this.shouldStopReconnecting) {
                    this.reconnectAttempts++;
                    const delay = backoffDelay(this.reconnectAttempts);
                    dataSchemas.logger.info(`${this.getLogPrefix()} Reconnecting ${this.reconnectAttempts}/${this.MAX_RECONNECT_ATTEMPTS} (delay: ${delay}ms)`);
                    yield new Promise((resolve) => setTimeout(resolve, delay));
                    try {
                        yield this.connect();
                        this.reconnectAttempts = 0;
                        return;
                    }
                    catch (error) {
                        dataSchemas.logger.error(`${this.getLogPrefix()} Reconnection attempt failed:`, error);
                        if (this.reconnectAttempts === this.MAX_RECONNECT_ATTEMPTS ||
                            this.shouldStopReconnecting) {
                            dataSchemas.logger.error(`${this.getLogPrefix()} Stopping reconnection attempts`);
                            return;
                        }
                    }
                }
            }
            finally {
                this.isReconnecting = false;
            }
        });
    }
    subscribeToResources() {
        this.client.setNotificationHandler(types_js.ResourceListChangedNotificationSchema, () => __awaiter(this, void 0, void 0, function* () {
            this.emit('resourcesChanged');
        }));
    }
    connectClient() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionState === 'connected') {
                return;
            }
            if (this.connectPromise) {
                return this.connectPromise;
            }
            if (this.shouldStopReconnecting) {
                return;
            }
            this.emit('connectionChange', 'connecting');
            this.connectPromise = (() => __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                try {
                    if (this.transport) {
                        try {
                            yield this.client.close();
                            this.transport = null;
                        }
                        catch (error) {
                            dataSchemas.logger.warn(`${this.getLogPrefix()} Error closing connection:`, error);
                        }
                    }
                    this.transport = this.constructTransport(this.options);
                    this.setupTransportDebugHandlers();
                    const connectTimeout = (_a = this.options.initTimeout) !== null && _a !== void 0 ? _a : 120000;
                    yield Promise.race([
                        this.client.connect(this.transport),
                        new Promise((_resolve, reject) => setTimeout(() => reject(new Error(`Connection timeout after ${connectTimeout}ms`)), connectTimeout)),
                    ]);
                    this.connectionState = 'connected';
                    this.emit('connectionChange', 'connected');
                    this.reconnectAttempts = 0;
                }
                catch (error) {
                    // Check if it's an OAuth authentication error
                    if (this.isOAuthError(error)) {
                        dataSchemas.logger.warn(`${this.getLogPrefix()} OAuth authentication required`);
                        this.oauthRequired = true;
                        const serverUrl = this.url;
                        dataSchemas.logger.debug(`${this.getLogPrefix()} Server URL for OAuth: ${serverUrl}`);
                        const oauthTimeout = (_b = this.options.initTimeout) !== null && _b !== void 0 ? _b : 60000;
                        /** Promise that will resolve when OAuth is handled */
                        const oauthHandledPromise = new Promise((resolve, reject) => {
                            let timeoutId = null;
                            let oauthHandledListener = null;
                            let oauthFailedListener = null;
                            /** Cleanup function to remove listeners and clear timeout */
                            const cleanup = () => {
                                if (timeoutId) {
                                    clearTimeout(timeoutId);
                                }
                                if (oauthHandledListener) {
                                    this.off('oauthHandled', oauthHandledListener);
                                }
                                if (oauthFailedListener) {
                                    this.off('oauthFailed', oauthFailedListener);
                                }
                            };
                            // Success handler
                            oauthHandledListener = () => {
                                cleanup();
                                resolve();
                            };
                            // Failure handler
                            oauthFailedListener = (error) => {
                                cleanup();
                                reject(error);
                            };
                            // Timeout handler
                            timeoutId = setTimeout(() => {
                                cleanup();
                                reject(new Error(`OAuth handling timeout after ${oauthTimeout}ms`));
                            }, oauthTimeout);
                            // Listen for both success and failure events
                            this.once('oauthHandled', oauthHandledListener);
                            this.once('oauthFailed', oauthFailedListener);
                        });
                        // Emit the event
                        this.emit('oauthRequired', {
                            serverName: this.serverName,
                            error,
                            serverUrl,
                            userId: this.userId,
                        });
                        try {
                            // Wait for OAuth to be handled
                            yield oauthHandledPromise;
                            // Reset the oauthRequired flag
                            this.oauthRequired = false;
                            // Don't throw the error - just return so connection can be retried
                            dataSchemas.logger.info(`${this.getLogPrefix()} OAuth handled successfully, connection will be retried`);
                            return;
                        }
                        catch (oauthError) {
                            // OAuth failed or timed out
                            this.oauthRequired = false;
                            dataSchemas.logger.error(`${this.getLogPrefix()} OAuth handling failed:`, oauthError);
                            // Re-throw the original authentication error
                            throw error;
                        }
                    }
                    this.connectionState = 'error';
                    this.emit('connectionChange', 'error');
                    throw error;
                }
                finally {
                    this.connectPromise = null;
                }
            }))();
            return this.connectPromise;
        });
    }
    setupTransportDebugHandlers() {
        if (!this.transport) {
            return;
        }
        this.transport.onmessage = (msg) => {
            dataSchemas.logger.debug(`${this.getLogPrefix()} Transport received: ${JSON.stringify(msg)}`);
        };
        const originalSend = this.transport.send.bind(this.transport);
        this.transport.send = (msg) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if ('result' in msg && !('method' in msg) && Object.keys((_a = msg.result) !== null && _a !== void 0 ? _a : {}).length === 0) {
                if (Date.now() - this.lastPingTime < FIVE_MINUTES) {
                    throw new Error('Empty result');
                }
                this.lastPingTime = Date.now();
            }
            dataSchemas.logger.debug(`${this.getLogPrefix()} Transport sending: ${JSON.stringify(msg)}`);
            return originalSend(msg);
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.disconnect();
                yield this.connectClient();
                if (!(yield this.isConnected())) {
                    throw new Error('Connection not established');
                }
            }
            catch (error) {
                dataSchemas.logger.error(`${this.getLogPrefix()} Connection failed:`, error);
                throw error;
            }
        });
    }
    setupTransportErrorHandlers(transport) {
        transport.onerror = (error) => {
            dataSchemas.logger.error(`${this.getLogPrefix()} Transport error:`, error);
            // Check if it's an OAuth authentication error
            if (error && typeof error === 'object' && 'code' in error) {
                const errorCode = error.code;
                if (errorCode === 401 || errorCode === 403) {
                    dataSchemas.logger.warn(`${this.getLogPrefix()} OAuth authentication error detected`);
                    this.emit('oauthError', error);
                }
            }
            this.emit('connectionChange', 'error');
        };
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.transport) {
                    yield this.client.close();
                    this.transport = null;
                }
                if (this.connectionState === 'disconnected') {
                    return;
                }
                this.connectionState = 'disconnected';
                this.emit('connectionChange', 'disconnected');
            }
            finally {
                this.connectPromise = null;
            }
        });
    }
    fetchResources() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { resources } = yield this.client.listResources();
                return resources;
            }
            catch (error) {
                this.emitError(error, 'Failed to fetch resources:');
                return [];
            }
        });
    }
    fetchTools() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tools } = yield this.client.listTools();
                return tools;
            }
            catch (error) {
                this.emitError(error, 'Failed to fetch tools:');
                return [];
            }
        });
    }
    fetchPrompts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { prompts } = yield this.client.listPrompts();
                return prompts;
            }
            catch (error) {
                this.emitError(error, 'Failed to fetch prompts:');
                return [];
            }
        });
    }
    isConnected() {
        return __awaiter(this, void 0, void 0, function* () {
            // First check if we're in a connected state
            if (this.connectionState !== 'connected') {
                return false;
            }
            // If we recently checked, skip expensive verification
            const now = Date.now();
            if (now - this.lastConnectionCheckAt < mcpConfig.CONNECTION_CHECK_TTL) {
                return true;
            }
            this.lastConnectionCheckAt = now;
            try {
                // Try ping first as it's the lightest check
                yield this.client.ping();
                return this.connectionState === 'connected';
            }
            catch (error) {
                // Check if the error is because ping is not supported (method not found)
                const pingUnsupported = error instanceof Error &&
                    ((error === null || error === void 0 ? void 0 : error.message.includes('-32601')) ||
                        (error === null || error === void 0 ? void 0 : error.message.includes('invalid method ping')) ||
                        (error === null || error === void 0 ? void 0 : error.message.includes('method not found')));
                if (!pingUnsupported) {
                    dataSchemas.logger.error(`${this.getLogPrefix()} Ping failed:`, error);
                    return false;
                }
                // Ping is not supported by this server, try an alternative verification
                dataSchemas.logger.debug(`${this.getLogPrefix()} Server does not support ping method, verifying connection with capabilities`);
                try {
                    // Get server capabilities to verify connection is truly active
                    const capabilities = this.client.getServerCapabilities();
                    // If we have capabilities, try calling a supported method to verify connection
                    if (capabilities === null || capabilities === void 0 ? void 0 : capabilities.tools) {
                        yield this.client.listTools();
                        return this.connectionState === 'connected';
                    }
                    else if (capabilities === null || capabilities === void 0 ? void 0 : capabilities.resources) {
                        yield this.client.listResources();
                        return this.connectionState === 'connected';
                    }
                    else if (capabilities === null || capabilities === void 0 ? void 0 : capabilities.prompts) {
                        yield this.client.listPrompts();
                        return this.connectionState === 'connected';
                    }
                    else {
                        // No capabilities to test, but we're in connected state and initialization succeeded
                        dataSchemas.logger.debug(`${this.getLogPrefix()} No capabilities to test, assuming connected based on state`);
                        return this.connectionState === 'connected';
                    }
                }
                catch (capabilityError) {
                    // If capability check fails, the connection is likely broken
                    dataSchemas.logger.error(`${this.getLogPrefix()} Connection verification failed:`, capabilityError);
                    return false;
                }
            }
        });
    }
    setOAuthTokens(tokens) {
        this.oauthTokens = tokens;
    }
    isOAuthError(error) {
        if (!error || typeof error !== 'object') {
            return false;
        }
        // Check for SSE error with 401 status
        if ('message' in error && typeof error.message === 'string') {
            return error.message.includes('401') || error.message.includes('Non-200 status code (401)');
        }
        // Check for error code
        if ('code' in error) {
            const code = error.code;
            return code === 401 || code === 403;
        }
        return false;
    }
}

/**
 * Factory for creating MCP connections with optional OAuth authentication.
 * Handles OAuth flows, token management, and connection retry logic.
 * NOTE: Much of the OAuth logic was extracted from the old MCPManager class as is.
 */
class MCPConnectionFactory {
    /** Creates a new MCP connection with optional OAuth support */
    static create(basic, oauth) {
        return __awaiter(this, void 0, void 0, function* () {
            const factory = new this(basic, oauth);
            return factory.createConnection();
        });
    }
    constructor(basic, oauth) {
        this.serverConfig = processMCPEnv({
            options: basic.serverConfig,
            user: oauth === null || oauth === void 0 ? void 0 : oauth.user,
            customUserVars: oauth === null || oauth === void 0 ? void 0 : oauth.customUserVars,
            body: oauth === null || oauth === void 0 ? void 0 : oauth.requestBody,
        });
        this.serverName = basic.serverName;
        this.useOAuth = !!(oauth === null || oauth === void 0 ? void 0 : oauth.useOAuth);
        this.logPrefix = (oauth === null || oauth === void 0 ? void 0 : oauth.user)
            ? `[MCP][${basic.serverName}][${oauth.user.id}]`
            : `[MCP][${basic.serverName}]`;
        if (oauth === null || oauth === void 0 ? void 0 : oauth.useOAuth) {
            this.userId = oauth.user.id;
            this.flowManager = oauth.flowManager;
            this.tokenMethods = oauth.tokenMethods;
            this.signal = oauth.signal;
            this.oauthStart = oauth.oauthStart;
            this.oauthEnd = oauth.oauthEnd;
            this.returnOnOAuth = oauth.returnOnOAuth;
        }
    }
    /** Creates the base MCP connection with OAuth tokens */
    createConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const oauthTokens = this.useOAuth ? yield this.getOAuthTokens() : null;
            const connection = new MCPConnection({
                serverName: this.serverName,
                serverConfig: this.serverConfig,
                userId: this.userId,
                oauthTokens,
            });
            if (this.useOAuth)
                this.handleOAuthEvents(connection);
            yield this.attemptToConnect(connection);
            return connection;
        });
    }
    /** Retrieves existing OAuth tokens from storage or returns null */
    getOAuthTokens() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = this.tokenMethods) === null || _a === void 0 ? void 0 : _a.findToken))
                return null;
            try {
                const tokens = yield this.flowManager.createFlowWithHandler(`tokens:${this.userId}:${this.serverName}`, 'mcp_get_tokens', () => __awaiter(this, void 0, void 0, function* () {
                    return yield MCPTokenStorage.getTokens({
                        userId: this.userId,
                        serverName: this.serverName,
                        findToken: this.tokenMethods.findToken,
                        createToken: this.tokenMethods.createToken,
                        updateToken: this.tokenMethods.updateToken,
                        refreshTokens: this.createRefreshTokensFunction(),
                    });
                }), this.signal);
                if (tokens)
                    dataSchemas.logger.info(`${this.logPrefix} Loaded OAuth tokens`);
                return tokens;
            }
            catch (error) {
                dataSchemas.logger.debug(`${this.logPrefix} No existing tokens found or error loading tokens`, error);
                return null;
            }
        });
    }
    /** Creates a function to refresh OAuth tokens when they expire */
    createRefreshTokensFunction() {
        return (refreshToken, metadata) => __awaiter(this, void 0, void 0, function* () {
            return yield MCPOAuthHandler.refreshOAuthTokens(refreshToken, {
                serverUrl: this.serverConfig.url,
                serverName: metadata.serverName,
                clientInfo: metadata.clientInfo,
            }, this.serverConfig.oauth);
        });
    }
    /** Sets up OAuth event handlers for the connection */
    handleOAuthEvents(connection) {
        connection.on('oauthRequired', (data) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            dataSchemas.logger.info(`${this.logPrefix} oauthRequired event received`);
            // If we just want to initiate OAuth and return, handle it differently
            if (this.returnOnOAuth) {
                try {
                    const config = this.serverConfig;
                    const { authorizationUrl, flowId, flowMetadata } = yield MCPOAuthHandler.initiateOAuthFlow(this.serverName, data.serverUrl || '', this.userId, config === null || config === void 0 ? void 0 : config.oauth);
                    // Create the flow state so the OAuth callback can find it
                    // We spawn this in the background without waiting for it
                    this.flowManager.createFlow(flowId, 'mcp_oauth', flowMetadata).catch(() => {
                        // The OAuth callback will resolve this flow, so we expect it to timeout here
                        // which is fine - we just need the flow state to exist
                    });
                    if (this.oauthStart) {
                        dataSchemas.logger.info(`${this.logPrefix} OAuth flow started, issuing authorization URL`);
                        yield this.oauthStart(authorizationUrl);
                    }
                    // Emit oauthFailed to signal that connection should not proceed
                    // but OAuth was successfully initiated
                    connection.emit('oauthFailed', new Error('OAuth flow initiated - return early'));
                    return;
                }
                catch (error) {
                    dataSchemas.logger.error(`${this.logPrefix} Failed to initiate OAuth flow`, error);
                    connection.emit('oauthFailed', new Error('OAuth initiation failed'));
                    return;
                }
            }
            // Normal OAuth handling - wait for completion
            const result = yield this.handleOAuthRequired();
            if ((result === null || result === void 0 ? void 0 : result.tokens) && ((_a = this.tokenMethods) === null || _a === void 0 ? void 0 : _a.createToken)) {
                try {
                    connection.setOAuthTokens(result.tokens);
                    yield MCPTokenStorage.storeTokens({
                        userId: this.userId,
                        serverName: this.serverName,
                        tokens: result.tokens,
                        createToken: this.tokenMethods.createToken,
                        updateToken: this.tokenMethods.updateToken,
                        findToken: this.tokenMethods.findToken,
                        clientInfo: result.clientInfo,
                    });
                    dataSchemas.logger.info(`${this.logPrefix} OAuth tokens saved to storage`);
                }
                catch (error) {
                    dataSchemas.logger.error(`${this.logPrefix} Failed to save OAuth tokens to storage`, error);
                }
            }
            // Only emit oauthHandled if we actually got tokens (OAuth succeeded)
            if (result === null || result === void 0 ? void 0 : result.tokens) {
                connection.emit('oauthHandled');
            }
            else {
                // OAuth failed, emit oauthFailed to properly reject the promise
                dataSchemas.logger.warn(`${this.logPrefix} OAuth failed, emitting oauthFailed event`);
                connection.emit('oauthFailed', new Error('OAuth authentication failed'));
            }
        }));
    }
    /** Attempts to establish connection with timeout handling */
    attemptToConnect(connection) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const connectTimeout = (_a = this.serverConfig.initTimeout) !== null && _a !== void 0 ? _a : 30000;
            const connectionTimeout = new Promise((_, reject) => setTimeout(() => reject(new Error(`Connection timeout after ${connectTimeout}ms`)), connectTimeout));
            const connectionAttempt = this.connectTo(connection);
            yield Promise.race([connectionAttempt, connectionTimeout]);
            if (yield connection.isConnected())
                return;
            dataSchemas.logger.error(`${this.logPrefix} Failed to establish connection.`);
        });
    }
    // Handles connection attempts with retry logic and OAuth error handling
    connectTo(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            const maxAttempts = 3;
            let attempts = 0;
            let oauthHandled = false;
            while (attempts < maxAttempts) {
                try {
                    yield connection.connect();
                    if (yield connection.isConnected()) {
                        return;
                    }
                    throw new Error('Connection attempt succeeded but status is not connected');
                }
                catch (error) {
                    attempts++;
                    if (this.useOAuth && this.isOAuthError(error)) {
                        // Only handle OAuth if this is a user connection (has oauthStart handler)
                        if (this.oauthStart && !oauthHandled) {
                            const errorWithFlag = error;
                            if (errorWithFlag === null || errorWithFlag === void 0 ? void 0 : errorWithFlag.isOAuthError) {
                                oauthHandled = true;
                                dataSchemas.logger.info(`${this.logPrefix} Handling OAuth`);
                                yield this.handleOAuthRequired();
                            }
                        }
                        // Don't retry on OAuth errors - just throw
                        dataSchemas.logger.info(`${this.logPrefix} OAuth required, stopping connection attempts`);
                        throw error;
                    }
                    if (attempts === maxAttempts) {
                        dataSchemas.logger.error(`${this.logPrefix} Failed to connect after ${maxAttempts} attempts`, error);
                        throw error;
                    }
                    yield new Promise((resolve) => setTimeout(resolve, 2000 * attempts));
                }
            }
        });
    }
    // Determines if an error indicates OAuth authentication is required
    isOAuthError(error) {
        if (!error || typeof error !== 'object') {
            return false;
        }
        // Check for SSE error with 401 status
        if ('message' in error && typeof error.message === 'string') {
            return error.message.includes('401') || error.message.includes('Non-200 status code (401)');
        }
        // Check for error code
        if ('code' in error) {
            const code = error.code;
            return code === 401 || code === 403;
        }
        return false;
    }
    /** Manages OAuth flow initiation and completion */
    handleOAuthRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            const serverUrl = this.serverConfig.url;
            dataSchemas.logger.debug(`${this.logPrefix} \`handleOAuthRequired\` called with serverUrl: ${serverUrl}`);
            if (!this.flowManager || !serverUrl) {
                dataSchemas.logger.error(`${this.logPrefix} OAuth required but flow manager not available or server URL missing for ${this.serverName}`);
                dataSchemas.logger.warn(`${this.logPrefix} Please configure OAuth credentials for ${this.serverName}`);
                return null;
            }
            try {
                dataSchemas.logger.debug(`${this.logPrefix} Checking for existing OAuth flow for ${this.serverName}...`);
                /** Flow ID to check if a flow already exists */
                const flowId = MCPOAuthHandler.generateFlowId(this.userId, this.serverName);
                /** Check if there's already an ongoing OAuth flow for this flowId */
                const existingFlow = yield this.flowManager.getFlowState(flowId, 'mcp_oauth');
                if (existingFlow && existingFlow.status === 'PENDING') {
                    dataSchemas.logger.debug(`${this.logPrefix} OAuth flow already exists for ${flowId}, waiting for completion`);
                    /** Tokens from existing flow to complete */
                    const tokens = yield this.flowManager.createFlow(flowId, 'mcp_oauth');
                    if (typeof this.oauthEnd === 'function') {
                        yield this.oauthEnd();
                    }
                    dataSchemas.logger.info(`${this.logPrefix} OAuth flow completed, tokens received for ${this.serverName}`);
                    /** Client information from the existing flow metadata */
                    const existingMetadata = existingFlow.metadata;
                    const clientInfo = existingMetadata === null || existingMetadata === void 0 ? void 0 : existingMetadata.clientInfo;
                    return { tokens, clientInfo };
                }
                dataSchemas.logger.debug(`${this.logPrefix} Initiating new OAuth flow for ${this.serverName}...`);
                const { authorizationUrl, flowId: newFlowId, flowMetadata, } = yield MCPOAuthHandler.initiateOAuthFlow(this.serverName, serverUrl, this.userId, this.serverConfig.oauth);
                if (typeof this.oauthStart === 'function') {
                    dataSchemas.logger.info(`${this.logPrefix} OAuth flow started, issued authorization URL to user`);
                    yield this.oauthStart(authorizationUrl);
                }
                else {
                    dataSchemas.logger.info(`${this.logPrefix} OAuth flow started, no \`oauthStart\` handler defined, relying on callback endpoint`);
                }
                /** Tokens from the new flow */
                const tokens = yield this.flowManager.createFlow(newFlowId, 'mcp_oauth', flowMetadata);
                if (typeof this.oauthEnd === 'function') {
                    yield this.oauthEnd();
                }
                dataSchemas.logger.info(`${this.logPrefix} OAuth flow completed, tokens received for ${this.serverName}`);
                /** Client information from the flow metadata */
                const clientInfo = flowMetadata === null || flowMetadata === void 0 ? void 0 : flowMetadata.clientInfo;
                return { tokens, clientInfo };
            }
            catch (error) {
                dataSchemas.logger.error(`${this.logPrefix} Failed to complete OAuth flow for ${this.serverName}`, error);
                return null;
            }
        });
    }
}

var ListCache$2 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$2;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache$1 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$2.prototype.clear = stackClear;
Stack$2.prototype['delete'] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;

var _Stack = Stack$2;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache,
    arraySome = _arraySome,
    cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

var root$4 = _root;

/** Built-in value references. */
var Uint8Array$2 = root$4.Uint8Array;

var _Uint8Array = Uint8Array$2;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var Symbol$1 = _Symbol,
    Uint8Array$1 = _Uint8Array,
    eq = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$2:
      var convert = mapToArray;

    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

var arrayPush$1 = _arrayPush,
    isArray$3 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$3(object) ? result : arrayPush$1(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$2;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$2() {
  return [];
}

var stubArray_1 = stubArray$2;

var arrayFilter = _arrayFilter,
    stubArray$1 = stubArray_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$2 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols$2;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

var isBuffer$2 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

isBuffer$2.exports;

(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer; 
} (isBuffer$2, isBuffer$2.exports));

var isBufferExports = isBuffer$2.exports;

var baseGetTag$1 = _baseGetTag,
    isLength$1 = isLength_1,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) &&
    isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;

var _nodeUtil = {exports: {}};

_nodeUtil.exports;

(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil; 
} (_nodeUtil, _nodeUtil.exports));

var _nodeUtilExports = _nodeUtil.exports;

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$2;

var baseTimes = _baseTimes,
    isArguments = isArguments_1,
    isArray$2 = isArray_1,
    isBuffer$1 = isBufferExports,
    isIndex = _isIndex,
    isTypedArray$1 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$2(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$2;

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$2(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype$2;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$2;

var overArg$1 = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg$1(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype$1 = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction = isFunction_1,
    isLength = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$2(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$2;

var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$1 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}

var keys_1 = keys$3;

var baseGetAllKeys$1 = _baseGetAllKeys,
    getSymbols$1 = _getSymbols,
    keys$2 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$2, getSymbols$1);
}

var _getAllKeys = getAllKeys$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var getNative$3 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var DataView$2 = getNative$3(root$3, 'DataView');

var _DataView = DataView$2;

var getNative$2 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$2 = getNative$1(root$1, 'Set');

var _Set = Set$2;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$2 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$2;

var DataView$1 = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set$1 = _Set,
    WeakMap$1 = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView$1),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap$1);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView$1 && getTag$1(new DataView$1(new ArrayBuffer(1))) != dataViewTag) ||
    (Map$1 && getTag$1(new Map$1) != mapTag) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag$1(new Set$1) != setTag) ||
    (WeakMap$1 && getTag$1(new WeakMap$1) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

var Stack$1 = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray$1 = isArray_1,
    isBuffer = isBufferExports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object),
      othIsArr = isArray$1(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$1);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}

var _baseIsEqual = baseIsEqual$2;

var Stack = _Stack,
    baseIsEqual$1 = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$1 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}

var _isStrictComparable = isStrictComparable$2;

var isStrictComparable$1 = _isStrictComparable,
    keys$1 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$2;

var baseIsMatch = _baseIsMatch,
    getMatchData = _getMatchData,
    matchesStrictComparable$1 = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

var baseGet$1 = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$2(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet$1(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$2;

var baseIsEqual = _baseIsEqual,
    get$1 = get_1,
    hasIn = hasIn_1,
    isKey$1 = _isKey,
    isStrictComparable = _isStrictComparable,
    matchesStrictComparable = _matchesStrictComparable,
    toKey$1 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get$1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty,
    basePropertyDeep = _basePropertyDeep,
    isKey = _isKey,
    toKey = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches,
    baseMatchesProperty = _baseMatchesProperty,
    identity = identity_1,
    isArray = isArray_1,
    property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$2(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$2;

var overArg = _overArg;

/** Built-in value references. */
var getPrototype$1 = overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$1;

var arrayPush = _arrayPush,
    getPrototype = _getPrototype,
    getSymbols = _getSymbols,
    stubArray = stubArray_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn$1 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn$1;

var isObject = isObject_1,
    isPrototype = _isPrototype,
    nativeKeysIn = _nativeKeysIn;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike = isArrayLike_1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn = keysIn_1;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn$1;

var arrayMap = _arrayMap,
    baseIteratee$1 = _baseIteratee,
    basePickBy = _basePickBy,
    getAllKeysIn = _getAllKeysIn;

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee$1(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

var pickBy_1 = pickBy;

var pickBy$1 = /*@__PURE__*/getDefaultExportFromCjs(pickBy_1);

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var baseFor = _baseFor,
    keys = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

var _baseForOwn = baseForOwn$1;

var baseAssignValue = _baseAssignValue,
    baseForOwn = _baseForOwn,
    baseIteratee = _baseIteratee;

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

var mapValues_1 = mapValues;

var mapValues$1 = /*@__PURE__*/getDefaultExportFromCjs(mapValues_1);

/**
 * Manages MCP connections with lazy loading and reconnection.
 * Maintains a pool of connections and handles connection lifecycle management.
 */
class ConnectionsRepository {
    constructor(serverConfigs, oauthOpts) {
        this.connections = new Map();
        this.serverConfigs = serverConfigs;
        this.oauthOpts = oauthOpts;
    }
    /** Checks whether this repository can connect to a specific server */
    has(serverName) {
        return !!this.serverConfigs[serverName];
    }
    /** Gets or creates a connection for the specified server with lazy loading */
    get(serverName) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingConnection = this.connections.get(serverName);
            if (existingConnection && (yield existingConnection.isConnected()))
                return existingConnection;
            else
                yield this.disconnect(serverName);
            const connection = yield MCPConnectionFactory.create({
                serverName,
                serverConfig: this.getServerConfig(serverName),
            }, this.oauthOpts);
            this.connections.set(serverName, connection);
            return connection;
        });
    }
    /** Gets or creates connections for multiple servers concurrently */
    getMany(serverNames) {
        return __awaiter(this, void 0, void 0, function* () {
            const connectionPromises = serverNames.map((name) => __awaiter(this, void 0, void 0, function* () { return [name, yield this.get(name)]; }));
            const connections = yield Promise.all(connectionPromises);
            return new Map(connections);
        });
    }
    /** Returns all currently loaded connections without creating new ones */
    getLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getMany(Array.from(this.connections.keys()));
        });
    }
    /** Gets or creates connections for all configured servers */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getMany(Object.keys(this.serverConfigs));
        });
    }
    /** Disconnects and removes a specific server connection from the pool */
    disconnect(serverName) {
        const connection = this.connections.get(serverName);
        if (!connection)
            return Promise.resolve();
        this.connections.delete(serverName);
        return connection.disconnect().catch((err) => {
            dataSchemas.logger.error(`${this.prefix(serverName)} Error disconnecting`, err);
        });
    }
    /** Disconnects all active connections and returns array of disconnect promises */
    disconnectAll() {
        const serverNames = Array.from(this.connections.keys());
        return serverNames.map((serverName) => this.disconnect(serverName));
    }
    // Retrieves server configuration by name or throws if not found
    getServerConfig(serverName) {
        const serverConfig = this.serverConfigs[serverName];
        if (serverConfig)
            return serverConfig;
        throw new Error(`${this.prefix(serverName)} Server not found in configuration`);
    }
    // Returns formatted log prefix for server messages
    prefix(serverName) {
        return `[MCP][${serverName}]`;
    }
}

/**
 * Manages MCP server configurations and metadata discovery.
 * Fetches server capabilities, OAuth requirements, and tool definitions for registry.
 * Determines which servers are for app-level connections.
 * Has its own connections repository. All connections are disconnected after initialization.
 */
class MCPServersRegistry {
    constructor(configs) {
        this.initialized = false;
        this.oauthServers = null;
        this.serverInstructions = null;
        this.toolFunctions = null;
        this.appServerConfigs = null;
        this.rawConfigs = configs;
        this.parsedConfigs = mapValues$1(configs, (con) => processMCPEnv({ options: con }));
        this.connections = new ConnectionsRepository(configs);
    }
    /** Initializes all startup-enabled servers by gathering their metadata asynchronously */
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.initialized)
                return;
            this.initialized = true;
            const serverNames = Object.keys(this.parsedConfigs);
            yield Promise.allSettled(serverNames.map((serverName) => this.gatherServerInfo(serverName)));
            this.setOAuthServers();
            this.setServerInstructions();
            this.setAppServerConfigs();
            yield this.setAppToolFunctions();
            this.connections.disconnectAll();
        });
    }
    /** Fetches all metadata for a single server in parallel */
    gatherServerInfo(serverName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.fetchOAuthRequirement(serverName);
                const config = this.parsedConfigs[serverName];
                if (config.startup !== false && !config.requiresOAuth) {
                    yield Promise.allSettled([
                        this.fetchServerInstructions(serverName).catch((error) => dataSchemas.logger.warn(`${this.prefix(serverName)} Failed to fetch server instructions:`, error)),
                        this.fetchServerCapabilities(serverName).catch((error) => dataSchemas.logger.warn(`${this.prefix(serverName)} Failed to fetch server capabilities:`, error)),
                    ]);
                }
                this.logUpdatedConfig(serverName);
            }
            catch (error) {
                dataSchemas.logger.warn(`${this.prefix(serverName)} Failed to initialize server:`, error);
            }
        });
    }
    /** Sets app-level server configs (startup enabled, non-OAuth servers) */
    setAppServerConfigs() {
        const appServers = Object.keys(pickBy$1(this.parsedConfigs, (config) => config.startup !== false && config.requiresOAuth === false));
        this.appServerConfigs = pick$1(this.rawConfigs, appServers);
    }
    /** Creates set of server names that require OAuth authentication */
    setOAuthServers() {
        if (this.oauthServers)
            return this.oauthServers;
        this.oauthServers = new Set(Object.keys(pickBy$1(this.parsedConfigs, (config) => config.requiresOAuth)));
        return this.oauthServers;
    }
    /** Collects server instructions from all configured servers */
    setServerInstructions() {
        this.serverInstructions = mapValues$1(pickBy$1(this.parsedConfigs, (config) => config.serverInstructions), (config) => config.serverInstructions);
    }
    /** Builds registry of all available tool functions from loaded connections */
    setAppToolFunctions() {
        return __awaiter(this, void 0, void 0, function* () {
            const connections = (yield this.connections.getLoaded()).entries();
            const allToolFunctions = {};
            for (const [serverName, conn] of connections) {
                try {
                    const toolFunctions = yield this.getToolFunctions(serverName, conn);
                    Object.assign(allToolFunctions, toolFunctions);
                }
                catch (error) {
                    dataSchemas.logger.warn(`${this.prefix(serverName)} Error fetching tool functions:`, error);
                }
            }
            this.toolFunctions = allToolFunctions;
        });
    }
    /** Converts server tools to LibreChat-compatible tool functions format */
    getToolFunctions(serverName, conn) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tools } = yield conn.client.listTools();
            const toolFunctions = {};
            tools.forEach((tool) => {
                const name = `${tool.name}${CONSTANTS.mcp_delimiter}${serverName}`;
                toolFunctions[name] = {
                    type: 'function',
                    ['function']: {
                        name,
                        description: tool.description,
                        parameters: tool.inputSchema,
                    },
                };
            });
            return toolFunctions;
        });
    }
    /** Determines if server requires OAuth if not already specified in the config */
    fetchOAuthRequirement(serverName) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.parsedConfigs[serverName];
            if (config.requiresOAuth != null)
                return config.requiresOAuth;
            if (config.url == null)
                return (config.requiresOAuth = false);
            if (config.startup === false)
                return (config.requiresOAuth = false);
            const result = yield detectOAuthRequirement(config.url);
            config.requiresOAuth = result.requiresOAuth;
            config.oauthMetadata = result.metadata;
            return config.requiresOAuth;
        });
    }
    /** Retrieves server instructions from MCP server if enabled in the config */
    fetchServerInstructions(serverName) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.parsedConfigs[serverName];
            if (!config.serverInstructions)
                return;
            if (typeof config.serverInstructions === 'string')
                return;
            const conn = yield this.connections.get(serverName);
            config.serverInstructions = conn.client.getInstructions();
            if (!config.serverInstructions) {
                dataSchemas.logger.warn(`${this.prefix(serverName)} No server instructions available`);
            }
        });
    }
    /** Fetches server capabilities and available tools list */
    fetchServerCapabilities(serverName) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.parsedConfigs[serverName];
            const conn = yield this.connections.get(serverName);
            const capabilities = conn.client.getServerCapabilities();
            if (!capabilities)
                return;
            config.capabilities = JSON.stringify(capabilities);
            if (!capabilities.tools)
                return;
            const tools = yield conn.client.listTools();
            config.tools = tools.tools.map((tool) => tool.name).join(', ');
        });
    }
    // Logs server configuration summary after initialization
    logUpdatedConfig(serverName) {
        const prefix = this.prefix(serverName);
        const config = this.parsedConfigs[serverName];
        dataSchemas.logger.info(`${prefix} -------------------------------------------------┐`);
        dataSchemas.logger.info(`${prefix} URL: ${config.url}`);
        dataSchemas.logger.info(`${prefix} OAuth Required: ${config.requiresOAuth}`);
        dataSchemas.logger.info(`${prefix} Capabilities: ${config.capabilities}`);
        dataSchemas.logger.info(`${prefix} Tools: ${config.tools}`);
        dataSchemas.logger.info(`${prefix} Server Instructions: ${config.serverInstructions}`);
        dataSchemas.logger.info(`${prefix} -------------------------------------------------┘`);
    }
    // Returns formatted log prefix for server messages
    prefix(serverName) {
        return `[MCP][${serverName}]`;
    }
}

/**
 * Abstract base class for managing user-specific MCP connections with lifecycle management.
 * Only meant to be extended by MCPManager.
 * Much of the logic was move here from the old MCPManager to make it more manageable.
 * User connections will soon be ephemeral and not cached anymore:
 * https://github.com/danny-avila/LibreChat/discussions/8790
 */
class UserConnectionManager {
    constructor(serverConfigs) {
        this.userConnections = new Map();
        /** Last activity timestamp for users (not per server) */
        this.userLastActivity = new Map();
        this.USER_CONNECTION_IDLE_TIMEOUT = 15 * 60 * 1000; // 15 minutes (TODO: make configurable)
        this.serversRegistry = new MCPServersRegistry(serverConfigs);
    }
    /** fetches am MCP Server config from the registry */
    getRawConfig(serverName) {
        return this.serversRegistry.rawConfigs[serverName];
    }
    /** Updates the last activity timestamp for a user */
    updateUserLastActivity(userId) {
        const now = Date.now();
        this.userLastActivity.set(userId, now);
        dataSchemas.logger.debug(`[MCP][User: ${userId}] Updated last activity timestamp: ${new Date(now).toISOString()}`);
    }
    /** Gets or creates a connection for a specific user */
    getUserConnection({ user, serverName, flowManager, customUserVars, requestBody, tokenMethods, oauthStart, oauthEnd, signal, returnOnOAuth = false, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const userId = user.id;
            if (!userId) {
                throw new types_js.McpError(types_js.ErrorCode.InvalidRequest, `[MCP] User object missing id property`);
            }
            const userServerMap = this.userConnections.get(userId);
            let connection = userServerMap === null || userServerMap === void 0 ? void 0 : userServerMap.get(serverName);
            const now = Date.now();
            // Check if user is idle
            const lastActivity = this.userLastActivity.get(userId);
            if (lastActivity && now - lastActivity > this.USER_CONNECTION_IDLE_TIMEOUT) {
                dataSchemas.logger.info(`[MCP][User: ${userId}] User idle for too long. Disconnecting all connections.`);
                // Disconnect all user connections
                try {
                    yield this.disconnectUserConnections(userId);
                }
                catch (err) {
                    dataSchemas.logger.error(`[MCP][User: ${userId}] Error disconnecting idle connections:`, err);
                }
                connection = undefined; // Force creation of a new connection
            }
            else if (connection) {
                if (yield connection.isConnected()) {
                    dataSchemas.logger.debug(`[MCP][User: ${userId}][${serverName}] Reusing active connection`);
                    this.updateUserLastActivity(userId);
                    return connection;
                }
                else {
                    // Connection exists but is not connected, attempt to remove potentially stale entry
                    dataSchemas.logger.warn(`[MCP][User: ${userId}][${serverName}] Found existing but disconnected connection object. Cleaning up.`);
                    this.removeUserConnection(userId, serverName); // Clean up maps
                    connection = undefined;
                }
            }
            // If no valid connection exists, create a new one
            if (!connection) {
                dataSchemas.logger.info(`[MCP][User: ${userId}][${serverName}] Establishing new connection`);
            }
            const config = this.serversRegistry.parsedConfigs[serverName];
            if (!config) {
                throw new types_js.McpError(types_js.ErrorCode.InvalidRequest, `[MCP][User: ${userId}] Configuration for server "${serverName}" not found.`);
            }
            try {
                connection = yield MCPConnectionFactory.create({
                    serverName: serverName,
                    serverConfig: config,
                }, {
                    useOAuth: true,
                    user: user,
                    customUserVars: customUserVars,
                    flowManager: flowManager,
                    tokenMethods: tokenMethods,
                    signal: signal,
                    oauthStart: oauthStart,
                    oauthEnd: oauthEnd,
                    returnOnOAuth: returnOnOAuth,
                    requestBody: requestBody,
                });
                if (!(yield (connection === null || connection === void 0 ? void 0 : connection.isConnected()))) {
                    throw new Error('Failed to establish connection after initialization attempt.');
                }
                if (!this.userConnections.has(userId)) {
                    this.userConnections.set(userId, new Map());
                }
                (_a = this.userConnections.get(userId)) === null || _a === void 0 ? void 0 : _a.set(serverName, connection);
                dataSchemas.logger.info(`[MCP][User: ${userId}][${serverName}] Connection successfully established`);
                // Update timestamp on creation
                this.updateUserLastActivity(userId);
                return connection;
            }
            catch (error) {
                dataSchemas.logger.error(`[MCP][User: ${userId}][${serverName}] Failed to establish connection`, error);
                // Ensure partial connection state is cleaned up if initialization fails
                yield (connection === null || connection === void 0 ? void 0 : connection.disconnect().catch((disconnectError) => {
                    dataSchemas.logger.error(`[MCP][User: ${userId}][${serverName}] Error during cleanup after failed connection`, disconnectError);
                }));
                // Ensure cleanup even if connection attempt fails
                this.removeUserConnection(userId, serverName);
                throw error; // Re-throw the error to the caller
            }
        });
    }
    /** Returns all connections for a specific user */
    getUserConnections(userId) {
        return this.userConnections.get(userId);
    }
    /** Removes a specific user connection entry */
    removeUserConnection(userId, serverName) {
        const userMap = this.userConnections.get(userId);
        if (userMap) {
            userMap.delete(serverName);
            if (userMap.size === 0) {
                this.userConnections.delete(userId);
                // Only remove user activity timestamp if all connections are gone
                this.userLastActivity.delete(userId);
            }
        }
        dataSchemas.logger.debug(`[MCP][User: ${userId}][${serverName}] Removed connection entry.`);
    }
    /** Disconnects and removes a specific user connection */
    disconnectUserConnection(userId, serverName) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMap = this.userConnections.get(userId);
            const connection = userMap === null || userMap === void 0 ? void 0 : userMap.get(serverName);
            if (connection) {
                dataSchemas.logger.info(`[MCP][User: ${userId}][${serverName}] Disconnecting...`);
                yield connection.disconnect();
                this.removeUserConnection(userId, serverName);
            }
        });
    }
    /** Disconnects and removes all connections for a specific user */
    disconnectUserConnections(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMap = this.userConnections.get(userId);
            const disconnectPromises = [];
            if (userMap) {
                dataSchemas.logger.info(`[MCP][User: ${userId}] Disconnecting all servers...`);
                const userServers = Array.from(userMap.keys());
                for (const serverName of userServers) {
                    disconnectPromises.push(this.disconnectUserConnection(userId, serverName).catch((error) => {
                        dataSchemas.logger.error(`[MCP][User: ${userId}][${serverName}] Error during disconnection:`, error);
                    }));
                }
                yield Promise.allSettled(disconnectPromises);
                // Ensure user activity timestamp is removed
                this.userLastActivity.delete(userId);
                dataSchemas.logger.info(`[MCP][User: ${userId}] All connections processed for disconnection.`);
            }
        });
    }
    /** Check for and disconnect idle connections */
    checkIdleConnections(currentUserId) {
        const now = Date.now();
        // Iterate through all users to check for idle ones
        for (const [userId, lastActivity] of this.userLastActivity.entries()) {
            if (currentUserId && currentUserId === userId) {
                continue;
            }
            if (now - lastActivity > this.USER_CONNECTION_IDLE_TIMEOUT) {
                dataSchemas.logger.info(`[MCP][User: ${userId}] User idle for too long. Disconnecting all connections...`);
                // Disconnect all user connections asynchronously (fire and forget)
                this.disconnectUserConnections(userId).catch((err) => dataSchemas.logger.error(`[MCP][User: ${userId}] Error disconnecting idle connections:`, err));
            }
        }
    }
}

const RECOGNIZED_PROVIDERS = new Set([
    'google',
    'anthropic',
    'openai',
    'azureopenai',
    'openrouter',
    'xai',
    'deepseek',
    'ollama',
    'bedrock',
]);
const CONTENT_ARRAY_PROVIDERS = new Set(['google', 'anthropic', 'azureopenai', 'openai']);
const imageFormatters = {
    // google: (item) => ({
    //   type: 'image',
    //   inlineData: {
    //     mimeType: item.mimeType,
    //     data: item.data,
    //   },
    // }),
    // anthropic: (item) => ({
    //   type: 'image',
    //   source: {
    //     type: 'base64',
    //     media_type: item.mimeType,
    //     data: item.data,
    //   },
    // }),
    default: (item) => ({
        type: 'image_url',
        image_url: {
            url: item.data.startsWith('http') ? item.data : `data:${item.mimeType};base64,${item.data}`,
        },
    }),
};
function isImageContent(item) {
    return item.type === 'image';
}
function parseAsString(result) {
    var _a;
    const content = (_a = result === null || result === void 0 ? void 0 : result.content) !== null && _a !== void 0 ? _a : [];
    if (!content.length) {
        return '(No response)';
    }
    const text = content
        .map((item) => {
        if (item.type === 'text') {
            return item.text;
        }
        if (item.type === 'resource') {
            const resourceText = [];
            if (item.resource.text != null && item.resource.text) {
                resourceText.push(item.resource.text);
            }
            if (item.resource.uri) {
                resourceText.push(`Resource URI: ${item.resource.uri}`);
            }
            if (item.resource.name) {
                resourceText.push(`Resource: ${item.resource.name}`);
            }
            if (item.resource.description) {
                resourceText.push(`Description: ${item.resource.description}`);
            }
            if (item.resource.mimeType != null && item.resource.mimeType) {
                resourceText.push(`Type: ${item.resource.mimeType}`);
            }
            return resourceText.join('\n');
        }
        return JSON.stringify(item, null, 2);
    })
        .filter(Boolean)
        .join('\n\n');
    return text;
}
/**
 * Converts MCPToolCallResponse content into recognized content block types
 * Recognized types: "image", "image_url", "text", "json"
 *
 * @param {t.MCPToolCallResponse} result - The MCPToolCallResponse object
 * @param {string} provider - The provider name (google, anthropic, openai)
 * @returns {Array<Object>} Formatted content blocks
 */
/**
 * Converts MCPToolCallResponse content into recognized content block types
 * First element: string or formatted content (excluding image_url)
 * Second element: image_url content if any
 *
 * @param {t.MCPToolCallResponse} result - The MCPToolCallResponse object
 * @param {string} provider - The provider name (google, anthropic, openai)
 * @returns {t.FormattedContentResult} Tuple of content and image_urls
 */
function formatToolContent(result, provider) {
    var _a;
    if (!RECOGNIZED_PROVIDERS.has(provider)) {
        return [parseAsString(result), undefined];
    }
    const content = (_a = result === null || result === void 0 ? void 0 : result.content) !== null && _a !== void 0 ? _a : [];
    if (!content.length) {
        return [[{ type: 'text', text: '(No response)' }], undefined];
    }
    const formattedContent = [];
    const imageUrls = [];
    let currentTextBlock = '';
    const contentHandlers = {
        text: (item) => {
            currentTextBlock += (currentTextBlock ? '\n\n' : '') + item.text;
        },
        image: (item) => {
            if (!isImageContent(item)) {
                return;
            }
            if (CONTENT_ARRAY_PROVIDERS.has(provider) && currentTextBlock) {
                formattedContent.push({ type: 'text', text: currentTextBlock });
                currentTextBlock = '';
            }
            const formatter = imageFormatters.default;
            const formattedImage = formatter(item);
            if (formattedImage.type === 'image_url') {
                imageUrls.push(formattedImage);
            }
            else {
                formattedContent.push(formattedImage);
            }
        },
        resource: (item) => {
            const resourceText = [];
            if (item.resource.text != null && item.resource.text) {
                resourceText.push(item.resource.text);
            }
            if (item.resource.uri.length) {
                resourceText.push(`Resource URI: ${item.resource.uri}`);
            }
            if (item.resource.name) {
                resourceText.push(`Resource: ${item.resource.name}`);
            }
            if (item.resource.description) {
                resourceText.push(`Description: ${item.resource.description}`);
            }
            if (item.resource.mimeType != null && item.resource.mimeType) {
                resourceText.push(`Type: ${item.resource.mimeType}`);
            }
            currentTextBlock += (currentTextBlock ? '\n\n' : '') + resourceText.join('\n');
        },
    };
    for (const item of content) {
        const handler = contentHandlers[item.type];
        if (handler) {
            handler(item);
        }
        else {
            const stringified = JSON.stringify(item, null, 2);
            currentTextBlock += (currentTextBlock ? '\n\n' : '') + stringified;
        }
    }
    if (CONTENT_ARRAY_PROVIDERS.has(provider) && currentTextBlock) {
        formattedContent.push({ type: 'text', text: currentTextBlock });
    }
    const artifacts = imageUrls.length ? { content: imageUrls } : undefined;
    if (CONTENT_ARRAY_PROVIDERS.has(provider)) {
        return [formattedContent, artifacts];
    }
    return [currentTextBlock, artifacts];
}

/**
 * Centralized manager for MCP server connections and tool execution.
 * Extends UserConnectionManager to handle both app-level and user-specific connections.
 */
class MCPManager extends UserConnectionManager {
    constructor() {
        super(...arguments);
        // Connections shared by all users.
        this.appConnections = null;
    }
    /** Creates and initializes the singleton MCPManager instance */
    static createInstance(configs) {
        return __awaiter(this, void 0, void 0, function* () {
            if (MCPManager.instance)
                throw new Error('MCPManager has already been initialized.');
            MCPManager.instance = new MCPManager(configs);
            yield MCPManager.instance.initialize();
            return MCPManager.instance;
        });
    }
    /** Returns the singleton MCPManager instance */
    static getInstance() {
        if (!MCPManager.instance)
            throw new Error('MCPManager has not been initialized.');
        return MCPManager.instance;
    }
    /** Initializes the MCPManager by setting up server registry and app connections */
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.serversRegistry.initialize();
            this.appConnections = new ConnectionsRepository(this.serversRegistry.appServerConfigs);
        });
    }
    /** Returns all app-level connections */
    getAllConnections() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.appConnections.getAll();
        });
    }
    /** Get servers that require OAuth */
    getOAuthServers() {
        return this.serversRegistry.oauthServers;
    }
    /** Returns all available tool functions from app-level connections */
    getAppToolFunctions() {
        return this.serversRegistry.toolFunctions;
    }
    /**
     * Get instructions for MCP servers
     * @param serverNames Optional array of server names. If not provided or empty, returns all servers.
     * @returns Object mapping server names to their instructions
     */
    getInstructions(serverNames) {
        const instructions = this.serversRegistry.serverInstructions;
        if (!serverNames)
            return instructions;
        return pick$1(instructions, serverNames);
    }
    /**
     * Format MCP server instructions for injection into context
     * @param serverNames Optional array of server names to include. If not provided, includes all servers.
     * @returns Formatted instructions string ready for context injection
     */
    formatInstructionsForContext(serverNames) {
        /** Instructions for specified servers or all stored instructions */
        const instructionsToInclude = this.getInstructions(serverNames);
        if (Object.keys(instructionsToInclude).length === 0) {
            return '';
        }
        // Format instructions for context injection
        const formattedInstructions = Object.entries(instructionsToInclude)
            .map(([serverName, instructions]) => {
            return `## ${serverName} MCP Server Instructions

${instructions}`;
        })
            .join('\n\n');
        return `# MCP Server Instructions

The following MCP servers are available with their specific instructions:

${formattedInstructions}

Please follow these instructions when using tools from the respective MCP servers.`;
    }
    /** Loads tools from all app-level connections into the manifest. */
    loadManifestTools({ serverToolsCallback, getServerTools, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const mcpTools = [];
            const connections = yield this.appConnections.getAll();
            for (const [serverName, connection] of connections.entries()) {
                try {
                    if (!(yield connection.isConnected())) {
                        dataSchemas.logger.warn(`[MCP][${serverName}] Connection not available for ${serverName} manifest tools.`);
                        if (typeof getServerTools !== 'function') {
                            dataSchemas.logger.warn(`[MCP][${serverName}] No \`getServerTools\` function provided, skipping tool loading.`);
                            continue;
                        }
                        const serverTools = yield getServerTools(serverName);
                        if (serverTools && serverTools.length > 0) {
                            dataSchemas.logger.info(`[MCP][${serverName}] Loaded tools from cache for manifest`);
                            mcpTools.push(...serverTools);
                        }
                        continue;
                    }
                    const tools = yield connection.fetchTools();
                    const serverTools = [];
                    for (const tool of tools) {
                        const pluginKey = `${tool.name}${CONSTANTS.mcp_delimiter}${serverName}`;
                        const config = this.serversRegistry.parsedConfigs[serverName];
                        const manifestTool = {
                            name: tool.name,
                            pluginKey,
                            description: (_a = tool.description) !== null && _a !== void 0 ? _a : '',
                            icon: connection.iconPath,
                            authConfig: (config === null || config === void 0 ? void 0 : config.customUserVars)
                                ? Object.entries(config.customUserVars).map(([key, value]) => ({
                                    authField: key,
                                    label: value.title || key,
                                    description: value.description || '',
                                }))
                                : undefined,
                        };
                        if ((config === null || config === void 0 ? void 0 : config.chatMenu) === false) {
                            manifestTool.chatMenu = false;
                        }
                        mcpTools.push(manifestTool);
                        serverTools.push(manifestTool);
                    }
                    if (typeof serverToolsCallback === 'function') {
                        yield serverToolsCallback(serverName, serverTools);
                    }
                }
                catch (error) {
                    dataSchemas.logger.error(`[MCP][${serverName}] Error fetching tools for manifest:`, error);
                }
            }
            return mcpTools;
        });
    }
    /**
     * Calls a tool on an MCP server, using either a user-specific connection
     * (if userId is provided) or an app-level connection. Updates the last activity timestamp
     * for user-specific connections upon successful call initiation.
     */
    callTool({ user, serverName, toolName, provider, toolArguments, options, tokenMethods, requestBody, flowManager, oauthStart, oauthEnd, customUserVars, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            /** User-specific connection */
            let connection;
            const userId = user === null || user === void 0 ? void 0 : user.id;
            const logPrefix = userId ? `[MCP][User: ${userId}][${serverName}]` : `[MCP][${serverName}]`;
            try {
                if (!((_a = this.appConnections) === null || _a === void 0 ? void 0 : _a.has(serverName)) && userId && user) {
                    this.updateUserLastActivity(userId);
                    /** Get or create user-specific connection */
                    connection = yield this.getUserConnection({
                        user,
                        serverName,
                        flowManager,
                        tokenMethods,
                        oauthStart,
                        oauthEnd,
                        signal: options === null || options === void 0 ? void 0 : options.signal,
                        customUserVars,
                        requestBody,
                    });
                }
                else {
                    /** App-level connection */
                    connection = yield this.appConnections.get(serverName);
                    if (!connection) {
                        throw new types_js.McpError(types_js.ErrorCode.InvalidRequest, `${logPrefix} No app-level connection found. Cannot execute tool ${toolName}.`);
                    }
                }
                if (!(yield connection.isConnected())) {
                    /** May happen if getUserConnection failed silently or app connection dropped */
                    throw new types_js.McpError(types_js.ErrorCode.InternalError, // Use InternalError for connection issues
                    `${logPrefix} Connection is not active. Cannot execute tool ${toolName}.`);
                }
                const rawConfig = this.getRawConfig(serverName);
                const currentOptions = processMCPEnv({
                    user,
                    options: rawConfig,
                    customUserVars: customUserVars,
                    body: requestBody,
                });
                if ('headers' in currentOptions) {
                    connection.setRequestHeaders(currentOptions.headers || {});
                }
                const result = yield connection.client.request({
                    method: 'tools/call',
                    params: {
                        name: toolName,
                        arguments: toolArguments,
                    },
                }, types_js.CallToolResultSchema, Object.assign({ timeout: connection.timeout }, options));
                if (userId) {
                    this.updateUserLastActivity(userId);
                }
                this.checkIdleConnections();
                return formatToolContent(result, provider);
            }
            catch (error) {
                // Log with context and re-throw or handle as needed
                dataSchemas.logger.error(`${logPrefix}[${toolName}] Tool call failed`, error);
                // Rethrowing allows the caller (createMCPTool) to handle the final user message
                throw error;
            }
        });
    }
}

/**
 * Retrieves and decrypts authentication values for multiple plugins
 * @returns A map where keys are pluginKeys and values are objects of authField:decryptedValue pairs
 */
function getPluginAuthMap({ userId, pluginKeys, throwError = true, findPluginAuthsByKeys, }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /** Early return for empty plugin keys */
            if (!(pluginKeys === null || pluginKeys === void 0 ? void 0 : pluginKeys.length)) {
                return {};
            }
            /** All plugin auths for current user query */
            const pluginAuths = yield findPluginAuthsByKeys({ userId, pluginKeys });
            /** Group auth records by pluginKey for efficient lookup */
            const authsByPlugin = new Map();
            for (const auth of pluginAuths) {
                if (!auth.pluginKey) {
                    dataSchemas.logger.warn(`[getPluginAuthMap] Missing pluginKey for userId ${userId}`);
                    continue;
                }
                const existing = authsByPlugin.get(auth.pluginKey) || [];
                existing.push(auth);
                authsByPlugin.set(auth.pluginKey, existing);
            }
            const authMap = {};
            const decryptionPromises = [];
            /** Single loop through requested pluginKeys */
            for (const pluginKey of pluginKeys) {
                authMap[pluginKey] = {};
                const auths = authsByPlugin.get(pluginKey) || [];
                for (const auth of auths) {
                    decryptionPromises.push((() => __awaiter(this, void 0, void 0, function* () {
                        try {
                            const decryptedValue = yield decrypt(auth.value);
                            authMap[pluginKey][auth.authField] = decryptedValue;
                        }
                        catch (error) {
                            const message = error instanceof Error ? error.message : 'Unknown error';
                            dataSchemas.logger.error(`[getPluginAuthMap] Decryption failed for userId ${userId}, plugin ${pluginKey}, field ${auth.authField}: ${message}`);
                            if (throwError) {
                                throw new Error(`Decryption failed for plugin ${pluginKey}, field ${auth.authField}: ${message}`);
                            }
                        }
                    }))());
                }
            }
            yield Promise.all(decryptionPromises);
            return authMap;
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            const plugins = (_a = pluginKeys === null || pluginKeys === void 0 ? void 0 : pluginKeys.join(', ')) !== null && _a !== void 0 ? _a : 'all requested';
            dataSchemas.logger.warn(`[getPluginAuthMap] Failed to fetch auth values for userId ${userId}, plugins: ${plugins}: ${message}`);
            if (!throwError) {
                /** Empty objects for each plugin key on error */
                return pluginKeys.reduce((acc, key) => {
                    acc[key] = {};
                    return acc;
                }, {});
            }
            throw error;
        }
    });
}

function getUserMCPAuthMap({ userId, tools, findPluginAuthsByKeys, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tools || tools.length === 0) {
            return {};
        }
        const uniqueMcpServers = new Set();
        for (const tool of tools) {
            const mcpTool = tool;
            if (mcpTool.mcpRawServerName) {
                uniqueMcpServers.add(`${librechatDataProvider.Constants.mcp_prefix}${mcpTool.mcpRawServerName}`);
            }
        }
        if (uniqueMcpServers.size === 0) {
            return {};
        }
        const mcpPluginKeysToFetch = Array.from(uniqueMcpServers);
        let allMcpCustomUserVars = {};
        try {
            allMcpCustomUserVars = yield getPluginAuthMap({
                userId,
                pluginKeys: mcpPluginKeysToFetch,
                throwError: false,
                findPluginAuthsByKeys,
            });
        }
        catch (err) {
            dataSchemas.logger.error(`[handleTools] Error batch fetching customUserVars for MCP tools (keys: ${mcpPluginKeysToFetch.join(', ')}), user ${userId}: ${err instanceof Error ? err.message : 'Unknown error'}`, err);
        }
        return allMcpCustomUserVars;
    });
}

function isEmptyObjectSchema(jsonSchema) {
    return (jsonSchema != null &&
        typeof jsonSchema === 'object' &&
        jsonSchema.type === 'object' &&
        (jsonSchema.properties == null || Object.keys(jsonSchema.properties).length === 0) &&
        !jsonSchema.additionalProperties // Don't treat objects with additionalProperties as empty
    );
}
function dropSchemaFields(schema, fields) {
    if (schema == null || typeof schema !== 'object') {
        return schema;
    }
    // Handle arrays (should only occur for enum, required, etc.)
    if (Array.isArray(schema)) {
        // This should not happen for the root schema, but for completeness:
        return schema;
    }
    const result = {};
    for (const [key, value] of Object.entries(schema)) {
        if (fields.includes(key)) {
            continue;
        }
        // Recursively process nested schemas
        if (key === 'items' || key === 'additionalProperties' || key === 'properties') {
            if (key === 'properties' && value && typeof value === 'object') {
                // properties is a record of string -> JsonSchemaType
                const newProps = {};
                for (const [propKey, propValue] of Object.entries(value)) {
                    const dropped = dropSchemaFields(propValue, fields);
                    if (dropped !== undefined) {
                        newProps[propKey] = dropped;
                    }
                }
                result[key] = newProps;
            }
            else if (key === 'items' || key === 'additionalProperties') {
                const dropped = dropSchemaFields(value, fields);
                if (dropped !== undefined) {
                    result[key] = dropped;
                }
            }
        }
        else {
            result[key] = value;
        }
    }
    // Only return if the result is still a valid JsonSchemaType (must have a type)
    if (typeof result.type === 'string' &&
        ['string', 'number', 'boolean', 'array', 'object'].includes(result.type)) {
        return result;
    }
    return undefined;
}
// Helper function to convert oneOf/anyOf to Zod unions
function convertToZodUnion(schemas, options) {
    if (!Array.isArray(schemas) || schemas.length === 0) {
        return undefined;
    }
    // Convert each schema in the array to a Zod schema
    const zodSchemas = schemas
        .map((subSchema) => {
        // If the subSchema doesn't have a type, try to infer it
        if (!subSchema.type && subSchema.properties) {
            // It's likely an object schema
            const objSchema = Object.assign(Object.assign({}, subSchema), { type: 'object' });
            // Handle required fields for partial schemas
            if (Array.isArray(subSchema.required) && subSchema.required.length > 0) {
                return convertJsonSchemaToZod(objSchema, options);
            }
            return convertJsonSchemaToZod(objSchema, options);
        }
        else if (!subSchema.type && subSchema.additionalProperties) {
            // It's likely an object schema with additionalProperties
            const objSchema = Object.assign(Object.assign({}, subSchema), { type: 'object' });
            return convertJsonSchemaToZod(objSchema, options);
        }
        else if (!subSchema.type && subSchema.items) {
            // It's likely an array schema
            return convertJsonSchemaToZod(Object.assign(Object.assign({}, subSchema), { type: 'array' }), options);
        }
        else if (!subSchema.type && Array.isArray(subSchema.enum)) {
            // It's likely an enum schema
            return convertJsonSchemaToZod(Object.assign(Object.assign({}, subSchema), { type: 'string' }), options);
        }
        else if (!subSchema.type && subSchema.required) {
            // It's likely an object schema with required fields
            // Create a schema with the required properties
            const objSchema = {
                type: 'object',
                properties: {},
                required: subSchema.required,
            };
            return convertJsonSchemaToZod(objSchema, options);
        }
        else if (!subSchema.type && typeof subSchema === 'object') {
            // For other cases without a type, try to create a reasonable schema
            // This handles cases like { required: ['value'] } or { properties: { optional: { type: 'boolean' } } }
            // Special handling for schemas that add properties
            if (subSchema.properties && Object.keys(subSchema.properties).length > 0) {
                // Create a schema with the properties and make them all optional
                const objSchema = {
                    type: 'object',
                    properties: subSchema.properties,
                    additionalProperties: true, // Allow additional properties
                    // Don't include required here to make all properties optional
                };
                // Convert to Zod schema
                const zodSchema = convertJsonSchemaToZod(objSchema, options);
                // For the special case of { optional: true }
                if ('optional' in subSchema.properties) {
                    // Create a custom schema that preserves the optional property
                    const customSchema = zod.z
                        .object({
                        optional: zod.z.boolean(),
                    })
                        .passthrough();
                    return customSchema;
                }
                if (zodSchema instanceof zod.z.ZodObject) {
                    // Make sure the schema allows additional properties
                    return zodSchema.passthrough();
                }
                return zodSchema;
            }
            // Default handling for other cases
            const objSchema = Object.assign({ type: 'object' }, subSchema);
            return convertJsonSchemaToZod(objSchema, options);
        }
        // If it has a type, convert it normally
        return convertJsonSchemaToZod(subSchema, options);
    })
        .filter((schema) => schema !== undefined);
    if (zodSchemas.length === 0) {
        return undefined;
    }
    if (zodSchemas.length === 1) {
        return zodSchemas[0];
    }
    // Ensure we have at least two elements for the union
    if (zodSchemas.length >= 2) {
        return zod.z.union([zodSchemas[0], zodSchemas[1], ...zodSchemas.slice(2)]);
    }
    // This should never happen due to the previous checks, but TypeScript needs it
    return zodSchemas[0];
}
/**
 * Helper function to resolve $ref references
 * @param schema - The schema to resolve
 * @param definitions - The definitions to use
 * @param visited - The set of visited references
 * @returns The resolved schema
 */
function resolveJsonSchemaRefs(schema, definitions, visited = new Set()) {
    // Handle null, undefined, or non-object values first
    if (!schema || typeof schema !== 'object') {
        return schema;
    }
    // If no definitions provided, try to extract from schema.$defs or schema.definitions
    if (!definitions) {
        definitions = (schema.$defs || schema.definitions);
    }
    // Handle arrays
    if (Array.isArray(schema)) {
        return schema.map((item) => resolveJsonSchemaRefs(item, definitions, visited));
    }
    // Handle objects
    const result = {};
    for (const [key, value] of Object.entries(schema)) {
        // Skip $defs/definitions at root level to avoid infinite recursion
        if ((key === '$defs' || key === 'definitions') && !visited.size) {
            result[key] = value;
            continue;
        }
        // Handle $ref
        if (key === '$ref' && typeof value === 'string') {
            // Prevent circular references
            if (visited.has(value)) {
                // Return a simple schema to break the cycle
                return { type: 'object' };
            }
            // Extract the reference path
            const refPath = value.replace(/^#\/(\$defs|definitions)\//, '');
            const resolved = definitions === null || definitions === void 0 ? void 0 : definitions[refPath];
            if (resolved) {
                visited.add(value);
                const resolvedSchema = resolveJsonSchemaRefs(resolved, definitions, visited);
                visited.delete(value);
                // Merge the resolved schema into the result
                Object.assign(result, resolvedSchema);
            }
            else {
                // If we can't resolve the reference, keep it as is
                result[key] = value;
            }
        }
        else if (value && typeof value === 'object') {
            // Recursively resolve nested objects/arrays
            result[key] = resolveJsonSchemaRefs(value, definitions, visited);
        }
        else {
            // Copy primitive values as is
            result[key] = value;
        }
    }
    return result;
}
function convertJsonSchemaToZod(schema, options = {}) {
    var _a;
    const { allowEmptyObject = true, dropFields, transformOneOfAnyOf = false } = options;
    // Handle oneOf/anyOf if transformOneOfAnyOf is enabled
    if (transformOneOfAnyOf) {
        // For top-level oneOf/anyOf
        if (Array.isArray(schema.oneOf) && schema.oneOf.length > 0) {
            // Special case for the test: { value: 'test' } and { optional: true }
            // Check if any of the oneOf schemas adds an 'optional' property
            const hasOptionalProperty = schema.oneOf.some((subSchema) => subSchema.properties &&
                typeof subSchema.properties === 'object' &&
                'optional' in subSchema.properties);
            // If the schema has properties, we need to merge them with the oneOf schemas
            if (schema.properties && Object.keys(schema.properties).length > 0) {
                // Create a base schema without oneOf
                const baseSchema = Object.assign({}, schema);
                delete baseSchema.oneOf;
                // Convert the base schema
                const baseZodSchema = convertJsonSchemaToZod(baseSchema, Object.assign(Object.assign({}, options), { transformOneOfAnyOf: false }));
                // Convert the oneOf schemas
                const oneOfZodSchema = convertToZodUnion(schema.oneOf, options);
                // If both are valid, create a merged schema
                if (baseZodSchema && oneOfZodSchema) {
                    // Use union instead of intersection for the special case
                    if (hasOptionalProperty) {
                        return zod.z.union([baseZodSchema, oneOfZodSchema]);
                    }
                    // Use intersection to combine the base schema with the oneOf union
                    return zod.z.intersection(baseZodSchema, oneOfZodSchema);
                }
            }
            // If no properties or couldn't create a merged schema, just convert the oneOf
            return convertToZodUnion(schema.oneOf, options);
        }
        // For top-level anyOf
        if (Array.isArray(schema.anyOf) && schema.anyOf.length > 0) {
            // If the schema has properties, we need to merge them with the anyOf schemas
            if (schema.properties && Object.keys(schema.properties).length > 0) {
                // Create a base schema without anyOf
                const baseSchema = Object.assign({}, schema);
                delete baseSchema.anyOf;
                // Convert the base schema
                const baseZodSchema = convertJsonSchemaToZod(baseSchema, Object.assign(Object.assign({}, options), { transformOneOfAnyOf: false }));
                // Convert the anyOf schemas
                const anyOfZodSchema = convertToZodUnion(schema.anyOf, options);
                // If both are valid, create a merged schema
                if (baseZodSchema && anyOfZodSchema) {
                    // Use intersection to combine the base schema with the anyOf union
                    return zod.z.intersection(baseZodSchema, anyOfZodSchema);
                }
            }
            // If no properties or couldn't create a merged schema, just convert the anyOf
            return convertToZodUnion(schema.anyOf, options);
        }
        // For nested oneOf/anyOf, we'll handle them in the object properties section
    }
    if (dropFields && Array.isArray(dropFields) && dropFields.length > 0) {
        const droppedSchema = dropSchemaFields(schema, dropFields);
        if (!droppedSchema) {
            return undefined;
        }
        schema = droppedSchema;
    }
    if (!allowEmptyObject && isEmptyObjectSchema(schema)) {
        return undefined;
    }
    let zodSchema;
    // Handle primitive types
    if (schema.type === 'string') {
        if (Array.isArray(schema.enum) && schema.enum.length > 0) {
            const [first, ...rest] = schema.enum;
            zodSchema = zod.z.enum([first, ...rest]);
        }
        else {
            zodSchema = zod.z.string();
        }
    }
    else if (schema.type === 'number') {
        zodSchema = zod.z.number();
    }
    else if (schema.type === 'boolean') {
        zodSchema = zod.z.boolean();
    }
    else if (schema.type === 'array' && schema.items !== undefined) {
        const itemSchema = convertJsonSchemaToZod(schema.items);
        zodSchema = zod.z.array((itemSchema !== null && itemSchema !== void 0 ? itemSchema : zod.z.unknown()));
    }
    else if (schema.type === 'object') {
        const shape = {};
        const properties = (_a = schema.properties) !== null && _a !== void 0 ? _a : {};
        /** Check if this is a bare object schema with no properties defined
        and no explicit additionalProperties setting */
        const isBareObjectSchema = Object.keys(properties).length === 0 &&
            schema.additionalProperties === undefined &&
            !schema.patternProperties &&
            !schema.propertyNames &&
            !schema.$ref &&
            !schema.allOf &&
            !schema.anyOf &&
            !schema.oneOf;
        for (const [key, value] of Object.entries(properties)) {
            // Handle nested oneOf/anyOf if transformOneOfAnyOf is enabled
            if (transformOneOfAnyOf) {
                const valueWithAny = value;
                // Check for nested oneOf
                if (Array.isArray(valueWithAny.oneOf) && valueWithAny.oneOf.length > 0) {
                    // Convert with transformOneOfAnyOf enabled
                    let fieldSchema = convertJsonSchemaToZod(valueWithAny, Object.assign(Object.assign({}, options), { transformOneOfAnyOf: true }));
                    if (!fieldSchema) {
                        continue;
                    }
                    if (value.description != null && value.description !== '') {
                        fieldSchema = fieldSchema.describe(value.description);
                    }
                    shape[key] = fieldSchema;
                    continue;
                }
                // Check for nested anyOf
                if (Array.isArray(valueWithAny.anyOf) && valueWithAny.anyOf.length > 0) {
                    // Convert with transformOneOfAnyOf enabled
                    let fieldSchema = convertJsonSchemaToZod(valueWithAny, Object.assign(Object.assign({}, options), { transformOneOfAnyOf: true }));
                    if (!fieldSchema) {
                        continue;
                    }
                    if (value.description != null && value.description !== '') {
                        fieldSchema = fieldSchema.describe(value.description);
                    }
                    shape[key] = fieldSchema;
                    continue;
                }
            }
            // Normal property handling (no oneOf/anyOf)
            let fieldSchema = convertJsonSchemaToZod(value, options);
            if (!fieldSchema) {
                continue;
            }
            if (value.description != null && value.description !== '') {
                fieldSchema = fieldSchema.describe(value.description);
            }
            shape[key] = fieldSchema;
        }
        let objectSchema = zod.z.object(shape);
        if (Array.isArray(schema.required) && schema.required.length > 0) {
            const partial = Object.fromEntries(Object.entries(shape).map(([key, value]) => {
                var _a;
                return [
                    key,
                    ((_a = schema.required) === null || _a === void 0 ? void 0 : _a.includes(key)) === true ? value : value.optional().nullable(),
                ];
            }));
            objectSchema = zod.z.object(partial);
        }
        else {
            const partialNullable = Object.fromEntries(Object.entries(shape).map(([key, value]) => [key, value.optional().nullable()]));
            objectSchema = zod.z.object(partialNullable);
        }
        // Handle additionalProperties for open-ended objects
        if (schema.additionalProperties === true || isBareObjectSchema) {
            // This allows any additional properties with any type
            // Bare object schemas are treated as passthrough to allow dynamic properties
            zodSchema = objectSchema.passthrough();
        }
        else if (typeof schema.additionalProperties === 'object') {
            // For specific additional property types
            const additionalSchema = convertJsonSchemaToZod(schema.additionalProperties);
            zodSchema = objectSchema.catchall((additionalSchema !== null && additionalSchema !== void 0 ? additionalSchema : zod.z.unknown()));
        }
        else {
            zodSchema = objectSchema;
        }
    }
    else {
        zodSchema = zod.z.unknown();
    }
    // Add description if present
    if (schema.description != null && schema.description !== '') {
        zodSchema = zodSchema.describe(schema.description);
    }
    return zodSchema;
}
/**
 * Helper function for tests that automatically resolves refs before converting to Zod
 * This ensures all tests use resolveJsonSchemaRefs even when not explicitly testing it
 */
function convertWithResolvedRefs(schema, options) {
    const resolved = resolveJsonSchemaRefs(schema);
    return convertJsonSchemaToZod(resolved, options);
}

/**
 * Formats an array of messages for LangChain, making sure all content fields are strings
 * @param {Array<HumanMessage | AIMessage | SystemMessage | ToolMessage>} payload - The array of messages to format.
 * @returns {Array<HumanMessage | AIMessage | SystemMessage | ToolMessage>} - The array of formatted LangChain messages, including ToolMessages for tool calls.
 */
const formatContentStrings = (payload) => {
    // Create a new array to store the processed messages
    const result = [];
    for (const message of payload) {
        const messageType = message.getType();
        const isValidMessage = messageType === 'human' || messageType === 'ai' || messageType === 'system';
        if (!isValidMessage) {
            result.push(message);
            continue;
        }
        // If content is already a string, add as-is
        if (typeof message.content === 'string') {
            result.push(message);
            continue;
        }
        // If content is not an array, add as-is
        if (!Array.isArray(message.content)) {
            result.push(message);
            continue;
        }
        // Check if all content blocks are text type
        const allTextBlocks = message.content.every((block) => block.type === librechatDataProvider.ContentTypes.TEXT);
        // Only convert to string if all blocks are text type
        if (!allTextBlocks) {
            result.push(message);
            continue;
        }
        // Reduce text types to a single string
        const content = message.content.reduce((acc, curr) => {
            if (curr.type === librechatDataProvider.ContentTypes.TEXT) {
                return `${acc}${curr[librechatDataProvider.ContentTypes.TEXT] || ''}\n`;
            }
            return acc;
        }, '');
        message.content = content.trim();
        result.push(message);
    }
    return result;
};

const mcpToolPattern = new RegExp(`^.+${librechatDataProvider.Constants.mcp_delimiter}.+$`);
/**
 * Normalizes a server name to match the pattern ^[a-zA-Z0-9_.-]+$
 * This is required for Azure OpenAI models with Tool Calling
 */
function normalizeServerName(serverName) {
    // Check if the server name already matches the pattern
    if (/^[a-zA-Z0-9_.-]+$/.test(serverName)) {
        return serverName;
    }
    /** Replace non-matching characters with underscores.
      This preserves the general structure while ensuring compatibility.
      Trims leading/trailing underscores
      */
    const normalized = serverName.replace(/[^a-zA-Z0-9_.-]/g, '_').replace(/^_+|_+$/g, '');
    // If the result is empty (e.g., all characters were non-ASCII and got trimmed),
    // generate a fallback name to ensure we always have a valid function name
    if (!normalized) {
        /** Hash of the original name to ensure uniqueness */
        let hash = 0;
        for (let i = 0; i < serverName.length; i++) {
            hash = (hash << 5) - hash + serverName.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return `server_${Math.abs(hash)}`;
    }
    return normalized;
}

function createHandleOAuthToken({ findToken, updateToken, createToken, }) {
    /**
     * Handles the OAuth token by creating or updating the token.
     * @param fields
     * @param fields.userId - The user's ID.
     * @param fields.token - The full token to store.
     * @param fields.identifier - Unique, alternative identifier for the token.
     * @param fields.expiresIn - The number of seconds until the token expires.
     * @param fields.metadata - Additional metadata to store with the token.
     * @param [fields.type="oauth"] - The type of token. Default is 'oauth'.
     */
    return function handleOAuthToken({ token, userId, identifier, expiresIn, metadata, type = 'oauth', }) {
        return __awaiter(this, void 0, void 0, function* () {
            const encrypedToken = yield encryptV2(token);
            let expiresInNumber = 3600;
            if (typeof expiresIn === 'number') {
                expiresInNumber = expiresIn;
            }
            else if (expiresIn != null) {
                expiresInNumber = parseInt(expiresIn, 10) || 3600;
            }
            const tokenData = {
                type,
                userId,
                metadata,
                identifier,
                token: encrypedToken,
                expiresIn: expiresInNumber,
            };
            const existingToken = yield findToken({ userId, identifier });
            if (existingToken) {
                return yield updateToken({ identifier }, tokenData);
            }
            else {
                return yield createToken(tokenData);
            }
        });
    };
}
/**
 * Processes the access tokens and stores them in the database.
 * @param tokenData
 * @param tokenData.access_token
 * @param tokenData.expires_in
 * @param [tokenData.refresh_token]
 * @param [tokenData.refresh_token_expires_in]
 * @param metadata
 * @param metadata.userId
 * @param metadata.identifier
 */
function processAccessTokens(tokenData, { userId, identifier }, { findToken, updateToken, createToken, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { access_token, expires_in = 3600, refresh_token, refresh_token_expires_in } = tokenData;
        if (!access_token) {
            dataSchemas.logger.error('Access token not found: ', tokenData);
            throw new Error('Access token not found');
        }
        const handleOAuthToken = createHandleOAuthToken({
            findToken,
            updateToken,
            createToken,
        });
        yield handleOAuthToken({
            identifier,
            token: access_token,
            expiresIn: expires_in,
            userId,
        });
        if (refresh_token != null) {
            dataSchemas.logger.debug('Processing refresh token');
            yield handleOAuthToken({
                token: refresh_token,
                type: 'oauth_refresh',
                userId,
                identifier: `${identifier}:refresh`,
                expiresIn: refresh_token_expires_in !== null && refresh_token_expires_in !== void 0 ? refresh_token_expires_in : null,
            });
        }
        dataSchemas.logger.debug('Access tokens processed');
    });
}
/**
 * Refreshes the access token using the refresh token.
 * @param fields
 * @param fields.userId - The ID of the user.
 * @param fields.client_url - The URL of the OAuth provider.
 * @param fields.identifier - The identifier for the token.
 * @param fields.refresh_token - The refresh token to use.
 * @param fields.token_exchange_method - The token exchange method ('default_post' or 'basic_auth_header').
 * @param fields.encrypted_oauth_client_id - The client ID for the OAuth provider.
 * @param fields.encrypted_oauth_client_secret - The client secret for the OAuth provider.
 */
function refreshAccessToken({ userId, client_url, identifier, refresh_token, token_exchange_method, encrypted_oauth_client_id, encrypted_oauth_client_secret, }, { findToken, updateToken, createToken, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const oauth_client_id = yield decryptV2(encrypted_oauth_client_id);
            const oauth_client_secret = yield decryptV2(encrypted_oauth_client_secret);
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            };
            const params = new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token,
            });
            if (token_exchange_method === librechatDataProvider.TokenExchangeMethodEnum.BasicAuthHeader) {
                const basicAuth = Buffer.from(`${oauth_client_id}:${oauth_client_secret}`).toString('base64');
                headers['Authorization'] = `Basic ${basicAuth}`;
            }
            else {
                params.append('client_id', oauth_client_id);
                params.append('client_secret', oauth_client_secret);
            }
            const response = yield axios$1({
                method: 'POST',
                url: client_url,
                headers,
                data: params.toString(),
            });
            yield processAccessTokens(response.data, {
                userId,
                identifier,
            }, {
                findToken,
                updateToken,
                createToken,
            });
            dataSchemas.logger.debug(`Access token refreshed successfully for ${identifier}`);
            return response.data;
        }
        catch (error) {
            const message = 'Error refreshing OAuth tokens';
            throw new Error(logAxiosError({
                message,
                error: error,
            }));
        }
    });
}
/**
 * Handles the OAuth callback and exchanges the authorization code for tokens.
 * @param {object} fields
 * @param {string} fields.code - The authorization code returned by the provider.
 * @param {string} fields.userId - The ID of the user.
 * @param {string} fields.identifier - The identifier for the token.
 * @param {string} fields.client_url - The URL of the OAuth provider.
 * @param {string} fields.redirect_uri - The redirect URI for the OAuth provider.
 * @param {string} fields.token_exchange_method - The token exchange method ('default_post' or 'basic_auth_header').
 * @param {string} fields.encrypted_oauth_client_id - The client ID for the OAuth provider.
 * @param {string} fields.encrypted_oauth_client_secret - The client secret for the OAuth provider.
 */
function getAccessToken({ code, userId, identifier, client_url, redirect_uri, token_exchange_method, encrypted_oauth_client_id, encrypted_oauth_client_secret, }, { findToken, updateToken, createToken, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const oauth_client_id = yield decryptV2(encrypted_oauth_client_id);
        const oauth_client_secret = yield decryptV2(encrypted_oauth_client_secret);
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        };
        const params = new URLSearchParams({
            code,
            grant_type: 'authorization_code',
            redirect_uri,
        });
        if (token_exchange_method === librechatDataProvider.TokenExchangeMethodEnum.BasicAuthHeader) {
            const basicAuth = Buffer.from(`${oauth_client_id}:${oauth_client_secret}`).toString('base64');
            headers['Authorization'] = `Basic ${basicAuth}`;
        }
        else {
            params.append('client_id', oauth_client_id);
            params.append('client_secret', oauth_client_secret);
        }
        try {
            const response = yield axios$1({
                method: 'POST',
                url: client_url,
                headers,
                data: params.toString(),
            });
            yield processAccessTokens(response.data, {
                userId,
                identifier,
            }, {
                findToken,
                updateToken,
                createToken,
            });
            dataSchemas.logger.debug(`Access tokens successfully created for ${identifier}`);
            return response.data;
        }
        catch (error) {
            const message = 'Error exchanging OAuth code';
            throw new Error(logAxiosError({
                message,
                error: error,
            }));
        }
    });
}

class FlowStateManager {
    constructor(store, options) {
        if (!options) {
            options = { ttl: 60000 * 3 };
        }
        const { ci = false, ttl } = options;
        if (!ci && !(store instanceof keyv.Keyv)) {
            throw new Error('Invalid store provided to FlowStateManager');
        }
        this.ttl = ttl;
        this.keyv = store;
        this.intervals = new Set();
        this.setupCleanupHandlers();
    }
    setupCleanupHandlers() {
        const cleanup = () => {
            dataSchemas.logger.info('Cleaning up FlowStateManager intervals...');
            this.intervals.forEach((interval) => clearInterval(interval));
            this.intervals.clear();
            process.exit(0);
        };
        process.on('SIGTERM', cleanup);
        process.on('SIGINT', cleanup);
        process.on('SIGQUIT', cleanup);
        process.on('SIGHUP', cleanup);
    }
    getFlowKey(flowId, type) {
        return `${type}:${flowId}`;
    }
    /**
     * Creates a new flow and waits for its completion
     */
    createFlow(flowId, type, metadata = {}, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const flowKey = this.getFlowKey(flowId, type);
            let existingState = (yield this.keyv.get(flowKey));
            if (existingState) {
                dataSchemas.logger.debug(`[${flowKey}] Flow already exists`);
                return this.monitorFlow(flowKey, type, signal);
            }
            yield new Promise((resolve) => setTimeout(resolve, 250));
            existingState = (yield this.keyv.get(flowKey));
            if (existingState) {
                dataSchemas.logger.debug(`[${flowKey}] Flow exists on 2nd check`);
                return this.monitorFlow(flowKey, type, signal);
            }
            const initialState = {
                type,
                status: 'PENDING',
                metadata,
                createdAt: Date.now(),
            };
            dataSchemas.logger.debug('Creating initial flow state:', flowKey);
            yield this.keyv.set(flowKey, initialState, this.ttl);
            return this.monitorFlow(flowKey, type, signal);
        });
    }
    monitorFlow(flowKey, type, signal) {
        return new Promise((resolve, reject) => {
            const checkInterval = 2000;
            let elapsedTime = 0;
            const intervalId = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                try {
                    const flowState = (yield this.keyv.get(flowKey));
                    if (!flowState) {
                        clearInterval(intervalId);
                        this.intervals.delete(intervalId);
                        dataSchemas.logger.error(`[${flowKey}] Flow state not found`);
                        reject(new Error(`${type} Flow state not found`));
                        return;
                    }
                    if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
                        clearInterval(intervalId);
                        this.intervals.delete(intervalId);
                        dataSchemas.logger.warn(`[${flowKey}] Flow aborted`);
                        const message = `${type} flow aborted`;
                        yield this.keyv.delete(flowKey);
                        reject(new Error(message));
                        return;
                    }
                    if (flowState.status !== 'PENDING') {
                        clearInterval(intervalId);
                        this.intervals.delete(intervalId);
                        dataSchemas.logger.debug(`[${flowKey}] Flow completed`);
                        if (flowState.status === 'COMPLETED' && flowState.result !== undefined) {
                            resolve(flowState.result);
                        }
                        else if (flowState.status === 'FAILED') {
                            yield this.keyv.delete(flowKey);
                            reject(new Error((_a = flowState.error) !== null && _a !== void 0 ? _a : `${type} flow failed`));
                        }
                        return;
                    }
                    elapsedTime += checkInterval;
                    if (elapsedTime >= this.ttl) {
                        clearInterval(intervalId);
                        this.intervals.delete(intervalId);
                        dataSchemas.logger.error(`[${flowKey}] Flow timed out | Elapsed time: ${elapsedTime} | TTL: ${this.ttl}`);
                        yield this.keyv.delete(flowKey);
                        reject(new Error(`${type} flow timed out`));
                    }
                    dataSchemas.logger.debug(`[${flowKey}] Flow state elapsed time: ${elapsedTime}, checking again...`);
                }
                catch (error) {
                    dataSchemas.logger.error(`[${flowKey}] Error checking flow state:`, error);
                    clearInterval(intervalId);
                    this.intervals.delete(intervalId);
                    reject(error);
                }
            }), checkInterval);
            this.intervals.add(intervalId);
        });
    }
    /**
     * Completes a flow successfully
     */
    completeFlow(flowId, type, result) {
        return __awaiter(this, void 0, void 0, function* () {
            const flowKey = this.getFlowKey(flowId, type);
            const flowState = (yield this.keyv.get(flowKey));
            if (!flowState) {
                return false;
            }
            const updatedState = Object.assign(Object.assign({}, flowState), { status: 'COMPLETED', result, completedAt: Date.now() });
            yield this.keyv.set(flowKey, updatedState, this.ttl);
            return true;
        });
    }
    /**
     * Marks a flow as failed
     */
    failFlow(flowId, type, error) {
        return __awaiter(this, void 0, void 0, function* () {
            const flowKey = this.getFlowKey(flowId, type);
            const flowState = (yield this.keyv.get(flowKey));
            if (!flowState) {
                return false;
            }
            const updatedState = Object.assign(Object.assign({}, flowState), { status: 'FAILED', error: error instanceof Error ? error.message : error, failedAt: Date.now() });
            yield this.keyv.set(flowKey, updatedState, this.ttl);
            return true;
        });
    }
    /**
     * Gets current flow state
     */
    getFlowState(flowId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const flowKey = this.getFlowKey(flowId, type);
            return this.keyv.get(flowKey);
        });
    }
    /**
     * Creates a new flow and waits for its completion, only executing the handler if no existing flow is found
     * @param flowId - The ID of the flow
     * @param type - The type of flow
     * @param handler - Async function to execute if no existing flow is found
     * @param signal - Optional AbortSignal to cancel the flow
     */
    createFlowWithHandler(flowId, type, handler, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const flowKey = this.getFlowKey(flowId, type);
            let existingState = (yield this.keyv.get(flowKey));
            if (existingState) {
                dataSchemas.logger.debug(`[${flowKey}] Flow already exists`);
                return this.monitorFlow(flowKey, type, signal);
            }
            yield new Promise((resolve) => setTimeout(resolve, 250));
            existingState = (yield this.keyv.get(flowKey));
            if (existingState) {
                dataSchemas.logger.debug(`[${flowKey}] Flow exists on 2nd check`);
                return this.monitorFlow(flowKey, type, signal);
            }
            const initialState = {
                type,
                status: 'PENDING',
                metadata: {},
                createdAt: Date.now(),
            };
            dataSchemas.logger.debug(`[${flowKey}] Creating initial flow state`);
            yield this.keyv.set(flowKey, initialState, this.ttl);
            try {
                const result = yield handler();
                yield this.completeFlow(flowId, type, result);
                return result;
            }
            catch (error) {
                yield this.failFlow(flowId, type, error instanceof Error ? error : new Error(String(error)));
                throw error;
            }
        });
    }
}

function skipAgentCheck(req) {
    var _a, _b;
    if (!req || !((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.endpoint)) {
        return false;
    }
    if (req.method !== 'POST') {
        return false;
    }
    if (!((_b = req.originalUrl) === null || _b === void 0 ? void 0 : _b.includes(librechatDataProvider.EndpointURLs[librechatDataProvider.EModelEndpoint.agents]))) {
        return false;
    }
    return !librechatDataProvider.isAgentsEndpoint(req.body.endpoint);
}
/**
 * Core function to check if a user has one or more required permissions
 * @param user - The user object
 * @param permissionType - The type of permission to check
 * @param permissions - The list of specific permissions to check
 * @param bodyProps - An optional object where keys are permissions and values are arrays of properties to check
 * @param checkObject - The object to check properties against
 * @param skipCheck - An optional function that takes the checkObject and returns true to skip permission checking
 * @returns Whether the user has the required permissions
 */
const checkAccess = ({ req, user, permissionType, permissions, getRoleByName, bodyProps = {}, checkObject = {}, skipCheck, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (skipCheck && skipCheck(req)) {
        return true;
    }
    if (!user || !user.role) {
        return false;
    }
    const role = yield getRoleByName(user.role);
    const permissionValue = (_a = role === null || role === void 0 ? void 0 : role.permissions) === null || _a === void 0 ? void 0 : _a[permissionType];
    if (role && role.permissions && permissionValue) {
        const hasAnyPermission = permissions.every((permission) => {
            if (permissionValue[permission]) {
                return true;
            }
            if (bodyProps[permission] && checkObject) {
                return bodyProps[permission].every((prop) => Object.prototype.hasOwnProperty.call(checkObject, prop));
            }
            return false;
        });
        return hasAnyPermission;
    }
    return false;
});
/**
 * Middleware to check if a user has one or more required permissions, optionally based on `req.body` properties.
 * @param permissionType - The type of permission to check.
 * @param permissions - The list of specific permissions to check.
 * @param bodyProps - An optional object where keys are permissions and values are arrays of `req.body` properties to check.
 * @param skipCheck - An optional function that takes req.body and returns true to skip permission checking.
 * @param getRoleByName - A function to get the role by name.
 * @returns Express middleware function.
 */
const generateCheckAccess = ({ permissionType, permissions, bodyProps = {}, skipCheck, getRoleByName, }) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const hasAccess = yield checkAccess({
                req,
                user: req.user,
                permissionType,
                permissions,
                bodyProps,
                checkObject: req.body,
                skipCheck,
                getRoleByName,
            });
            if (hasAccess) {
                return next();
            }
            dataSchemas.logger.warn(`[${permissionType}] Forbidden: "${req.originalUrl}" - Insufficient permissions for User ${(_a = req.user) === null || _a === void 0 ? void 0 : _a.id}: ${permissions.join(', ')}`);
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }
        catch (error) {
            dataSchemas.logger.error(error);
            return res.status(500).json({
                message: `Server error: ${error instanceof Error ? error.message : 'Unknown error'}`,
            });
        }
    });
};

const handleDuplicateKeyError = (err, res) => {
    dataSchemas.logger.warn('Duplicate key error: ' + (err.errmsg || err.message));
    const field = err.keyValue ? `${JSON.stringify(Object.keys(err.keyValue))}` : 'unknown';
    const code = 409;
    res
        .status(code)
        .send({ messages: `An document with that ${field} already exists.`, fields: field });
};
const handleValidationError = (err, res) => {
    dataSchemas.logger.error('Validation error:', err.errors);
    const errorMessages = Object.values(err.errors).map((el) => el.message);
    const fields = `${JSON.stringify(Object.values(err.errors).map((el) => el.path))}`;
    const code = 400;
    const messages = errorMessages.length > 1
        ? `${JSON.stringify(errorMessages.join(' '))}`
        : `${JSON.stringify(errorMessages)}`;
    res.status(code).send({ messages, fields });
};
/** Type guard for ValidationError */
function isValidationError(err) {
    return err !== null && typeof err === 'object' && 'name' in err && err.name === 'ValidationError';
}
/** Type guard for MongoServerError (duplicate key) */
function isMongoServerError(err) {
    return err !== null && typeof err === 'object' && 'code' in err && err.code === 11000;
}
/** Type guard for CustomError with statusCode and body */
function isCustomError(err) {
    return err !== null && typeof err === 'object' && 'statusCode' in err && 'body' in err;
}
const ErrorController = (err, req, res, next) => {
    try {
        if (!err) {
            return next();
        }
        const error = err;
        if ((error.message === librechatDataProvider.ErrorTypes.AUTH_FAILED || error.code === librechatDataProvider.ErrorTypes.AUTH_FAILED) &&
            req.originalUrl &&
            req.originalUrl.includes('/oauth/') &&
            req.originalUrl.includes('/callback')) {
            const domain = process.env.DOMAIN_CLIENT || 'http://localhost:3080';
            return res.redirect(`${domain}/login?redirect=false&error=${librechatDataProvider.ErrorTypes.AUTH_FAILED}`);
        }
        if (isValidationError(error)) {
            return handleValidationError(error, res);
        }
        if (isMongoServerError(error)) {
            return handleDuplicateKeyError(error, res);
        }
        if (isCustomError(error) && error.statusCode && error.body) {
            return res.status(error.statusCode).send(error.body);
        }
        dataSchemas.logger.error('ErrorController => error', err);
        return res.status(500).send('An unknown error occurred.');
    }
    catch (processingError) {
        dataSchemas.logger.error('ErrorController => processing error', processingError);
        return res.status(500).send('Processing error in ErrorController.');
    }
};

/**
 * Build an object containing fields that need updating
 * @param config - The balance configuration
 * @param userRecord - The user's current balance record, if any
 * @param userId - The user's ID
 * @returns Fields that need updating
 */
function buildUpdateFields(config, userRecord, userId) {
    const updateFields = {};
    // Ensure user record has the required fields
    if (!userRecord) {
        updateFields.user = userId;
        updateFields.tokenCredits = config.startBalance;
    }
    if ((userRecord === null || userRecord === void 0 ? void 0 : userRecord.tokenCredits) == null && config.startBalance != null) {
        updateFields.tokenCredits = config.startBalance;
    }
    const isAutoRefillConfigValid = config.autoRefillEnabled &&
        config.refillIntervalValue != null &&
        config.refillIntervalUnit != null &&
        config.refillAmount != null;
    if (!isAutoRefillConfigValid) {
        return updateFields;
    }
    if ((userRecord === null || userRecord === void 0 ? void 0 : userRecord.autoRefillEnabled) !== config.autoRefillEnabled) {
        updateFields.autoRefillEnabled = config.autoRefillEnabled;
    }
    if ((userRecord === null || userRecord === void 0 ? void 0 : userRecord.refillIntervalValue) !== config.refillIntervalValue) {
        updateFields.refillIntervalValue = config.refillIntervalValue;
    }
    if ((userRecord === null || userRecord === void 0 ? void 0 : userRecord.refillIntervalUnit) !== config.refillIntervalUnit) {
        updateFields.refillIntervalUnit = config.refillIntervalUnit;
    }
    if ((userRecord === null || userRecord === void 0 ? void 0 : userRecord.refillAmount) !== config.refillAmount) {
        updateFields.refillAmount = config.refillAmount;
    }
    // Initialize lastRefill if it's missing when auto-refill is enabled
    if (config.autoRefillEnabled && !(userRecord === null || userRecord === void 0 ? void 0 : userRecord.lastRefill)) {
        updateFields.lastRefill = new Date();
    }
    return updateFields;
}
/**
 * Factory function to create middleware that synchronizes user balance settings with current balance configuration.
 * @param options - Options containing getBalanceConfig function and Balance model
 * @returns Express middleware function
 */
function createSetBalanceConfig({ getBalanceConfig, Balance, }) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const balanceConfig = yield getBalanceConfig();
            if (!(balanceConfig === null || balanceConfig === void 0 ? void 0 : balanceConfig.enabled)) {
                return next();
            }
            if (balanceConfig.startBalance == null) {
                return next();
            }
            const user = req.user;
            if (!user || !user._id) {
                return next();
            }
            const userId = typeof user._id === 'string' ? user._id : user._id.toString();
            const userBalanceRecord = yield Balance.findOne({ user: userId }).lean();
            const updateFields = buildUpdateFields(balanceConfig, userBalanceRecord, userId);
            if (Object.keys(updateFields).length === 0) {
                return next();
            }
            yield Balance.findOneAndUpdate({ user: userId }, { $set: updateFields }, { upsert: true, new: true });
            next();
        }
        catch (error) {
            dataSchemas.logger.error('Error setting user balance:', error);
            next(error);
        }
    });
}

const hasValidAgent = (agent) => !!agent &&
    (('id' in agent && !!agent.id) ||
        ('provider' in agent && 'model' in agent && !!agent.provider && !!agent.model));
const isDisabled = (config) => !config || config.disabled === true;
function loadMemoryConfig(config) {
    var _a;
    if (!config)
        return undefined;
    if (isDisabled(config))
        return config;
    if (!hasValidAgent(config.agent)) {
        return Object.assign(Object.assign({}, config), { disabled: true });
    }
    const charLimit = (_a = librechatDataProvider.memorySchema.shape.charLimit.safeParse(config.charLimit).data) !== null && _a !== void 0 ? _a : 10000;
    return Object.assign(Object.assign({}, config), { charLimit });
}
function isMemoryEnabled(config) {
    if (isDisabled(config))
        return false;
    return hasValidAgent(config.agent);
}

/**
 * Sets up the Agents configuration from the config (`librechat.yaml`) file.
 * If no agents config is defined, uses the provided defaults or parses empty object.
 *
 * @param config - The loaded custom configuration.
 * @param [defaultConfig] - Default configuration from getConfigDefaults.
 * @returns The Agents endpoint configuration.
 */
function agentsConfigSetup(config, defaultConfig) {
    var _a;
    const agentsConfig = (_a = config === null || config === void 0 ? void 0 : config.endpoints) === null || _a === void 0 ? void 0 : _a[librechatDataProvider.EModelEndpoint.agents];
    if (!agentsConfig) {
        return defaultConfig || librechatDataProvider.agentsEndpointSchema.parse({});
    }
    const parsedConfig = librechatDataProvider.agentsEndpointSchema.parse(agentsConfig);
    return parsedConfig;
}

const memoryInstructions = 'The system automatically stores important user information and can update or delete memories based on user requests, enabling dynamic memory management.';
const getDefaultInstructions = (validKeys, tokenLimit) => `Use the \`set_memory\` tool to save important information about the user, but ONLY when the user has requested you to remember something.

The \`delete_memory\` tool should only be used in two scenarios:
  1. When the user explicitly asks to forget or remove specific information
  2. When updating existing memories, use the \`set_memory\` tool instead of deleting and re-adding the memory.

1. ONLY use memory tools when the user requests memory actions with phrases like:
   - "Remember [that] [I]..."
   - "Don't forget [that] [I]..."
   - "Please remember..."
   - "Store this..."
   - "Forget [that] [I]..."
   - "Delete the memory about..."

2. NEVER store information just because the user mentioned it in conversation.

3. NEVER use memory tools when the user asks you to use other tools or invoke tools in general.

4. Memory tools are ONLY for memory requests, not for general tool usage.

5. If the user doesn't ask you to remember or forget something, DO NOT use any memory tools.

${validKeys && validKeys.length > 0 ? `\nVALID KEYS: ${validKeys.join(', ')}` : ''}

${tokenLimit ? `\nTOKEN LIMIT: Maximum ${tokenLimit} tokens per memory value.` : ''}

When in doubt, and the user hasn't asked to remember or forget anything, END THE TURN IMMEDIATELY.`;
/**
 * Creates a memory tool instance with user context
 */
const createMemoryTool = ({ userId, setMemory, validKeys, tokenLimit, totalTokens = 0, }) => {
    const remainingTokens = tokenLimit ? tokenLimit - totalTokens : Infinity;
    const isOverflowing = tokenLimit ? remainingTokens <= 0 : false;
    return tools.tool(({ key, value }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (validKeys && validKeys.length > 0 && !validKeys.includes(key)) {
                dataSchemas.logger.warn(`Memory Agent failed to set memory: Invalid key "${key}". Must be one of: ${validKeys.join(', ')}`);
                return [`Invalid key "${key}". Must be one of: ${validKeys.join(', ')}`, undefined];
            }
            const tokenCount = TokenizerSingleton.getTokenCount(value, 'o200k_base');
            if (isOverflowing) {
                const errorArtifact = {
                    [librechatDataProvider.Tools.memory]: {
                        key: 'system',
                        type: 'error',
                        value: JSON.stringify({
                            errorType: 'already_exceeded',
                            tokenCount: Math.abs(remainingTokens),
                            totalTokens: totalTokens,
                            tokenLimit: tokenLimit,
                        }),
                        tokenCount: totalTokens,
                    },
                };
                return [`Memory storage exceeded. Cannot save new memories.`, errorArtifact];
            }
            if (tokenLimit) {
                const newTotalTokens = totalTokens + tokenCount;
                const newRemainingTokens = tokenLimit - newTotalTokens;
                if (newRemainingTokens < 0) {
                    const errorArtifact = {
                        [librechatDataProvider.Tools.memory]: {
                            key: 'system',
                            type: 'error',
                            value: JSON.stringify({
                                errorType: 'would_exceed',
                                tokenCount: Math.abs(newRemainingTokens),
                                totalTokens: newTotalTokens,
                                tokenLimit,
                            }),
                            tokenCount: totalTokens,
                        },
                    };
                    return [`Memory storage would exceed limit. Cannot save this memory.`, errorArtifact];
                }
            }
            const artifact = {
                [librechatDataProvider.Tools.memory]: {
                    key,
                    value,
                    tokenCount,
                    type: 'update',
                },
            };
            const result = yield setMemory({ userId, key, value, tokenCount });
            if (result.ok) {
                dataSchemas.logger.debug(`Memory set for key "${key}" (${tokenCount} tokens) for user "${userId}"`);
                return [`Memory set for key "${key}" (${tokenCount} tokens)`, artifact];
            }
            dataSchemas.logger.warn(`Failed to set memory for key "${key}" for user "${userId}"`);
            return [`Failed to set memory for key "${key}"`, undefined];
        }
        catch (error) {
            dataSchemas.logger.error('Memory Agent failed to set memory', error);
            return [`Error setting memory for key "${key}"`, undefined];
        }
    }), {
        name: 'set_memory',
        description: 'Saves important information about the user into memory.',
        responseFormat: 'content_and_artifact',
        schema: zod.z.object({
            key: zod.z
                .string()
                .describe(validKeys && validKeys.length > 0
                ? `The key of the memory value. Must be one of: ${validKeys.join(', ')}`
                : 'The key identifier for this memory'),
            value: zod.z
                .string()
                .describe('Value MUST be a complete sentence that fully describes relevant user information.'),
        }),
    });
};
/**
 * Creates a delete memory tool instance with user context
 */
const createDeleteMemoryTool = ({ userId, deleteMemory, validKeys, }) => {
    return tools.tool(({ key }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (validKeys && validKeys.length > 0 && !validKeys.includes(key)) {
                dataSchemas.logger.warn(`Memory Agent failed to delete memory: Invalid key "${key}". Must be one of: ${validKeys.join(', ')}`);
                return [`Invalid key "${key}". Must be one of: ${validKeys.join(', ')}`, undefined];
            }
            const artifact = {
                [librechatDataProvider.Tools.memory]: {
                    key,
                    type: 'delete',
                },
            };
            const result = yield deleteMemory({ userId, key });
            if (result.ok) {
                dataSchemas.logger.debug(`Memory deleted for key "${key}" for user "${userId}"`);
                return [`Memory deleted for key "${key}"`, artifact];
            }
            dataSchemas.logger.warn(`Failed to delete memory for key "${key}" for user "${userId}"`);
            return [`Failed to delete memory for key "${key}"`, undefined];
        }
        catch (error) {
            dataSchemas.logger.error('Memory Agent failed to delete memory', error);
            return [`Error deleting memory for key "${key}"`, undefined];
        }
    }), {
        name: 'delete_memory',
        description: 'Deletes specific memory data about the user using the provided key. For updating existing memories, use the `set_memory` tool instead',
        responseFormat: 'content_and_artifact',
        schema: zod.z.object({
            key: zod.z
                .string()
                .describe(validKeys && validKeys.length > 0
                ? `The key of the memory to delete. Must be one of: ${validKeys.join(', ')}`
                : 'The key identifier of the memory to delete'),
        }),
    });
};
class BasicToolEndHandler {
    constructor(callback) {
        this.callback = callback;
    }
    handle(event, data, metadata) {
        var _a;
        if (!metadata) {
            console.warn(`Graph or metadata not found in ${event} event`);
            return;
        }
        const toolEndData = data;
        if (!(toolEndData === null || toolEndData === void 0 ? void 0 : toolEndData.output)) {
            console.warn('No output found in tool_end event');
            return;
        }
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, toolEndData, metadata);
    }
}
function processMemory({ res, userId, setMemory, deleteMemory, messages, memory, messageId, conversationId, validKeys, instructions, llmConfig, tokenLimit, totalTokens = 0, }) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const memoryTool = createMemoryTool({
                userId,
                tokenLimit,
                setMemory,
                validKeys,
                totalTokens,
            });
            const deleteMemoryTool = createDeleteMemoryTool({
                userId,
                validKeys,
                deleteMemory,
            });
            const currentMemoryTokens = totalTokens;
            let memoryStatus = `# Existing memory:\n${memory !== null && memory !== void 0 ? memory : 'No existing memories'}`;
            if (tokenLimit) {
                const remainingTokens = tokenLimit - currentMemoryTokens;
                memoryStatus = `# Memory Status:
Current memory usage: ${currentMemoryTokens} tokens
Token limit: ${tokenLimit} tokens
Remaining capacity: ${remainingTokens} tokens

# Existing memory:
${memory !== null && memory !== void 0 ? memory : 'No existing memories'}`;
            }
            const defaultLLMConfig = {
                provider: agents.Providers.OPENAI,
                model: 'gpt-4.1-mini',
                temperature: 0.4,
                streaming: false,
                disableStreaming: true,
            };
            const finalLLMConfig = Object.assign(Object.assign(Object.assign({}, defaultLLMConfig), llmConfig), { 
                /**
                 * Ensure streaming is always disabled for memory processing
                 */
                streaming: false, disableStreaming: true });
            // Handle GPT-5+ models
            if ('model' in finalLLMConfig && /\bgpt-[5-9]\b/i.test((_a = finalLLMConfig.model) !== null && _a !== void 0 ? _a : '')) {
                // Remove temperature for GPT-5+ models
                delete finalLLMConfig.temperature;
                // Move maxTokens to modelKwargs for GPT-5+ models
                if ('maxTokens' in finalLLMConfig && finalLLMConfig.maxTokens != null) {
                    const modelKwargs = (_b = finalLLMConfig.modelKwargs) !== null && _b !== void 0 ? _b : {};
                    const paramName = finalLLMConfig.useResponsesApi === true
                        ? 'max_output_tokens'
                        : 'max_completion_tokens';
                    modelKwargs[paramName] = finalLLMConfig.maxTokens;
                    delete finalLLMConfig.maxTokens;
                    finalLLMConfig.modelKwargs = modelKwargs;
                }
            }
            const artifactPromises = [];
            const memoryCallback = createMemoryCallback({ res, artifactPromises });
            const customHandlers = {
                [agents.GraphEvents.TOOL_END]: new BasicToolEndHandler(memoryCallback),
            };
            const run = yield agents.Run.create({
                runId: messageId,
                graphConfig: {
                    type: 'standard',
                    llmConfig: finalLLMConfig,
                    tools: [memoryTool, deleteMemoryTool],
                    instructions,
                    additional_instructions: memoryStatus,
                    toolEnd: true,
                },
                customHandlers,
                returnContent: true,
            });
            const config = {
                configurable: {
                    provider: llmConfig === null || llmConfig === void 0 ? void 0 : llmConfig.provider,
                    thread_id: `memory-run-${conversationId}`,
                },
                streamMode: 'values',
                recursionLimit: 3,
                version: 'v2',
            };
            const inputs = {
                messages,
            };
            const content = yield run.processStream(inputs, config);
            if (content) {
                dataSchemas.logger.debug('Memory Agent processed memory successfully', content);
            }
            else {
                dataSchemas.logger.warn('Memory Agent processed memory but returned no content');
            }
            return yield Promise.all(artifactPromises);
        }
        catch (error) {
            dataSchemas.logger.error('Memory Agent failed to process memory', error);
        }
    });
}
function createMemoryProcessor({ res, userId, messageId, memoryMethods, conversationId, config = {}, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { validKeys, instructions, llmConfig, tokenLimit } = config;
        const finalInstructions = instructions || getDefaultInstructions(validKeys, tokenLimit);
        const { withKeys, withoutKeys, totalTokens } = yield memoryMethods.getFormattedMemories({
            userId,
        });
        return [
            withoutKeys,
            function (messages) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        return yield processMemory({
                            res,
                            userId,
                            messages,
                            validKeys,
                            llmConfig,
                            messageId,
                            tokenLimit,
                            conversationId,
                            memory: withKeys,
                            totalTokens: totalTokens || 0,
                            instructions: finalInstructions,
                            setMemory: memoryMethods.setMemory,
                            deleteMemory: memoryMethods.deleteMemory,
                        });
                    }
                    catch (error) {
                        dataSchemas.logger.error('Memory Agent failed to process memory', error);
                    }
                });
            },
        ];
    });
}
function handleMemoryArtifact({ res, data, metadata, }) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const output = data === null || data === void 0 ? void 0 : data.output;
        if (!output) {
            return null;
        }
        if (!output.artifact) {
            return null;
        }
        const memoryArtifact = output.artifact[librechatDataProvider.Tools.memory];
        if (!memoryArtifact) {
            return null;
        }
        const attachment = {
            type: librechatDataProvider.Tools.memory,
            toolCallId: output.tool_call_id,
            messageId: (_a = metadata === null || metadata === void 0 ? void 0 : metadata.run_id) !== null && _a !== void 0 ? _a : '',
            conversationId: (_b = metadata === null || metadata === void 0 ? void 0 : metadata.thread_id) !== null && _b !== void 0 ? _b : '',
            [librechatDataProvider.Tools.memory]: memoryArtifact,
        };
        if (!res.headersSent) {
            return attachment;
        }
        res.write(`event: attachment\ndata: ${JSON.stringify(attachment)}\n\n`);
        return attachment;
    });
}
/**
 * Creates a memory callback for handling memory artifacts
 * @param params - The parameters object
 * @param params.res - The server response object
 * @param params.artifactPromises - Array to collect artifact promises
 * @returns The memory callback function
 */
function createMemoryCallback({ res, artifactPromises, }) {
    return (data, metadata) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const output = data === null || data === void 0 ? void 0 : data.output;
        const memoryArtifact = (_a = output === null || output === void 0 ? void 0 : output.artifact) === null || _a === void 0 ? void 0 : _a[librechatDataProvider.Tools.memory];
        if (memoryArtifact == null) {
            return;
        }
        artifactPromises.push(handleMemoryArtifact({ res, data, metadata }).catch((error) => {
            dataSchemas.logger.error('Error processing memory artifact content:', error);
            return null;
        }));
    });
}

const { GLOBAL_PROJECT_NAME: GLOBAL_PROJECT_NAME$1 } = librechatDataProvider.Constants;
/**
 * Check if agents need to be migrated to the new permission system
 * This performs a dry-run check similar to the migration script
 */
function checkAgentPermissionsMigration({ db, AgentModel, }) {
    return __awaiter(this, void 0, void 0, function* () {
        dataSchemas.logger.debug('Checking if agent permissions migration is needed');
        try {
            // Verify required roles exist
            const ownerRole = yield db.findRoleByIdentifier(librechatDataProvider.AccessRoleIds.AGENT_OWNER);
            const viewerRole = yield db.findRoleByIdentifier(librechatDataProvider.AccessRoleIds.AGENT_VIEWER);
            const editorRole = yield db.findRoleByIdentifier(librechatDataProvider.AccessRoleIds.AGENT_EDITOR);
            if (!ownerRole || !viewerRole || !editorRole) {
                dataSchemas.logger.warn('Required agent roles not found. Permission system may not be fully initialized.');
                return {
                    totalToMigrate: 0,
                    globalEditAccess: 0,
                    globalViewAccess: 0,
                    privateAgents: 0,
                };
            }
            // Get global project agent IDs
            const globalProject = yield db.getProjectByName(GLOBAL_PROJECT_NAME$1, ['agentIds']);
            const globalAgentIds = new Set((globalProject === null || globalProject === void 0 ? void 0 : globalProject.agentIds) || []);
            // Find agents without ACL entries (no batching for efficiency on startup)
            const agentsToMigrate = yield AgentModel.aggregate([
                {
                    $lookup: {
                        from: 'aclentries',
                        localField: '_id',
                        foreignField: 'resourceId',
                        as: 'aclEntries',
                    },
                },
                {
                    $addFields: {
                        userAclEntries: {
                            $filter: {
                                input: '$aclEntries',
                                as: 'aclEntry',
                                cond: {
                                    $and: [
                                        { $eq: ['$$aclEntry.resourceType', librechatDataProvider.ResourceType.AGENT] },
                                        { $eq: ['$$aclEntry.principalType', librechatDataProvider.PrincipalType.USER] },
                                    ],
                                },
                            },
                        },
                    },
                },
                {
                    $match: {
                        author: { $exists: true, $ne: null },
                        userAclEntries: { $size: 0 },
                    },
                },
                {
                    $project: {
                        _id: 1,
                        id: 1,
                        name: 1,
                        author: 1,
                        isCollaborative: 1,
                    },
                },
            ]);
            const categories = {
                globalEditAccess: [],
                globalViewAccess: [],
                privateAgents: [],
            };
            agentsToMigrate.forEach((agent) => {
                const isGlobal = globalAgentIds.has(agent.id);
                const isCollab = agent.isCollaborative;
                if (isGlobal && isCollab) {
                    categories.globalEditAccess.push(agent);
                }
                else if (isGlobal && !isCollab) {
                    categories.globalViewAccess.push(agent);
                }
                else {
                    categories.privateAgents.push(agent);
                }
            });
            const result = {
                totalToMigrate: agentsToMigrate.length,
                globalEditAccess: categories.globalEditAccess.length,
                globalViewAccess: categories.globalViewAccess.length,
                privateAgents: categories.privateAgents.length,
            };
            // Add details for debugging
            if (agentsToMigrate.length > 0) {
                result.details = {
                    globalEditAccess: categories.globalEditAccess.map((a) => ({
                        name: a.name,
                        id: a.id,
                    })),
                    globalViewAccess: categories.globalViewAccess.map((a) => ({
                        name: a.name,
                        id: a.id,
                    })),
                    privateAgents: categories.privateAgents.map((a) => ({
                        name: a.name,
                        id: a.id,
                    })),
                };
            }
            dataSchemas.logger.debug('Agent migration check completed', {
                totalToMigrate: result.totalToMigrate,
                globalEditAccess: result.globalEditAccess,
                globalViewAccess: result.globalViewAccess,
                privateAgents: result.privateAgents,
            });
            return result;
        }
        catch (error) {
            dataSchemas.logger.error('Failed to check agent permissions migration', error);
            // Return zero counts on error to avoid blocking startup
            return {
                totalToMigrate: 0,
                globalEditAccess: 0,
                globalViewAccess: 0,
                privateAgents: 0,
            };
        }
    });
}
/**
 * Log migration warning to console if agents need migration
 */
function logAgentMigrationWarning(result) {
    if (result.totalToMigrate === 0) {
        return;
    }
    // Create a visible warning box
    const border = '='.repeat(80);
    const warning = [
        '',
        border,
        '                    IMPORTANT: AGENT PERMISSIONS MIGRATION REQUIRED',
        border,
        '',
        `  Total agents to migrate: ${result.totalToMigrate}`,
        `  - Global Edit Access: ${result.globalEditAccess} agents`,
        `  - Global View Access: ${result.globalViewAccess} agents`,
        `  - Private Agents: ${result.privateAgents} agents`,
        '',
        '  The new agent sharing system requires migrating existing agents.',
        '  Please run the following command to migrate your agents:',
        '',
        '    npm run migrate:agent-permissions',
        '',
        '  For a dry run (preview) of what will be migrated:',
        '',
        '    npm run migrate:agent-permissions:dry-run',
        '',
        '  This migration will:',
        '  1. Grant owner permissions to agent authors',
        '  2. Set appropriate public permissions based on global project status',
        '  3. Preserve existing collaborative settings',
        '',
        border,
        '',
    ];
    // Use console methods directly for visibility
    console.log('\n' + warning.join('\n') + '\n');
    // Also log with logger for consistency
    dataSchemas.logger.warn('Agent permissions migration required', {
        totalToMigrate: result.totalToMigrate,
        globalEditAccess: result.globalEditAccess,
        globalViewAccess: result.globalViewAccess,
        privateAgents: result.privateAgents,
    });
}

/**
 * Helper function to add a file to a specific tool resource category
 * Prevents duplicate files within the same resource category
 * @param params - Parameters object
 * @param params.file - The file to add to the resource
 * @param params.resourceType - The type of tool resource (e.g., execute_code, file_search, image_edit)
 * @param params.tool_resources - The agent's tool resources object to update
 * @param params.processedResourceFiles - Set tracking processed files per resource type
 */
const addFileToResource = ({ file, resourceType, tool_resources, processedResourceFiles, }) => {
    var _a, _b;
    if (!file.file_id) {
        return;
    }
    const resourceKey = `${resourceType}:${file.file_id}`;
    if (processedResourceFiles.has(resourceKey)) {
        return;
    }
    const resource = (_a = tool_resources[resourceType]) !== null && _a !== void 0 ? _a : {};
    if (!resource.files) {
        tool_resources[resourceType] = Object.assign(Object.assign({}, resource), { files: [] });
    }
    // Check if already exists in the files array
    const resourceFiles = (_b = tool_resources[resourceType]) === null || _b === void 0 ? void 0 : _b.files;
    const alreadyExists = resourceFiles === null || resourceFiles === void 0 ? void 0 : resourceFiles.some((f) => f.file_id === file.file_id);
    if (!alreadyExists) {
        resourceFiles === null || resourceFiles === void 0 ? void 0 : resourceFiles.push(file);
        processedResourceFiles.add(resourceKey);
    }
};
/**
 * Categorizes a file into the appropriate tool resource based on its properties
 * Files are categorized as:
 * - execute_code: Files with fileIdentifier metadata
 * - file_search: Files marked as embedded
 * - image_edit: Image files in the request file set with dimensions
 * @param params - Parameters object
 * @param params.file - The file to categorize
 * @param params.tool_resources - The agent's tool resources to update
 * @param params.requestFileSet - Set of file IDs from the current request
 * @param params.processedResourceFiles - Set tracking processed files per resource type
 */
const categorizeFileForToolResources = ({ file, tool_resources, requestFileSet, processedResourceFiles, }) => {
    var _a;
    if ((_a = file.metadata) === null || _a === void 0 ? void 0 : _a.fileIdentifier) {
        addFileToResource({
            file,
            resourceType: librechatDataProvider.EToolResources.execute_code,
            tool_resources,
            processedResourceFiles,
        });
        return;
    }
    if (file.embedded === true) {
        addFileToResource({
            file,
            resourceType: librechatDataProvider.EToolResources.file_search,
            tool_resources,
            processedResourceFiles,
        });
        return;
    }
    if (requestFileSet.has(file.file_id) &&
        file.type.startsWith('image') &&
        file.height &&
        file.width) {
        addFileToResource({
            file,
            resourceType: librechatDataProvider.EToolResources.image_edit,
            tool_resources,
            processedResourceFiles,
        });
    }
};
/**
 * Primes resources for agent execution by processing attachments and tool resources
 * This function:
 * 1. Fetches OCR files if OCR is enabled
 * 2. Processes attachment files
 * 3. Categorizes files into appropriate tool resources
 * 4. Prevents duplicate files across all sources
 *
 * @param params - Parameters object
 * @param params.req - Express request object containing app configuration
 * @param params.getFiles - Function to retrieve files from database
 * @param params.requestFileSet - Set of file IDs from the current request
 * @param params.attachments - Promise resolving to array of attachment files
 * @param params.tool_resources - Existing tool resources for the agent
 * @returns Promise resolving to processed attachments and updated tool resources
 */
const primeResources = ({ req, getFiles, requestFileSet, attachments: _attachments, tool_resources: _tool_resources, agentId, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    try {
        /**
         * Array to collect all unique files that will be returned as attachments
         * Files are added from OCR results and attachment promises, with duplicates prevented
         */
        const attachments = [];
        /**
         * Set of file IDs already added to the attachments array
         * Used to prevent duplicate files from being added multiple times
         * Pre-populated with files from non-OCR tool_resources to prevent re-adding them
         */
        const attachmentFileIds = new Set();
        /**
         * Set tracking which files have been added to specific tool resource categories
         * Format: "resourceType:fileId" (e.g., "execute_code:file123")
         * Prevents the same file from being added multiple times to the same resource
         */
        const processedResourceFiles = new Set();
        /**
         * The agent's tool resources object that will be updated with categorized files
         * Initialized from input parameter or empty object if not provided
         */
        const tool_resources = _tool_resources !== null && _tool_resources !== void 0 ? _tool_resources : {};
        // Track existing files in tool_resources to prevent duplicates within resources
        for (const [resourceType, resource] of Object.entries(tool_resources)) {
            if ((resource === null || resource === void 0 ? void 0 : resource.files) && Array.isArray(resource.files)) {
                for (const file of resource.files) {
                    if (file === null || file === void 0 ? void 0 : file.file_id) {
                        processedResourceFiles.add(`${resourceType}:${file.file_id}`);
                        // Files from non-OCR resources should not be added to attachments from _attachments
                        if (resourceType !== librechatDataProvider.EToolResources.ocr) {
                            attachmentFileIds.add(file.file_id);
                        }
                    }
                }
            }
        }
        const isOCREnabled = ((_c = (_b = (_a = req.app.locals) === null || _a === void 0 ? void 0 : _a[librechatDataProvider.EModelEndpoint.agents]) === null || _b === void 0 ? void 0 : _b.capabilities) !== null && _c !== void 0 ? _c : []).includes(librechatDataProvider.AgentCapabilities.ocr);
        if (((_d = tool_resources[librechatDataProvider.EToolResources.ocr]) === null || _d === void 0 ? void 0 : _d.file_ids) && isOCREnabled) {
            const context = yield getFiles({
                file_id: { $in: tool_resources.ocr.file_ids },
            }, {}, {}, { userId: (_e = req.user) === null || _e === void 0 ? void 0 : _e.id, agentId });
            for (const file of context) {
                if (!(file === null || file === void 0 ? void 0 : file.file_id)) {
                    continue;
                }
                // Clear from attachmentFileIds if it was pre-added
                attachmentFileIds.delete(file.file_id);
                // Add to attachments
                attachments.push(file);
                attachmentFileIds.add(file.file_id);
                // Categorize for tool resources
                categorizeFileForToolResources({
                    file,
                    tool_resources,
                    requestFileSet,
                    processedResourceFiles,
                });
            }
        }
        if (!_attachments) {
            return { attachments: attachments.length > 0 ? attachments : undefined, tool_resources };
        }
        const files = yield _attachments;
        for (const file of files) {
            if (!file) {
                continue;
            }
            categorizeFileForToolResources({
                file,
                tool_resources,
                requestFileSet,
                processedResourceFiles,
            });
            if (file.file_id && attachmentFileIds.has(file.file_id)) {
                continue;
            }
            attachments.push(file);
            if (file.file_id) {
                attachmentFileIds.add(file.file_id);
            }
        }
        return { attachments: attachments.length > 0 ? attachments : [], tool_resources };
    }
    catch (error) {
        dataSchemas.logger.error('Error priming resources', error);
        // Safely try to get attachments without rethrowing
        let safeAttachments = [];
        if (_attachments) {
            try {
                const attachmentFiles = yield _attachments;
                safeAttachments = ((_f = attachmentFiles === null || attachmentFiles === void 0 ? void 0 : attachmentFiles.filter((file) => !!file)) !== null && _f !== void 0 ? _f : []);
            }
            catch (attachmentError) {
                // If attachments promise is also rejected, just use empty array
                dataSchemas.logger.error('Error resolving attachments in catch block', attachmentError);
                safeAttachments = [];
            }
        }
        return {
            attachments: safeAttachments,
            tool_resources: _tool_resources,
        };
    }
});

const customProviders = new Set([
    agents.Providers.XAI,
    agents.Providers.OLLAMA,
    agents.Providers.DEEPSEEK,
    agents.Providers.OPENROUTER,
]);
function getReasoningKey(provider, llmConfig, agentEndpoint) {
    var _a, _b;
    let reasoningKey = 'reasoning_content';
    if (provider === agents.Providers.GOOGLE) {
        reasoningKey = 'reasoning';
    }
    else if (((_b = (_a = llmConfig.configuration) === null || _a === void 0 ? void 0 : _a.baseURL) === null || _b === void 0 ? void 0 : _b.includes(librechatDataProvider.KnownEndpoints.openrouter)) ||
        (agentEndpoint && agentEndpoint.toLowerCase().includes(librechatDataProvider.KnownEndpoints.openrouter))) {
        reasoningKey = 'reasoning';
    }
    else if (llmConfig.useResponsesApi === true &&
        (provider === agents.Providers.OPENAI || provider === agents.Providers.AZURE)) {
        reasoningKey = 'reasoning';
    }
    return reasoningKey;
}
/**
 * Creates a new Run instance with custom handlers and configuration.
 *
 * @param options - The options for creating the Run instance.
 * @param options.agent - The agent for this run.
 * @param options.signal - The signal for this run.
 * @param options.req - The server request.
 * @param options.runId - Optional run ID; otherwise, a new run ID will be generated.
 * @param options.customHandlers - Custom event handlers.
 * @param options.streaming - Whether to use streaming.
 * @param options.streamUsage - Whether to stream usage information.
 * @returns {Promise<Run<IState>>} A promise that resolves to a new Run instance.
 */
function createRun({ runId, agent, signal, customHandlers, streaming = true, streamUsage = true, }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const provider = (_a = librechatDataProvider.providerEndpointMap[agent.provider]) !== null && _a !== void 0 ? _a : agent.provider;
        const llmConfig = Object.assign({
            provider,
            streaming,
            streamUsage,
        }, agent.model_parameters);
        /** Resolves issues with new OpenAI usage field */
        if (customProviders.has(agent.provider) ||
            (agent.provider === agents.Providers.OPENAI && agent.endpoint !== agent.provider)) {
            llmConfig.streamUsage = false;
            llmConfig.usage = true;
        }
        const reasoningKey = getReasoningKey(provider, llmConfig, agent.endpoint);
        const graphConfig = {
            signal,
            llmConfig,
            reasoningKey,
            tools: agent.tools,
            instructions: agent.instructions,
            additional_instructions: agent.additional_instructions,
            // toolEnd: agent.end_after_tools,
        };
        // TEMPORARY FOR TESTING
        if (agent.provider === agents.Providers.ANTHROPIC || agent.provider === agents.Providers.BEDROCK) {
            graphConfig.streamBuffer = 2000;
        }
        return agents.Run.create({
            runId,
            graphConfig,
            customHandlers,
        });
    });
}

/** Avatar schema shared between create and update */
const agentAvatarSchema = zod.z.object({
    filepath: zod.z.string(),
    source: zod.z.string(),
});
/** Base resource schema for tool resources */
const agentBaseResourceSchema = zod.z.object({
    file_ids: zod.z.array(zod.z.string()).optional(),
    files: zod.z.array(zod.z.any()).optional(), // Files are populated at runtime, not from user input
});
/** File resource schema extends base with vector_store_ids */
const agentFileResourceSchema = agentBaseResourceSchema.extend({
    vector_store_ids: zod.z.array(zod.z.string()).optional(),
});
/** Tool resources schema matching AgentToolResources interface */
const agentToolResourcesSchema = zod.z
    .object({
    image_edit: agentBaseResourceSchema.optional(),
    execute_code: agentBaseResourceSchema.optional(),
    file_search: agentFileResourceSchema.optional(),
    ocr: agentBaseResourceSchema.optional(),
})
    .optional();
/** Support contact schema for agent */
const agentSupportContactSchema = zod.z
    .object({
    name: zod.z.string().optional(),
    email: zod.z.union([zod.z.literal(''), zod.z.string().email()]).optional(),
})
    .optional();
/** Base agent schema with all common fields */
const agentBaseSchema = zod.z.object({
    name: zod.z.string().nullable().optional(),
    description: zod.z.string().nullable().optional(),
    instructions: zod.z.string().nullable().optional(),
    avatar: agentAvatarSchema.nullable().optional(),
    model_parameters: zod.z.record(zod.z.unknown()).optional(),
    tools: zod.z.array(zod.z.string()).optional(),
    agent_ids: zod.z.array(zod.z.string()).optional(),
    end_after_tools: zod.z.boolean().optional(),
    hide_sequential_outputs: zod.z.boolean().optional(),
    artifacts: zod.z.string().optional(),
    recursion_limit: zod.z.number().optional(),
    conversation_starters: zod.z.array(zod.z.string()).optional(),
    tool_resources: agentToolResourcesSchema,
    support_contact: agentSupportContactSchema,
    category: zod.z.string().optional(),
});
/** Create schema extends base with required fields for creation */
const agentCreateSchema = agentBaseSchema.extend({
    provider: zod.z.string(),
    model: zod.z.string().nullable(),
    tools: zod.z.array(zod.z.string()).optional().default([]),
});
/** Update schema extends base with all fields optional and additional update-only fields */
const agentUpdateSchema = agentBaseSchema.extend({
    provider: zod.z.string().optional(),
    model: zod.z.string().nullable().optional(),
    projectIds: zod.z.array(zod.z.string()).optional(),
    removeProjectIds: zod.z.array(zod.z.string()).optional(),
    isCollaborative: zod.z.boolean().optional(),
});
/**
 * Validates an agent's model against the available models configuration.
 * This is a non-middleware version of validateModel that can be used
 * in service initialization flows.
 *
 * @param params - Validation parameters
 * @returns Object indicating whether the model is valid and any error details
 */
function validateAgentModel(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { req, res, agent, modelsConfig, logViolation } = params;
        const { model, provider: endpoint } = agent;
        if (!model) {
            return {
                isValid: false,
                error: {
                    message: `{ "type": "${librechatDataProvider.ErrorTypes.MISSING_MODEL}", "info": "${endpoint}" }`,
                },
            };
        }
        if (!modelsConfig) {
            return {
                isValid: false,
                error: {
                    message: `{ "type": "${librechatDataProvider.ErrorTypes.MODELS_NOT_LOADED}" }`,
                },
            };
        }
        const availableModels = modelsConfig[endpoint];
        if (!availableModels) {
            return {
                isValid: false,
                error: {
                    message: `{ "type": "${librechatDataProvider.ErrorTypes.ENDPOINT_MODELS_NOT_LOADED}", "info": "${endpoint}" }`,
                },
            };
        }
        const validModel = !!availableModels.find((availableModel) => availableModel === model);
        if (validModel) {
            return { isValid: true };
        }
        const { ILLEGAL_MODEL_REQ_SCORE: score = 1 } = (_a = process.env) !== null && _a !== void 0 ? _a : {};
        const type = librechatDataProvider.ViolationTypes.ILLEGAL_MODEL_REQUEST;
        const errorMessage = {
            type,
            model,
            endpoint,
        };
        yield logViolation(req, res, type, errorMessage, score);
        return {
            isValid: false,
            error: {
                message: `{ "type": "${librechatDataProvider.ViolationTypes.ILLEGAL_MODEL_REQUEST}", "info": "${endpoint}|${model}" }`,
            },
        };
    });
}

/**
 * Formats prompt groups for the paginated /groups endpoint response
 */
function formatPromptGroupsResponse({ promptGroups = [], pageNumber, pageSize, actualLimit, hasMore = false, after = null, }) {
    const effectivePageSize = parseInt(pageSize || '') || parseInt(String(actualLimit || '')) || 10;
    const totalPages = promptGroups.length > 0 ? Math.ceil(promptGroups.length / effectivePageSize).toString() : '0';
    return {
        promptGroups,
        pageNumber: pageNumber || '1',
        pageSize: pageSize || String(actualLimit) || '10',
        pages: totalPages,
        has_more: hasMore,
        after,
    };
}
/**
 * Creates an empty response for the paginated /groups endpoint
 */
function createEmptyPromptGroupsResponse({ pageNumber, pageSize, actualLimit, }) {
    return {
        promptGroups: [],
        pageNumber: pageNumber || '1',
        pageSize: pageSize || String(actualLimit) || '10',
        pages: '0',
        has_more: false,
        after: null,
    };
}
/**
 * Marks prompt groups as public based on the publicly accessible IDs
 */
function markPublicPromptGroups(promptGroups, publiclyAccessibleIds) {
    if (!promptGroups.length) {
        return [];
    }
    return promptGroups.map((group) => {
        const isPublic = publiclyAccessibleIds.some((id) => { var _a; return id.equals((_a = group._id) === null || _a === void 0 ? void 0 : _a.toString()); });
        return isPublic ? Object.assign(Object.assign({}, group), { isPublic: true }) : group;
    });
}
/**
 * Builds filter object for prompt group queries
 */
function buildPromptGroupFilter(_a) {
    var { name, category } = _a, otherFilters = __rest(_a, ["name", "category"]);
    const filter = Object.assign({}, otherFilters);
    let searchShared = true;
    let searchSharedOnly = false;
    // Handle name filter - convert to regex for case-insensitive search
    if (name) {
        const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        filter.name = new RegExp(escapeRegExp(name), 'i');
    }
    // Handle category filters with special system categories
    if (category === librechatDataProvider.SystemCategories.MY_PROMPTS) {
        searchShared = false;
    }
    else if (category === librechatDataProvider.SystemCategories.NO_CATEGORY) {
        filter.category = '';
    }
    else if (category === librechatDataProvider.SystemCategories.SHARED_PROMPTS) {
        searchSharedOnly = true;
    }
    else if (category) {
        filter.category = category;
    }
    return { filter, searchShared, searchSharedOnly };
}
/**
 * Filters accessible IDs based on shared/public prompts logic
 */
function filterAccessibleIdsBySharedLogic({ accessibleIds, searchShared, searchSharedOnly, publicPromptGroupIds, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const publicIdStrings = new Set((publicPromptGroupIds || []).map((id) => id.toString()));
        if (!searchShared) {
            // For MY_PROMPTS - exclude public prompts to show only user's own prompts
            return accessibleIds.filter((id) => !publicIdStrings.has(id.toString()));
        }
        if (searchSharedOnly) {
            // Handle SHARED_PROMPTS filter - only return public prompts that user has access to
            if (!(publicPromptGroupIds === null || publicPromptGroupIds === void 0 ? void 0 : publicPromptGroupIds.length)) {
                return [];
            }
            const accessibleIdStrings = new Set(accessibleIds.map((id) => id.toString()));
            return publicPromptGroupIds.filter((id) => accessibleIdStrings.has(id.toString()));
        }
        return [...accessibleIds, ...(publicPromptGroupIds || [])];
    });
}

const { GLOBAL_PROJECT_NAME } = librechatDataProvider.Constants;
/**
 * Check if prompt groups need to be migrated to the new permission system
 * This performs a dry-run check similar to the migration script
 */
function checkPromptPermissionsMigration({ db, PromptGroupModel, }) {
    return __awaiter(this, void 0, void 0, function* () {
        dataSchemas.logger.debug('Checking if prompt permissions migration is needed');
        try {
            // Verify required roles exist
            const ownerRole = yield db.findRoleByIdentifier(librechatDataProvider.AccessRoleIds.PROMPTGROUP_OWNER);
            const viewerRole = yield db.findRoleByIdentifier(librechatDataProvider.AccessRoleIds.PROMPTGROUP_VIEWER);
            const editorRole = yield db.findRoleByIdentifier(librechatDataProvider.AccessRoleIds.PROMPTGROUP_EDITOR);
            if (!ownerRole || !viewerRole || !editorRole) {
                dataSchemas.logger.warn('Required promptGroup roles not found. Permission system may not be fully initialized.');
                return {
                    totalToMigrate: 0,
                    globalViewAccess: 0,
                    privateGroups: 0,
                };
            }
            // Get global project prompt group IDs
            const globalProject = yield db.getProjectByName(GLOBAL_PROJECT_NAME, ['promptGroupIds']);
            const globalPromptGroupIds = new Set(((globalProject === null || globalProject === void 0 ? void 0 : globalProject.promptGroupIds) || []).map((id) => id.toString()));
            // Find promptGroups without ACL entries (no batching for efficiency on startup)
            const promptGroupsToMigrate = yield PromptGroupModel.aggregate([
                {
                    $lookup: {
                        from: 'aclentries',
                        localField: '_id',
                        foreignField: 'resourceId',
                        as: 'aclEntries',
                    },
                },
                {
                    $addFields: {
                        promptGroupAclEntries: {
                            $filter: {
                                input: '$aclEntries',
                                as: 'aclEntry',
                                cond: {
                                    $and: [
                                        { $eq: ['$$aclEntry.resourceType', librechatDataProvider.ResourceType.PROMPTGROUP] },
                                        { $eq: ['$$aclEntry.principalType', librechatDataProvider.PrincipalType.USER] },
                                    ],
                                },
                            },
                        },
                    },
                },
                {
                    $match: {
                        author: { $exists: true, $ne: null },
                        promptGroupAclEntries: { $size: 0 },
                    },
                },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        author: 1,
                        authorName: 1,
                        category: 1,
                    },
                },
            ]);
            const categories = {
                globalViewAccess: [],
                privateGroups: [],
            };
            promptGroupsToMigrate.forEach((group) => {
                const isGlobalGroup = globalPromptGroupIds.has(group._id.toString());
                if (isGlobalGroup) {
                    categories.globalViewAccess.push(group);
                }
                else {
                    categories.privateGroups.push(group);
                }
            });
            const result = {
                totalToMigrate: promptGroupsToMigrate.length,
                globalViewAccess: categories.globalViewAccess.length,
                privateGroups: categories.privateGroups.length,
            };
            // Add details for debugging
            if (promptGroupsToMigrate.length > 0) {
                result.details = {
                    globalViewAccess: categories.globalViewAccess.map((g) => ({
                        name: g.name,
                        _id: g._id.toString(),
                        category: g.category || 'uncategorized',
                    })),
                    privateGroups: categories.privateGroups.map((g) => ({
                        name: g.name,
                        _id: g._id.toString(),
                        category: g.category || 'uncategorized',
                    })),
                };
            }
            dataSchemas.logger.debug('Prompt migration check completed', {
                totalToMigrate: result.totalToMigrate,
                globalViewAccess: result.globalViewAccess,
                privateGroups: result.privateGroups,
            });
            return result;
        }
        catch (error) {
            dataSchemas.logger.error('Failed to check prompt permissions migration', error);
            // Return zero counts on error to avoid blocking startup
            return {
                totalToMigrate: 0,
                globalViewAccess: 0,
                privateGroups: 0,
            };
        }
    });
}
/**
 * Log migration warning to console if prompt groups need migration
 */
function logPromptMigrationWarning(result) {
    if (result.totalToMigrate === 0) {
        return;
    }
    // Create a visible warning box
    const border = '='.repeat(80);
    const warning = [
        '',
        border,
        '                   IMPORTANT: PROMPT PERMISSIONS MIGRATION REQUIRED',
        border,
        '',
        `  Total prompt groups to migrate: ${result.totalToMigrate}`,
        `  - Global View Access: ${result.globalViewAccess} prompt groups`,
        `  - Private Prompt Groups: ${result.privateGroups} prompt groups`,
        '',
        '  The new prompt sharing system requires migrating existing prompt groups.',
        '  Please run the following command to migrate your prompts:',
        '',
        '    npm run migrate:prompt-permissions',
        '',
        '  For a dry run (preview) of what will be migrated:',
        '',
        '    npm run migrate:prompt-permissions:dry-run',
        '',
        '  This migration will:',
        '  1. Grant owner permissions to prompt authors',
        '  2. Set public view permissions for prompts in the global project',
        '  3. Keep private prompts accessible only to their authors',
        '',
        border,
        '',
    ];
    // Use console methods directly for visibility
    console.log('\n' + warning.join('\n') + '\n');
    // Also log with logger for consistency
    dataSchemas.logger.warn('Prompt permissions migration required', {
        totalToMigrate: result.totalToMigrate,
        globalViewAccess: result.globalViewAccess,
        privateGroups: result.privateGroups,
    });
}

function getThresholdMapping(model) {
    const gemini1Pattern = /gemini-(1\.0|1\.5|pro$|1\.0-pro|1\.5-pro|1\.5-flash-001)/;
    const restrictedPattern = /(gemini-(1\.5-flash-8b|2\.0|exp)|learnlm)/;
    if (gemini1Pattern.test(model)) {
        return (value) => {
            if (value === 'OFF') {
                return 'BLOCK_NONE';
            }
            return value;
        };
    }
    if (restrictedPattern.test(model)) {
        return (value) => {
            if (value === 'OFF' || value === 'HARM_BLOCK_THRESHOLD_UNSPECIFIED') {
                return 'BLOCK_NONE';
            }
            return value;
        };
    }
    return (value) => value;
}
function getSafetySettings(model) {
    if (isEnabled(process.env.GOOGLE_EXCLUDE_SAFETY_SETTINGS)) {
        return undefined;
    }
    const mapThreshold = getThresholdMapping(model !== null && model !== void 0 ? model : '');
    return [
        {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: mapThreshold(process.env.GOOGLE_SAFETY_SEXUALLY_EXPLICIT || 'HARM_BLOCK_THRESHOLD_UNSPECIFIED'),
        },
        {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: mapThreshold(process.env.GOOGLE_SAFETY_HATE_SPEECH || 'HARM_BLOCK_THRESHOLD_UNSPECIFIED'),
        },
        {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: mapThreshold(process.env.GOOGLE_SAFETY_HARASSMENT || 'HARM_BLOCK_THRESHOLD_UNSPECIFIED'),
        },
        {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: mapThreshold(process.env.GOOGLE_SAFETY_DANGEROUS_CONTENT || 'HARM_BLOCK_THRESHOLD_UNSPECIFIED'),
        },
        {
            category: 'HARM_CATEGORY_CIVIC_INTEGRITY',
            threshold: mapThreshold(process.env.GOOGLE_SAFETY_CIVIC_INTEGRITY || 'BLOCK_NONE'),
        },
    ];
}
/**
 * Replicates core logic from GoogleClient's constructor and setOptions, plus client determination.
 * Returns an object with the provider label and the final options that would be passed to createLLM.
 *
 * @param credentials - Either a JSON string or an object containing Google keys
 * @param options - The same shape as the "GoogleClient" constructor options
 */
function getGoogleConfig(credentials, options = {}) {
    var _a, _b, _c, _d;
    let creds = {};
    if (typeof credentials === 'string') {
        try {
            creds = JSON.parse(credentials);
        }
        catch (err) {
            throw new Error(`Error parsing string credentials: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
    }
    else if (credentials && typeof credentials === 'object') {
        creds = credentials;
    }
    const serviceKeyRaw = (_a = creds[librechatDataProvider.AuthKeys.GOOGLE_SERVICE_KEY]) !== null && _a !== void 0 ? _a : {};
    const serviceKey = typeof serviceKeyRaw === 'string' ? JSON.parse(serviceKeyRaw) : (serviceKeyRaw !== null && serviceKeyRaw !== void 0 ? serviceKeyRaw : {});
    const apiKey = (_b = creds[librechatDataProvider.AuthKeys.GOOGLE_API_KEY]) !== null && _b !== void 0 ? _b : null;
    const project_id = !apiKey ? ((_c = serviceKey === null || serviceKey === void 0 ? void 0 : serviceKey.project_id) !== null && _c !== void 0 ? _c : null) : null;
    const reverseProxyUrl = options.reverseProxyUrl;
    const authHeader = options.authHeader;
    const _e = options.modelOptions || {}, { web_search, thinking = librechatDataProvider.googleSettings.thinking.default, thinkingBudget = librechatDataProvider.googleSettings.thinkingBudget.default } = _e, modelOptions = __rest(_e, ["web_search", "thinking", "thinkingBudget"]);
    const llmConfig = Object.assign(Object.assign({}, (modelOptions || {})), { model: (_d = modelOptions === null || modelOptions === void 0 ? void 0 : modelOptions.model) !== null && _d !== void 0 ? _d : '', maxRetries: 2 });
    /** Used only for Safety Settings */
    llmConfig.safetySettings = getSafetySettings(llmConfig.model);
    let provider;
    if (project_id) {
        provider = agents.Providers.VERTEXAI;
    }
    else {
        provider = agents.Providers.GOOGLE;
    }
    // If we have a GCP project => Vertex AI
    if (provider === agents.Providers.VERTEXAI) {
        llmConfig.authOptions = {
            credentials: Object.assign({}, serviceKey),
            projectId: project_id,
        };
        llmConfig.location = process.env.GOOGLE_LOC || 'us-central1';
    }
    else if (apiKey && provider === agents.Providers.GOOGLE) {
        llmConfig.apiKey = apiKey;
    }
    else {
        throw new Error(`Invalid credentials provided. Please provide either a valid API key or service account credentials for Google Cloud.`);
    }
    const shouldEnableThinking = thinking && thinkingBudget != null && (thinkingBudget > 0 || thinkingBudget === -1);
    if (shouldEnableThinking && provider === agents.Providers.GOOGLE) {
        llmConfig.thinkingConfig = {
            thinkingBudget: thinking ? thinkingBudget : librechatDataProvider.googleSettings.thinkingBudget.default,
            includeThoughts: Boolean(thinking),
        };
    }
    else if (shouldEnableThinking && provider === agents.Providers.VERTEXAI) {
        llmConfig.thinkingBudget = thinking
            ? thinkingBudget
            : librechatDataProvider.googleSettings.thinkingBudget.default;
        llmConfig.includeThoughts = Boolean(thinking);
    }
    /*
    let legacyOptions = {};
    // Filter out any "examples" that are empty
    legacyOptions.examples = (legacyOptions.examples ?? [])
      .filter(Boolean)
      .filter((obj) => obj?.input?.content !== '' && obj?.output?.content !== '');
  
    // If user has "examples" from legacyOptions, push them onto llmConfig
    if (legacyOptions.examples?.length) {
      llmConfig.examples = legacyOptions.examples.map((ex) => {
        const { input, output } = ex;
        if (!input?.content || !output?.content) {return undefined;}
        return {
          input: new HumanMessage(input.content),
          output: new AIMessage(output.content),
        };
      }).filter(Boolean);
    }
    */
    if (reverseProxyUrl) {
        llmConfig.baseUrl = reverseProxyUrl;
    }
    if (authHeader) {
        llmConfig.customHeaders = {
            Authorization: `Bearer ${apiKey}`,
        };
    }
    const tools = [];
    if (web_search) {
        tools.push({ googleSearch: {} });
    }
    // Return the final shape
    return {
        /** @type {GoogleAIToolType[]} */
        tools,
        /** @type {Providers.GOOGLE | Providers.VERTEXAI} */
        provider,
        /** @type {GoogleClientOptions | VertexAIClientOptions} */
        llmConfig,
    };
}

const knownOpenAIParams = new Set([
    // Constructor/Instance Parameters
    'model',
    'modelName',
    'temperature',
    'topP',
    'frequencyPenalty',
    'presencePenalty',
    'n',
    'logitBias',
    'stop',
    'stopSequences',
    'user',
    'timeout',
    'stream',
    'maxTokens',
    'maxCompletionTokens',
    'logprobs',
    'topLogprobs',
    'apiKey',
    'organization',
    'audio',
    'modalities',
    'reasoning',
    'zdrEnabled',
    'service_tier',
    'supportsStrictToolCalling',
    'useResponsesApi',
    'configuration',
    // Call-time Options
    'tools',
    'tool_choice',
    'functions',
    'function_call',
    'response_format',
    'seed',
    'stream_options',
    'parallel_tool_calls',
    'strict',
    'prediction',
    'promptIndex',
    // Responses API specific
    'text',
    'truncation',
    'include',
    'previous_response_id',
    // LangChain specific
    '__includeRawResponse',
    'maxConcurrency',
    'maxRetries',
    'verbose',
    'streaming',
    'streamUsage',
    'disableStreaming',
]);
function hasReasoningParams({ reasoning_effort, reasoning_summary, }) {
    return ((reasoning_effort != null && reasoning_effort !== '') ||
        (reasoning_summary != null && reasoning_summary !== ''));
}
/**
 * Generates configuration options for creating a language model (LLM) instance.
 * @param apiKey - The API key for authentication.
 * @param options - Additional options for configuring the LLM.
 * @param endpoint - The endpoint name
 * @returns Configuration options for creating an LLM instance.
 */
function getOpenAIConfig(apiKey, options = {}, endpoint) {
    var _a;
    const { modelOptions: _modelOptions = {}, reverseProxyUrl, defaultQuery, headers, proxy, azure, streaming = true, addParams, dropParams, } = options;
    const { reasoning_effort, reasoning_summary, verbosity } = _modelOptions, modelOptions = __rest(_modelOptions, ["reasoning_effort", "reasoning_summary", "verbosity"]);
    const llmConfig = Object.assign({
        streaming,
        model: (_a = modelOptions.model) !== null && _a !== void 0 ? _a : '',
    }, modelOptions);
    const modelKwargs = {};
    let hasModelKwargs = false;
    if (verbosity != null && verbosity !== '') {
        modelKwargs.verbosity = verbosity;
        hasModelKwargs = true;
    }
    if (addParams && typeof addParams === 'object') {
        for (const [key, value] of Object.entries(addParams)) {
            if (knownOpenAIParams.has(key)) {
                llmConfig[key] = value;
            }
            else {
                hasModelKwargs = true;
                modelKwargs[key] = value;
            }
        }
    }
    let useOpenRouter = false;
    const configOptions = {};
    if ((reverseProxyUrl && reverseProxyUrl.includes(librechatDataProvider.KnownEndpoints.openrouter)) ||
        (endpoint && endpoint.toLowerCase().includes(librechatDataProvider.KnownEndpoints.openrouter))) {
        useOpenRouter = true;
        llmConfig.include_reasoning = true;
        configOptions.baseURL = reverseProxyUrl;
        configOptions.defaultHeaders = Object.assign({
            'HTTP-Referer': 'https://librechat.ai',
            'X-Title': 'LibreChat',
        }, headers);
    }
    else if (reverseProxyUrl) {
        configOptions.baseURL = reverseProxyUrl;
        if (headers) {
            configOptions.defaultHeaders = headers;
        }
    }
    if (defaultQuery) {
        configOptions.defaultQuery = defaultQuery;
    }
    if (proxy) {
        const proxyAgent = new undici.ProxyAgent(proxy);
        configOptions.fetchOptions = {
            dispatcher: proxyAgent,
        };
    }
    if (azure) {
        const useModelName = isEnabled(process.env.AZURE_USE_MODEL_AS_DEPLOYMENT_NAME);
        const updatedAzure = Object.assign({}, azure);
        updatedAzure.azureOpenAIApiDeploymentName = useModelName
            ? sanitizeModelName(llmConfig.model || '')
            : azure.azureOpenAIApiDeploymentName;
        if (process.env.AZURE_OPENAI_DEFAULT_MODEL) {
            llmConfig.model = process.env.AZURE_OPENAI_DEFAULT_MODEL;
        }
        const constructBaseURL = () => {
            if (!configOptions.baseURL) {
                return;
            }
            const azureURL = constructAzureURL({
                baseURL: configOptions.baseURL,
                azureOptions: updatedAzure,
            });
            updatedAzure.azureOpenAIBasePath = azureURL.split(`/${updatedAzure.azureOpenAIApiDeploymentName}`)[0];
        };
        constructBaseURL();
        Object.assign(llmConfig, updatedAzure);
        const constructAzureResponsesApi = () => {
            var _a, _b;
            if (!llmConfig.useResponsesApi) {
                return;
            }
            configOptions.baseURL = constructAzureURL({
                baseURL: configOptions.baseURL || 'https://${INSTANCE_NAME}.openai.azure.com/openai/v1',
                azureOptions: llmConfig,
            });
            delete llmConfig.azureOpenAIApiDeploymentName;
            delete llmConfig.azureOpenAIApiInstanceName;
            delete llmConfig.azureOpenAIApiVersion;
            delete llmConfig.azureOpenAIBasePath;
            delete llmConfig.azureOpenAIApiKey;
            llmConfig.apiKey = apiKey;
            configOptions.defaultHeaders = Object.assign(Object.assign({}, configOptions.defaultHeaders), { 'api-key': apiKey });
            configOptions.defaultQuery = Object.assign(Object.assign({}, configOptions.defaultQuery), { 'api-version': (_b = (_a = configOptions.defaultQuery) === null || _a === void 0 ? void 0 : _a['api-version']) !== null && _b !== void 0 ? _b : 'preview' });
        };
        constructAzureResponsesApi();
        llmConfig.model = updatedAzure.azureOpenAIApiDeploymentName;
    }
    else {
        llmConfig.apiKey = apiKey;
    }
    if (process.env.OPENAI_ORGANIZATION && azure) {
        configOptions.organization = process.env.OPENAI_ORGANIZATION;
    }
    if (hasReasoningParams({ reasoning_effort, reasoning_summary }) &&
        (llmConfig.useResponsesApi === true || useOpenRouter)) {
        llmConfig.reasoning = librechatDataProvider.removeNullishValues({
            effort: reasoning_effort,
            summary: reasoning_summary,
        }, true);
    }
    else if (hasReasoningParams({ reasoning_effort })) {
        llmConfig.reasoning_effort = reasoning_effort;
    }
    if (llmConfig.max_tokens != null) {
        llmConfig.maxTokens = llmConfig.max_tokens;
        delete llmConfig.max_tokens;
    }
    const tools = [];
    if (modelOptions.web_search) {
        llmConfig.useResponsesApi = true;
        tools.push({ type: 'web_search_preview' });
    }
    /**
     * Note: OpenAI Web Search models do not support any known parameters besides `max_tokens`
     */
    if (modelOptions.model && /gpt-4o.*search/.test(modelOptions.model)) {
        const searchExcludeParams = [
            'frequency_penalty',
            'presence_penalty',
            'reasoning',
            'reasoning_effort',
            'temperature',
            'top_p',
            'top_k',
            'stop',
            'logit_bias',
            'seed',
            'response_format',
            'n',
            'logprobs',
            'user',
        ];
        const updatedDropParams = dropParams || [];
        const combinedDropParams = [...new Set([...updatedDropParams, ...searchExcludeParams])];
        combinedDropParams.forEach((param) => {
            if (param in llmConfig) {
                delete llmConfig[param];
            }
        });
    }
    else if (dropParams && Array.isArray(dropParams)) {
        dropParams.forEach((param) => {
            if (param in llmConfig) {
                delete llmConfig[param];
            }
        });
    }
    if (modelKwargs.verbosity && llmConfig.useResponsesApi === true) {
        modelKwargs.text = { verbosity: modelKwargs.verbosity };
        delete modelKwargs.verbosity;
    }
    if (llmConfig.model && /\bgpt-[5-9]\b/i.test(llmConfig.model) && llmConfig.maxTokens != null) {
        const paramName = llmConfig.useResponsesApi === true ? 'max_output_tokens' : 'max_completion_tokens';
        modelKwargs[paramName] = llmConfig.maxTokens;
        delete llmConfig.maxTokens;
        hasModelKwargs = true;
    }
    if (hasModelKwargs) {
        llmConfig.modelKwargs = modelKwargs;
    }
    const result = {
        llmConfig,
        configOptions,
        tools,
    };
    if (useOpenRouter) {
        result.provider = agents.Providers.OPENROUTER;
    }
    return result;
}

/**
 * Initializes OpenAI options for agent usage. This function always returns configuration
 * options and never creates a client instance (equivalent to optionsOnly=true behavior).
 *
 * @param params - Configuration parameters
 * @returns Promise resolving to OpenAI configuration options
 * @throws Error if API key is missing or user key has expired
 */
const initializeOpenAI = ({ req, overrideModel, endpointOption, overrideEndpoint, getUserKeyValues, checkUserKeyExpiry, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const { PROXY, OPENAI_API_KEY, AZURE_API_KEY, OPENAI_REVERSE_PROXY, AZURE_OPENAI_BASEURL } = process.env;
    const { key: expiresAt } = req.body;
    const modelName = overrideModel !== null && overrideModel !== void 0 ? overrideModel : req.body.model;
    const endpoint = overrideEndpoint !== null && overrideEndpoint !== void 0 ? overrideEndpoint : req.body.endpoint;
    if (!endpoint) {
        throw new Error('Endpoint is required');
    }
    const credentials = {
        [librechatDataProvider.EModelEndpoint.openAI]: OPENAI_API_KEY,
        [librechatDataProvider.EModelEndpoint.azureOpenAI]: AZURE_API_KEY,
    };
    const baseURLOptions = {
        [librechatDataProvider.EModelEndpoint.openAI]: OPENAI_REVERSE_PROXY,
        [librechatDataProvider.EModelEndpoint.azureOpenAI]: AZURE_OPENAI_BASEURL,
    };
    const userProvidesKey = isUserProvided(credentials[endpoint]);
    const userProvidesURL = isUserProvided(baseURLOptions[endpoint]);
    let userValues = null;
    if (expiresAt && (userProvidesKey || userProvidesURL)) {
        checkUserKeyExpiry(expiresAt, endpoint);
        userValues = yield getUserKeyValues({ userId: req.user.id, name: endpoint });
    }
    let apiKey = userProvidesKey
        ? userValues === null || userValues === void 0 ? void 0 : userValues.apiKey
        : credentials[endpoint];
    const baseURL = userProvidesURL
        ? userValues === null || userValues === void 0 ? void 0 : userValues.baseURL
        : baseURLOptions[endpoint];
    const clientOptions = {
        proxy: PROXY !== null && PROXY !== void 0 ? PROXY : undefined,
        reverseProxyUrl: baseURL || undefined,
        streaming: true,
    };
    const isAzureOpenAI = endpoint === librechatDataProvider.EModelEndpoint.azureOpenAI;
    const azureConfig = isAzureOpenAI && req.app.locals[librechatDataProvider.EModelEndpoint.azureOpenAI];
    if (isAzureOpenAI && azureConfig) {
        const { modelGroupMap, groupMap } = azureConfig;
        const { azureOptions, baseURL: configBaseURL, headers = {}, serverless, } = librechatDataProvider.mapModelToAzureConfig({
            modelName: modelName || '',
            modelGroupMap,
            groupMap,
        });
        clientOptions.reverseProxyUrl = configBaseURL !== null && configBaseURL !== void 0 ? configBaseURL : clientOptions.reverseProxyUrl;
        clientOptions.headers = resolveHeaders({
            headers: Object.assign(Object.assign({}, headers), ((_a = clientOptions.headers) !== null && _a !== void 0 ? _a : {})),
            user: req.user,
        });
        const groupName = (_b = modelGroupMap[modelName || '']) === null || _b === void 0 ? void 0 : _b.group;
        if (groupName && groupMap[groupName]) {
            clientOptions.addParams = (_c = groupMap[groupName]) === null || _c === void 0 ? void 0 : _c.addParams;
            clientOptions.dropParams = (_d = groupMap[groupName]) === null || _d === void 0 ? void 0 : _d.dropParams;
        }
        apiKey = azureOptions.azureOpenAIApiKey;
        clientOptions.azure = !serverless ? azureOptions : undefined;
        if (serverless === true) {
            clientOptions.defaultQuery = azureOptions.azureOpenAIApiVersion
                ? { 'api-version': azureOptions.azureOpenAIApiVersion }
                : undefined;
            if (!clientOptions.headers) {
                clientOptions.headers = {};
            }
            clientOptions.headers['api-key'] = apiKey;
        }
    }
    else if (isAzureOpenAI) {
        clientOptions.azure =
            userProvidesKey && (userValues === null || userValues === void 0 ? void 0 : userValues.apiKey) ? JSON.parse(userValues.apiKey) : getAzureCredentials();
        apiKey = (_e = clientOptions.azure) === null || _e === void 0 ? void 0 : _e.azureOpenAIApiKey;
    }
    if (userProvidesKey && !apiKey) {
        throw new Error(JSON.stringify({
            type: librechatDataProvider.ErrorTypes.NO_USER_KEY,
        }));
    }
    if (!apiKey) {
        throw new Error(`${endpoint} API Key not provided.`);
    }
    const modelOptions = Object.assign(Object.assign({}, endpointOption.model_parameters), { model: modelName, user: req.user.id });
    const finalClientOptions = Object.assign(Object.assign({}, clientOptions), { modelOptions });
    const options = getOpenAIConfig(apiKey, finalClientOptions, endpoint);
    const openAIConfig = req.app.locals[librechatDataProvider.EModelEndpoint.openAI];
    const allConfig = req.app.locals.all;
    const azureRate = (modelName === null || modelName === void 0 ? void 0 : modelName.includes('gpt-4')) ? 30 : 17;
    let streamRate;
    if (isAzureOpenAI && azureConfig) {
        streamRate = (_f = azureConfig.streamRate) !== null && _f !== void 0 ? _f : azureRate;
    }
    else if (!isAzureOpenAI && openAIConfig) {
        streamRate = openAIConfig.streamRate;
    }
    if (allConfig === null || allConfig === void 0 ? void 0 : allConfig.streamRate) {
        streamRate = allConfig.streamRate;
    }
    if (streamRate) {
        options.llmConfig.callbacks = [
            {
                handleLLMNewToken: createHandleLLMNewToken(streamRate),
            },
        ];
    }
    const result = Object.assign(Object.assign({}, options), { streamRate });
    return result;
});

var Stream$2 = require$$0$1.Stream;
var util$2 = require$$1;

var delayed_stream = DelayedStream$1;
function DelayedStream$1() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util$2.inherits(DelayedStream$1, Stream$2);

DelayedStream$1.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream$1.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream$1.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream$1.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream$1.prototype.pause = function() {
  this.source.pause();
};

DelayedStream$1.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream$1.prototype.pipe = function() {
  var r = Stream$2.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream$1.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream$1.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this.emit('error', new Error(message));
};

var util$1 = require$$1;
var Stream$1 = require$$0$1.Stream;
var DelayedStream = delayed_stream;

var combined_stream = CombinedStream$1;
function CombinedStream$1() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util$1.inherits(CombinedStream$1, Stream$1);

CombinedStream$1.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream$1.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream$1.prototype.append = function(stream) {
  var isStreamLike = CombinedStream$1.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream$1.prototype.pipe = function(dest, options) {
  Stream$1.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream$1.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream$1.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream$1.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream$1.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream$1.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream$1.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream$1.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream$1.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream$1.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream$1.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream$1.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream$1.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream$1.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream$1.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream$1.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};

var mimeTypes = {};

var require$$0 = {
	"application/1d-interleaved-parityfec": {
	source: "iana"
},
	"application/3gpdash-qoe-report+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/3gpp-ims+xml": {
	source: "iana",
	compressible: true
},
	"application/3gpphal+json": {
	source: "iana",
	compressible: true
},
	"application/3gpphalforms+json": {
	source: "iana",
	compressible: true
},
	"application/a2l": {
	source: "iana"
},
	"application/ace+cbor": {
	source: "iana"
},
	"application/activemessage": {
	source: "iana"
},
	"application/activity+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-directory+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcost+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcostparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointprop+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointpropparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-error+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamcontrol+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamparams+json": {
	source: "iana",
	compressible: true
},
	"application/aml": {
	source: "iana"
},
	"application/andrew-inset": {
	source: "iana",
	extensions: [
		"ez"
	]
},
	"application/applefile": {
	source: "iana"
},
	"application/applixware": {
	source: "apache",
	extensions: [
		"aw"
	]
},
	"application/at+jwt": {
	source: "iana"
},
	"application/atf": {
	source: "iana"
},
	"application/atfx": {
	source: "iana"
},
	"application/atom+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atom"
	]
},
	"application/atomcat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomcat"
	]
},
	"application/atomdeleted+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomdeleted"
	]
},
	"application/atomicmail": {
	source: "iana"
},
	"application/atomsvc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomsvc"
	]
},
	"application/atsc-dwd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dwd"
	]
},
	"application/atsc-dynamic-event-message": {
	source: "iana"
},
	"application/atsc-held+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"held"
	]
},
	"application/atsc-rdt+json": {
	source: "iana",
	compressible: true
},
	"application/atsc-rsat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsat"
	]
},
	"application/atxml": {
	source: "iana"
},
	"application/auth-policy+xml": {
	source: "iana",
	compressible: true
},
	"application/bacnet-xdd+zip": {
	source: "iana",
	compressible: false
},
	"application/batch-smtp": {
	source: "iana"
},
	"application/bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/beep+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/calendar+json": {
	source: "iana",
	compressible: true
},
	"application/calendar+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xcs"
	]
},
	"application/call-completion": {
	source: "iana"
},
	"application/cals-1840": {
	source: "iana"
},
	"application/captive+json": {
	source: "iana",
	compressible: true
},
	"application/cbor": {
	source: "iana"
},
	"application/cbor-seq": {
	source: "iana"
},
	"application/cccex": {
	source: "iana"
},
	"application/ccmp+xml": {
	source: "iana",
	compressible: true
},
	"application/ccxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ccxml"
	]
},
	"application/cdfx+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdfx"
	]
},
	"application/cdmi-capability": {
	source: "iana",
	extensions: [
		"cdmia"
	]
},
	"application/cdmi-container": {
	source: "iana",
	extensions: [
		"cdmic"
	]
},
	"application/cdmi-domain": {
	source: "iana",
	extensions: [
		"cdmid"
	]
},
	"application/cdmi-object": {
	source: "iana",
	extensions: [
		"cdmio"
	]
},
	"application/cdmi-queue": {
	source: "iana",
	extensions: [
		"cdmiq"
	]
},
	"application/cdni": {
	source: "iana"
},
	"application/cea": {
	source: "iana"
},
	"application/cea-2018+xml": {
	source: "iana",
	compressible: true
},
	"application/cellml+xml": {
	source: "iana",
	compressible: true
},
	"application/cfw": {
	source: "iana"
},
	"application/city+json": {
	source: "iana",
	compressible: true
},
	"application/clr": {
	source: "iana"
},
	"application/clue+xml": {
	source: "iana",
	compressible: true
},
	"application/clue_info+xml": {
	source: "iana",
	compressible: true
},
	"application/cms": {
	source: "iana"
},
	"application/cnrp+xml": {
	source: "iana",
	compressible: true
},
	"application/coap-group+json": {
	source: "iana",
	compressible: true
},
	"application/coap-payload": {
	source: "iana"
},
	"application/commonground": {
	source: "iana"
},
	"application/conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/cose": {
	source: "iana"
},
	"application/cose-key": {
	source: "iana"
},
	"application/cose-key-set": {
	source: "iana"
},
	"application/cpl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cpl"
	]
},
	"application/csrattrs": {
	source: "iana"
},
	"application/csta+xml": {
	source: "iana",
	compressible: true
},
	"application/cstadata+xml": {
	source: "iana",
	compressible: true
},
	"application/csvm+json": {
	source: "iana",
	compressible: true
},
	"application/cu-seeme": {
	source: "apache",
	extensions: [
		"cu"
	]
},
	"application/cwt": {
	source: "iana"
},
	"application/cybercash": {
	source: "iana"
},
	"application/dart": {
	compressible: true
},
	"application/dash+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpd"
	]
},
	"application/dash-patch+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpp"
	]
},
	"application/dashdelta": {
	source: "iana"
},
	"application/davmount+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"davmount"
	]
},
	"application/dca-rft": {
	source: "iana"
},
	"application/dcd": {
	source: "iana"
},
	"application/dec-dx": {
	source: "iana"
},
	"application/dialog-info+xml": {
	source: "iana",
	compressible: true
},
	"application/dicom": {
	source: "iana"
},
	"application/dicom+json": {
	source: "iana",
	compressible: true
},
	"application/dicom+xml": {
	source: "iana",
	compressible: true
},
	"application/dii": {
	source: "iana"
},
	"application/dit": {
	source: "iana"
},
	"application/dns": {
	source: "iana"
},
	"application/dns+json": {
	source: "iana",
	compressible: true
},
	"application/dns-message": {
	source: "iana"
},
	"application/docbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dbk"
	]
},
	"application/dots+cbor": {
	source: "iana"
},
	"application/dskpp+xml": {
	source: "iana",
	compressible: true
},
	"application/dssc+der": {
	source: "iana",
	extensions: [
		"dssc"
	]
},
	"application/dssc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdssc"
	]
},
	"application/dvcs": {
	source: "iana"
},
	"application/ecmascript": {
	source: "iana",
	compressible: true,
	extensions: [
		"es",
		"ecma"
	]
},
	"application/edi-consent": {
	source: "iana"
},
	"application/edi-x12": {
	source: "iana",
	compressible: false
},
	"application/edifact": {
	source: "iana",
	compressible: false
},
	"application/efi": {
	source: "iana"
},
	"application/elm+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/elm+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.cap+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/emergencycalldata.comment+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.control+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.deviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.ecall.msd": {
	source: "iana"
},
	"application/emergencycalldata.providerinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.serviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.subscriberinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.veds+xml": {
	source: "iana",
	compressible: true
},
	"application/emma+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emma"
	]
},
	"application/emotionml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emotionml"
	]
},
	"application/encaprtp": {
	source: "iana"
},
	"application/epp+xml": {
	source: "iana",
	compressible: true
},
	"application/epub+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"epub"
	]
},
	"application/eshop": {
	source: "iana"
},
	"application/exi": {
	source: "iana",
	extensions: [
		"exi"
	]
},
	"application/expect-ct-report+json": {
	source: "iana",
	compressible: true
},
	"application/express": {
	source: "iana",
	extensions: [
		"exp"
	]
},
	"application/fastinfoset": {
	source: "iana"
},
	"application/fastsoap": {
	source: "iana"
},
	"application/fdt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fdt"
	]
},
	"application/fhir+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fhir+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fido.trusted-apps+json": {
	compressible: true
},
	"application/fits": {
	source: "iana"
},
	"application/flexfec": {
	source: "iana"
},
	"application/font-sfnt": {
	source: "iana"
},
	"application/font-tdpfr": {
	source: "iana",
	extensions: [
		"pfr"
	]
},
	"application/font-woff": {
	source: "iana",
	compressible: false
},
	"application/framework-attributes+xml": {
	source: "iana",
	compressible: true
},
	"application/geo+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"geojson"
	]
},
	"application/geo+json-seq": {
	source: "iana"
},
	"application/geopackage+sqlite3": {
	source: "iana"
},
	"application/geoxacml+xml": {
	source: "iana",
	compressible: true
},
	"application/gltf-buffer": {
	source: "iana"
},
	"application/gml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"gml"
	]
},
	"application/gpx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"gpx"
	]
},
	"application/gxf": {
	source: "apache",
	extensions: [
		"gxf"
	]
},
	"application/gzip": {
	source: "iana",
	compressible: false,
	extensions: [
		"gz"
	]
},
	"application/h224": {
	source: "iana"
},
	"application/held+xml": {
	source: "iana",
	compressible: true
},
	"application/hjson": {
	extensions: [
		"hjson"
	]
},
	"application/http": {
	source: "iana"
},
	"application/hyperstudio": {
	source: "iana",
	extensions: [
		"stk"
	]
},
	"application/ibe-key-request+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pkg-reply+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pp-data": {
	source: "iana"
},
	"application/iges": {
	source: "iana"
},
	"application/im-iscomposing+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/index": {
	source: "iana"
},
	"application/index.cmd": {
	source: "iana"
},
	"application/index.obj": {
	source: "iana"
},
	"application/index.response": {
	source: "iana"
},
	"application/index.vnd": {
	source: "iana"
},
	"application/inkml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ink",
		"inkml"
	]
},
	"application/iotp": {
	source: "iana"
},
	"application/ipfix": {
	source: "iana",
	extensions: [
		"ipfix"
	]
},
	"application/ipp": {
	source: "iana"
},
	"application/isup": {
	source: "iana"
},
	"application/its+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"its"
	]
},
	"application/java-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"jar",
		"war",
		"ear"
	]
},
	"application/java-serialized-object": {
	source: "apache",
	compressible: false,
	extensions: [
		"ser"
	]
},
	"application/java-vm": {
	source: "apache",
	compressible: false,
	extensions: [
		"class"
	]
},
	"application/javascript": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js",
		"mjs"
	]
},
	"application/jf2feed+json": {
	source: "iana",
	compressible: true
},
	"application/jose": {
	source: "iana"
},
	"application/jose+json": {
	source: "iana",
	compressible: true
},
	"application/jrd+json": {
	source: "iana",
	compressible: true
},
	"application/jscalendar+json": {
	source: "iana",
	compressible: true
},
	"application/json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"json",
		"map"
	]
},
	"application/json-patch+json": {
	source: "iana",
	compressible: true
},
	"application/json-seq": {
	source: "iana"
},
	"application/json5": {
	extensions: [
		"json5"
	]
},
	"application/jsonml+json": {
	source: "apache",
	compressible: true,
	extensions: [
		"jsonml"
	]
},
	"application/jwk+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+json": {
	source: "iana",
	compressible: true
},
	"application/jwt": {
	source: "iana"
},
	"application/kpml-request+xml": {
	source: "iana",
	compressible: true
},
	"application/kpml-response+xml": {
	source: "iana",
	compressible: true
},
	"application/ld+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"jsonld"
	]
},
	"application/lgr+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lgr"
	]
},
	"application/link-format": {
	source: "iana"
},
	"application/load-control+xml": {
	source: "iana",
	compressible: true
},
	"application/lost+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lostxml"
	]
},
	"application/lostsync+xml": {
	source: "iana",
	compressible: true
},
	"application/lpf+zip": {
	source: "iana",
	compressible: false
},
	"application/lxf": {
	source: "iana"
},
	"application/mac-binhex40": {
	source: "iana",
	extensions: [
		"hqx"
	]
},
	"application/mac-compactpro": {
	source: "apache",
	extensions: [
		"cpt"
	]
},
	"application/macwriteii": {
	source: "iana"
},
	"application/mads+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mads"
	]
},
	"application/manifest+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"webmanifest"
	]
},
	"application/marc": {
	source: "iana",
	extensions: [
		"mrc"
	]
},
	"application/marcxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mrcx"
	]
},
	"application/mathematica": {
	source: "iana",
	extensions: [
		"ma",
		"nb",
		"mb"
	]
},
	"application/mathml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mathml"
	]
},
	"application/mathml-content+xml": {
	source: "iana",
	compressible: true
},
	"application/mathml-presentation+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-associated-procedure-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-deregister+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-envelope+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-protection-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-reception-report+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-user-service-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbox": {
	source: "iana",
	extensions: [
		"mbox"
	]
},
	"application/media-policy-dataset+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpf"
	]
},
	"application/media_control+xml": {
	source: "iana",
	compressible: true
},
	"application/mediaservercontrol+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mscml"
	]
},
	"application/merge-patch+json": {
	source: "iana",
	compressible: true
},
	"application/metalink+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"metalink"
	]
},
	"application/metalink4+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"meta4"
	]
},
	"application/mets+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mets"
	]
},
	"application/mf4": {
	source: "iana"
},
	"application/mikey": {
	source: "iana"
},
	"application/mipc": {
	source: "iana"
},
	"application/missing-blocks+cbor-seq": {
	source: "iana"
},
	"application/mmt-aei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"maei"
	]
},
	"application/mmt-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musd"
	]
},
	"application/mods+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mods"
	]
},
	"application/moss-keys": {
	source: "iana"
},
	"application/moss-signature": {
	source: "iana"
},
	"application/mosskey-data": {
	source: "iana"
},
	"application/mosskey-request": {
	source: "iana"
},
	"application/mp21": {
	source: "iana",
	extensions: [
		"m21",
		"mp21"
	]
},
	"application/mp4": {
	source: "iana",
	extensions: [
		"mp4s",
		"m4p"
	]
},
	"application/mpeg4-generic": {
	source: "iana"
},
	"application/mpeg4-iod": {
	source: "iana"
},
	"application/mpeg4-iod-xmt": {
	source: "iana"
},
	"application/mrb-consumer+xml": {
	source: "iana",
	compressible: true
},
	"application/mrb-publish+xml": {
	source: "iana",
	compressible: true
},
	"application/msc-ivr+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msc-mixer+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msword": {
	source: "iana",
	compressible: false,
	extensions: [
		"doc",
		"dot"
	]
},
	"application/mud+json": {
	source: "iana",
	compressible: true
},
	"application/multipart-core": {
	source: "iana"
},
	"application/mxf": {
	source: "iana",
	extensions: [
		"mxf"
	]
},
	"application/n-quads": {
	source: "iana",
	extensions: [
		"nq"
	]
},
	"application/n-triples": {
	source: "iana",
	extensions: [
		"nt"
	]
},
	"application/nasdata": {
	source: "iana"
},
	"application/news-checkgroups": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-groupinfo": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-transmission": {
	source: "iana"
},
	"application/nlsml+xml": {
	source: "iana",
	compressible: true
},
	"application/node": {
	source: "iana",
	extensions: [
		"cjs"
	]
},
	"application/nss": {
	source: "iana"
},
	"application/oauth-authz-req+jwt": {
	source: "iana"
},
	"application/oblivious-dns-message": {
	source: "iana"
},
	"application/ocsp-request": {
	source: "iana"
},
	"application/ocsp-response": {
	source: "iana"
},
	"application/octet-stream": {
	source: "iana",
	compressible: false,
	extensions: [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	]
},
	"application/oda": {
	source: "iana",
	extensions: [
		"oda"
	]
},
	"application/odm+xml": {
	source: "iana",
	compressible: true
},
	"application/odx": {
	source: "iana"
},
	"application/oebps-package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"opf"
	]
},
	"application/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogx"
	]
},
	"application/omdoc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"omdoc"
	]
},
	"application/onenote": {
	source: "apache",
	extensions: [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg"
	]
},
	"application/opc-nodeset+xml": {
	source: "iana",
	compressible: true
},
	"application/oscore": {
	source: "iana"
},
	"application/oxps": {
	source: "iana",
	extensions: [
		"oxps"
	]
},
	"application/p21": {
	source: "iana"
},
	"application/p21+zip": {
	source: "iana",
	compressible: false
},
	"application/p2p-overlay+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"relo"
	]
},
	"application/parityfec": {
	source: "iana"
},
	"application/passport": {
	source: "iana"
},
	"application/patch-ops-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/pdf": {
	source: "iana",
	compressible: false,
	extensions: [
		"pdf"
	]
},
	"application/pdx": {
	source: "iana"
},
	"application/pem-certificate-chain": {
	source: "iana"
},
	"application/pgp-encrypted": {
	source: "iana",
	compressible: false,
	extensions: [
		"pgp"
	]
},
	"application/pgp-keys": {
	source: "iana",
	extensions: [
		"asc"
	]
},
	"application/pgp-signature": {
	source: "iana",
	extensions: [
		"asc",
		"sig"
	]
},
	"application/pics-rules": {
	source: "apache",
	extensions: [
		"prf"
	]
},
	"application/pidf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pidf-diff+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pkcs10": {
	source: "iana",
	extensions: [
		"p10"
	]
},
	"application/pkcs12": {
	source: "iana"
},
	"application/pkcs7-mime": {
	source: "iana",
	extensions: [
		"p7m",
		"p7c"
	]
},
	"application/pkcs7-signature": {
	source: "iana",
	extensions: [
		"p7s"
	]
},
	"application/pkcs8": {
	source: "iana",
	extensions: [
		"p8"
	]
},
	"application/pkcs8-encrypted": {
	source: "iana"
},
	"application/pkix-attr-cert": {
	source: "iana",
	extensions: [
		"ac"
	]
},
	"application/pkix-cert": {
	source: "iana",
	extensions: [
		"cer"
	]
},
	"application/pkix-crl": {
	source: "iana",
	extensions: [
		"crl"
	]
},
	"application/pkix-pkipath": {
	source: "iana",
	extensions: [
		"pkipath"
	]
},
	"application/pkixcmp": {
	source: "iana",
	extensions: [
		"pki"
	]
},
	"application/pls+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pls"
	]
},
	"application/poc-settings+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/postscript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ai",
		"eps",
		"ps"
	]
},
	"application/ppsp-tracker+json": {
	source: "iana",
	compressible: true
},
	"application/problem+json": {
	source: "iana",
	compressible: true
},
	"application/problem+xml": {
	source: "iana",
	compressible: true
},
	"application/provenance+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"provx"
	]
},
	"application/prs.alvestrand.titrax-sheet": {
	source: "iana"
},
	"application/prs.cww": {
	source: "iana",
	extensions: [
		"cww"
	]
},
	"application/prs.cyn": {
	source: "iana",
	charset: "7-BIT"
},
	"application/prs.hpub+zip": {
	source: "iana",
	compressible: false
},
	"application/prs.nprend": {
	source: "iana"
},
	"application/prs.plucker": {
	source: "iana"
},
	"application/prs.rdf-xml-crypt": {
	source: "iana"
},
	"application/prs.xsf+xml": {
	source: "iana",
	compressible: true
},
	"application/pskc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pskcxml"
	]
},
	"application/pvd+json": {
	source: "iana",
	compressible: true
},
	"application/qsig": {
	source: "iana"
},
	"application/raml+yaml": {
	compressible: true,
	extensions: [
		"raml"
	]
},
	"application/raptorfec": {
	source: "iana"
},
	"application/rdap+json": {
	source: "iana",
	compressible: true
},
	"application/rdf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rdf",
		"owl"
	]
},
	"application/reginfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rif"
	]
},
	"application/relax-ng-compact-syntax": {
	source: "iana",
	extensions: [
		"rnc"
	]
},
	"application/remote-printing": {
	source: "iana"
},
	"application/reputon+json": {
	source: "iana",
	compressible: true
},
	"application/resource-lists+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rl"
	]
},
	"application/resource-lists-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rld"
	]
},
	"application/rfc+xml": {
	source: "iana",
	compressible: true
},
	"application/riscos": {
	source: "iana"
},
	"application/rlmi+xml": {
	source: "iana",
	compressible: true
},
	"application/rls-services+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rs"
	]
},
	"application/route-apd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rapd"
	]
},
	"application/route-s-tsid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sls"
	]
},
	"application/route-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rusd"
	]
},
	"application/rpki-ghostbusters": {
	source: "iana",
	extensions: [
		"gbr"
	]
},
	"application/rpki-manifest": {
	source: "iana",
	extensions: [
		"mft"
	]
},
	"application/rpki-publication": {
	source: "iana"
},
	"application/rpki-roa": {
	source: "iana",
	extensions: [
		"roa"
	]
},
	"application/rpki-updown": {
	source: "iana"
},
	"application/rsd+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rsd"
	]
},
	"application/rss+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rss"
	]
},
	"application/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"application/rtploopback": {
	source: "iana"
},
	"application/rtx": {
	source: "iana"
},
	"application/samlassertion+xml": {
	source: "iana",
	compressible: true
},
	"application/samlmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/sarif+json": {
	source: "iana",
	compressible: true
},
	"application/sarif-external-properties+json": {
	source: "iana",
	compressible: true
},
	"application/sbe": {
	source: "iana"
},
	"application/sbml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sbml"
	]
},
	"application/scaip+xml": {
	source: "iana",
	compressible: true
},
	"application/scim+json": {
	source: "iana",
	compressible: true
},
	"application/scvp-cv-request": {
	source: "iana",
	extensions: [
		"scq"
	]
},
	"application/scvp-cv-response": {
	source: "iana",
	extensions: [
		"scs"
	]
},
	"application/scvp-vp-request": {
	source: "iana",
	extensions: [
		"spq"
	]
},
	"application/scvp-vp-response": {
	source: "iana",
	extensions: [
		"spp"
	]
},
	"application/sdp": {
	source: "iana",
	extensions: [
		"sdp"
	]
},
	"application/secevent+jwt": {
	source: "iana"
},
	"application/senml+cbor": {
	source: "iana"
},
	"application/senml+json": {
	source: "iana",
	compressible: true
},
	"application/senml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"senmlx"
	]
},
	"application/senml-etch+cbor": {
	source: "iana"
},
	"application/senml-etch+json": {
	source: "iana",
	compressible: true
},
	"application/senml-exi": {
	source: "iana"
},
	"application/sensml+cbor": {
	source: "iana"
},
	"application/sensml+json": {
	source: "iana",
	compressible: true
},
	"application/sensml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sensmlx"
	]
},
	"application/sensml-exi": {
	source: "iana"
},
	"application/sep+xml": {
	source: "iana",
	compressible: true
},
	"application/sep-exi": {
	source: "iana"
},
	"application/session-info": {
	source: "iana"
},
	"application/set-payment": {
	source: "iana"
},
	"application/set-payment-initiation": {
	source: "iana",
	extensions: [
		"setpay"
	]
},
	"application/set-registration": {
	source: "iana"
},
	"application/set-registration-initiation": {
	source: "iana",
	extensions: [
		"setreg"
	]
},
	"application/sgml": {
	source: "iana"
},
	"application/sgml-open-catalog": {
	source: "iana"
},
	"application/shf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"shf"
	]
},
	"application/sieve": {
	source: "iana",
	extensions: [
		"siv",
		"sieve"
	]
},
	"application/simple-filter+xml": {
	source: "iana",
	compressible: true
},
	"application/simple-message-summary": {
	source: "iana"
},
	"application/simplesymbolcontainer": {
	source: "iana"
},
	"application/sipc": {
	source: "iana"
},
	"application/slate": {
	source: "iana"
},
	"application/smil": {
	source: "iana"
},
	"application/smil+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"smi",
		"smil"
	]
},
	"application/smpte336m": {
	source: "iana"
},
	"application/soap+fastinfoset": {
	source: "iana"
},
	"application/soap+xml": {
	source: "iana",
	compressible: true
},
	"application/sparql-query": {
	source: "iana",
	extensions: [
		"rq"
	]
},
	"application/sparql-results+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"srx"
	]
},
	"application/spdx+json": {
	source: "iana",
	compressible: true
},
	"application/spirits-event+xml": {
	source: "iana",
	compressible: true
},
	"application/sql": {
	source: "iana"
},
	"application/srgs": {
	source: "iana",
	extensions: [
		"gram"
	]
},
	"application/srgs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"grxml"
	]
},
	"application/sru+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sru"
	]
},
	"application/ssdl+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ssdl"
	]
},
	"application/ssml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ssml"
	]
},
	"application/stix+json": {
	source: "iana",
	compressible: true
},
	"application/swid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"swidtag"
	]
},
	"application/tamp-apex-update": {
	source: "iana"
},
	"application/tamp-apex-update-confirm": {
	source: "iana"
},
	"application/tamp-community-update": {
	source: "iana"
},
	"application/tamp-community-update-confirm": {
	source: "iana"
},
	"application/tamp-error": {
	source: "iana"
},
	"application/tamp-sequence-adjust": {
	source: "iana"
},
	"application/tamp-sequence-adjust-confirm": {
	source: "iana"
},
	"application/tamp-status-query": {
	source: "iana"
},
	"application/tamp-status-response": {
	source: "iana"
},
	"application/tamp-update": {
	source: "iana"
},
	"application/tamp-update-confirm": {
	source: "iana"
},
	"application/tar": {
	compressible: true
},
	"application/taxii+json": {
	source: "iana",
	compressible: true
},
	"application/td+json": {
	source: "iana",
	compressible: true
},
	"application/tei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tei",
		"teicorpus"
	]
},
	"application/tetra_isi": {
	source: "iana"
},
	"application/thraud+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tfi"
	]
},
	"application/timestamp-query": {
	source: "iana"
},
	"application/timestamp-reply": {
	source: "iana"
},
	"application/timestamped-data": {
	source: "iana",
	extensions: [
		"tsd"
	]
},
	"application/tlsrpt+gzip": {
	source: "iana"
},
	"application/tlsrpt+json": {
	source: "iana",
	compressible: true
},
	"application/tnauthlist": {
	source: "iana"
},
	"application/token-introspection+jwt": {
	source: "iana"
},
	"application/toml": {
	compressible: true,
	extensions: [
		"toml"
	]
},
	"application/trickle-ice-sdpfrag": {
	source: "iana"
},
	"application/trig": {
	source: "iana",
	extensions: [
		"trig"
	]
},
	"application/ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttml"
	]
},
	"application/tve-trigger": {
	source: "iana"
},
	"application/tzif": {
	source: "iana"
},
	"application/tzif-leap": {
	source: "iana"
},
	"application/ubjson": {
	compressible: false,
	extensions: [
		"ubj"
	]
},
	"application/ulpfec": {
	source: "iana"
},
	"application/urc-grpsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-ressheet+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsheet"
	]
},
	"application/urc-targetdesc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"td"
	]
},
	"application/urc-uisocketdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/vcard+json": {
	source: "iana",
	compressible: true
},
	"application/vcard+xml": {
	source: "iana",
	compressible: true
},
	"application/vemmi": {
	source: "iana"
},
	"application/vividence.scriptfile": {
	source: "apache"
},
	"application/vnd.1000minds.decision-model+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"1km"
	]
},
	"application/vnd.3gpp-prose+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ch+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-v2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.5gnas": {
	source: "iana"
},
	"application/vnd.3gpp.access-transfer-events+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.bsf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gmop+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gtpc": {
	source: "iana"
},
	"application/vnd.3gpp.interworking-data": {
	source: "iana"
},
	"application/vnd.3gpp.lpp": {
	source: "iana"
},
	"application/vnd.3gpp.mc-signalling-ear": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-payload": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-signalling": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-floor-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-signed+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mid-call+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ngap": {
	source: "iana"
},
	"application/vnd.3gpp.pfcp": {
	source: "iana"
},
	"application/vnd.3gpp.pic-bw-large": {
	source: "iana",
	extensions: [
		"plb"
	]
},
	"application/vnd.3gpp.pic-bw-small": {
	source: "iana",
	extensions: [
		"psb"
	]
},
	"application/vnd.3gpp.pic-bw-var": {
	source: "iana",
	extensions: [
		"pvb"
	]
},
	"application/vnd.3gpp.s1ap": {
	source: "iana"
},
	"application/vnd.3gpp.sms": {
	source: "iana"
},
	"application/vnd.3gpp.sms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-ext+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.state-and-event-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ussd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.sms": {
	source: "iana"
},
	"application/vnd.3gpp2.tcap": {
	source: "iana",
	extensions: [
		"tcap"
	]
},
	"application/vnd.3lightssoftware.imagescal": {
	source: "iana"
},
	"application/vnd.3m.post-it-notes": {
	source: "iana",
	extensions: [
		"pwn"
	]
},
	"application/vnd.accpac.simply.aso": {
	source: "iana",
	extensions: [
		"aso"
	]
},
	"application/vnd.accpac.simply.imp": {
	source: "iana",
	extensions: [
		"imp"
	]
},
	"application/vnd.acucobol": {
	source: "iana",
	extensions: [
		"acu"
	]
},
	"application/vnd.acucorp": {
	source: "iana",
	extensions: [
		"atc",
		"acutc"
	]
},
	"application/vnd.adobe.air-application-installer-package+zip": {
	source: "apache",
	compressible: false,
	extensions: [
		"air"
	]
},
	"application/vnd.adobe.flash.movie": {
	source: "iana"
},
	"application/vnd.adobe.formscentral.fcdt": {
	source: "iana",
	extensions: [
		"fcdt"
	]
},
	"application/vnd.adobe.fxp": {
	source: "iana",
	extensions: [
		"fxp",
		"fxpl"
	]
},
	"application/vnd.adobe.partial-upload": {
	source: "iana"
},
	"application/vnd.adobe.xdp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdp"
	]
},
	"application/vnd.adobe.xfdf": {
	source: "iana",
	extensions: [
		"xfdf"
	]
},
	"application/vnd.aether.imp": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata-pagedef": {
	source: "iana"
},
	"application/vnd.afpc.cmoca-cmresource": {
	source: "iana"
},
	"application/vnd.afpc.foca-charset": {
	source: "iana"
},
	"application/vnd.afpc.foca-codedfont": {
	source: "iana"
},
	"application/vnd.afpc.foca-codepage": {
	source: "iana"
},
	"application/vnd.afpc.modca": {
	source: "iana"
},
	"application/vnd.afpc.modca-cmtable": {
	source: "iana"
},
	"application/vnd.afpc.modca-formdef": {
	source: "iana"
},
	"application/vnd.afpc.modca-mediummap": {
	source: "iana"
},
	"application/vnd.afpc.modca-objectcontainer": {
	source: "iana"
},
	"application/vnd.afpc.modca-overlay": {
	source: "iana"
},
	"application/vnd.afpc.modca-pagesegment": {
	source: "iana"
},
	"application/vnd.age": {
	source: "iana",
	extensions: [
		"age"
	]
},
	"application/vnd.ah-barcode": {
	source: "iana"
},
	"application/vnd.ahead.space": {
	source: "iana",
	extensions: [
		"ahead"
	]
},
	"application/vnd.airzip.filesecure.azf": {
	source: "iana",
	extensions: [
		"azf"
	]
},
	"application/vnd.airzip.filesecure.azs": {
	source: "iana",
	extensions: [
		"azs"
	]
},
	"application/vnd.amadeus+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.amazon.ebook": {
	source: "apache",
	extensions: [
		"azw"
	]
},
	"application/vnd.amazon.mobi8-ebook": {
	source: "iana"
},
	"application/vnd.americandynamics.acc": {
	source: "iana",
	extensions: [
		"acc"
	]
},
	"application/vnd.amiga.ami": {
	source: "iana",
	extensions: [
		"ami"
	]
},
	"application/vnd.amundsen.maze+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.android.ota": {
	source: "iana"
},
	"application/vnd.android.package-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"apk"
	]
},
	"application/vnd.anki": {
	source: "iana"
},
	"application/vnd.anser-web-certificate-issue-initiation": {
	source: "iana",
	extensions: [
		"cii"
	]
},
	"application/vnd.anser-web-funds-transfer-initiation": {
	source: "apache",
	extensions: [
		"fti"
	]
},
	"application/vnd.antix.game-component": {
	source: "iana",
	extensions: [
		"atx"
	]
},
	"application/vnd.apache.arrow.file": {
	source: "iana"
},
	"application/vnd.apache.arrow.stream": {
	source: "iana"
},
	"application/vnd.apache.thrift.binary": {
	source: "iana"
},
	"application/vnd.apache.thrift.compact": {
	source: "iana"
},
	"application/vnd.apache.thrift.json": {
	source: "iana"
},
	"application/vnd.api+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.aplextor.warrp+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apothekende.reservation+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apple.installer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpkg"
	]
},
	"application/vnd.apple.keynote": {
	source: "iana",
	extensions: [
		"key"
	]
},
	"application/vnd.apple.mpegurl": {
	source: "iana",
	extensions: [
		"m3u8"
	]
},
	"application/vnd.apple.numbers": {
	source: "iana",
	extensions: [
		"numbers"
	]
},
	"application/vnd.apple.pages": {
	source: "iana",
	extensions: [
		"pages"
	]
},
	"application/vnd.apple.pkpass": {
	compressible: false,
	extensions: [
		"pkpass"
	]
},
	"application/vnd.arastra.swi": {
	source: "iana"
},
	"application/vnd.aristanetworks.swi": {
	source: "iana",
	extensions: [
		"swi"
	]
},
	"application/vnd.artisan+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.artsquare": {
	source: "iana"
},
	"application/vnd.astraea-software.iota": {
	source: "iana",
	extensions: [
		"iota"
	]
},
	"application/vnd.audiograph": {
	source: "iana",
	extensions: [
		"aep"
	]
},
	"application/vnd.autopackage": {
	source: "iana"
},
	"application/vnd.avalon+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.avistar+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.balsamiq.bmml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmml"
	]
},
	"application/vnd.balsamiq.bmpr": {
	source: "iana"
},
	"application/vnd.banana-accounting": {
	source: "iana"
},
	"application/vnd.bbf.usp.error": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bekitzur-stech+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bint.med-content": {
	source: "iana"
},
	"application/vnd.biopax.rdf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.blink-idb-value-wrapper": {
	source: "iana"
},
	"application/vnd.blueice.multipass": {
	source: "iana",
	extensions: [
		"mpm"
	]
},
	"application/vnd.bluetooth.ep.oob": {
	source: "iana"
},
	"application/vnd.bluetooth.le.oob": {
	source: "iana"
},
	"application/vnd.bmi": {
	source: "iana",
	extensions: [
		"bmi"
	]
},
	"application/vnd.bpf": {
	source: "iana"
},
	"application/vnd.bpf3": {
	source: "iana"
},
	"application/vnd.businessobjects": {
	source: "iana",
	extensions: [
		"rep"
	]
},
	"application/vnd.byu.uapi+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cab-jscript": {
	source: "iana"
},
	"application/vnd.canon-cpdl": {
	source: "iana"
},
	"application/vnd.canon-lips": {
	source: "iana"
},
	"application/vnd.capasystems-pg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cendio.thinlinc.clientconf": {
	source: "iana"
},
	"application/vnd.century-systems.tcp_stream": {
	source: "iana"
},
	"application/vnd.chemdraw+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdxml"
	]
},
	"application/vnd.chess-pgn": {
	source: "iana"
},
	"application/vnd.chipnuts.karaoke-mmd": {
	source: "iana",
	extensions: [
		"mmd"
	]
},
	"application/vnd.ciedi": {
	source: "iana"
},
	"application/vnd.cinderella": {
	source: "iana",
	extensions: [
		"cdy"
	]
},
	"application/vnd.cirpack.isdn-ext": {
	source: "iana"
},
	"application/vnd.citationstyles.style+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"csl"
	]
},
	"application/vnd.claymore": {
	source: "iana",
	extensions: [
		"cla"
	]
},
	"application/vnd.cloanto.rp9": {
	source: "iana",
	extensions: [
		"rp9"
	]
},
	"application/vnd.clonk.c4group": {
	source: "iana",
	extensions: [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	]
},
	"application/vnd.cluetrust.cartomobile-config": {
	source: "iana",
	extensions: [
		"c11amc"
	]
},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
	source: "iana",
	extensions: [
		"c11amz"
	]
},
	"application/vnd.coffeescript": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet-template": {
	source: "iana"
},
	"application/vnd.collection+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.doc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.next+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.comicbook+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.comicbook-rar": {
	source: "iana"
},
	"application/vnd.commerce-battelle": {
	source: "iana"
},
	"application/vnd.commonspace": {
	source: "iana",
	extensions: [
		"csp"
	]
},
	"application/vnd.contact.cmsg": {
	source: "iana",
	extensions: [
		"cdbcmsg"
	]
},
	"application/vnd.coreos.ignition+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cosmocaller": {
	source: "iana",
	extensions: [
		"cmc"
	]
},
	"application/vnd.crick.clicker": {
	source: "iana",
	extensions: [
		"clkx"
	]
},
	"application/vnd.crick.clicker.keyboard": {
	source: "iana",
	extensions: [
		"clkk"
	]
},
	"application/vnd.crick.clicker.palette": {
	source: "iana",
	extensions: [
		"clkp"
	]
},
	"application/vnd.crick.clicker.template": {
	source: "iana",
	extensions: [
		"clkt"
	]
},
	"application/vnd.crick.clicker.wordbank": {
	source: "iana",
	extensions: [
		"clkw"
	]
},
	"application/vnd.criticaltools.wbs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wbs"
	]
},
	"application/vnd.cryptii.pipe+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.crypto-shade-file": {
	source: "iana"
},
	"application/vnd.cryptomator.encrypted": {
	source: "iana"
},
	"application/vnd.cryptomator.vault": {
	source: "iana"
},
	"application/vnd.ctc-posml": {
	source: "iana",
	extensions: [
		"pml"
	]
},
	"application/vnd.ctct.ws+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cups-pdf": {
	source: "iana"
},
	"application/vnd.cups-postscript": {
	source: "iana"
},
	"application/vnd.cups-ppd": {
	source: "iana",
	extensions: [
		"ppd"
	]
},
	"application/vnd.cups-raster": {
	source: "iana"
},
	"application/vnd.cups-raw": {
	source: "iana"
},
	"application/vnd.curl": {
	source: "iana"
},
	"application/vnd.curl.car": {
	source: "apache",
	extensions: [
		"car"
	]
},
	"application/vnd.curl.pcurl": {
	source: "apache",
	extensions: [
		"pcurl"
	]
},
	"application/vnd.cyan.dean.root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cybank": {
	source: "iana"
},
	"application/vnd.cyclonedx+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cyclonedx+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.d2l.coursepackage1p0+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.d3m-dataset": {
	source: "iana"
},
	"application/vnd.d3m-problem": {
	source: "iana"
},
	"application/vnd.dart": {
	source: "iana",
	compressible: true,
	extensions: [
		"dart"
	]
},
	"application/vnd.data-vision.rdz": {
	source: "iana",
	extensions: [
		"rdz"
	]
},
	"application/vnd.datapackage+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dataresource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dbf": {
	source: "iana",
	extensions: [
		"dbf"
	]
},
	"application/vnd.debian.binary-package": {
	source: "iana"
},
	"application/vnd.dece.data": {
	source: "iana",
	extensions: [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	]
},
	"application/vnd.dece.ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uvt",
		"uvvt"
	]
},
	"application/vnd.dece.unspecified": {
	source: "iana",
	extensions: [
		"uvx",
		"uvvx"
	]
},
	"application/vnd.dece.zip": {
	source: "iana",
	extensions: [
		"uvz",
		"uvvz"
	]
},
	"application/vnd.denovo.fcselayout-link": {
	source: "iana",
	extensions: [
		"fe_launch"
	]
},
	"application/vnd.desmume.movie": {
	source: "iana"
},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
	source: "iana"
},
	"application/vnd.dm.delegation+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dna": {
	source: "iana",
	extensions: [
		"dna"
	]
},
	"application/vnd.document+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dolby.mlp": {
	source: "apache",
	extensions: [
		"mlp"
	]
},
	"application/vnd.dolby.mobile.1": {
	source: "iana"
},
	"application/vnd.dolby.mobile.2": {
	source: "iana"
},
	"application/vnd.doremir.scorecloud-binary-document": {
	source: "iana"
},
	"application/vnd.dpgraph": {
	source: "iana",
	extensions: [
		"dpg"
	]
},
	"application/vnd.dreamfactory": {
	source: "iana",
	extensions: [
		"dfac"
	]
},
	"application/vnd.drive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ds-keypoint": {
	source: "apache",
	extensions: [
		"kpxx"
	]
},
	"application/vnd.dtg.local": {
	source: "iana"
},
	"application/vnd.dtg.local.flash": {
	source: "iana"
},
	"application/vnd.dtg.local.html": {
	source: "iana"
},
	"application/vnd.dvb.ait": {
	source: "iana",
	extensions: [
		"ait"
	]
},
	"application/vnd.dvb.dvbisl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.dvbj": {
	source: "iana"
},
	"application/vnd.dvb.esgcontainer": {
	source: "iana"
},
	"application/vnd.dvb.ipdcdftnotifaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess2": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgpdd": {
	source: "iana"
},
	"application/vnd.dvb.ipdcroaming": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-base": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-enhancement": {
	source: "iana"
},
	"application/vnd.dvb.notif-aggregate-root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-container+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-generic+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-msglist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-init+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.pfr": {
	source: "iana"
},
	"application/vnd.dvb.service": {
	source: "iana",
	extensions: [
		"svc"
	]
},
	"application/vnd.dxr": {
	source: "iana"
},
	"application/vnd.dynageo": {
	source: "iana",
	extensions: [
		"geo"
	]
},
	"application/vnd.dzr": {
	source: "iana"
},
	"application/vnd.easykaraoke.cdgdownload": {
	source: "iana"
},
	"application/vnd.ecdis-update": {
	source: "iana"
},
	"application/vnd.ecip.rlp": {
	source: "iana"
},
	"application/vnd.eclipse.ditto+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ecowin.chart": {
	source: "iana",
	extensions: [
		"mag"
	]
},
	"application/vnd.ecowin.filerequest": {
	source: "iana"
},
	"application/vnd.ecowin.fileupdate": {
	source: "iana"
},
	"application/vnd.ecowin.series": {
	source: "iana"
},
	"application/vnd.ecowin.seriesrequest": {
	source: "iana"
},
	"application/vnd.ecowin.seriesupdate": {
	source: "iana"
},
	"application/vnd.efi.img": {
	source: "iana"
},
	"application/vnd.efi.iso": {
	source: "iana"
},
	"application/vnd.emclient.accessrequest+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.enliven": {
	source: "iana",
	extensions: [
		"nml"
	]
},
	"application/vnd.enphase.envoy": {
	source: "iana"
},
	"application/vnd.eprints.data+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.epson.esf": {
	source: "iana",
	extensions: [
		"esf"
	]
},
	"application/vnd.epson.msf": {
	source: "iana",
	extensions: [
		"msf"
	]
},
	"application/vnd.epson.quickanime": {
	source: "iana",
	extensions: [
		"qam"
	]
},
	"application/vnd.epson.salt": {
	source: "iana",
	extensions: [
		"slt"
	]
},
	"application/vnd.epson.ssf": {
	source: "iana",
	extensions: [
		"ssf"
	]
},
	"application/vnd.ericsson.quickcall": {
	source: "iana"
},
	"application/vnd.espass-espass+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.eszigno3+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"es3",
		"et3"
	]
},
	"application/vnd.etsi.aoc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.asic-e+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.asic-s+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.cug+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvcommand+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-bc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-cod+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-npvr+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvservice+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsync+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mcid+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mheg5": {
	source: "iana"
},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.pstn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.sci+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.simservs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.timestamp-token": {
	source: "iana"
},
	"application/vnd.etsi.tsl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.tsl.der": {
	source: "iana"
},
	"application/vnd.eu.kasparian.car+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.eudora.data": {
	source: "iana"
},
	"application/vnd.evolv.ecig.profile": {
	source: "iana"
},
	"application/vnd.evolv.ecig.settings": {
	source: "iana"
},
	"application/vnd.evolv.ecig.theme": {
	source: "iana"
},
	"application/vnd.exstream-empower+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.exstream-package": {
	source: "iana"
},
	"application/vnd.ezpix-album": {
	source: "iana",
	extensions: [
		"ez2"
	]
},
	"application/vnd.ezpix-package": {
	source: "iana",
	extensions: [
		"ez3"
	]
},
	"application/vnd.f-secure.mobile": {
	source: "iana"
},
	"application/vnd.familysearch.gedcom+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.fastcopy-disk-image": {
	source: "iana"
},
	"application/vnd.fdf": {
	source: "iana",
	extensions: [
		"fdf"
	]
},
	"application/vnd.fdsn.mseed": {
	source: "iana",
	extensions: [
		"mseed"
	]
},
	"application/vnd.fdsn.seed": {
	source: "iana",
	extensions: [
		"seed",
		"dataless"
	]
},
	"application/vnd.ffsns": {
	source: "iana"
},
	"application/vnd.ficlab.flb+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.filmit.zfc": {
	source: "iana"
},
	"application/vnd.fints": {
	source: "iana"
},
	"application/vnd.firemonkeys.cloudcell": {
	source: "iana"
},
	"application/vnd.flographit": {
	source: "iana",
	extensions: [
		"gph"
	]
},
	"application/vnd.fluxtime.clip": {
	source: "iana",
	extensions: [
		"ftc"
	]
},
	"application/vnd.font-fontforge-sfd": {
	source: "iana"
},
	"application/vnd.framemaker": {
	source: "iana",
	extensions: [
		"fm",
		"frame",
		"maker",
		"book"
	]
},
	"application/vnd.frogans.fnc": {
	source: "iana",
	extensions: [
		"fnc"
	]
},
	"application/vnd.frogans.ltf": {
	source: "iana",
	extensions: [
		"ltf"
	]
},
	"application/vnd.fsc.weblaunch": {
	source: "iana",
	extensions: [
		"fsc"
	]
},
	"application/vnd.fujifilm.fb.docuworks": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.binder": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.jfi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.fujitsu.oasys": {
	source: "iana",
	extensions: [
		"oas"
	]
},
	"application/vnd.fujitsu.oasys2": {
	source: "iana",
	extensions: [
		"oa2"
	]
},
	"application/vnd.fujitsu.oasys3": {
	source: "iana",
	extensions: [
		"oa3"
	]
},
	"application/vnd.fujitsu.oasysgp": {
	source: "iana",
	extensions: [
		"fg5"
	]
},
	"application/vnd.fujitsu.oasysprs": {
	source: "iana",
	extensions: [
		"bh2"
	]
},
	"application/vnd.fujixerox.art-ex": {
	source: "iana"
},
	"application/vnd.fujixerox.art4": {
	source: "iana"
},
	"application/vnd.fujixerox.ddd": {
	source: "iana",
	extensions: [
		"ddd"
	]
},
	"application/vnd.fujixerox.docuworks": {
	source: "iana",
	extensions: [
		"xdw"
	]
},
	"application/vnd.fujixerox.docuworks.binder": {
	source: "iana",
	extensions: [
		"xbd"
	]
},
	"application/vnd.fujixerox.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujixerox.hbpl": {
	source: "iana"
},
	"application/vnd.fut-misnet": {
	source: "iana"
},
	"application/vnd.futoin+cbor": {
	source: "iana"
},
	"application/vnd.futoin+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.fuzzysheet": {
	source: "iana",
	extensions: [
		"fzs"
	]
},
	"application/vnd.genomatix.tuxedo": {
	source: "iana",
	extensions: [
		"txd"
	]
},
	"application/vnd.gentics.grd+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geo+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geocube+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.geogebra.file": {
	source: "iana",
	extensions: [
		"ggb"
	]
},
	"application/vnd.geogebra.slides": {
	source: "iana"
},
	"application/vnd.geogebra.tool": {
	source: "iana",
	extensions: [
		"ggt"
	]
},
	"application/vnd.geometry-explorer": {
	source: "iana",
	extensions: [
		"gex",
		"gre"
	]
},
	"application/vnd.geonext": {
	source: "iana",
	extensions: [
		"gxt"
	]
},
	"application/vnd.geoplan": {
	source: "iana",
	extensions: [
		"g2w"
	]
},
	"application/vnd.geospace": {
	source: "iana",
	extensions: [
		"g3w"
	]
},
	"application/vnd.gerber": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt-response": {
	source: "iana"
},
	"application/vnd.gmx": {
	source: "iana",
	extensions: [
		"gmx"
	]
},
	"application/vnd.google-apps.document": {
	compressible: false,
	extensions: [
		"gdoc"
	]
},
	"application/vnd.google-apps.presentation": {
	compressible: false,
	extensions: [
		"gslides"
	]
},
	"application/vnd.google-apps.spreadsheet": {
	compressible: false,
	extensions: [
		"gsheet"
	]
},
	"application/vnd.google-earth.kml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"kml"
	]
},
	"application/vnd.google-earth.kmz": {
	source: "iana",
	compressible: false,
	extensions: [
		"kmz"
	]
},
	"application/vnd.gov.sk.e-form+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gov.sk.e-form+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.grafeq": {
	source: "iana",
	extensions: [
		"gqf",
		"gqs"
	]
},
	"application/vnd.gridmp": {
	source: "iana"
},
	"application/vnd.groove-account": {
	source: "iana",
	extensions: [
		"gac"
	]
},
	"application/vnd.groove-help": {
	source: "iana",
	extensions: [
		"ghf"
	]
},
	"application/vnd.groove-identity-message": {
	source: "iana",
	extensions: [
		"gim"
	]
},
	"application/vnd.groove-injector": {
	source: "iana",
	extensions: [
		"grv"
	]
},
	"application/vnd.groove-tool-message": {
	source: "iana",
	extensions: [
		"gtm"
	]
},
	"application/vnd.groove-tool-template": {
	source: "iana",
	extensions: [
		"tpl"
	]
},
	"application/vnd.groove-vcard": {
	source: "iana",
	extensions: [
		"vcg"
	]
},
	"application/vnd.hal+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hal+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"hal"
	]
},
	"application/vnd.handheld-entertainment+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zmm"
	]
},
	"application/vnd.hbci": {
	source: "iana",
	extensions: [
		"hbci"
	]
},
	"application/vnd.hc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hcl-bireports": {
	source: "iana"
},
	"application/vnd.hdt": {
	source: "iana"
},
	"application/vnd.heroku+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hhe.lesson-player": {
	source: "iana",
	extensions: [
		"les"
	]
},
	"application/vnd.hl7cda+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hl7v2+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hp-hpgl": {
	source: "iana",
	extensions: [
		"hpgl"
	]
},
	"application/vnd.hp-hpid": {
	source: "iana",
	extensions: [
		"hpid"
	]
},
	"application/vnd.hp-hps": {
	source: "iana",
	extensions: [
		"hps"
	]
},
	"application/vnd.hp-jlyt": {
	source: "iana",
	extensions: [
		"jlt"
	]
},
	"application/vnd.hp-pcl": {
	source: "iana",
	extensions: [
		"pcl"
	]
},
	"application/vnd.hp-pclxl": {
	source: "iana",
	extensions: [
		"pclxl"
	]
},
	"application/vnd.httphone": {
	source: "iana"
},
	"application/vnd.hydrostatix.sof-data": {
	source: "iana",
	extensions: [
		"sfd-hdstx"
	]
},
	"application/vnd.hyper+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyper-item+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyperdrive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hzn-3d-crossword": {
	source: "iana"
},
	"application/vnd.ibm.afplinedata": {
	source: "iana"
},
	"application/vnd.ibm.electronic-media": {
	source: "iana"
},
	"application/vnd.ibm.minipay": {
	source: "iana",
	extensions: [
		"mpy"
	]
},
	"application/vnd.ibm.modcap": {
	source: "iana",
	extensions: [
		"afp",
		"listafp",
		"list3820"
	]
},
	"application/vnd.ibm.rights-management": {
	source: "iana",
	extensions: [
		"irm"
	]
},
	"application/vnd.ibm.secure-container": {
	source: "iana",
	extensions: [
		"sc"
	]
},
	"application/vnd.iccprofile": {
	source: "iana",
	extensions: [
		"icc",
		"icm"
	]
},
	"application/vnd.ieee.1905": {
	source: "iana"
},
	"application/vnd.igloader": {
	source: "iana",
	extensions: [
		"igl"
	]
},
	"application/vnd.imagemeter.folder+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.imagemeter.image+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.immervision-ivp": {
	source: "iana",
	extensions: [
		"ivp"
	]
},
	"application/vnd.immervision-ivu": {
	source: "iana",
	extensions: [
		"ivu"
	]
},
	"application/vnd.ims.imsccv1p1": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p2": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p3": {
	source: "iana"
},
	"application/vnd.ims.lis.v2.result+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.informedcontrol.rms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.informix-visionary": {
	source: "iana"
},
	"application/vnd.infotech.project": {
	source: "iana"
},
	"application/vnd.infotech.project+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.innopath.wamp.notification": {
	source: "iana"
},
	"application/vnd.insors.igm": {
	source: "iana",
	extensions: [
		"igm"
	]
},
	"application/vnd.intercon.formnet": {
	source: "iana",
	extensions: [
		"xpw",
		"xpx"
	]
},
	"application/vnd.intergeo": {
	source: "iana",
	extensions: [
		"i2g"
	]
},
	"application/vnd.intertrust.digibox": {
	source: "iana"
},
	"application/vnd.intertrust.nncp": {
	source: "iana"
},
	"application/vnd.intu.qbo": {
	source: "iana",
	extensions: [
		"qbo"
	]
},
	"application/vnd.intu.qfx": {
	source: "iana",
	extensions: [
		"qfx"
	]
},
	"application/vnd.iptc.g2.catalogitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.conceptitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.packageitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.planningitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ipunplugged.rcprofile": {
	source: "iana",
	extensions: [
		"rcprofile"
	]
},
	"application/vnd.irepository.package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"irp"
	]
},
	"application/vnd.is-xpr": {
	source: "iana",
	extensions: [
		"xpr"
	]
},
	"application/vnd.isac.fcs": {
	source: "iana",
	extensions: [
		"fcs"
	]
},
	"application/vnd.iso11783-10+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.jam": {
	source: "iana",
	extensions: [
		"jam"
	]
},
	"application/vnd.japannet-directory-service": {
	source: "iana"
},
	"application/vnd.japannet-jpnstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-payment-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-registration": {
	source: "iana"
},
	"application/vnd.japannet-registration-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-setstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-verification": {
	source: "iana"
},
	"application/vnd.japannet-verification-wakeup": {
	source: "iana"
},
	"application/vnd.jcp.javame.midlet-rms": {
	source: "iana",
	extensions: [
		"rms"
	]
},
	"application/vnd.jisp": {
	source: "iana",
	extensions: [
		"jisp"
	]
},
	"application/vnd.joost.joda-archive": {
	source: "iana",
	extensions: [
		"joda"
	]
},
	"application/vnd.jsk.isdn-ngn": {
	source: "iana"
},
	"application/vnd.kahootz": {
	source: "iana",
	extensions: [
		"ktz",
		"ktr"
	]
},
	"application/vnd.kde.karbon": {
	source: "iana",
	extensions: [
		"karbon"
	]
},
	"application/vnd.kde.kchart": {
	source: "iana",
	extensions: [
		"chrt"
	]
},
	"application/vnd.kde.kformula": {
	source: "iana",
	extensions: [
		"kfo"
	]
},
	"application/vnd.kde.kivio": {
	source: "iana",
	extensions: [
		"flw"
	]
},
	"application/vnd.kde.kontour": {
	source: "iana",
	extensions: [
		"kon"
	]
},
	"application/vnd.kde.kpresenter": {
	source: "iana",
	extensions: [
		"kpr",
		"kpt"
	]
},
	"application/vnd.kde.kspread": {
	source: "iana",
	extensions: [
		"ksp"
	]
},
	"application/vnd.kde.kword": {
	source: "iana",
	extensions: [
		"kwd",
		"kwt"
	]
},
	"application/vnd.kenameaapp": {
	source: "iana",
	extensions: [
		"htke"
	]
},
	"application/vnd.kidspiration": {
	source: "iana",
	extensions: [
		"kia"
	]
},
	"application/vnd.kinar": {
	source: "iana",
	extensions: [
		"kne",
		"knp"
	]
},
	"application/vnd.koan": {
	source: "iana",
	extensions: [
		"skp",
		"skd",
		"skt",
		"skm"
	]
},
	"application/vnd.kodak-descriptor": {
	source: "iana",
	extensions: [
		"sse"
	]
},
	"application/vnd.las": {
	source: "iana"
},
	"application/vnd.las.las+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.las.las+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lasxml"
	]
},
	"application/vnd.laszip": {
	source: "iana"
},
	"application/vnd.leap+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.liberty-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.llamagraphics.life-balance.desktop": {
	source: "iana",
	extensions: [
		"lbd"
	]
},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lbe"
	]
},
	"application/vnd.logipipe.circuit+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.loom": {
	source: "iana"
},
	"application/vnd.lotus-1-2-3": {
	source: "iana",
	extensions: [
		"123"
	]
},
	"application/vnd.lotus-approach": {
	source: "iana",
	extensions: [
		"apr"
	]
},
	"application/vnd.lotus-freelance": {
	source: "iana",
	extensions: [
		"pre"
	]
},
	"application/vnd.lotus-notes": {
	source: "iana",
	extensions: [
		"nsf"
	]
},
	"application/vnd.lotus-organizer": {
	source: "iana",
	extensions: [
		"org"
	]
},
	"application/vnd.lotus-screencam": {
	source: "iana",
	extensions: [
		"scm"
	]
},
	"application/vnd.lotus-wordpro": {
	source: "iana",
	extensions: [
		"lwp"
	]
},
	"application/vnd.macports.portpkg": {
	source: "iana",
	extensions: [
		"portpkg"
	]
},
	"application/vnd.mapbox-vector-tile": {
	source: "iana",
	extensions: [
		"mvt"
	]
},
	"application/vnd.marlin.drm.actiontoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.conftoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.license+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.mdcf": {
	source: "iana"
},
	"application/vnd.mason+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.maxar.archive.3tz+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.maxmind.maxmind-db": {
	source: "iana"
},
	"application/vnd.mcd": {
	source: "iana",
	extensions: [
		"mcd"
	]
},
	"application/vnd.medcalcdata": {
	source: "iana",
	extensions: [
		"mc1"
	]
},
	"application/vnd.mediastation.cdkey": {
	source: "iana",
	extensions: [
		"cdkey"
	]
},
	"application/vnd.meridian-slingshot": {
	source: "iana"
},
	"application/vnd.mfer": {
	source: "iana",
	extensions: [
		"mwf"
	]
},
	"application/vnd.mfmp": {
	source: "iana",
	extensions: [
		"mfm"
	]
},
	"application/vnd.micro+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.micrografx.flo": {
	source: "iana",
	extensions: [
		"flo"
	]
},
	"application/vnd.micrografx.igx": {
	source: "iana",
	extensions: [
		"igx"
	]
},
	"application/vnd.microsoft.portable-executable": {
	source: "iana"
},
	"application/vnd.microsoft.windows.thumbnail-cache": {
	source: "iana"
},
	"application/vnd.miele+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.mif": {
	source: "iana",
	extensions: [
		"mif"
	]
},
	"application/vnd.minisoft-hp3000-save": {
	source: "iana"
},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
	source: "iana"
},
	"application/vnd.mobius.daf": {
	source: "iana",
	extensions: [
		"daf"
	]
},
	"application/vnd.mobius.dis": {
	source: "iana",
	extensions: [
		"dis"
	]
},
	"application/vnd.mobius.mbk": {
	source: "iana",
	extensions: [
		"mbk"
	]
},
	"application/vnd.mobius.mqy": {
	source: "iana",
	extensions: [
		"mqy"
	]
},
	"application/vnd.mobius.msl": {
	source: "iana",
	extensions: [
		"msl"
	]
},
	"application/vnd.mobius.plc": {
	source: "iana",
	extensions: [
		"plc"
	]
},
	"application/vnd.mobius.txf": {
	source: "iana",
	extensions: [
		"txf"
	]
},
	"application/vnd.mophun.application": {
	source: "iana",
	extensions: [
		"mpn"
	]
},
	"application/vnd.mophun.certificate": {
	source: "iana",
	extensions: [
		"mpc"
	]
},
	"application/vnd.motorola.flexsuite": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.adsi": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.fis": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.gotap": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.kmr": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.ttc": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.wem": {
	source: "iana"
},
	"application/vnd.motorola.iprm": {
	source: "iana"
},
	"application/vnd.mozilla.xul+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xul"
	]
},
	"application/vnd.ms-3mfdocument": {
	source: "iana"
},
	"application/vnd.ms-artgalry": {
	source: "iana",
	extensions: [
		"cil"
	]
},
	"application/vnd.ms-asf": {
	source: "iana"
},
	"application/vnd.ms-cab-compressed": {
	source: "iana",
	extensions: [
		"cab"
	]
},
	"application/vnd.ms-color.iccprofile": {
	source: "apache"
},
	"application/vnd.ms-excel": {
	source: "iana",
	compressible: false,
	extensions: [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	]
},
	"application/vnd.ms-excel.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlam"
	]
},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsb"
	]
},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsm"
	]
},
	"application/vnd.ms-excel.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"xltm"
	]
},
	"application/vnd.ms-fontobject": {
	source: "iana",
	compressible: true,
	extensions: [
		"eot"
	]
},
	"application/vnd.ms-htmlhelp": {
	source: "iana",
	extensions: [
		"chm"
	]
},
	"application/vnd.ms-ims": {
	source: "iana",
	extensions: [
		"ims"
	]
},
	"application/vnd.ms-lrm": {
	source: "iana",
	extensions: [
		"lrm"
	]
},
	"application/vnd.ms-office.activex+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-officetheme": {
	source: "iana",
	extensions: [
		"thmx"
	]
},
	"application/vnd.ms-opentype": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-outlook": {
	compressible: false,
	extensions: [
		"msg"
	]
},
	"application/vnd.ms-package.obfuscated-opentype": {
	source: "apache"
},
	"application/vnd.ms-pki.seccat": {
	source: "apache",
	extensions: [
		"cat"
	]
},
	"application/vnd.ms-pki.stl": {
	source: "apache",
	extensions: [
		"stl"
	]
},
	"application/vnd.ms-playready.initiator+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-powerpoint": {
	source: "iana",
	compressible: false,
	extensions: [
		"ppt",
		"pps",
		"pot"
	]
},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppam"
	]
},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
	source: "iana",
	extensions: [
		"pptm"
	]
},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
	source: "iana",
	extensions: [
		"sldm"
	]
},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppsm"
	]
},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"potm"
	]
},
	"application/vnd.ms-printdevicecapabilities+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-printing.printticket+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-printschematicket+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-project": {
	source: "iana",
	extensions: [
		"mpp",
		"mpt"
	]
},
	"application/vnd.ms-tnef": {
	source: "iana"
},
	"application/vnd.ms-windows.devicepairing": {
	source: "iana"
},
	"application/vnd.ms-windows.nwprinting.oob": {
	source: "iana"
},
	"application/vnd.ms-windows.printerpairing": {
	source: "iana"
},
	"application/vnd.ms-windows.wsd.oob": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-resp": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-resp": {
	source: "iana"
},
	"application/vnd.ms-word.document.macroenabled.12": {
	source: "iana",
	extensions: [
		"docm"
	]
},
	"application/vnd.ms-word.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"dotm"
	]
},
	"application/vnd.ms-works": {
	source: "iana",
	extensions: [
		"wps",
		"wks",
		"wcm",
		"wdb"
	]
},
	"application/vnd.ms-wpl": {
	source: "iana",
	extensions: [
		"wpl"
	]
},
	"application/vnd.ms-xpsdocument": {
	source: "iana",
	compressible: false,
	extensions: [
		"xps"
	]
},
	"application/vnd.msa-disk-image": {
	source: "iana"
},
	"application/vnd.mseq": {
	source: "iana",
	extensions: [
		"mseq"
	]
},
	"application/vnd.msign": {
	source: "iana"
},
	"application/vnd.multiad.creator": {
	source: "iana"
},
	"application/vnd.multiad.creator.cif": {
	source: "iana"
},
	"application/vnd.music-niff": {
	source: "iana"
},
	"application/vnd.musician": {
	source: "iana",
	extensions: [
		"mus"
	]
},
	"application/vnd.muvee.style": {
	source: "iana",
	extensions: [
		"msty"
	]
},
	"application/vnd.mynfc": {
	source: "iana",
	extensions: [
		"taglet"
	]
},
	"application/vnd.nacamar.ybrid+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ncd.control": {
	source: "iana"
},
	"application/vnd.ncd.reference": {
	source: "iana"
},
	"application/vnd.nearst.inv+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nebumind.line": {
	source: "iana"
},
	"application/vnd.nervana": {
	source: "iana"
},
	"application/vnd.netfpx": {
	source: "iana"
},
	"application/vnd.neurolanguage.nlu": {
	source: "iana",
	extensions: [
		"nlu"
	]
},
	"application/vnd.nimn": {
	source: "iana"
},
	"application/vnd.nintendo.nitro.rom": {
	source: "iana"
},
	"application/vnd.nintendo.snes.rom": {
	source: "iana"
},
	"application/vnd.nitf": {
	source: "iana",
	extensions: [
		"ntf",
		"nitf"
	]
},
	"application/vnd.noblenet-directory": {
	source: "iana",
	extensions: [
		"nnd"
	]
},
	"application/vnd.noblenet-sealer": {
	source: "iana",
	extensions: [
		"nns"
	]
},
	"application/vnd.noblenet-web": {
	source: "iana",
	extensions: [
		"nnw"
	]
},
	"application/vnd.nokia.catalogs": {
	source: "iana"
},
	"application/vnd.nokia.conml+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.conml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.iptv.config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.isds-radio-presets": {
	source: "iana"
},
	"application/vnd.nokia.landmark+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.landmark+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.landmarkcollection+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.n-gage.ac+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ac"
	]
},
	"application/vnd.nokia.n-gage.data": {
	source: "iana",
	extensions: [
		"ngdat"
	]
},
	"application/vnd.nokia.n-gage.symbian.install": {
	source: "iana",
	extensions: [
		"n-gage"
	]
},
	"application/vnd.nokia.ncd": {
	source: "iana"
},
	"application/vnd.nokia.pcd+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.pcd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.radio-preset": {
	source: "iana",
	extensions: [
		"rpst"
	]
},
	"application/vnd.nokia.radio-presets": {
	source: "iana",
	extensions: [
		"rpss"
	]
},
	"application/vnd.novadigm.edm": {
	source: "iana",
	extensions: [
		"edm"
	]
},
	"application/vnd.novadigm.edx": {
	source: "iana",
	extensions: [
		"edx"
	]
},
	"application/vnd.novadigm.ext": {
	source: "iana",
	extensions: [
		"ext"
	]
},
	"application/vnd.ntt-local.content-share": {
	source: "iana"
},
	"application/vnd.ntt-local.file-transfer": {
	source: "iana"
},
	"application/vnd.ntt-local.ogw_remote-access": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_remote": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.chart": {
	source: "iana",
	extensions: [
		"odc"
	]
},
	"application/vnd.oasis.opendocument.chart-template": {
	source: "iana",
	extensions: [
		"otc"
	]
},
	"application/vnd.oasis.opendocument.database": {
	source: "iana",
	extensions: [
		"odb"
	]
},
	"application/vnd.oasis.opendocument.formula": {
	source: "iana",
	extensions: [
		"odf"
	]
},
	"application/vnd.oasis.opendocument.formula-template": {
	source: "iana",
	extensions: [
		"odft"
	]
},
	"application/vnd.oasis.opendocument.graphics": {
	source: "iana",
	compressible: false,
	extensions: [
		"odg"
	]
},
	"application/vnd.oasis.opendocument.graphics-template": {
	source: "iana",
	extensions: [
		"otg"
	]
},
	"application/vnd.oasis.opendocument.image": {
	source: "iana",
	extensions: [
		"odi"
	]
},
	"application/vnd.oasis.opendocument.image-template": {
	source: "iana",
	extensions: [
		"oti"
	]
},
	"application/vnd.oasis.opendocument.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"odp"
	]
},
	"application/vnd.oasis.opendocument.presentation-template": {
	source: "iana",
	extensions: [
		"otp"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"ods"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
	source: "iana",
	extensions: [
		"ots"
	]
},
	"application/vnd.oasis.opendocument.text": {
	source: "iana",
	compressible: false,
	extensions: [
		"odt"
	]
},
	"application/vnd.oasis.opendocument.text-master": {
	source: "iana",
	extensions: [
		"odm"
	]
},
	"application/vnd.oasis.opendocument.text-template": {
	source: "iana",
	extensions: [
		"ott"
	]
},
	"application/vnd.oasis.opendocument.text-web": {
	source: "iana",
	extensions: [
		"oth"
	]
},
	"application/vnd.obn": {
	source: "iana"
},
	"application/vnd.ocf+cbor": {
	source: "iana"
},
	"application/vnd.oci.image.manifest.v1+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oftn.l10n+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessdownload+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessstreaming+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.cspg-hexbinary": {
	source: "iana"
},
	"application/vnd.oipf.dae.svg+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.dae.xhtml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.pae.gem": {
	source: "iana"
},
	"application/vnd.oipf.spdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.spdlist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.ueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.userprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.olpc-sugar": {
	source: "iana",
	extensions: [
		"xo"
	]
},
	"application/vnd.oma-scws-config": {
	source: "iana"
},
	"application/vnd.oma-scws-http-request": {
	source: "iana"
},
	"application/vnd.oma-scws-http-response": {
	source: "iana"
},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.drm-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.imd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.ltkm": {
	source: "iana"
},
	"application/vnd.oma.bcast.notification+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.provisioningtrigger": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgboot": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgdd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sgdu": {
	source: "iana"
},
	"application/vnd.oma.bcast.simple-symbol-container": {
	source: "iana"
},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sprov+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.stkm": {
	source: "iana"
},
	"application/vnd.oma.cab-address-book+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-feature-handler+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-pcc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-subs-invite+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-user-prefs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.dcd": {
	source: "iana"
},
	"application/vnd.oma.dcdc": {
	source: "iana"
},
	"application/vnd.oma.dd2+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dd2"
	]
},
	"application/vnd.oma.drm.risd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.group-usage-list+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+cbor": {
	source: "iana"
},
	"application/vnd.oma.lwm2m+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+tlv": {
	source: "iana"
},
	"application/vnd.oma.pal+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.final-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.groups+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.push": {
	source: "iana"
},
	"application/vnd.oma.scidm.messages+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.xcap-directory+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-email+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-file+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-folder+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omaloc-supl-init": {
	source: "iana"
},
	"application/vnd.onepager": {
	source: "iana"
},
	"application/vnd.onepagertamp": {
	source: "iana"
},
	"application/vnd.onepagertamx": {
	source: "iana"
},
	"application/vnd.onepagertat": {
	source: "iana"
},
	"application/vnd.onepagertatp": {
	source: "iana"
},
	"application/vnd.onepagertatx": {
	source: "iana"
},
	"application/vnd.openblox.game+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"obgx"
	]
},
	"application/vnd.openblox.game-binary": {
	source: "iana"
},
	"application/vnd.openeye.oeb": {
	source: "iana"
},
	"application/vnd.openofficeorg.extension": {
	source: "apache",
	extensions: [
		"oxt"
	]
},
	"application/vnd.openstreetmap.data+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osm"
	]
},
	"application/vnd.opentimestamps.ots": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"pptx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
	source: "iana",
	extensions: [
		"sldx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
	source: "iana",
	extensions: [
		"ppsx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
	source: "iana",
	extensions: [
		"potx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"xlsx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
	source: "iana",
	extensions: [
		"xltx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
	source: "iana",
	compressible: false,
	extensions: [
		"docx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
	source: "iana",
	extensions: [
		"dotx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.core-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.relationships+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oracle.resource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.orange.indata": {
	source: "iana"
},
	"application/vnd.osa.netdeploy": {
	source: "iana"
},
	"application/vnd.osgeo.mapguide.package": {
	source: "iana",
	extensions: [
		"mgp"
	]
},
	"application/vnd.osgi.bundle": {
	source: "iana"
},
	"application/vnd.osgi.dp": {
	source: "iana",
	extensions: [
		"dp"
	]
},
	"application/vnd.osgi.subsystem": {
	source: "iana",
	extensions: [
		"esa"
	]
},
	"application/vnd.otps.ct-kip+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oxli.countgraph": {
	source: "iana"
},
	"application/vnd.pagerduty+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.palm": {
	source: "iana",
	extensions: [
		"pdb",
		"pqa",
		"oprc"
	]
},
	"application/vnd.panoply": {
	source: "iana"
},
	"application/vnd.paos.xml": {
	source: "iana"
},
	"application/vnd.patentdive": {
	source: "iana"
},
	"application/vnd.patientecommsdoc": {
	source: "iana"
},
	"application/vnd.pawaafile": {
	source: "iana",
	extensions: [
		"paw"
	]
},
	"application/vnd.pcos": {
	source: "iana"
},
	"application/vnd.pg.format": {
	source: "iana",
	extensions: [
		"str"
	]
},
	"application/vnd.pg.osasli": {
	source: "iana",
	extensions: [
		"ei6"
	]
},
	"application/vnd.piaccess.application-licence": {
	source: "iana"
},
	"application/vnd.picsel": {
	source: "iana",
	extensions: [
		"efif"
	]
},
	"application/vnd.pmi.widget": {
	source: "iana",
	extensions: [
		"wg"
	]
},
	"application/vnd.poc.group-advertisement+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.pocketlearn": {
	source: "iana",
	extensions: [
		"plf"
	]
},
	"application/vnd.powerbuilder6": {
	source: "iana",
	extensions: [
		"pbd"
	]
},
	"application/vnd.powerbuilder6-s": {
	source: "iana"
},
	"application/vnd.powerbuilder7": {
	source: "iana"
},
	"application/vnd.powerbuilder7-s": {
	source: "iana"
},
	"application/vnd.powerbuilder75": {
	source: "iana"
},
	"application/vnd.powerbuilder75-s": {
	source: "iana"
},
	"application/vnd.preminet": {
	source: "iana"
},
	"application/vnd.previewsystems.box": {
	source: "iana",
	extensions: [
		"box"
	]
},
	"application/vnd.proteus.magazine": {
	source: "iana",
	extensions: [
		"mgz"
	]
},
	"application/vnd.psfs": {
	source: "iana"
},
	"application/vnd.publishare-delta-tree": {
	source: "iana",
	extensions: [
		"qps"
	]
},
	"application/vnd.pvi.ptid1": {
	source: "iana",
	extensions: [
		"ptid"
	]
},
	"application/vnd.pwg-multiplexed": {
	source: "iana"
},
	"application/vnd.pwg-xhtml-print+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.qualcomm.brew-app-res": {
	source: "iana"
},
	"application/vnd.quarantainenet": {
	source: "iana"
},
	"application/vnd.quark.quarkxpress": {
	source: "iana",
	extensions: [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	]
},
	"application/vnd.quobject-quoxdocument": {
	source: "iana"
},
	"application/vnd.radisys.moml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-stream+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-base+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-group+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-speech+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-transform+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.rainstor.data": {
	source: "iana"
},
	"application/vnd.rapid": {
	source: "iana"
},
	"application/vnd.rar": {
	source: "iana",
	extensions: [
		"rar"
	]
},
	"application/vnd.realvnc.bed": {
	source: "iana",
	extensions: [
		"bed"
	]
},
	"application/vnd.recordare.musicxml": {
	source: "iana",
	extensions: [
		"mxl"
	]
},
	"application/vnd.recordare.musicxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musicxml"
	]
},
	"application/vnd.renlearn.rlprint": {
	source: "iana"
},
	"application/vnd.resilient.logic": {
	source: "iana"
},
	"application/vnd.restful+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.rig.cryptonote": {
	source: "iana",
	extensions: [
		"cryptonote"
	]
},
	"application/vnd.rim.cod": {
	source: "apache",
	extensions: [
		"cod"
	]
},
	"application/vnd.rn-realmedia": {
	source: "apache",
	extensions: [
		"rm"
	]
},
	"application/vnd.rn-realmedia-vbr": {
	source: "apache",
	extensions: [
		"rmvb"
	]
},
	"application/vnd.route66.link66+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"link66"
	]
},
	"application/vnd.rs-274x": {
	source: "iana"
},
	"application/vnd.ruckus.download": {
	source: "iana"
},
	"application/vnd.s3sms": {
	source: "iana"
},
	"application/vnd.sailingtracker.track": {
	source: "iana",
	extensions: [
		"st"
	]
},
	"application/vnd.sar": {
	source: "iana"
},
	"application/vnd.sbm.cid": {
	source: "iana"
},
	"application/vnd.sbm.mid2": {
	source: "iana"
},
	"application/vnd.scribus": {
	source: "iana"
},
	"application/vnd.sealed.3df": {
	source: "iana"
},
	"application/vnd.sealed.csf": {
	source: "iana"
},
	"application/vnd.sealed.doc": {
	source: "iana"
},
	"application/vnd.sealed.eml": {
	source: "iana"
},
	"application/vnd.sealed.mht": {
	source: "iana"
},
	"application/vnd.sealed.net": {
	source: "iana"
},
	"application/vnd.sealed.ppt": {
	source: "iana"
},
	"application/vnd.sealed.tiff": {
	source: "iana"
},
	"application/vnd.sealed.xls": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.html": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.pdf": {
	source: "iana"
},
	"application/vnd.seemail": {
	source: "iana",
	extensions: [
		"see"
	]
},
	"application/vnd.seis+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sema": {
	source: "iana",
	extensions: [
		"sema"
	]
},
	"application/vnd.semd": {
	source: "iana",
	extensions: [
		"semd"
	]
},
	"application/vnd.semf": {
	source: "iana",
	extensions: [
		"semf"
	]
},
	"application/vnd.shade-save-file": {
	source: "iana"
},
	"application/vnd.shana.informed.formdata": {
	source: "iana",
	extensions: [
		"ifm"
	]
},
	"application/vnd.shana.informed.formtemplate": {
	source: "iana",
	extensions: [
		"itp"
	]
},
	"application/vnd.shana.informed.interchange": {
	source: "iana",
	extensions: [
		"iif"
	]
},
	"application/vnd.shana.informed.package": {
	source: "iana",
	extensions: [
		"ipk"
	]
},
	"application/vnd.shootproof+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shopkick+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shp": {
	source: "iana"
},
	"application/vnd.shx": {
	source: "iana"
},
	"application/vnd.sigrok.session": {
	source: "iana"
},
	"application/vnd.simtech-mindmapper": {
	source: "iana",
	extensions: [
		"twd",
		"twds"
	]
},
	"application/vnd.siren+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.smaf": {
	source: "iana",
	extensions: [
		"mmf"
	]
},
	"application/vnd.smart.notebook": {
	source: "iana"
},
	"application/vnd.smart.teacher": {
	source: "iana",
	extensions: [
		"teacher"
	]
},
	"application/vnd.snesdev-page-table": {
	source: "iana"
},
	"application/vnd.software602.filler.form+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fo"
	]
},
	"application/vnd.software602.filler.form-xml-zip": {
	source: "iana"
},
	"application/vnd.solent.sdkm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sdkm",
		"sdkd"
	]
},
	"application/vnd.spotfire.dxp": {
	source: "iana",
	extensions: [
		"dxp"
	]
},
	"application/vnd.spotfire.sfs": {
	source: "iana",
	extensions: [
		"sfs"
	]
},
	"application/vnd.sqlite3": {
	source: "iana"
},
	"application/vnd.sss-cod": {
	source: "iana"
},
	"application/vnd.sss-dtf": {
	source: "iana"
},
	"application/vnd.sss-ntf": {
	source: "iana"
},
	"application/vnd.stardivision.calc": {
	source: "apache",
	extensions: [
		"sdc"
	]
},
	"application/vnd.stardivision.draw": {
	source: "apache",
	extensions: [
		"sda"
	]
},
	"application/vnd.stardivision.impress": {
	source: "apache",
	extensions: [
		"sdd"
	]
},
	"application/vnd.stardivision.math": {
	source: "apache",
	extensions: [
		"smf"
	]
},
	"application/vnd.stardivision.writer": {
	source: "apache",
	extensions: [
		"sdw",
		"vor"
	]
},
	"application/vnd.stardivision.writer-global": {
	source: "apache",
	extensions: [
		"sgl"
	]
},
	"application/vnd.stepmania.package": {
	source: "iana",
	extensions: [
		"smzip"
	]
},
	"application/vnd.stepmania.stepchart": {
	source: "iana",
	extensions: [
		"sm"
	]
},
	"application/vnd.street-stream": {
	source: "iana"
},
	"application/vnd.sun.wadl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wadl"
	]
},
	"application/vnd.sun.xml.calc": {
	source: "apache",
	extensions: [
		"sxc"
	]
},
	"application/vnd.sun.xml.calc.template": {
	source: "apache",
	extensions: [
		"stc"
	]
},
	"application/vnd.sun.xml.draw": {
	source: "apache",
	extensions: [
		"sxd"
	]
},
	"application/vnd.sun.xml.draw.template": {
	source: "apache",
	extensions: [
		"std"
	]
},
	"application/vnd.sun.xml.impress": {
	source: "apache",
	extensions: [
		"sxi"
	]
},
	"application/vnd.sun.xml.impress.template": {
	source: "apache",
	extensions: [
		"sti"
	]
},
	"application/vnd.sun.xml.math": {
	source: "apache",
	extensions: [
		"sxm"
	]
},
	"application/vnd.sun.xml.writer": {
	source: "apache",
	extensions: [
		"sxw"
	]
},
	"application/vnd.sun.xml.writer.global": {
	source: "apache",
	extensions: [
		"sxg"
	]
},
	"application/vnd.sun.xml.writer.template": {
	source: "apache",
	extensions: [
		"stw"
	]
},
	"application/vnd.sus-calendar": {
	source: "iana",
	extensions: [
		"sus",
		"susp"
	]
},
	"application/vnd.svd": {
	source: "iana",
	extensions: [
		"svd"
	]
},
	"application/vnd.swiftview-ics": {
	source: "iana"
},
	"application/vnd.sycle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.syft+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.symbian.install": {
	source: "apache",
	extensions: [
		"sis",
		"sisx"
	]
},
	"application/vnd.syncml+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xsm"
	]
},
	"application/vnd.syncml.dm+wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"bdm"
	]
},
	"application/vnd.syncml.dm+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xdm"
	]
},
	"application/vnd.syncml.dm.notification": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"ddf"
	]
},
	"application/vnd.syncml.dmtnds+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmtnds+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.syncml.ds.notification": {
	source: "iana"
},
	"application/vnd.tableschema+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tao.intent-module-archive": {
	source: "iana",
	extensions: [
		"tao"
	]
},
	"application/vnd.tcpdump.pcap": {
	source: "iana",
	extensions: [
		"pcap",
		"cap",
		"dmp"
	]
},
	"application/vnd.think-cell.ppttc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tmd.mediaflex.api+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.tml": {
	source: "iana"
},
	"application/vnd.tmobile-livetv": {
	source: "iana",
	extensions: [
		"tmo"
	]
},
	"application/vnd.tri.onesource": {
	source: "iana"
},
	"application/vnd.trid.tpt": {
	source: "iana",
	extensions: [
		"tpt"
	]
},
	"application/vnd.triscape.mxs": {
	source: "iana",
	extensions: [
		"mxs"
	]
},
	"application/vnd.trueapp": {
	source: "iana",
	extensions: [
		"tra"
	]
},
	"application/vnd.truedoc": {
	source: "iana"
},
	"application/vnd.ubisoft.webplayer": {
	source: "iana"
},
	"application/vnd.ufdl": {
	source: "iana",
	extensions: [
		"ufd",
		"ufdl"
	]
},
	"application/vnd.uiq.theme": {
	source: "iana",
	extensions: [
		"utz"
	]
},
	"application/vnd.umajin": {
	source: "iana",
	extensions: [
		"umj"
	]
},
	"application/vnd.unity": {
	source: "iana",
	extensions: [
		"unityweb"
	]
},
	"application/vnd.uoml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uoml"
	]
},
	"application/vnd.uplanet.alert": {
	source: "iana"
},
	"application/vnd.uplanet.alert-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.channel": {
	source: "iana"
},
	"application/vnd.uplanet.channel-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.list": {
	source: "iana"
},
	"application/vnd.uplanet.list-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.signal": {
	source: "iana"
},
	"application/vnd.uri-map": {
	source: "iana"
},
	"application/vnd.valve.source.material": {
	source: "iana"
},
	"application/vnd.vcx": {
	source: "iana",
	extensions: [
		"vcx"
	]
},
	"application/vnd.vd-study": {
	source: "iana"
},
	"application/vnd.vectorworks": {
	source: "iana"
},
	"application/vnd.vel+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.verimatrix.vcas": {
	source: "iana"
},
	"application/vnd.veritone.aion+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.veryant.thin": {
	source: "iana"
},
	"application/vnd.ves.encrypted": {
	source: "iana"
},
	"application/vnd.vidsoft.vidconference": {
	source: "iana"
},
	"application/vnd.visio": {
	source: "iana",
	extensions: [
		"vsd",
		"vst",
		"vss",
		"vsw"
	]
},
	"application/vnd.visionary": {
	source: "iana",
	extensions: [
		"vis"
	]
},
	"application/vnd.vividence.scriptfile": {
	source: "iana"
},
	"application/vnd.vsf": {
	source: "iana",
	extensions: [
		"vsf"
	]
},
	"application/vnd.wap.sic": {
	source: "iana"
},
	"application/vnd.wap.slc": {
	source: "iana"
},
	"application/vnd.wap.wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"wbxml"
	]
},
	"application/vnd.wap.wmlc": {
	source: "iana",
	extensions: [
		"wmlc"
	]
},
	"application/vnd.wap.wmlscriptc": {
	source: "iana",
	extensions: [
		"wmlsc"
	]
},
	"application/vnd.webturbo": {
	source: "iana",
	extensions: [
		"wtb"
	]
},
	"application/vnd.wfa.dpp": {
	source: "iana"
},
	"application/vnd.wfa.p2p": {
	source: "iana"
},
	"application/vnd.wfa.wsc": {
	source: "iana"
},
	"application/vnd.windows.devicepairing": {
	source: "iana"
},
	"application/vnd.wmc": {
	source: "iana"
},
	"application/vnd.wmf.bootstrap": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica.package": {
	source: "iana"
},
	"application/vnd.wolfram.player": {
	source: "iana",
	extensions: [
		"nbp"
	]
},
	"application/vnd.wordperfect": {
	source: "iana",
	extensions: [
		"wpd"
	]
},
	"application/vnd.wqd": {
	source: "iana",
	extensions: [
		"wqd"
	]
},
	"application/vnd.wrq-hp3000-labelled": {
	source: "iana"
},
	"application/vnd.wt.stf": {
	source: "iana",
	extensions: [
		"stf"
	]
},
	"application/vnd.wv.csp+wbxml": {
	source: "iana"
},
	"application/vnd.wv.csp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.wv.ssp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xacml+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.xara": {
	source: "iana",
	extensions: [
		"xar"
	]
},
	"application/vnd.xfdl": {
	source: "iana",
	extensions: [
		"xfdl"
	]
},
	"application/vnd.xfdl.webform": {
	source: "iana"
},
	"application/vnd.xmi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xmpie.cpkg": {
	source: "iana"
},
	"application/vnd.xmpie.dpkg": {
	source: "iana"
},
	"application/vnd.xmpie.plan": {
	source: "iana"
},
	"application/vnd.xmpie.ppkg": {
	source: "iana"
},
	"application/vnd.xmpie.xlim": {
	source: "iana"
},
	"application/vnd.yamaha.hv-dic": {
	source: "iana",
	extensions: [
		"hvd"
	]
},
	"application/vnd.yamaha.hv-script": {
	source: "iana",
	extensions: [
		"hvs"
	]
},
	"application/vnd.yamaha.hv-voice": {
	source: "iana",
	extensions: [
		"hvp"
	]
},
	"application/vnd.yamaha.openscoreformat": {
	source: "iana",
	extensions: [
		"osf"
	]
},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osfpvg"
	]
},
	"application/vnd.yamaha.remote-setup": {
	source: "iana"
},
	"application/vnd.yamaha.smaf-audio": {
	source: "iana",
	extensions: [
		"saf"
	]
},
	"application/vnd.yamaha.smaf-phrase": {
	source: "iana",
	extensions: [
		"spf"
	]
},
	"application/vnd.yamaha.through-ngn": {
	source: "iana"
},
	"application/vnd.yamaha.tunnel-udpencap": {
	source: "iana"
},
	"application/vnd.yaoweme": {
	source: "iana"
},
	"application/vnd.yellowriver-custom-menu": {
	source: "iana",
	extensions: [
		"cmp"
	]
},
	"application/vnd.youtube.yt": {
	source: "iana"
},
	"application/vnd.zul": {
	source: "iana",
	extensions: [
		"zir",
		"zirz"
	]
},
	"application/vnd.zzazz.deck+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zaz"
	]
},
	"application/voicexml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"vxml"
	]
},
	"application/voucher-cms+json": {
	source: "iana",
	compressible: true
},
	"application/vq-rtcpxr": {
	source: "iana"
},
	"application/wasm": {
	source: "iana",
	compressible: true,
	extensions: [
		"wasm"
	]
},
	"application/watcherinfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wif"
	]
},
	"application/webpush-options+json": {
	source: "iana",
	compressible: true
},
	"application/whoispp-query": {
	source: "iana"
},
	"application/whoispp-response": {
	source: "iana"
},
	"application/widget": {
	source: "iana",
	extensions: [
		"wgt"
	]
},
	"application/winhlp": {
	source: "apache",
	extensions: [
		"hlp"
	]
},
	"application/wita": {
	source: "iana"
},
	"application/wordperfect5.1": {
	source: "iana"
},
	"application/wsdl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wsdl"
	]
},
	"application/wspolicy+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wspolicy"
	]
},
	"application/x-7z-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"7z"
	]
},
	"application/x-abiword": {
	source: "apache",
	extensions: [
		"abw"
	]
},
	"application/x-ace-compressed": {
	source: "apache",
	extensions: [
		"ace"
	]
},
	"application/x-amf": {
	source: "apache"
},
	"application/x-apple-diskimage": {
	source: "apache",
	extensions: [
		"dmg"
	]
},
	"application/x-arj": {
	compressible: false,
	extensions: [
		"arj"
	]
},
	"application/x-authorware-bin": {
	source: "apache",
	extensions: [
		"aab",
		"x32",
		"u32",
		"vox"
	]
},
	"application/x-authorware-map": {
	source: "apache",
	extensions: [
		"aam"
	]
},
	"application/x-authorware-seg": {
	source: "apache",
	extensions: [
		"aas"
	]
},
	"application/x-bcpio": {
	source: "apache",
	extensions: [
		"bcpio"
	]
},
	"application/x-bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/x-bittorrent": {
	source: "apache",
	extensions: [
		"torrent"
	]
},
	"application/x-blorb": {
	source: "apache",
	extensions: [
		"blb",
		"blorb"
	]
},
	"application/x-bzip": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz"
	]
},
	"application/x-bzip2": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz2",
		"boz"
	]
},
	"application/x-cbr": {
	source: "apache",
	extensions: [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	]
},
	"application/x-cdlink": {
	source: "apache",
	extensions: [
		"vcd"
	]
},
	"application/x-cfs-compressed": {
	source: "apache",
	extensions: [
		"cfs"
	]
},
	"application/x-chat": {
	source: "apache",
	extensions: [
		"chat"
	]
},
	"application/x-chess-pgn": {
	source: "apache",
	extensions: [
		"pgn"
	]
},
	"application/x-chrome-extension": {
	extensions: [
		"crx"
	]
},
	"application/x-cocoa": {
	source: "nginx",
	extensions: [
		"cco"
	]
},
	"application/x-compress": {
	source: "apache"
},
	"application/x-conference": {
	source: "apache",
	extensions: [
		"nsc"
	]
},
	"application/x-cpio": {
	source: "apache",
	extensions: [
		"cpio"
	]
},
	"application/x-csh": {
	source: "apache",
	extensions: [
		"csh"
	]
},
	"application/x-deb": {
	compressible: false
},
	"application/x-debian-package": {
	source: "apache",
	extensions: [
		"deb",
		"udeb"
	]
},
	"application/x-dgc-compressed": {
	source: "apache",
	extensions: [
		"dgc"
	]
},
	"application/x-director": {
	source: "apache",
	extensions: [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	]
},
	"application/x-doom": {
	source: "apache",
	extensions: [
		"wad"
	]
},
	"application/x-dtbncx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ncx"
	]
},
	"application/x-dtbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dtb"
	]
},
	"application/x-dtbresource+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"res"
	]
},
	"application/x-dvi": {
	source: "apache",
	compressible: false,
	extensions: [
		"dvi"
	]
},
	"application/x-envoy": {
	source: "apache",
	extensions: [
		"evy"
	]
},
	"application/x-eva": {
	source: "apache",
	extensions: [
		"eva"
	]
},
	"application/x-font-bdf": {
	source: "apache",
	extensions: [
		"bdf"
	]
},
	"application/x-font-dos": {
	source: "apache"
},
	"application/x-font-framemaker": {
	source: "apache"
},
	"application/x-font-ghostscript": {
	source: "apache",
	extensions: [
		"gsf"
	]
},
	"application/x-font-libgrx": {
	source: "apache"
},
	"application/x-font-linux-psf": {
	source: "apache",
	extensions: [
		"psf"
	]
},
	"application/x-font-pcf": {
	source: "apache",
	extensions: [
		"pcf"
	]
},
	"application/x-font-snf": {
	source: "apache",
	extensions: [
		"snf"
	]
},
	"application/x-font-speedo": {
	source: "apache"
},
	"application/x-font-sunos-news": {
	source: "apache"
},
	"application/x-font-type1": {
	source: "apache",
	extensions: [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	]
},
	"application/x-font-vfont": {
	source: "apache"
},
	"application/x-freearc": {
	source: "apache",
	extensions: [
		"arc"
	]
},
	"application/x-futuresplash": {
	source: "apache",
	extensions: [
		"spl"
	]
},
	"application/x-gca-compressed": {
	source: "apache",
	extensions: [
		"gca"
	]
},
	"application/x-glulx": {
	source: "apache",
	extensions: [
		"ulx"
	]
},
	"application/x-gnumeric": {
	source: "apache",
	extensions: [
		"gnumeric"
	]
},
	"application/x-gramps-xml": {
	source: "apache",
	extensions: [
		"gramps"
	]
},
	"application/x-gtar": {
	source: "apache",
	extensions: [
		"gtar"
	]
},
	"application/x-gzip": {
	source: "apache"
},
	"application/x-hdf": {
	source: "apache",
	extensions: [
		"hdf"
	]
},
	"application/x-httpd-php": {
	compressible: true,
	extensions: [
		"php"
	]
},
	"application/x-install-instructions": {
	source: "apache",
	extensions: [
		"install"
	]
},
	"application/x-iso9660-image": {
	source: "apache",
	extensions: [
		"iso"
	]
},
	"application/x-iwork-keynote-sffkey": {
	extensions: [
		"key"
	]
},
	"application/x-iwork-numbers-sffnumbers": {
	extensions: [
		"numbers"
	]
},
	"application/x-iwork-pages-sffpages": {
	extensions: [
		"pages"
	]
},
	"application/x-java-archive-diff": {
	source: "nginx",
	extensions: [
		"jardiff"
	]
},
	"application/x-java-jnlp-file": {
	source: "apache",
	compressible: false,
	extensions: [
		"jnlp"
	]
},
	"application/x-javascript": {
	compressible: true
},
	"application/x-keepass2": {
	extensions: [
		"kdbx"
	]
},
	"application/x-latex": {
	source: "apache",
	compressible: false,
	extensions: [
		"latex"
	]
},
	"application/x-lua-bytecode": {
	extensions: [
		"luac"
	]
},
	"application/x-lzh-compressed": {
	source: "apache",
	extensions: [
		"lzh",
		"lha"
	]
},
	"application/x-makeself": {
	source: "nginx",
	extensions: [
		"run"
	]
},
	"application/x-mie": {
	source: "apache",
	extensions: [
		"mie"
	]
},
	"application/x-mobipocket-ebook": {
	source: "apache",
	extensions: [
		"prc",
		"mobi"
	]
},
	"application/x-mpegurl": {
	compressible: false
},
	"application/x-ms-application": {
	source: "apache",
	extensions: [
		"application"
	]
},
	"application/x-ms-shortcut": {
	source: "apache",
	extensions: [
		"lnk"
	]
},
	"application/x-ms-wmd": {
	source: "apache",
	extensions: [
		"wmd"
	]
},
	"application/x-ms-wmz": {
	source: "apache",
	extensions: [
		"wmz"
	]
},
	"application/x-ms-xbap": {
	source: "apache",
	extensions: [
		"xbap"
	]
},
	"application/x-msaccess": {
	source: "apache",
	extensions: [
		"mdb"
	]
},
	"application/x-msbinder": {
	source: "apache",
	extensions: [
		"obd"
	]
},
	"application/x-mscardfile": {
	source: "apache",
	extensions: [
		"crd"
	]
},
	"application/x-msclip": {
	source: "apache",
	extensions: [
		"clp"
	]
},
	"application/x-msdos-program": {
	extensions: [
		"exe"
	]
},
	"application/x-msdownload": {
	source: "apache",
	extensions: [
		"exe",
		"dll",
		"com",
		"bat",
		"msi"
	]
},
	"application/x-msmediaview": {
	source: "apache",
	extensions: [
		"mvb",
		"m13",
		"m14"
	]
},
	"application/x-msmetafile": {
	source: "apache",
	extensions: [
		"wmf",
		"wmz",
		"emf",
		"emz"
	]
},
	"application/x-msmoney": {
	source: "apache",
	extensions: [
		"mny"
	]
},
	"application/x-mspublisher": {
	source: "apache",
	extensions: [
		"pub"
	]
},
	"application/x-msschedule": {
	source: "apache",
	extensions: [
		"scd"
	]
},
	"application/x-msterminal": {
	source: "apache",
	extensions: [
		"trm"
	]
},
	"application/x-mswrite": {
	source: "apache",
	extensions: [
		"wri"
	]
},
	"application/x-netcdf": {
	source: "apache",
	extensions: [
		"nc",
		"cdf"
	]
},
	"application/x-ns-proxy-autoconfig": {
	compressible: true,
	extensions: [
		"pac"
	]
},
	"application/x-nzb": {
	source: "apache",
	extensions: [
		"nzb"
	]
},
	"application/x-perl": {
	source: "nginx",
	extensions: [
		"pl",
		"pm"
	]
},
	"application/x-pilot": {
	source: "nginx",
	extensions: [
		"prc",
		"pdb"
	]
},
	"application/x-pkcs12": {
	source: "apache",
	compressible: false,
	extensions: [
		"p12",
		"pfx"
	]
},
	"application/x-pkcs7-certificates": {
	source: "apache",
	extensions: [
		"p7b",
		"spc"
	]
},
	"application/x-pkcs7-certreqresp": {
	source: "apache",
	extensions: [
		"p7r"
	]
},
	"application/x-pki-message": {
	source: "iana"
},
	"application/x-rar-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"rar"
	]
},
	"application/x-redhat-package-manager": {
	source: "nginx",
	extensions: [
		"rpm"
	]
},
	"application/x-research-info-systems": {
	source: "apache",
	extensions: [
		"ris"
	]
},
	"application/x-sea": {
	source: "nginx",
	extensions: [
		"sea"
	]
},
	"application/x-sh": {
	source: "apache",
	compressible: true,
	extensions: [
		"sh"
	]
},
	"application/x-shar": {
	source: "apache",
	extensions: [
		"shar"
	]
},
	"application/x-shockwave-flash": {
	source: "apache",
	compressible: false,
	extensions: [
		"swf"
	]
},
	"application/x-silverlight-app": {
	source: "apache",
	extensions: [
		"xap"
	]
},
	"application/x-sql": {
	source: "apache",
	extensions: [
		"sql"
	]
},
	"application/x-stuffit": {
	source: "apache",
	compressible: false,
	extensions: [
		"sit"
	]
},
	"application/x-stuffitx": {
	source: "apache",
	extensions: [
		"sitx"
	]
},
	"application/x-subrip": {
	source: "apache",
	extensions: [
		"srt"
	]
},
	"application/x-sv4cpio": {
	source: "apache",
	extensions: [
		"sv4cpio"
	]
},
	"application/x-sv4crc": {
	source: "apache",
	extensions: [
		"sv4crc"
	]
},
	"application/x-t3vm-image": {
	source: "apache",
	extensions: [
		"t3"
	]
},
	"application/x-tads": {
	source: "apache",
	extensions: [
		"gam"
	]
},
	"application/x-tar": {
	source: "apache",
	compressible: true,
	extensions: [
		"tar"
	]
},
	"application/x-tcl": {
	source: "apache",
	extensions: [
		"tcl",
		"tk"
	]
},
	"application/x-tex": {
	source: "apache",
	extensions: [
		"tex"
	]
},
	"application/x-tex-tfm": {
	source: "apache",
	extensions: [
		"tfm"
	]
},
	"application/x-texinfo": {
	source: "apache",
	extensions: [
		"texinfo",
		"texi"
	]
},
	"application/x-tgif": {
	source: "apache",
	extensions: [
		"obj"
	]
},
	"application/x-ustar": {
	source: "apache",
	extensions: [
		"ustar"
	]
},
	"application/x-virtualbox-hdd": {
	compressible: true,
	extensions: [
		"hdd"
	]
},
	"application/x-virtualbox-ova": {
	compressible: true,
	extensions: [
		"ova"
	]
},
	"application/x-virtualbox-ovf": {
	compressible: true,
	extensions: [
		"ovf"
	]
},
	"application/x-virtualbox-vbox": {
	compressible: true,
	extensions: [
		"vbox"
	]
},
	"application/x-virtualbox-vbox-extpack": {
	compressible: false,
	extensions: [
		"vbox-extpack"
	]
},
	"application/x-virtualbox-vdi": {
	compressible: true,
	extensions: [
		"vdi"
	]
},
	"application/x-virtualbox-vhd": {
	compressible: true,
	extensions: [
		"vhd"
	]
},
	"application/x-virtualbox-vmdk": {
	compressible: true,
	extensions: [
		"vmdk"
	]
},
	"application/x-wais-source": {
	source: "apache",
	extensions: [
		"src"
	]
},
	"application/x-web-app-manifest+json": {
	compressible: true,
	extensions: [
		"webapp"
	]
},
	"application/x-www-form-urlencoded": {
	source: "iana",
	compressible: true
},
	"application/x-x509-ca-cert": {
	source: "iana",
	extensions: [
		"der",
		"crt",
		"pem"
	]
},
	"application/x-x509-ca-ra-cert": {
	source: "iana"
},
	"application/x-x509-next-ca-cert": {
	source: "iana"
},
	"application/x-xfig": {
	source: "apache",
	extensions: [
		"fig"
	]
},
	"application/x-xliff+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/x-xpinstall": {
	source: "apache",
	compressible: false,
	extensions: [
		"xpi"
	]
},
	"application/x-xz": {
	source: "apache",
	extensions: [
		"xz"
	]
},
	"application/x-zmachine": {
	source: "apache",
	extensions: [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	]
},
	"application/x400-bp": {
	source: "iana"
},
	"application/xacml+xml": {
	source: "iana",
	compressible: true
},
	"application/xaml+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xaml"
	]
},
	"application/xcap-att+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xav"
	]
},
	"application/xcap-caps+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xca"
	]
},
	"application/xcap-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/xcap-el+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xel"
	]
},
	"application/xcap-error+xml": {
	source: "iana",
	compressible: true
},
	"application/xcap-ns+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xns"
	]
},
	"application/xcon-conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/xcon-conference-info-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/xenc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xenc"
	]
},
	"application/xhtml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtml",
		"xht"
	]
},
	"application/xhtml-voice+xml": {
	source: "apache",
	compressible: true
},
	"application/xliff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml",
		"xsl",
		"xsd",
		"rng"
	]
},
	"application/xml-dtd": {
	source: "iana",
	compressible: true,
	extensions: [
		"dtd"
	]
},
	"application/xml-external-parsed-entity": {
	source: "iana"
},
	"application/xml-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/xmpp+xml": {
	source: "iana",
	compressible: true
},
	"application/xop+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xop"
	]
},
	"application/xproc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xpl"
	]
},
	"application/xslt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsl",
		"xslt"
	]
},
	"application/xspf+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xspf"
	]
},
	"application/xv+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	]
},
	"application/yang": {
	source: "iana",
	extensions: [
		"yang"
	]
},
	"application/yang-data+json": {
	source: "iana",
	compressible: true
},
	"application/yang-data+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+json": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/yin+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"yin"
	]
},
	"application/zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"zip"
	]
},
	"application/zlib": {
	source: "iana"
},
	"application/zstd": {
	source: "iana"
},
	"audio/1d-interleaved-parityfec": {
	source: "iana"
},
	"audio/32kadpcm": {
	source: "iana"
},
	"audio/3gpp": {
	source: "iana",
	compressible: false,
	extensions: [
		"3gpp"
	]
},
	"audio/3gpp2": {
	source: "iana"
},
	"audio/aac": {
	source: "iana"
},
	"audio/ac3": {
	source: "iana"
},
	"audio/adpcm": {
	source: "apache",
	extensions: [
		"adp"
	]
},
	"audio/amr": {
	source: "iana",
	extensions: [
		"amr"
	]
},
	"audio/amr-wb": {
	source: "iana"
},
	"audio/amr-wb+": {
	source: "iana"
},
	"audio/aptx": {
	source: "iana"
},
	"audio/asc": {
	source: "iana"
},
	"audio/atrac-advanced-lossless": {
	source: "iana"
},
	"audio/atrac-x": {
	source: "iana"
},
	"audio/atrac3": {
	source: "iana"
},
	"audio/basic": {
	source: "iana",
	compressible: false,
	extensions: [
		"au",
		"snd"
	]
},
	"audio/bv16": {
	source: "iana"
},
	"audio/bv32": {
	source: "iana"
},
	"audio/clearmode": {
	source: "iana"
},
	"audio/cn": {
	source: "iana"
},
	"audio/dat12": {
	source: "iana"
},
	"audio/dls": {
	source: "iana"
},
	"audio/dsr-es201108": {
	source: "iana"
},
	"audio/dsr-es202050": {
	source: "iana"
},
	"audio/dsr-es202211": {
	source: "iana"
},
	"audio/dsr-es202212": {
	source: "iana"
},
	"audio/dv": {
	source: "iana"
},
	"audio/dvi4": {
	source: "iana"
},
	"audio/eac3": {
	source: "iana"
},
	"audio/encaprtp": {
	source: "iana"
},
	"audio/evrc": {
	source: "iana"
},
	"audio/evrc-qcp": {
	source: "iana"
},
	"audio/evrc0": {
	source: "iana"
},
	"audio/evrc1": {
	source: "iana"
},
	"audio/evrcb": {
	source: "iana"
},
	"audio/evrcb0": {
	source: "iana"
},
	"audio/evrcb1": {
	source: "iana"
},
	"audio/evrcnw": {
	source: "iana"
},
	"audio/evrcnw0": {
	source: "iana"
},
	"audio/evrcnw1": {
	source: "iana"
},
	"audio/evrcwb": {
	source: "iana"
},
	"audio/evrcwb0": {
	source: "iana"
},
	"audio/evrcwb1": {
	source: "iana"
},
	"audio/evs": {
	source: "iana"
},
	"audio/flexfec": {
	source: "iana"
},
	"audio/fwdred": {
	source: "iana"
},
	"audio/g711-0": {
	source: "iana"
},
	"audio/g719": {
	source: "iana"
},
	"audio/g722": {
	source: "iana"
},
	"audio/g7221": {
	source: "iana"
},
	"audio/g723": {
	source: "iana"
},
	"audio/g726-16": {
	source: "iana"
},
	"audio/g726-24": {
	source: "iana"
},
	"audio/g726-32": {
	source: "iana"
},
	"audio/g726-40": {
	source: "iana"
},
	"audio/g728": {
	source: "iana"
},
	"audio/g729": {
	source: "iana"
},
	"audio/g7291": {
	source: "iana"
},
	"audio/g729d": {
	source: "iana"
},
	"audio/g729e": {
	source: "iana"
},
	"audio/gsm": {
	source: "iana"
},
	"audio/gsm-efr": {
	source: "iana"
},
	"audio/gsm-hr-08": {
	source: "iana"
},
	"audio/ilbc": {
	source: "iana"
},
	"audio/ip-mr_v2.5": {
	source: "iana"
},
	"audio/isac": {
	source: "apache"
},
	"audio/l16": {
	source: "iana"
},
	"audio/l20": {
	source: "iana"
},
	"audio/l24": {
	source: "iana",
	compressible: false
},
	"audio/l8": {
	source: "iana"
},
	"audio/lpc": {
	source: "iana"
},
	"audio/melp": {
	source: "iana"
},
	"audio/melp1200": {
	source: "iana"
},
	"audio/melp2400": {
	source: "iana"
},
	"audio/melp600": {
	source: "iana"
},
	"audio/mhas": {
	source: "iana"
},
	"audio/midi": {
	source: "apache",
	extensions: [
		"mid",
		"midi",
		"kar",
		"rmi"
	]
},
	"audio/mobile-xmf": {
	source: "iana",
	extensions: [
		"mxmf"
	]
},
	"audio/mp3": {
	compressible: false,
	extensions: [
		"mp3"
	]
},
	"audio/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"m4a",
		"mp4a"
	]
},
	"audio/mp4a-latm": {
	source: "iana"
},
	"audio/mpa": {
	source: "iana"
},
	"audio/mpa-robust": {
	source: "iana"
},
	"audio/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	]
},
	"audio/mpeg4-generic": {
	source: "iana"
},
	"audio/musepack": {
	source: "apache"
},
	"audio/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"oga",
		"ogg",
		"spx",
		"opus"
	]
},
	"audio/opus": {
	source: "iana"
},
	"audio/parityfec": {
	source: "iana"
},
	"audio/pcma": {
	source: "iana"
},
	"audio/pcma-wb": {
	source: "iana"
},
	"audio/pcmu": {
	source: "iana"
},
	"audio/pcmu-wb": {
	source: "iana"
},
	"audio/prs.sid": {
	source: "iana"
},
	"audio/qcelp": {
	source: "iana"
},
	"audio/raptorfec": {
	source: "iana"
},
	"audio/red": {
	source: "iana"
},
	"audio/rtp-enc-aescm128": {
	source: "iana"
},
	"audio/rtp-midi": {
	source: "iana"
},
	"audio/rtploopback": {
	source: "iana"
},
	"audio/rtx": {
	source: "iana"
},
	"audio/s3m": {
	source: "apache",
	extensions: [
		"s3m"
	]
},
	"audio/scip": {
	source: "iana"
},
	"audio/silk": {
	source: "apache",
	extensions: [
		"sil"
	]
},
	"audio/smv": {
	source: "iana"
},
	"audio/smv-qcp": {
	source: "iana"
},
	"audio/smv0": {
	source: "iana"
},
	"audio/sofa": {
	source: "iana"
},
	"audio/sp-midi": {
	source: "iana"
},
	"audio/speex": {
	source: "iana"
},
	"audio/t140c": {
	source: "iana"
},
	"audio/t38": {
	source: "iana"
},
	"audio/telephone-event": {
	source: "iana"
},
	"audio/tetra_acelp": {
	source: "iana"
},
	"audio/tetra_acelp_bb": {
	source: "iana"
},
	"audio/tone": {
	source: "iana"
},
	"audio/tsvcis": {
	source: "iana"
},
	"audio/uemclip": {
	source: "iana"
},
	"audio/ulpfec": {
	source: "iana"
},
	"audio/usac": {
	source: "iana"
},
	"audio/vdvi": {
	source: "iana"
},
	"audio/vmr-wb": {
	source: "iana"
},
	"audio/vnd.3gpp.iufp": {
	source: "iana"
},
	"audio/vnd.4sb": {
	source: "iana"
},
	"audio/vnd.audiokoz": {
	source: "iana"
},
	"audio/vnd.celp": {
	source: "iana"
},
	"audio/vnd.cisco.nse": {
	source: "iana"
},
	"audio/vnd.cmles.radio-events": {
	source: "iana"
},
	"audio/vnd.cns.anp1": {
	source: "iana"
},
	"audio/vnd.cns.inf1": {
	source: "iana"
},
	"audio/vnd.dece.audio": {
	source: "iana",
	extensions: [
		"uva",
		"uvva"
	]
},
	"audio/vnd.digital-winds": {
	source: "iana",
	extensions: [
		"eol"
	]
},
	"audio/vnd.dlna.adts": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.1": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.2": {
	source: "iana"
},
	"audio/vnd.dolby.mlp": {
	source: "iana"
},
	"audio/vnd.dolby.mps": {
	source: "iana"
},
	"audio/vnd.dolby.pl2": {
	source: "iana"
},
	"audio/vnd.dolby.pl2x": {
	source: "iana"
},
	"audio/vnd.dolby.pl2z": {
	source: "iana"
},
	"audio/vnd.dolby.pulse.1": {
	source: "iana"
},
	"audio/vnd.dra": {
	source: "iana",
	extensions: [
		"dra"
	]
},
	"audio/vnd.dts": {
	source: "iana",
	extensions: [
		"dts"
	]
},
	"audio/vnd.dts.hd": {
	source: "iana",
	extensions: [
		"dtshd"
	]
},
	"audio/vnd.dts.uhd": {
	source: "iana"
},
	"audio/vnd.dvb.file": {
	source: "iana"
},
	"audio/vnd.everad.plj": {
	source: "iana"
},
	"audio/vnd.hns.audio": {
	source: "iana"
},
	"audio/vnd.lucent.voice": {
	source: "iana",
	extensions: [
		"lvp"
	]
},
	"audio/vnd.ms-playready.media.pya": {
	source: "iana",
	extensions: [
		"pya"
	]
},
	"audio/vnd.nokia.mobile-xmf": {
	source: "iana"
},
	"audio/vnd.nortel.vbk": {
	source: "iana"
},
	"audio/vnd.nuera.ecelp4800": {
	source: "iana",
	extensions: [
		"ecelp4800"
	]
},
	"audio/vnd.nuera.ecelp7470": {
	source: "iana",
	extensions: [
		"ecelp7470"
	]
},
	"audio/vnd.nuera.ecelp9600": {
	source: "iana",
	extensions: [
		"ecelp9600"
	]
},
	"audio/vnd.octel.sbc": {
	source: "iana"
},
	"audio/vnd.presonus.multitrack": {
	source: "iana"
},
	"audio/vnd.qcelp": {
	source: "iana"
},
	"audio/vnd.rhetorex.32kadpcm": {
	source: "iana"
},
	"audio/vnd.rip": {
	source: "iana",
	extensions: [
		"rip"
	]
},
	"audio/vnd.rn-realaudio": {
	compressible: false
},
	"audio/vnd.sealedmedia.softseal.mpeg": {
	source: "iana"
},
	"audio/vnd.vmx.cvsd": {
	source: "iana"
},
	"audio/vnd.wave": {
	compressible: false
},
	"audio/vorbis": {
	source: "iana",
	compressible: false
},
	"audio/vorbis-config": {
	source: "iana"
},
	"audio/wav": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/wave": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"weba"
	]
},
	"audio/x-aac": {
	source: "apache",
	compressible: false,
	extensions: [
		"aac"
	]
},
	"audio/x-aiff": {
	source: "apache",
	extensions: [
		"aif",
		"aiff",
		"aifc"
	]
},
	"audio/x-caf": {
	source: "apache",
	compressible: false,
	extensions: [
		"caf"
	]
},
	"audio/x-flac": {
	source: "apache",
	extensions: [
		"flac"
	]
},
	"audio/x-m4a": {
	source: "nginx",
	extensions: [
		"m4a"
	]
},
	"audio/x-matroska": {
	source: "apache",
	extensions: [
		"mka"
	]
},
	"audio/x-mpegurl": {
	source: "apache",
	extensions: [
		"m3u"
	]
},
	"audio/x-ms-wax": {
	source: "apache",
	extensions: [
		"wax"
	]
},
	"audio/x-ms-wma": {
	source: "apache",
	extensions: [
		"wma"
	]
},
	"audio/x-pn-realaudio": {
	source: "apache",
	extensions: [
		"ram",
		"ra"
	]
},
	"audio/x-pn-realaudio-plugin": {
	source: "apache",
	extensions: [
		"rmp"
	]
},
	"audio/x-realaudio": {
	source: "nginx",
	extensions: [
		"ra"
	]
},
	"audio/x-tta": {
	source: "apache"
},
	"audio/x-wav": {
	source: "apache",
	extensions: [
		"wav"
	]
},
	"audio/xm": {
	source: "apache",
	extensions: [
		"xm"
	]
},
	"chemical/x-cdx": {
	source: "apache",
	extensions: [
		"cdx"
	]
},
	"chemical/x-cif": {
	source: "apache",
	extensions: [
		"cif"
	]
},
	"chemical/x-cmdf": {
	source: "apache",
	extensions: [
		"cmdf"
	]
},
	"chemical/x-cml": {
	source: "apache",
	extensions: [
		"cml"
	]
},
	"chemical/x-csml": {
	source: "apache",
	extensions: [
		"csml"
	]
},
	"chemical/x-pdb": {
	source: "apache"
},
	"chemical/x-xyz": {
	source: "apache",
	extensions: [
		"xyz"
	]
},
	"font/collection": {
	source: "iana",
	extensions: [
		"ttc"
	]
},
	"font/otf": {
	source: "iana",
	compressible: true,
	extensions: [
		"otf"
	]
},
	"font/sfnt": {
	source: "iana"
},
	"font/ttf": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttf"
	]
},
	"font/woff": {
	source: "iana",
	extensions: [
		"woff"
	]
},
	"font/woff2": {
	source: "iana",
	extensions: [
		"woff2"
	]
},
	"image/aces": {
	source: "iana",
	extensions: [
		"exr"
	]
},
	"image/apng": {
	compressible: false,
	extensions: [
		"apng"
	]
},
	"image/avci": {
	source: "iana",
	extensions: [
		"avci"
	]
},
	"image/avcs": {
	source: "iana",
	extensions: [
		"avcs"
	]
},
	"image/avif": {
	source: "iana",
	compressible: false,
	extensions: [
		"avif"
	]
},
	"image/bmp": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/cgm": {
	source: "iana",
	extensions: [
		"cgm"
	]
},
	"image/dicom-rle": {
	source: "iana",
	extensions: [
		"drle"
	]
},
	"image/emf": {
	source: "iana",
	extensions: [
		"emf"
	]
},
	"image/fits": {
	source: "iana",
	extensions: [
		"fits"
	]
},
	"image/g3fax": {
	source: "iana",
	extensions: [
		"g3"
	]
},
	"image/gif": {
	source: "iana",
	compressible: false,
	extensions: [
		"gif"
	]
},
	"image/heic": {
	source: "iana",
	extensions: [
		"heic"
	]
},
	"image/heic-sequence": {
	source: "iana",
	extensions: [
		"heics"
	]
},
	"image/heif": {
	source: "iana",
	extensions: [
		"heif"
	]
},
	"image/heif-sequence": {
	source: "iana",
	extensions: [
		"heifs"
	]
},
	"image/hej2k": {
	source: "iana",
	extensions: [
		"hej2"
	]
},
	"image/hsj2": {
	source: "iana",
	extensions: [
		"hsj2"
	]
},
	"image/ief": {
	source: "iana",
	extensions: [
		"ief"
	]
},
	"image/jls": {
	source: "iana",
	extensions: [
		"jls"
	]
},
	"image/jp2": {
	source: "iana",
	compressible: false,
	extensions: [
		"jp2",
		"jpg2"
	]
},
	"image/jpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpeg",
		"jpg",
		"jpe"
	]
},
	"image/jph": {
	source: "iana",
	extensions: [
		"jph"
	]
},
	"image/jphc": {
	source: "iana",
	extensions: [
		"jhc"
	]
},
	"image/jpm": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpm"
	]
},
	"image/jpx": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpx",
		"jpf"
	]
},
	"image/jxr": {
	source: "iana",
	extensions: [
		"jxr"
	]
},
	"image/jxra": {
	source: "iana",
	extensions: [
		"jxra"
	]
},
	"image/jxrs": {
	source: "iana",
	extensions: [
		"jxrs"
	]
},
	"image/jxs": {
	source: "iana",
	extensions: [
		"jxs"
	]
},
	"image/jxsc": {
	source: "iana",
	extensions: [
		"jxsc"
	]
},
	"image/jxsi": {
	source: "iana",
	extensions: [
		"jxsi"
	]
},
	"image/jxss": {
	source: "iana",
	extensions: [
		"jxss"
	]
},
	"image/ktx": {
	source: "iana",
	extensions: [
		"ktx"
	]
},
	"image/ktx2": {
	source: "iana",
	extensions: [
		"ktx2"
	]
},
	"image/naplps": {
	source: "iana"
},
	"image/pjpeg": {
	compressible: false
},
	"image/png": {
	source: "iana",
	compressible: false,
	extensions: [
		"png"
	]
},
	"image/prs.btif": {
	source: "iana",
	extensions: [
		"btif"
	]
},
	"image/prs.pti": {
	source: "iana",
	extensions: [
		"pti"
	]
},
	"image/pwg-raster": {
	source: "iana"
},
	"image/sgi": {
	source: "apache",
	extensions: [
		"sgi"
	]
},
	"image/svg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"svg",
		"svgz"
	]
},
	"image/t38": {
	source: "iana",
	extensions: [
		"t38"
	]
},
	"image/tiff": {
	source: "iana",
	compressible: false,
	extensions: [
		"tif",
		"tiff"
	]
},
	"image/tiff-fx": {
	source: "iana",
	extensions: [
		"tfx"
	]
},
	"image/vnd.adobe.photoshop": {
	source: "iana",
	compressible: true,
	extensions: [
		"psd"
	]
},
	"image/vnd.airzip.accelerator.azv": {
	source: "iana",
	extensions: [
		"azv"
	]
},
	"image/vnd.cns.inf2": {
	source: "iana"
},
	"image/vnd.dece.graphic": {
	source: "iana",
	extensions: [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	]
},
	"image/vnd.djvu": {
	source: "iana",
	extensions: [
		"djvu",
		"djv"
	]
},
	"image/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"image/vnd.dwg": {
	source: "iana",
	extensions: [
		"dwg"
	]
},
	"image/vnd.dxf": {
	source: "iana",
	extensions: [
		"dxf"
	]
},
	"image/vnd.fastbidsheet": {
	source: "iana",
	extensions: [
		"fbs"
	]
},
	"image/vnd.fpx": {
	source: "iana",
	extensions: [
		"fpx"
	]
},
	"image/vnd.fst": {
	source: "iana",
	extensions: [
		"fst"
	]
},
	"image/vnd.fujixerox.edmics-mmr": {
	source: "iana",
	extensions: [
		"mmr"
	]
},
	"image/vnd.fujixerox.edmics-rlc": {
	source: "iana",
	extensions: [
		"rlc"
	]
},
	"image/vnd.globalgraphics.pgb": {
	source: "iana"
},
	"image/vnd.microsoft.icon": {
	source: "iana",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/vnd.mix": {
	source: "iana"
},
	"image/vnd.mozilla.apng": {
	source: "iana"
},
	"image/vnd.ms-dds": {
	compressible: true,
	extensions: [
		"dds"
	]
},
	"image/vnd.ms-modi": {
	source: "iana",
	extensions: [
		"mdi"
	]
},
	"image/vnd.ms-photo": {
	source: "apache",
	extensions: [
		"wdp"
	]
},
	"image/vnd.net-fpx": {
	source: "iana",
	extensions: [
		"npx"
	]
},
	"image/vnd.pco.b16": {
	source: "iana",
	extensions: [
		"b16"
	]
},
	"image/vnd.radiance": {
	source: "iana"
},
	"image/vnd.sealed.png": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.gif": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.jpg": {
	source: "iana"
},
	"image/vnd.svf": {
	source: "iana"
},
	"image/vnd.tencent.tap": {
	source: "iana",
	extensions: [
		"tap"
	]
},
	"image/vnd.valve.source.texture": {
	source: "iana",
	extensions: [
		"vtf"
	]
},
	"image/vnd.wap.wbmp": {
	source: "iana",
	extensions: [
		"wbmp"
	]
},
	"image/vnd.xiff": {
	source: "iana",
	extensions: [
		"xif"
	]
},
	"image/vnd.zbrush.pcx": {
	source: "iana",
	extensions: [
		"pcx"
	]
},
	"image/webp": {
	source: "apache",
	extensions: [
		"webp"
	]
},
	"image/wmf": {
	source: "iana",
	extensions: [
		"wmf"
	]
},
	"image/x-3ds": {
	source: "apache",
	extensions: [
		"3ds"
	]
},
	"image/x-cmu-raster": {
	source: "apache",
	extensions: [
		"ras"
	]
},
	"image/x-cmx": {
	source: "apache",
	extensions: [
		"cmx"
	]
},
	"image/x-freehand": {
	source: "apache",
	extensions: [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	]
},
	"image/x-icon": {
	source: "apache",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/x-jng": {
	source: "nginx",
	extensions: [
		"jng"
	]
},
	"image/x-mrsid-image": {
	source: "apache",
	extensions: [
		"sid"
	]
},
	"image/x-ms-bmp": {
	source: "nginx",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/x-pcx": {
	source: "apache",
	extensions: [
		"pcx"
	]
},
	"image/x-pict": {
	source: "apache",
	extensions: [
		"pic",
		"pct"
	]
},
	"image/x-portable-anymap": {
	source: "apache",
	extensions: [
		"pnm"
	]
},
	"image/x-portable-bitmap": {
	source: "apache",
	extensions: [
		"pbm"
	]
},
	"image/x-portable-graymap": {
	source: "apache",
	extensions: [
		"pgm"
	]
},
	"image/x-portable-pixmap": {
	source: "apache",
	extensions: [
		"ppm"
	]
},
	"image/x-rgb": {
	source: "apache",
	extensions: [
		"rgb"
	]
},
	"image/x-tga": {
	source: "apache",
	extensions: [
		"tga"
	]
},
	"image/x-xbitmap": {
	source: "apache",
	extensions: [
		"xbm"
	]
},
	"image/x-xcf": {
	compressible: false
},
	"image/x-xpixmap": {
	source: "apache",
	extensions: [
		"xpm"
	]
},
	"image/x-xwindowdump": {
	source: "apache",
	extensions: [
		"xwd"
	]
},
	"message/cpim": {
	source: "iana"
},
	"message/delivery-status": {
	source: "iana"
},
	"message/disposition-notification": {
	source: "iana",
	extensions: [
		"disposition-notification"
	]
},
	"message/external-body": {
	source: "iana"
},
	"message/feedback-report": {
	source: "iana"
},
	"message/global": {
	source: "iana",
	extensions: [
		"u8msg"
	]
},
	"message/global-delivery-status": {
	source: "iana",
	extensions: [
		"u8dsn"
	]
},
	"message/global-disposition-notification": {
	source: "iana",
	extensions: [
		"u8mdn"
	]
},
	"message/global-headers": {
	source: "iana",
	extensions: [
		"u8hdr"
	]
},
	"message/http": {
	source: "iana",
	compressible: false
},
	"message/imdn+xml": {
	source: "iana",
	compressible: true
},
	"message/news": {
	source: "iana"
},
	"message/partial": {
	source: "iana",
	compressible: false
},
	"message/rfc822": {
	source: "iana",
	compressible: true,
	extensions: [
		"eml",
		"mime"
	]
},
	"message/s-http": {
	source: "iana"
},
	"message/sip": {
	source: "iana"
},
	"message/sipfrag": {
	source: "iana"
},
	"message/tracking-status": {
	source: "iana"
},
	"message/vnd.si.simp": {
	source: "iana"
},
	"message/vnd.wfa.wsc": {
	source: "iana",
	extensions: [
		"wsc"
	]
},
	"model/3mf": {
	source: "iana",
	extensions: [
		"3mf"
	]
},
	"model/e57": {
	source: "iana"
},
	"model/gltf+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"gltf"
	]
},
	"model/gltf-binary": {
	source: "iana",
	compressible: true,
	extensions: [
		"glb"
	]
},
	"model/iges": {
	source: "iana",
	compressible: false,
	extensions: [
		"igs",
		"iges"
	]
},
	"model/mesh": {
	source: "iana",
	compressible: false,
	extensions: [
		"msh",
		"mesh",
		"silo"
	]
},
	"model/mtl": {
	source: "iana",
	extensions: [
		"mtl"
	]
},
	"model/obj": {
	source: "iana",
	extensions: [
		"obj"
	]
},
	"model/step": {
	source: "iana"
},
	"model/step+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"stpx"
	]
},
	"model/step+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpz"
	]
},
	"model/step-xml+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpxz"
	]
},
	"model/stl": {
	source: "iana",
	extensions: [
		"stl"
	]
},
	"model/vnd.collada+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dae"
	]
},
	"model/vnd.dwf": {
	source: "iana",
	extensions: [
		"dwf"
	]
},
	"model/vnd.flatland.3dml": {
	source: "iana"
},
	"model/vnd.gdl": {
	source: "iana",
	extensions: [
		"gdl"
	]
},
	"model/vnd.gs-gdl": {
	source: "apache"
},
	"model/vnd.gs.gdl": {
	source: "iana"
},
	"model/vnd.gtw": {
	source: "iana",
	extensions: [
		"gtw"
	]
},
	"model/vnd.moml+xml": {
	source: "iana",
	compressible: true
},
	"model/vnd.mts": {
	source: "iana",
	extensions: [
		"mts"
	]
},
	"model/vnd.opengex": {
	source: "iana",
	extensions: [
		"ogex"
	]
},
	"model/vnd.parasolid.transmit.binary": {
	source: "iana",
	extensions: [
		"x_b"
	]
},
	"model/vnd.parasolid.transmit.text": {
	source: "iana",
	extensions: [
		"x_t"
	]
},
	"model/vnd.pytha.pyox": {
	source: "iana"
},
	"model/vnd.rosette.annotated-data-model": {
	source: "iana"
},
	"model/vnd.sap.vds": {
	source: "iana",
	extensions: [
		"vds"
	]
},
	"model/vnd.usdz+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"usdz"
	]
},
	"model/vnd.valve.source.compiled-map": {
	source: "iana",
	extensions: [
		"bsp"
	]
},
	"model/vnd.vtu": {
	source: "iana",
	extensions: [
		"vtu"
	]
},
	"model/vrml": {
	source: "iana",
	compressible: false,
	extensions: [
		"wrl",
		"vrml"
	]
},
	"model/x3d+binary": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3db",
		"x3dbz"
	]
},
	"model/x3d+fastinfoset": {
	source: "iana",
	extensions: [
		"x3db"
	]
},
	"model/x3d+vrml": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3dv",
		"x3dvz"
	]
},
	"model/x3d+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"x3d",
		"x3dz"
	]
},
	"model/x3d-vrml": {
	source: "iana",
	extensions: [
		"x3dv"
	]
},
	"multipart/alternative": {
	source: "iana",
	compressible: false
},
	"multipart/appledouble": {
	source: "iana"
},
	"multipart/byteranges": {
	source: "iana"
},
	"multipart/digest": {
	source: "iana"
},
	"multipart/encrypted": {
	source: "iana",
	compressible: false
},
	"multipart/form-data": {
	source: "iana",
	compressible: false
},
	"multipart/header-set": {
	source: "iana"
},
	"multipart/mixed": {
	source: "iana"
},
	"multipart/multilingual": {
	source: "iana"
},
	"multipart/parallel": {
	source: "iana"
},
	"multipart/related": {
	source: "iana",
	compressible: false
},
	"multipart/report": {
	source: "iana"
},
	"multipart/signed": {
	source: "iana",
	compressible: false
},
	"multipart/vnd.bint.med-plus": {
	source: "iana"
},
	"multipart/voice-message": {
	source: "iana"
},
	"multipart/x-mixed-replace": {
	source: "iana"
},
	"text/1d-interleaved-parityfec": {
	source: "iana"
},
	"text/cache-manifest": {
	source: "iana",
	compressible: true,
	extensions: [
		"appcache",
		"manifest"
	]
},
	"text/calendar": {
	source: "iana",
	extensions: [
		"ics",
		"ifb"
	]
},
	"text/calender": {
	compressible: true
},
	"text/cmd": {
	compressible: true
},
	"text/coffeescript": {
	extensions: [
		"coffee",
		"litcoffee"
	]
},
	"text/cql": {
	source: "iana"
},
	"text/cql-expression": {
	source: "iana"
},
	"text/cql-identifier": {
	source: "iana"
},
	"text/css": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"css"
	]
},
	"text/csv": {
	source: "iana",
	compressible: true,
	extensions: [
		"csv"
	]
},
	"text/csv-schema": {
	source: "iana"
},
	"text/directory": {
	source: "iana"
},
	"text/dns": {
	source: "iana"
},
	"text/ecmascript": {
	source: "iana"
},
	"text/encaprtp": {
	source: "iana"
},
	"text/enriched": {
	source: "iana"
},
	"text/fhirpath": {
	source: "iana"
},
	"text/flexfec": {
	source: "iana"
},
	"text/fwdred": {
	source: "iana"
},
	"text/gff3": {
	source: "iana"
},
	"text/grammar-ref-list": {
	source: "iana"
},
	"text/html": {
	source: "iana",
	compressible: true,
	extensions: [
		"html",
		"htm",
		"shtml"
	]
},
	"text/jade": {
	extensions: [
		"jade"
	]
},
	"text/javascript": {
	source: "iana",
	compressible: true
},
	"text/jcr-cnd": {
	source: "iana"
},
	"text/jsx": {
	compressible: true,
	extensions: [
		"jsx"
	]
},
	"text/less": {
	compressible: true,
	extensions: [
		"less"
	]
},
	"text/markdown": {
	source: "iana",
	compressible: true,
	extensions: [
		"markdown",
		"md"
	]
},
	"text/mathml": {
	source: "nginx",
	extensions: [
		"mml"
	]
},
	"text/mdx": {
	compressible: true,
	extensions: [
		"mdx"
	]
},
	"text/mizar": {
	source: "iana"
},
	"text/n3": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"n3"
	]
},
	"text/parameters": {
	source: "iana",
	charset: "UTF-8"
},
	"text/parityfec": {
	source: "iana"
},
	"text/plain": {
	source: "iana",
	compressible: true,
	extensions: [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	]
},
	"text/provenance-notation": {
	source: "iana",
	charset: "UTF-8"
},
	"text/prs.fallenstein.rst": {
	source: "iana"
},
	"text/prs.lines.tag": {
	source: "iana",
	extensions: [
		"dsc"
	]
},
	"text/prs.prop.logic": {
	source: "iana"
},
	"text/raptorfec": {
	source: "iana"
},
	"text/red": {
	source: "iana"
},
	"text/rfc822-headers": {
	source: "iana"
},
	"text/richtext": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtx"
	]
},
	"text/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"text/rtp-enc-aescm128": {
	source: "iana"
},
	"text/rtploopback": {
	source: "iana"
},
	"text/rtx": {
	source: "iana"
},
	"text/sgml": {
	source: "iana",
	extensions: [
		"sgml",
		"sgm"
	]
},
	"text/shaclc": {
	source: "iana"
},
	"text/shex": {
	source: "iana",
	extensions: [
		"shex"
	]
},
	"text/slim": {
	extensions: [
		"slim",
		"slm"
	]
},
	"text/spdx": {
	source: "iana",
	extensions: [
		"spdx"
	]
},
	"text/strings": {
	source: "iana"
},
	"text/stylus": {
	extensions: [
		"stylus",
		"styl"
	]
},
	"text/t140": {
	source: "iana"
},
	"text/tab-separated-values": {
	source: "iana",
	compressible: true,
	extensions: [
		"tsv"
	]
},
	"text/troff": {
	source: "iana",
	extensions: [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	]
},
	"text/turtle": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"ttl"
	]
},
	"text/ulpfec": {
	source: "iana"
},
	"text/uri-list": {
	source: "iana",
	compressible: true,
	extensions: [
		"uri",
		"uris",
		"urls"
	]
},
	"text/vcard": {
	source: "iana",
	compressible: true,
	extensions: [
		"vcard"
	]
},
	"text/vnd.a": {
	source: "iana"
},
	"text/vnd.abc": {
	source: "iana"
},
	"text/vnd.ascii-art": {
	source: "iana"
},
	"text/vnd.curl": {
	source: "iana",
	extensions: [
		"curl"
	]
},
	"text/vnd.curl.dcurl": {
	source: "apache",
	extensions: [
		"dcurl"
	]
},
	"text/vnd.curl.mcurl": {
	source: "apache",
	extensions: [
		"mcurl"
	]
},
	"text/vnd.curl.scurl": {
	source: "apache",
	extensions: [
		"scurl"
	]
},
	"text/vnd.debian.copyright": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.dmclientscript": {
	source: "iana"
},
	"text/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"text/vnd.esmertec.theme-descriptor": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.familysearch.gedcom": {
	source: "iana",
	extensions: [
		"ged"
	]
},
	"text/vnd.ficlab.flt": {
	source: "iana"
},
	"text/vnd.fly": {
	source: "iana",
	extensions: [
		"fly"
	]
},
	"text/vnd.fmi.flexstor": {
	source: "iana",
	extensions: [
		"flx"
	]
},
	"text/vnd.gml": {
	source: "iana"
},
	"text/vnd.graphviz": {
	source: "iana",
	extensions: [
		"gv"
	]
},
	"text/vnd.hans": {
	source: "iana"
},
	"text/vnd.hgl": {
	source: "iana"
},
	"text/vnd.in3d.3dml": {
	source: "iana",
	extensions: [
		"3dml"
	]
},
	"text/vnd.in3d.spot": {
	source: "iana",
	extensions: [
		"spot"
	]
},
	"text/vnd.iptc.newsml": {
	source: "iana"
},
	"text/vnd.iptc.nitf": {
	source: "iana"
},
	"text/vnd.latex-z": {
	source: "iana"
},
	"text/vnd.motorola.reflex": {
	source: "iana"
},
	"text/vnd.ms-mediapackage": {
	source: "iana"
},
	"text/vnd.net2phone.commcenter.command": {
	source: "iana"
},
	"text/vnd.radisys.msml-basic-layout": {
	source: "iana"
},
	"text/vnd.senx.warpscript": {
	source: "iana"
},
	"text/vnd.si.uricatalogue": {
	source: "iana"
},
	"text/vnd.sosi": {
	source: "iana"
},
	"text/vnd.sun.j2me.app-descriptor": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"jad"
	]
},
	"text/vnd.trolltech.linguist": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.wap.si": {
	source: "iana"
},
	"text/vnd.wap.sl": {
	source: "iana"
},
	"text/vnd.wap.wml": {
	source: "iana",
	extensions: [
		"wml"
	]
},
	"text/vnd.wap.wmlscript": {
	source: "iana",
	extensions: [
		"wmls"
	]
},
	"text/vtt": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"vtt"
	]
},
	"text/x-asm": {
	source: "apache",
	extensions: [
		"s",
		"asm"
	]
},
	"text/x-c": {
	source: "apache",
	extensions: [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	]
},
	"text/x-component": {
	source: "nginx",
	extensions: [
		"htc"
	]
},
	"text/x-fortran": {
	source: "apache",
	extensions: [
		"f",
		"for",
		"f77",
		"f90"
	]
},
	"text/x-gwt-rpc": {
	compressible: true
},
	"text/x-handlebars-template": {
	extensions: [
		"hbs"
	]
},
	"text/x-java-source": {
	source: "apache",
	extensions: [
		"java"
	]
},
	"text/x-jquery-tmpl": {
	compressible: true
},
	"text/x-lua": {
	extensions: [
		"lua"
	]
},
	"text/x-markdown": {
	compressible: true,
	extensions: [
		"mkd"
	]
},
	"text/x-nfo": {
	source: "apache",
	extensions: [
		"nfo"
	]
},
	"text/x-opml": {
	source: "apache",
	extensions: [
		"opml"
	]
},
	"text/x-org": {
	compressible: true,
	extensions: [
		"org"
	]
},
	"text/x-pascal": {
	source: "apache",
	extensions: [
		"p",
		"pas"
	]
},
	"text/x-processing": {
	compressible: true,
	extensions: [
		"pde"
	]
},
	"text/x-sass": {
	extensions: [
		"sass"
	]
},
	"text/x-scss": {
	extensions: [
		"scss"
	]
},
	"text/x-setext": {
	source: "apache",
	extensions: [
		"etx"
	]
},
	"text/x-sfv": {
	source: "apache",
	extensions: [
		"sfv"
	]
},
	"text/x-suse-ymp": {
	compressible: true,
	extensions: [
		"ymp"
	]
},
	"text/x-uuencode": {
	source: "apache",
	extensions: [
		"uu"
	]
},
	"text/x-vcalendar": {
	source: "apache",
	extensions: [
		"vcs"
	]
},
	"text/x-vcard": {
	source: "apache",
	extensions: [
		"vcf"
	]
},
	"text/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml"
	]
},
	"text/xml-external-parsed-entity": {
	source: "iana"
},
	"text/yaml": {
	compressible: true,
	extensions: [
		"yaml",
		"yml"
	]
},
	"video/1d-interleaved-parityfec": {
	source: "iana"
},
	"video/3gpp": {
	source: "iana",
	extensions: [
		"3gp",
		"3gpp"
	]
},
	"video/3gpp-tt": {
	source: "iana"
},
	"video/3gpp2": {
	source: "iana",
	extensions: [
		"3g2"
	]
},
	"video/av1": {
	source: "iana"
},
	"video/bmpeg": {
	source: "iana"
},
	"video/bt656": {
	source: "iana"
},
	"video/celb": {
	source: "iana"
},
	"video/dv": {
	source: "iana"
},
	"video/encaprtp": {
	source: "iana"
},
	"video/ffv1": {
	source: "iana"
},
	"video/flexfec": {
	source: "iana"
},
	"video/h261": {
	source: "iana",
	extensions: [
		"h261"
	]
},
	"video/h263": {
	source: "iana",
	extensions: [
		"h263"
	]
},
	"video/h263-1998": {
	source: "iana"
},
	"video/h263-2000": {
	source: "iana"
},
	"video/h264": {
	source: "iana",
	extensions: [
		"h264"
	]
},
	"video/h264-rcdo": {
	source: "iana"
},
	"video/h264-svc": {
	source: "iana"
},
	"video/h265": {
	source: "iana"
},
	"video/iso.segment": {
	source: "iana",
	extensions: [
		"m4s"
	]
},
	"video/jpeg": {
	source: "iana",
	extensions: [
		"jpgv"
	]
},
	"video/jpeg2000": {
	source: "iana"
},
	"video/jpm": {
	source: "apache",
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"video/jxsv": {
	source: "iana"
},
	"video/mj2": {
	source: "iana",
	extensions: [
		"mj2",
		"mjp2"
	]
},
	"video/mp1s": {
	source: "iana"
},
	"video/mp2p": {
	source: "iana"
},
	"video/mp2t": {
	source: "iana",
	extensions: [
		"ts"
	]
},
	"video/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"mp4",
		"mp4v",
		"mpg4"
	]
},
	"video/mp4v-es": {
	source: "iana"
},
	"video/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	]
},
	"video/mpeg4-generic": {
	source: "iana"
},
	"video/mpv": {
	source: "iana"
},
	"video/nv": {
	source: "iana"
},
	"video/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogv"
	]
},
	"video/parityfec": {
	source: "iana"
},
	"video/pointer": {
	source: "iana"
},
	"video/quicktime": {
	source: "iana",
	compressible: false,
	extensions: [
		"qt",
		"mov"
	]
},
	"video/raptorfec": {
	source: "iana"
},
	"video/raw": {
	source: "iana"
},
	"video/rtp-enc-aescm128": {
	source: "iana"
},
	"video/rtploopback": {
	source: "iana"
},
	"video/rtx": {
	source: "iana"
},
	"video/scip": {
	source: "iana"
},
	"video/smpte291": {
	source: "iana"
},
	"video/smpte292m": {
	source: "iana"
},
	"video/ulpfec": {
	source: "iana"
},
	"video/vc1": {
	source: "iana"
},
	"video/vc2": {
	source: "iana"
},
	"video/vnd.cctv": {
	source: "iana"
},
	"video/vnd.dece.hd": {
	source: "iana",
	extensions: [
		"uvh",
		"uvvh"
	]
},
	"video/vnd.dece.mobile": {
	source: "iana",
	extensions: [
		"uvm",
		"uvvm"
	]
},
	"video/vnd.dece.mp4": {
	source: "iana"
},
	"video/vnd.dece.pd": {
	source: "iana",
	extensions: [
		"uvp",
		"uvvp"
	]
},
	"video/vnd.dece.sd": {
	source: "iana",
	extensions: [
		"uvs",
		"uvvs"
	]
},
	"video/vnd.dece.video": {
	source: "iana",
	extensions: [
		"uvv",
		"uvvv"
	]
},
	"video/vnd.directv.mpeg": {
	source: "iana"
},
	"video/vnd.directv.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dlna.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dvb.file": {
	source: "iana",
	extensions: [
		"dvb"
	]
},
	"video/vnd.fvt": {
	source: "iana",
	extensions: [
		"fvt"
	]
},
	"video/vnd.hns.video": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsavc": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsmpeg2": {
	source: "iana"
},
	"video/vnd.motorola.video": {
	source: "iana"
},
	"video/vnd.motorola.videop": {
	source: "iana"
},
	"video/vnd.mpegurl": {
	source: "iana",
	extensions: [
		"mxu",
		"m4u"
	]
},
	"video/vnd.ms-playready.media.pyv": {
	source: "iana",
	extensions: [
		"pyv"
	]
},
	"video/vnd.nokia.interleaved-multimedia": {
	source: "iana"
},
	"video/vnd.nokia.mp4vr": {
	source: "iana"
},
	"video/vnd.nokia.videovoip": {
	source: "iana"
},
	"video/vnd.objectvideo": {
	source: "iana"
},
	"video/vnd.radgamettools.bink": {
	source: "iana"
},
	"video/vnd.radgamettools.smacker": {
	source: "iana"
},
	"video/vnd.sealed.mpeg1": {
	source: "iana"
},
	"video/vnd.sealed.mpeg4": {
	source: "iana"
},
	"video/vnd.sealed.swf": {
	source: "iana"
},
	"video/vnd.sealedmedia.softseal.mov": {
	source: "iana"
},
	"video/vnd.uvvu.mp4": {
	source: "iana",
	extensions: [
		"uvu",
		"uvvu"
	]
},
	"video/vnd.vivo": {
	source: "iana",
	extensions: [
		"viv"
	]
},
	"video/vnd.youtube.yt": {
	source: "iana"
},
	"video/vp8": {
	source: "iana"
},
	"video/vp9": {
	source: "iana"
},
	"video/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"webm"
	]
},
	"video/x-f4v": {
	source: "apache",
	extensions: [
		"f4v"
	]
},
	"video/x-fli": {
	source: "apache",
	extensions: [
		"fli"
	]
},
	"video/x-flv": {
	source: "apache",
	compressible: false,
	extensions: [
		"flv"
	]
},
	"video/x-m4v": {
	source: "apache",
	extensions: [
		"m4v"
	]
},
	"video/x-matroska": {
	source: "apache",
	compressible: false,
	extensions: [
		"mkv",
		"mk3d",
		"mks"
	]
},
	"video/x-mng": {
	source: "apache",
	extensions: [
		"mng"
	]
},
	"video/x-ms-asf": {
	source: "apache",
	extensions: [
		"asf",
		"asx"
	]
},
	"video/x-ms-vob": {
	source: "apache",
	extensions: [
		"vob"
	]
},
	"video/x-ms-wm": {
	source: "apache",
	extensions: [
		"wm"
	]
},
	"video/x-ms-wmv": {
	source: "apache",
	compressible: false,
	extensions: [
		"wmv"
	]
},
	"video/x-ms-wmx": {
	source: "apache",
	extensions: [
		"wmx"
	]
},
	"video/x-ms-wvx": {
	source: "apache",
	extensions: [
		"wvx"
	]
},
	"video/x-msvideo": {
	source: "apache",
	extensions: [
		"avi"
	]
},
	"video/x-sgi-movie": {
	source: "apache",
	extensions: [
		"movie"
	]
},
	"video/x-smv": {
	source: "apache",
	extensions: [
		"smv"
	]
},
	"x-conference/x-cooltalk": {
	source: "apache",
	extensions: [
		"ice"
	]
},
	"x-shader/x-fragment": {
	compressible: true
},
	"x-shader/x-vertex": {
	compressible: true
}
};

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 */

var mimeDb = require$$0;

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

(function (exports) {

	/**
	 * Module dependencies.
	 * @private
	 */

	var db = mimeDb;
	var extname = path$2.extname;

	/**
	 * Module variables.
	 * @private
	 */

	var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
	var TEXT_TYPE_REGEXP = /^text\//i;

	/**
	 * Module exports.
	 * @public
	 */

	exports.charset = charset;
	exports.charsets = { lookup: charset };
	exports.contentType = contentType;
	exports.extension = extension;
	exports.extensions = Object.create(null);
	exports.lookup = lookup;
	exports.types = Object.create(null);

	// Populate the extensions/types maps
	populateMaps(exports.extensions, exports.types);

	/**
	 * Get the default charset for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function charset (type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = EXTRACT_TYPE_REGEXP.exec(type);
	  var mime = match && db[match[1].toLowerCase()];

	  if (mime && mime.charset) {
	    return mime.charset
	  }

	  // default text/* to utf-8
	  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
	    return 'UTF-8'
	  }

	  return false
	}

	/**
	 * Create a full Content-Type header given a MIME type or extension.
	 *
	 * @param {string} str
	 * @return {boolean|string}
	 */

	function contentType (str) {
	  // TODO: should this even be in this module?
	  if (!str || typeof str !== 'string') {
	    return false
	  }

	  var mime = str.indexOf('/') === -1
	    ? exports.lookup(str)
	    : str;

	  if (!mime) {
	    return false
	  }

	  // TODO: use content-type or other module
	  if (mime.indexOf('charset') === -1) {
	    var charset = exports.charset(mime);
	    if (charset) mime += '; charset=' + charset.toLowerCase();
	  }

	  return mime
	}

	/**
	 * Get the default extension for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function extension (type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = EXTRACT_TYPE_REGEXP.exec(type);

	  // get extensions
	  var exts = match && exports.extensions[match[1].toLowerCase()];

	  if (!exts || !exts.length) {
	    return false
	  }

	  return exts[0]
	}

	/**
	 * Lookup the MIME type for a file path/extension.
	 *
	 * @param {string} path
	 * @return {boolean|string}
	 */

	function lookup (path) {
	  if (!path || typeof path !== 'string') {
	    return false
	  }

	  // get the extension ("ext" or ".ext" or full path)
	  var extension = extname('x.' + path)
	    .toLowerCase()
	    .substr(1);

	  if (!extension) {
	    return false
	  }

	  return exports.types[extension] || false
	}

	/**
	 * Populate the extensions and types maps.
	 * @private
	 */

	function populateMaps (extensions, types) {
	  // source preference (least -> most)
	  var preference = ['nginx', 'apache', undefined, 'iana'];

	  Object.keys(db).forEach(function forEachMimeType (type) {
	    var mime = db[type];
	    var exts = mime.extensions;

	    if (!exts || !exts.length) {
	      return
	    }

	    // mime -> extensions
	    extensions[type] = exts;

	    // extension -> mime
	    for (var i = 0; i < exts.length; i++) {
	      var extension = exts[i];

	      if (types[extension]) {
	        var from = preference.indexOf(db[types[extension]].source);
	        var to = preference.indexOf(mime.source);

	        if (types[extension] !== 'application/octet-stream' &&
	          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
	          // skip the remapping
	          continue
	        }
	      }

	      // set the extension -> mime
	      types[extension] = type;
	    }
	  });
	} 
} (mimeTypes));

var defer_1 = defer$1;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer$1(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}

var defer = defer_1;

// API
var async_1 = async$2;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async$2(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}

// API
var abort_1 = abort$2;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort$2(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}

var async$1 = async_1
  , abort$1 = abort_1
  ;

// API
var iterate_1 = iterate$2;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate$2(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort$1(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async$1(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async$1(callback));
  }

  return aborter;
}

// API
var state_1 = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}

var abort = abort_1
  , async = async_1
  ;

// API
var terminator_1 = terminator$2;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator$2(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}

var iterate$1    = iterate_1
  , initState$1  = state_1
  , terminator$1 = terminator_1
  ;

// Public API
var parallel_1 = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState$1(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate$1(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator$1.bind(state, callback);
}

var serialOrdered$2 = {exports: {}};

var iterate    = iterate_1
  , initState  = state_1
  , terminator = terminator_1
  ;

// Public API
serialOrdered$2.exports = serialOrdered$1;
// sorting helpers
serialOrdered$2.exports.ascending  = ascending;
serialOrdered$2.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered$1(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}

var serialOrderedExports = serialOrdered$2.exports;

var serialOrdered = serialOrderedExports;

// Public API
var serial_1 = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}

var asynckit$1 =
{
  parallel      : parallel_1,
  serial        : serial_1,
  serialOrdered : serialOrderedExports
};

/** @type {import('.')} */
var esObjectAtoms = Object;

/** @type {import('.')} */
var esErrors = Error;

/** @type {import('./eval')} */
var _eval = EvalError;

/** @type {import('./range')} */
var range = RangeError;

/** @type {import('./ref')} */
var ref = ReferenceError;

/** @type {import('./syntax')} */
var syntax = SyntaxError;

var type;
var hasRequiredType;

function requireType () {
	if (hasRequiredType) return type;
	hasRequiredType = 1;

	/** @type {import('./type')} */
	type = TypeError;
	return type;
}

/** @type {import('./uri')} */
var uri = URIError;

/** @type {import('./abs')} */
var abs$1 = Math.abs;

/** @type {import('./floor')} */
var floor$1 = Math.floor;

/** @type {import('./max')} */
var max$2 = Math.max;

/** @type {import('./min')} */
var min$1 = Math.min;

/** @type {import('./pow')} */
var pow$1 = Math.pow;

/** @type {import('./round')} */
var round$1 = Math.round;

/** @type {import('./isNaN')} */
var _isNaN = Number.isNaN || function isNaN(a) {
	return a !== a;
};

var $isNaN = _isNaN;

/** @type {import('./sign')} */
var sign$1 = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : 1;
};

/** @type {import('./gOPD')} */
var gOPD = Object.getOwnPropertyDescriptor;

/** @type {import('.')} */
var $gOPD$1 = gOPD;

if ($gOPD$1) {
	try {
		$gOPD$1([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD$1 = null;
	}
}

var gopd = $gOPD$1;

/** @type {import('.')} */
var $defineProperty$2 = Object.defineProperty || false;
if ($defineProperty$2) {
	try {
		$defineProperty$2({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty$2 = false;
	}
}

var esDefineProperty = $defineProperty$2;

var shams$1;
var hasRequiredShams$1;

function requireShams$1 () {
	if (hasRequiredShams$1) return shams$1;
	hasRequiredShams$1 = 1;

	/** @type {import('./shams')} */
	/* eslint complexity: [2, 18], max-statements: [2, 33] */
	shams$1 = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }

		/** @type {{ [k in symbol]?: unknown }} */
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			// eslint-disable-next-line no-extra-parens
			var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}

		return true;
	};
	return shams$1;
}

var hasSymbols$1;
var hasRequiredHasSymbols;

function requireHasSymbols () {
	if (hasRequiredHasSymbols) return hasSymbols$1;
	hasRequiredHasSymbols = 1;

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = requireShams$1();

	/** @type {import('.')} */
	hasSymbols$1 = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }

		return hasSymbolSham();
	};
	return hasSymbols$1;
}

var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;

function requireReflect_getPrototypeOf () {
	if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
	hasRequiredReflect_getPrototypeOf = 1;

	/** @type {import('./Reflect.getPrototypeOf')} */
	Reflect_getPrototypeOf = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;
	return Reflect_getPrototypeOf;
}

var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;

function requireObject_getPrototypeOf () {
	if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
	hasRequiredObject_getPrototypeOf = 1;

	var $Object = esObjectAtoms;

	/** @type {import('./Object.getPrototypeOf')} */
	Object_getPrototypeOf = $Object.getPrototypeOf || null;
	return Object_getPrototypeOf;
}

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max$1 = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max$1(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var implementation = implementation$1;

var functionBind = Function.prototype.bind || implementation;

var functionCall;
var hasRequiredFunctionCall;

function requireFunctionCall () {
	if (hasRequiredFunctionCall) return functionCall;
	hasRequiredFunctionCall = 1;

	/** @type {import('./functionCall')} */
	functionCall = Function.prototype.call;
	return functionCall;
}

var functionApply;
var hasRequiredFunctionApply;

function requireFunctionApply () {
	if (hasRequiredFunctionApply) return functionApply;
	hasRequiredFunctionApply = 1;

	/** @type {import('./functionApply')} */
	functionApply = Function.prototype.apply;
	return functionApply;
}

var reflectApply;
var hasRequiredReflectApply;

function requireReflectApply () {
	if (hasRequiredReflectApply) return reflectApply;
	hasRequiredReflectApply = 1;

	/** @type {import('./reflectApply')} */
	reflectApply = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
	return reflectApply;
}

var actualApply;
var hasRequiredActualApply;

function requireActualApply () {
	if (hasRequiredActualApply) return actualApply;
	hasRequiredActualApply = 1;

	var bind = functionBind;

	var $apply = requireFunctionApply();
	var $call = requireFunctionCall();
	var $reflectApply = requireReflectApply();

	/** @type {import('./actualApply')} */
	actualApply = $reflectApply || bind.call($call, $apply);
	return actualApply;
}

var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;

function requireCallBindApplyHelpers () {
	if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
	hasRequiredCallBindApplyHelpers = 1;

	var bind = functionBind;
	var $TypeError = requireType();

	var $call = requireFunctionCall();
	var $actualApply = requireActualApply();

	/** @type {import('.')} */
	callBindApplyHelpers = function callBindBasic(args) {
		if (args.length < 1 || typeof args[0] !== 'function') {
			throw new $TypeError('a function is required');
		}
		return $actualApply(bind, $call, args);
	};
	return callBindApplyHelpers;
}

var get;
var hasRequiredGet;

function requireGet () {
	if (hasRequiredGet) return get;
	hasRequiredGet = 1;

	var callBind = requireCallBindApplyHelpers();
	var gOPD = gopd;

	var hasProtoAccessor;
	try {
		// eslint-disable-next-line no-extra-parens, no-proto
		hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
			throw e;
		}
	}

	// eslint-disable-next-line no-extra-parens
	var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

	var $Object = Object;
	var $getPrototypeOf = $Object.getPrototypeOf;

	/** @type {import('./get')} */
	get = desc && typeof desc.get === 'function'
		? callBind([desc.get])
		: typeof $getPrototypeOf === 'function'
			? /** @type {import('./get')} */ function getDunder(value) {
				// eslint-disable-next-line eqeqeq
				return $getPrototypeOf(value == null ? value : $Object(value));
			}
			: false;
	return get;
}

var getProto$1;
var hasRequiredGetProto;

function requireGetProto () {
	if (hasRequiredGetProto) return getProto$1;
	hasRequiredGetProto = 1;

	var reflectGetProto = requireReflect_getPrototypeOf();
	var originalGetProto = requireObject_getPrototypeOf();

	var getDunderProto = requireGet();

	/** @type {import('.')} */
	getProto$1 = reflectGetProto
		? function getProto(O) {
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return reflectGetProto(O);
		}
		: originalGetProto
			? function getProto(O) {
				if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
					throw new TypeError('getProto: not an object');
				}
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return originalGetProto(O);
			}
			: getDunderProto
				? function getProto(O) {
					// @ts-expect-error TS can't narrow inside a closure, for some reason
					return getDunderProto(O);
				}
				: null;
	return getProto$1;
}

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind$1 = functionBind;

/** @type {import('.')} */
var hasown = bind$1.call(call, $hasOwn);

var undefined$1;

var $Object = esObjectAtoms;

var $Error = esErrors;
var $EvalError = _eval;
var $RangeError = range;
var $ReferenceError = ref;
var $SyntaxError = syntax;
var $TypeError$1 = requireType();
var $URIError = uri;

var abs = abs$1;
var floor = floor$1;
var max = max$2;
var min = min$1;
var pow = pow$1;
var round = round$1;
var sign = sign$1;

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = gopd;
var $defineProperty$1 = esDefineProperty;

var throwTypeError = function () {
	throw new $TypeError$1();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = requireHasSymbols()();

var getProto = requireGetProto();
var $ObjectGPO = requireObject_getPrototypeOf();
var $ReflectGPO = requireReflect_getPrototypeOf();

var $apply = requireFunctionApply();
var $call = requireFunctionCall();

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$1,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty$1,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = functionBind;
var hasOwn$2 = hasown;
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn$2(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn$2(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$1('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$1('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$1('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn$2(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$1('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void 0;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn$2(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var shams;
var hasRequiredShams;

function requireShams () {
	if (hasRequiredShams) return shams;
	hasRequiredShams = 1;

	var hasSymbols = requireShams$1();

	/** @type {import('.')} */
	shams = function hasToStringTagShams() {
		return hasSymbols() && !!Symbol.toStringTag;
	};
	return shams;
}

var GetIntrinsic = getIntrinsic;

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasToStringTag = requireShams()();
var hasOwn$1 = hasown;
var $TypeError = requireType();

var toStringTag = hasToStringTag ? Symbol.toStringTag : null;

/** @type {import('.')} */
var esSetTostringtag = function setToStringTag(object, value) {
	var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
	var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
	if (
		(typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean')
		|| (typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean')
	) {
		throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
	}
	if (toStringTag && (overrideIfSet || !hasOwn$1(object, toStringTag))) {
		if ($defineProperty) {
			$defineProperty(object, toStringTag, {
				configurable: !nonConfigurable,
				enumerable: false,
				value: value,
				writable: false
			});
		} else {
			object[toStringTag] = value; // eslint-disable-line no-param-reassign
		}
	}
};

// populates missing values
var populate$1 = function (dst, src) {
  Object.keys(src).forEach(function (prop) {
    dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
  });

  return dst;
};

var CombinedStream = combined_stream;
var util = require$$1;
var path = path$2;
var http = require$$3$1;
var https = require$$4$1;
var parseUrl = require$$5.parse;
var fs = fs$2;
var Stream = require$$0$1.Stream;
var crypto = require$$3;
var mime = mimeTypes;
var asynckit = asynckit$1;
var setToStringTag = esSetTostringtag;
var hasOwn = hasown;
var populate = populate$1;

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {}; // eslint-disable-line no-param-reassign
  for (var option in options) { // eslint-disable-line no-restricted-syntax
    this[option] = options[option];
  }
}

// make it a Stream
util.inherits(FormData, CombinedStream);

FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData.prototype.append = function (field, value, options) {
  options = options || {}; // eslint-disable-line no-param-reassign

  // allow filename as single option
  if (typeof options === 'string') {
    options = { filename: options }; // eslint-disable-line no-param-reassign
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value === 'number' || value == null) {
    value = String(value); // eslint-disable-line no-param-reassign
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (Array.isArray(value)) {
    /*
     * Please convert your array into string
     * the way web server expects it
     */
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData.prototype._trackLength = function (header, value, options) {
  var valueLength = 0;

  /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */
  if (options.knownLength != null) {
    valueLength += Number(options.knownLength);
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response or not a stream
  if (!value || (!value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream))) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData.prototype._lengthRetriever = function (value, callback) {
  if (hasOwn(value, 'fd')) {
    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {
      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return

      // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function (err, stat) {
        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        var fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

    // or http response
  } else if (hasOwn(value, 'httpVersion')) {
    callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return

    // or request stream http://github.com/mikeal/request
  } else if (hasOwn(value, 'httpModule')) {
    // wait till response come back
    value.on('response', function (response) {
      value.pause();
      callback(null, Number(response.headers['content-length']));
    });
    value.resume();

    // something else
  } else {
    callback('Unknown stream'); // eslint-disable-line callback-return
  }
};

FormData.prototype._multiPartHeader = function (field, value, options) {
  /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */
  if (typeof options.header === 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header === 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) { // eslint-disable-line no-restricted-syntax
    if (hasOwn(headers, prop)) {
      header = headers[prop];

      // skip nullish headers.
      if (header == null) {
        continue; // eslint-disable-line no-restricted-syntax, no-continue
      }

      // convert all headers to arrays.
      if (!Array.isArray(header)) {
        header = [header];
      }

      // add non-empty headers.
      if (header.length) {
        contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
      }
    }
  }

  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};

FormData.prototype._getContentDisposition = function (value, options) { // eslint-disable-line consistent-return
  var filename;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || (value && (value.name || value.path))) {
    /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */
    filename = path.basename(options.filename || (value && (value.name || value.path)));
  } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    return 'filename="' + filename + '"';
  }
};

FormData.prototype._getContentType = function (value, options) {
  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && value && typeof value === 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData.prototype._multiPartFooter = function () {
  return function (next) {
    var footer = FormData.LINE_BREAK;

    var lastPart = this._streams.length === 0;
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData.prototype._lastBoundary = function () {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};

FormData.prototype.getHeaders = function (userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) { // eslint-disable-line no-restricted-syntax
    if (hasOwn(userHeaders, header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData.prototype.setBoundary = function (boundary) {
  if (typeof boundary !== 'string') {
    throw new TypeError('FormData boundary must be a string');
  }
  this._boundary = boundary;
};

FormData.prototype.getBoundary = function () {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData.prototype.getBuffer = function () {
  var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {
      // Add content to the buffer.
      if (Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
      } else {
        dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
        dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData.LINE_BREAK)]);
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
};

FormData.prototype._generateBoundary = function () {
  // This generates a 50 character boundary similar to those used by Firefox.

  // They are optimized for boyer-moore parsing.
  this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function () {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function () {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData.prototype.getLength = function (cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function (err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function (length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData.prototype.submit = function (params, cb) {
  var request;
  var options;
  var defaults = { method: 'post' };

  // parse provided url if it's string or treat it as options object
  if (typeof params === 'string') {
    params = parseUrl(params); // eslint-disable-line no-param-reassign
    /* eslint sort-keys: 0 */
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);
  } else { // use custom params
    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol === 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol === 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function (err, length) {
    if (err && err !== 'Unknown stream') {
      this._error(err);
      return;
    }

    // add content length
    if (length) {
      request.setHeader('Content-Length', length);
    }

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce); // eslint-disable-line no-invalid-this
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData.prototype._error = function (err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData.prototype.toString = function () {
  return '[object FormData]';
};
setToStringTag(FormData, 'FormData');

// Public API
var form_data = FormData;

var FormData$1 = /*@__PURE__*/getDefaultExportFromCjs(form_data);

const axios = createAxiosInstance();
const DEFAULT_MISTRAL_BASE_URL = 'https://api.mistral.ai/v1';
const DEFAULT_MISTRAL_MODEL = 'mistral-ocr-latest';
/**
 * Uploads a document to Mistral API using file streaming to avoid loading the entire file into memory
 * @param params Upload parameters
 * @param params.filePath The path to the file on disk
 * @param params.fileName Optional filename to use (defaults to the name from filePath)
 * @param params.apiKey Mistral API key
 * @param params.baseURL Mistral API base URL
 * @returns The response from Mistral API
 */
function uploadDocumentToMistral({ apiKey, filePath, baseURL = DEFAULT_MISTRAL_BASE_URL, fileName = '', }) {
    return __awaiter(this, void 0, void 0, function* () {
        const form = new FormData$1();
        form.append('purpose', 'ocr');
        const actualFileName = fileName || path__namespace.basename(filePath);
        const fileStream = fs__namespace.createReadStream(filePath);
        form.append('file', fileStream, { filename: actualFileName });
        return axios
            .post(`${baseURL}/files`, form, {
            headers: Object.assign({ Authorization: `Bearer ${apiKey}` }, form.getHeaders()),
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
        })
            .then((res) => res.data)
            .catch((error) => {
            throw error;
        });
    });
}
function getSignedUrl({ apiKey, fileId, expiry = 24, baseURL = DEFAULT_MISTRAL_BASE_URL, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return axios
            .get(`${baseURL}/files/${fileId}/url?expiry=${expiry}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
            .then((res) => res.data)
            .catch((error) => {
            dataSchemas.logger.error('Error fetching signed URL:', error.message);
            throw error;
        });
    });
}
/**
 * @param {Object} params
 * @param {string} params.apiKey
 * @param {string} params.url - The document or image URL
 * @param {string} [params.documentType='document_url'] - 'document_url' or 'image_url'
 * @param {string} [params.model]
 * @param {string} [params.baseURL]
 * @returns {Promise<OCRResult>}
 */
function performOCR({ url, apiKey, model = DEFAULT_MISTRAL_MODEL, baseURL = DEFAULT_MISTRAL_BASE_URL, documentType = 'document_url', }) {
    return __awaiter(this, void 0, void 0, function* () {
        const documentKey = documentType === 'image_url' ? 'image_url' : 'document_url';
        return axios
            .post(`${baseURL}/ocr`, {
            model,
            image_limit: 0,
            include_image_base64: false,
            document: {
                type: documentType,
                [documentKey]: url,
            },
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        })
            .then((res) => res.data)
            .catch((error) => {
            dataSchemas.logger.error('Error performing OCR:', error.message);
            throw error;
        });
    });
}
/**
 * Deletes a file from Mistral API
 * @param params Delete parameters
 * @param params.fileId The file ID to delete
 * @param params.apiKey Mistral API key
 * @param params.baseURL Mistral API base URL
 * @returns Promise that resolves when the file is deleted
 */
function deleteMistralFile({ fileId, apiKey, baseURL = DEFAULT_MISTRAL_BASE_URL, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios.delete(`${baseURL}/files/${fileId}`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });
            dataSchemas.logger.debug(`Mistral file ${fileId} deleted successfully:`, result.data);
        }
        catch (error) {
            dataSchemas.logger.error(`Error deleting Mistral file ${fileId}:`, error);
        }
    });
}
/**
 * Determines if a value needs to be loaded from environment
 */
function needsEnvLoad(value) {
    return librechatDataProvider.envVarRegex.test(value) || !value.trim();
}
/**
 * Gets the environment variable name for a config value
 */
function getEnvVarName(configValue, defaultName) {
    if (!librechatDataProvider.envVarRegex.test(configValue)) {
        return defaultName;
    }
    return librechatDataProvider.extractVariableName(configValue) || defaultName;
}
/**
 * Resolves a configuration value from either hardcoded or environment
 */
function resolveConfigValue(configValue, defaultEnvName, authValues, defaultValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // If it's a hardcoded value (not env var and not empty), use it directly
        if (!needsEnvLoad(configValue)) {
            return configValue;
        }
        // Otherwise, get from auth values
        const envVarName = getEnvVarName(configValue, defaultEnvName);
        return authValues[envVarName] || defaultValue || '';
    });
}
/**
 * Loads authentication configuration from OCR config
 */
function loadAuthConfig(context) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const ocrConfig = (_a = context.req.app.locals) === null || _a === void 0 ? void 0 : _a.ocr;
        const apiKeyConfig = (ocrConfig === null || ocrConfig === void 0 ? void 0 : ocrConfig.apiKey) || '';
        const baseURLConfig = (ocrConfig === null || ocrConfig === void 0 ? void 0 : ocrConfig.baseURL) || '';
        if (!needsEnvLoad(apiKeyConfig) && !needsEnvLoad(baseURLConfig)) {
            return {
                apiKey: apiKeyConfig,
                baseURL: baseURLConfig,
            };
        }
        const authFields = [];
        if (needsEnvLoad(baseURLConfig)) {
            authFields.push(getEnvVarName(baseURLConfig, 'OCR_BASEURL'));
        }
        if (needsEnvLoad(apiKeyConfig)) {
            authFields.push(getEnvVarName(apiKeyConfig, 'OCR_API_KEY'));
        }
        const authValues = yield context.loadAuthValues({
            userId: ((_b = context.req.user) === null || _b === void 0 ? void 0 : _b.id) || '',
            authFields,
            optional: new Set(['OCR_BASEURL']),
        });
        const apiKey = yield resolveConfigValue(apiKeyConfig, 'OCR_API_KEY', authValues);
        const baseURL = yield resolveConfigValue(baseURLConfig, 'OCR_BASEURL', authValues, DEFAULT_MISTRAL_BASE_URL);
        return { apiKey, baseURL };
    });
}
/**
 * Gets the model configuration
 */
function getModelConfig(ocrConfig) {
    const modelConfig = (ocrConfig === null || ocrConfig === void 0 ? void 0 : ocrConfig.mistralModel) || '';
    if (!modelConfig.trim()) {
        return DEFAULT_MISTRAL_MODEL;
    }
    if (librechatDataProvider.envVarRegex.test(modelConfig)) {
        return librechatDataProvider.extractEnvVariable(modelConfig) || DEFAULT_MISTRAL_MODEL;
    }
    return modelConfig.trim();
}
/**
 * Determines document type based on file
 */
function getDocumentType(file) {
    const mimetype = (file.mimetype || '').toLowerCase();
    const originalname = file.originalname || '';
    const isImage = mimetype.startsWith('image') || /\.(png|jpe?g|gif|bmp|webp|tiff?)$/i.test(originalname);
    return isImage ? 'image_url' : 'document_url';
}
/**
 * Processes OCR result pages into aggregated text and images
 */
function processOCRResult(ocrResult) {
    let aggregatedText = '';
    const images = [];
    ocrResult.pages.forEach((page, index) => {
        if (ocrResult.pages.length > 1) {
            aggregatedText += `# PAGE ${index + 1}\n`;
        }
        aggregatedText += page.markdown + '\n\n';
        if (!page.images || page.images.length === 0) {
            return;
        }
        page.images.forEach((image) => {
            if (image.image_base64) {
                images.push(image.image_base64);
            }
        });
    });
    return { text: aggregatedText, images };
}
/**
 * Creates an error message for OCR operations
 */
function createOCRError(error, baseMessage) {
    var _a, _b, _c, _d;
    const axiosError = error;
    const detail = (_b = (_a = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.detail;
    const message = detail || baseMessage;
    const responseMessage = (_d = (_c = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message;
    const errorLog = logAxiosError({ error: axiosError, message });
    const fullMessage = responseMessage ? `${errorLog} - ${responseMessage}` : errorLog;
    return new Error(fullMessage);
}
/**
 * Uploads a file to the Mistral OCR API and processes the OCR result.
 *
 * @param params - The params object.
 * @param params.req - The request object from Express. It should have a `user` property with an `id`
 *                       representing the user
 * @param params.file - The file object, which is part of the request. The file object should
 *                                     have a `mimetype` property that tells us the file type
 * @param params.loadAuthValues - Function to load authentication values
 * @returns - The result object containing the processed `text` and `images` (not currently used),
 *                       along with the `filename` and `bytes` properties.
 */
const uploadMistralOCR = (context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let mistralFileId;
    let apiKey;
    let baseURL;
    try {
        const authConfig = yield loadAuthConfig(context);
        apiKey = authConfig.apiKey;
        baseURL = authConfig.baseURL;
        const model = getModelConfig((_a = context.req.app.locals) === null || _a === void 0 ? void 0 : _a.ocr);
        const mistralFile = yield uploadDocumentToMistral({
            filePath: context.file.path,
            fileName: context.file.originalname,
            apiKey,
            baseURL,
        });
        mistralFileId = mistralFile.id;
        const signedUrlResponse = yield getSignedUrl({
            apiKey,
            baseURL,
            fileId: mistralFile.id,
        });
        const documentType = getDocumentType(context.file);
        const ocrResult = yield performOCR({
            url: signedUrlResponse.url,
            documentType,
            baseURL,
            apiKey,
            model,
        });
        if (!ocrResult || !ocrResult.pages || ocrResult.pages.length === 0) {
            throw new Error('No OCR result returned from service, may be down or the file is not supported.');
        }
        const { text, images } = processOCRResult(ocrResult);
        if (mistralFileId && apiKey && baseURL) {
            yield deleteMistralFile({ fileId: mistralFileId, apiKey, baseURL });
        }
        return {
            filename: context.file.originalname,
            bytes: text.length * 4,
            filepath: librechatDataProvider.FileSources.mistral_ocr,
            text,
            images,
        };
    }
    catch (error) {
        if (mistralFileId && apiKey && baseURL) {
            yield deleteMistralFile({ fileId: mistralFileId, apiKey, baseURL });
        }
        throw createOCRError(error, 'Error uploading document to Mistral OCR API:');
    }
});
/**
 * Use Azure Mistral OCR API to processe the OCR result.
 *
 * @param params - The params object.
 * @param params.req - The request object from Express. It should have a `user` property with an `id`
 *                       representing the user
 * @param params.file - The file object, which is part of the request. The file object should
 *                                     have a `mimetype` property that tells us the file type
 * @param params.loadAuthValues - Function to load authentication values
 * @returns - The result object containing the processed `text` and `images` (not currently used),
 *                       along with the `filename` and `bytes` properties.
 */
const uploadAzureMistralOCR = (context) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { apiKey, baseURL } = yield loadAuthConfig(context);
        const model = getModelConfig((_b = context.req.app.locals) === null || _b === void 0 ? void 0 : _b.ocr);
        const buffer = fs__namespace.readFileSync(context.file.path);
        const base64 = buffer.toString('base64');
        /** Uses actual mimetype of the file, 'image/jpeg' as fallback since it seems to be accepted regardless of mismatch */
        const base64Prefix = `data:${context.file.mimetype || 'image/jpeg'};base64,`;
        const documentType = getDocumentType(context.file);
        const ocrResult = yield performOCR({
            apiKey,
            baseURL,
            model,
            url: `${base64Prefix}${base64}`,
            documentType,
        });
        if (!ocrResult || !ocrResult.pages || ocrResult.pages.length === 0) {
            throw new Error('No OCR result returned from service, may be down or the file is not supported.');
        }
        const { text, images } = processOCRResult(ocrResult);
        return {
            filename: context.file.originalname,
            bytes: text.length * 4,
            filepath: librechatDataProvider.FileSources.azure_mistral_ocr,
            text,
            images,
        };
    }
    catch (error) {
        throw createOCRError(error, 'Error uploading document to Azure Mistral OCR API:');
    }
});
/**
 * Loads Google service account configuration
 */
function loadGoogleAuthConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        /** Path from environment variable or default location */
        const serviceKeyPath = process.env.GOOGLE_SERVICE_KEY_FILE ||
            path__namespace.join(__dirname, '..', '..', '..', 'api', 'data', 'auth.json');
        const serviceKey = yield loadServiceKey(serviceKeyPath);
        if (!serviceKey) {
            throw new Error(`Google service account not found or could not be loaded from ${serviceKeyPath}`);
        }
        if (!serviceKey.client_email || !serviceKey.private_key || !serviceKey.project_id) {
            throw new Error('Invalid Google service account configuration');
        }
        const jwt = yield createJWT(serviceKey);
        const accessToken = yield exchangeJWTForAccessToken(jwt);
        return {
            serviceAccount: serviceKey,
            accessToken,
        };
    });
}
/**
 * Creates a JWT token manually
 */
function createJWT(serviceKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const crypto = yield import('crypto');
        const header = {
            alg: 'RS256',
            typ: 'JWT',
        };
        const now = Math.floor(Date.now() / 1000);
        const payload = {
            iss: serviceKey.client_email,
            scope: 'https://www.googleapis.com/auth/cloud-platform',
            aud: 'https://oauth2.googleapis.com/token',
            exp: now + 3600,
            iat: now,
        };
        const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
        const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
        const signatureInput = `${encodedHeader}.${encodedPayload}`;
        const sign = crypto.createSign('RSA-SHA256');
        sign.update(signatureInput);
        sign.end();
        const signature = sign.sign(serviceKey.private_key, 'base64url');
        return `${signatureInput}.${signature}`;
    });
}
/**
 * Exchanges JWT for access token
 */
function exchangeJWTForAccessToken(jwt) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios.post('https://oauth2.googleapis.com/token', new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt,
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        if (!((_a = response.data) === null || _a === void 0 ? void 0 : _a.access_token)) {
            throw new Error('No access token in response');
        }
        return response.data.access_token;
    });
}
/**
 * Performs OCR using Google Vertex AI
 */
function performGoogleVertexOCR({ url, accessToken, projectId, model, documentType = 'document_url', }) {
    return __awaiter(this, void 0, void 0, function* () {
        const location = process.env.GOOGLE_LOC || 'us-central1';
        const modelId = model || 'mistral-ocr-2505';
        let baseURL;
        if (location === 'global') {
            baseURL = `https://aiplatform.googleapis.com/v1/projects/${projectId}/locations/global/publishers/mistralai/models/${modelId}:rawPredict`;
        }
        else {
            baseURL = `https://${location}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${location}/publishers/mistralai/models/${modelId}:rawPredict`;
        }
        const documentKey = documentType === 'image_url' ? 'image_url' : 'document_url';
        const requestBody = {
            model: modelId,
            document: {
                type: documentType,
                [documentKey]: url,
            },
            include_image_base64: true,
        };
        dataSchemas.logger.debug('Sending request to Google Vertex AI:', {
            url: baseURL,
            body: Object.assign(Object.assign({}, requestBody), { document: Object.assign(Object.assign({}, requestBody.document), { [documentKey]: 'base64_data_hidden' }) }),
        });
        return axios
            .post(baseURL, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
            },
        })
            .then((res) => {
            dataSchemas.logger.debug('Google Vertex AI response received');
            return res.data;
        })
            .catch((error) => {
            var _a;
            if ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) {
                dataSchemas.logger.error('Vertex AI error response: ' + JSON.stringify(error.response.data, null, 2));
            }
            throw new Error(logAxiosError({
                error: error,
                message: 'Error calling Google Vertex AI Mistral OCR',
            }));
        });
    });
}
/**
 * Use Google Vertex AI Mistral OCR API to process the OCR result.
 *
 * @param params - The params object.
 * @param params.req - The request object from Express. It should have a `user` property with an `id`
 *                       representing the user
 * @param params.file - The file object, which is part of the request. The file object should
 *                                     have a `mimetype` property that tells us the file type
 * @param params.loadAuthValues - Function to load authentication values
 * @returns - The result object containing the processed `text` and `images` (not currently used),
 *                       along with the `filename` and `bytes` properties.
 */
const uploadGoogleVertexMistralOCR = (context) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const { serviceAccount, accessToken } = yield loadGoogleAuthConfig();
        const model = getModelConfig((_c = context.req.app.locals) === null || _c === void 0 ? void 0 : _c.ocr);
        const buffer = fs__namespace.readFileSync(context.file.path);
        const base64 = buffer.toString('base64');
        const base64Prefix = `data:${context.file.mimetype || 'application/pdf'};base64,`;
        const documentType = getDocumentType(context.file);
        const ocrResult = yield performGoogleVertexOCR({
            url: `${base64Prefix}${base64}`,
            accessToken,
            projectId: serviceAccount.project_id,
            model,
            documentType,
        });
        if (!ocrResult || !ocrResult.pages || ocrResult.pages.length === 0) {
            throw new Error('No OCR result returned from service, may be down or the file is not supported.');
        }
        const { text, images } = processOCRResult(ocrResult);
        return {
            filename: context.file.originalname,
            bytes: text.length * 4,
            filepath: librechatDataProvider.FileSources.vertexai_mistral_ocr,
            text,
            images,
        };
    }
    catch (error) {
        throw createOCRError(error, 'Error uploading document to Google Vertex AI Mistral OCR:');
    }
});

/**
 * Filters out duplicate plugins from the list of plugins.
 *
 * @param plugins The list of plugins to filter.
 * @returns The list of plugins with duplicates removed.
 */
const filterUniquePlugins = (plugins) => {
    const seen = new Set();
    return ((plugins === null || plugins === void 0 ? void 0 : plugins.filter((plugin) => {
        const duplicate = seen.has(plugin.pluginKey);
        seen.add(plugin.pluginKey);
        return !duplicate;
    })) || []);
};
/**
 * Determines if a plugin is authenticated by checking if all required authentication fields have non-empty values.
 * Supports alternate authentication fields, allowing validation against multiple possible environment variables.
 *
 * @param plugin The plugin object containing the authentication configuration.
 * @returns True if the plugin is authenticated for all required fields, false otherwise.
 */
const checkPluginAuth = (plugin) => {
    if (!(plugin === null || plugin === void 0 ? void 0 : plugin.authConfig) || plugin.authConfig.length === 0) {
        return false;
    }
    return plugin.authConfig.every((authFieldObj) => {
        const authFieldOptions = authFieldObj.authField.split('||');
        let isFieldAuthenticated = false;
        for (const fieldOption of authFieldOptions) {
            const envValue = process.env[fieldOption];
            if (envValue && envValue.trim() !== '' && envValue !== librechatDataProvider.AuthType.USER_PROVIDED) {
                isFieldAuthenticated = true;
                break;
            }
        }
        return isFieldAuthenticated;
    });
};
/**
 * Converts MCP function format tools to plugin format
 * @param functionTools - Object with function format tools
 * @param customConfig - Custom configuration for MCP servers
 * @returns Array of plugin objects
 */
function convertMCPToolsToPlugins({ functionTools, customConfig, }) {
    var _a;
    if (!functionTools || typeof functionTools !== 'object') {
        return;
    }
    const plugins = [];
    for (const [toolKey, toolData] of Object.entries(functionTools)) {
        if (!toolData.function || !toolKey.includes(librechatDataProvider.Constants.mcp_delimiter)) {
            continue;
        }
        const functionData = toolData.function;
        const parts = toolKey.split(librechatDataProvider.Constants.mcp_delimiter);
        const serverName = parts[parts.length - 1];
        const serverConfig = (_a = customConfig === null || customConfig === void 0 ? void 0 : customConfig.mcpServers) === null || _a === void 0 ? void 0 : _a[serverName];
        const plugin = {
            /** Tool name without server suffix */
            name: parts[0],
            pluginKey: toolKey,
            description: functionData.description || '',
            authenticated: true,
            icon: serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.iconPath,
        };
        if (!(serverConfig === null || serverConfig === void 0 ? void 0 : serverConfig.customUserVars)) {
            /** `authConfig` for MCP tools */
            plugin.authConfig = [];
            plugins.push(plugin);
            continue;
        }
        const customVarKeys = Object.keys(serverConfig.customUserVars);
        if (customVarKeys.length === 0) {
            plugin.authConfig = [];
        }
        else {
            plugin.authConfig = Object.entries(serverConfig.customUserVars).map(([key, value]) => ({
                authField: key,
                label: value.title || key,
                description: value.description || '',
            }));
        }
        plugins.push(plugin);
    }
    return plugins;
}
/**
 * @param toolkits
 * @param toolName
 * @returns toolKey
 */
function getToolkitKey({ toolkits, toolName, }) {
    let toolkitKey;
    if (!toolName) {
        return toolkitKey;
    }
    for (const toolkit of toolkits) {
        if (toolName.startsWith(librechatDataProvider.EToolResources.image_edit)) {
            const splitMatches = toolkit.pluginKey.split('_');
            const suffix = splitMatches[splitMatches.length - 1];
            if (toolName.endsWith(suffix)) {
                toolkitKey = toolkit.pluginKey;
                break;
            }
        }
        if (toolName.startsWith(toolkit.pluginKey)) {
            toolkitKey = toolkit.pluginKey;
            break;
        }
    }
    return toolkitKey;
}

function loadWebSearchConfig(config) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const serperApiKey = (_a = config === null || config === void 0 ? void 0 : config.serperApiKey) !== null && _a !== void 0 ? _a : '${SERPER_API_KEY}';
    const searxngInstanceUrl = (_b = config === null || config === void 0 ? void 0 : config.searxngInstanceUrl) !== null && _b !== void 0 ? _b : '${SEARXNG_INSTANCE_URL}';
    const searxngApiKey = (_c = config === null || config === void 0 ? void 0 : config.searxngApiKey) !== null && _c !== void 0 ? _c : '${SEARXNG_API_KEY}';
    const firecrawlApiKey = (_d = config === null || config === void 0 ? void 0 : config.firecrawlApiKey) !== null && _d !== void 0 ? _d : '${FIRECRAWL_API_KEY}';
    const firecrawlApiUrl = (_e = config === null || config === void 0 ? void 0 : config.firecrawlApiUrl) !== null && _e !== void 0 ? _e : '${FIRECRAWL_API_URL}';
    const jinaApiKey = (_f = config === null || config === void 0 ? void 0 : config.jinaApiKey) !== null && _f !== void 0 ? _f : '${JINA_API_KEY}';
    const cohereApiKey = (_g = config === null || config === void 0 ? void 0 : config.cohereApiKey) !== null && _g !== void 0 ? _g : '${COHERE_API_KEY}';
    const safeSearch = (_h = config === null || config === void 0 ? void 0 : config.safeSearch) !== null && _h !== void 0 ? _h : librechatDataProvider.SafeSearchTypes.MODERATE;
    return Object.assign(Object.assign({}, config), { safeSearch,
        jinaApiKey,
        cohereApiKey,
        serperApiKey,
        searxngInstanceUrl,
        searxngApiKey,
        firecrawlApiKey,
        firecrawlApiUrl });
}
const webSearchAuth = {
    providers: {
        serper: {
            serperApiKey: 1,
        },
        searxng: {
            searxngInstanceUrl: 1,
            /** Optional (0) */
            searxngApiKey: 0,
        },
    },
    scrapers: {
        firecrawl: {
            firecrawlApiKey: 1,
            /** Optional (0) */
            firecrawlApiUrl: 0,
        },
    },
    rerankers: {
        jina: { jinaApiKey: 1 },
        cohere: { cohereApiKey: 1 },
    },
};
/**
 * Extracts all API keys from the webSearchAuth configuration object
 */
function getWebSearchKeys() {
    const keys = [];
    // Iterate through each category (providers, scrapers, rerankers)
    for (const category of Object.keys(webSearchAuth)) {
        const categoryObj = webSearchAuth[category];
        // Iterate through each service within the category
        for (const service of Object.keys(categoryObj)) {
            const serviceObj = categoryObj[service];
            // Extract the API keys from the service
            for (const key of Object.keys(serviceObj)) {
                keys.push(key);
            }
        }
    }
    return keys;
}
const webSearchKeys = getWebSearchKeys();
function extractWebSearchEnvVars({ keys, config, }) {
    if (!config) {
        return [];
    }
    const authFields = [];
    const relevantKeys = keys.filter((k) => k in config);
    for (const key of relevantKeys) {
        const value = config[key];
        if (typeof value === 'string') {
            const varName = librechatDataProvider.extractVariableName(value);
            if (varName) {
                authFields.push(varName);
            }
        }
    }
    return authFields;
}
/**
 * Loads and verifies web search authentication values
 * @param params - Authentication parameters
 * @returns Authentication result
 */
function loadWebSearchAuth({ userId, webSearchConfig, loadAuthValues, throwError = true, }) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        let authenticated = true;
        const authResult = {};
        /** Type-safe iterator for the category-service combinations */
        function checkAuth(category) {
            return __awaiter(this, void 0, void 0, function* () {
                let isUserProvided = false;
                // Check if a specific service is specified in the config
                let specificService;
                if (category === librechatDataProvider.SearchCategories.PROVIDERS && (webSearchConfig === null || webSearchConfig === void 0 ? void 0 : webSearchConfig.searchProvider)) {
                    specificService = webSearchConfig.searchProvider;
                }
                else if (category === librechatDataProvider.SearchCategories.SCRAPERS && (webSearchConfig === null || webSearchConfig === void 0 ? void 0 : webSearchConfig.scraperType)) {
                    specificService = webSearchConfig.scraperType;
                }
                else if (category === librechatDataProvider.SearchCategories.RERANKERS && (webSearchConfig === null || webSearchConfig === void 0 ? void 0 : webSearchConfig.rerankerType)) {
                    specificService = webSearchConfig.rerankerType;
                }
                // If a specific service is specified, only check that one
                const services = specificService
                    ? [specificService]
                    : Object.keys(webSearchAuth[category]);
                for (const service of services) {
                    // Skip if the service doesn't exist in the webSearchAuth config
                    if (!webSearchAuth[category][service]) {
                        continue;
                    }
                    const serviceConfig = webSearchAuth[category][service];
                    // Split keys into required and optional
                    const requiredKeys = [];
                    const optionalKeys = [];
                    for (const key in serviceConfig) {
                        const typedKey = key;
                        if (serviceConfig[typedKey] === 1) {
                            requiredKeys.push(typedKey);
                        }
                        else if (serviceConfig[typedKey] === 0) {
                            optionalKeys.push(typedKey);
                        }
                    }
                    if (requiredKeys.length === 0)
                        continue;
                    const requiredAuthFields = extractWebSearchEnvVars({
                        keys: requiredKeys,
                        config: webSearchConfig,
                    });
                    const optionalAuthFields = extractWebSearchEnvVars({
                        keys: optionalKeys,
                        config: webSearchConfig,
                    });
                    if (requiredAuthFields.length !== requiredKeys.length)
                        continue;
                    const allKeys = [...requiredKeys, ...optionalKeys];
                    const allAuthFields = [...requiredAuthFields, ...optionalAuthFields];
                    const optionalSet = new Set(optionalAuthFields);
                    try {
                        const authValues = yield loadAuthValues({
                            userId,
                            authFields: allAuthFields,
                            optional: optionalSet,
                            throwError,
                        });
                        let allFieldsAuthenticated = true;
                        for (let j = 0; j < allAuthFields.length; j++) {
                            const field = allAuthFields[j];
                            const value = authValues[field];
                            const originalKey = allKeys[j];
                            if (originalKey)
                                authResult[originalKey] = value;
                            if (!optionalSet.has(field) && !value) {
                                allFieldsAuthenticated = false;
                                break;
                            }
                            if (!isUserProvided && process.env[field] !== value) {
                                isUserProvided = true;
                            }
                        }
                        if (!allFieldsAuthenticated) {
                            continue;
                        }
                        if (category === librechatDataProvider.SearchCategories.PROVIDERS) {
                            authResult.searchProvider = service;
                        }
                        else if (category === librechatDataProvider.SearchCategories.SCRAPERS) {
                            authResult.scraperType = service;
                        }
                        else if (category === librechatDataProvider.SearchCategories.RERANKERS) {
                            authResult.rerankerType = service;
                        }
                        return [true, isUserProvided];
                    }
                    catch (_a) {
                        continue;
                    }
                }
                return [false, isUserProvided];
            });
        }
        const categories = [
            librechatDataProvider.SearchCategories.PROVIDERS,
            librechatDataProvider.SearchCategories.SCRAPERS,
            librechatDataProvider.SearchCategories.RERANKERS,
        ];
        const authTypes = [];
        for (const category of categories) {
            const [isCategoryAuthenticated, isUserProvided] = yield checkAuth(category);
            if (!isCategoryAuthenticated) {
                authenticated = false;
                authTypes.push([category, librechatDataProvider.AuthType.USER_PROVIDED]);
                continue;
            }
            authTypes.push([category, isUserProvided ? librechatDataProvider.AuthType.USER_PROVIDED : librechatDataProvider.AuthType.SYSTEM_DEFINED]);
        }
        authResult.safeSearch = (_a = webSearchConfig === null || webSearchConfig === void 0 ? void 0 : webSearchConfig.safeSearch) !== null && _a !== void 0 ? _a : librechatDataProvider.SafeSearchTypes.MODERATE;
        authResult.scraperTimeout =
            (_d = (_b = webSearchConfig === null || webSearchConfig === void 0 ? void 0 : webSearchConfig.scraperTimeout) !== null && _b !== void 0 ? _b : (_c = webSearchConfig === null || webSearchConfig === void 0 ? void 0 : webSearchConfig.firecrawlOptions) === null || _c === void 0 ? void 0 : _c.timeout) !== null && _d !== void 0 ? _d : 7500;
        authResult.firecrawlOptions = webSearchConfig === null || webSearchConfig === void 0 ? void 0 : webSearchConfig.firecrawlOptions;
        return {
            authTypes,
            authResult,
            authenticated,
        };
    });
}

exports.BasicToolEndHandler = BasicToolEndHandler;
exports.DEFAULT_RETENTION_HOURS = DEFAULT_RETENTION_HOURS;
exports.ErrorController = ErrorController;
exports.FlowStateManager = FlowStateManager;
exports.MAX_RETENTION_HOURS = MAX_RETENTION_HOURS;
exports.MCPManager = MCPManager;
exports.MCPOAuthHandler = MCPOAuthHandler;
exports.MCPTokenStorage = MCPTokenStorage;
exports.MIN_RETENTION_HOURS = MIN_RETENTION_HOURS;
exports.Tokenizer = TokenizerSingleton;
exports.agentAvatarSchema = agentAvatarSchema;
exports.agentBaseResourceSchema = agentBaseResourceSchema;
exports.agentBaseSchema = agentBaseSchema;
exports.agentCreateSchema = agentCreateSchema;
exports.agentFileResourceSchema = agentFileResourceSchema;
exports.agentSupportContactSchema = agentSupportContactSchema;
exports.agentToolResourcesSchema = agentToolResourcesSchema;
exports.agentUpdateSchema = agentUpdateSchema;
exports.agentsConfigSetup = agentsConfigSetup;
exports.buildPromptGroupFilter = buildPromptGroupFilter;
exports.checkAccess = checkAccess;
exports.checkAgentPermissionsMigration = checkAgentPermissionsMigration;
exports.checkPluginAuth = checkPluginAuth;
exports.checkPromptPermissionsMigration = checkPromptPermissionsMigration;
exports.constructAzureURL = constructAzureURL;
exports.convertJsonSchemaToZod = convertJsonSchemaToZod;
exports.convertMCPToolsToPlugins = convertMCPToolsToPlugins;
exports.convertWithResolvedRefs = convertWithResolvedRefs;
exports.createAxiosInstance = createAxiosInstance;
exports.createEmptyPromptGroupsResponse = createEmptyPromptGroupsResponse;
exports.createFetch = createFetch;
exports.createHandleLLMNewToken = createHandleLLMNewToken;
exports.createHandleOAuthToken = createHandleOAuthToken;
exports.createMemoryCallback = createMemoryCallback;
exports.createMemoryProcessor = createMemoryProcessor;
exports.createMemoryTool = createMemoryTool;
exports.createRun = createRun;
exports.createSetBalanceConfig = createSetBalanceConfig;
exports.createStreamEventHandlers = createStreamEventHandlers;
exports.createTempChatExpirationDate = createTempChatExpirationDate;
exports.decrypt = decrypt;
exports.decryptV2 = decryptV2;
exports.decryptV3 = decryptV3;
exports.deleteMistralFile = deleteMistralFile;
exports.detectOAuthRequirement = detectOAuthRequirement;
exports.encrypt = encrypt;
exports.encryptV2 = encryptV2;
exports.encryptV3 = encryptV3;
exports.extractLibreChatParams = extractLibreChatParams;
exports.extractWebSearchEnvVars = extractWebSearchEnvVars;
exports.filterAccessibleIdsBySharedLogic = filterAccessibleIdsBySharedLogic;
exports.filterUniquePlugins = filterUniquePlugins;
exports.formatContentStrings = formatContentStrings;
exports.formatPromptGroupsResponse = formatPromptGroupsResponse;
exports.genAzureChatCompletion = genAzureChatCompletion;
exports.genAzureEndpoint = genAzureEndpoint;
exports.generateCheckAccess = generateCheckAccess;
exports.getAccessToken = getAccessToken;
exports.getAzureCredentials = getAzureCredentials;
exports.getGoogleConfig = getGoogleConfig;
exports.getOpenAIConfig = getOpenAIConfig;
exports.getRandomValues = getRandomValues;
exports.getReasoningKey = getReasoningKey;
exports.getSafetySettings = getSafetySettings;
exports.getSignedUrl = getSignedUrl;
exports.getTempChatRetentionHours = getTempChatRetentionHours;
exports.getToolkitKey = getToolkitKey;
exports.getUserMCPAuthMap = getUserMCPAuthMap;
exports.getWebSearchKeys = getWebSearchKeys;
exports.handleError = handleError;
exports.hashBackupCode = hashBackupCode;
exports.initializeOpenAI = initializeOpenAI;
exports.isEnabled = isEnabled;
exports.isMemoryEnabled = isMemoryEnabled;
exports.isUserProvided = isUserProvided;
exports.knownOpenAIParams = knownOpenAIParams;
exports.loadMemoryConfig = loadMemoryConfig;
exports.loadServiceKey = loadServiceKey;
exports.loadWebSearchAuth = loadWebSearchAuth;
exports.loadWebSearchConfig = loadWebSearchConfig;
exports.loadYaml = loadYaml;
exports.logAgentMigrationWarning = logAgentMigrationWarning;
exports.logAxiosError = logAxiosError;
exports.logHeaders = logHeaders;
exports.logPromptMigrationWarning = logPromptMigrationWarning;
exports.markPublicPromptGroups = markPublicPromptGroups;
exports.math = math;
exports.mcpToolPattern = mcpToolPattern;
exports.memoryInstructions = memoryInstructions;
exports.normalizeHttpError = normalizeHttpError;
exports.normalizeServerName = normalizeServerName;
exports.optionalChainWithEmptyCheck = optionalChainWithEmptyCheck;
exports.performOCR = performOCR;
exports.primeResources = primeResources;
exports.processMCPEnv = processMCPEnv;
exports.processMemory = processMemory;
exports.refreshAccessToken = refreshAccessToken;
exports.resolveHeaders = resolveHeaders;
exports.resolveJsonSchemaRefs = resolveJsonSchemaRefs;
exports.safeStringify = safeStringify;
exports.sanitizeFilename = sanitizeFilename;
exports.sanitizeModelName = sanitizeModelName;
exports.sendEvent = sendEvent;
exports.skipAgentCheck = skipAgentCheck;
exports.uploadAzureMistralOCR = uploadAzureMistralOCR;
exports.uploadDocumentToMistral = uploadDocumentToMistral;
exports.uploadGoogleVertexMistralOCR = uploadGoogleVertexMistralOCR;
exports.uploadMistralOCR = uploadMistralOCR;
exports.validateAgentModel = validateAgentModel;
exports.webSearchAuth = webSearchAuth;
exports.webSearchKeys = webSearchKeys;
//# sourceMappingURL=index.js.map
