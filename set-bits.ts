function canSortArray(nums) {
	let numSets = [[nums[0]]];
	let ind = 0;
	for (let i = 1; i < nums.length; i++) {
		if (
			nums[i - 1].toString(2).replaceAll('0', '').length ==
			nums[i].toString(2).replaceAll('0', '').length
		) {
			numSets[ind].push(nums[i]);
		} else {
			ind++;
			numSets.push([nums[i]]);
		}
	}
	for (let i = 0; i < numSets.length; i++) {
		numSets[i].sort((a, b) => a - b);
	}
	for (let i = 1; i < numSets.length; i++) {
		if (numSets[i - 1][numSets[i - 1].length - 1] > numSets[i][0]) {
			return false;
		}
	}
	console.log(numSets);
	return true;
}
console.log(canSortArray([3, 16, 8, 4, 2]));
