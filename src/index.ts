/**
 * 判断是否为IOS端
 */
function isIOS(): boolean {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
}

/** 解决input被顶上去，下不来的问题 */
export const iosBug = () => {
  if (isIOS()) {
    const el = document.querySelector('body') as HTMLElement;

    el.addEventListener(
      'focusout',
      (e) => {
        const current = e.target as any;
        if (current.tagName === 'INPUT' || current.tagName === 'TEXTAREA') {
          (document.body as any).scrollIntoViewIfNeeded(true);
        }
      },
      true,
    );
  }
};

export default iosBug;
