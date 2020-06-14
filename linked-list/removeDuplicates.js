// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
       deleteDuplicates : function(A){
           let head = A;
           while (head) {
               let val = head.data;
               let next = head.next;
               while (next && next.data == val) {
                   next = next.next;
               }
               head.next = next;
               head = head.next;
           }
           return A;
   
       }
   };