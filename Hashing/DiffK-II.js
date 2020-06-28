/*
Given an array A of integers and another non negative integer k, find if there exists 2 indices i and j such that A[i] - A[j] = k, i != j.

Example :

Input :

A : [1 5 3]
k : 2
Output :

1
as 3 - 1 = 2

Return 0 / 1 for this problem.
*/
module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    diffPossible: function (A, B) {
        let map = {};
        map[A[0] + B] = 1;
        map[A[0] - B] = 1;
        for (let i = 1; i < A.length; i++) {
            let val = A[i];
            if (map[val] >= 0) {
                return 1;
            }
            map[val + B] = 1;
            map[val - B] = 1;
        }
        return 0;
    }
};