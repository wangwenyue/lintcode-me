/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.31%)
 * Total Accepted:    48K
 * Total Submissions: 131.6K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const mapper = '({[';
  const res = [];
  for (p of s) {
    // 碰到左括号就 push 进去，右括号就开始检查
    if (mapper.includes(p)) {
      res.push(p);
    } else if (p === ')' && res.pop() !== '(') {
      return false;
    } else if (p === ']' && res.pop() !== '[') {
      return false;
    } else if (p === '}' && res.pop() !== '{') {
      return false;
    }
  }
  return res.length === 0;
};

