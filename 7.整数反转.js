/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.46%)
 * Total Accepted:    85.1K
 * Total Submissions: 268.5K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    // 判断正负
    const sign =  x < 0 ? -1 : 1;
    // 转换成可遍历的字符串进行操作
    x = Math.abs(x).toString();
    // -1 * ‘009’ => -9, 所以不用手动去除前面的 '0'
    const res = sign * [...x].reverse().join('');
    // 超出范围的数字进行处理
    return res <= Math.pow(-2, 31) || res > Math.pow(2, 31) ? 0 : res;
};

