/*
Find the intersection of two sorted arrays.
OR in other words,
Given 2 sorted arrays, find all the elements which occur in both the arrays.

Example :

Input : 
    A : [1 2 3 3 4 5 6]
    B : [3 3 5]

Output : [3 3 5]

Input : 
    A : [1 2 3 3 4 5 6]
    B : [3 5]

Output : [3 5]
*/
module.exports = {
    //param A : array of integers
    //param B : array of integers
    //return a array of integers
    intersect: function (A, B) {
        let returnArr = [];
        let indexA = 0;
        let indexB = 0;

        if (!A.length && !B.length) {
            return returnArr;
        }
        while (indexA < A.length && indexB < B.length) {
            if (A[indexA] == B[indexB]) {
                returnArr.push(A[indexA]);
                indexA++;
                indexB++;
            }
            else if (A[indexA] < B[indexB]) {
                indexA++;
            }
            else {
                indexB++;
            }
        }
        return returnArr;
    }
};