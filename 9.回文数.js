/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.05%)
 * Total Accepted:    73.6K
 * Total Submissions: 131.3K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 */

// 操作字符串
var isPalindrome = function(x) {
  x = x.toString();
  return x === [...x].reverse().join('');
};

var isPalindrome = function(x) {
  // 负数不是回文数
  if (x < 0) return false;
  let tmp = x;
  let res = 0;
  while (tmp) {
    // 从右向左取数据
    res = res * 10 + tmp % 10;
    // js 的除法有坑，需注意
    tmp = parseInt(tmp / 10, 10);
  }
  return res === x;
}

