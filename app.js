import Node from "./node.js";
import prettyPrint from "./prettyPrint.js";
import Tree from "./tree.js";
import mergeSort from "./mergeSort.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let sortedArray = mergeSort(array);
const firstTree = new Tree();
firstTree.buildTree(sortedArray);
firstTree.array = sortedArray;
console.log(firstTree.array);
prettyPrint(firstTree.root);

function logTest(node) {
  console.log(node);
}
