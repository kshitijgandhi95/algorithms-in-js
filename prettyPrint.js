/*Print concentric rectangular pattern in a 2d matrix.
Let us show you some examples to clarify what we mean.

Example 1:

Input: A = 4.
Output:

4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4 
Example 2:

Input: A = 3.
Output:

3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3 
The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.

You will be given A as an argument to the function you need to implement, and you need to return a 2D array.*/
module.exports = { 
    //param A : integer
    //return a array of array of integers
       prettyPrint : function(A){
           let arr = new Array(2*A-1).fill(0).map(() => new Array(2*A-1).fill(A));
           for (let i=A-1;i>=1;i--) {
               let upRowNum = A-i;
               let downRowNum = 2*A - upRowNum -2;
               arr[upRowNum].fill (i, A-i, downRowNum+1);
               arr[downRowNum].fill (i, A-i, downRowNum+1);
               for (let j=upRowNum; j<=downRowNum;j++) {
                   arr[j][upRowNum] = i;
               }
               for (let j=upRowNum; j<=downRowNum;j++) {
                   arr[j][downRowNum] = i;
               }
           }
           return arr;
       }
   };   