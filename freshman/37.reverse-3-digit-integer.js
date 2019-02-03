const log = console.log.bind('###')

const ensureEqual = (a, b, message) => {
    a !== b ? log(`${message}, (${a}) 不等于 (${b})`) : log('测试成功')
}

/**
 * @param number: A 3-digit number.
 * @return: Reversed number.
 */

// https://www.lintcode.com/problem/reverse-3-digit-integer/description

const reverseInteger = number => {
    number = number.toString()
    let num = [...number].filter(item => item !== '0')
    num = num.reverse().join('')
    return parseInt(num, 10)
}

const testreverseInteger = () => {
    ensureEqual(reverseInteger(900), 9, 'test 1')
    ensureEqual(reverseInteger(123), 321, 'test 2')
}

testreverseInteger()
