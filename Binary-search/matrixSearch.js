/*
Given a matrix of integers A of size N x M and an integer B.

Write an efficient algorithm that searches for integar B in matrix A.

This matrix A has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than or equal to the last integer of the previous row.
Return 1 if B is present in A, else return 0.

Note: Rows are numbered from top to bottom and columns are numbered from left to right.
Input Format

The first argument given is the integer matrix A.
The second argument given is the integer B.
Output Format

Return 1 if B is present in A, else return 0.
Constraints

1 <= N, M <= 1000
1 <= A[i][j], B <= 10^6
*/
module.exports = { 
    //param A : array of array of integers
    //param B : integer
    //return an integer
       searchMatrix : function(A, B) {
           function binarySearch (row, colStart, colEnd, B) {
               if (colStart>colEnd) {
                   return 0;
               }
               if (colStart==colEnd) {
                   if (row[colStart] == B) {
                       return 1;
                   }
                   return 0;
               }
               let mid = Math.floor ((colStart+colEnd)/2);
               if (row[mid] == B) {
                   return 1;
               }
               if (row[mid]<B) {
                   return binarySearch (row, mid+1, colEnd, B);
               }
               return binarySearch (row, colStart, mid-1, B);
           }
           function matrixBinarySearch (A, rowStart, rowEnd, colStart, colEnd, B) {
               if (rowStart>rowEnd) {
                   return 0;
               }
               if (rowStart == rowEnd) {
                   if (A[rowStart][colStart]<=B && A[rowStart][colEnd]>=B) {
                       return binarySearch(A[rowStart], colStart, colEnd, B);
                   }
                   return 0;
               }
               let midRow = Math.floor((rowStart + rowEnd)/2);
               // console.log ("MidRow ", midRow)
               
               if (A[midRow][colStart]>B) {
                   return matrixBinarySearch (A, rowStart, midRow-1, colStart, colEnd, B);
               }
               if (A[midRow][colEnd]<B) {
                   return matrixBinarySearch (A, midRow+1, rowEnd, colStart, colEnd, B);
               }
               return binarySearch (A[midRow], colStart, colEnd, B);
           }
           return matrixBinarySearch (A, 0, A.length-1, 0, A[0].length-1, B);
   
       }
   };   