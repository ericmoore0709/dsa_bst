class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    // if the tree is empty, we set the root to this new node
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // root exists, compare and move
    let currNode = this.root;

    while (currNode) {
      if (newNode.val < currNode.val) {
        // no left child, newNode becomes left child
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }

        // left child exists. Set currNode and loop again
        currNode = currNode.left;
      }
      else {

        // no right child, newNode becomes right child
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }

        // right child exists. Set currNode and loop again 
        currNode = currNode.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {

    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (!current) return this;

    if (newNode.val < current.val) {
      // no left child, newNode becomes left child
      if (!current.left) {
        current.left = newNode;
        return this;
      }

      // left child exists. Set currNode and recurse
      return this.insertRecursively(val, current.left);
    }
    else {

      // no right child, newNode becomes right child
      if (!current.right) {
        current.right = newNode;
        return this;
      }

      // right child exists. Set currNode and recurse 
      return this.insertRecursively(val, current.right);

    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) return current;
      if (val < current.val) current = current.left;
      else current = current.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
    if (val === current.val) return current;
    if (val < current.val) return this.findRecursively(val, current.left);
    else return this.findRecursively(val, current.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    if (this.root) traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    if (this.root) traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }

    if (this.root) traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let queue = [];

    if (this.root) queue.push(this.root);

    while (queue.length) {
      let node = queue.shift();
      visited.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
