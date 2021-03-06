'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getReactFCInitializer = (onMessage) => {
  const originalCreateElement = React__default['default'].createElement;

  const onClick = (callback, onClick, event) => {
    if (typeof callback === 'function') {
      callback(event);
    }
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const propsWithTrackEvents = function (type, props) {
    if (props.track.type) {
      props.onClick = onClick.bind(
        null,
        () => {
          onMessage(props.track);
        },
        props.onClick || null,
        type,
      );
    }
    return props;
  };

  React__default['default'].createElement = function () {
    const args = Array.prototype.slice.call(arguments);
    let [type, props] = args;

    if (props && props.track) {
      props = propsWithTrackEvents(type, props || {});
    }

    return originalCreateElement.apply(null, args);
  };
};
const initReactTrack = ({ onMessage }) => getReactFCInitializer(onMessage);

exports.initReactTrack = initReactTrack;
//# sourceMappingURL=bundle.cjs.js.map
