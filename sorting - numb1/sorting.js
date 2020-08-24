function Sort(A) {
  var swapped,
    len = arr.length;
  console.log(len);
  var swap = 0;

  do {
    swapped = false;
    for (var i = 1; i < len; i++) {
      if (A[i - 1] > A[i]) {
        var x = A[i];
        A[i] = A[i - 1];
        A[i - 1] = x;
        swapped = true;
        swap += 1;
        console.log(String(swap) + ".", [arr[i - 1], arr[i]], "->", arr);
      }
    }
  } while (swapped);
}

var arr = [4, 9, 7, 5, 8, 9, 3];
Sort(arr);
