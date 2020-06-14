//can be implemented using array but push and front functions won't be O(1)
//this can be done using push O(1) and shiftO(n) operations in array
//or using unshift O(n) and pop (1) operations in array

//using doubly linked list to create queue with operations - push, front, peek, isEmpty
//can be done using array too, using head and tail to point to index of array where head is and where tail is

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push (val) {
        let node = new Node (val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length = 1;
            return;
        }
        let head = this.head;
        head.prev = node;
        node.next = head;
        this.head = node;
        this.length+=1;
    }
    front () {
        let tail = this.tail;
        if (!tail) {
            return;
        }
        if (!tail.prev) {
            this.head = null;
            this.tail = null;
            this.length = null;
            return;
        }
        let prev = tail.prev;
        prev.next = null;
        this.tail = prev;
        this.length-=1;
    }
    peek () {
        return this.tail.val;
    }
    isEmpty () {
        return this.length ? false:true
    }
    print () {
        let tail = this.tail;
        while (tail) {
            console.log (tail.val)
            tail = tail.prev;
        }
    }
}

// let myQueue = new Queue(); 
// myQueue.push (10);
// myQueue.push (20);
// myQueue.print();
// console.log ("####")
// myQueue.front();
// myQueue.print();
// console.log ("####")
// myQueue.front();
// myQueue.push (30);
// myQueue.push (40);
// myQueue.push (50);
// console.log (myQueue.peek());
// console.log ("####")
// myQueue.print();


