import prettyPrint from "./prettyPrint.js";
import Tree from "./tree.js";
import mergeSort from "./mergeSort.js";

function RNGArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const rng = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(rng);
  }
  return array;
}

let addArray = RNGArray(5, 101, 500);
const tree = new Tree();

tree.buildTree(mergeSort(RNGArray(10, 1, 100)));
prettyPrint(tree.root);
console.log(`balanced: ${tree.isBalanced()}`);
console.log(`levelOrder: ${tree.levelOrder()}`);
console.log(`inOrder: ${tree.inOrder()}`);
console.log(`preOrder: ${tree.preOrder()}`);
console.log(`postOrder: ${tree.postOrder()}`);
console.log('added 5 nodes');

for (let i = 0; i < addArray.length; i += 1) {
  tree.insert(addArray[i]);
}
prettyPrint(tree.root);
console.log(`balanced: ${tree.isBalanced()}`);
tree.rebalance();
prettyPrint(tree.root);
console.log(`balanced: ${tree.isBalanced()}`);
console.log(`balanced: ${tree.isBalanced()}`);
console.log(`levelOrder: ${tree.levelOrder()}`);
console.log(`inOrder: ${tree.inOrder()}`);
console.log(`preOrder: ${tree.preOrder()}`);
console.log(`postOrder: ${tree.postOrder()}`);
