/* eslint-disable no-param-reassign */
import Node from './node.js';
import mergeSort from './mergeSort.js';

class Tree {
  constructor() {
    this.array = null;
    this.root = null;
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) {
      return null;
    }
    if (start === 0) {
      mergeSort(array);
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    this.root = node;
    return node;
  }

  insert(value) {
    const root = this.insertReccur(this.root, value);
  }

  insertReccur(root, value) {
    // when root == null, position for new node is found
    if (root === null) {
      root = new Node(value);
      return root;
    }

    // traverses nodes recursively, looks for closest value to attach
    // a new node to
    if (value < root.value) {
      root.left = this.insertReccur(root.left, value);
    } else if (value > root.value) {
      root.right = this.insertReccur(root.right, value);
    }
    return root;
  }

  deleteNode(value, root) {
    // target node, does not exist/tree is not created
    if (root === null) return;

    // looks for target node recursively
    if (value < root.value) {
      root.left = this.deleteNode(value, root.left);
      return root;
    } if (value > root.value) {
      root.right = this.deleteNode(value, root.right);
      return root;
    }

    // once target node is found with one child, checks which leaf is empty
    // child replaces the deleted target node
    if (root.left === null) {
      const temp = root.right;
      root = null;
      return temp;
    } if (root.right === null) {
      const temp = root.left;
      root = null;
      return temp;
    }

    // once target is found, and both children exist
    let targetNode = root;
    let replacement = root.right;
    // looks for the replacement node (which is always the last left leaf of
    // targetNode.right)
    while (replacement.left !== null) {
      targetNode = replacement;
      replacement = replacement.left;
    }

    if (targetNode !== root) {
      console.log(targetNode);
      targetNode.left = replacement.right;
    } else {
      targetNode.right = replacement.right;
    }

    root.value = replacement.value;
    replacement = null;
    return root;
  }

  findNode(value, root = this.root) {
    if (value === root.value) {
      console.log('found node: ');
      console.log(root);
      return root;
    }
    if (value < root.value) {
      root.left = this.findNode(value, root.left);
    } if (value > root.value) {
      root.right = this.findNode(value, root.right);
    }
    return root;
  }

  levelOrder(callback, root = this.root) {
    const queue = [];
    const result = [];
    if (!this.root) {
      return queue;
    }
    queue.push(root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (!callback) {
        result.push(currentNode.value);
      } else {
        callback(currentNode);
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    if (!callback) {
      return result;
    }
  }

  inOrder(callback, array = [], node = this.root) {
    if (node === null) return;
    if (!callback) {
      this.inOrder(null, array, node.left);
      array.push(node.value);
      this.inOrder(null, array, node.right);
    }
    if (callback) {
      this.inOrder(callback, null, node.left);
      callback(node);
      this.inOrder(callback, null, node.right);
    }
    return array;
  }

  preOrder(callback, array = [], node = this.root) {
    if (node === null) return;
    if (!callback) {
      array.push(node.value);
      this.preOrder(null, array, node.left);
      this.preOrder(null, array, node.right);
    }
    if (callback) {
      callback(node.value);
      this.preOrder(callback, null, node.left);
      this.preOrder(callback, null, node.right);
    }
    return array;
  }

  postOrder(callback, array = [], node = this.root) {
    if (node === null) return;
    if (!callback) {
      this.postOrder(null, array, node.left);
      this.postOrder(null, array, node.right);
      array.push(node.value);
    }
    if (callback) {
      this.postOrder(callback, null, node.left);
      this.postOrder(callback, null, node.right);
      callback(node);
    }
    return array;
  }

  height(node = this.root) {
    if (node === null) return 0;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    }
    return rightHeight + 1;
  }

  depth(target, node = this.root, counter = 0) {
    if (target === node.value) {
      console.log(counter);
      return counter;
    }
    if (target < node.value) {
      counter += 1;
      return this.depth(target, node.left, counter);
    }
    if (target > node.value) {
      counter += 1;
      return this.depth(target, node.right, counter);
    }
  }

  isBalanced() {
    if (this.root === null) return;
    const leftHeight = this.height(this.root.left);
    const rightHeight = this.height(this.root.right);

    if (leftHeight - rightHeight >= 2) {
      return false;
    }
    if (leftHeight - rightHeight <= -2) {
      return false;
    }
    return true;
  }

  rebalance() {
    let newRoot = this.buildTree(this.inOrder());
    this.root = newRoot;
    console.log(this.root);
  }
}

export default Tree;
