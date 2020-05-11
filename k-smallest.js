/*
Find the kth smallest element in an unsorted array of non-negative integers.

Definition of kth smallest element

 kth smallest element is the minimum possible n such that there are at least k elements in the array <= n.
In other words, if the array A was sorted, then A[k - 1] ( k is 1 based, while the arrays are 0 based ) 
NOTE
You are not allowed to modify the array ( The array is read only ).
Try to do it using constant extra space.
*/
module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       kthsmallest : function(A, B){
           function quicksort (arr, start, end, k) {
               if (start > end) {
                   return -1;
               }
               if (start == end) {
                   return arr[start];
               }
               let index = partition (arr, start, end);
               if (index == k) {
                   return arr[k];
               }
               if (k>index) {
                   return quicksort (arr, index+1, end, k);    
               }
               else {
                   return quicksort (arr, start, index-1, k);
               }    
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
               }
               let swap = arr[i+1];
               arr[i+1] = pivot;
               arr[end] = swap;
               return i+1;
           }
           return quicksort (A, 0, A.length-1, B-1);
       }
   };
   