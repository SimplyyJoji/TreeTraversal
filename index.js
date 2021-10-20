
/*
Root- The top node in a tree
Child- A node directly connected to another node
Parent- A mode that has node below it
Leaf- A node with no children
Edge-The connecton line between
*/

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(item) {
    //Create variable for new node
      let newNode = new Node(item);
  //if the root is empty then the item is the root
      if (this.root === null ) {
        this.root = newNode;
        return this;
      }
    //curent equals the root 
      var current = this.root
      while(true) {
      if (item === current.item) return undefined;
      if (item < current.item) {
        if (current.left === null) {
          current.left = newNode;
          return this;
      }
        current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
        }
        current = current.right;
      } 
    }
  }
}
  


 

function bfs () {
  var node = this.root;
  var queue = [];
  var data = [];
  queue.push(node);
  while(queue.length) {
    node = queue.shift()
    data.push(node.value)
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return data;
}
function dfs() {
  var data = [];
  var current = this.root;
  function transverse (node) {
    data.push(node);
    if (node.left) transverse(node.left)
    if (node.right) transverse(node.right)
    }
    transverse(this.root)
    return data;
}
var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(2);
tree.insert(4);