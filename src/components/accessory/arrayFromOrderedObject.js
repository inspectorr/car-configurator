export default function arrayFromOrderedObject(obj) {
  const arr = [new Array(obj.length)];
  for (let key in obj) {
    let i;
    if (obj[key].order === undefined) {
      throw new Error('No "order" property in object');
    } else {
      i = obj[key].order;
    }
    arr[i] = Object.assign({}, obj[key]);
  }
  return arr;
}
