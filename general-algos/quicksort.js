function quicksort (arr, start, end) {
    if (start > end) {
        return;
    }
    if (start == end) {
        return;
    }
    let index = partition (arr, start, end);
    quicksort (arr, start, index-1);
    quicksort (arr, index+1, end);
}

function partition (arr, start, end) {
    let pivot = arr[end];
    let i = start-1;

    for (j = start; j<=end-1; j++) {
        if (arr[j] < pivot) {
            i++;
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
        console.log (arr);
    }
    let swap = arr[i+1];
    arr[i+1] = pivot;
    arr[end] = swap;
    return i+1;
}

let arr = [3,1,4,6,10,7]
quicksort (arr, 0, arr.length-1);
console.log (arr);