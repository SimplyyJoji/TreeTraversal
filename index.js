
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
  }


function insert(item) {
  let newNode = new Node(value);
  
  if (this.root.length < 1 ) {
    this.root = newNode;
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