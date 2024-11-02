function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { getAsyncCode } from './scripts/async';
export var VWOScript = function VWOScript(_ref) {
  var accountId = _ref.accountId,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'ASYNC' : _ref$type,
    _ref$settingsTimeout = _ref.settingsTimeout,
    settingsTimeout = _ref$settingsTimeout === void 0 ? 2000 : _ref$settingsTimeout,
    _ref$hideElement = _ref.hideElement,
    hideElement = _ref$hideElement === void 0 ? 'body' : _ref$hideElement,
    _ref$hideElementStyle = _ref.hideElementStyle,
    hideElementStyle = _ref$hideElementStyle === void 0 ? 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important' : _ref$hideElementStyle,
    _ref$scriptAttributes = _ref.scriptAttributes,
    scriptAttributes = _ref$scriptAttributes === void 0 ? {} : _ref$scriptAttributes;
  var isAppDir = process.env.NEXT_RUNTIME === 'edge' || Boolean(process.env.NEXT_IS_APP_DIR);
  if (type === 'OSC') {
    return /*#__PURE__*/React.createElement("script", _extends({
      src: "https://dev.visualwebsiteoptimizer.com/lib/".concat(accountId, ".js")
    }, scriptAttributes));
  }
  var asyncCode = accountId ? getAsyncCode(accountId, {
    settingsTimeout: settingsTimeout,
    hideElement: hideElement,
    hideElementStyle: hideElementStyle
  }) : '';
  if (isAppDir) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("link", {
      rel: "preconnect",
      href: "https://dev.visualwebsiteoptimizer.com"
    }), /*#__PURE__*/React.createElement("script", {
      type: "text/javascript",
      id: "vwoCode",
      dangerouslySetInnerHTML: {
        __html: asyncCode
      }
    }));
  }

  // Page Router implementation
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("link", {
    rel: "preconnect",
    href: "https://dev.visualwebsiteoptimizer.com"
  })), /*#__PURE__*/React.createElement(Script, {
    id: "vwoCode",
    strategy: "beforeInteractive"
  }, asyncCode));
};