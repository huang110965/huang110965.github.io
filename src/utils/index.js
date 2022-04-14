// 防抖
export function debounce (func, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.call(this, ...arguments);
      timer = null;
    }, delay)
  }
}
//flat 数组扁平化 方法1
export function flat (arr) {
  if (!Array.isArray(arr)) {
    return arr
  }
  const arrs = arr.map(item => {
    return Array.isArray(item) ? flat(item) : [item]
  })
  return [].concat(...arrs)
}//flat 数组扁平化 方法2
export function flatFor (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}