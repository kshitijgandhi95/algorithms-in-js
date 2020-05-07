/*
Given the array of strings A,
you need to find the longest string S which is the prefix of ALL the strings in the array.

Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1
and S2.

For Example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".



Input Format

The only argument given is an array of strings A.
Output Format

Return longest common prefix of all strings in A.
For Example

Input 1:
    A = ["abcdefgh", "aefghijk", "abcefgh"]
Output 1:
    "a"
    Explanation 1:
        Longest common prefix of all the strings is "a".

Input 2:
    A = ["abab", "ab", "abcd"];
Output 2:
    "ab"
    Explanation 2:
        Longest common prefix of all the strings is "ab".
*/        

module.exports = { 
    //param A : array of strings
    //return a strings
       longestCommonPrefix : function(A){
           function lcpTwoStrings (a, b) {
               let minLen = Math.max (a.length, b.length);
               let lcp = 0;
               for (let i=0;i<minLen;i++) {
                   if (a[i] == b[i]) {
                       lcp++;
                   }
                   else {
                       break;
                   }
               }
               return a.substr(0,lcp);
           }
           
           function binarySearchLcp (arr, start, end) {
               if (start == end) {
                   return arr[start];
               }
               if (end - start == 1) {
                   return lcpTwoStrings (arr[start], arr[end]);
               }
               let mid = Math.floor ((start+end)/2);
               let leftLcp = binarySearchLcp (arr, start, mid);
               let rightLcp = binarySearchLcp (arr, mid+1, end);
               return lcpTwoStrings (leftLcp, rightLcp);
           }
           
           return binarySearchLcp (A, 0, A.length-1);
       }
   };
   