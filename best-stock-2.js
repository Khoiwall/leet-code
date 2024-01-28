function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  let max = [];

  for (let i = 0; i < prices?.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    if (
      minPrice > prices[i] ||
      prices[i] < prices[i - 1] ||
      i + 1 == prices?.length
    ) {
      minPrice = prices[i];
      max.push(maxProfit);
      maxProfit = 0;
    }
    console.log(`Step ${i}: ${maxProfit}, ${minPrice}`);
  }
  console.log(max.reduce((partialSum, a) => partialSum + a, 0));
  return max.reduce((partialSum, a) => partialSum + a, 0);
}

maxProfit([1, 2, 3, 4, 5]);
