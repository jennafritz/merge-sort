function merge(arr1, arr2) {
  // type your code here
  let sorted = []
  let full = arr1.length + arr2.length

  while(sorted.length !== full){
    if(arr1.length === 0 && arr2.length > 0){
      return sorted = [...sorted, ...arr2]
    } else if(arr2.length === 0 && arr1.length > 0){
      return sorted = [...sorted, ...arr1]
    } 
    if(arr1[0] < arr2[0]){
      sorted.push(arr1[0])
      arr1.splice(0, 1)
    } else if(arr1[0] > arr2[0]){
      sorted.push(arr2[0])
      arr2.splice(0, 1)
    } else {
      sorted.push(arr1[0])
      sorted.push(arr2[0])
      arr1.splice(0, 1)
      arr2.splice(0, 1)
    }
  }

}

function mergeSort(arr) {
  // type your code here
  if(arr.length < 2){
    return arr
  }
  
  let middleIndex = Math.floor(arr.length / 2)
  
  let left = arr.slice(0, middleIndex)
  let right = arr.slice(middleIndex)

  return merge(mergeSort(left), mergeSort(right))
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: [0, 1, 2, 6]")
  // console.log("=>", merge([0, 2], [1, 6]));

  // console.log("Expecting: [-13, 1, 7, 12, 28, 96]")
  // console.log("=>", merge([12], [-13, 1, 7, 28, 96]));

  // console.log("Expecting: [-23, 5]")
  // console.log("=>", merge([], [-23, 5]));
  
  // console.log("Expecting: [0, 0, 2, 26")
  // console.log("=>", merge([0, 2], [0, 26]));

  // console.log("Expecting: []");
  // console.log("=>", mergeSort([]));

  // console.log("Expecting: [1, 2, 3, 4]");
  // console.log("=>", mergeSort([1, 2, 3, 4]));

  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("Expecting: [-100, -10, 5, 100]");
  console.log("=>", mergeSort([-10, 5, 100, -100]));

  console.log("Expecting: [6, 12, 15, 23, 50, 107]");
  console.log("=>", mergeSort([50, 107, 23, 12, 6, 15]));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  // console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
