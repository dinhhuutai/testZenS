function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0]; // Chọn một phần tử làm pivot (thường là phần tử đầu tiên).
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Gọi đệ quy cho mảng con trái và mảng con phải.
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
  
    // Kết hợp mảng con trái, pivot, và mảng con phải để tạo mảng đã sắp xếp.
    return sortedLeft.concat(pivot, sortedRight);
  }


function miniMaxSum(arr) {
    // Sắp xếp mảng theo thứ tự tăng dần
    var arrTemp = quickSort(arr)

    // Tính tổng tối thiểu
    var minSum = arrTemp.slice(0, 4).reduce((a, b) => a + b, 0);

    // Tính tổng tối đa
    var maxSum = arrTemp.slice(1, 5).reduce((a, b) => a + b, 0);

    console.log(minSum, maxSum);
}

// Test với mảng đầu vào
var arr = [11, 6, 3, 4, 9];
miniMaxSum(arr);

