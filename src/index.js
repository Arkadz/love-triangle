/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = preferences;
  arr.unshift(0);
  var count=0;
		for (let t=1; t<=arr.length; t++) {
			if (
				(arr[arr[arr[t]]] == t) && (arr[t]!=arr[arr[t]] && arr[arr[t]]!=arr[arr[arr[t]]])
				) {count++;}

      }
      if (count==0) {return 0;}
      return count/3;
};
