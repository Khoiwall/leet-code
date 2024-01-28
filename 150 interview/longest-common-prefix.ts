/**
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    

    Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
*/

function longestCommonPrefix(strs: string[]): string {
  let size = strs.length;

  if (size == 0) return "";

  if (size == 1) return strs[0];

  strs.sort();
  console.log(strs);
  let end = Math.min(strs[0].length, strs[size - 1].length);

  let i = 0;
  while (i < end && strs[0][i] == strs[size - 1][i]) i++;

  let pre = strs[0].substring(0, i);
  return pre;
}
