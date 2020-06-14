// Given a string A denoting an expression. It contains the following operators ’+’, ‘-‘, ‘*’, ‘/’.

// Chech whether A has redundant braces or not.

// Return 1 if A has redundant braces, else return 0.

// Note: A will be always a valid expression.
// Input Format

// The only argument given is string A.
// Output Format

// Return 1 if string has redundant braces, else return 0.
// For Example

// Input 1:
//     A = "((a + b))"
// Output 1:
//     1
//     Explanation 1:
//         ((a + b)) has redundant braces so answer will be 1.

// Input 2:
//     A = "(a + (a + b))"
// Output 2:
//     0
//     Explanation 2:
//         (a + (a + b)) doesn't have have any redundant braces so answer will be 0.

module.exports = { 
    //param A : string
    //return an integer
       braces : function(A){
           let stack = [];
           let index = 0;
           let length = A.length;
           let i = 0;
           while (i<length) {
               let char = A.substr(i,1)
               if (char == "(") {
                   stack.push (char)
                   index++;
               }
               else if (char == ")") {
                   let ret = removeEle ()
                   if (ret == 1) {
                       return 1;
                   }
               }
               else if (char == "+" || char == "-" || char == "*" || char == "/" ){
                   if (stack[index-1] == "(") {
                       stack.push (char)
                       index++;
                   }
               }
               i++;
           }
           return 0;
           function removeEle () {
               if (stack[index-1] == "(") {
                   return 1;
               }
               else {
                   stack.pop();
                   stack.pop();
                   index-=2;
                   return 0;
               }
           }
       }
   };
   