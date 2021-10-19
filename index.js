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