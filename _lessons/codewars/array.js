class GroupByDifference {
  constructor(nums){
    this.nums = nums;
    this.nums.sort((a,b) => {
      return a - b;
    });
    this.newRange = [];
  }

  find(range){
  	if(this.nums.length < 1) return [];

  	if((this.nums[1] - this.nums[0]) <= range) {
	  		this.newRange.push(this.nums[0]);
	  }
  	this.nums.forEach((item, i) => {
	  		if((this.nums[i+1] - item) <= range) {
	  			this.newRange.push(this.nums[i+1]);
	  		}
  	});

  	return this.newRange;
  }
}

console.log(new GroupByDifference([4,7,3,9,23,7]).find(6));
