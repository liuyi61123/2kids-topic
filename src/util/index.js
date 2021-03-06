
function findIndex(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

function judgeTypeFnCreator (type) {
  const toString = Object.prototype.toString
  return function isType (o) {
    return toString.call(o) === `[object ${type}]`
  }
}

const isFunc = judgeTypeFnCreator('Function')
const isUndef = judgeTypeFnCreator('Undefined')
const isArray = judgeTypeFnCreator('Array')
const isString = judgeTypeFnCreator('String')
const isObject = judgeTypeFnCreator('Object')
const isNumber = judgeTypeFnCreator('Number')

export {
  findIndex,
  isUndef,
  isFunc,
  isArray,
  isString,
  isObject,
  isNumber
}
