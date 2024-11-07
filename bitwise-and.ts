function largestCombination(candidates: number[]): number {
  const maxLen = 24;
  const cands: string[] = candidates
    .map((c) => c.toString(2))
    .map((el) => el.padStart(maxLen, "0"));
  let sCands: string[] = cands;
  let invertedSCands = [];
  let maxCount = 1;
  for (let j = 0; j < maxLen; j++) {
    let sum = 0;
    for (let i = 0; i < cands.length; i++) {
      sum += +sCands[i][j];
    }
    maxCount = Math.max(maxCount, sum);
  }
  return maxCount;
}
