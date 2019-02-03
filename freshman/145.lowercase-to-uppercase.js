const log = console.log.bind('###')

const ensureEqual = (a, b, message) => {
  a !== b ? log(`${message}, (${a}) 不等于 (${b})`) : log('测试成功')
}

/**
 * @param character: a character
 * @return: a character
 */

const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const lowercaseToUppercase = character => {
  // write your code here
  for(let i = 0; i <= lower.length; i++) {
    if (lower[i] === character) return upper[i]
  }
}

const testlowercaseToUppercase = () => {
  ensureEqual(lowercaseToUppercase('a'), 'A', 'test 1')
  ensureEqual(lowercaseToUppercase('b'), 'B', 'test 2')
}

testlowercaseToUppercase()
