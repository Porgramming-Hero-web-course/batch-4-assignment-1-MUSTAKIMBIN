{
  //
  function removeDuplicates(nums: number[]): number[] {
    return nums.filter((num:number, idx:number) => nums.indexOf(num) === idx);
  }

//   const numbers = [2,2,3,5,6,3,3,8,8,9,10,1,10]
//   console.log(removeDuplicates(numbers));

  //
}
