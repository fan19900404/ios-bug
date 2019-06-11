function isIOS() {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
const iosBug = () => {
    if (isIOS()) {
        const el = document.querySelector('body');
        el.addEventListener('focusout', (e) => {
            const current = e.target;
            if (current.tagName === 'INPUT' || current.tagName === 'TEXTAREA') {
                document.body.scrollIntoViewIfNeeded(true);
            }
        }, true);
    }
};

export default iosBug;
export { iosBug };
//# sourceMappingURL=iosBug.es.js.map
