class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
    addNodeAtLast (val) {
        let node = new Node (val);
        if (!this.head) {
            this.head = node;
        }
        if (!this.tail) {
            this.tail = node;
        }
        else {
            let lastNode = this.tail;
            lastNode.next = node;
            this.tail = node;
        }
    }
    adNodeAtFront (val) {
        let node = new Node (val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } 
        else {
            let firstNode = this.head;
            node.next = firstNode;
            this.head = node;
        }
    }
    removeNodeFromFront () {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeNodeFromLast () {
        let node = this.head;
        if (!node) {
            return;
        }
        if (!node.next) {
            this.head = null;
        }
        while (!node.next) {
            node = node.next;
        }
        node.next = null;
    }
    removeNodeWithVal (val) {
        if (!this.head) {
            return;
        }
        let head = this.head;
        if (head.val == val) {
            if (head.next) {
                this.head = head.next;
            }
            else {
                this.head = null;
                this.tail = null;
            }
            
        }
        while (head.next) {
            if (head.next.val == val) {
                let nextNode = head.next;
                let nextToNextNode = nextNode.next;
                head.next = nextToNextNode;
                break;
            }
            head = head.next;
        }
    }
    insertAfterVal (nodeVal, val) {
        let node = new Node ();
        if (!this.head) {
            return;
        }
        let head = this.head;
        while (head) {
            if (head.val == nodeVal) {
                let nextNode = head.next;
                head.next = node;
                node.next = nextNode;
            }
            head = head.next;
        }
    }
}