export default function formatPrice(num) {
  let str = '' + num;
  let arr = [];
  while (str) {
    arr.unshift(str.slice(-3));
    str = str.slice(0, str.length-3);
  }
  return arr.join(' ');
}
