function check(arr1, arr2) {
  const min = Math.min(...arr1);
  const max = Math.max(...arr1);
  let isTrue = false;
  arr2.forEach((element1) => {
    if (element1 > min && element1 < max) isTrue = true;
  });
  return isTrue;
}

function countPalindromicSubsequence(s) {
  let count = 0;
  const strings = {};
  for (let i = 0; i < s?.length; i++) {
    const char = s[i];
    if (strings[char]) {
      strings[char].push(i);
    } else {
      strings[char] = [i];
    }
  }
  for (let i = 0; i < Object.keys(strings)?.length; i++) {
    const char = Object.keys(strings)[i];
    if (strings[char]?.length >= 3) count += 1;
    for (let j = 0; j < Object.keys(strings)?.length; j++) {
      if (j != i) {
        const chartTmp = Object.keys(strings)[j];
        console.log(strings[char], strings[chartTmp]);
        if (check(strings[char], strings[chartTmp])) count += 1;
      }
    }
  }
  console.log(strings);
  return count;
}

console.log(countPalindromicSubsequence("bbcbaba"));
