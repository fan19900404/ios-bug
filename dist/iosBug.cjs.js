'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isIOS() {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
var iosBug = function () {
    if (isIOS()) {
        var el = document.querySelector('body');
        el.addEventListener('focusout', function (e) {
            var current = e.target;
            if (current.tagName === 'INPUT' || current.tagName === 'TEXTAREA') {
                document.body.scrollIntoViewIfNeeded(true);
            }
        }, true);
    }
};

exports.iosBug = iosBug;
exports.default = iosBug;
//# sourceMappingURL=iosBug.cjs.js.map
