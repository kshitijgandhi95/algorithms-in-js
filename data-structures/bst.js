class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor () {
        this.head = null;
    }
    addNode (val) {
        let node = new Node (val);
        if (this.head == null) {
            this.head = node;
            return;
        }
        let parent = this.findParent (val);
        if (parent.val < val) {
            parent.right = node;
        }
        else {
            parent.left = node;
        }
        return;
    }
    deleteNode (val) {
        let [parent, node, direction] = this.findNode(val);
        if (!node) {
            return;
        }
        return this.adjustNode (parent, node, direction)
    }
    adjustNode (parent, node, direction) {
        if (!node.left && !node.right) {
            if (parent) {
                parent[direction] = null
            }
            else {
                this.head = null;
            }
            return;
        }
        if (!node.left) {
            if (parent) {
                parent[direction] = node.right;
            }
            else {
                this.head = node.right;
            }
        }
        else if (!node.right) {
            if (parent) {
                parent[direction] = node.left;
            }
            else {
                this.head = node.left;
            }
        }
        else {
            let count = this.countNodes (node.left, 0);
            let [inOrderPredecessor, parentInOrder] = this.findInOrderPredecessor (node.left, 0, count, node);
            let leftNode = inOrderPredecessor.left;
            inOrderPredecessor.right = node.right;
            if (node.left != inOrderPredecessor) {
                inOrderPredecessor.left = node.left;
            }
            parentInOrder.right = leftNode;
            if (parent) {
                parent[direction] = inOrderPredecessor;
            }
            else {
                this.head = inOrderPredecessor
            }
        }
    }
    findInOrderPredecessor (node, currCount, count, parent) {
        let reqNode = null;
        if (!node) {
            return null;
        }
        if (node.left) {
            currCount = this.findInOrderPredecessor (node.left, currCount, count, node);
        }
        currCount+=1;
        if (currCount == count) {
            return [node, parent];
        }
        if (node.right) {
            currCount = this.findInOrderPredecessor (node.right, currCount, count, node);
        }
        return currCount;
    }
    countNodes (node, val) {
        if (node == null) {
            return val;
        }
        val+=1;
        val = this.countNodes (node.left, val);
        val = this.countNodes (node.right, val);
        return val
    }


    findNode (val) {
        let head = this.head;
        let parent = null;
        let direction = null;
        while (head) {
            if (head.val == val) {
                return [parent, head, direction];
            }
            parent = head;
            if (val > head.val) {
                direction = "right";
                head = head.right;
            }
            else {
                direction = "left";
                head = head.left;
            }
        }
        return [null, null, null];
    }
    findParent (val) {
        let pointer = this.head;
        while (true) {
            if (pointer.val < val && pointer.right == null) {
                return pointer;
            }  
            if (pointer.val >= val && pointer.left == null) {
                return pointer;
            }
            pointer = val > pointer.val ? pointer.right : pointer.left;
        }
    }
    printTree (head) {
        //pre-order traversal
        console.log (head.val);
        if (head.left != null) {
            this.printTree(head.left);
        }
        if (head.right != null) {
            this.printTree(head.right);
        }
    }
}
let bsTree = new Bst ();
bsTree.addNode (10);
bsTree.addNode (20);
bsTree.addNode (1);
bsTree.addNode (40);
bsTree.addNode (25);
bsTree.addNode (23);
bsTree.addNode (3);
bsTree.addNode (2);
bsTree.addNode (13);
bsTree.printTree(bsTree.head);
bsTree.deleteNode (20);
bsTree.printTree(bsTree.head);
bsTree.deleteNode (10);
bsTree.printTree(bsTree.head);
bsTree.deleteNode (2);
bsTree.printTree(bsTree.head);
bsTree.deleteNode (-1);
bsTree.printTree(bsTree.head);
bsTree.deleteNode (25);
bsTree.printTree(bsTree.head);