/*Given an array of integers, every element appears twice except for one. Find that single one.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Input Format:

    First and only argument of input contains an integer array A
Output Format:

    return a single integer denoting single element
Constraints:

2 <= N <= 2 000 000  
0 <= A[i] <= INT_MAX
*/

module.exports = { 
    //param A : array of integers
    //return an integer
       singleNumber : function(A){
           function calculateXor (value, num) {
               return value^num;
           }
           let xorTillNow = 0;
           for (let i=0;i<A.length;i++) {
               xorTillNow = calculateXor (xorTillNow, A[i]);
           }
           return xorTillNow;
       }
   };   