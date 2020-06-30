//BST is created using array
//BST cannot have delete function as that will involve lots of index rearrangement
class Bst {
    constructor () {
        this.tree = new Array(100).fill(null);
        this.tree[0] = null;
    }
    addNode (val) {
        let index = this.findInsetionIndex(val);
        this.tree[index] = val;
    }
    findInsetionIndex (val) {
        let index = 0;
        let findNode = false;
        while (!findNode) {
            if (this.tree[index] || this.tree[index] == 0) {
                if (val > this.tree[index]) {
                    index = 2*index + 2;
                }
                else {
                    index = 2*index + 1;
                }
            }
            else {
                return index;
            }
        }
    }
    isLeaf (index) {
        if ((this.tree[index] || this.tree[index] == 0) && !this.tree[2*index+1] && !this.tree[2*index+2]) {
            return true;
        }
        return false;
    }
    printTree () {
        console.log (this.tree)
    }
}

let bsTree = new Bst ();
// console.log (bsTree.printTree())
bsTree.addNode (10);
// console.log (bsTree.printTree())
bsTree.addNode (20);
// console.log (bsTree.printTree())
bsTree.addNode (1);
// console.log (bsTree.printTree())
bsTree.addNode (40);
// console.log (bsTree.printTree())
bsTree.addNode (25);
// console.log (bsTree.printTree())
bsTree.addNode (23);
// console.log (bsTree.printTree())
bsTree.addNode (3);
// console.log (bsTree.printTree())
bsTree.addNode (2);
// console.log (bsTree.printTree())
bsTree.addNode (13);
console.log (bsTree.printTree())