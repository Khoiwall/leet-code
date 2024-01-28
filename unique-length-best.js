function countPalindromicSubsequence(s) {
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const left = s.indexOf(char);
    const right = s.lastIndexOf(char);
    if (left < right) {
      for (const alph of chars) {
        const mid = s.indexOf(alph, left + 1);
        if (mid != -1 && mid < right) {
          count += 1;
        }
      }
    }
  }
  return count;
}
